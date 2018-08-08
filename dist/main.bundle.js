webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__ = __webpack_require__("./src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__goal_goal_component__ = __webpack_require__("./src/app/goal/goal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__risk_evaluation_risk_evaluation_component__ = __webpack_require__("./src/app/risk-evaluation/risk-evaluation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_b_data_b_component__ = __webpack_require__("./src/app/data-b/data-b.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// Initialize Firebase
var config = {
    apiKey: "AIzaSyDyMl_Je9X58h4vdI5FeQKVWL3JSeRnzCU",
    authDomain: "prac1-fa07d.firebaseapp.com",
    databaseURL: "https://prac1-fa07d.firebaseio.com",
    projectId: "prac1-fa07d",
    storageBucket: "prac1-fa07d.appspot.com",
    messagingSenderId: "639517938043"
};
__WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](config);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__goal_goal_component__["a" /* GoalComponent */],
                __WEBPACK_IMPORTED_MODULE_10__risk_evaluation_risk_evaluation_component__["a" /* RiskEvaluationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__data_b_data_b_component__["a" /* DataBComponent */],
                __WEBPACK_IMPORTED_MODULE_12__search_search_component__["a" /* SearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__search_search_component__["a" /* SearchComponent */] },
                    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__["a" /* LandingComponent */] },
                    { path: 'Goal', component: __WEBPACK_IMPORTED_MODULE_9__goal_goal_component__["a" /* GoalComponent */] },
                    { path: 'Risk Evaluation', component: __WEBPACK_IMPORTED_MODULE_10__risk_evaluation_risk_evaluation_component__["a" /* RiskEvaluationComponent */] },
                    { path: 'data', component: __WEBPACK_IMPORTED_MODULE_11__data_b_data_b_component__["a" /* DataBComponent */] }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data-b/data-b.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    min-height: 500px;\r\n}\r\ndiv{\r\n    background-color: rgb(218, 213, 213);\r\n}\r\nbutton{\r\n    margin: 10px;\r\n}"

/***/ }),

