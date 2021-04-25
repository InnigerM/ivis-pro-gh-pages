(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/innigerm/Code/ivis/football-league-visualization-ivis-pro/src/main.ts */"zUnb");


/***/ }),

/***/ "85M1":
/*!************************************************!*\
  !*** ./src/app/services/csv-reader.service.ts ***!
  \************************************************/
/*! exports provided: CsvReaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvReaderService", function() { return CsvReaderService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CsvReaderService {
    constructor(http) {
        this.http = http;
    }
    loadFile(file) {
        return this.http.get(file, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            const regex = /"/g;
            const result = res.replace(regex, '').split('\n');
            return result;
        }));
    }
}
CsvReaderService.ɵfac = function CsvReaderService_Factory(t) { return new (t || CsvReaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CsvReaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CsvReaderService, factory: CsvReaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8wCr":
/*!***********************************************************!*\
  !*** ./src/app/components/domestic/domestic.component.ts ***!
  \***********************************************************/
/*! exports provided: DomesticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomesticComponent", function() { return DomesticComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_club_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/club.service */ "hXIf");
/* harmony import */ var _league_winners_league_winners_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./league-winners/league-winners.component */ "Z0FJ");



class DomesticComponent {
    constructor(clubSvc) {
        this.clubSvc = clubSvc;
        this.isLoadingEngland = true;
        this.isLoadingFrance = true;
        this.isLoadingGermany = true;
        this.isLoadingItaly = true;
        this.isLoadingSpain = true;
    }
    ngOnInit() {
        this.clubSvc.loadLeagueWinners('england').subscribe(clubs => {
            this.england = clubs.filter(club => club.year === 2019);
            this.isLoadingEngland = false;
        });
        // this.clubSvc.loadLeagueWinners('france').subscribe(clubs => {
        //   this.france = clubs.filter(club => club.year === 2018);
        // });
        this.clubSvc.loadLeagueWinners('germany').subscribe(clubs => {
            this.germany = clubs.filter(club => club.year === 2018);
            this.isLoadingGermany = false;
        });
        this.clubSvc.loadLeagueWinners('italy').subscribe(clubs => {
            this.italy = clubs.filter(club => club.year === 2018);
            this.isLoadingItaly = false;
        });
        this.clubSvc.loadLeagueWinners('spain').subscribe(clubs => {
            this.spain = clubs.filter(club => club.year === 2018);
            this.isLoadingSpain = false;
        });
    }
}
DomesticComponent.ɵfac = function DomesticComponent_Factory(t) { return new (t || DomesticComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_club_service__WEBPACK_IMPORTED_MODULE_1__["ClubService"])); };
DomesticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DomesticComponent, selectors: [["app-domestic"]], decls: 5, vars: 12, consts: [["id", "domestic"], [3, "dataSet", "league", "isLoading"]], template: function DomesticComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-league-winners", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-league-winners", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-league-winners", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-league-winners", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSet", ctx.england)("league", "England")("isLoading", ctx.isLoadingEngland);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSet", ctx.germany)("league", "Germany")("isLoading", ctx.isLoadingGermany);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSet", ctx.italy)("league", "Italy")("isLoading", ctx.isLoadingItaly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSet", ctx.spain)("league", "Spain")("isLoading", ctx.isLoadingSpain);
    } }, directives: [_league_winners_league_winners_component__WEBPACK_IMPORTED_MODULE_2__["LeagueWinnersComponent"]], styles: ["#domestic[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWVzdGljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoiZG9tZXN0aWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkb21lc3RpYyB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ "AK/9":
/*!***************************************************************!*\
  !*** ./src/app/components/status-bar/status-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: StatusBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBarComponent", function() { return StatusBarComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _international_international_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../international/international.component */ "NX/W");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _domestic_domestic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domestic/domestic.component */ "8wCr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function StatusBarComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Remarkable Domestic Seasons");
} }
function StatusBarComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Conclusion");
} }
function StatusBarComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "call_end");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class StatusBarComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
}
StatusBarComponent.ɵfac = function StatusBarComponent_Factory(t) { return new (t || StatusBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
StatusBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StatusBarComponent, selectors: [["app-status-bar"]], decls: 35, vars: 5, consts: [[3, "linear"], ["stepper", ""], ["label", "International Comparison", "state", "phone", 3, "stepControl"], [3, "formGroup"], ["mat-stroked-button", "", "color", "primary", "matStepperNext", ""], ["label", "Domestic Results", 3, "stepControl"], ["mat-stroked-button", "", "color", "accent", "matStepperPrevious", ""], ["state", "phone"], ["matStepLabel", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["matStepperIcon", "phone"]], template: function StatusBarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-horizontal-stepper", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-international");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-domestic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, StatusBarComponent_ng_template_17_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Special domestic seasons (e.g. Arsenal's invincibles)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, StatusBarComponent_ng_template_26_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Show final results");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StatusBarComponent_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r0.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, StatusBarComponent_ng_template_34_Template, 2, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("linear", ctx.isLinear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _international_international_component__WEBPACK_IMPORTED_MODULE_3__["InternationalComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperNext"], _domestic_domestic_component__WEBPACK_IMPORTED_MODULE_5__["DomesticComponent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepLabel"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_2__["MatStepperIcon"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["button[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzdGF0dXMtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "NX/W":
/*!*********************************************************************!*\
  !*** ./src/app/components/international/international.component.ts ***!
  \*********************************************************************/
/*! exports provided: InternationalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternationalComponent", function() { return InternationalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cl_winners_cl_winners_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cl-winners/cl-winners.component */ "QbdO");


class InternationalComponent {
    constructor() { }
    ngOnInit() {
    }
}
InternationalComponent.ɵfac = function InternationalComponent_Factory(t) { return new (t || InternationalComponent)(); };
InternationalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InternationalComponent, selectors: [["app-international"]], decls: 6, vars: 0, consts: [[1, "mat-body"]], template: function InternationalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Leagues compared internationally");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Introduction about international league contests and their comparison modes used");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-cl-winners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_cl_winners_cl_winners_component__WEBPACK_IMPORTED_MODULE_1__["ClWinnersComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcm5hdGlvbmFsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "QbdO":
/*!*****************************************************************************!*\
  !*** ./src/app/components/international/cl-winners/cl-winners.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ClWinnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClWinnersComponent", function() { return ClWinnersComponent; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "VphZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_club_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/club.service */ "hXIf");



class ClWinnersComponent {
    constructor(clubSvc) {
        this.clubSvc = clubSvc;
        this.winsByCountry = [];
        this.winsByClub = [];
        this.margin = 100;
        this.width = 1200 - (this.margin * 2);
        this.height = 600 - (this.margin * 2);
    }
    ngOnInit() {
        this.clubSvc.loadChampionsLeagueWinners().subscribe(clubs => {
            this.clWinners = clubs;
            this.countWinnersByCountry();
            this.createCountrySvg();
            this.drawCountryBars(this.winsByCountry);
            this.countWinnersByClub();
            this.createClubSvg();
            this.drawClubBars(this.winsByClub);
        });
    }
    countWinnersByCountry() {
        const winsByCountry = new Map();
        for (let winner of this.clWinners) {
            if (winsByCountry.has(winner.country)) {
                winsByCountry.set(winner.country, winsByCountry.get(winner.country) + 1);
            }
            else {
                winsByCountry.set(winner.country, 1);
            }
        }
        winsByCountry.forEach((count, country) => {
            this.winsByCountry.push({ country: country, count: count });
        });
        this.winsByCountry.sort((a, b) => b.count - a.count);
    }
    countWinnersByClub() {
        const winsByClub = [];
        this.clWinners.map(club => {
            const clubFound = winsByClub.find(c => {
                return c.name === club.name;
            });
            if (clubFound) {
                clubFound.wins = clubFound.wins + 1;
            }
            else {
                club.wins = 1;
                winsByClub.push(club);
            }
        });
        winsByClub.sort((a, b) => b.wins - a.wins);
        this.winsByClub = winsByClub;
    }
    createCountrySvg() {
        this.countrySvg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('figure#country')
            .append('svg')
            .attr('width', this.width + (this.margin * 2))
            .attr('height', this.height + (this.margin * 2))
            .append('g')
            .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
    }
    drawCountryBars(data) {
        const x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]()
            .range([0, this.width])
            .domain(data.map(d => d.country))
            .padding(0.2);
        this.countrySvg.append('g')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](x))
            .selectAll('text')
            .attr('transform', 'translate(-10,0)rotate(-45)')
            .style('font-size', '12px')
            .style('text-anchor', 'end');
        const y = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain([0, 20])
            .range([this.height, 0]);
        this.countrySvg.append('g')
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](y))
            .style('font-size', '12px');
        this.countrySvg.selectAll("bars")
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => x(d.country))
            .attr('y', d => y(d.count))
            .attr('width', x.bandwidth)
            .attr('height', (d) => this.height - y(d.count))
            .attr('fill', '#f59842');
    }
    createClubSvg() {
        this.clubSvg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('figure#club')
            .append('svg')
            .attr('width', this.width + (this.margin * 2))
            .attr('height', this.height + (this.margin * 2))
            .append('g')
            .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
    }
    drawClubBars(data) {
        const x = d3__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]()
            .range([0, this.width])
            .domain(data.map(d => d.name))
            .padding(0.2);
        this.clubSvg.append('g')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](x))
            .selectAll('text')
            .attr('transform', 'translate(-10,0)rotate(-45)')
            .style('font-size', '12px')
            .style('text-anchor', 'end');
        const y = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain([0, 15])
            .range([this.height, 0]);
        this.clubSvg.append('g')
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](y).ticks(15))
            .style('font-size', '12px');
        this.clubSvg.selectAll("bars")
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => x(d.name))
            .attr('y', d => y(d.wins))
            .attr('width', x.bandwidth)
            .attr('height', (d) => this.height - y(d.wins))
            .attr('fill', '#f59842');
    }
}
ClWinnersComponent.ɵfac = function ClWinnersComponent_Factory(t) { return new (t || ClWinnersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_club_service__WEBPACK_IMPORTED_MODULE_2__["ClubService"])); };
ClWinnersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClWinnersComponent, selectors: [["app-cl-winners"]], decls: 6, vars: 0, consts: [[1, "mat-title"], ["id", "country"], ["id", "club"]], template: function ClWinnersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Champions League Wins By Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Champions League Wins By Clubs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "figure", 2);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbC13aW5uZXJzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/status-bar/status-bar.component */ "AK/9");


