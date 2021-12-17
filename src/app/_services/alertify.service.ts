import { Injectable } from '@angular/core';
//@ts-ignore
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}
  confirm(title: string, message: string, okCallback: () => any) {
    alertify.confirm(
      title,
      message,
      function (e: any) {
        if (e) {
          okCallback();
        } else {
        }
      },
      oncancel
    );
  }

  success(message: string) {
    alertify.success(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  message(message: string) {
    alertify.message(message);
  }
}