/***/ "./src/app/data-b/data-b.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n<div class=\"d-flex justify-content-center\">\n<h1 *ngIf=\"g==1\">Technical Risk</h1>\n<h1 *ngIf=\"g==2\">Business Risk</h1>\n<h1 *ngIf=\"g==3\">Personnel Risk</h1>\n</div>\n<div class=\"d-flex justify-content-center\">\n  <button class=\"btn btn-info\" (click)=\"calc(1)\">Technical Risk</button>\n  <button class=\"btn btn-info\" (click)=\"calc(2)\">Business Risk</button>\n  <button class=\"btn btn-info\" (click)=\"calc(3)\">Personnel</button><del></del>\n</div>\n\n<div class=\"table-responsive-sm table-responsive-md table-responsive-lg\">\n<table class=\"table table-responsive table-bordered table-dark table-striped\">\n  <thead class=\"thead-dark\">\n    <tr>\n    <th>Taskname</th>\n    <th>Tasktype</th>\n    <th>Peakperiodofoccurence</th>\n    <th>Durationofoccurence</th>\n    <th>Influencedprojectsegment</th>\n    <th>Controlaction</th>\n    <th>Containmentaction</th>\n    <th>Avoidanceaction</th>\n    <th>Risk Category</th>\n    <th>Threat Level</th>\n    <th>Amount</th>\n    <th>Clientgoal</th>\n    <th>Equipment</th>\n    <th>Personnel</th>\n    <th>Stakeholders</th>\n  </tr>\n  </thead>\n  <tbody *ngIf=\"g!=0\" id=\"detail\">\n    <tr *ngFor=\"let task of taskData\">\n      <td>{{task.Taskname}}</td>\n      <td>{{task.Tasktype}}</td>\n      <td>{{task.Peakperiodofoccurence}}</td>\n      <td>{{task.Durationofoccurence}}</td>\n      <td>{{task.Influencedprojectsegment}}</td>\n      <td>{{task.Controlaction}}</td>\n      <td>{{task.Containmentaction}}</td>\n      <td>{{task.Avoidanceaction}}</td>\n      <td>{{task.Risk_category0}}</td>\n      <td>{{task.Threat_level0}}</td>\n      <td>{{task.Amount}}</td>\n      <td>{{task.Clientgoal}}</td>\n      <td>{{task.Equipment}}</td>\n      <td>{{task.Personnel}}</td>\n      <td>{{task.Stakeholders}}</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n</div>\n<app-footer></app-footer>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/data-b/data-b.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataBComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataBComponent = /** @class */ (function () {
    function DataBComponent() {
        this.userModel = {
            email: "",
            phone: "",
            password: ""
        };
        this.taskData = [];
        this.lowData = [];
        this.medData = [];
        this.userButton = [];
        this.g = 0;
    }
    //  writeUserData(){
    //   firebase.database().ref('users/').push(this.userModel, function(error) {
    //     if (error) {
    //       // The write failed...
    //       this.message("failed");
    //     } else {
    //       // Data saved successfully!
    //       this.message("successful");
    //     }
    //   });
    // }
    DataBComponent.prototype.calc = function (x) {
        var _this = this;
        this.g = x;
        this.taskData = [];
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('Tasks/').on('value', function (snapshot) {
            //let x = snapshot.child;
            snapshot.forEach(function (childSnapshot) {
                switch (_this.g) {
                    case 1:
                        if (childSnapshot.val().Threat_level == "Medium") {
                            _this.taskData.push(childSnapshot.val());
                        }
                        break;
                    case 2:
                        if (childSnapshot.val().Threat_level0 == 'Low') {
                            _this.taskData.push(childSnapshot.val());
                        }
                        break;
                    case 3:
                        if (childSnapshot.val().Threat_level == "High") {
                            _this.taskData.push(childSnapshot.val());
                        }
                        break;
                    default:
                        break;
                }
            });
            // console.log(this.userData);
        });
    };
    DataBComponent.prototype.ngOnInit = function () {
        // firebase.database().ref().on('value', (snapshot) => {
        //   //let x = snapshot.child;
        //   snapshot.forEach(snapshot=>{
        //     this.userButton.push(snapshot.key);
        //   });
        //   console.log(this.userButton);
        // });
    };
    DataBComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-data-b',
            template: __webpack_require__("./src/app/data-b/data-b.component.html"),
            styles: [__webpack_require__("./src/app/data-b/data-b.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DataBComponent);
    return DataBComponent;
}());