class AppComponent {
    constructor() {
        this.title = 'ivisPro';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-status-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_1__["StatusBarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Z0FJ":
/*!********************************************************************************!*\
  !*** ./src/app/components/domestic/league-winners/league-winners.component.ts ***!
  \********************************************************************************/
/*! exports provided: LeagueWinnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueWinnersComponent", function() { return LeagueWinnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");




function LeagueWinnersComponent_mat_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 11);
} }
function LeagueWinnersComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeagueWinnersComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const club_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](club_r13.name);
} }
function LeagueWinnersComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeagueWinnersComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const club_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](club_r14.country);
} }
function LeagueWinnersComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeagueWinnersComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const club_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](club_r15.wins);
} }
function LeagueWinnersComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Draws");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeagueWinnersComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const club_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](club_r16.draws);
} }
function LeagueWinnersComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeagueWinnersComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const club_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](club_r17.points);
} }
function LeagueWinnersComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
function LeagueWinnersComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
class LeagueWinnersComponent {
    constructor() {
        this.displayedColumns = ['name', 'country', 'wins', 'draws', 'points'];
    }
    ngOnInit() {
    }
}
LeagueWinnersComponent.ɵfac = function LeagueWinnersComponent_Factory(t) { return new (t || LeagueWinnersComponent)(); };
LeagueWinnersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeagueWinnersComponent, selectors: [["app-league-winners"]], inputs: { dataSet: "dataSet", isLoading: "isLoading", league: "league" }, decls: 23, vars: 5, consts: [["mode", "indeterminate", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "country"], ["matColumnDef", "wins"], ["matColumnDef", "draws"], ["matColumnDef", "points"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mode", "indeterminate"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function LeagueWinnersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LeagueWinnersComponent_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LeagueWinnersComponent_th_7_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LeagueWinnersComponent_td_8_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LeagueWinnersComponent_th_10_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LeagueWinnersComponent_td_11_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LeagueWinnersComponent_th_13_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LeagueWinnersComponent_td_14_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LeagueWinnersComponent_th_16_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LeagueWinnersComponent_td_17_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LeagueWinnersComponent_th_19_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LeagueWinnersComponent_td_20_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LeagueWinnersComponent_tr_21_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LeagueWinnersComponent_tr_22_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.league);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWd1ZS13aW5uZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoibGVhZ3VlLXdpbm5lcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/status-bar/status-bar.component */ "AK/9");
/* harmony import */ var _components_international_international_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/international/international.component */ "NX/W");
/* harmony import */ var _components_international_cl_winners_cl_winners_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/international/cl-winners/cl-winners.component */ "QbdO");
/* harmony import */ var _components_domestic_domestic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/domestic/domestic.component */ "8wCr");
/* harmony import */ var _components_domestic_league_winners_league_winners_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/domestic/league-winners/league-winners.component */ "Z0FJ");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_international_cl_winners_cl_winners_component__WEBPACK_IMPORTED_MODULE_7__["ClWinnersComponent"],
        _components_international_international_component__WEBPACK_IMPORTED_MODULE_6__["InternationalComponent"],
        _components_domestic_domestic_component__WEBPACK_IMPORTED_MODULE_8__["DomesticComponent"],
        _components_domestic_league_winners_league_winners_component__WEBPACK_IMPORTED_MODULE_9__["LeagueWinnersComponent"],
        _components_status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_5__["StatusBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"]] }); })();


