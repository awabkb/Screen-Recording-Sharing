(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\awabk\Upwork Projects\VideoSharing-master\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1W4x":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function W4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/user.service */
      "VITL");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(fb, auth, router, userService) {
          _classCallCheck(this, RegisterComponent);

          this.fb = fb;
          this.auth = auth;
          this.router = router;
          this.userService = userService;
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registerForm = this.fb.group({
              fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)])
            });
          }
        }, {
          key: "createUser",
          value: function createUser() {
            var _this = this;

            var _this$registerForm$va = this.registerForm.value,
                email = _this$registerForm$va.email,
                password = _this$registerForm$va.password,
                fullName = _this$registerForm$va.fullName;
            this.auth.createUserWithEmailAndPassword(email, password).then(function (res) {
              var _a;

              (_a = res.user) === null || _a === void 0 ? void 0 : _a.updateProfile({
                displayName: fullName
              })["catch"](function (err) {
                return console.log(err);
              });

              _this.router.navigate(['']);
            });
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 21,
        vars: 1,
        consts: [[1, "form", 3, "formGroup"], [2, "margin", "20px", "text-align", "center"], [1, "form-control"], ["matInput", "", "formControlName", "fullName", "type", "text"], ["matInput", "", "formControlName", "email", "type", "email"], ["matInput", "", "formControlName", "password", "type", "password"], [1, "form-footer"], ["mat-stroked-button", "", 3, "click"], ["routerLink", "/login"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Create a new Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Your Full Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Your email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Your password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_17_listener() {
              return ctx.createUser();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Create a user");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Go to login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["[_nghost-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n  }\n  .form[_ngcontent-%COMP%] {\n    width: 20rem;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .form-footer[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuZm9ybSB7XG4gICAgd2lkdGg6IDIwcmVtO1xuICB9XG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5mb3JtLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebaseConfig: {
          apiKey: 'AIzaSyCb4B0h1IKlWCeFnhoZSZqyshMymzz6FRs',
          authDomain: 'shareit-574a3.firebaseapp.com',
          projectId: 'shareit-574a3',
          storageBucket: 'shareit-574a3.appspot.com',
          messagingSenderId: '601309866455',
          appId: '1:601309866455:web:c4b66c3cdb524a81b1c392',
          measurementId: 'G-L42GFVNJ2G'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Jizn":
    /*!****************************************************!*\
      !*** ./src/app/recordings/recordings.component.ts ***!
      \****************************************************/

    /*! exports provided: RecordingsComponent */

    /***/
    function Jizn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecordingsComponent", function () {
        return RecordingsComponent;
      });
      /* harmony import */


      var _sharing_sharing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../sharing/sharing.component */
      "ojtv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/alertify.service */
      "zC1p");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/user.service */
      "VITL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var ngx_filesaver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-filesaver */
      "EnSh");

      function RecordingsComponent_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-grid-list", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "video", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordingsComponent_mat_card_1_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var video_r1 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.shareVideo(video_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Share");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordingsComponent_mat_card_1_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var video_r1 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.removeVideo(video_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Download ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var video_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r2 + 1, ". ", video_r1.Name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", video_r1.Url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("method", "GET")("fileName", "videoName.mp4")("url", video_r1.Url);
        }
      }

      var RecordingsComponent = /*#__PURE__*/function () {
        function RecordingsComponent(afStorage, alertify, userService, auth, dialog) {
          _classCallCheck(this, RecordingsComponent);

          this.afStorage = afStorage;
          this.alertify = alertify;
          this.userService = userService;
          this.auth = auth;
          this.dialog = dialog;
          this.videos = [];
        }

        _createClass(RecordingsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.auth.user.subscribe(function (u) {
              if (u) {
                _this2.afStorage.ref(u.uid).listAll().subscribe(function (res) {
                  res.items.forEach(function (i) {
                    i.getDownloadURL().then(function (url) {
                      var vid = {
                        Name: i.name,
                        Url: url,
                        FullPath: i.fullPath
                      };

                      _this2.videos.push(vid);
                    });
                  });
                  console.log(_this2.videos);
                });
              }
            }, function (err) {}, function () {
              console.log(_this2.videos);
            });
          }
        }, {
          key: "openVideo",
          value: function openVideo() {}
        }, {
          key: "removeVideo",
          value: function removeVideo(video) {
            var _this3 = this;

            this.alertify.confirm('Delete Video', "Are you sure you want to delete this video: \"".concat(video.Name, "\""), function () {
              _this3.afStorage.ref(video.FullPath)["delete"]().subscribe(function (res) {
                console.log(res);
              }, function (err) {
                _this3.alertify.error('Failed to Delete Video');
              }, function () {
                _this3.alertify.message('Video Deleted');

                _this3.videos.splice(_this3.videos.indexOf(video), 1);
              });
            });
          }
        }, {
          key: "shareVideo",
          value: function shareVideo(video) {
            var dialogRef = this.dialog.open(_sharing_sharing_component__WEBPACK_IMPORTED_MODULE_0__["SharingComponent"], {
              width: '550px',
              data: {
                videoURL: video.Url
              }
            });
          }
        }]);

        return RecordingsComponent;
      }();

      RecordingsComponent.ɵfac = function RecordingsComponent_Factory(t) {
        return new (t || RecordingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
      };

      RecordingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RecordingsComponent,
        selectors: [["app-recordings"]],
        decls: 2,
        vars: 1,
        consts: [[2, "margin", "20px", "max-width", "100%", "align-items", "center"], ["style", "margin-bottom: 10px;max-width: 1200px;", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "10px", "max-width", "1200px"], ["cols", "2", "rowHeight", "2:1"], ["id", "my-video", "controls", "", "width", "100%", "height", "auto", 3, "src"], [1, "btnsCon"], ["mat-flat-button", "", "color", "warn", 3, "click"], ["mat-stroked-button", "", 2, "color", "red", 3, "click"], ["mat-stroked-button", "", "fileSaver", "", 3, "method", "fileName", "url"]],
        template: function RecordingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecordingsComponent_mat_card_1_Template, 14, 6, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.videos);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridTile"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], ngx_filesaver__WEBPACK_IMPORTED_MODULE_11__["FileSaverDirective"]],
        styles: [".btnsCon[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  margin: 5px;\n  vertical-align: middle;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlY29yZGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6InJlY29yZGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuc0NvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogN3B4O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "Jjks":
    /*!**********************************************!*\
      !*** ./src/app/sidenav/sidenav.component.ts ***!
      \**********************************************/

    /*! exports provided: SidenavComponent */

    /***/
    function Jjks(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
        return SidenavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/alertify.service */
      "zC1p");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function SidenavComponent_mat_drawer_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_mat_drawer_1_Template_h2_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.route.navigate([""]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Screen Recording App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New Record");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Recordings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_mat_drawer_1_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SidenavComponent = /*#__PURE__*/function () {
        function SidenavComponent(route, auth, alertify) {
          _classCallCheck(this, SidenavComponent);

          this.route = route;
          this.auth = auth;
          this.alertify = alertify;
          this.loggedin = false;
        }

        _createClass(SidenavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.auth.user.subscribe(function (user) {
              console.log(user);

              if (user) {
                _this4.loggedin = true;
              }
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this5 = this;

            this.auth.signOut().then(function () {
              _this5.alertify.message('Logged out');

              _this5.route.navigate(['login']);

              _this5.loggedin = false;
            })["catch"](function (err) {
              return console.log('failed to logout');
            });
          }
        }]);

        return SidenavComponent;
      }();

      SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
        return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]));
      };

      SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidenavComponent,
        selectors: [["app-sidenav"]],
        decls: 4,
        vars: 1,
        consts: [[1, "example-container", 2, "height", "100%"], ["style", "width: 250px;", "mode", "side", "opened", "", 4, "ngIf"], ["mode", "side", "opened", "", 2, "width", "250px"], [2, "padding", "20px", "color", "#3a2b02", "cursor", "pointer", 3, "click"], ["mat-list-item", "", "routerLink", "profile"], ["mat-list-item", "", "routerLink", "record"], ["mat-list-item", "", "routerLink", "recordings"], [2, "position", "absolute", "bottom", "0"], ["mat-stroked-button", "", "id", "logout-btn", 3, "click"]],
        template: function SidenavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_mat_drawer_1_Template, 13, 0, "mat-drawer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedin);
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: ["#logout-btn[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InNpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nb3V0LWJ0bntcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMjBweDtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "QX6l":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function QX6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 0,
        vars: 0,
        template: function DashboardComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidenav/sidenav.component */
      "Jjks");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(auth) {
          _classCallCheck(this, AppComponent);

          this.auth = auth;
          this.title = 'VideoSharing';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidenav");
          }
        },
        directives: [_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__["SidenavComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "V+94":
    /*!******************************************!*\
      !*** ./src/app/reset/reset.component.ts ***!
      \******************************************/

    /*! exports provided: ResetComponent */

    /***/
    function V94(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetComponent", function () {
        return ResetComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/alertify.service */
      "zC1p");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ResetComponent = /*#__PURE__*/function () {
        function ResetComponent(auth, fb, alertify) {
          _classCallCheck(this, ResetComponent);

          this.auth = auth;
          this.fb = fb;
          this.alertify = alertify;
        }

        _createClass(ResetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.passwordReset = this.fb.group({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email)
            });
          }
        }, {
          key: "resetPasswordByEmail",
          value: function resetPasswordByEmail() {
            var _this6 = this;

            var email = this.passwordReset.controls['email'].value;
            this.auth.sendPasswordResetEmail(email).then(function (s) {
              console.log(s);

              _this6.alertify.message('Password reset email sent');
            })["catch"](function (err) {
              return _this6.alertify.error('Failed to send');
            });
          }
        }]);

        return ResetComponent;
      }();

      ResetComponent.ɵfac = function ResetComponent_Factory(t) {
        return new (t || ResetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]));
      };

      ResetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ResetComponent,
        selectors: [["app-reset"]],
        decls: 14,
        vars: 1,
        consts: [[3, "formGroup"], [2, "margin", "20px"], [1, "form-control"], ["matInput", "", "formControlName", "email", "type", "email"], [2, "margin-top", "20px", "text-align", "center"], ["mat-stroked-button", "", 3, "click"], ["href", "login"]],
        template: function ResetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Reset Password By Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Your Email Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetComponent_Template_button_click_9_listener() {
              return ctx.resetPasswordByEmail();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Send Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.passwordReset);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlc2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxjQUFBO0FBR0o7O0FBREU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUlKIiwiZmlsZSI6InJlc2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIC5mb3JtIHtcbiAgICB3aWR0aDogMjByZW07XG4gIH1cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmZvcm0tZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9Il19 */"]
      });
      /***/
    },

    /***/
    "VITL":
    /*!*******************************************!*\
      !*** ./src/app/_services/user.service.ts ***!
      \*******************************************/

    /*! exports provided: UserService */

    /***/
    function VITL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");

      var UserService = function UserService(auth, db) {
        var _this7 = this;

        _classCallCheck(this, UserService);

        this.auth = auth;
        this.db = db;
        this.auth.user.subscribe(function (u) {
          return _this7.user = u;
        });
      };

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "W6KJ":
    /*!**********************************************!*\
      !*** ./src/app/profile/profile.component.ts ***!
      \**********************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function W6KJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(fb, auth) {
          _classCallCheck(this, ProfileComponent);

          this.fb = fb;
          this.auth = auth;
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.auth.user.subscribe(function (user) {
              if (user) {
                console.log(user);
                _this8.user = user;

                _this8.profileForm.controls['fullName'].setValue(user === null || user === void 0 ? void 0 : user.displayName);

                _this8.profileForm.controls['email'].setValue(user === null || user === void 0 ? void 0 : user.email);
              }
            });
            this.profileForm = this.fb.group({
              fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)])
            });
          }
        }, {
          key: "updateProfile",
          value: function updateProfile() {
            var _this$profileForm$val = this.profileForm.value,
                email = _this$profileForm$val.email,
                password = _this$profileForm$val.password,
                fullName = _this$profileForm$val.fullName;
            this.auth.user.subscribe(function (user) {
              if (fullName) user === null || user === void 0 ? void 0 : user.updateProfile({
                displayName: fullName
              })["catch"](function (err) {
                return console.log(err);
              });
              if (email) user === null || user === void 0 ? void 0 : user.updateEmail(email)["catch"](function (err) {
                return console.log(err);
              });
              if (password) user === null || user === void 0 ? void 0 : user.updatePassword(password)["catch"](function (err) {
                return console.log(err);
              });
            });
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 12,
        vars: 1,
        consts: [[1, "form", 3, "formGroup"], [1, "form-control"], ["matInput", "", "formControlName", "fullName", "type", "text"], ["matInput", "", "formControlName", "email", "type", "text"], [1, "form-footer"], ["mat-stroked-button", "", 3, "click"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Your Full Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Your email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_10_listener() {
              return ctx.updateProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Update Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.profileForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFDRTtFQUNFLGNBQUE7QUFFSjs7QUFBRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBR0oiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIC5mb3JtIHtcbiAgICB3aWR0aDogMjByZW07XG4gIH1cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmZvcm0tZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9Il19 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/messaging */
      "XoYk");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _record_video_record_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./record-video/record-video.component */
      "lZDi");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./_services/user.service */
      "VITL");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./profile/profile.component */
      "W6KJ");
      /* harmony import */


      var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./sidenav/sidenav.component */
      "Jjks");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _services_alertify_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./_services/alertify.service */
      "zC1p");
      /* harmony import */


      var _reset_reset_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./reset/reset.component */
      "V+94");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _recordings_recordings_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./recordings/recordings.component */
      "Jizn");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var ngx_filesaver__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ngx-filesaver */
      "EnSh");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _sharing_sharing_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./sharing/sharing.component */
      "ojtv");
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      "UXJo");
      /* harmony import */


      var _video_page_video_page_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./video-page/video-page.component */
      "eU1E");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _services_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_25__["AlertifyService"]],
        imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"], _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_3__["AngularFireMessagingModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_30__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"], ngx_filesaver__WEBPACK_IMPORTED_MODULE_32__["FileSaverModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_35__["ClipboardModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _record_video_record_video_component__WEBPACK_IMPORTED_MODULE_13__["RecordVideoComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_22__["SidenavComponent"], _reset_reset_component__WEBPACK_IMPORTED_MODULE_26__["ResetComponent"], _recordings_recordings_component__WEBPACK_IMPORTED_MODULE_29__["RecordingsComponent"], _sharing_sharing_component__WEBPACK_IMPORTED_MODULE_34__["SharingComponent"], _video_page_video_page_component__WEBPACK_IMPORTED_MODULE_36__["VideoPageComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"], _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_3__["AngularFireMessagingModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_30__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"], ngx_filesaver__WEBPACK_IMPORTED_MODULE_32__["FileSaverModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_35__["ClipboardModule"]]
        });
      })();
      /***/

    },

    /***/
    "eU1E":
    /*!****************************************************!*\
      !*** ./src/app/video-page/video-page.component.ts ***!
      \****************************************************/

    /*! exports provided: VideoPageComponent */

    /***/
    function eU1E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoPageComponent", function () {
        return VideoPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");

      var VideoPageComponent = /*#__PURE__*/function () {
        function VideoPageComponent(db) {
          _classCallCheck(this, VideoPageComponent);

          this.db = db;
        }

        _createClass(VideoPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.db.database.ref('videos/').child(key).get().then(res=>{
            //   this.videoURL =res.val();
            // });
          }
        }]);

        return VideoPageComponent;
      }();

      VideoPageComponent.ɵfac = function VideoPageComponent_Factory(t) {
        return new (t || VideoPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]));
      };

      VideoPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VideoPageComponent,
        selectors: [["app-video-page"]],
        decls: 5,
        vars: 0,
        consts: [["id", "video", "controls", "", "autoplay", ""], ["video", ""]],
        template: function VideoPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "video-page works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "video", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "lZDi":
    /*!********************************************************!*\
      !*** ./src/app/record-video/record-video.component.ts ***!
      \********************************************************/

    /*! exports provided: RecordVideoComponent */

    /***/
    function lZDi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecordVideoComponent", function () {
        return RecordVideoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/user.service */
      "VITL");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/alertify.service */
      "zC1p");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var _c0 = ["video"];

      function RecordVideoComponent_img_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 14);
        }
      }

      function RecordVideoComponent_mat_progress_spinner_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-spinner", 15);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r2.color)("mode", ctx_r2.mode)("value", ctx_r2.percentage)("diameter", 30);
        }
      }

      var RecordVideoComponent = /*#__PURE__*/function () {
        function RecordVideoComponent(userService, afStorage, alertify, dialog, db) {
          _classCallCheck(this, RecordVideoComponent);

          this.userService = userService;
          this.afStorage = afStorage;
          this.alertify = alertify;
          this.dialog = dialog;
          this.db = db;
          this.recorded = false;
          this.clicked = false;
          this.save = false;
          this.recordedChunks = [];
          this.percentage = 0;
          this.color = 'warn';
          this.mode = 'determinate';
        }

        _createClass(RecordVideoComponent, [{
          key: "ngOnInit",
          // tslint:disable-next-line: typedef
          value: function ngOnInit() {}
        }, {
          key: "start",
          value: function start() {
            var _this9 = this;

            if (this.videoElement.src) {
              this.alertify.confirm('Recored Again', 'Unsaved recordings will be deleted', function () {
                _this9.startRecording();
              });
            } else {
              this.startRecording();
            }
          }
        }, {
          key: "stop",
          value: function stop() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var superBuffer;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('stop called');
                      this.clicked = false;
                      this.videoElement.muted = false;

                      if (this.videoElement.srcObject) {
                        // @ts-ignore
                        this.videoElement.srcObject.getTracks().forEach(function (track) {
                          track.stop();
                        });
                      }

                      this.videoElement.srcObject = null;
                      _context.next = 7;
                      return this.delay(300);

                    case 7:
                      this.save = true;
                      this.recorded = true;
                      superBuffer = new Blob(this.recordedChunks);
                      this.videoElement.src = window.URL.createObjectURL(superBuffer);

                    case 11:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // tslint:disable-next-line: typedef

        }, {
          key: "startRecording",
          value: function startRecording() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this10 = this;

              var audioTrack, videoTrack, stream;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      // @ts-ignore
                      navigator.mediaDevices.getDisplayMedia({
                        video: true
                      }).then(function (displayStream) {
                        displayStream.oninactive = function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var _a;

                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return (_a = document.getElementById('stop')) === null || _a === void 0 ? void 0 : _a.click();

                                  case 2:
                                    return _context2.abrupt("return");

                                  case 3:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));
                        };

                        var _displayStream$getVid = displayStream.getVideoTracks();

                        var _displayStream$getVid2 = _slicedToArray(_displayStream$getVid, 1);

                        videoTrack = _displayStream$getVid2[0];
                        navigator.mediaDevices.getUserMedia({
                          audio: true
                        }).then(function (audioStream) {
                          var _audioStream$getAudio = audioStream.getAudioTracks();

                          var _audioStream$getAudio2 = _slicedToArray(_audioStream$getAudio, 1);

                          audioTrack = _audioStream$getAudio2[0];
                          stream = new MediaStream([videoTrack, audioTrack]);
                          _this10.videoElement.srcObject = stream;
                          _this10.videoElement.muted = true;
                          var options = {
                            videoBitsPerSecond: 800000,
                            mimeType: 'video/webm; codecs=vp9;'
                          }; // @ts-ignore

                          var recorder = new MediaRecorder(stream, options);
                          recorder.ondataavailable = _this10.handleDataAvailable.bind(_this10);

                          _this10.delay(50).then(function () {
                            recorder.start();

                            _this10.waitTen().then(function () {
                              var _a;

                              (_a = document.getElementById('stop')) === null || _a === void 0 ? void 0 : _a.click();

                              _this10.alertify.warning('Max video lenght 10 min reached');
                            });

                            _this10.clicked = true;
                            recorder.onstop = _this10.stop.bind(_this10);
                          });
                        });
                      });

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          } // @ts-ignore
          // tslint:disable-next-line: typedef

        }, {
          key: "handleDataAvailable",
          value: function handleDataAvailable(event) {
            if (event.data.size > 0) {
              console.log(this.recordedChunks);
              this.recordedChunks.push(event.data);
            }
          }
        }, {
          key: "upload",
          value: function upload() {
            var _this11 = this;

            var metadata = {
              contentType: 'video/webm'
            };
            var superBuffer = new Blob(this.recordedChunks);
            var task = this.afStorage.ref(this.userService.user.uid).child(this.videoName).put(superBuffer, metadata);
            this.videoName = '';
            task.snapshotChanges().subscribe(function (s) {
              console.log(s);
              _this11.percentage = s.bytesTransferred / s.totalBytes * 100;
            }, function (err) {
              _this11.alertify.error('Uploading Failed');
            }, function (res) {
              _this11.alertify.success('Video Uploaded Successfuly');
            });
          }
        }, {
          key: "delay",
          value: function delay(ms) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });
          }
        }, {
          key: "waitTen",
          value: function waitTen() {
            return new Promise(function (resolve) {
              return setTimeout(resolve, 600000);
            });
          }
        }, {
          key: "videoElement",
          get: function get() {
            return this.videoElementRef.nativeElement;
          }
        }]);

        return RecordVideoComponent;
      }();

      RecordVideoComponent.ɵfac = function RecordVideoComponent_Factory(t) {
        return new (t || RecordVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]));
      };

      RecordVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RecordVideoComponent,
        selectors: [["app-record-video"]],
        viewQuery: function RecordVideoComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.videoElementRef = _t.first);
          }
        },
        decls: 22,
        vars: 6,
        consts: [[2, "margin-left", "20px"], [2, "display", "flex", "align-items", "center", "margin", "15px", "margin-left", "0"], ["mat-flat-button", "", "color", "warn", 2, "margin-right", "10px", 3, "disabled", "click"], ["mat-stroked-button", "", "id", "stop", 2, "margin-right", "10px", 3, "disabled", "click"], [2, "padding-top", "15px", "color", "rgb(85, 85, 8)", "font-family", "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"], ["id", "video", "controls", "", "autoplay", ""], ["video", ""], [2, "width", "400px", "margin-top", "10px"], [2, "display", "flex", "align-items", "center", "margin-left", "20px"], [1, "example-form-field"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", 2, "margin-left", "25px", 3, "disabled", "click"], ["style", "width: 32px; height: 32px ;margin-left: 15px;", "src", "../../assets/icons/check-circle-regular.svg", 4, "ngIf"], ["style", "margin-left: 15px", 3, "color", "mode", "value", "diameter", 4, "ngIf"], ["src", "../../assets/icons/check-circle-regular.svg", 2, "width", "32px", "height", "32px", "margin-left", "15px"], [2, "margin-left", "15px", 3, "color", "mode", "value", "diameter"]],
        template: function RecordVideoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordVideoComponent_Template_button_click_2_listener() {
              return ctx.start();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Start Recording ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordVideoComponent_Template_button_click_4_listener() {
              return ctx.stop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Stop Recoding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Max recording time is 10 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "video", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "To upload video enter name:");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Video Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RecordVideoComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.videoName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecordVideoComponent_Template_button_click_18_listener() {
              return ctx.upload();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " upload Video ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RecordVideoComponent_img_20_Template, 1, 0, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, RecordVideoComponent_mat_progress_spinner_21_Template, 1, 4, "mat-progress-spinner", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.clicked);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.clicked);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.videoName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.videoName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.percentage == 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.percentage != 100);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinner"]],
        styles: ["#video[_ngcontent-%COMP%] {\n    border: 1px solid #999;\n    width: 98%;\n    max-width: 860px;\n  }\nh4[_ngcontent-%COMP%]{\n  display: block;\n  font-size: 1.3em;\n  margin-top: 0.67em;\n}\n[hidden][_ngcontent-%COMP%] { display: none !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZC12aWRlby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7QUFDRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0EsV0FBVyx3QkFBd0IsQ0FBQyIsImZpbGUiOiJyZWNvcmQtdmlkZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN2aWRlbyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcbiAgICB3aWR0aDogOTglO1xuICAgIG1heC13aWR0aDogODYwcHg7XG4gIH1cbmg0e1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbWFyZ2luLXRvcDogMC42N2VtO1xufVxuW2hpZGRlbl0geyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7fVxuIl19 */"]
      });
      /***/
    },

    /***/
    "ojtv":
    /*!**********************************************!*\
      !*** ./src/app/sharing/sharing.component.ts ***!
      \**********************************************/

    /*! exports provided: SharingComponent */

    /***/
    function ojtv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharingComponent", function () {
        return SharingComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      "UXJo");

      var SharingComponent = /*#__PURE__*/function () {
        function SharingComponent(dialogRef, data) {
          _classCallCheck(this, SharingComponent);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(SharingComponent, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var encodedVideoURL = encodeURI(this.data.videoURL);
            var encodedVideoTitle = encodeURI(this.data.videoTitle);
            this.facebookURL = "https://www.facebook.com/sharer.php?u=".concat(encodedVideoURL);
            this.twitterURL = "https://twitter.com/share?url=".concat(encodedVideoURL, "&text=").concat(encodedVideoTitle);
            this.linkedinURL = "https://www.linkedin.com/shareArticle?url=".concat(encodedVideoURL, "&title=").concat(encodedVideoTitle);
            this.whatsappURL = "https://wa.me/?text=".concat(encodedVideoTitle, " ").concat(encodedVideoURL);
            this.email = "mailto:?subject=I wanted you to check this video&amp;&body=Check out this site ".concat(this.data.videoURL, ".");
          }
        }]);

        return SharingComponent;
      }();

      SharingComponent.ɵfac = function SharingComponent_Factory(t) {
        return new (t || SharingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
      };

      SharingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SharingComponent,
        selectors: [["app-sharing"]],
        decls: 18,
        vars: 7,
        consts: [[1, "sharing-container"], ["disabled", "", "matInput", "", 2, "margin-bottom", "20px", 3, "value"], ["mat-stroked-button", "", "title", "Copy", 3, "cdkCopyToClipboard"], [1, "fas", "fa-copy"], [1, "share-btn-container"], [1, "facebook-btn", 3, "href"], [1, "fab", "fa-facebook"], [1, "twitter-btn", 3, "href"], [1, "fab", "fa-twitter"], [1, "pinterest-btn", 3, "href"], [1, "fas", "fa-envelope"], [1, "linkedin-btn", 3, "href"], [1, "fab", "fa-linkedin"], [1, "whatsapp-btn", 3, "href"], [1, "fab", "fa-whatsapp"]],
        template: function SharingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Share your video!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "textarea", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Copy to ClipBoard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.data.videoURL);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkCopyToClipboard", ctx.data.videoURL);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.facebookURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.twitterURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.email, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.linkedinURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.whatsappURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__["CdkCopyToClipboard"]],
        styles: [".share-btn-container[_ngcontent-%COMP%] {\n  background: #fff;\n  display: row;\n  flex-direction: row;\n  padding: 16px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n  justify-content: center;\n}\n\n.share-btn-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\n.share-btn-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 30px;\n  transition: 500ms;\n}\n\n.share-btn-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n\n.share-btn-container[_ngcontent-%COMP%]   .fa-facebook[_ngcontent-%COMP%] {\n  color: #3b5998;\n}\n\n.share-btn-container[_ngcontent-%COMP%]   .fa-twitter[_ngcontent-%COMP%] {\n  color: #1da1f2;\n}\n\n.share-btn-container[_ngcontent-%COMP%]   .fa-linkedin[_ngcontent-%COMP%] {\n  color: #0077b5;\n}\n\n.share-btn-container[_ngcontent-%COMP%]   .fa-pinterest[_ngcontent-%COMP%] {\n  color: #bd081c;\n}\n\n.share-btn-container[_ngcontent-%COMP%]   .fa-whatsapp[_ngcontent-%COMP%] {\n  color: #25d366;\n}\n\n.sharing-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  margin: 5px;\n  vertical-align: middle;\n  width: 95%;\n  margin-bottom: 10px;\n}\n\n.sharing-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 95%;\n  overflow: hidden;\n  resize: none;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNoYXJpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6InNoYXJpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hhcmUtYnRuLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBkaXNwbGF5OiByb3c7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5zaGFyZS1idG4tY29udGFpbmVyIGEgaSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIFxuICAuc2hhcmUtYnRuLWNvbnRhaW5lciBhIHtcbiAgICBtYXJnaW46MCAzMHB4O1xuICAgIHRyYW5zaXRpb246IDUwMG1zO1xuICB9XG4gIFxuICAuc2hhcmUtYnRuLWNvbnRhaW5lciBhOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH1cbiAgXG4gIC5zaGFyZS1idG4tY29udGFpbmVyIC5mYS1mYWNlYm9vayB7XG4gICAgY29sb3I6ICMzYjU5OTg7XG4gIH1cbiAgXG4gIC5zaGFyZS1idG4tY29udGFpbmVyIC5mYS10d2l0dGVyIHtcbiAgICBjb2xvcjogIzFkYTFmMjtcbiAgfVxuICBcbiAgLnNoYXJlLWJ0bi1jb250YWluZXIgLmZhLWxpbmtlZGluIHtcbiAgICBjb2xvcjogIzAwNzdiNTtcbiAgfVxuICBcbiAgLnNoYXJlLWJ0bi1jb250YWluZXIgLmZhLXBpbnRlcmVzdCB7XG4gICAgY29sb3I6ICNiZDA4MWM7XG4gIH1cbiAgXG4gIC5zaGFyZS1idG4tY29udGFpbmVyIC5mYS13aGF0c2FwcCB7XG4gICAgY29sb3I6ICMyNWQzNjY7XG4gIH1cblxuICAuc2hhcmluZy1jb250YWluZXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuc2hhcmluZy1jb250YWluZXIgdGV4dGFyZWF7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgcmVzaXplOm5vbmU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9Il19 */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "HTFn");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _record_video_record_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./record-video/record-video.component */
      "lZDi");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./profile/profile.component */
      "W6KJ");
      /* harmony import */


      var _reset_reset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./reset/reset.component */
      "V+94");
      /* harmony import */


      var _recordings_recordings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./recordings/recordings.component */
      "Jizn");
      /* harmony import */


      var _video_page_video_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./video-page/video-page.component */
      "eU1E");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["redirectUnauthorizedTo"])(['login']);
      };

      var redirectToDashboard = Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["redirectLoggedInTo"])(['']);

      var redirectToDashboardWithLogger = function redirectToDashboardWithLogger(next, state) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
          return console.info('it will be redirected');
        }), redirectToDashboard);
      };

      var routes = [Object.assign({
        path: '',
        component: _record_video_record_video_component__WEBPACK_IMPORTED_MODULE_6__["RecordVideoComponent"]
      }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["canActivate"])(redirectUnauthorizedToLogin)), Object.assign({
        path: 'record',
        component: _record_video_record_video_component__WEBPACK_IMPORTED_MODULE_6__["RecordVideoComponent"]
      }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["canActivate"])(redirectUnauthorizedToLogin)), Object.assign({
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
      }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["canActivate"])(redirectUnauthorizedToLogin)), Object.assign({
        path: 'recordings',
        component: _recordings_recordings_component__WEBPACK_IMPORTED_MODULE_9__["RecordingsComponent"]
      }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["canActivate"])(redirectUnauthorizedToLogin)), Object.assign({
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
      }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_2__["canActivate"])(redirectToDashboardWithLogger)), {
        path: 'reset',
        component: _reset_reset_component__WEBPACK_IMPORTED_MODULE_8__["ResetComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
      }, {
        path: 'video/:videoId',
        component: _video_page_video_page_component__WEBPACK_IMPORTED_MODULE_10__["VideoPageComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/alertify.service */
      "zC1p");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(fb, auth, router, alertify) {
          _classCallCheck(this, LoginComponent);

          this.fb = fb;
          this.auth = auth;
          this.router = router;
          this.alertify = alertify;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.fb.group({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
            });
          }
        }, {
          key: "onLogin",
          value: function onLogin() {
            var _this12 = this;

            if (this.loginForm.invalid) return;
            var _this$loginForm$value = this.loginForm.value,
                email = _this$loginForm$value.email,
                password = _this$loginForm$value.password;
            this.auth.signInWithEmailAndPassword(email, password).then(function () {
              _this12.alertify.success('LoggedIn Successfully');

              _this12.router.navigate(['']);
            })["catch"](function (err) {
              return _this12.alertify.error('Login Failed');
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 20,
        vars: 1,
        consts: [[1, "form", 3, "formGroup"], [1, "form-control"], ["matInput", "", "formControlName", "email", "type", "text", "name", "email-hasura"], ["matInput", "", "formControlName", "password", "type", "password"], [1, "form-footer"], ["mat-stroked-button", "", 3, "click"], ["routerLink", "/register"], [2, "text-align", "center", "margin-top", "20px"], ["href", "reset"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Please Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Your email");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Your password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_13_listener() {
              return ctx.onLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "create a user");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Reset Your Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxjQUFBO0FBR0o7O0FBREU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUlKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIC5mb3JtIHtcbiAgICB3aWR0aDogMjByZW07XG4gIH1cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmZvcm0tZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgIl19 */"]
      });
      /***/
    },

    /***/
    "zC1p":
    /*!***********************************************!*\
      !*** ./src/app/_services/alertify.service.ts ***!
      \***********************************************/

    /*! exports provided: AlertifyService */

    /***/
    function zC1p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertifyService", function () {
        return AlertifyService;
      });
      /* harmony import */


      var alertifyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! alertifyjs */
      "XAfc");
      /* harmony import */


      var alertifyjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); //@ts-ignore


      var AlertifyService = /*#__PURE__*/function () {
        function AlertifyService() {
          _classCallCheck(this, AlertifyService);
        }

        _createClass(AlertifyService, [{
          key: "confirm",
          value: function confirm(title, message, okCallback) {
            alertifyjs__WEBPACK_IMPORTED_MODULE_0__["confirm"](title, message, function (e) {
              if (e) {
                okCallback();
              } else {}
            }, oncancel);
          }
        }, {
          key: "success",
          value: function success(message) {
            alertifyjs__WEBPACK_IMPORTED_MODULE_0__["success"](message);
          }
        }, {
          key: "warning",
          value: function warning(message) {
            alertifyjs__WEBPACK_IMPORTED_MODULE_0__["warning"](message);
          }
        }, {
          key: "error",
          value: function error(message) {
            alertifyjs__WEBPACK_IMPORTED_MODULE_0__["error"](message);
          }
        }, {
          key: "message",
          value: function message(_message) {
            alertifyjs__WEBPACK_IMPORTED_MODULE_0__["message"](_message);
          }
        }]);

        return AlertifyService;
      }();

      AlertifyService.ɵfac = function AlertifyService_Factory(t) {
        return new (t || AlertifyService)();
      };

      AlertifyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AlertifyService,
        factory: AlertifyService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map