//    let p = (snapshot.val());
//   //  for (var m in p){
//   //    console.log(m);
//   //  }
//   var keys = Object.keys(p);
//   console.log(keys);
// for(var i=0; i < keys.length; i++){
//   var k = keys[i];
//   var mail = p[k].email;
//   var fone = p[k].phone;
//   var tr = document.createElement('tr');
//   var td = document.createElement('td');
//   var textnode = document.createTextNode('email : '+ mail );
//   tr.appendChild(td).appendChild(textnode);
//   var role = document.getElementById('detail');
//   document.body.insertBefore(tr,role.childNodes[1]);
//   var td2 = document.createElement('td');
//   var textnode2 = document.createTextNode('phone : '+ fone);
//   tr.appendChild(td2).appendChild(textnode2);
//   var role2 = document.getElementById('detail');
//   document.body.insertBefore(tr,role2.childNodes[1]);
// }
//console.log(p);
// let f = (snapshot.child('phone').val());
// console.log(f);
// $('#display').('<li>'+ name + '</li>' + '<li>'+ email + '</li>')
//console.log(p);


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "div{\r\n    background-color: rgb(139, 0, 133);\r\n    text-align: center;\r\n    color: white;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n    margin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5>Copyright reserved</h5>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/goal/goal.component.css":
/***/ (function(module, exports) {

module.exports = "div{\r\n    background-color: rgb(218, 213, 213);\r\n}\r\nlabel{\r\n    font-weight: bold;\r\n}\r\nh2{\r\n    color: purple;\r\n}\r\n.container-fluid{\r\n    min-height: 500px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/goal/goal.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"d-flex justify-content-center\">\n    <form action=\"\" method=\"\">\n      <div class=\"form-group\" id=\"first\">\n        <label for=\"sellist\">Client goal(select one):</label>\n      <select [(ngModel)]= \"goalModel.Clientgoal\" name=\"Client goal\" class=\"form-control\" id=\"myselect\" name=\"sellist\">\n        <option value=\"Revenue\">Revenue</option>\n        <option value=\"Cost\">Cost</option>\n        <option value=\"Efficiecy\">Efficiecy</option>\n        <option value=\"Productivity\">Productivity</option>\n        <option value=\"Decision support\">Decision support</option>\n        <option value=\"Customer experience\">Customer experience</option>\n        <option value=\"other\" id=\"me\">Other</option>\n      </select>\n        <input type=\"text\" name=\"other\" class=\"form-control\" placeholder=\"if other,please specify\">\n    </div>\n    <div class=\"form-group\">\n      <label>Stakeholders:</label>\n    <input type=\"text\" [(ngModel)]= \"goalModel.Stakeholders\" name=\"Stakeholders\" class=\"form-control\" placeholder=\"Stakeholders\" required>\n    </div>\n    <div>\n    <h2>Resources</h2>\n    <div class=\"form-inline form-group\">\n    <label>Amount:</label>\n    <input type=\"text\" [(ngModel)]= \"goalModel.Amount\" name=\"Amount\" class=\"form-control\" placeholder=\"Amount\" required>\n    </div>\n    <div class=\"form-inline form-group\">\n        <label>Equipment:</label>\n        <input type=\"text\" [(ngModel)]= \"goalModel.Equipment\" name=\"Equipment\" class=\"form-control\" placeholder=\"Equipment\" required>\n      </div>\n      <div class=\"form-inline form-group\">\n          <label>Personnel:</label>\n          <input type=\"text\" [(ngModel)]= \"goalModel.Personnel\" name=\"Personnel\" class=\"form-control\" placeholder=\"Personnel\" required>\n      </div>\n    </div>\n    <button class=\"btn btn-primary\" routerLink=\"/Risk Evaluation\" (click)=\"writeUserData2()\">Save</button>\n  </form>\n  </div>\n</div>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/goal/goal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GoalComponent = /** @class */ (function () {
    function GoalComponent() {
        this.goalModel = {
            Clientgoal: '',
            Stakeholders: '',
            Amount: '',
            Equipment: '',
            Personnel: ''
        };
    }
    //   constructor() { 
    //     firebase.database().ref('goals/').on('value', function(snapshot) {
    //       console.log(snapshot.val());
    // });
    //   }
    GoalComponent.prototype.writeUserData2 = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('Tasks/' + this.userId).update(this.goalModel, function (error) {
            if (error) {
                // The write failed...
                alert('Did not get your record,please check and try again.');
            }
            else {
                // Data saved successfully!
                alert('Got your inputs,please proceed.');
                location.assign('/Risk Evaluation');
            }
        });
    };
    GoalComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                // ...
                _this.userId = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid;
            }
            else {
                // User is signed out.
                // ...
            }
            // ...
        });
    };
    GoalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-goal',
            template: __webpack_require__("./src/app/goal/goal.component.html"),
            styles: [__webpack_require__("./src/app/goal/goal.component.css")]
        })
    ], GoalComponent);
    return GoalComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "nav{\r\n    background-color: purple;\r\n}\r\na:hover{\r\n    color: dodgerblue !important;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md  navbar-dark\">\n  <a class=\"navbar-brand\" routerLink=\"\">WELCOME</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link\" routerLink=\"/Home\">Home</a>\n        </li>   \n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/Goal\">Goal</a>\n        </li> \n        <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link\" routerLink=\"/Risk Evaluation\">Risk Evaluation</a>\n        </li> \n        <li class=\"nav-item\" routerLinkActive=\"active\">\n            <a class=\"nav-link\" routerLink=\"/data\">Records</a>\n        </li> \n    </ul>\n  </div>  \n</nav>\n<br>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/***/ (function(module, exports) {