/***/ }),

/***/ "hXIf":
/*!******************************************!*\
  !*** ./src/app/services/club.service.ts ***!
  \******************************************/
/*! exports provided: ClubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubService", function() { return ClubService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/match */ "oNZr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _csv_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./csv-reader.service */ "85M1");




class ClubService {
    constructor(csv) {
        this.csv = csv;
        this.clubs = [];
    }
    loadClubs() {
        return this.csv.loadFile('assets/club-data/teamnames.csv')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            res.splice(0, 1);
            for (let club of res) {
                const data = club.split(',');
                this.clubs.push({ name: data[1], country: data[0] });
            }
            return this.clubs;
        }));
    }
    loadChampionsLeagueWinners() {
        return this.csv.loadFile('assets/league-data/champs.csv')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            res.splice(0, 1);
            let ties = [];
            for (let tie of res) {
                ties.push(new _models_match__WEBPACK_IMPORTED_MODULE_1__["ClMatch"](tie));
            }
            ties = ties.filter(tie => {
                return tie.round === "final";
            });
            const clWinners = [];
            for (let tie of ties) {
                let club;
                if (tie.winner.name === tie.home.name) {
                    club = { name: tie.home.name, country: tie.home.country, year: tie.season };
                }
                else {
                    club = { name: tie.visitor.name, country: tie.visitor.country, year: tie.season };
                }
                clWinners.push(club);
            }
            return clWinners;
        }));
    }
    loadLeagueWinners(league) {
        return this.csv.loadFile(`assets/league-data/${league}.csv`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            res.splice(0, 1);
            let allClubs = [];
            let ties = [];
            for (let tie of res) {
                const match = new _models_match__WEBPACK_IMPORTED_MODULE_1__["EnglandMatch"](tie, league);
                if (match.division === 1) {
                    ties.push(match);
                    if (allClubs.filter(club => club.name == match.winner.name && club.year === match.season).length === 0) {
                        const winner = { name: match.winner.name, country: match.winner.country, year: match.season, wins: 0, draws: 0, points: 0 };
                        allClubs.push(winner);
                    }
                }
            }
            for (let tie of ties) {
                allClubs.map(club => {
                    if (tie.isDraw && tie.season === club.year && (club.name === tie.visitor.name || club.name === tie.home.name)) {
                        club.points = club.points + 1;
                        club.draws = club.draws + 1;
                    }
                    if (club.name === tie.winner.name && club.year === tie.season && !tie.isDraw) {
                        club.points = club.points + 3;
                        club.wins = club.wins + 1;
                    }
                });
            }
            allClubs.sort((a, b) => b.points - a.points);
            return allClubs;
        }));
    }
}
ClubService.ɵfac = function ClubService_Factory(t) { return new (t || ClubService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_csv_reader_service__WEBPACK_IMPORTED_MODULE_3__["CsvReaderService"])); };
ClubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ClubService, factory: ClubService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oNZr":
/*!*********************************!*\
  !*** ./src/app/models/match.ts ***!
  \*********************************/
