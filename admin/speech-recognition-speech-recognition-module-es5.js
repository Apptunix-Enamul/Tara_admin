(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["speech-recognition-speech-recognition-module"], {
    /***/
    "./src/app/pages/speech-recognition/speech-recognition-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/speech-recognition/speech-recognition-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: SpeechRecognitionRoutingModule */

    /***/
    function srcAppPagesSpeechRecognitionSpeechRecognitionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeechRecognitionRoutingModule", function () {
        return SpeechRecognitionRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _speech_recognition_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./speech-recognition.component */
      "./src/app/pages/speech-recognition/speech-recognition.component.ts");
      /* harmony import */


      var _speechadd_speechadd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./speechadd/speechadd.component */
      "./src/app/pages/speech-recognition/speechadd/speechadd.component.ts");
      /* harmony import */


      var _speechedit_speechedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./speechedit/speechedit.component */
      "./src/app/pages/speech-recognition/speechedit/speechedit.component.ts");
      /* harmony import */


      var _speechlist_speechlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./speechlist/speechlist.component */
      "./src/app/pages/speech-recognition/speechlist/speechlist.component.ts");

      var routes = [{
        path: "",
        component: _speech_recognition_component__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognitionComponent"],
        children: [{
          path: "",
          component: _speechlist_speechlist_component__WEBPACK_IMPORTED_MODULE_5__["SpeechlistComponent"],
          data: {
            title: 'Speech List',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Speech'
            }]
          }
        }, {
          path: "add",
          component: _speechadd_speechadd_component__WEBPACK_IMPORTED_MODULE_3__["SpeechaddComponent"],
          data: {
            title: 'Add Speech',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Speech'
            }]
          }
        }, {
          path: "edit",
          component: _speechedit_speechedit_component__WEBPACK_IMPORTED_MODULE_4__["SpeecheditComponent"],
          data: {
            title: 'Edit Speech',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Speech'
            }]
          }
        }]
      }];

      var SpeechRecognitionRoutingModule = function SpeechRecognitionRoutingModule() {
        _classCallCheck(this, SpeechRecognitionRoutingModule);
      };

      SpeechRecognitionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SpeechRecognitionRoutingModule
      });
      SpeechRecognitionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SpeechRecognitionRoutingModule_Factory(t) {
          return new (t || SpeechRecognitionRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SpeechRecognitionRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeechRecognitionRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/speech-recognition/speech-recognition.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/speech-recognition/speech-recognition.component.ts ***!
      \**************************************************************************/

    /*! exports provided: SpeechRecognitionComponent */

    /***/
    function srcAppPagesSpeechRecognitionSpeechRecognitionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeechRecognitionComponent", function () {
        return SpeechRecognitionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-spinner */
      "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var SpeechRecognitionComponent = /*#__PURE__*/function () {
        function SpeechRecognitionComponent(spinner) {
          _classCallCheck(this, SpeechRecognitionComponent);

          this.spinner = spinner;
        }

        _createClass(SpeechRecognitionComponent, [{
          key: "changeOfRoutes",
          value: function changeOfRoutes() {
            var _this = this;

            setTimeout(function () {
              _this.spinner.hide();
            }, 130);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpeechRecognitionComponent;
      }();

      SpeechRecognitionComponent.ɵfac = function SpeechRecognitionComponent_Factory(t) {
        return new (t || SpeechRecognitionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]));
      };

      SpeechRecognitionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpeechRecognitionComponent,
        selectors: [["app-speech-recognition"]],
        decls: 1,
        vars: 0,
        consts: [[3, "activate"]],
        template: function SpeechRecognitionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function SpeechRecognitionComponent_Template_router_outlet_activate_0_listener() {
              return ctx.changeOfRoutes();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWVjaC1yZWNvZ25pdGlvbi9zcGVlY2gtcmVjb2duaXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeechRecognitionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-speech-recognition',
            templateUrl: './speech-recognition.component.html',
            styleUrls: ['./speech-recognition.component.css']
          }]
        }], function () {
          return [{
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/speech-recognition/speech-recognition.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/speech-recognition/speech-recognition.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SpeechRecognitionModule */

    /***/
    function srcAppPagesSpeechRecognitionSpeechRecognitionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeechRecognitionModule", function () {
        return SpeechRecognitionModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _speech_recognition_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./speech-recognition-routing.module */
      "./src/app/pages/speech-recognition/speech-recognition-routing.module.ts");
      /* harmony import */


      var _speech_recognition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./speech-recognition.component */
      "./src/app/pages/speech-recognition/speech-recognition.component.ts");
      /* harmony import */


      var _speechlist_speechlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./speechlist/speechlist.component */
      "./src/app/pages/speech-recognition/speechlist/speechlist.component.ts");
      /* harmony import */


      var _speechedit_speechedit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./speechedit/speechedit.component */
      "./src/app/pages/speech-recognition/speechedit/speechedit.component.ts");
      /* harmony import */


      var _speechadd_speechadd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./speechadd/speechadd.component */
      "./src/app/pages/speech-recognition/speechadd/speechadd.component.ts");

      var SpeechRecognitionModule = function SpeechRecognitionModule() {
        _classCallCheck(this, SpeechRecognitionModule);
      };

      SpeechRecognitionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SpeechRecognitionModule
      });
      SpeechRecognitionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SpeechRecognitionModule_Factory(t) {
          return new (t || SpeechRecognitionModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _speech_recognition_routing_module__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognitionRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SpeechRecognitionModule, {
          declarations: [_speechlist_speechlist_component__WEBPACK_IMPORTED_MODULE_4__["SpeechlistComponent"], _speechedit_speechedit_component__WEBPACK_IMPORTED_MODULE_5__["SpeecheditComponent"], _speechadd_speechadd_component__WEBPACK_IMPORTED_MODULE_6__["SpeechaddComponent"], _speech_recognition_component__WEBPACK_IMPORTED_MODULE_3__["SpeechRecognitionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _speech_recognition_routing_module__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognitionRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeechRecognitionModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_speechlist_speechlist_component__WEBPACK_IMPORTED_MODULE_4__["SpeechlistComponent"], _speechedit_speechedit_component__WEBPACK_IMPORTED_MODULE_5__["SpeecheditComponent"], _speechadd_speechadd_component__WEBPACK_IMPORTED_MODULE_6__["SpeechaddComponent"], _speech_recognition_component__WEBPACK_IMPORTED_MODULE_3__["SpeechRecognitionComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _speech_recognition_routing_module__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognitionRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/speech-recognition/speechadd/speechadd.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/speech-recognition/speechadd/speechadd.component.ts ***!
      \***************************************************************************/

    /*! exports provided: SpeechaddComponent */

    /***/
    function srcAppPagesSpeechRecognitionSpeechaddSpeechaddComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeechaddComponent", function () {
        return SpeechaddComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SpeechaddComponent = /*#__PURE__*/function () {
        function SpeechaddComponent() {
          _classCallCheck(this, SpeechaddComponent);
        }

        _createClass(SpeechaddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpeechaddComponent;
      }();

      SpeechaddComponent.ɵfac = function SpeechaddComponent_Factory(t) {
        return new (t || SpeechaddComponent)();
      };

      SpeechaddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpeechaddComponent,
        selectors: [["app-speechadd"]],
        decls: 9,
        vars: 0,
        consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-12", "text-right"], ["action", "#", 1, "col-12"], [1, "col-md-3", "form-group"], ["type", "text", "placeholder", "Add sentence", 1, "form-control", "w-100"], [1, "btn", "theme_btn", "mt-3"]],
        template: function SpeechaddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWVjaC1yZWNvZ25pdGlvbi9zcGVlY2hhZGQvc3BlZWNoYWRkLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeechaddComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-speechadd',
            templateUrl: './speechadd.component.html',
            styleUrls: ['./speechadd.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/speech-recognition/speechedit/speechedit.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/speech-recognition/speechedit/speechedit.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: SpeecheditComponent */

    /***/
    function srcAppPagesSpeechRecognitionSpeecheditSpeecheditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeecheditComponent", function () {
        return SpeecheditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SpeecheditComponent = /*#__PURE__*/function () {
        function SpeecheditComponent() {
          _classCallCheck(this, SpeecheditComponent);
        }

        _createClass(SpeecheditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpeecheditComponent;
      }();

      SpeecheditComponent.ɵfac = function SpeecheditComponent_Factory(t) {
        return new (t || SpeecheditComponent)();
      };

      SpeecheditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpeecheditComponent,
        selectors: [["app-speechedit"]],
        decls: 2,
        vars: 0,
        template: function SpeecheditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "speechedit works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWVjaC1yZWNvZ25pdGlvbi9zcGVlY2hlZGl0L3NwZWVjaGVkaXQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeecheditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-speechedit',
            templateUrl: './speechedit.component.html',
            styleUrls: ['./speechedit.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/speech-recognition/speechlist/speechlist.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/speech-recognition/speechlist/speechlist.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: SpeechlistComponent */

    /***/
    function srcAppPagesSpeechRecognitionSpeechlistSpeechlistComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeechlistComponent", function () {
        return SpeechlistComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function SpeechlistComponent_a_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeechlistComponent_a_4_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](78);

            return ctx_r6.addspeech(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Sentences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SpeechlistComponent_span_10_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeechlistComponent_span_10_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80);

            return ctx_r9.editspeech(_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SpeechlistComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpeechlistComponent_span_10_a_1_Template, 2, 0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.editPermission);
        }
      }

      function SpeechlistComponent_ng_template_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Speech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeechlistComponent_ng_template_77_Template_button_click_3_listener() {
            var modal_r11 = ctx.$implicit;
            return modal_r11.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Select Language ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " HINDI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " PUNJABI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " ENGLISH ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " FRENCH ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SpeechlistComponent_ng_template_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Speech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeechlistComponent_ng_template_79_Template_button_click_3_listener() {
            var modal_r13 = ctx.$implicit;
            return modal_r13.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Change Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " HINDI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " PUNJABI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " ENGLISH ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " FRENCH ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Add More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SpeechlistComponent = /*#__PURE__*/function () {
        function SpeechlistComponent(modalService) {
          _classCallCheck(this, SpeechlistComponent);

          this.modalService = modalService;
          this.permissions = JSON.parse(sessionStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].storageKey)).permissions;

          if (this.permissions.length == 0 || this.permissions == null || this.permissions == undefined) {
            this.editPermission = true;
            this.viewPermission = true;
          } else {
            this.editPermission = this.permissions[3].is_add_edit;
            this.viewPermission = this.permissions[3].is_view;
          }
        }

        _createClass(SpeechlistComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addspeech",
          value: function addspeech(content3) {
            this.modalService.open(content3, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg'
            });
          }
        }, {
          key: "editspeech",
          value: function editspeech(content4) {
            this.modalService.open(content4, {
              backdropClass: 'light-blue-backdrop',
              centered: true,
              size: 'lg'
            });
          }
        }]);

        return SpeechlistComponent;
      }();

      SpeechlistComponent.ɵfac = function SpeechlistComponent_Factory(t) {
        return new (t || SpeechlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      SpeechlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpeechlistComponent,
        selectors: [["app-speechlist"]],
        decls: 81,
        vars: 2,
        consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-12", "text-right"], ["class", "btn theme_btn mb-3", 3, "click", 4, "ngIf"], [1, "col-md-3"], [1, "d-flex", "justify-content-between"], [4, "ngIf"], [1, "mb-0"], [1, "d-flex"], [1, "cursor_pointer", 3, "click"], [1, "fas", "fa-pencil-alt", "font-14"], ["href", "javascript:void()", 1, "ml-2"], [1, "fas", "fa-trash", "font-14"], ["content3", ""], ["content4", ""], [1, "btn", "theme_btn", "mb-3", 3, "click"], ["class", "cursor_pointer", 3, "click", 4, "ngIf"], [1, "modal-header", "p-2"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["action", "", 1, "col-12", "row"], [1, "col-md-6", "form-group"], ["name", "", "id", "", 1, "form-control"], ["selected", "", "disabled", ""], ["type", "text", "placeholder", "Add sentence", 1, "form-control", "w-100"], [1, "btn", "theme_btn", "mt-3"], [1, "col-md-12"], ["type", "text", "value", "Sentence 1", "placeholder", "Add sentence", 1, "form-control", "w-100"], ["type", "text", "value", "Sentence 2", "placeholder", "Add sentence", 1, "form-control", "w-100"], ["type", "text", "value", "Sentence 3", "placeholder", "Add sentence", 1, "form-control", "w-100"], ["type", "text", "value", "Sentence 4", "placeholder", "Add sentence", 1, "form-control", "w-100"]],
        template: function SpeechlistComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpeechlistComponent_a_4_Template, 2, 0, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "HINDI ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SpeechlistComponent_span_10_Template, 4, 1, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Sentences 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Sentences 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Sentences 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Sentences 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "PUNJABI ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeechlistComponent_Template_a_click_26_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80);

              return ctx.editspeech(_r4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Sentences 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Sentences 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Sentences 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Sentences 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ENGLISH ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeechlistComponent_Template_a_click_45_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80);

              return ctx.editspeech(_r4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Sentences 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Sentences 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Sentences 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Sentences 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "FRENCH ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeechlistComponent_Template_a_click_64_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80);

              return ctx.editspeech(_r4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Sentences 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Sentences 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Sentences 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Sentences 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, SpeechlistComponent_ng_template_77_Template, 28, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, SpeechlistComponent_ng_template_79_Template, 34, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editPermission);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editPermission);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWVjaC1yZWNvZ25pdGlvbi9zcGVlY2hsaXN0L3NwZWVjaGxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeechlistComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-speechlist',
            templateUrl: './speechlist.component.html',
            styleUrls: ['./speechlist.component.css']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=speech-recognition-speech-recognition-module-es5.js.map