module.exports = "div{\r\n    background-color: rgb(218, 213, 213);\r\n}\r\ntextarea{\r\n    height: 100px;\r\n}\r\nlabel{\r\n    font-weight: bold;\r\n}\r\nh2{\r\n    color: purple;\r\n}\r\n.container-fluid{\r\n    min-height: 500px;\r\n}"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n    <div class=\"d-flex justify-content-center\">\n<div class=\"col-lg-8\">\n  <form action=\"\" id=\"myform\">\n    <div class=\"form-group\">\n        <label for=\"sel8\">Task name:</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Task name\" [(ngModel)]= \"riskModel.Taskname\" name=\"sel8\" required>\n    </div>\n    <div class=\"form-group\" id=\"first\">\n        <label for=\"sel1\">Task type(select one):</label>\n      <select class=\"form-control\" id=\"sel2\" [(ngModel)]= \"riskModel.Tasktype\" name=\"sel1\">\n        <option value=\"Human-executed\">Human-executed</option>\n        <option value=\"Machine-executed\">Machine-executed</option>\n        <option value=\"Nature-executed\">Nature-executed</option>\n        <option id=\"me\">Other</option>\n      </select>\n        <input type=\"text\" [(ngModel)]= \"riskModel.Tasktype\" name=\"sel1\" class=\"form-control\" placeholder=\"if other,please specify\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"sel2\">Peak period of occurence(select one):</label>\n        <select class=\"form-control\" id=\"sel2\" [(ngModel)]= \"riskModel.Peakperiodofoccurence\" name=\"sel2\">\n          <option value=\"Start of project\">Start of project</option>\n          <option value=\"During project\">During project</option>\n          <option value=\"After project\">After project</option>\n          <option >Other</option>\n        </select>\n      <input type=\"text\" [(ngModel)]= \"riskModel.Peakperiodofoccurence\" name=\"sel2\" class=\"form-control\" placeholder=\"if other,please specify\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"sel3\">Duration of occurence(select one):</label>\n          <select class=\"form-control\" id=\"sel2\" [(ngModel)]= \"riskModel.Durationofoccurence\" name=\"sel3\">\n            <option value=\"Short\">Short</option>\n            <option value=\"Long-term\">Long-term</option>\n            <option value=\"Occational\">Occational</option>\n            <option value=\"Rarely\">Rarely</option>\n            <option >Other</option>\n          </select>\n        <input type=\"text\" [(ngModel)]= \"riskModel.Durationofoccurence\" name=\"sel3\" class=\"form-control\" placeholder=\"if other,please specify\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"sel4\">Influenced project segment(select one):</label>\n            <select class=\"form-control\" id=\"sel2\" [(ngModel)]= \"riskModel.Influencedprojectsegment\" name=\"sel4\">\n              <option value=\"Money\">Money</option>\n              <option value=\"Completion time\">Completion time</option>\n              <option value=\"Project personnel\">Project personnel</option>\n              <option >Other</option>\n            </select>\n          <input type=\"text\" [(ngModel)]= \"riskModel.Influencedprojectsegment\" name=\"sel4\" class=\"form-control\" placeholder=\"if other,please specify\">\n          </div>\n          <H2>Expert's mitigation opinion</H2>\n          <div class=\"form-group\">\n              <label for=\"sel5\">Avoidance action:</label>\n            <textarea type=\"text\" class=\"form-control\" placeholder=\"Avoidance action\" [(ngModel)]= \"riskModel.Avoidanceaction\" name=\"sel5\" required></textarea>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"sel6\">Control action:</label>\n              <textarea type=\"text\" class=\"form-control\" placeholder=\"Control action\" [(ngModel)]= \"riskModel.Controlaction\" name=\"sel6\" required></textarea>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"sel7\">Containment action:</label>\n                <textarea type=\"text\" class=\"form-control\" placeholder=\"Containment action\" [(ngModel)]= \"riskModel.Containmentaction\" name=\"sel7\" required></textarea>\n                </div>\n    <button class=\"btn btn-primary\" (click)=\"writeUserData()\">Submit</button>\n  </form>\n</div>\n</div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.riskModel = {
            Taskname: '',
            Tasktype: '',
            Peakperiodofoccurence: '',
            Durationofoccurence: '',
            Influencedprojectsegment: '',
            Avoidanceaction: '',
            Controlaction: '',
            Containmentaction: ''
        };
    }
    LandingComponent.prototype.writeUserData = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('Tasks/' + this.userId).update(this.riskModel, function (error) {
            if (error) {
                // The write failed...
                this.message("failed");
                alert('Did not get your inputs,please check and try again.');
            }
            else {
                // Data saved successfully!
                // console.log("successful");
                alert('Got your inputs,please proceed.');
                location.assign('/Goal');
            }
        });
    };
    // number(){
    //   alert("this is me");
    // }
    // others(){
    //   alert("<input type='text' class='form-control' placeholder='other?'>");
    //   }
    //   yesnoCheck(){
    //     if ( document.getElementById("me").click){
    //       document.getElementById("ifYes").style.display = "block";
    //     } else {
    //       document.getElementById("ifYes").style.display = "none";
    //     }
    //   }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('Tasks/').on('value', function (snapshot) {
            // console.log(snapshot.key);
        });
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInAnonymously().catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // console.log(errorCode,errorMessage);
            // ...
        });
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                // ...
                _this.userId = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid;
            }
            else {
                // User is signed out.
                // ...
            }
            // ...
        });
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("./src/app/landing/landing.component.html"),
            styles: [__webpack_require__("./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/risk-evaluation/risk-evaluation.component.css":
/***/ (function(module, exports) {

module.exports = "div{\r\n    background-color: rgb(218, 213, 213);\r\n}\r\nlabel{\r\n    font-weight: bold;\r\n}\r\noption{\r\n    color: black;\r\n}\r\nh2{\r\n    color: purple;\r\n}\r\n.container-fluid{\r\n    min-height: 500px;\r\n}\r\n.d-flex{\r\n    padding-top: 90px;\r\n}"

/***/ }),

/***/ "./src/app/risk-evaluation/risk-evaluation.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"d-flex justify-content-center\">\n      <form action=\"\" method=\"\">\n          <div class=\"form-group\" id=\"first\">\n            <label for=\"Probability of occurence\">Probability of occurence(select one):</label>\n          <select class=\"form-control\" id=\"myselect\" [(ngModel)]= \"reModel.Probabilityofoccurence\" name=\"Probability of occurence\">\n            <option value=\"0.8\">Very likely</option>\n            <option value=\"0.6\">More likely</option>\n            <option value=\"0.5\">Likely</option>\n            <option value=\"0.4\">Less likely</option>\n            <option value=\"0.2\">Not likely</option>\n          </select>\n        </div>\n        <div class=\"form-group\" id=\"first\">\n            <label for=\"Severity\">Severity(select one):</label>\n          <select class=\"form-control\" id=\"myselect\" [(ngModel)]= \"reModel.Severity\" name=\"Severity\">\n            <option value=\"10\">Very harmful</option>\n            <option value=\"8\">More harmful</option>\n            <option value=\"6\">Harmful</option>\n            <option value=\"4\">Less harmful</option>\n            <option value=\"2\">Not harmful</option>\n          </select>\n        </div>\n        <button class=\"btn btn-primary\" (click)=\"writeUserData()\">Save</button>\n      </form>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/risk-evaluation/risk-evaluation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiskEvaluationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RiskEvaluationComponent = /** @class */ (function () {
    function RiskEvaluationComponent() {
        this.reModel = {
            Probabilityofoccurence: '',
            Severity: '',
        };
        this.recLow = {
            Threat_level: "Low",
            Risk_category0: "Business"
        };
        this.recMed = {
            Threat_level: "Medium",
            Risk_category1: "Technical"
        };
        this.recHigh = {
            Threat_level: "High",
            Risk_category2: "Project"
        };
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('risk evaluation/').on('value', function (snapshot) {
            // console.log(snapshot.val());
        });
    }
    RiskEvaluationComponent.prototype.writeUserData = function () {
        var newMoel = {
            Probabilityofoccurence: parseFloat(this.reModel.Probabilityofoccurence),
            Severity: parseFloat(this.reModel.Severity),
            impact: parseFloat(this.reModel.Probabilityofoccurence) * parseFloat(this.reModel.Severity)
        };
        if (newMoel.impact >= 0.4 && newMoel.impact <= 3) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('Tasks/' + this.userId).update(this.recLow, function (error) {
                if (error) {
                    // console.log("failed");
                    alert('Did not get your inputs,please check and try again.');
                }
                else {
                    // console.log("successful");
                    alert('Got your inputs,Thank you.');
                    location.assign('/data');
                }
            });
        }
        else if (newMoel.impact >= 3 && newMoel.impact <= 6) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('Tasks/' + this.userId).update(this.recMed, function (error) {
                if (error) {
                    // console.log("failed");
                    alert('Did not get your inputs,please check and try again.');
                }
                else {
                    // console.log("successful");
                    alert('Got your inputs,Thank you.');
                    location.assign('/data');
                }
            });
        }
        else if (newMoel.impact >= 6 && newMoel.impact <= 8) {
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('Tasks/' + this.userId).update(this.recHigh, function (error) {
                if (error) {
                    // console.log("failed");
                    alert('Did not get your inputs,please check and try again.');
                }
                else {
                    // console.log("successful");
                    alert('Got your inputs,Thank you.');
                    location.assign('/data');
                }
            });
        }
    };
    RiskEvaluationComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                // ...
                _this.userId = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid;
            }
            else {
                // User is signed out.
                // ...
            }
            // ...
        });
    };
    RiskEvaluationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-risk-evaluation',
            template: __webpack_require__("./src/app/risk-evaluation/risk-evaluation.component.html"),
            styles: [__webpack_require__("./src/app/risk-evaluation/risk-evaluation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RiskEvaluationComponent);
    return RiskEvaluationComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "textarea{\r\n    height: 100px;\r\n}\r\nlabel{\r\n    font-weight: bold;\r\n}\r\nh2{\r\n    color: purple;\r\n}\r\ndiv{\r\n    background-color: rgb(218, 213, 213);\r\n}\r\n.container-fluid{\r\n    min-height: 500px;\r\n}"

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"d-flex justify-content-center\">\n<div class=\"col-lg-8\">\n<form *ngIf=\"g==0\" action=\"\" id=\"myform\">\n  <div class=\"form-group\">\n      <label for=\"sel8\">Task name:</label>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Task name\" [(ngModel)]= \"riskModel.Taskname\" name=\"sel8\" required>\n  </div>\n  <div class=\"form-group\" id=\"first\">\n      <label for=\"sel1\">Task type(select one):</label>\n    <select class=\"form-control\" id=\"sel2\" [(ngModel)]= \"riskModel.Tasktype\" name=\"sel1\">\n      <option value=\"Human-executed\">Human-executed</option>\n      <option value=\"Machine-executed\">Machine-executed</option>\n      <option value=\"Nature-executed\">Nature-executed</option>\n      <option id=\"me\">Other</option>\n    </select>\n      <input type=\"text\" [(ngModel)]= \"riskModel.Tasktype\" name=\"sel1\" class=\"form-control\" placeholder=\"if other,please specify\">\n  </div>\n  <div class=\"form-group\">\n      <label for=\"sel2\">Peak period of occurence(select one):</label>\n      <select class=\"form-control\" id=\"sel2\" [(ngModel)]= \"riskModel.Peakperiodofoccurence\" name=\"sel2\">\n        <option value=\"Start of project\">Start of project</option>\n        <option value=\"During project\">During project</option>\n        <option value=\"After project\">After project</option>\n        <option >Other</option>\n      </select>\n    <input type=\"text\" [(ngModel)]= \"riskModel.Peakperiodofoccurence\" name=\"sel2\" class=\"form-control\" placeholder=\"if other,please specify\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"sel3\">Duration of occurence(select one):</label>\n        <select class=\"form-control\" id=\"sel2\" [(ngModel)]= \"riskModel.Durationofoccurence\" name=\"sel3\">\n          <option value=\"Short\">Short</option>\n          <option value=\"Long-term\">Long-term</option>\n          <option value=\"Occational\">Occational</option>\n          <option value=\"Rarely\">Rarely</option>\n          <option >Other</option>\n        </select>\n      <input type=\"text\" [(ngModel)]= \"riskModel.Durationofoccurence\" name=\"sel3\" class=\"form-control\" placeholder=\"if other,please specify\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"sel4\">Influenced project segment(select one):</label>\n          <select class=\"form-control\" id=\"sel2\" [(ngModel)]= \"riskModel.Influencedprojectsegment\" name=\"sel4\">\n            <option value=\"Money\">Money</option>\n            <option value=\"Completion time\">Completion time</option>\n            <option value=\"Project personnel\">Project personnel</option>\n            <option >Other</option>\n          </select>\n        <input type=\"text\" [(ngModel)]= \"riskModel.Influencedprojectsegment\" name=\"sel4\" class=\"form-control\" placeholder=\"if other,please specify\">\n        </div>\n  <button class=\"btn btn-primary\" (click)=\"find()\">Search</button>\n</form>\n<div class=\"table-responsive-sm table-responsive-md table-responsive-lg\">\n  <table *ngIf=\"g!=0\" class=\"table table-responsive table-bordered table-dark table-striped\">\n    <thead class=\"thead-dark\">\n      <tr>\n      <th>Taskname</th>\n      <th>Tasktype</th>\n      <th>Control action</th>\n      <th>Containment action</th>\n      <th>Avoidance action</th>\n    </tr>\n    </thead>\n    <tbody id=\"detail\">\n      <tr *ngFor=\"let rep of replyDATA\">\n        <td>{{rep.Taskname}}</td>\n        <td>{{rep.Tasktype}}</td>\n        <td>{{rep.Controlaction}}</td>\n        <td>{{rep.Containmentaction}}</td>\n        <td>{{rep.Avoidanceaction}}</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n</div>\n</div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.riskModel = {
            Taskname: '',
            Tasktype: '',
            Peakperiodofoccurence: '',
            Durationofoccurence: '',
            Influencedprojectsegment: ''
        };
        this.replyDATA = [];
        this.g = 0;
    }
    SearchComponent.prototype.find = function () {
        var _this = this;
        this.replyDATA = [];
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('Tasks/').on('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                if (childSnapshot.val().Taskname == _this.riskModel.Taskname && childSnapshot.val().Tasktype == _this.riskModel.Tasktype) {
                    _this.replyDATA.push(childSnapshot.val());
                    _this.g = 1;
                    // console.log(childSnapshot.val());
                    // console.log('hi');
                }
                else {
                    location.assign('Home');
                }
            });
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('Tasks/').on('value', function (snapshot) {
            // console.log(snapshot.key);
        });
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInAnonymously().catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // console.log(errorCode,errorMessage);
            // ...
        });
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                // ...
                _this.userId = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid;
            }
            else {
                // User is signed out.
                // ...
            }
            // ...
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map