/*! exports provided: ClMatch, EnglandMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClMatch", function() { return ClMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnglandMatch", function() { return EnglandMatch; });
class ClMatch {
    constructor(matchData) {
        const tie = matchData.split(',');
        this.date = new Date(tie[0]);
        this.season = Number(tie[1]);
        this.round = tie[2];
        this.leg = Number(tie[3]);
        this.home = { name: tie[4], country: tie[21] };
        this.visitor = { name: tie[5], country: tie[22] };
        this.winner = { name: tie[20], country: tie[20] };
    }
}
class EnglandMatch {
    constructor(matchData, league) {
        const tie = matchData.split(',');
        if (league === 'england') {
            this.constructEngland(tie);
        }
        else if (league === 'germany') {
            this.constructGermany(tie);
        }
        else if (league === 'italy') {
            this.constructItaly(tie);
        }
        else if (league === 'spain') {
            this.constructSpain(tie);
        }
    }
    constructEngland(tie) {
        this.date = new Date(tie[0]);
        this.season = Number(tie[1]);
        this.division = Number(tie[7]);
        this.home = { name: tie[2], country: 'England' };
        this.visitor = { name: tie[3], country: 'England' };
        this.homeGoal = Number(tie[5]);
        this.visitorGoal = Number(tie[6]);
        this.winner = tie[11] === 'A' ? this.visitor : this.home;
        if (tie[11] === 'D') {
            this.isDraw = true;
        }
        else {
            this.isDraw = false;
        }
    }
    constructGermany(tie) {
        this.date = new Date(tie[0]);
        this.season = Number(tie[1]);
        this.division = Number(tie[8]);
        this.home = { name: tie[2], country: 'Germany' };
        this.visitor = { name: tie[3], country: 'Germany' };
        this.homeGoal = Number(tie[5]);
        this.visitorGoal = Number(tie[6]);
        this.winner = this.homeGoal > this.visitorGoal ? this.home : this.visitor;
        if (this.homeGoal === this.visitorGoal) {
            this.isDraw = true;
        }
        else {
            this.isDraw = false;
        }
    }
    constructItaly(tie) {
        this.date = new Date(tie[0]);
        this.season = Number(tie[1]);
        this.division = Number(tie[7]);
        this.home = { name: tie[2], country: 'Italy' };
        this.visitor = { name: tie[3], country: 'Italy' };
        this.homeGoal = Number(tie[5]);
        this.visitorGoal = Number(tie[6]);
        this.winner = this.homeGoal > this.visitorGoal ? this.home : this.visitor;
        if (this.homeGoal === this.visitorGoal) {
            this.isDraw = true;
        }
        else {
            this.isDraw = false;
        }
    }
    constructSpain(tie) {
        this.date = new Date(tie[0]);
        this.season = Number(tie[1]);
        this.division = Number(tie[8]);
        this.home = { name: tie[2], country: 'Italy' };
        this.visitor = { name: tie[3], country: 'Italy' };
        this.homeGoal = Number(tie[6]);
        this.visitorGoal = Number(tie[7]);
        this.winner = this.homeGoal > this.visitorGoal ? this.home : this.visitor;
        if (this.homeGoal === this.visitorGoal) {
            this.isDraw = true;
        }
        else {
            this.isDraw = false;
        }
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map