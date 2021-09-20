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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/common.service */
      "./src/app/_services/common.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

      var _c0 = ["map2"];

      function GeofenceaddComponent_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Please enter valid name(Max Limit - 45) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var GeofenceaddComponent = /*#__PURE__*/function () {
        function GeofenceaddComponent(router, Srvc, toaster, fb) {
          var _this = this;

          _classCallCheck(this, GeofenceaddComponent);

          this.router = router;
          this.Srvc = Srvc;
          this.toaster = toaster;
          this.fb = fb; // lat = -34.397;
          // lng = 150.644;
          // latA = -34.754764;
          // lngA = 149.736246;
          // zoom = 8;
          // styles: any = [
          //   {
          //     featureType: "all",
          //     stylers: [
          //       {
          //         saturation: -80,
          //       },
          //     ],
          //   },
          //   {
          //     featureType: "road.arterial",
          //     elementType: "geometry",
          //     stylers: [
          //       {
          //         hue: "#00ffee",
          //       },
          //       {
          //         saturation: 50,
          //       },
          //     ],
          //   },
          //   {
          //     featureType: "poi.business",
          //     elementType: "labels",
          //     stylers: [
          //       {
          //         visibility: "off",
          //       },
          //     ],
          //   },
          // ];

          this.lat = 40.7128;
          this.lng = -74.0060;
          this.pointList = [];
          this.selectedArea = 0;
          this.sendZoom = 14;

          this.initDrawingManager = function (map) {
            var self = _this;
            var options = {
              drawingControl: true,
              drawingControlOptions: {
                drawingModes: ["polygon"]
              },
              polygonOptions: {
                draggable: true,
                editable: true
              },
              drawingMode: google.maps.drawing.OverlayType.POLYGON
            };
            _this.drawingManager = new google.maps.drawing.DrawingManager(options);

            _this.drawingManager.setMap(map);

            google.maps.event.addListener(_this.drawingManager, "overlaycomplete", function (event) {
              if (event.type === google.maps.drawing.OverlayType.POLYGON) {
                var paths = event.overlay.getPaths();

                for (var p = 0; p < paths.getLength(); p++) {
                  google.maps.event.addListener(paths.getAt(p), "set_at", function () {
                    if (!event.overlay.drag) {
                      self.updatePointList(event.overlay.getPath());
                    }
                  });
                  google.maps.event.addListener(paths.getAt(p), "insert_at", function () {
                    self.updatePointList(event.overlay.getPath());
                  });
                  google.maps.event.addListener(paths.getAt(p), "remove_at", function () {
                    self.updatePointList(event.overlay.getPath());
                  });
                }

                self.updatePointList(event.overlay.getPath());
                _this.selectedShape = event.overlay;
                _this.selectedShape.type = event.type;
              }

              if (event.type !== google.maps.drawing.OverlayType.MARKER) {
                // Switch back to non-drawing mode after drawing a shape.
                self.drawingManager.setDrawingMode(null); // To hide:

                self.drawingManager.setOptions({
                  drawingControl: false
                });
              }
            });
          };

          this.addGeofenceForm = this.fb.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(45), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]]
          });
        }

        _createClass(GeofenceaddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setCurrentPosition();
          }
        }, {
          key: "onMapReady",
          value: function onMapReady(map) {
            this.Map = map;
            this.initDrawingManager(map);
          }
        }, {
          key: "getZoom",
          value: function getZoom(event) {
            console.log(event);
            this.sendZoom = event;
          }
        }, {
          key: "setCurrentPosition",
          value: function setCurrentPosition() {
            var _this2 = this;

            if ("geolocation" in navigator) {
              navigator.geolocation.getCurrentPosition(function (position) {
                _this2.lat = position.coords.latitude;
                _this2.lng = position.coords.longitude;
              });
            }
          }
        }, {
          key: "deleteSelectedShape",
          value: function deleteSelectedShape() {
            if (this.selectedShape) {
              this.selectedShape.setMap(null);
              this.selectedArea = 0;
              this.pointList = []; // To show:

              this.drawingManager.setOptions({
                drawingControl: true
              });
              this.onMapReady(this.Map);
            }
          }
        }, {
          key: "updatePointList",
          value: function updatePointList(path) {
            this.pointList = [];
            var len = path.getLength();

            for (var i = 0; i < len; i++) {
              this.pointList.push(path.getAt(i).toJSON());
            }

            this.selectedArea = google.maps.geometry.spherical.computeArea(path);
          } // Avoid empty Blank Space

        }, {
          key: "avoidBlankSpace",
          value: function avoidBlankSpace(e, ref) {
            if (!ref.length) {
              e.preventDefault();
            }
          }
        }, {
          key: "addGeoFence",
          value: function addGeoFence() {
            var _this3 = this;

            if (this.pointList.length != 0) {
              var body = {
                name: this.addGeofenceForm.controls["name"].value,
                points: [],
                zoom: this.sendZoom
              };
              body.points = this.pointList;
              this.Srvc.postApi("", body).subscribe(function (data) {
                if (data.statusCode == 200) {
                  _this3.toaster.success("Geofence Added");

                  _this3.router.navigate(["/pages/geofencelist"]);
                } else {
                  _this3.toaster.error("Failed to add Geofence");
                }
              });
            } else {
              this.toaster.error("Please Add geofence");
            }
          }
        }]);

        return GeofenceaddComponent;
      }();

      GeofenceaddComponent.ɵfac = function GeofenceaddComponent_Factory(t) {
        return new (t || GeofenceaddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      GeofenceaddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GeofenceaddComponent,
        selectors: [["app-geofenceadd"]],
        viewQuery: function GeofenceaddComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map1 = _t.first);
          }
        },
        decls: 20,
        vars: 6,
        consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "col-md-12", "text-right"], ["routerLink", "/pages/geofence", 1, "btn", "btn-primary"], [3, "formGroup"], [1, "form-group"], ["type", "text", "matInput", "", "placeholder", "Add Geofence Name", "formControlName", "name", 1, "form-control", 3, "keydown.space"], ["ref", ""], [4, "ngIf"], [3, "latitude", "longitude", "zoom", "mapReady", "zoomChange"], [1, "btn", "btn-primary", "mt-3", 3, "disabled", "click"], [1, "btn", "btn-danger", "mt-3", "ml-3", 3, "click"]],
        template: function GeofenceaddComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.space", function GeofenceaddComponent_Template_input_keydown_space_12_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

              return ctx.avoidBlankSpace($event, _r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GeofenceaddComponent_mat_error_14_Template, 2, 0, "mat-error", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "agm-map", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapReady", function GeofenceaddComponent_Template_agm_map_mapReady_15_listener($event) {
              return ctx.onMapReady($event);
            })("zoomChange", function GeofenceaddComponent_Template_agm_map_zoomChange_15_listener($event) {
              return ctx.getZoom($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeofenceaddComponent_Template_button_click_16_listener() {
              return ctx.addGeoFence();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeofenceaddComponent_Template_button_click_18_listener() {
              return ctx.deleteSelectedShape();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addGeofenceForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addGeofenceForm.controls["name"].touched && ctx.addGeofenceForm.controls["name"].invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.sendZoom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.addGeofenceForm.invalid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmMap"]],
        styles: [".sebm-google-map-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 500px;\n    display: flex;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VvZmVuY2UvZ2VvZmVuY2VhZGQvZ2VvZmVuY2VhZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2VvZmVuY2UvZ2VvZmVuY2VhZGQvZ2VvZmVuY2VhZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeofenceaddComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-geofenceadd',
            templateUrl: './geofenceadd.component.html',
            styleUrls: ['./geofenceadd.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, {
          map1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["map2", {
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
      /* harmony import */


      var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/common.service */
      "./src/app/_services/common.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

      var _c0 = ["AgmMap"];

      function GeofenceeditComponent_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Please enter name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var GeofenceeditComponent = /*#__PURE__*/function () {
        function GeofenceeditComponent(service, toastr, fb, router) {
          var _this4 = this;

          _classCallCheck(this, GeofenceeditComponent);

          this.service = service;
          this.toastr = toastr;
          this.fb = fb;
          this.router = router;
          this.lat = 20.5937;
          this.lng = 78.9629;
          this.pointList = [];
          this.selectedArea = 0;
          this.test = null;
          this.editForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });

          this.initDrawingManager = function (map) {
            // debugger
            var self = _this4;
            var options = {
              drawingControl: true,
              drawingControlOptions: {
                drawingModes: ['polygon']
              },
              polygonOptions: {
                draggable: true,
                editable: true
              },
              drawingMode: google.maps.drawing.OverlayType.POLYGON
            };
            _this4.drawingManager = new google.maps.drawing.DrawingManager(options);

            _this4.drawingManager.setMap(map);

            google.maps.event.addListener(_this4.drawingManager, 'overlaycomplete', function (event) {
              if (event.type === google.maps.drawing.OverlayType.POLYGON) {
                var paths = event.overlay.getPaths();

                for (var p = 0; p < paths.getLength(); p++) {
                  google.maps.event.addListener(paths.getAt(p), 'set_at', function () {
                    if (!event.overlay.drag) {
                      self.updatePointList(event.overlay.getPath());
                    }
                  });
                  google.maps.event.addListener(paths.getAt(p), 'insert_at', function () {
                    self.updatePointList(event.overlay.getPath());
                  });
                  google.maps.event.addListener(paths.getAt(p), 'remove_at', function () {
                    self.updatePointList(event.overlay.getPath());
                  });
                }

                self.updatePointList(event.overlay.getPath());
                _this4.selectedShape = event.overlay;
                _this4.selectedShape.type = event.type;
              }

              if (event.type !== google.maps.drawing.OverlayType.MARKER) {
                // Switch back to non-drawing mode after drawing a shape.
                self.drawingManager.setDrawingMode(null); // To hide:

                self.drawingManager.setOptions({
                  drawingControl: false
                });
              }
            });
          };

          var drawPolygonArr = [];
          this.service.get("").subscribe(function (data) {
            if (data.statusCode == 200) {
              _this4.getZoom = data.data.zoom;
              _this4.lng = data.data.geoPoints.coordinates[0][data.data.geoPoints.coordinates[0].length - 1][0];
              _this4.lat = data.data.geoPoints.coordinates[0][data.data.geoPoints.coordinates[0].length - 1][1]; //console.log(this.lat);

              _this4.editForm.controls['name'].setValue(data.data.name);

              for (var i = 0; i < data.data.geoPoints.coordinates[0].length; i++) {
                // drawPolygonArr.push(data.data.geoFence.coordinates[0][i]);
                drawPolygonArr.push({
                  lat: data.data.geoPoints.coordinates[0][i][1],
                  lng: data.data.geoPoints.coordinates[0][i][0]
                });
              }

              _this4.constructTriangle = new google.maps.Polygon({
                paths: drawPolygonArr,
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                editable: true,
                draggable: true
              });

              _this4.constructTriangle.setMap(null); //this.pointList=drawPolygonArr;


              _this4.constructTriangle.setMap(_this4.Map); // console.log(data.data.geoFence.coordinates[0]);

            } else {
              _this4.router.navigate(['/pages/geofencelist']);
            }
          });
          this.test = drawPolygonArr;
        }

        _createClass(GeofenceeditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// console.log(this.pointList);
          }
        }, {
          key: "onMapReady",
          value: function onMapReady(map) {
            this.Map = map; // console.log("ooooooooooooooo",this.test);

            if (this.test == null) {
              this.initDrawingManager(map);
            }
          }
        }, {
          key: "setCurrentPosition",
          value: function setCurrentPosition() {
            var _this5 = this;

            if ('geolocation' in navigator) {
              navigator.geolocation.getCurrentPosition(function (position) {
                _this5.lat = position.coords.latitude;
                _this5.lng = position.coords.longitude;
              });
            }
          }
        }, {
          key: "deleteSelectedShape",
          value: function deleteSelectedShape() {
            if (this.selectedShape) {
              // console.log("hi");
              this.selectedShape.setMap(null);
              this.selectedArea = 0;
              this.pointList = []; // To show:

              this.drawingManager.setOptions({
                drawingControl: true
              });
              this.onMapReady(this.Map);
            } else {
              // console.log("bye");
              this.test = null;
              this.onMapReady(this.Map); //this.Map=null;

              this.constructTriangle.setMap(null);
              this.constructTriangle = null;
            }
          }
        }, {
          key: "updatePointList",
          value: function updatePointList(path) {
            this.pointList = [];
            var len = path.getLength();

            for (var i = 0; i < len; i++) {
              this.pointList.push(path.getAt(i).toJSON());
            }

            this.selectedArea = google.maps.geometry.spherical.computeArea(path);
          }
        }, {
          key: "getPolygonCoordinates",
          value: function getPolygonCoordinates(draggablePolygon) {
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

            this.pointList = null;
            this.pointList = polyArrayLatLng;
          }
        }, {
          key: "updateZoom",
          value: function updateZoom(event) {
            this.getZoom = event;
          }
        }, {
          key: "updateGeoFence",
          value: function updateGeoFence() {
            var _this6 = this;

            // console.log("list",this.pointList);
            // console.log("test,",this.test);
            if (this.pointList.length != 0 || this.constructTriangle != null) {
              if (this.test != null) {
                this.getPolygonCoordinates(this.constructTriangle);
              }

              var body;
              body = {
                'name': this.editForm.controls['name'].value,
                'points': [],
                'zoom': this.getZoom
              }; // console.log("data sending",this.pointList);

              body.points = this.pointList;
              this.service.put(body).subscribe(function (data) {
                if (data.statusCode == 200) {
                  _this6.toastr.success("Updated successfully");

                  _this6.router.navigate(['/pages/geofencelist']);
                }
              });
            } else {
              this.toastr.error("Please Add Geofence");
            }
          }
        }]);

        return GeofenceeditComponent;
      }();

      GeofenceeditComponent.ɵfac = function GeofenceeditComponent_Factory(t) {
        return new (t || GeofenceeditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      GeofenceeditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GeofenceeditComponent,
        selectors: [["app-geofenceedit"]],
        viewQuery: function GeofenceeditComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Map = _t.first);
          }
        },
        decls: 19,
        vars: 6,
        consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "col-md-12", "text-right"], ["routerLink", "/pages/geofence", 1, "btn", "btn-primary"], [3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "name", "placeholder", "Edit Geofence Name", 1, "form-control"], [4, "ngIf"], [3, "latitude", "longitude", "zoom", "mapReady", "zoomChange"], [1, "btn", "btn-primary", "mt-3", 3, "disabled", "click"], [1, "btn", "btn-danger", "mt-3", "ml-3", 3, "click"]],
        template: function GeofenceeditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GeofenceeditComponent_mat_error_13_Template, 2, 0, "mat-error", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "agm-map", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapReady", function GeofenceeditComponent_Template_agm_map_mapReady_14_listener($event) {
              return ctx.onMapReady($event);
            })("zoomChange", function GeofenceeditComponent_Template_agm_map_zoomChange_14_listener($event) {
              return ctx.updateZoom($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeofenceeditComponent_Template_button_click_15_listener() {
              return ctx.updateGeoFence();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeofenceeditComponent_Template_button_click_17_listener() {
              return ctx.deleteSelectedShape();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editForm.controls["name"].touched && ctx.editForm.controls["name"].invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.getZoom);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.editForm.invalid);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmMap"]],
        styles: [".sebm-google-map-container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 500px;\n    display: flex;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2VvZmVuY2UvZ2VvZmVuY2VlZGl0L2dlb2ZlbmNlZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nZW9mZW5jZS9nZW9mZW5jZWVkaXQvZ2VvZmVuY2VlZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeofenceeditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-geofenceedit',
            templateUrl: './geofenceedit.component.html',
            styleUrls: ['./geofenceedit.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, {
          Map: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

      var _c0 = ["map2"];

      function GeofencelistComponent_div_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Geofence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GeofencelistComponent_div_1_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GeofencelistComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeofencelistComponent_div_1_a_3_Template, 2, 0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Geo Fencing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GeofencelistComponent_div_1_span_10_Template, 5, 0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Geo Fencing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Geo Fencing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.editPermission);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.editPermission);
        }
      }

      function GeofencelistComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You don't have Permission to view this section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GeofencelistComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Geofence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeofencelistComponent_ng_template_4_Template_button_click_3_listener() {
            var modal_r9 = ctx.$implicit;
            return modal_r9.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "agm-map", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r4.lat)("longitude", ctx_r4.lng)("zoom", ctx_r4.zoom)("styles", ctx_r4.styles);
        }
      }

      function GeofencelistComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Geofence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeofencelistComponent_ng_template_6_Template_button_click_3_listener() {
            var modal_r12 = ctx.$implicit;
            return modal_r12.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "agm-map", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r6.lat)("longitude", ctx_r6.lng)("zoom", ctx_r6.zoom)("styles", ctx_r6.styles);
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
          this.permissions = JSON.parse(sessionStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].storageKey)).permissions;

          if (this.permissions.length == 0 || this.permissions == null || this.permissions == undefined) {
            this.editPermission = true;
            this.viewPermission = true;
          } else {
            this.editPermission = this.permissions[12].is_add_edit;
            this.viewPermission = this.permissions[12].is_view;
          }
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
        decls: 8,
        vars: 2,
        consts: [[1, "card"], ["class", "card-body", 4, "ngIf", "ngIfElse"], ["noPermission", ""], ["content3", ""], ["content4", ""], [1, "card-body"], [1, "row"], [1, "col-md-12", "text-right"], ["routerLink", "/pages/geofence/add", "class", "btn btn-primary text-white mb-3", 4, "ngIf"], [1, "col-md-3"], [1, "mb-0"], [1, "d-flex"], ["class", "ml-auto", 4, "ngIf"], [1, "ml-auto"], ["routerLink", "/pages/geofence/edit", 1, "cursor_pointer"], [1, "fas", "fa-pencil-alt"], ["href", "javascript:void()", 1, "ml-2"], [1, "fas", "fa-trash"], ["routerLink", "/pages/geofence/add", 1, "btn", "btn-primary", "text-white", "mb-3"], [1, "m-5", "d-flex", "align-items-center", "justify-content-center", "w-100"], [1, "modal-header", "p-2"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["action", ""], [1, "form-group"], ["type", "text", "placeholder", "Add Geofence Name", 1, "form-control"], [3, "latitude", "longitude", "zoom", "styles"], ["map2", ""], [1, "col-12"], [1, "btn", "theme_btn", "mt-3"], ["type", "text", "placeholder", "Edit Geofence Name", 1, "form-control"]],
        template: function GeofencelistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GeofencelistComponent_div_1_Template, 33, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GeofencelistComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GeofencelistComponent_ng_template_4_Template, 17, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GeofencelistComponent_ng_template_6_Template, 17, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewPermission)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmMap"]],
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