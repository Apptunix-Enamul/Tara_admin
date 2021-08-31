(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geofence-geofence-module"], {
    /***/
    "./src/app/pages/geofence/geofence-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/geofence/geofence-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: GeofenceRoutingModule */

    /***/
    function srcAppPagesGeofenceGeofenceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeofenceRoutingModule", function () {
        return GeofenceRoutingModule;
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


      var _geofence_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./geofence.component */
      "./src/app/pages/geofence/geofence.component.ts");
      /* harmony import */


      var _geofenceadd_geofenceadd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./geofenceadd/geofenceadd.component */
      "./src/app/pages/geofence/geofenceadd/geofenceadd.component.ts");
      /* harmony import */


      var _geofenceedit_geofenceedit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./geofenceedit/geofenceedit.component */
      "./src/app/pages/geofence/geofenceedit/geofenceedit.component.ts");
      /* harmony import */


      var _geofencelist_geofencelist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./geofencelist/geofencelist.component */
      "./src/app/pages/geofence/geofencelist/geofencelist.component.ts");

      var routes = [{
        path: "",
        component: _geofence_component__WEBPACK_IMPORTED_MODULE_2__["GeofenceComponent"],
        children: [{
          path: "",
          component: _geofencelist_geofencelist_component__WEBPACK_IMPORTED_MODULE_5__["GeofencelistComponent"],
          data: {
            title: 'Geofence List',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Geofence'
            }]
          }
        }, {
          path: "add",
          component: _geofenceadd_geofenceadd_component__WEBPACK_IMPORTED_MODULE_3__["GeofenceaddComponent"],
          data: {
            title: 'Add Geofence',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Geofence'
            }]
          }
        }, {
          path: "edit",
          component: _geofenceedit_geofenceedit_component__WEBPACK_IMPORTED_MODULE_4__["GeofenceeditComponent"],
          data: {
            title: 'Edit Geofence',
            urls: [{
              title: 'Dashboard',
              url: '/dashboard'
            }, {
              title: 'Geofence'
            }]
          }
        }]
      }];

      var GeofenceRoutingModule = function GeofenceRoutingModule() {
        _classCallCheck(this, GeofenceRoutingModule);
      };

      GeofenceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GeofenceRoutingModule
      });
      GeofenceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GeofenceRoutingModule_Factory(t) {
          return new (t || GeofenceRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeofenceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeofenceRoutingModule, [{
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
    "./src/app/pages/geofence/geofence.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/geofence/geofence.component.ts ***!
      \******************************************************/

    /*! exports provided: GeofenceComponent */

    /***/
    function srcAppPagesGeofenceGeofenceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeofenceComponent", function () {
        return GeofenceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var GeofenceComponent = /*#__PURE__*/function () {
        function GeofenceComponent() {
          _classCallCheck(this, GeofenceComponent);
        }

        _createClass(GeofenceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GeofenceComponent;
      }();

      GeofenceComponent.ɵfac = function GeofenceComponent_Factory(t) {
        return new (t || GeofenceComponent)();
      };

      GeofenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GeofenceComponent,
        selectors: [["app-geofence"]],
        decls: 1,
        vars: 0,
        template: function GeofenceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".sebm-google-map-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 500px;\n    display: flex;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VvZmVuY2UvZ2VvZmVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2VvZmVuY2UvZ2VvZmVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeofenceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-geofence',
            templateUrl: './geofence.component.html',
            styleUrls: ['./geofence.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/geofence/geofence.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/geofence/geofence.module.ts ***!
      \***************************************************/

    /*! exports provided: GeofenceModule */

    /***/
    function srcAppPagesGeofenceGeofenceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeofenceModule", function () {
        return GeofenceModule;
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


      var _geofence_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./geofence.component */
      "./src/app/pages/geofence/geofence.component.ts");
      /* harmony import */


      var _geofence_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./geofence-routing.module */
      "./src/app/pages/geofence/geofence-routing.module.ts");
      /* harmony import */


      var _geofencelist_geofencelist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./geofencelist/geofencelist.component */
      "./src/app/pages/geofence/geofencelist/geofencelist.component.ts");
      /* harmony import */


      var _geofenceedit_geofenceedit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./geofenceedit/geofenceedit.component */
      "./src/app/pages/geofence/geofenceedit/geofenceedit.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var _geofenceadd_geofenceadd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./geofenceadd/geofenceadd.component */
      "./src/app/pages/geofence/geofenceadd/geofenceadd.component.ts"); // import { GeofenceaddComponent } from './geofenceadd/geofenceadd.component';


      var GeofenceModule = function GeofenceModule() {
        _classCallCheck(this, GeofenceModule);
      };

      GeofenceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GeofenceModule
      });
      GeofenceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GeofenceModule_Factory(t) {
          return new (t || GeofenceModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _geofence_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeofenceRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeofenceModule, {
          declarations: [_geofencelist_geofencelist_component__WEBPACK_IMPORTED_MODULE_4__["GeofencelistComponent"], _geofenceedit_geofenceedit_component__WEBPACK_IMPORTED_MODULE_5__["GeofenceeditComponent"], _geofence_component__WEBPACK_IMPORTED_MODULE_2__["GeofenceComponent"], _geofenceadd_geofenceadd_component__WEBPACK_IMPORTED_MODULE_8__["GeofenceaddComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _geofence_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeofenceRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeofenceModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_geofencelist_geofencelist_component__WEBPACK_IMPORTED_MODULE_4__["GeofencelistComponent"], _geofenceedit_geofenceedit_component__WEBPACK_IMPORTED_MODULE_5__["GeofenceeditComponent"], _geofence_component__WEBPACK_IMPORTED_MODULE_2__["GeofenceComponent"], _geofenceadd_geofenceadd_component__WEBPACK_IMPORTED_MODULE_8__["GeofenceaddComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _geofence_routing_module__WEBPACK_IMPORTED_MODULE_3__["GeofenceRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/geofence/geofenceadd/geofenceadd.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/geofence/geofenceadd/geofenceadd.component.ts ***!
      \*********************************************************************/

    /*! exports provided: GeofenceaddComponent */

    /***/
    function srcAppPagesGeofenceGeofenceaddGeofenceaddComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeofenceaddComponent", function () {
        return GeofenceaddComponent;
      });
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/common.service */
      "./src/app/_services/common.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["AgmMap"];

      function GeofenceaddComponent_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GeofenceaddComponent_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Maximum 30 character allowed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GeofenceaddComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please insert delivery price ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var GeofenceaddComponent = /*#__PURE__*/function () {
        function GeofenceaddComponent(toaster, mapsAPILoader, router, fb, apiService) {
          _classCallCheck(this, GeofenceaddComponent);

          this.toaster = toaster;
          this.mapsAPILoader = mapsAPILoader;
          this.router = router;
          this.fb = fb;
          this.apiService = apiService;
          this.lat = -34.397;
          this.lng = 150.644;
          this.latA = -34.754764;
          this.lngA = 149.736246;
          this.zoom = 8;
          this.polyarray = [];
          this.submitted = false;
          this.styles = [{
            featureType: 'all',
            stylers: [{
              saturation: -80
            }]
          }, {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{
              hue: '#00ffee'
            }, {
              saturation: 50
            }]
          }, {
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [{
              visibility: 'off'
            }]
          }];
          this.setCurrentLocation();
        }

        _createClass(GeofenceaddComponent, [{
          key: "AlphabetOnly",
          value: function AlphabetOnly(event) {
            var pattAlpha = /^([a-zA-Z ])*$/;
            var resultAlpha = pattAlpha.test(event.key);
            return resultAlpha;
          }
        }, {
          key: "NumberOnly",
          value: function NumberOnly(event) {
            var pattAlpha = /^([0-9])*$/;
            var resultAlpha = pattAlpha.test(event.key);
            return resultAlpha;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.geofenceForm = this.fb.group({
              geofenceName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
              deliverycharges: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            this.mapsAPILoader.load().then(function () {
              _this.geoCoder = new google.maps.Geocoder();
            });
          }
        }, {
          key: "getAddress",
          value: function getAddress(latitude, longitude) {
            this.geoCoder.geocode({
              'location': {
                lat: latitude,
                lng: longitude
              }
            }, function (results, status) {});
          }
        }, {
          key: "setCurrentLocation",
          value: function setCurrentLocation() {
            var _this2 = this;

            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (position) {
                _this2.lat = position.coords.latitude;
                _this2.lng = position.coords.longitude;
                _this2.zoom = 11;

                _this2.getAddress(_this2.lat, _this2.lng);
              });
            }
          }
        }, {
          key: "initDrawingManager",
          value: function initDrawingManager(map) {
            var _this3 = this;

            var options = {
              drawingControl: true,
              drawingControlOptions: {
                drawingModes: [google.maps.drawing.OverlayType.POLYGON]
              },
              polygonOptions: {
                draggable: true,
                editable: true
              },
              drawingMode: google.maps.drawing.OverlayType.POLYGON
            };
            this.drawingManager = new google.maps.drawing.DrawingManager(options);
            this.drawingManager.setMap(map);
            google.maps.event.addListener(this.drawingManager, 'overlaycomplete', function (event) {
              if (event.type === google.maps.drawing.OverlayType.POLYGON) {
                //this is the coordinate, you can assign it to a variable or pass into another function. 
                _this3.polyarray = event.overlay.getPath().getArray();
              }
            });
          }
        }, {
          key: "onMapReady",
          value: function onMapReady(map) {
            this.Map = map;
            this.initDrawingManager(this.Map);
          }
        }, {
          key: "save",
          value: function save() {
            var _this4 = this;

            this.submitted = true;
            var url = "/addGeofence";

            if (this.geofenceForm.valid && this.polyarray.length > 0) {
              this.progress = true;
              var geofenceData = {
                "name": this.geofenceForm.get('geofenceName').value,
                "deliveryPrice": this.geofenceForm.get('deliverycharges').value,
                "points": this.polyarray
              };

              if (this.geofenceForm.valid) {
                this.apiService.postApi(url, geofenceData).subscribe(function (res) {
                  console.log('This is ');

                  if (res.success) {
                    _this4.progress = false;

                    _this4.toaster.success(res.message);

                    _this4.router.navigate(['pages/geofencelist']);

                    _this4.geofenceForm.reset();

                    _this4.submitted = false;
                  } else {
                    _this4.progress = false;

                    _this4.toaster.error(res.message);
                  }
                }, function (error) {
                  _this4.toaster.error('Something went wrong');
                });
              } else {
                this.toaster.error('Make Sure you have typed in the name and selected the area for geofence');
              }
            } else if (this.geofenceForm.invalid) {
              this.toaster.error('Please fill all field');
            }
          }
        }]);

        return GeofenceaddComponent;
      }();

      GeofenceaddComponent.ɵfac = function GeofenceaddComponent_Factory(t) {
        return new (t || GeofenceaddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_0__["MapsAPILoader"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]));
      };

      GeofenceaddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GeofenceaddComponent,
        selectors: [["app-geofenceadd"]],
        viewQuery: function GeofenceaddComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.Map = _t.first);
          }
        },
        decls: 21,
        vars: 11,
        consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", 3, "formGroup"], [1, "form-group", "col-md-6"], ["type", "text", "formControlName", "geofenceName", "placeholder", "Geofence Name", 1, "form-control", 3, "keypress", "keydown.space"], [4, "ngIf"], ["type", "text", "placeholder", "Insert delivery price", "formControlName", "deliverycharges", 1, "form-control", 3, "keypress", "keydown.space"], [3, "latitude", "longitude", "zoom", "styles", "mapReady"], ["map2", ""], [3, "latitude", "longitude", "markerDraggable"], [1, "btn", "btn-primary", "mt-3", 3, "click"]],
        template: function GeofenceaddComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function GeofenceaddComponent_Template_input_keypress_8_listener($event) {
              return ctx.AlphabetOnly($event);
            })("keydown.space", function GeofenceaddComponent_Template_input_keydown_space_8_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GeofenceaddComponent_mat_error_9_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GeofenceaddComponent_mat_error_10_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Insert delivery price ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function GeofenceaddComponent_Template_input_keypress_14_listener($event) {
              return ctx.NumberOnly($event);
            })("keydown.space", function GeofenceaddComponent_Template_input_keydown_space_14_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, GeofenceaddComponent_mat_error_15_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "agm-map", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mapReady", function GeofenceaddComponent_Template_agm_map_mapReady_16_listener($event) {
              return ctx.onMapReady($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "agm-marker", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GeofenceaddComponent_Template_button_click_19_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.geofenceForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.geofenceForm.get("geofenceName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.geofenceForm.get("geofenceName").hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.geofenceForm.get("deliverycharges").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("styles", ctx.styles);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("markerDraggable", false);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmMarker"]],
        styles: [".sebm-google-map-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 500px;\n    display: flex;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VvZmVuY2UvZ2VvZmVuY2VhZGQvZ2VvZmVuY2VhZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2VvZmVuY2UvZ2VvZmVuY2VhZGQvZ2VvZmVuY2VhZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeofenceaddComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-geofenceadd',
            templateUrl: './geofenceadd.component.html',
            styleUrls: ['./geofenceadd.component.css']
          }]
        }], function () {
          return [{
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: _agm_core__WEBPACK_IMPORTED_MODULE_0__["MapsAPILoader"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
          }];
        }, {
          Map: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["AgmMap", {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/geofence/geofenceedit/geofenceedit.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/geofence/geofenceedit/geofenceedit.component.ts ***!
      \***********************************************************************/

    /*! exports provided: GeofenceeditComponent */

    /***/
    function srcAppPagesGeofenceGeofenceeditGeofenceeditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeofenceeditComponent", function () {
        return GeofenceeditComponent;
      });
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/common.service */
      "./src/app/_services/common.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = ["map2"];
      var _c1 = ["AgmMap"];

      function GeofenceeditComponent_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GeofenceeditComponent_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Maximum 30 character allowed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GeofenceeditComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter delivery charges ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2() {
        return ["/pages/geofencelist"];
      };

      var GeofenceeditComponent = /*#__PURE__*/function () {
        function GeofenceeditComponent(act, toaster, service, mapsAPILoader, router, fb) {
          var _this5 = this;

          _classCallCheck(this, GeofenceeditComponent);

          this.act = act;
          this.toaster = toaster;
          this.service = service;
          this.mapsAPILoader = mapsAPILoader;
          this.router = router;
          this.fb = fb;
          this.lat = -34.397;
          this.lng = 150.644;
          this.latA = -34.754764;
          this.lngA = 149.736246;
          this.zoom = 11;
          this.polyarray = [];
          this.addgeofence = true;
          this.fencingList = [];
          this.vacantDriversList = [];
          this.otherDriversList = [];
          this.vacantDriverView = false;
          this.vacantDrivers = [];
          this.styles = [{
            featureType: 'all',
            stylers: [{
              saturation: -80
            }]
          }, {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{
              hue: '#00ffee'
            }, {
              saturation: 50
            }]
          }, {
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [{
              visibility: 'off'
            }]
          }];
          this.act.params.subscribe(function (res) {
            _this5.id = res.id;
          });
        }

        _createClass(GeofenceeditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            // this.getCustomer()
            this.geofenceForm = this.fb.group({
              geofenceName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
              deliverycharges: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            });
            this.mapsAPILoader.load().then(function () {
              _this6.geoCoder = new google.maps.Geocoder();
            });
          }
        }, {
          key: "getCustomer",
          value: function getCustomer() {
            var _this7 = this;

            var url = "/getGeofencebyid/".concat(this.id);
            this.service.get(url).subscribe(function (res) {
              if (res.message == 'SUCCESS') {
                //  this.UserList = res.data.find(ele=>ele._id=this.id)
                console.log(res);

                _this7.geofenceForm.patchValue({
                  geofenceName: res.data[0].name,
                  deliverycharges: res.data[0].deliveryPrice
                });

                console.log("this is geo obj", res.data[0].geoPoints.coordinates);
                _this7.geoFenceId = res.data[0]._id;
                _this7.locationPoints = res.data[0].geoPoints.coordinates[0];
                console.log("hoi there", _this7.locationPoints);

                _this7.onEdit(_this7.locationPoints, _this7.geoFenceId);
              } else {//  this.toaster.error(res.message);
              }
            }, function (error) {//  this.toaster.error('Something went wrong');
            });
          }
        }, {
          key: "back",
          value: function back() {
            history.back();
          }
        }, {
          key: "onEdit",
          value: function onEdit(locationPoints, geoId) {
            var _this8 = this;

            this.geoFenceId = ''; // console.log('geoId', geoId);

            this.geoFenceId = geoId;
            var drawPolygonArr = [];
            locationPoints.forEach(function (element) {
              drawPolygonArr.push({
                lat: element[1],
                lng: element[0]
              });
              _this8.latitude = element[1];
              _this8.longitude = element[0];
            });
            console.log(drawPolygonArr);

            if (this.constructTriangle) {
              this.constructTriangle.setMap(null);
            } // Construct the polygon.


            this.constructTriangle = new google.maps.Polygon({
              paths: drawPolygonArr,
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 3,
              fillColor: '#FF0000',
              fillOpacity: 0.35,
              editable: true,
              draggable: true
            });
            this.constructTriangle.setMap(null);
            this.constructTriangle.setMap(this.Map);
            console.log("this.polyarray ", this.polyarray);
          }
        }, {
          key: "save",
          value: function save() {
            this.getPolygonCoordinates(this.constructTriangle);
          }
        }, {
          key: "getAddress",
          value: function getAddress(latitude, longitude) {
            this.geoCoder.geocode({
              'location': {
                lat: latitude,
                lng: longitude
              }
            }, function (results, status) {});
          }
        }, {
          key: "onMapReady",
          value: function onMapReady(map) {
            this.Map = map; // this.initDrawingManager(this.Map);
          }
        }, {
          key: "onMapReady1",
          value: function onMapReady1(map) {
            this.Map = map;
            this.initDrawingManager(this.Map);
          }
        }, {
          key: "initDrawingManager",
          value: function initDrawingManager(map) {
            var _this9 = this;

            this.drawingManager = new google.maps.drawing.DrawingManager({
              drawingControl: true,
              drawingControlOptions: {
                drawingModes: [google.maps.drawing.OverlayType.POLYGON]
              },
              polygonOptions: {
                draggable: true,
                editable: true
              },
              drawingMode: google.maps.drawing.OverlayType.POLYGON
            });
            this.drawingManager.setMap(map);
            google.maps.event.addListener(this.drawingManager, 'overlaycomplete', function (event) {
              if (event.type === google.maps.drawing.OverlayType.POLYGON) {
                //this is the coordinate, you can assign it to a variable or pass into another function. 
                _this9.polyarray = event.overlay.getPath().getArray();
              }
            });
          }
        }, {
          key: "submitData",
          value: function submitData() {
            this.submitted = true;
            this.getPolygonCoordinates(this.constructTriangle);
          }
        }, {
          key: "getPolygonCoordinates",
          value: function getPolygonCoordinates(draggablePolygon) {
            var _this10 = this;

            var len = draggablePolygon.getPath().getLength();
            var polyArrayLatLng = [];

            for (var i = 0; i < len; i++) {
              var vertex = draggablePolygon.getPath().getAt(i);
              var vertexLatLng = {
                lat: vertex.lat(),
                lng: vertex.lng()
              };
              polyArrayLatLng.push(vertexLatLng);
            }

            if (this.geofenceForm.valid && polyArrayLatLng.length) {
              this.addgeofence = false;
              var geofenceData = {
                "name": this.geofenceForm.get('geofenceName').value,
                "deliveryPrice": this.geofenceForm.get('deliverycharges').value,
                "points": polyArrayLatLng
              }; // this.service.UpdateGeo(this.geoFenceId,geofenceData).subscribe((res:any) => {  change this by required api

              this.service.put(this.geoFenceId, geofenceData).subscribe(function (res) {
                if (res['success'] == true) {
                  _this10.addgeofence = false;

                  _this10.toaster.success(res.message);

                  _this10.router.navigate(['/pages/geofencelist']);
                } else {
                  _this10.toaster.error(res.message);
                }
              });
            } else {// this.commonService.errorToast('Please Select a region')
            }
          }
        }]);

        return GeofenceeditComponent;
      }();

      GeofenceeditComponent.ɵfac = function GeofenceeditComponent_Factory(t) {
        return new (t || GeofenceeditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_0__["MapsAPILoader"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
      };

      GeofenceeditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GeofenceeditComponent,
        selectors: [["app-geofenceedit"]],
        viewQuery: function GeofenceeditComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.map1 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.Map = _t.first);
          }
        },
        decls: 21,
        vars: 10,
        consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", 3, "formGroup"], [1, "form-group", "col-md-6"], ["type", "text", "formControlName", "geofenceName", "placeholder", "Geofence Name", 1, "form-control", 3, "keydown.space"], [4, "ngIf"], ["type", "text", "placeholder", "Insert delivery price", "formControlName", "deliverycharges", 1, "form-control", 3, "keydown.space"], [3, "latitude", "longitude", "zoom", "mapReady"], [1, "btn", "btn-primary", "mt-3", 3, "disabled", "click"], ["routerLinkActive", "router-link-active", 1, "btn", "btn-warning", "mt-3", "ml-3", 3, "routerLink"]],
        template: function GeofenceeditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.space", function GeofenceeditComponent_Template_input_keydown_space_8_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GeofenceeditComponent_mat_error_9_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GeofenceeditComponent_mat_error_10_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Insert delivery price ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.space", function GeofenceeditComponent_Template_input_keydown_space_14_listener($event) {
              return $event.preventDefault();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, GeofenceeditComponent_mat_error_15_Template, 2, 0, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "agm-map", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mapReady", function GeofenceeditComponent_Template_agm_map_mapReady_16_listener($event) {
              return ctx.onMapReady1($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GeofenceeditComponent_Template_button_click_17_listener() {
              return ctx.submitData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.geofenceForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.geofenceForm.get("geofenceName").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.geofenceForm.get("geofenceName").hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.geofenceForm.get("deliverycharges").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("latitude", ctx.latitude)("longitude", ctx.longitude)("zoom", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.geofenceForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_0__["AgmMap"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: [".sebm-google-map-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 500px;\n    display: flex;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VvZmVuY2UvZ2VvZmVuY2VlZGl0L2dlb2ZlbmNlZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nZW9mZW5jZS9nZW9mZW5jZWVkaXQvZ2VvZmVuY2VlZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeofenceeditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-geofenceedit',
            templateUrl: './geofenceedit.component.html',
            styleUrls: ['./geofenceedit.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
          }, {
            type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
          }, {
            type: _agm_core__WEBPACK_IMPORTED_MODULE_0__["MapsAPILoader"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }];
        }, {
          map1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['map2', {
              "static": true
            }]
          }],
          Map: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["AgmMap", {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/geofence/geofencelist/geofencelist.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/geofence/geofencelist/geofencelist.component.ts ***!
      \***********************************************************************/

    /*! exports provided: GeofencelistComponent */

    /***/
    function srcAppPagesGeofenceGeofencelistGeofencelistComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeofencelistComponent", function () {
        return GeofencelistComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

      var _c0 = ["map2"];

      function GeofencelistComponent_ng_template_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Geofence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeofencelistComponent_ng_template_39_Template_button_click_3_listener() {
            var modal_r4 = ctx.$implicit;
            return modal_r4.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "agm-map", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r1.lat)("longitude", ctx_r1.lng)("zoom", ctx_r1.zoom)("styles", ctx_r1.styles);
        }
      }

      function GeofencelistComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Geofence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeofencelistComponent_ng_template_41_Template_button_click_3_listener() {
            var modal_r7 = ctx.$implicit;
            return modal_r7.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "agm-map", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r3.lat)("longitude", ctx_r3.lng)("zoom", ctx_r3.zoom)("styles", ctx_r3.styles);
        }
      }

      var GeofencelistComponent = /*#__PURE__*/function () {
        function GeofencelistComponent(modalService) {
          _classCallCheck(this, GeofencelistComponent);

          this.modalService = modalService;
          this.lat = -34.397;
          this.lng = 150.644;
          this.latA = -34.754764;
          this.lngA = 149.736246;
          this.zoom = 8;
          this.styles = [{
            featureType: 'all',
            stylers: [{
              saturation: -80
            }]
          }, {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{
              hue: '#00ffee'
            }, {
              saturation: 50
            }]
          }, {
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [{
              visibility: 'off'
            }]
          }];
        }

        _createClass(GeofencelistComponent, [{
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

        return GeofencelistComponent;
      }();

      GeofencelistComponent.ɵfac = function GeofencelistComponent_Factory(t) {
        return new (t || GeofencelistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
      };

      GeofencelistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GeofencelistComponent,
        selectors: [["app-geofencelist"]],
        viewQuery: function GeofencelistComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map1 = _t.first);
          }
        },
        decls: 43,
        vars: 0,
        consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-12", "text-right"], ["routerLink", "/pages/geofence/add", 1, "btn", "btn-primary", "text-white", "mb-3"], [1, "col-md-3"], [1, "mb-0"], [1, "d-flex"], [1, "ml-auto"], ["routerLink", "/pages/geofence/edit", 1, "cursor_pointer"], [1, "fas", "fa-pencil-alt"], ["href", "javascript:void()", 1, "ml-2"], [1, "fas", "fa-trash"], [1, "cursor_pointer", 3, "click"], ["content3", ""], ["content4", ""], [1, "modal-header", "p-2"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["action", ""], [1, "form-group"], ["type", "text", "placeholder", "Add Geofence Name", 1, "form-control"], [3, "latitude", "longitude", "zoom", "styles"], ["map2", ""], [1, "col-12"], [1, "btn", "theme_btn", "mt-3"], ["type", "text", "placeholder", "Edit Geofence Name", 1, "form-control"]],
        template: function GeofencelistComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Geofence");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Geo Fencing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Geo Fencing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeofencelistComponent_Template_a_click_24_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

              return ctx.editspeech(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Geo Fencing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeofencelistComponent_Template_a_click_35_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

              return ctx.editspeech(_r2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, GeofencelistComponent_ng_template_39_Template, 17, 4, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, GeofencelistComponent_ng_template_41_Template, 17, 4, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMap"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlb2ZlbmNlL2dlb2ZlbmNlbGlzdC9nZW9mZW5jZWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeofencelistComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-geofencelist',
            templateUrl: './geofencelist.component.html',
            styleUrls: ['./geofencelist.component.css']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }];
        }, {
          map1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['map2', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=geofence-geofence-module-es5.js.map