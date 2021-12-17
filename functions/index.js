const functions = require('firebase-functions');
const { Storage } = require('@google-cloud/storage');
const projectId = 'video-sharing-a57fa';
let gcs = new Storage({
    projectId
});
const os = require('os');
const path = require('path');
const spawn = require('child-process-promise').spawn;


exports.addLogo = functions.runWith({ memory: '4GB', timeoutSeconds: 540 }).storage.object().onFinalize(async event => {

    const bucket = event.bucket;
    const contentType = event.contentType;
    const filePath = event.name;
    console.log('File change detected, function execution started');
    if (path.basename(filePath).startsWith('resized-')) {
        console.log('We already renamed that file!');
        return;
    }
    const destBucket = gcs.bucket(bucket);
    const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
    const metadata = { contentType: contentType };
    const tmpLogoPath = path.join(os.tmpdir(), 'watermark.png');
    await destBucket.file('watermark.png').download({
        destination: tmpLogoPath
    })

    const newPath = path.join(os.tmpdir(), 'output.mp4')

    await destBucket.file(filePath).download({
        destination: tmpFilePath
    }).then(() => {
        console.log('entered spawn');
        var str = "overlay=10:10"
        return spawn('ffmpeg', ['-i', tmpFilePath, '-i', tmpLogoPath, '-filter_complex', str, newPath]);
    }).then(() => {
        console.log('chaning the name');
        return destBucket.upload(newPath, {
            destination: path.dirname(filePath) + '/resized-' + path.basename(filePath),
            metadata: metadata
        })
    });
    return;
})






