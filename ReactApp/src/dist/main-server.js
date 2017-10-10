(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(0);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(82);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(2);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return validateFormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return errorClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

var isFieldValid = function (input) {
    var isValid = true;
    if (input.getAttribute('required') !== null && input.value === "") {
        isValid = false;
    }
    else {
        isValid = true;
    }
    return isValid;
};
var validateFormField = function (inputField) {
    var isValid = true;
    isValid = isFieldValid(inputField);
    inputField.isValid = isValid;
    if (isValid === false) {
        inputField.errorMessage = inputField.name + " is required";
    }
    else {
        if (validateFormat(inputField) === false) {
            inputField.errorMessage = inputField.name + " is invalid";
            inputField.isFormatValid = false;
        }
        else {
            inputField.errorMessage = '';
            inputField.isFormatValid = true;
        }
    }
};
/*
const validateAllField = (e) => {
    let inputs = document.getElementsByTagName('input');
    for (let index = 0; index < inputs.length; ++index) {
        validateFormField(inputs[index]);
    }
}*/
var validateFormat = function (input) {
    var isFormatValid = true;
    var format = "";
    if (input !== undefined) {
        if (input.type === "date") {
            //format =/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
            if (input.validity !== undefined && (input.validity.badInput === true || input.validity.valid === false)) {
                return false;
            }
            if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(input).attr('data-dateBirth') !== undefined && input.value !== "" && input.valueAsDate >= new Date()) {
                return false;
            }
            if (input.value !== "" && (input.valueAsDate.getFullYear() >= 2099 || input.valueAsDate.getFullYear() <= 1900)) {
                return false;
            }
        }
        if (input.value !== "" && format !== "" && format.test(input.value) === false) {
            isFormatValid = false;
        }
    }
    return isFormatValid;
};
var errorClass = function (errors, fieldName) {
    if (errors !== undefined) {
        errors.forEach(function (error) {
            if (error.fieldName === fieldName && error.errorMessage !== "") {
                return 'has-error has-feedback';
            }
        });
    }
    return '';
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInformationContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ProspectComponent_PersonalInformationComponent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utility_Utility__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_Prospect__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_validationMessage__ = __webpack_require__(48);




//import { onInputChange as onChange } from '../../actions/ProspectAction';


//import { AddErrorMessage } from '../../actions/ValidationMessageAction';
var mapDispatchToProps = function (dispatch) { return ({
    valicInputChange: function (e) {
        var name = e.target.name;
        var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        var inputField = e.target;
        //dispatch(onChange(name, value));
        dispatch(__WEBPACK_IMPORTED_MODULE_4__store_Prospect__["a" /* actionCreators */].onInputChange(name, value));
        if (inputField.isValid === false || inputField.isFormatValid === false) {
            //dispatch(AddErrorMessage(name, inputField.errorMessage));
            dispatch(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage(name, inputField.errorMessage));
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(inputField).parent().addClass('has-error has-feedback');
        }
        else {
            //dispatch(AddErrorMessage(name, ''));
            dispatch(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage(name, ''));
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(inputField).parent().removeClass('has-error has-feedback');
        }
    },
    onChange: function (e) {
        var name = e.target.name;
        var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        var inputField = e.target;
        //dispatch(onChange(name, value));
        dispatch(__WEBPACK_IMPORTED_MODULE_4__store_Prospect__["a" /* actionCreators */].onInputChange(name, value));
        Object(__WEBPACK_IMPORTED_MODULE_3__shared_utility_Utility__["b" /* validateFormField */])(inputField);
        if (inputField.isValid === false || inputField.isFormatValid === false) {
            //dispatch(AddErrorMessage(name, inputField.errorMessage));
            dispatch(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage(name, inputField.errorMessage));
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(inputField).parent().addClass('has-error has-feedback');
        }
        else {
            //dispatch(AddErrorMessage(name, ''));
            dispatch(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage(name, ''));
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(inputField).parent().removeClass('has-error has-feedback');
        }
    }
}); };
var mapStateToProps = function (state) { return ({
    ssn: state.ProspectDetail.ssn,
    title: state.ProspectDetail.title,
    firstName: state.ProspectDetail.firstName,
    lastName: state.ProspectDetail.lastName,
    middleInitial: state.ProspectDetail.middleInitial,
    dateOfBirth: state.ProspectDetail.dateOfBirth,
    gender: state.ProspectDetail.gender,
    usCitizen: state.ProspectDetail.usCitizen,
    maritalStatus: state.ProspectDetail.maritalStatus,
    homeAddressLine1: state.ProspectDetail.homeAddressLine1,
    homeAddressLine2: state.ProspectDetail.homeAddressLine2,
    homeAddressLine3: state.ProspectDetail.homeAddressLine3,
    homeAddressCity: state.ProspectDetail.homeAddressCity,
    homeAddressState: state.ProspectDetail.homeAddressState,
    homeAddressZipCode: state.ProspectDetail.homeAddressZipCode,
    mailingAddressLine1: state.ProspectDetail.mailingAddressLine1,
    mailingAddressLine2: state.ProspectDetail.mailingAddressLine2,
    mailingAddressLine3: state.ProspectDetail.mailingAddressLine3,
    mailingAddressCity: state.ProspectDetail.mailingAddressCity,
    mailingAddressState: state.ProspectDetail.mailingAddressState,
    mailingAddressZipCode: state.ProspectDetail.mailingAddressZipCode,
    homePhone: state.ProspectDetail.homePhone,
    workPhone: state.ProspectDetail.workPhone,
    otherPhone: state.ProspectDetail.otherPhone,
    referral: state.ProspectDetail.referral,
    emailAddress: state.ProspectDetail.emailAddress,
    states: state.states
}); };
var PersonalInformationContainer = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__components_ProspectComponent_PersonalInformationComponent__["a" /* default */]);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_PROSPECT_REQUEST; });
/* unused harmony export GET_PROSPECT_FAILED */
/* unused harmony export GET_PROSPECT_SUCCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_PROSPECT_REQUEST; });
/* unused harmony export UPDATE_PROSPECT_FAILED */
/* unused harmony export UPDATE_PROSPECT_SUCCESS */
/* unused harmony export ADD_PROSPECT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_STATES_REQUEST; });
/* unused harmony export GET_STATES_FAILED */
/* unused harmony export GET_STATES_SUCCESS */
/* unused harmony export ON_INPUT_CHANGE */
/* unused harmony export ADD_VALIDATION_ERROR_MESSAGE */
/* unused harmony export LOADER_BEGIN */
/* unused harmony export LOADER_COMPLETE */
/* unused harmony export SET_AGENTCODE */
var GET_PROSPECT_REQUEST = 'GET_PROSPECT_REQUEST';
var GET_PROSPECT_FAILED = 'GET_PROSPECT_FAILED';
var GET_PROSPECT_SUCCESS = 'GET_PROSPECT';
var UPDATE_PROSPECT_REQUEST = 'UPDATE_PROSPECT_REQUEST';
var UPDATE_PROSPECT_FAILED = 'UPDATE_PROSPECT_FAILED';
var UPDATE_PROSPECT_SUCCESS = 'UPDATE_PROSPECT_SUCCESS';
var ADD_PROSPECT = 'ADD_PROSPECT';
//export const GET_STATES ='GET_STATES';
var GET_STATES_REQUEST = 'GET_STATES_REQUEST';
var GET_STATES_FAILED = 'GET_STATES_FAILED';
var GET_STATES_SUCCESS = 'GET_STATES_SUCCESS';
var ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
var ADD_VALIDATION_ERROR_MESSAGE = 'ADD_ERROR_MESSAGE';
var LOADER_BEGIN = 'LOADER_START';
var LOADER_COMPLETE = 'LOADER_END';
var SET_AGENTCODE = 'SET_AGENTCODE';


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actionCreatorsAgentCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return agentCodereducer; });
var actionCreators = {
    fetchProspectRequest: function (id) { return ({ type: 'GET_PROSPECT_REQUEST', id: id }); },
    fetchProspectSuccess: function (prospect) { return ({ type: 'GET_PROSPECT', prospect: prospect }); },
    fetchProspectFailed: function () { return ({ type: 'GET_PROSPECT_FAILED' }); },
    onInputChange: function (name, value) { return ({ type: 'ON_INPUT_CHANGE', name: name, value: value }); },
    updateProspectRequest: function () { return ({ type: 'UPDATE_PROSPECT_REQUEST' }); }
};
var reducer = function (state, action) {
    switch (action.type) {
        case "ON_INPUT_CHANGE":
            return Object.assign({}, state, (_a = {}, _a[action.name] = action.value, _a));
        case "GET_PROSPECT":
            return Object.assign({}, action.prospect);
        case "GET_PROSPECT_FAILED":
            return Object.assign({}, null);
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || Object.assign({}, null);
    var _a;
};
;
var actionCreatorsAgentCode = {
    setAgentCode: function (agentCode) { return ({ type: 'SET_AGENTCODE', agentCode: agentCode }); }
};
var agentCodereducer = function (state, action) {
    switch (action.type) {
        case "SET_AGENTCODE":
            return action.agentCode;
        default:
            return state === undefined ? "" : state;
    }
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
var actionCreators = {
    fetchStateRequest: function () { return ({ type: 'GET_STATES_REQUEST' }); },
    fetchStateSuccess: function (states) { return ({ type: 'GET_STATES_SUCCESS', states: states }); },
    fetchStatesFailed: function () { return ({ type: 'GET_STATES_FAILED' }); }
};
var reducer = function (state, action) {
    switch (action.type) {
        case 'GET_STATES_SUCCESS':
            return Object.assign([], state, action.states);
        case 'GET_STATES_REQUEST':
        case 'GET_STATES_FAILED':
            return Object.assign([], null);
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || Object.assign([], null);
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
var actionCreators = {
    loaderBegin: function () { return ({ type: 'LOADER_BEGIN' }); },
    loaderEnd: function () { return ({ type: 'LOADER_END' }); }
};
var reducer = function (state, action) {
    switch (action.type) {
        case 'LOADER_BEGIN':
            return { isLoading: true };
        case 'LOADER_END':
            return { isLoading: false };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { isLoading: false };
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(115);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_input_mask__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_input_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_input_mask__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var ValicInput = /** @class */ (function (_super) {
    __extends(ValicInput, _super);
    function ValicInput(props) {
        var _this = _super.call(this, props) || this;
        _this.onChangeEmail = _this.onChangeEmail.bind(_this);
        _this.onChangePhoneNumber = _this.onChangePhoneNumber.bind(_this);
        _this.onChangeSSN = _this.onChangeSSN.bind(_this);
        _this.onChangeText = _this.onChangeText.bind(_this);
        _this.onChangeNumber = _this.onChangeNumber.bind(_this);
        return _this;
    }
    ValicInput.prototype.onChangeText = function (e) {
        e.preventDefault();
        if (this.props.onChange !== undefined) {
            this.props.onChange(e);
        }
    };
    ValicInput.prototype.onChangeNumber = function (e) {
        e.preventDefault();
        this.props.onChange(e);
    };
    ValicInput.prototype.onChangeEmail = function (e) {
        e.preventDefault();
        var isValid = true;
        var inputField = e.target;
        isValid = this.isValid(inputField);
        inputField.errorMessage = '';
        if (isValid === false) {
            //this.addError(this.state,inputField.name, inputField.name + " is required");
            inputField.isValid = false;
            inputField.errorMessage = inputField.name + " is required";
        }
        else {
            inputField.isValid = true;
            if (this.validateEmailFormat(inputField) === false) {
                inputField.isFormatValid = false;
                inputField.errorMessage = inputField.name + ' is invalid';
            }
            else {
                inputField.isFormatValid = true;
                inputField.errorMessage = '';
                //$(inputField).parent().removeClass('has-error has-feedback');       
                //this.addError(this.props.state,inputField.name, "");
            }
        }
        this.props.onChange(e);
    };
    ValicInput.prototype.onChangePhoneNumber = function (e) {
        e.preventDefault();
        var isValid = true;
        var inputField = e.target;
        isValid = this.isValid(inputField);
        if (isValid === false) {
            //this.addError(this.state,inputField.name, inputField.name + " is required");
            inputField.isValid = false;
            inputField.errorMessage = inputField.name + " is required";
        }
        else {
            inputField.isValid = true;
            if (this.validatePhoneNumberFormat(inputField) === false) {
                //$(inputField).parent().addClass('has-error has-feedback');       					
                inputField.isFormatValid = false;
                inputField.errorMessage = inputField.name + ' is invalid';
            }
            else {
                inputField.isFormatValid = true;
                inputField.errorMessage = '';
            }
        }
        this.props.onChange(e);
    };
    ValicInput.prototype.onChangeSSN = function (e) {
        e.preventDefault();
        var isValid = true;
        var inputField = e.target;
        isValid = this.isValid(inputField);
        if (isValid === false) {
            inputField.isValid = false;
            inputField.errorMessage = inputField.name + " is required";
        }
        else {
            inputField.isValid = true;
            if (this.validateSSNFormat(inputField) === false) {
                inputField.isFormatValid = false;
                inputField.errorMessage = inputField.name + ' is invalid';
            }
            else {
                inputField.isFormatValid = true;
                inputField.errorMessage = '';
            }
        }
        this.props.onChange(e);
    };
    ValicInput.prototype.validateEmailFormat = function (input) {
        var isFormatValid = true;
        var format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (input.value !== "" && format.test(input.value) === false) {
            isFormatValid = false;
        }
        return isFormatValid;
    };
    ValicInput.prototype.validateSSNFormat = function (input) {
        var isFormatValid = true;
        var format = /^[0-9A-Z]{3}-[0-9A-Z]{2}-[0-9A-Z]{4}$/;
        if (input.value !== "" && format.test(input.value) === false) {
            isFormatValid = false;
        }
        return isFormatValid;
    };
    ValicInput.prototype.validatePhoneNumberFormat = function (input) {
        var isFormatValid = true;
        var format = /(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}/;
        if (input.value !== "" && format.test(input.value) === false) {
            isFormatValid = false;
        }
        return isFormatValid;
    };
    ValicInput.prototype.isValid = function (input) {
        var isValid = true;
        //console.log(input)
        if (input.getAttribute('required') !== null && input.value === "") {
            //$(input).parent().addClass('has-error has-feedback');           
            isValid = false;
        }
        else {
            // $(input).parent().removeClass('has-error has-feedback');
            //input.nextSibling.textContent = "";
            isValid = true;
        }
        return isValid;
    };
    ValicInput.prototype.render = function () {
        var inputType = this.props.type !== undefined && this.props.type !== null ? this.props.type : "text";
        var inputControl;
        var props = __assign({}, this.props);
        switch (inputType.toString().toLowerCase()) {
            case "phone":
                inputControl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_input_mask___default.a, __assign({}, props, { onChange: this.onChangePhoneNumber }));
                break;
            case "number":
                inputControl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", __assign({}, props, { type: "number", onChange: this.onChangeNumber }));
                break;
            case "email":
                inputControl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", __assign({}, props, { type: "email", onChange: this.onChangeEmail }));
                break;
            case "ssn":
                inputControl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_input_mask___default.a, __assign({}, props, { onChange: this.onChangeSSN }));
                break;
            default:
                inputControl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", __assign({}, props, { type: "text", onChange: this.onChangeText }));
                break;
        }
        return inputControl;
    };
    ValicInput.propTypes = {
        type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
        onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
        name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
    };
    return ValicInput;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (ValicInput);


/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export prospectId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return agileneturl; });
var prospectId = 1963;
var agileneturl = 'https://d4.valic.com/agilenet5/';


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configureStore__ = __webpack_require__(40);









/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__["createServerRenderer"])(function (params) {
    return new Promise(function (resolve, reject) {
        // Prepare Redux store with in-memory history, and dispatch a navigation event
        // corresponding to the incoming URL
        var basename = params.baseUrl.substring(0, params.baseUrl.length - 1); // Remove trailing slash
        var urlAfterBasename = params.url.substring(basename.length);
        var store = Object(__WEBPACK_IMPORTED_MODULE_8__configureStore__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5_history__["createMemoryHistory"])());
        store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__["replace"])(urlAfterBasename));
        // Prepare an instance of the application and perform an inital render that will
        // cause any async tasks (e.g., data access) to begin
        var routerContext = {};
        var app = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"], { store: store },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["StaticRouter"], { basename: basename, context: routerContext, location: params.location.path, children: __WEBPACK_IMPORTED_MODULE_7__routes__["a" /* routes */] })));
        Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app);
        // If there's a redirection, just send this information back to the host application
        if (routerContext.url) {
            resolve({ redirectUrl: routerContext.url });
            return;
        }
        // Once any async tasks are done, we can perform the final render
        // We also send the redux store state, so the client can continue execution where the server left off
        params.domainTasks.then(function () {
            resolve({
                html: Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app),
                globals: { initialReduxState: store.getState() }
            });
        }, reject); // Also propagate any errors back into the host application
    });
}));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(139);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(192);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(180);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(136);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_ProspectContainer_ProspectEditContainer__ = __webpack_require__(21);

//import { Layout } from './components/Layout';
//import Home from './components/Home';
//import FetchData from './components/FetchData';
//import Counter from './components/Counter';

var routes = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__containers_ProspectContainer_ProspectEditContainer__["a" /* default */], null)));


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProspectEditContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_ValicValidationMessageComponent_ValicValidationMessageComponent__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_LoaderComponent_LoaderComponent__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_utility_Utility__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PersonalInformationContainer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__InvestorProfileContainer__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__IncomeSourceContainer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ProspectEditContainer_css__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ProspectEditContainer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__ProspectEditContainer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_Prospect__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_States__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store_Loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_validationMessage__ = __webpack_require__(48);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

















var ProspectEditContainer = /** @class */ (function (_super) {
    __extends(ProspectEditContainer, _super);
    function ProspectEditContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProspectEditContainer.prototype.componentDidMount = function () {
        this.props.componentDidMount();
    };
    ProspectEditContainer.prototype.componentDidCatch = function (error, info) {
        //const {dispatch} = this.props;
        //dispatch()
        //console.log('componentcath');
    };
    ProspectEditContainer.prototype.render = function () {
        var _this = this;
        var _a = this.props, formErrors = _a.formErrors, isLoading = _a.isLoading;
        if (formErrors !== undefined && formErrors !== null && formErrors.length > 0) {
            var errors = formErrors.filter(function (error) { return error.errorMessage !== '' && error.fieldName === ''; });
            //console.log(errors);
            if (errors.length > 0) {
                //throw new Error("failed component")
                return (__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(AppError, { error: errors[0].errorMessage }));
            }
        }
        return (__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null,
            isLoading == true ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__shared_LoaderComponent_LoaderComponent__["a" /* default */], null) : '',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__shared_ValicValidationMessageComponent_ValicValidationMessageComponent__["a" /* default */], { formErrors: formErrors, className: "form-errors" }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", null,
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__["b" /* TabContainer */], null,
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__["a" /* Tab */], { name: "Personal Information", isDefaultTab: true },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__PersonalInformationContainer__["a" /* PersonalInformationContainer */], null)),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__["a" /* Tab */], { name: "Investor Profile" },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__InvestorProfileContainer__["a" /* InvestorProfileContainer */], null)),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__["a" /* Tab */], { name: "Income Source" },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__IncomeSourceContainer__["a" /* IncomeSourceContainer */], null))),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", { type: "submit", className: "btn btn-primary", onClick: function (e) {
                        e.preventDefault();
                        _this.props.saveProspect(e);
                    } }, "Save"),
                "\u00A0",
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", { type: "button", className: "btn btn-default", onClick: function (e) {
                        e.preventDefault();
                        _this.props.cancelProspect();
                    } }, "Cancel"))));
    };
    ProspectEditContainer.propTypes = {
        saveProspect: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
        componentDidMount: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
        formErrors: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired,
        isLoading: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired
    };
    return ProspectEditContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var mapStateToProps = function (state) { return ({
    formErrors: state.errors,
    isLoading: state.isLoading
}); };
var mapDispatchToProps = function (dispatch) { return ({
    saveProspect: function () {
        var inputs = document.getElementsByTagName('input');
        for (var index = 0; index < inputs.length; ++index) {
            var inputField = inputs[index];
            Object(__WEBPACK_IMPORTED_MODULE_7__shared_utility_Utility__["b" /* validateFormField */])(inputField);
            if (inputField.isValid === false || inputField.isFormatValid === false) {
                //dispatch(AddErrorMessage(inputField.name, inputField.errorMessage));
                dispatch(__WEBPACK_IMPORTED_MODULE_16__store_validationMessage__["a" /* actionCreators */].addErrorMessage(inputField.name, inputField.errorMessage));
                __WEBPACK_IMPORTED_MODULE_4_jquery___default()(inputField).parent().addClass('has-error has-feedback');
            }
            else {
                //dispatch(AddErrorMessage(inputField.name, ''));
                dispatch(__WEBPACK_IMPORTED_MODULE_16__store_validationMessage__["a" /* actionCreators */].addErrorMessage(inputField.name, ''));
                __WEBPACK_IMPORTED_MODULE_4_jquery___default()(inputField).parent().removeClass('has-error has-feedback');
            }
        }
        dispatch(__WEBPACK_IMPORTED_MODULE_13__store_Prospect__["a" /* actionCreators */].updateProspectRequest());
    },
    cancelProspect: function (e) {
        if (window.confirm('Are you sure want to cancel?')) {
            document.location = __WEBPACK_IMPORTED_MODULE_11__constants__["a" /* agileneturl */] + "Dashboard/Advisor/ClientProspectListing.aspx?agentId=03499";
        }
    },
    componentDidMount: function () {
        dispatch(__WEBPACK_IMPORTED_MODULE_15__store_Loader__["a" /* actionCreators */].loaderBegin());
        dispatch(__WEBPACK_IMPORTED_MODULE_13__store_Prospect__["b" /* actionCreatorsAgentCode */].setAgentCode(window.__agentCode__));
        dispatch(__WEBPACK_IMPORTED_MODULE_14__store_States__["a" /* actionCreators */].fetchStateRequest());
        dispatch(__WEBPACK_IMPORTED_MODULE_13__store_Prospect__["a" /* actionCreators */].fetchProspectRequest(window.__PROSPECTID__));
    }
}); };
var AppError = function (props) {
    return (__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null,
        "Something went wrong!!! ",
        props.error));
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ProspectEditContainer));


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TabContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabContainer_css__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabContainer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TabContainer_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var clearStyle = { clear: 'both', height: '20px' };
var TabContainer = /** @class */ (function (_super) {
    __extends(TabContainer, _super);
    function TabContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabContainer.prototype.render = function () {
        var header = this.tabHeader();
        var customStyle = {
            height: "30px"
        };
        var mainStyle = {
            overflow: "auto"
        };
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "pad20 mainStyle" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-xs-12 col-sm-2 customStyle" }, header),
            this.props.children,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: clearStyle })));
    };
    TabContainer.prototype.tabHeader = function () {
        var count = 0;
        var headerLink = this.props.children.map(function (child, i) {
            var headerId = child.props.name.split(' ').join('');
            count = count + 1;
            return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TabHeader, { key: i, id: headerId, headerName: child.props.name, isDefault: child.props.isDefaultTab, index: count }));
        });
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "nobr" },
            " ",
            headerLink,
            " "));
    };
    return TabContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));

/*
declare namespace JSX {
    interface IntrinsicElements {
        nobr: any
    }
}*/
var TabHeader = /** @class */ (function (_super) {
    __extends(TabHeader, _super);
    function TabHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.changeActive = function () {
            var xyz = __WEBPACK_IMPORTED_MODULE_1_jquery___default()("[name='folderTab']");
            for (var i = 0; i < xyz.length; i++) {
                __WEBPACK_IMPORTED_MODULE_1_jquery___default()(xyz[i]).attr("class", "tabListItem react-tabHeader");
            }
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#" + _this.state.id).attr("class", "tabListItem activeTab  react-tabHeader");
            _this.setState({ currentTabIndex: _this.props.index });
            _this.showContent(_this.state.id);
        };
        _this.state = { id: _this.props.id + "Tab", index: _this.props.index, isDefault: _this.props.isDefault, currentTabIndex: 0 };
        _this.changeActive = _this.changeActive.bind(_this);
        return _this;
    }
    TabHeader.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { className: "tabListItem activeTab", name: "folderTab", id: this.state.id, onClick: this.changeActive }, this.props.headerName));
    };
    TabHeader.prototype.showContent = function (x) {
        var conBoxes = __WEBPACK_IMPORTED_MODULE_1_jquery___default()("[name='contentBox']");
        for (var i = 0; i < conBoxes.length; i++) {
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(conBoxes[i]).attr("class", "noShow react-tabContent");
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(conBoxes[i]).attr("style", "display:none");
        }
        var xParts = x.split('Tab');
        var whichBox = xParts[0];
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#" + whichBox + 'Box').attr("class", "show react-tabContent");
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#" + whichBox + 'Box').attr("style", "display:block");
    };
    TabHeader.prototype.componentDidMount = function () {
        if (this.state.isDefault) {
            this.changeActive();
        }
    };
    TabHeader.prototype.componentWillUpdate = function () {
    };
    return TabHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tab.prototype.render = function () {
        var id = this.props.name.split(' ').join('');
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { id: id + "Box", name: "contentBox", className: "noShow react-tabContent" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: clearStyle }),
            this.props.children));
    };
    return Tab;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));



/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ValicValidationMessage = /** @class */ (function (_super) {
    __extends(ValicValidationMessage, _super);
    function ValicValidationMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValicValidationMessage.prototype.render = function () {
        var formErrors = this.props.formErrors;
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: 'form-errors' }, formErrors !== undefined && formErrors.length > 0 ? formErrors.map(function (field, i) {
            if (field.errorMessage !== "") {
                return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { key: i },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { key: i, className: "tooltip-text form-error" },
                        field.errorMessage,
                        " ")));
            }
            else {
                return '';
            }
        }) : ''));
    };
    ValicValidationMessage.PropTypes = {
        formErrors: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
            fieldName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
            errorMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
        }).isRequired).isRequired
    };
    return ValicValidationMessage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (ValicValidationMessage);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_css__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__loader_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loader.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "loadingStyle" },
            " ",
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "loader" }),
            " "));
    };
    return Loader;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (Loader);


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utility_Utility__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/*
export interface IStates{
Code:string;
}*/
var PersonalInformation = /** @class */ (function (_super) {
    __extends(PersonalInformation, _super);
    function PersonalInformation(props) {
        var _this = _super.call(this, props) || this;
        _this.handleUserInput = _this.handleUserInput.bind(_this);
        _this.valicInputChange = _this.valicInputChange.bind(_this);
        return _this;
    }
    PersonalInformation.prototype.valicInputChange = function (e) {
        var valicInputChange = this.props.valicInputChange;
        valicInputChange(e);
    };
    PersonalInformation.prototype.handleUserInput = function (e) {
        var onChange = this.props.onChange;
        onChange(e);
    };
    PersonalInformation.prototype.render = function () {
        var states = this.props.states;
        var statesListDown;
        if (states !== undefined) {
            statesListDown = Object.keys(states).map(function (key, index) { return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { key: index, value: states[key].Code }, states[key].Code); });
        }
        //= states !== undefined ? states.map((item, index) => { return <option key={index} value= {item.Code}>{item.Code}</option>}): '';				
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row form-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-2" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "title" }, "Title"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", { className: "form-control", name: "title", value: this.props.title, onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", null),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", null, "Mr."),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", null, "Mrs."),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", null, "Ms."),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", null, "Dr."),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", null, "Rev."))),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4 " + Object(__WEBPACK_IMPORTED_MODULE_3__shared_utility_Utility__["a" /* errorClass */])(this.props.errors, 'firstName') },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "firstName" }, "First Name"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", required: true, className: "form-control", name: "firstName", placeholder: "FirstName", value: this.props.firstName, onChange: this.handleUserInput })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-1" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "middleInitial" }, "MI"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "middleInitial", placeholder: "MI", value: this.props.middleInitial, "max-length": "1", onChange: this.handleUserInput })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-5 " + Object(__WEBPACK_IMPORTED_MODULE_3__shared_utility_Utility__["a" /* errorClass */])(this.props.errors, 'lastName') },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "lastName" }, "Last Name"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", required: true, className: "form-control", name: "lastName", placeholder: "LastName", value: this.props.lastName, onChange: this.handleUserInput }))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row formasm-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3 " + Object(__WEBPACK_IMPORTED_MODULE_3__shared_utility_Utility__["a" /* errorClass */])(this.props.errors, 'ssn') },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "ssn" }, "SSN"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "ssn", className: "form-control", name: "ssn", placeholder: "AAA-AA-AAAA", mask: "***\-**\-****", maskChar: "_", onChange: this.valicInputChange, required: true, value: this.props.ssn }),
                    "Only change SSN if you know the real value."),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "dateOfBirth" }, "Date Of Birth"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "date", className: "form-control", "data-dateBirth": 'true', name: "dateOfBirth", value: this.props.dateOfBirth, onChange: this.handleUserInput })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "gender" }, "Gender"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "checkbox-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", value: "1", name: "gender", checked: this.props.gender === "1" }),
                            "Male"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "checkbox-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", value: "2", name: "gender", checked: this.props.gender === "2" }),
                            "Female"))),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "usCitizen" }, "US Citizen"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "usCitizen", value: "1", checked: this.props.usCitizen === "1" }),
                            "Yes"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "usCitizen", value: "0", checked: this.props.usCitizen === "0" }),
                            "No")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row form-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-8" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "maritalStatus" }, "Marital Status"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "checkbox-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "maritalStatus", value: "1", checked: this.props.maritalStatus === "1" }),
                            "Married"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "checkbox-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "maritalStatus", value: "0", checked: this.props.maritalStatus === "0" }),
                            "Not Married"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "checkbox-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "maritalStatus", value: "6", checked: this.props.maritalStatus !== "1" && this.props.maritalStatus !== "0" }),
                            "Civil Union")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", { className: "half-rule" })),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row form-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-6" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", null, "Home Address:"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "homeAddressLine1" }, "Address Line 1"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "homeAddressLine1", placeholder: "Address Line 1", onChange: this.handleUserInput, value: this.props.homeAddressLine1 }))),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "homeAddressLine2" }, "Address Line 2"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "homeAddressLine2", placeholder: "Address Line 2", onChange: this.handleUserInput, value: this.props.homeAddressLine2 }))),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "homeAddressLine3" }, "Address Line 3"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "homeAddressLine3", placeholder: "Address Line 3", onChange: this.handleUserInput, value: this.props.homeAddressLine3 }))),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "homeAddressCity" }, "City"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "homeAddressCity", placeholder: "City", onChange: this.handleUserInput, value: this.props.homeAddressCity })),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "homeAddressState" }, "State"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", { name: "homeAddressState", className: "form-control", onChange: this.handleUserInput, value: this.props.homeAddressState },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "" }),
                                statesListDown)),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "homeAddressZipCode" }, "Zip Code"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "homeAddressZipCode", placeholder: "ZipCode", "max-length": "5", onChange: this.handleUserInput, value: this.props.homeAddressZipCode })))),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-6" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", null, "Mailing Address:"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "mailingAddressLine1" }, "Address Line 1"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "mailingAddressLine1", placeholder: "Address Line 1", onChange: this.handleUserInput, value: this.props.mailingAddressLine1 }))),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "mailingAddressLine2" }, "Address Line 2"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "mailingAddressLine2", placeholder: "Address Line 2", onChange: this.handleUserInput, value: this.props.mailingAddressLine2 }))),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "mailingAddressLine3" }, "Address Line 3"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "mailingAddressLine3", placeholder: "Address Line 3", onChange: this.handleUserInput, value: this.props.mailingAddressLine3 }))),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "mailingAddressCity" }, "City"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "mailingAddressCity", placeholder: "City", onChange: this.handleUserInput, value: this.props.mailingAddressCity })),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "mailingAddressState" }, "State"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", { name: "mailingAddressState", className: "form-control", onChange: this.handleUserInput, value: this.props.mailingAddressState },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "" }),
                                statesListDown)),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "mailingAddressZipCode" }, "Zip Code"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "mailingAddressZipCode", placeholder: "ZipCode", "max-length": "5", onChange: this.handleUserInput, value: this.props.mailingAddressZipCode }))))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row form-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "homePhone" }, "Home Phone"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "phone", className: "form-control", name: "homePhone", mask: "\(999\)999\-9999", maskChar: "_", onChange: this.valicInputChange, value: this.props.homePhone })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "workPhone" }, "Work Phone"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "phone", className: "form-control", name: "workPhone", mask: "\(999\)999\-9999", maskChar: "_", onChange: this.valicInputChange, value: this.props.workPhone })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "otherPhone" }, "Other Phone"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "phone", className: "form-control", name: "otherPhone", mask: "\(999\)999\-9999", maskChar: "_", onChange: this.valicInputChange, value: this.props.otherPhone }))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row form-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox col-sm-12" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "checkbox-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "checkbox", name: "referral", onChange: this.handleUserInput, checked: this.props.referral }),
                            "Referral")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row form-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-6" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "emailAddress" }, "Email Address"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "email", className: "form-control", name: "emailAddress", onChange: this.valicInputChange, value: this.props.emailAddress })))));
    };
    PersonalInformation.propTypes = {
        onChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
        valicInputChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
    };
    return PersonalInformation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (PersonalInformation);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _parseMask = __webpack_require__(29);

var _parseMask2 = _interopRequireDefault(_parseMask);

var _environment = __webpack_require__(31);

var _string = __webpack_require__(32);

var _defer = __webpack_require__(33);

var _defer2 = _interopRequireDefault(_defer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // https://github.com/sanniassin/react-input-mask


var InputElement = function (_React$Component) {
  _inherits(InputElement, _React$Component);

  function InputElement(props) {
    _classCallCheck(this, InputElement);

    var _this = _possibleConstructorReturn(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).call(this, props));

    _initialiseProps.call(_this);

    var mask = props.mask,
        maskChar = props.maskChar,
        formatChars = props.formatChars,
        defaultValue = props.defaultValue,
        value = props.value,
        alwaysShowMask = props.alwaysShowMask;


    _this.hasValue = value != null;
    _this.maskOptions = (0, _parseMask2.default)(mask, maskChar, formatChars);

    if (defaultValue == null) {
      defaultValue = '';
    }
    if (value == null) {
      value = defaultValue;
    }

    value = _this.getStringValue(value);

    if (_this.maskOptions.mask && (alwaysShowMask || value)) {
      value = (0, _string.formatValue)(_this.maskOptions, value);
    }

    _this.value = value;
    return _this;
  }

  return InputElement;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.lastCursorPos = null;
  this.focused = false;

  this.componentDidMount = function () {
    _this2.isAndroidBrowser = (0, _environment.isAndroidBrowser)();
    _this2.isWindowsPhoneBrowser = (0, _environment.isWindowsPhoneBrowser)();
    _this2.isAndroidFirefox = (0, _environment.isAndroidFirefox)();

    if (_this2.maskOptions.mask && _this2.getInputValue() !== _this2.value) {
      _this2.setInputValue(_this2.value);
    }
  };

  this.componentWillReceiveProps = function (nextProps) {
    var oldMaskOptions = _this2.maskOptions;

    _this2.hasValue = nextProps.value != null;
    _this2.maskOptions = (0, _parseMask2.default)(nextProps.mask, nextProps.maskChar, nextProps.formatChars);

    if (!_this2.maskOptions.mask) {
      _this2.backspaceOrDeleteRemoval = null;
      _this2.lastCursorPos = null;
      return;
    }

    var isMaskChanged = _this2.maskOptions.mask && _this2.maskOptions.mask !== oldMaskOptions.mask;
    var showEmpty = nextProps.alwaysShowMask || _this2.isFocused();
    var newValue = _this2.hasValue ? _this2.getStringValue(nextProps.value) : _this2.value;

    if (!oldMaskOptions.mask && !_this2.hasValue) {
      newValue = _this2.getInputDOMNode().value;
    }

    if (isMaskChanged || _this2.maskOptions.mask && (newValue || showEmpty)) {
      newValue = (0, _string.formatValue)(_this2.maskOptions, newValue);

      if (isMaskChanged) {
        var pos = _this2.lastCursorPos;
        var filledLen = (0, _string.getFilledLength)(_this2.maskOptions, newValue);
        if (pos === null || filledLen < pos) {
          if ((0, _string.isFilled)(_this2.maskOptions, newValue)) {
            pos = filledLen;
          } else {
            pos = _this2.getRightEditablePos(filledLen);
          }
          _this2.setCursorPos(pos);
        }
      }
    }

    if (_this2.maskOptions.mask && (0, _string.isEmpty)(_this2.maskOptions, newValue) && !showEmpty && (!_this2.hasValue || !nextProps.value)) {
      newValue = '';
    }

    _this2.value = newValue;
  };

  this.componentDidUpdate = function () {
    if (_this2.maskOptions.mask && _this2.getInputValue() !== _this2.value) {
      _this2.setInputValue(_this2.value);
    }
  };

  this.isDOMElement = function (element) {
    return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? element instanceof HTMLElement // DOM2
    : element.nodeType === 1 && typeof element.nodeName === 'string';
  };

  this.getInputDOMNode = function () {
    var input = _this2.input;
    if (!input) {
      return null;
    }

    if (_this2.isDOMElement(input)) {
      return input;
    }

    // React 0.13
    return _react2.default.findDOMNode(input);
  };

  this.getInputValue = function () {
    var input = _this2.getInputDOMNode();
    if (!input) {
      return null;
    }

    return input.value;
  };

  this.setInputValue = function (value) {
    var input = _this2.getInputDOMNode();
    if (!input) {
      return;
    }

    _this2.value = value;
    input.value = value;
  };

  this.getLeftEditablePos = function (pos) {
    for (var i = pos; i >= 0; --i) {
      if (!(0, _string.isPermanentChar)(_this2.maskOptions, i)) {
        return i;
      }
    }
    return null;
  };

  this.getRightEditablePos = function (pos) {
    var mask = _this2.maskOptions.mask;

    for (var i = pos; i < mask.length; ++i) {
      if (!(0, _string.isPermanentChar)(_this2.maskOptions, i)) {
        return i;
      }
    }
    return null;
  };

  this.setCursorToEnd = function () {
    var filledLen = (0, _string.getFilledLength)(_this2.maskOptions, _this2.value);
    var pos = _this2.getRightEditablePos(filledLen);
    if (pos !== null) {
      _this2.setCursorPos(pos);
    }
  };

  this.setSelection = function (start) {
    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var input = _this2.getInputDOMNode();
    if (!input) {
      return;
    }

    var end = start + len;
    if ('selectionStart' in input && 'selectionEnd' in input) {
      input.selectionStart = start;
      input.selectionEnd = end;
    } else {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveStart('character', start);
      range.moveEnd('character', end - start);
      range.select();
    }
  };

  this.getSelection = function () {
    var input = _this2.getInputDOMNode();
    var start = 0;
    var end = 0;

    if ('selectionStart' in input && 'selectionEnd' in input) {
      start = input.selectionStart;
      end = input.selectionEnd;
    } else {
      var range = document.selection.createRange();
      if (range.parentElement() === input) {
        start = -range.moveStart('character', -input.value.length);
        end = -range.moveEnd('character', -input.value.length);
      }
    }

    return {
      start: start,
      end: end,
      length: end - start
    };
  };

  this.getCursorPos = function () {
    return _this2.getSelection().start;
  };

  this.setCursorPos = function (pos) {
    _this2.setSelection(pos, 0);

    (0, _defer2.default)(function () {
      _this2.setSelection(pos, 0);
    });

    _this2.lastCursorPos = pos;
  };

  this.isFocused = function () {
    return _this2.focused;
  };

  this.getStringValue = function (value) {
    return !value && value !== 0 ? '' : value + '';
  };

  this.onKeyDown = function (event) {
    _this2.backspaceOrDeleteRemoval = null;

    if (typeof _this2.props.onKeyDown === 'function') {
      _this2.props.onKeyDown(event);
    }

    var key = event.key,
        ctrlKey = event.ctrlKey,
        metaKey = event.metaKey,
        defaultPrevented = event.defaultPrevented;

    if (ctrlKey || metaKey || defaultPrevented) {
      return;
    }

    if (key === 'Backspace' || key === 'Delete') {
      var selection = _this2.getSelection();
      var canRemove = key === 'Backspace' && selection.end > 0 || key === 'Delete' && _this2.value.length > selection.start;

      if (!canRemove) {
        return;
      }

      _this2.backspaceOrDeleteRemoval = {
        key: key,
        selection: _this2.getSelection()
      };
    }
  };

  this.onChange = function (event) {
    var paste = _this2.paste;
    var _maskOptions = _this2.maskOptions,
        mask = _maskOptions.mask,
        maskChar = _maskOptions.maskChar,
        lastEditablePos = _maskOptions.lastEditablePos,
        prefix = _maskOptions.prefix;


    var value = _this2.getInputValue();
    var oldValue = _this2.value;

    if (paste) {
      _this2.paste = null;
      _this2.pasteText(paste.value, value, paste.selection, event);
      return;
    }

    var selection = _this2.getSelection();
    var cursorPos = selection.end;
    var maskLen = mask.length;
    var valueLen = value.length;
    var oldValueLen = oldValue.length;

    var clearedValue;
    var enteredString;

    if (_this2.backspaceOrDeleteRemoval) {
      var deleteFromRight = _this2.backspaceOrDeleteRemoval.key === 'Delete';
      value = _this2.value;
      selection = _this2.backspaceOrDeleteRemoval.selection;
      cursorPos = selection.start;

      _this2.backspaceOrDeleteRemoval = null;

      if (selection.length) {
        value = (0, _string.clearRange)(_this2.maskOptions, value, selection.start, selection.length);
      } else if (selection.start < prefix.length || !deleteFromRight && selection.start === prefix.length) {
        cursorPos = prefix.length;
      } else {
        var editablePos = deleteFromRight ? _this2.getRightEditablePos(cursorPos) : _this2.getLeftEditablePos(cursorPos - 1);

        if (editablePos !== null) {
          value = (0, _string.clearRange)(_this2.maskOptions, value, editablePos, 1);
          cursorPos = editablePos;
        }
      }
    } else if (valueLen > oldValueLen) {
      var enteredStringLen = valueLen - oldValueLen;
      var startPos = selection.end - enteredStringLen;
      enteredString = value.substr(startPos, enteredStringLen);

      if (startPos < lastEditablePos && (enteredStringLen !== 1 || enteredString !== mask[startPos])) {
        cursorPos = _this2.getRightEditablePos(startPos);
      } else {
        cursorPos = startPos;
      }

      value = value.substr(0, startPos) + value.substr(startPos + enteredStringLen);

      clearedValue = (0, _string.clearRange)(_this2.maskOptions, value, startPos, maskLen - startPos);
      clearedValue = (0, _string.insertString)(_this2.maskOptions, clearedValue, enteredString, cursorPos);

      value = (0, _string.insertString)(_this2.maskOptions, oldValue, enteredString, cursorPos);

      if (enteredStringLen !== 1 || cursorPos >= prefix.length && cursorPos < lastEditablePos) {
        cursorPos = Math.max((0, _string.getFilledLength)(_this2.maskOptions, clearedValue), cursorPos);
        if (cursorPos < lastEditablePos) {
          cursorPos = _this2.getRightEditablePos(cursorPos);
        }
      } else if (cursorPos < lastEditablePos) {
        cursorPos++;
      }
    } else if (valueLen < oldValueLen) {
      var removedLen = maskLen - valueLen;
      enteredString = value.substr(0, selection.end);
      var clearOnly = enteredString === oldValue.substr(0, selection.end);

      clearedValue = (0, _string.clearRange)(_this2.maskOptions, oldValue, selection.end, removedLen);

      if (maskChar) {
        value = (0, _string.insertString)(_this2.maskOptions, clearedValue, enteredString, 0);
      }

      clearedValue = (0, _string.clearRange)(_this2.maskOptions, clearedValue, selection.end, maskLen - selection.end);
      clearedValue = (0, _string.insertString)(_this2.maskOptions, clearedValue, enteredString, 0);

      if (!clearOnly) {
        cursorPos = Math.max((0, _string.getFilledLength)(_this2.maskOptions, clearedValue), cursorPos);
        if (cursorPos < lastEditablePos) {
          cursorPos = _this2.getRightEditablePos(cursorPos);
        }
      } else if (cursorPos < prefix.length) {
        cursorPos = prefix.length;
      }
    }
    value = (0, _string.formatValue)(_this2.maskOptions, value);

    _this2.setInputValue(value);

    if (typeof _this2.props.onChange === 'function') {
      _this2.props.onChange(event);
    }

    if (_this2.isWindowsPhoneBrowser) {
      (0, _defer2.default)(function () {
        _this2.setSelection(cursorPos, 0);
      });
    } else {
      _this2.setCursorPos(cursorPos);
    }
  };

  this.onFocus = function (event) {
    _this2.focused = true;

    if (_this2.maskOptions.mask) {
      if (!_this2.value) {
        var prefix = _this2.maskOptions.prefix;
        var value = (0, _string.formatValue)(_this2.maskOptions, prefix);
        var inputValue = (0, _string.formatValue)(_this2.maskOptions, value);

        // do not use this.getInputValue and this.setInputValue as this.input
        // can be undefined at this moment if autoFocus attribute is set
        var isInputValueChanged = inputValue !== event.target.value;

        if (isInputValueChanged) {
          event.target.value = inputValue;
        }

        _this2.value = inputValue;

        if (isInputValueChanged && typeof _this2.props.onChange === 'function') {
          _this2.props.onChange(event);
        }

        _this2.setCursorToEnd();
      } else if ((0, _string.getFilledLength)(_this2.maskOptions, _this2.value) < _this2.maskOptions.mask.length) {
        _this2.setCursorToEnd();
      }
    }

    if (typeof _this2.props.onFocus === 'function') {
      _this2.props.onFocus(event);
    }
  };

  this.onBlur = function (event) {
    _this2.focused = false;

    if (_this2.maskOptions.mask && !_this2.props.alwaysShowMask && (0, _string.isEmpty)(_this2.maskOptions, _this2.value)) {
      var inputValue = '';
      var isInputValueChanged = inputValue !== _this2.getInputValue();

      if (isInputValueChanged) {
        _this2.setInputValue(inputValue);
      }

      if (isInputValueChanged && typeof _this2.props.onChange === 'function') {
        _this2.props.onChange(event);
      }
    }

    if (typeof _this2.props.onBlur === 'function') {
      _this2.props.onBlur(event);
    }
  };

  this.onPaste = function (event) {
    if (typeof _this2.props.onPaste === 'function') {
      _this2.props.onPaste(event);
    }

    if (_this2.isAndroidBrowser && !event.defaultPrevented) {
      _this2.paste = {
        value: _this2.getInputValue(),
        selection: _this2.getSelection()
      };
      _this2.setInputValue('');
    }
  };

  this.pasteText = function (value, text, selection, event) {
    var cursorPos = selection.start;
    if (selection.length) {
      value = (0, _string.clearRange)(_this2.maskOptions, value, cursorPos, selection.length);
    }
    var textLen = (0, _string.getInsertStringLength)(_this2.maskOptions, value, text, cursorPos);
    value = (0, _string.insertString)(_this2.maskOptions, value, text, cursorPos);
    cursorPos += textLen;
    cursorPos = _this2.getRightEditablePos(cursorPos) || cursorPos;

    if (value !== _this2.getInputValue()) {
      _this2.setInputValue(value);
      if (event && typeof _this2.props.onChange === 'function') {
        _this2.props.onChange(event);
      }
    }

    _this2.setCursorPos(cursorPos);
  };

  this.render = function () {
    var _props = _this2.props,
        mask = _props.mask,
        alwaysShowMask = _props.alwaysShowMask,
        maskChar = _props.maskChar,
        formatChars = _props.formatChars,
        props = _objectWithoutProperties(_props, ['mask', 'alwaysShowMask', 'maskChar', 'formatChars']);

    if (_this2.maskOptions.mask) {
      if (!props.disabled && !props.readOnly) {
        var handlersKeys = ['onChange', 'onKeyDown', 'onPaste'];
        handlersKeys.forEach(function (key) {
          props[key] = _this2[key];
        });
      }

      if (props.value != null) {
        props.value = _this2.value;
      }
    }

    return _react2.default.createElement('input', _extends({ ref: function ref(_ref) {
        return _this2.input = _ref;
      } }, props, { onFocus: _this2.onFocus, onBlur: _this2.onBlur }));
  };
};

exports.default = InputElement;
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (mask, maskChar, charsRules) {
  if (maskChar === undefined) {
    maskChar = _constants.defaultMaskChar;
  }
  if (charsRules == null) {
    charsRules = _constants.defaultCharsRules;
  }

  if (!mask || typeof mask !== 'string') {
    return {
      maskChar: maskChar,
      charsRules: charsRules,
      mask: null,
      prefix: null,
      lastEditablePos: null,
      permanents: []
    };
  }
  var str = '';
  var prefix = '';
  var permanents = [];
  var isPermanent = false;
  var lastEditablePos = null;

  mask.split('').forEach(function (character) {
    if (!isPermanent && character === '\\') {
      isPermanent = true;
    } else {
      if (isPermanent || !charsRules[character]) {
        permanents.push(str.length);
        if (str.length === permanents.length - 1) {
          prefix += character;
        }
      } else {
        lastEditablePos = str.length + 1;
      }
      str += character;
      isPermanent = false;
    }
  });

  return {
    maskChar: maskChar,
    charsRules: charsRules,
    prefix: prefix,
    mask: str,
    lastEditablePos: lastEditablePos,
    permanents: permanents
  };
};

var _constants = __webpack_require__(30);

module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultCharsRules = exports.defaultCharsRules = {
  '9': '[0-9]',
  'a': '[A-Za-z]',
  '*': '[A-Za-z0-9]'
};

var defaultMaskChar = exports.defaultMaskChar = '_';

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAndroidBrowser = isAndroidBrowser;
exports.isWindowsPhoneBrowser = isWindowsPhoneBrowser;
exports.isAndroidFirefox = isAndroidFirefox;
exports.isIOS = isIOS;
function isAndroidBrowser() {
  var windows = new RegExp('windows', 'i');
  var firefox = new RegExp('firefox', 'i');
  var android = new RegExp('android', 'i');
  var ua = navigator.userAgent;
  return !windows.test(ua) && !firefox.test(ua) && android.test(ua);
}

function isWindowsPhoneBrowser() {
  var windows = new RegExp('windows', 'i');
  var phone = new RegExp('phone', 'i');
  var ua = navigator.userAgent;
  return windows.test(ua) && phone.test(ua);
}

function isAndroidFirefox() {
  var windows = new RegExp('windows', 'i');
  var firefox = new RegExp('firefox', 'i');
  var android = new RegExp('android', 'i');
  var ua = navigator.userAgent;
  return !windows.test(ua) && firefox.test(ua) && android.test(ua);
}

function isIOS() {
  var windows = new RegExp('windows', 'i');
  var ios = new RegExp('(ipod|iphone|ipad)', 'i');
  var ua = navigator.userAgent;
  return !windows.test(ua) && ios.test(ua);
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPermanentChar = isPermanentChar;
exports.isAllowedChar = isAllowedChar;
exports.isEmpty = isEmpty;
exports.getFilledLength = getFilledLength;
exports.isFilled = isFilled;
exports.formatValue = formatValue;
exports.clearRange = clearRange;
exports.insertString = insertString;
exports.getInsertStringLength = getInsertStringLength;
function isPermanentChar(maskOptions, pos) {
  return maskOptions.permanents.indexOf(pos) !== -1;
}

function isAllowedChar(maskOptions, pos, character) {
  var mask = maskOptions.mask,
      charsRules = maskOptions.charsRules;


  if (!character) {
    return false;
  }

  if (isPermanentChar(maskOptions, pos)) {
    return mask[pos] === character;
  }

  var ruleChar = mask[pos];
  var charRule = charsRules[ruleChar];

  return new RegExp(charRule).test(character);
}

function isEmpty(maskOptions, value) {
  return value.split('').every(function (character, i) {
    return isPermanentChar(maskOptions, i) || !isAllowedChar(maskOptions, i, character);
  });
}

function getFilledLength(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;


  if (!maskChar) {
    while (value.length > prefix.length && isPermanentChar(maskOptions, value.length - 1)) {
      value = value.slice(0, value.length - 1);
    }
    return value.length;
  }

  var filledLength = prefix.length;
  for (var i = value.length; i >= prefix.length; i--) {
    var character = value[i];
    var isEnteredCharacter = !isPermanentChar(maskOptions, i) && isAllowedChar(maskOptions, i, character);
    if (isEnteredCharacter) {
      filledLength = i + 1;
      break;
    }
  }

  return filledLength;
}

function isFilled(maskOptions, value) {
  return getFilledLength(maskOptions, value) === maskOptions.mask.length;
}

function formatValue(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;


  if (!maskChar) {
    value = insertString(maskOptions, '', value, 0);
    value = value.slice(0, getFilledLength(maskOptions, value));

    if (value.length < prefix.length) {
      value = prefix;
    }

    return value;
  }

  if (value) {
    var emptyValue = formatValue(maskOptions, '');
    return insertString(maskOptions, emptyValue, value, 0);
  }

  for (var i = 0; i < mask.length; i++) {
    if (isPermanentChar(maskOptions, i)) {
      value += mask[i];
    } else {
      value += maskChar;
    }
  }

  return value;
}

function clearRange(maskOptions, value, start, len) {
  var end = start + len;
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;

  var arrayValue = value.split('');

  if (!maskChar) {
    start = Math.max(prefix.length, start);
    arrayValue.splice(start, end - start);
    value = arrayValue.join('');

    return formatValue(maskOptions, value);
  }

  return arrayValue.map(function (character, i) {
    if (i < start || i >= end) {
      return character;
    }
    if (isPermanentChar(maskOptions, i)) {
      return mask[i];
    }
    return maskChar;
  }).join('');
}

function insertString(maskOptions, value, insertStr, insertPos) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;

  var arrayInsertStr = insertStr.split('');
  var isInputFilled = isFilled(maskOptions, value);

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentChar(maskOptions, pos) || character === mask[pos];
  };
  var isUsableCharacter = function isUsableCharacter(character, pos) {
    return !maskChar || !isPermanentChar(maskOptions, pos) || character !== maskChar;
  };

  if (!maskChar && insertPos > value.length) {
    value += mask.slice(value.length, insertPos);
  }

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPos, insertCharacter)) {
      if (insertPos >= value.length) {
        value += mask[insertPos];
      }

      if (!isUsableCharacter(insertCharacter, insertPos)) {
        return true;
      }

      insertPos++;

      // stop iteration if maximum value length reached
      if (insertPos >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedChar(maskOptions, insertPos, insertCharacter) || insertCharacter === maskChar;
    if (!isAllowed) {
      return true;
    }

    if (insertPos < value.length) {
      if (maskChar || isInputFilled || insertPos < prefix.length) {
        value = value.slice(0, insertPos) + insertCharacter + value.slice(insertPos + 1);
      } else {
        value = value.slice(0, insertPos) + insertCharacter + value.slice(insertPos);
        value = formatValue(maskOptions, value);
      }
    } else if (!maskChar) {
      value += insertCharacter;
    }

    insertPos++;

    // stop iteration if maximum value length reached
    return insertPos < mask.length;
  });

  return value;
}

function getInsertStringLength(maskOptions, value, insertStr, insertPos) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar;

  var arrayInsertStr = insertStr.split('');
  var initialInsertPos = insertPos;

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentChar(maskOptions, pos) || character === mask[pos];
  };

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPos, insertCharacter)) {
      insertPos++;

      // stop iteration if maximum value length reached
      if (insertPos >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedChar(maskOptions, insertPos, insertCharacter) || insertCharacter === maskChar;

    if (isAllowed) {
      insertPos++;
    }

    // stop iteration if maximum value length reached
    return insertPos < mask.length;
  });

  return insertPos - initialInsertPos;
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
            value: true
});

exports.default = function (fn) {
            var defer = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function () {
                        return setTimeout(fn, 0);
            };

            return defer(fn);
};

module.exports = exports["default"];

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestorProfileContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonalInformationContainer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ProspectComponent_InvestorProfileComponent__ = __webpack_require__(36);



var mapStateToProps = function (state) { return ({
    previousFunds: state.ProspectDetail.previousFunds,
    FINRA: state.ProspectDetail.FINRA,
    investmentObjective: state.ProspectDetail.investmentObjective,
    riskProfile: state.ProspectDetail.riskProfile,
    annualHouseholdIncomeRange: state.ProspectDetail.annualHouseholdIncomeRange,
    netWorthRange: state.ProspectDetail.netWorthRange,
    lifeInsuranceRange: state.ProspectDetail.lifeInsuranceRange,
    taxBracket: state.ProspectDetail.taxBracket,
    dependentsNo: state.ProspectDetail.dependentsNo,
    ages: state.ProspectDetail.ages,
    currentEmployer: state.ProspectDetail.currentEmployer,
    employmentStatus: state.ProspectDetail.employmentStatus,
    occupation: state.ProspectDetail.occupation,
    employerAddress: state.ProspectDetail.employerAddress,
    employerCity: state.ProspectDetail.employerCity,
    employerState: state.ProspectDetail.employerState,
    employerZipCode: state.ProspectDetail.employerZipCode,
    hireDate: state.ProspectDetail.hireDate,
    expectedAnnuityDate: state.ProspectDetail.expectedAnnuityDate,
    employerSalary: state.ProspectDetail.employerSalary,
    states: state.states
}); };
var InvestorProfileContainer = Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, __WEBPACK_IMPORTED_MODULE_1__PersonalInformationContainer__["b" /* mapDispatchToProps */])(__WEBPACK_IMPORTED_MODULE_2__components_ProspectComponent_InvestorProfileComponent__["a" /* default */]);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__ = __webpack_require__(12);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/*export interface IInvestorProfileProps{
//states?: IState[];
states?: any[];
onChange: ()=> void;
previousFunds?: string;
FINRA?: string;
investmentObjective?:string;
riskProfile?:string;
annualHouseholdIncomeRange?:string;
netWorthRange?:string;
lifeInsuranceRange?: string;
taxBracket?:string;
dependentsNo?:string;
ages?:string;
currentEmployer?:string;
employmentStatus?:string;
occupation?:string;
employerAddress?:string;
employerCity?:string;
employerState?:string;
employerZipCode?:string;
employerSalary?:string;
hireDate?:any;
expectedAnnuityDate?:any;
}

export interface IState{
Code:string;
}
*/
var InvestorProfile = /** @class */ (function (_super) {
    __extends(InvestorProfile, _super);
    function InvestorProfile(props) {
        var _this = _super.call(this, props) || this;
        _this.handleUserInput = _this.handleUserInput.bind(_this);
        return _this;
    }
    InvestorProfile.prototype.handleUserInput = function (e) {
        var onChange = this.props.onChange;
        onChange(e);
    };
    InvestorProfile.prototype.render = function () {
        var states = this.props.states;
        var statesListDown;
        if (states !== undefined) {
            statesListDown = Object.keys(states).map(function (key, index) { return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { key: index, value: states[key].Code }, states[key].Code); });
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "previousFunds" }, "Previously purchased mutual funds or other securities?"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", checked: this.props.previousFunds === "1", name: "previousFunds", value: "1" }),
                            "Yes"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", value: "0", name: "previousFunds", checked: this.props.previousFunds === "0" }),
                            "No")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "FINRA" }, "Employed by or registered with a FINRA member firm?"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "FINRA", value: "1", checked: this.props.FINRA === "1" }),
                            "Yes"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "FINRA", value: "0", checked: this.props.FINRA === "0" }),
                            "No")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "investmentObjective" }, "Investment Objective"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "investmentObjective", value: "SP", checked: this.props.investmentObjective === "SP" }),
                            "Safety of Principal"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "investmentObjective", value: "LG", checked: this.props.investmentObjective === "LG" }),
                            "Long-Term Growth"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "investmentObjective", value: "IN", checked: this.props.investmentObjective === "IN" }),
                            "Income")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "riskProfile" }, "Risk Profile"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", { name: "riskProfile", value: this.props.riskProfile, onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "" }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "HR" }, "Higher Risk"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "AG" }, "Aggressive"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "MA" }, "Moderately Aggressive"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "MD" }, "Moderate"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "MC" }, "Moderately Conservative"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "CN" }, "Conservative"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "CA" }, "Cautious")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, " Financial Situation")),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "annualHouseholdIncomeRange" }, "Annual Household Income Range"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "annualHouseholdIncomeRange", value: "01", checked: this.props.annualHouseholdIncomeRange === "01" }),
                            "Under $50,000"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "annualHouseholdIncomeRange", value: "02", checked: this.props.annualHouseholdIncomeRange === "02" }),
                            "$50,000 - $100,000"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "annualHouseholdIncomeRange", value: "03", checked: this.props.annualHouseholdIncomeRange === "03" }),
                            "Over $100,000")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "netWorthRange" }, "Net Worth Range"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "netWorthRange", value: "1", checked: this.props.netWorthRange === "1" }),
                            "Under $50,000"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "netWorthRange", value: "2", checked: this.props.netWorthRange === "2" }),
                            "$50,000 - $100,000"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "netWorthRange", value: "3", checked: this.props.netWorthRange === "3" }),
                            "Over $100,000")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "lifeInsuranceRange" }, "Life Insurance Range"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "lifeInsuranceRange", value: "01", checked: this.props.lifeInsuranceRange === "01" }),
                            "Under $50,000"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "lifeInsuranceRange", value: "02", checked: this.props.lifeInsuranceRange === "02" }),
                            "$50,000 - $100,000"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "lifeInsuranceRange", value: "03", checked: this.props.lifeInsuranceRange === "03" }),
                            "Over $100,000")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "taxBracket" }, "Tax Bracket"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "number", min: "0", name: "taxBracket", className: "form-control", onChange: this.handleUserInput, value: this.props.taxBracket })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "dependentsNo" }, "Dependents:  Number"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "number", min: "0", name: "dependentsNo", className: "form-control", onChange: this.handleUserInput, value: this.props.dependentsNo })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "ages" }, "Ages"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "number", min: "0", name: "ages", className: "form-control", onChange: this.handleUserInput, value: this.props.ages }))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", { className: "half-rule" })),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "currentEmployer" }, "Current Employer"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", name: "currentEmployer", className: "form-control", onChange: this.handleUserInput, value: this.props.currentEmployer })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-8" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "occupation" }, "Occupation"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", name: "occupation", className: "form-control", onChange: this.handleUserInput, value: this.props.occupation }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "employmentStatus", value: "R", checked: this.props.employmentStatus === "R" }),
                            "Retired"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "employmentStatus", value: "U", checked: this.props.employmentStatus === "U" }),
                            "Unemployed")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "employerAddress" }, "Employer Address"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", name: "employerAddress", className: "form-control", onChange: this.handleUserInput, value: this.props.employerAddress })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "employerCity" }, "City"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", name: "employerCity", className: "form-control", onChange: this.handleUserInput, value: this.props.employerCity })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-2" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "employerState" }, "State"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", { name: "employerState", className: "form-control", onChange: this.handleUserInput, value: this.props.employerState },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "" }),
                        statesListDown)),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-2" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "employerZipCode" }, "ZipCode"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", name: "employerZipCode", "max-length": "5", className: "form-control", onChange: this.handleUserInput, value: this.props.employerZipCode }))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-2" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "employerSalary" }, "Salary"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", name: "employerSalary", className: "form-control", min: "0", onChange: this.handleUserInput, value: this.props.employerSalary })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "hireDate" }, "Hire Date"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "date", name: "hireDate", className: "form-control", onChange: this.handleUserInput, value: this.props.hireDate })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "expectedAnnuityDate" }, "Expected Annuity Date"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "date", name: "expectedAnnuityDate", className: "form-control", onChange: this.handleUserInput, value: this.props.expectedAnnuityDate })))));
    };
    return InvestorProfile;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (InvestorProfile);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeSourceContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ProspectComponent_IncomeSourceComponent__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PersonalInformationContainer__ = __webpack_require__(6);



var mapStateToProps = function (state) { return ({
    incomeAccountSalary: state.ProspectDetail.incomeAccountSalary,
    socialSecurity: state.ProspectDetail.socialSecurity,
    pensionBenefits: state.ProspectDetail.pensionBenefits,
    investmentIncome: state.ProspectDetail.investmentIncome,
    rmd: state.ProspectDetail.rmd,
    other: state.ProspectDetail.other,
    expensesAmount: state.ProspectDetail.expensesAmount
}); };
var IncomeSourceContainer = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, __WEBPACK_IMPORTED_MODULE_2__PersonalInformationContainer__["b" /* mapDispatchToProps */])(__WEBPACK_IMPORTED_MODULE_0__components_ProspectComponent_IncomeSourceComponent__["a" /* default */]);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IncomeSource = /** @class */ (function (_super) {
    __extends(IncomeSource, _super);
    function IncomeSource(props) {
        var _this = _super.call(this, props) || this;
        _this.handleUserInput = _this.handleUserInput.bind(_this);
        return _this;
    }
    IncomeSource.prototype.handleUserInput = function (e) {
        var onChange = this.props.onChange;
        onChange(e);
    };
    IncomeSource.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, "Annual Household")),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" }, "Income Account From:"),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-4 form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "incomeAccountSalary" }, "Salary"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", className: "form-control", name: "incomeAccountSalary", onChange: this.handleUserInput, value: this.props.incomeAccountSalary })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-4 form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "socialSecurity" }, "Social Security"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", className: "form-control", name: "socialSecurity", onChange: this.handleUserInput, value: this.props.socialSecurity })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-4 form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "pensionBenefits" }, "Pension Benefits"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", className: "form-control", name: "pensionBenefits", onChange: this.handleUserInput, value: this.props.pensionBenefits }))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-4 form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "investmentIncome" }, "Investment Income"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", className: "form-control", name: "investmentIncome", onChange: this.handleUserInput, value: this.props.investmentIncome })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-4 form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "rmd" }, "RMD"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", className: "form-control", name: "rmd", onChange: this.handleUserInput, value: this.props.rmd })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-4 form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "other" }, "Other"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", className: "form-control", name: "other", min: "0", onChange: this.handleUserInput, value: this.props.other }))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-4 form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "expensesAmount" }, "Expenses Amount"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", className: "form-control", name: "expensesAmount", onChange: this.handleUserInput, value: this.props.expensesAmount })))));
    };
    return IncomeSource;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (IncomeSource);


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_Prospect_ProspectApi__ = __webpack_require__(45);





function configureStore(history, initialState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    var windowIfDefined = typeof window === 'undefined' ? null : window;
    // If devTools is installed, connect to it
    var devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
    var createStoreWithMiddleware = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a, __WEBPACK_IMPORTED_MODULE_4__api_Prospect_ProspectApi__["b" /* errorHandler */], __WEBPACK_IMPORTED_MODULE_4__api_Prospect_ProspectApi__["a" /* ProspectMiddleWare */], Object(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerMiddleware"])(history)), devToolsExtension ? devToolsExtension() : function (next) { return next; })(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"]);
    // Combine all reducers and instantiate the app-wide store instance
    var allReducers = buildRootReducer(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* reducers */]);
    var store = createStoreWithMiddleware(allReducers, initialState);
    // Enable Webpack hot module replacement for reducers
    if (false) {
        module.hot.accept('./store', function () {
            var nextRootReducer = require('./store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }
    return store;
}
function buildRootReducer(allReducers) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(Object.assign({}, allReducers, { routing: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"] }));
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(37);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(114);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Prospect__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__States__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ValidationMessage__ = __webpack_require__(44);
//import * as WeatherForecasts from './WeatherForecasts';
//import * as Counter from './Counter';




// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers = {
    isLoading: __WEBPACK_IMPORTED_MODULE_0__Loader__["b" /* reducer */],
    states: __WEBPACK_IMPORTED_MODULE_2__States__["b" /* reducer */],
    ProspectDetail: __WEBPACK_IMPORTED_MODULE_1__Prospect__["d" /* reducer */],
    errors: __WEBPACK_IMPORTED_MODULE_3__ValidationMessage__["a" /* reducer */],
    agentCode: __WEBPACK_IMPORTED_MODULE_1__Prospect__["c" /* agentCodereducer */]
};


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export actionCreators */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
var actionCreators = {
    addErrorMessage: function (fieldName, errorMessage) { return ({ type: 'ADD_ERROR_MESSAGE', fieldName: fieldName, errorMessage: errorMessage }); },
};
var reducer = function (state, action) {
    switch (action.type) {
        case "ADD_ERROR_MESSAGE":
            if (state !== null && state !== undefined) {
                var isExist_1 = false;
                var newobj = state.map(function (error) {
                    if (error.fieldName === action.fieldName) {
                        isExist_1 = true;
                        return Object.assign({}, error, { errorMessage: action.errorMessage });
                    }
                    else {
                        return error;
                    }
                });
                if (!isExist_1) {
                    return state.concat([
                        {
                            fieldName: action.fieldName,
                            errorMessage: action.errorMessage
                        }
                    ]);
                }
                else {
                    return newobj;
                }
            }
            else {
                return state.concat([
                    {
                        fieldName: action.fieldName,
                        errorMessage: action.errorMessage
                    }
                ]);
            }
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || Object.assign({}, null);
};


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectMiddleWare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return errorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiUrl_dev__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_ActionTypes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_Loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_validationMessage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_Prospect__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_States__ = __webpack_require__(9);
//import * as ProspectAction from '../../actions/ProspectAction';



//import * as ValidationMessage from '../../actions/ValidationMessageAction';





var advisorUrl = __WEBPACK_IMPORTED_MODULE_0__apiUrl_dev__["a" /* default */].advisorUrl;
var participantUrl = __WEBPACK_IMPORTED_MODULE_0__apiUrl_dev__["a" /* default */].participantUrl;
var ProspectMiddleWare = function (store) { return function (next) { return function (action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_3__constants_ActionTypes__["a" /* GET_PROSPECT_REQUEST */]:
            //next(ProspectAction.loaderBegin());
            next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderBegin());
            return __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(participantUrl + "prospect/" + action.id, {
                method: 'GET'
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                //console.log(data);
                var prospect = {};
                if (data !== undefined && data !== null) {
                    prospect.firstName = data.FirstName;
                    prospect.lastName = data.LastName;
                    prospect.ssn = data.Ssn;
                    prospect.isNew = true;
                    prospect.clientProspectId = data.Id;
                    if (data.Id > 0) {
                        prospect.isNew = false;
                    }
                    else {
                        prospect.isNew = true;
                    }
                    var homeAddressStreet1_1, homeAddressStreet2_1, homeAddressStreet3_1, homeAddressZipCode_1, homeAddressState_1, homeAddressCity_1;
                    var mailingAddressStreet1_1, mailingAddressStreet2_1, mailingAddressStreet3_1, mailingAddressZipCode_1, mailingAddressState_1, mailingAddressCity_1;
                    if (data.Addresses !== undefined && data.Addresses !== null) {
                        data.Addresses["$values"].forEach(function (address) {
                            //data.Addresses.forEach(function (address) {
                            if (address.AddressType === 0) {
                                homeAddressStreet1_1 = address.Street1;
                                homeAddressStreet2_1 = address.Street2;
                                homeAddressStreet3_1 = address.Street3;
                                homeAddressState_1 = address.State;
                                homeAddressCity_1 = address.City;
                                //homeAddressCountry = address.Country;
                                homeAddressZipCode_1 = address.Zip;
                            }
                            else if (address.AddressType === 2) {
                                mailingAddressStreet1_1 = address.Street1;
                                mailingAddressStreet2_1 = address.Street2;
                                mailingAddressStreet3_1 = address.Street3;
                                mailingAddressState_1 = address.State;
                                mailingAddressCity_1 = address.City;
                                //mailingAddressCountry = address.Country;
                                mailingAddressZipCode_1 = address.Zip;
                            }
                        });
                    }
                    var homePhoneNumber_1;
                    var workPhoneNumber_1;
                    var otherPhoneNumber_1;
                    if (data.PhoneNumbers !== null && data.PhoneNumbers !== undefined) {
                        data.PhoneNumbers["$values"].forEach(function (phone) {
                            //data.PhoneNumbers.forEach((phone) => {
                            if (phone.PhoneType === 0) {
                                homePhoneNumber_1 = phone.Number;
                            }
                            else if (phone.PhoneType === 1) {
                                workPhoneNumber_1 = phone.Number;
                            }
                            else if (phone.PhoneType === 5) {
                                otherPhoneNumber_1 = phone.Number;
                            }
                        });
                    }
                    var isReferral = false;
                    if (data.ReferralDate !== null && data.ReferralDate !== undefined && new Date(data.ReferralDate.toString()).getFullYear() > 1900) {
                        isReferral = true;
                    }
                    prospect.title = data.Title;
                    prospect.middleInitial = data.MiddleInitial !== null ? data.MiddleInitial : '';
                    prospect.dateOfBirth = data.DateOfBirth !== null && data.DateOfBirth !== undefined ? new Date(data.DateOfBirth.toString()).toISOString().substr(0, 10) : '';
                    prospect.gender = data.Gender !== null && data.Gender !== undefined ? data.Gender.toString() : '';
                    prospect.usCitizen = data.UsCitizenFlag !== null && data.UsCitizenFlag !== undefined ? data.UsCitizenFlag.toString() : '';
                    prospect.maritalStatus = data.MaritalStatus !== null && data.MaritalStatus !== undefined ? data.MaritalStatus.toString() : '';
                    prospect.homeAddressLine1 = homeAddressStreet1_1;
                    prospect.homeAddressLine2 = homeAddressStreet2_1;
                    prospect.homeAddressLine3 = homeAddressStreet3_1;
                    prospect.homeAddressCity = homeAddressCity_1;
                    prospect.homeAddressState = homeAddressState_1;
                    prospect.homeAddressZipCode = homeAddressZipCode_1;
                    prospect.mailingAddressLine1 = mailingAddressStreet1_1;
                    prospect.mailingAddressLine2 = mailingAddressStreet2_1;
                    prospect.mailingAddressLine3 = mailingAddressStreet3_1;
                    prospect.mailingAddressCity = mailingAddressCity_1;
                    prospect.mailingAddressState = mailingAddressState_1;
                    prospect.mailingAddressZipCode = mailingAddressZipCode_1;
                    prospect.homePhone = homePhoneNumber_1;
                    prospect.workPhone = workPhoneNumber_1;
                    prospect.otherPhone = otherPhoneNumber_1;
                    prospect.referral = isReferral;
                    prospect.emailAddress = data.Email;
                    if (data.ProspectInvestorProfile !== null && data.ProspectInvestorProfile !== undefined) {
                        prospect.previousFunds = data.ProspectInvestorProfile.InvestmentExperience_Flag !== undefined && data.ProspectInvestorProfile.InvestmentExperience_Flag !== null ? data.ProspectInvestorProfile.InvestmentExperience_Flag.toString() : '';
                        prospect.FINRA = data.ProspectInvestorProfile.Finra_Flag !== undefined && data.ProspectInvestorProfile.Finra_Flag !== null ? data.ProspectInvestorProfile.Finra_Flag.toString() : '';
                        prospect.investmentObjective = data.ProspectInvestorProfile.InvestmentObjective;
                        prospect.riskProfile = data.ProspectInvestorProfile.RiskProfile;
                        prospect.annualHouseholdIncomeRange = data.ProspectInvestorProfile.HouseholdIncomeRange;
                        prospect.netWorthRange = data.ProspectInvestorProfile.NetWorthRange;
                        prospect.lifeInsuranceRange = data.ProspectInvestorProfile.LifeInsuranceRange;
                        prospect.taxBracket = data.ProspectInvestorProfile.TaxBracketNumber;
                        prospect.dependentsNo = data.ProspectInvestorProfile.DepedentNumber;
                        prospect.ages = data.ProspectInvestorProfile.Ages;
                        prospect.currentEmployer = data.ProspectInvestorProfile.CurrentEmployer;
                        prospect.employmentStatus = data.ProspectInvestorProfile.EmploymentStatus;
                        prospect.occupation = data.ProspectInvestorProfile.Occupation;
                        prospect.employerAddress = data.ProspectInvestorProfile.EmployerAddress;
                        prospect.employerCity = data.ProspectInvestorProfile.EmployerCity;
                        prospect.employerState = data.ProspectInvestorProfile.EmployerState;
                        prospect.employerZipCode = data.ProspectInvestorProfile.EmployerZipCode;
                        prospect.employerSalary = data.ProspectInvestorProfile.Salary;
                        prospect.hireDate = data.ProspectInvestorProfile.HireDate !== null && data.ProspectInvestorProfile.HireDate !== undefined ? new Date(data.ProspectInvestorProfile.HireDate.toString()).toISOString().substr(0, 10) : '';
                        prospect.expectedAnnuityDate = data.ProspectInvestorProfile.ExpectedAnnuityDate !== null && data.ProspectInvestorProfile.ExpectedAnnuityDate !== undefined ? new Date(data.ProspectInvestorProfile.ExpectedAnnuityDate.toString()).toISOString().substr(0, 10) : '';
                        prospect.isInvestorProfileNew = false;
                    }
                    else {
                        prospect.isInvestorProfileNew = true;
                    }
                    if (data.ProspectIncomeSource !== undefined && data.ProspectIncomeSource !== null) {
                        prospect.incomeAccountSalary = data.ProspectIncomeSource.Salary;
                        prospect.socialSecurity = data.ProspectIncomeSource.SocialSecurity;
                        prospect.pensionBenefits = data.ProspectIncomeSource.PensionBenefits;
                        prospect.investmentIncome = data.ProspectIncomeSource.InvestmentIncome;
                        prospect.rmd = data.ProspectIncomeSource.RMD;
                        prospect.other = data.ProspectIncomeSource.Other;
                        prospect.expensesAmount = data.ProspectIncomeSource.ExpensesAmount;
                        prospect.isIncomeSourceNew = false;
                    }
                    else {
                        prospect.isIncomeSourceNew = true;
                    }
                }
                else {
                    prospect.isNew = true;
                }
                //next(ProspectAction.fetchProspectSuccess(prospect))
                //next(ProspectAction.loaderComplete());
                next(__WEBPACK_IMPORTED_MODULE_6__store_Prospect__["a" /* actionCreators */].fetchProspectSuccess(prospect));
                next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderEnd());
                //return Promise.resolve();
            })
                .catch(function (error) {
                // next(ValidationMessage.AddErrorMessage('', "Unable to get prospect"));
                //next(ProspectAction.fetchProspectFailed());
                //next(ProspectAction.loaderComplete());
                next(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage('', "Unable to get prospect"));
                next(__WEBPACK_IMPORTED_MODULE_6__store_Prospect__["a" /* actionCreators */].fetchProspectFailed());
                next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderEnd());
                //console.log(error);
                //return Promise.resolve();
            });
        //break;
        case __WEBPACK_IMPORTED_MODULE_3__constants_ActionTypes__["b" /* GET_STATES_REQUEST */]:
            //next(ProspectAction.loaderBegin());
            next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderBegin());
            return __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(advisorUrl + "advisor/states")
                .then(function (response) { return response.json(); })
                .then(function (json) {
                //next(ProspectAction.fetchStatesSuccess(json["$values"]))
                //next(ProspectAction.loaderComplete());
                next(__WEBPACK_IMPORTED_MODULE_7__store_States__["a" /* actionCreators */].fetchStateSuccess(json["$values"]));
                next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderEnd());
            })
                .catch(function (error) {
                console.log('request states failed', error);
                //next(ProspectAction.loaderComplete());
                //next(ValidationMessage.AddErrorMessage('', "Unable to get states"));
                //next(ProspectAction.fetchStatesFailed());
                next(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage('', "Unable to get states"));
                next(__WEBPACK_IMPORTED_MODULE_7__store_States__["a" /* actionCreators */].fetchStatesFailed());
                next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderEnd());
                //throw error;
                //return error;
            });
        //break;
        case __WEBPACK_IMPORTED_MODULE_3__constants_ActionTypes__["c" /* UPDATE_PROSPECT_REQUEST */]:
            var state = store.getState();
            var prospect = state.ProspectDetail;
            //next(ProspectAction.loaderBegin());
            next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderBegin());
            var validForm_1 = true;
            state.errors.forEach(function (error, index) {
                if (error.errorMessage !== "") {
                    validForm_1 = false;
                }
            });
            //console.log(validForm);
            if (validForm_1 != false) {
                var plainSSN = prospect.ssn;
                console.log(plainSSN);
                plainSSN = plainSSN.split('-').join('').split('_').join('');
                var referral;
                if (prospect.referral === true) {
                    referral = new Date().toUTCString();
                }
                var homeAddress = {};
                homeAddress.Street1 = prospect.homeAddressLine1;
                homeAddress.Street2 = prospect.homeAddressLine2;
                homeAddress.Street3 = prospect.homeAddressLine3;
                homeAddress.City = prospect.homeAddressCity;
                homeAddress.State = prospect.homeAddressState;
                homeAddress.Zip = prospect.homeAddressZipCode;
                homeAddress.AddressType = 0;
                var address = [];
                address.push(homeAddress);
                var mailingAddress = {};
                mailingAddress.Street1 = prospect.mailingAddressLine1;
                mailingAddress.Street2 = prospect.mailingAddressLine2;
                mailingAddress.Street3 = prospect.mailingAddressLine3;
                mailingAddress.City = prospect.mailingAddressCity;
                mailingAddress.State = prospect.mailingAddressState;
                mailingAddress.Zip = prospect.mailingAddressZipCode;
                mailingAddress.AddressType = 2;
                address.push(mailingAddress);
                var phoneNumbers = [];
                var homePhone = {};
                homePhone.Number = prospect.homePhone !== undefined ? prospect.homePhone.split('-').join('').split('(').join('').split(')').join('').split('_').join('') : '';
                homePhone.PhoneType = 0;
                phoneNumbers.push(homePhone);
                var workPhone = {};
                workPhone.Number = prospect.workPhone !== undefined ? prospect.workPhone.split('-').join('').split('(').join('').split(')').join('').split('_').join('') : '';
                workPhone.PhoneType = 1;
                phoneNumbers.push(workPhone);
                var otherPhone = {};
                otherPhone.Number = prospect.otherPhone !== undefined ? prospect.otherPhone.split('-').join('').split('(').join('').split(')').join('').split('_').join('') : '';
                otherPhone.PhoneType = 5;
                phoneNumbers.push(otherPhone);
                var incomeSource = {};
                incomeSource.SocialSecurity = prospect.socialSecurity;
                incomeSource.Salary = prospect.incomeAccountSalary;
                incomeSource.PensionBenefits = prospect.pensionBenefits;
                incomeSource.InvestmentIncome = prospect.investmentIncome;
                incomeSource.RMD = prospect.rmd;
                incomeSource.Other = prospect.other;
                incomeSource.ExpensesAmount = prospect.expensesAmount;
                incomeSource.ClientProspectId = prospect.clientProspectId;
                var investorProfile = {};
                investorProfile.InvestmentExperience_Flag = prospect.previousFunds;
                investorProfile.Finra_Flag = prospect.FINRA;
                investorProfile.InvestmentObjective = prospect.investmentObjective;
                investorProfile.RiskProfile = prospect.riskProfile;
                investorProfile.HouseholdIncomeRange = prospect.annualHouseholdIncomeRange;
                investorProfile.NetWorthRange = prospect.netWorthRange;
                investorProfile.LifeInsuranceRange = prospect.lifeInsuranceRange;
                investorProfile.TaxBracketNumber = prospect.taxBracket;
                investorProfile.DepedentNumber = prospect.dependentsNo;
                investorProfile.Ages = prospect.ages;
                investorProfile.CurrentEmployer = prospect.currentEmployer;
                investorProfile.EmploymentStatus = prospect.employmentStatus;
                investorProfile.Occupation = prospect.occupation;
                investorProfile.EmployerAddress = prospect.employerAddress;
                investorProfile.EmployerCity = prospect.employerCity;
                investorProfile.EmployerState = prospect.employerState;
                investorProfile.EmployerZipCode = prospect.employerZipCode;
                investorProfile.HireDate = prospect.hireDate;
                investorProfile.ExpectedAnnuityDate = prospect.expectedAnnuityDate;
                investorProfile.Salary = prospect.employerSalary;
                investorProfile.ClientId = prospect.clientProspectId;
                var prospectData = {
                    Id: prospect.clientProspectId, FirstName: prospect.firstName, Title: prospect.title, MiddleInitial: prospect.middleInitial,
                    LastName: prospect.lastName, Ssn: plainSSN, DateOfBirth: prospect.dateOfBirth, MaritalStatus: prospect.maritalStatus, ReferralDate: referral, Addresses: address,
                    PhoneNumbers: phoneNumbers, Gender: prospect.gender, Email: prospect.emailAddress, ProspectIncomeSource: incomeSource,
                    ProspectInvestorProfile: investorProfile, UsCitizenFlag: prospect.usCitizen
                };
                return __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(participantUrl + "prospect/update", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(prospectData)
                })
                    .then(function (response) {
                    //next(ProspectAction.loaderComplete());
                    next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderEnd());
                    if (response.status >= 200 && response.status < 300) {
                        window.location = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* agileneturl */] + "/Dashboard/Advisor/ClientProspectListing.aspx?agentId=03499";
                    }
                    else {
                        var error = new Error(response.statusText);
                        error.response = response;
                        throw error;
                    }
                })
                    .catch(function (error) {
                    //next(ValidationMessage.AddErrorMessage('', "Unable to update prospect"));
                    //next(ProspectAction.loaderComplete());
                    next(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage('', "Unable to update prospect"));
                    next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderEnd());
                });
            }
            else {
                next(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage('', "Unable to update prospect"));
                next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderEnd());
            }
            break;
        default:
            //console.log(action);
            next(action);
            break;
    }
}; }; };
var errorHandler = function (state) { return function (next) { return function (action) {
    try {
        next(action);
    }
    catch (err) {
        console.log("error caught");
    }
}; }; };


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ApiUrl = /** @class */ (function () {
    function ApiUrl() {
    }
    ApiUrl.participantUrl = 'https://dev.valic.com/react/participantservice/api/';
    ApiUrl.advisorUrl = 'https://dev.valic.com/Services/Advisor/api/';
    return ApiUrl;
}());
/* harmony default export */ __webpack_exports__["a"] = (ApiUrl);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(151);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* unused harmony export reducer */
var actionCreators = {
    addErrorMessage: function (fieldName, errorMessage) { return ({ type: 'ADD_ERROR_MESSAGE', fieldName: fieldName, errorMessage: errorMessage }); },
};
var reducer = function (state, action) {
    switch (action.type) {
        case "ADD_ERROR_MESSAGE":
            if (state !== null && state !== undefined) {
                var isExist_1 = false;
                var newobj = state.map(function (error) {
                    if (error.fieldName === action.fieldName) {
                        isExist_1 = true;
                        return Object.assign({}, error, { errorMessage: action.errorMessage });
                    }
                    else {
                        return error;
                    }
                });
                if (!isExist_1) {
                    return state.concat([
                        {
                            fieldName: action.fieldName,
                            errorMessage: action.errorMessage
                        }
                    ]);
                }
                else {
                    return newobj;
                }
            }
            else {
                return state.concat([
                    {
                        fieldName: action.fieldName,
                        errorMessage: action.errorMessage
                    }
                ]);
            }
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || Object.assign({}, null);
};


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTkwMjMwNzg3MWM2NTA2NzM3NzUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC91dGlsaXR5L1V0aWxpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvUGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL0FjdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9Qcm9zcGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvU3RhdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvVmFsaWNJbnB1dENvbXBvbmVudC9WYWxpY0lucHV0Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9Qcm9zcGVjdEVkaXRDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvVGFiQ29udGFpbmVyQ29tcG9uZW50L1RhYkNvbnRhaW5lckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9UYWJDb250YWluZXJDb21wb25lbnQvVGFiQ29udGFpbmVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1ZhbGljVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQvVmFsaWNWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9Mb2FkZXJDb21wb25lbnQvTG9hZGVyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0xvYWRlckNvbXBvbmVudC9sb2FkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L1BlcnNvbmFsSW5mb3JtYXRpb25Db21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9saWIvdXRpbHMvcGFyc2VNYXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2xpYi9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2xpYi91dGlscy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL2RlZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1Byb3NwZWN0Q29udGFpbmVyL0ludmVzdG9yUHJvZmlsZUNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9zcGVjdENvbXBvbmVudC9JbnZlc3RvclByb2ZpbGVDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1Byb3NwZWN0Q29udGFpbmVyL0luY29tZVNvdXJjZUNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9zcGVjdENvbXBvbmVudC9JbmNvbWVTb3VyY2VDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1Byb3NwZWN0Q29udGFpbmVyL1Byb3NwZWN0RWRpdENvbnRhaW5lci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9WYWxpZGF0aW9uTWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL1Byb3NwZWN0L1Byb3NwZWN0QXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvYXBpVXJsLmRldi50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLW5vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS92YWxpZGF0aW9uTWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEscUM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0F1QjtBQUN2QixJQUFNLFlBQVksR0FBRyxVQUFDLEtBQVM7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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBLE9BQU8sRUFBRSxVQUFVLGlEQUFpRDtBQUNwRTtBQUNBOztBQUVBO0FBQ0Esb0M7Ozs7Ozs7QUN6aEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0M7Ozs7Ozs7QUMzREE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EOzs7Ozs7O0FDWEE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3JDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixvQkFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7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WUFDTCxDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsTUFBTSxDQUNDLEtBQUs7b0JBQ1I7d0JBQ0ksU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO3dCQUMzQixZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVk7cUJBQ3BDO21CQUFDO1lBQ1YsQ0FBQztJQUNULENBQUM7SUFFRCxzR0FBc0c7SUFDdEcsbURBQW1EO0lBQ25ELE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTkwMjMwNzg3MWM2NTA2NzM3NzUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3ZlbmRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIi4vdmVuZG9yXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg4Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmNvbnN0IGlzRmllbGRWYWxpZCA9IChpbnB1dDphbnkpID0+IHtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgIGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJykgIT09IG51bGwgJiYgaW5wdXQudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc1ZhbGlkO1xyXG59XHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUZvcm1GaWVsZCA9IChpbnB1dEZpZWxkOiBhbnkpID0+IHtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgIGlzVmFsaWQgPSBpc0ZpZWxkVmFsaWQoaW5wdXRGaWVsZCk7XHJcbiAgICBpbnB1dEZpZWxkLmlzVmFsaWQgPSBpc1ZhbGlkO1xyXG4gICAgaWYgKGlzVmFsaWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgaW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSBpbnB1dEZpZWxkLm5hbWUgKyBcIiBpcyByZXF1aXJlZFwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKHZhbGlkYXRlRm9ybWF0KGlucHV0RmllbGQpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArIFwiIGlzIGludmFsaWRcIjtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgICBpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKlxyXG5jb25zdCB2YWxpZGF0ZUFsbEZpZWxkID0gKGUpID0+IHtcclxuICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dHMubGVuZ3RoOyArK2luZGV4KSB7XHJcbiAgICAgICAgdmFsaWRhdGVGb3JtRmllbGQoaW5wdXRzW2luZGV4XSk7XHJcbiAgICB9XHJcbn0qL1xyXG5jb25zdCB2YWxpZGF0ZUZvcm1hdCA9IChpbnB1dDphbnkpID0+IHtcclxuICAgIGxldCBpc0Zvcm1hdFZhbGlkID0gdHJ1ZTtcclxuICAgIGxldCBmb3JtYXQgPSBcIlwiO1xyXG4gICAgaWYgKGlucHV0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gXCJkYXRlXCIpIHtcclxuICAgICAgICAgICAgLy9mb3JtYXQgPS9eKDBbMS05XXwxWzAtMl0pXFwvKDBbMS05XXwxXFxkfDJcXGR8M1swMV0pXFwvKDE5fDIwKVxcZHsyfSQvO1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsaWRpdHkgIT09IHVuZGVmaW5lZCAmJiAoaW5wdXQudmFsaWRpdHkuYmFkSW5wdXQgPT09IHRydWUgfHwgaW5wdXQudmFsaWRpdHkudmFsaWQgPT09IGZhbHNlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkKGlucHV0KS5hdHRyKCdkYXRhLWRhdGVCaXJ0aCcpICE9PSB1bmRlZmluZWQgJiYgaW5wdXQudmFsdWUgIT09IFwiXCIgJiYgaW5wdXQudmFsdWVBc0RhdGUgPj0gbmV3IERhdGUoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIiAmJiAoaW5wdXQudmFsdWVBc0RhdGUuZ2V0RnVsbFllYXIoKSA+PSAyMDk5IHx8IGlucHV0LnZhbHVlQXNEYXRlLmdldEZ1bGxZZWFyKCkgPD0gMTkwMCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIgJiYgZm9ybWF0ICE9PSBcIlwiICYmIChmb3JtYXQgYXMgYW55KS50ZXN0KGlucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpc0Zvcm1hdFZhbGlkO1xyXG59XHJcbmV4cG9ydCBjb25zdCBlcnJvckNsYXNzID0gKGVycm9yczogYW55LCBmaWVsZE5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKGVycm9ycyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZXJyb3JzLmZvckVhY2goZnVuY3Rpb24gKGVycm9yOiBhbnkpIHtcclxuICAgICAgICAgICAgaWYgKGVycm9yLmZpZWxkTmFtZSA9PT0gZmllbGROYW1lICYmIGVycm9yLmVycm9yTWVzc2FnZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC91dGlsaXR5L1V0aWxpdHkudHMiLCIgICAgaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBlcnNvbmFsSW5mb3JtYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9zcGVjdENvbXBvbmVudC9QZXJzb25hbEluZm9ybWF0aW9uQ29tcG9uZW50JztcclxuaW1wb3J0IHsgdmFsaWRhdGVGb3JtRmllbGQgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbGl0eS9VdGlsaXR5JztcclxuLy9pbXBvcnQgeyBvbklucHV0Q2hhbmdlIGFzIG9uQ2hhbmdlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9Qcm9zcGVjdEFjdGlvbic7XHJcbmltcG9ydCAqIGFzICBQcm9zcGVjdEFjdGlvbiBmcm9tICcuLi8uLi9zdG9yZS9Qcm9zcGVjdCc7XHJcbmltcG9ydCAqIGFzIFZhbGlkYXRpb25NZXNzYWdBY3Rpb24gZnJvbSAnLi4vLi4vc3RvcmUvdmFsaWRhdGlvbk1lc3NhZ2UnO1xyXG4vL2ltcG9ydCB7IEFkZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvVmFsaWRhdGlvbk1lc3NhZ2VBY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICAgIHZhbGljSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IGUudGFyZ2V0LmNoZWNrZWQgOiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIC8vZGlzcGF0Y2gob25DaGFuZ2UobmFtZSwgdmFsdWUpKTtcclxuICAgICAgICBkaXNwYXRjaChQcm9zcGVjdEFjdGlvbi5hY3Rpb25DcmVhdG9ycy5vbklucHV0Q2hhbmdlKG5hbWUsIHZhbHVlKSk7XHJcbiAgICAgICAgaWYgKGlucHV0RmllbGQuaXNWYWxpZCA9PT0gZmFsc2UgfHwgaW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAvL2Rpc3BhdGNoKEFkZEVycm9yTWVzc2FnZShuYW1lLCBpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChWYWxpZGF0aW9uTWVzc2FnQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZShuYW1lLCBpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAkKGlucHV0RmllbGQpLnBhcmVudCgpLmFkZENsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL2Rpc3BhdGNoKEFkZEVycm9yTWVzc2FnZShuYW1lLCAnJykpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChWYWxpZGF0aW9uTWVzc2FnQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZShuYW1lLCAnJykpO1xyXG4gICAgICAgICAgICAkKGlucHV0RmllbGQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGxldCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gZS50YXJnZXQuY2hlY2tlZCA6IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGxldCBpbnB1dEZpZWxkID0gZS50YXJnZXQ7XHJcbiAgICAgICAgLy9kaXNwYXRjaChvbkNoYW5nZShuYW1lLCB2YWx1ZSkpO1xyXG4gICAgICAgIGRpc3BhdGNoKFByb3NwZWN0QWN0aW9uLmFjdGlvbkNyZWF0b3JzLm9uSW5wdXRDaGFuZ2UobmFtZSwgdmFsdWUpKTtcclxuICAgICAgICB2YWxpZGF0ZUZvcm1GaWVsZChpbnB1dEZpZWxkKTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0RmllbGQuaXNWYWxpZCA9PT0gZmFsc2UgfHwgaW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAvL2Rpc3BhdGNoKEFkZEVycm9yTWVzc2FnZShuYW1lLCBpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChWYWxpZGF0aW9uTWVzc2FnQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZShuYW1lLCBpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAkKGlucHV0RmllbGQpLnBhcmVudCgpLmFkZENsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL2Rpc3BhdGNoKEFkZEVycm9yTWVzc2FnZShuYW1lLCAnJykpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChWYWxpZGF0aW9uTWVzc2FnQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZShuYW1lLCAnJykpO1xyXG4gICAgICAgICAgICAkKGlucHV0RmllbGQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59KVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBzc246IHN0YXRlLlByb3NwZWN0RGV0YWlsLnNzbixcclxuICAgIHRpdGxlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC50aXRsZSxcclxuICAgIGZpcnN0TmFtZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmxhc3ROYW1lLFxyXG4gICAgbWlkZGxlSW5pdGlhbDogc3RhdGUuUHJvc3BlY3REZXRhaWwubWlkZGxlSW5pdGlhbCxcclxuICAgIGRhdGVPZkJpcnRoOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5kYXRlT2ZCaXJ0aCxcclxuICAgIGdlbmRlcjogc3RhdGUuUHJvc3BlY3REZXRhaWwuZ2VuZGVyLFxyXG4gICAgdXNDaXRpemVuOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC51c0NpdGl6ZW4sXHJcbiAgICBtYXJpdGFsU3RhdHVzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5tYXJpdGFsU3RhdHVzLFxyXG4gICAgaG9tZUFkZHJlc3NMaW5lMTogc3RhdGUuUHJvc3BlY3REZXRhaWwuaG9tZUFkZHJlc3NMaW5lMSxcclxuICAgIGhvbWVBZGRyZXNzTGluZTI6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmhvbWVBZGRyZXNzTGluZTIsXHJcbiAgICBob21lQWRkcmVzc0xpbmUzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lQWRkcmVzc0xpbmUzLFxyXG4gICAgaG9tZUFkZHJlc3NDaXR5OiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lQWRkcmVzc0NpdHksXHJcbiAgICBob21lQWRkcmVzc1N0YXRlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lQWRkcmVzc1N0YXRlLFxyXG4gICAgaG9tZUFkZHJlc3NaaXBDb2RlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lQWRkcmVzc1ppcENvZGUsXHJcbiAgICBtYWlsaW5nQWRkcmVzc0xpbmUxOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5tYWlsaW5nQWRkcmVzc0xpbmUxLFxyXG4gICAgbWFpbGluZ0FkZHJlc3NMaW5lMjogc3RhdGUuUHJvc3BlY3REZXRhaWwubWFpbGluZ0FkZHJlc3NMaW5lMixcclxuICAgIG1haWxpbmdBZGRyZXNzTGluZTM6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1haWxpbmdBZGRyZXNzTGluZTMsXHJcbiAgICBtYWlsaW5nQWRkcmVzc0NpdHk6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1haWxpbmdBZGRyZXNzQ2l0eSxcclxuICAgIG1haWxpbmdBZGRyZXNzU3RhdGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1haWxpbmdBZGRyZXNzU3RhdGUsXHJcbiAgICBtYWlsaW5nQWRkcmVzc1ppcENvZGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1haWxpbmdBZGRyZXNzWmlwQ29kZSxcclxuICAgIGhvbWVQaG9uZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuaG9tZVBob25lLFxyXG4gICAgd29ya1Bob25lOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC53b3JrUGhvbmUsXHJcbiAgICBvdGhlclBob25lOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5vdGhlclBob25lLFxyXG4gICAgcmVmZXJyYWw6IHN0YXRlLlByb3NwZWN0RGV0YWlsLnJlZmVycmFsLFxyXG4gICAgZW1haWxBZGRyZXNzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5lbWFpbEFkZHJlc3MsXHJcbiAgICBzdGF0ZXM6IHN0YXRlLnN0YXRlc1xyXG59KTtcclxuZXhwb3J0IGNvbnN0IFBlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQZXJzb25hbEluZm9ybWF0aW9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvUGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lci50cyIsImV4cG9ydCBjb25zdCBHRVRfUFJPU1BFQ1RfUkVRVUVTVCA9ICdHRVRfUFJPU1BFQ1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPU1BFQ1RfRkFJTEVEID0gJ0dFVF9QUk9TUEVDVF9GQUlMRUQnO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST1NQRUNUX1NVQ0NFU1MgPSAnR0VUX1BST1NQRUNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9TUEVDVF9SRVFVRVNUID0gJ1VQREFURV9QUk9TUEVDVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9TUEVDVF9GQUlMRUQgPSAnVVBEQVRFX1BST1NQRUNUX0ZBSUxFRCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPU1BFQ1RfU1VDQ0VTUyA9ICdVUERBVEVfUFJPU1BFQ1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUFJPU1BFQ1QgPSAnQUREX1BST1NQRUNUJztcclxuLy9leHBvcnQgY29uc3QgR0VUX1NUQVRFUyA9J0dFVF9TVEFURVMnO1xyXG5leHBvcnQgY29uc3QgR0VUX1NUQVRFU19SRVFVRVNUID0nR0VUX1NUQVRFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9TVEFURVNfRkFJTEVEID0nR0VUX1NUQVRFU19GQUlMRUQnO1xyXG5leHBvcnQgY29uc3QgR0VUX1NUQVRFU19TVUNDRVNTID0nR0VUX1NUQVRFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE9OX0lOUFVUX0NIQU5HRSA9J09OX0lOUFVUX0NIQU5HRSc7XHJcbmV4cG9ydCBjb25zdCBBRERfVkFMSURBVElPTl9FUlJPUl9NRVNTQUdFID0gJ0FERF9FUlJPUl9NRVNTQUdFJztcclxuZXhwb3J0IGNvbnN0IExPQURFUl9CRUdJTiA9J0xPQURFUl9TVEFSVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FERVJfQ09NUExFVEUgPSdMT0FERVJfRU5EJztcclxuZXhwb3J0IGNvbnN0IFNFVF9BR0VOVENPREUgPSdTRVRfQUdFTlRDT0RFJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uc3RhbnRzL0FjdGlvblR5cGVzLnRzIiwiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzJ1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvc3BlY3RTdGF0ZSB7XHJcbiAgICBQcm9zcGVjdERldGFpbDogUHJvc3BlY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvc3BlY3Qge1xyXG4gICAgZmlyc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU/OiBzdHJpbmc7XHJcbiAgICBzc24/OiBzdHJpbmc7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIG1pZGRsZUluaXRpYWw/OiBzdHJpbmc7XHJcbiAgICBkYXRlT2ZCaXJ0aD86IERhdGU7XHJcbiAgICBnZW5kZXI/OiBzdHJpbmc7XHJcbiAgICB1c0NpdGl6ZW4/OiBzdHJpbmc7XHJcbiAgICBtYXJpdGFsU3RhdHVzPzogc3RyaW5nO1xyXG4gICAgaG9tZUFkZHJlc3NMaW5lMT86IHN0cmluZztcclxuICAgIGhvbWVBZGRyZXNzTGluZTI/OiBzdHJpbmc7XHJcbiAgICBob21lQWRkcmVzc0xpbmUzPzogc3RyaW5nO1xyXG4gICAgaG9tZUFkZHJlc3NDaXR5Pzogc3RyaW5nO1xyXG4gICAgaG9tZUFkZHJlc3NTdGF0ZT86IHN0cmluZztcclxuICAgIGhvbWVBZGRyZXNzWmlwQ29kZT86IHN0cmluZztcclxuICAgIG1haWxpbmdBZGRyZXNzTGluZTE/OiBzdHJpbmc7XHJcbiAgICBtYWlsaW5nQWRkcmVzc0xpbmUyPzogc3RyaW5nO1xyXG4gICAgbWFpbGluZ0FkZHJlc3NMaW5lMz86IHN0cmluZztcclxuICAgIG1haWxpbmdBZGRyZXNzQ2l0eT86IHN0cmluZztcclxuICAgIG1haWxpbmdBZGRyZXNzU3RhdGU/OiBzdHJpbmc7XHJcbiAgICBtYWlsaW5nQWRkcmVzc1ppcENvZGU/OiBzdHJpbmc7XHJcbiAgICBob21lUGhvbmU/OiBzdHJpbmc7XHJcbiAgICB3b3JrUGhvbmU/OiBzdHJpbmc7XHJcbiAgICBvdGhlclBob25lPzogc3RyaW5nO1xyXG4gICAgcmVmZXJyYWw/OiBib29sZWFuO1xyXG4gICAgZW1haWxBZGRyZXNzPzogc3RyaW5nO1xyXG4gICAgcHJldmlvdXNGdW5kcz86IHN0cmluZztcclxuICAgIEZJTlJBPzogc3RyaW5nO1xyXG4gICAgaW52ZXN0bWVudE9iamVjdGl2ZT86IHN0cmluZztcclxuICAgIHJpc2tQcm9maWxlPzogc3RyaW5nO1xyXG4gICAgYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2U/OiBzdHJpbmc7XHJcbiAgICBuZXRXb3J0aFJhbmdlPzogc3RyaW5nO1xyXG4gICAgbGlmZUluc3VyYW5jZVJhbmdlPzogc3RyaW5nO1xyXG4gICAgdGF4QnJhY2tldD86IHN0cmluZztcclxuICAgIGRlcGVuZGVudHNObz86IHN0cmluZztcclxuICAgIGFnZXM/OiBzdHJpbmc7XHJcbiAgICBjdXJyZW50RW1wbG95ZXI/OiBzdHJpbmc7XHJcbiAgICBlbXBsb3ltZW50U3RhdHVzPzogc3RyaW5nO1xyXG4gICAgb2NjdXBhdGlvbj86IHN0cmluZztcclxuICAgIGVtcGxveWVyQWRkcmVzcz86IHN0cmluZztcclxuICAgIGVtcGxveWVyQ2l0eT86IHN0cmluZztcclxuICAgIGVtcGxveWVyU3RhdGU/OiBzdHJpbmc7XHJcbiAgICBlbXBsb3llclppcENvZGU/OiBzdHJpbmc7XHJcbiAgICBlbXBsb3llclNhbGFyeT86IHN0cmluZztcclxuICAgIGhpcmVEYXRlPzogRGF0ZTtcclxuICAgIGV4cGVjdGVkQW5udWl0eURhdGU/OiBEYXRlO1xyXG4gICAgaW5jb21lQWNjb3VudFNhbGFyeT86IHN0cmluZztcclxuICAgIHNvY2lhbFNlY3VyaXR5Pzogc3RyaW5nO1xyXG4gICAgcGVuc2lvbkJlbmVmaXRzPzogc3RyaW5nO1xyXG4gICAgaW52ZXN0bWVudEluY29tZT86IHN0cmluZztcclxuICAgIHJtZD86IHN0cmluZztcclxuICAgIG90aGVyPzogc3RyaW5nO1xyXG4gICAgZXhwZW5zZXNBbW91bnQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcclxuICAgIENvZGU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgRmV0Y2hQcm9zcGVjdFJlcXVlc3QgeyB0eXBlOiAnR0VUX1BST1NQRUNUX1JFUVVFU1QnLCBpZDogc3RyaW5nIH1cclxuaW50ZXJmYWNlIEZldGNoUHJvc3BlY3RTdWNjZXNzIHsgdHlwZTogJ0dFVF9QUk9TUEVDVCcsIHByb3NwZWN0OmFueSB9XHJcbmludGVyZmFjZSBGZXRjaFByb3NwZWN0RmFpbGVkIHsgdHlwZTogJ0dFVF9QUk9TUEVDVF9GQUlMRUQnIH1cclxuaW50ZXJmYWNlIFVwZGF0ZVByb3NwZWN0UmVxdWVzdCB7IHR5cGU6ICdVUERBVEVfUFJPU1BFQ1RfUkVRVUVTVCcgfVxyXG5pbnRlcmZhY2UgT25JbnB1dENoYW5nZSB7IHR5cGU6ICdPTl9JTlBVVF9DSEFOR0UnICwgbmFtZTpzdHJpbmcsIHZhbHVlOnN0cmluZ31cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBGZXRjaFByb3NwZWN0U3VjY2VzcyB8IEZldGNoUHJvc3BlY3RGYWlsZWQgfCBPbklucHV0Q2hhbmdlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgZmV0Y2hQcm9zcGVjdFJlcXVlc3Q6IChpZDogc3RyaW5nKSA9PiA8RmV0Y2hQcm9zcGVjdFJlcXVlc3Q+eyB0eXBlOiAnR0VUX1BST1NQRUNUX1JFUVVFU1QnLCBpZCB9LFxyXG4gICAgZmV0Y2hQcm9zcGVjdFN1Y2Nlc3M6IChwcm9zcGVjdDphbnkpID0+IDxGZXRjaFByb3NwZWN0U3VjY2Vzcz57IHR5cGU6ICdHRVRfUFJPU1BFQ1QnLCBwcm9zcGVjdCB9LFxyXG4gICAgZmV0Y2hQcm9zcGVjdEZhaWxlZDogKCkgPT4gPEZldGNoUHJvc3BlY3RGYWlsZWQ+eyB0eXBlOiAnR0VUX1BST1NQRUNUX0ZBSUxFRCcgfSxcclxuICAgIG9uSW5wdXRDaGFuZ2U6IChuYW1lLCB2YWx1ZSkgPT4gPE9uSW5wdXRDaGFuZ2U+eyB0eXBlOiAnT05fSU5QVVRfQ0hBTkdFJywgbmFtZSwgdmFsdWUgfSxcclxuICAgIHVwZGF0ZVByb3NwZWN0UmVxdWVzdDogKCkgPT4gPFVwZGF0ZVByb3NwZWN0UmVxdWVzdD57IHR5cGU6ICdVUERBVEVfUFJPU1BFQ1RfUkVRVUVTVCcgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFByb3NwZWN0U3RhdGU+ID0gKHN0YXRlOiBQcm9zcGVjdFN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIk9OX0lOUFVUX0NIQU5HRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgW2FjdGlvbi5uYW1lXTogYWN0aW9uLnZhbHVlIH0pO1xyXG4gICAgICAgIGNhc2VcIkdFVF9QUk9TUEVDVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLnByb3NwZWN0KTtcclxuICAgICAgICBjYXNlIFwiR0VUX1BST1NQRUNUX0ZBSUxFRFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgbnVsbCk7XHJcbiAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IE9iamVjdC5hc3NpZ24oe30sIG51bGwpXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZ2VudENvZGVTdGF0ZSB7XHJcbiAgICBhZ2VudENvZGU6IHN0cmluZztcclxufTtcclxuXHJcbmludGVyZmFjZSBBZ2VudENvZGUgeyB0eXBlOiAnU0VUX0FHRU5UQ09ERScsIGFnZW50Q29kZSB9XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnNBZ2VudENvZGUgPSB7XHJcbiAgICBzZXRBZ2VudENvZGU6IChhZ2VudENvZGU6IHN0cmluZykgPT4gPEFnZW50Q29kZT57IHR5cGU6ICdTRVRfQUdFTlRDT0RFJywgYWdlbnRDb2RlIH1cclxuXHJcbn07XHJcblxyXG50eXBlIEtub3duQWN0aW9uQWdlbnRDb2RlID0gQWdlbnRDb2RlXHJcblxyXG5leHBvcnQgY29uc3QgYWdlbnRDb2RlcmVkdWNlcjogUmVkdWNlcjxBZ2VudENvZGVTdGF0ZT4gPSAoc3RhdGU6IEFnZW50Q29kZVN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uQWdlbnRDb2RlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIlNFVF9BR0VOVENPREVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5hZ2VudENvZGU7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID09PSB1bmRlZmluZWQgPyBcIlwiIDogc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9Qcm9zcGVjdC50cyIsImltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb25UeXBlcydcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlc1N0YXRlIHtcclxuICAgIHN0YXRlczogU3RhdGVbXTtcclxufVxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgQ29kZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRmV0Y2hTdGF0ZVJlcXVlc3QgeyB0eXBlOiAnR0VUX1NUQVRFU19SRVFVRVNUJyB9XHJcbmludGVyZmFjZSBGZXRjaFN0YXRlU3VjY2VzcyB7IHR5cGU6ICdHRVRfU1RBVEVTX1NVQ0NFU1MnLCBzdGF0ZXMgfVxyXG5pbnRlcmZhY2UgRmV0Y2hTdGF0ZXNGYWlsZWQgeyB0eXBlOiAnR0VUX1NUQVRFU19GQUlMRUQnIH1cclxudHlwZSBLbm93bkFjdGlvbiA9IEZldGNoU3RhdGVTdWNjZXNzIHwgRmV0Y2hTdGF0ZVJlcXVlc3QgfCBGZXRjaFN0YXRlc0ZhaWxlZDtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIGZldGNoU3RhdGVSZXF1ZXN0OiAoKSA9PiA8RmV0Y2hTdGF0ZVJlcXVlc3Q+eyB0eXBlOiAnR0VUX1NUQVRFU19SRVFVRVNUJyB9LFxyXG4gICAgZmV0Y2hTdGF0ZVN1Y2Nlc3M6IChzdGF0ZXMpID0+IDxGZXRjaFN0YXRlU3VjY2Vzcz57IHR5cGU6ICdHRVRfU1RBVEVTX1NVQ0NFU1MnLCBzdGF0ZXMgfSxcclxuICAgIGZldGNoU3RhdGVzRmFpbGVkOiAoKSA9PiA8RmV0Y2hTdGF0ZXNGYWlsZWQ+eyB0eXBlOiAnR0VUX1NUQVRFU19GQUlMRUQnIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxTdGF0ZXNTdGF0ZT4gPSAoc3RhdGU6IFN0YXRlc1N0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUX1NUQVRFU19TVUNDRVNTJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oW10sIHN0YXRlLCBhY3Rpb24uc3RhdGVzKTsgICAgICBcclxuICAgICAgICBjYXNlICdHRVRfU1RBVEVTX1JFUVVFU1QnOlxyXG4gICAgICAgIGNhc2UgJ0dFVF9TVEFURVNfRkFJTEVEJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oW10sIG51bGwpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgT2JqZWN0LmFzc2lnbihbXSwgbnVsbCkgXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9TdGF0ZXMudHMiLCJpbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uVHlwZXMnXHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuZXhwb3J0IGludGVyZmFjZSBMb2FkZXJTdGF0ZSB7XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBMb2FkZXJCZWdpbiB7IHR5cGU6ICdMT0FERVJfQkVHSU4nIH1cclxuaW50ZXJmYWNlIExvYWRlckVuZCB7IHR5cGU6ICdMT0FERVJfRU5EJyB9XHJcblxyXG5cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBMb2FkZXJCZWdpbiB8IExvYWRlckVuZDtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIGxvYWRlckJlZ2luOiAoKSA9PiA8TG9hZGVyQmVnaW4+eyB0eXBlOiAnTE9BREVSX0JFR0lOJyB9LFxyXG4gICAgbG9hZGVyRW5kOiAoKSA9PiA8TG9hZGVyRW5kPnsgdHlwZTogJ0xPQURFUl9FTkQnIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxMb2FkZXJTdGF0ZT4gPSAoc3RhdGU6IExvYWRlclN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnTE9BREVSX0JFR0lOJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgaXNMb2FkaW5nOiB0cnVlIH07XHJcbiAgICAgICAgY2FzZSAnTE9BREVSX0VORCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGlzTG9hZGluZzogZmFsc2UgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IHsgaXNMb2FkaW5nOiBmYWxzZSB9O1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvTG9hZGVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTE1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IElucHV0TWFzayBmcm9tICdyZWFjdC1pbnB1dC1tYXNrJztcclxuY2xhc3MgVmFsaWNJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnk+IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0XHJcblx0XHR0aGlzLm9uQ2hhbmdlRW1haWwgPSB0aGlzLm9uQ2hhbmdlRW1haWwuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25DaGFuZ2VQaG9uZU51bWJlciA9IHRoaXMub25DaGFuZ2VQaG9uZU51bWJlci5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVNTTiA9IHRoaXMub25DaGFuZ2VTU04uYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25DaGFuZ2VUZXh0ID0gdGhpcy5vbkNoYW5nZVRleHQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25DaGFuZ2VOdW1iZXIgPSB0aGlzLm9uQ2hhbmdlTnVtYmVyLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlVGV4dChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdG9uQ2hhbmdlTnVtYmVyKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlRW1haWwoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0bGV0IGlucHV0RmllbGQgPSBlLnRhcmdldDtcclxuXHRcdGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoaW5wdXRGaWVsZCk7XHJcblx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cdFx0aWYgKGlzVmFsaWQgPT09IGZhbHNlKSB7XHJcblx0XHRcdC8vdGhpcy5hZGRFcnJvcih0aGlzLnN0YXRlLGlucHV0RmllbGQubmFtZSwgaW5wdXRGaWVsZC5uYW1lICsgXCIgaXMgcmVxdWlyZWRcIik7XHJcblx0XHRcdGlucHV0RmllbGQuaXNWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArIFwiIGlzIHJlcXVpcmVkXCI7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aW5wdXRGaWVsZC5pc1ZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHRoaXMudmFsaWRhdGVFbWFpbEZvcm1hdChpbnB1dEZpZWxkKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArICcgaXMgaW52YWxpZCc7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdFx0XHQvLyQoaW5wdXRGaWVsZCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTsgICAgICAgXHJcblx0XHRcdFx0Ly90aGlzLmFkZEVycm9yKHRoaXMucHJvcHMuc3RhdGUsaW5wdXRGaWVsZC5uYW1lLCBcIlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHRcclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlUGhvbmVOdW1iZXIoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0bGV0IGlucHV0RmllbGQgPSBlLnRhcmdldDtcclxuXHRcdGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoaW5wdXRGaWVsZCk7XHJcblxyXG5cdFx0aWYgKGlzVmFsaWQgPT09IGZhbHNlKSB7XHJcblx0XHRcdC8vdGhpcy5hZGRFcnJvcih0aGlzLnN0YXRlLGlucHV0RmllbGQubmFtZSwgaW5wdXRGaWVsZC5uYW1lICsgXCIgaXMgcmVxdWlyZWRcIik7XHJcblx0XHRcdGlucHV0RmllbGQuaXNWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArIFwiIGlzIHJlcXVpcmVkXCI7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aW5wdXRGaWVsZC5pc1ZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHRoaXMudmFsaWRhdGVQaG9uZU51bWJlckZvcm1hdChpbnB1dEZpZWxkKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHQvLyQoaW5wdXRGaWVsZCkucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTsgICAgICAgXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gaW5wdXRGaWVsZC5uYW1lICsgJyBpcyBpbnZhbGlkJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPSB0cnVlO1xyXG5cdFx0XHRcdGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcclxuXHR9XHJcblx0b25DaGFuZ2VTU04oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0bGV0IGlucHV0RmllbGQgPSBlLnRhcmdldDtcclxuXHRcdGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoaW5wdXRGaWVsZCk7XHJcblxyXG5cdFx0aWYgKGlzVmFsaWQgPT09IGZhbHNlKSB7XHJcblx0XHRcdGlucHV0RmllbGQuaXNWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArIFwiIGlzIHJlcXVpcmVkXCI7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aW5wdXRGaWVsZC5pc1ZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHRoaXMudmFsaWRhdGVTU05Gb3JtYXQoaW5wdXRGaWVsZCkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID0gZmFsc2U7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSBpbnB1dEZpZWxkLm5hbWUgKyAnIGlzIGludmFsaWQnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xyXG5cdH1cclxuXHR2YWxpZGF0ZUVtYWlsRm9ybWF0KGlucHV0KSB7XHJcblx0XHRsZXQgaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcblx0XHRsZXQgZm9ybWF0ID0gL15cXHcrKFsuLV0/XFx3KykqQFxcdysoWy4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvO1xyXG5cdFx0aWYgKGlucHV0LnZhbHVlICE9PSBcIlwiICYmIGZvcm1hdC50ZXN0KGlucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0aXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGlzRm9ybWF0VmFsaWQ7XHJcblx0fVxyXG5cdHZhbGlkYXRlU1NORm9ybWF0KGlucHV0KSB7XHJcblx0XHRsZXQgaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcblx0XHRsZXQgZm9ybWF0ID0gL15bMC05QS1aXXszfS1bMC05QS1aXXsyfS1bMC05QS1aXXs0fSQvO1xyXG5cdFx0aWYgKGlucHV0LnZhbHVlICE9PSBcIlwiICYmIGZvcm1hdC50ZXN0KGlucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0aXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGlzRm9ybWF0VmFsaWQ7XHJcblx0fVxyXG5cdHZhbGlkYXRlUGhvbmVOdW1iZXJGb3JtYXQoaW5wdXQpIHtcclxuXHRcdGxldCBpc0Zvcm1hdFZhbGlkID0gdHJ1ZTtcclxuXHRcdGxldCBmb3JtYXQgPSAvKD86XFwoXFxkezN9XFwpfFxcZHszfSlbLSBdP1xcZHszfVstIF0/XFxkezR9LztcclxuXHRcdGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIiAgJiYgZm9ybWF0LnRlc3QoaW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xyXG5cdFx0XHRpc0Zvcm1hdFZhbGlkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXNGb3JtYXRWYWxpZDtcclxuXHR9XHJcblx0aXNWYWxpZChpbnB1dCkge1xyXG5cdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhpbnB1dClcclxuXHRcdGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJykgIT09IG51bGwgJiYgaW5wdXQudmFsdWUgPT09IFwiXCIpIHtcclxuXHRcdFx0Ly8kKGlucHV0KS5wYXJlbnQoKS5hZGRDbGFzcygnaGFzLWVycm9yIGhhcy1mZWVkYmFjaycpOyAgICAgICAgICAgXHJcblx0XHRcdGlzVmFsaWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHQvLyAkKGlucHV0KS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yIGhhcy1mZWVkYmFjaycpO1xyXG5cdFx0XHQvL2lucHV0Lm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHRcdFx0aXNWYWxpZCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXNWYWxpZDtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IGlucHV0VHlwZSA9IHRoaXMucHJvcHMudHlwZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMucHJvcHMudHlwZSAhPT0gbnVsbCA/IHRoaXMucHJvcHMudHlwZSA6IFwidGV4dFwiO1xyXG5cdFx0bGV0IGlucHV0Q29udHJvbDtcclxuXHRcdGNvbnN0IHByb3BzID0geyAuLi50aGlzLnByb3BzIH07XHJcblxyXG5cdFx0c3dpdGNoIChpbnB1dFR5cGUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdGNhc2UgXCJwaG9uZVwiOlxyXG5cdFx0XHRcdGlucHV0Q29udHJvbCA9IDxJbnB1dE1hc2sgIHsuLi5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VQaG9uZU51bWJlcn0gLz47XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJudW1iZXJcIjpcclxuXHRcdFx0XHRpbnB1dENvbnRyb2wgPSA8aW5wdXQgey4uLnByb3BzfSB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VOdW1iZXJ9IC8+O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiZW1haWxcIjpcclxuXHRcdFx0XHRpbnB1dENvbnRyb2wgPSA8aW5wdXQgey4uLnByb3BzfSB0eXBlPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUVtYWlsfSAvPjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcInNzblwiOlxyXG5cdFx0XHRcdGlucHV0Q29udHJvbCA9IDxJbnB1dE1hc2sgIHsuLi5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTU059IC8+O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGlucHV0Q29udHJvbCA9IDxpbnB1dCB7Li4ucHJvcHN9IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VUZXh0fSAvPjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHJldHVybiBpbnB1dENvbnRyb2w7XHJcblx0fVxyXG5cclxuXHJcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcclxuXHRcdHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHRcdG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cdFx0bmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhbGljSW5wdXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9WYWxpY0lucHV0Q29tcG9uZW50L1ZhbGljSW5wdXRDb21wb25lbnQudHN4IiwiZXhwb3J0IGNvbnN0IHByb3NwZWN0SWQgPSAxOTYzO1xyXG5leHBvcnQgY29uc3QgYWdpbGVuZXR1cmwgPSdodHRwczovL2Q0LnZhbGljLmNvbS9hZ2lsZW5ldDUvJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnN0YW50cy9pbmRleC50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyByZXBsYWNlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlTWVtb3J5SGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vcm91dGVzJztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvLyBQcmVwYXJlIFJlZHV4IHN0b3JlIHdpdGggaW4tbWVtb3J5IGhpc3RvcnksIGFuZCBkaXNwYXRjaCBhIG5hdmlnYXRpb24gZXZlbnRcclxuICAgICAgICAvLyBjb3JyZXNwb25kaW5nIHRvIHRoZSBpbmNvbWluZyBVUkxcclxuICAgICAgICBjb25zdCBiYXNlbmFtZSA9IHBhcmFtcy5iYXNlVXJsLnN1YnN0cmluZygwLCBwYXJhbXMuYmFzZVVybC5sZW5ndGggLSAxKTsgLy8gUmVtb3ZlIHRyYWlsaW5nIHNsYXNoXHJcbiAgICAgICAgY29uc3QgdXJsQWZ0ZXJCYXNlbmFtZSA9IHBhcmFtcy51cmwuc3Vic3RyaW5nKGJhc2VuYW1lLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShjcmVhdGVNZW1vcnlIaXN0b3J5KCkpO1xyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHJlcGxhY2UodXJsQWZ0ZXJCYXNlbmFtZSkpO1xyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIGFuIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvbiBhbmQgcGVyZm9ybSBhbiBpbml0YWwgcmVuZGVyIHRoYXQgd2lsbFxyXG4gICAgICAgIC8vIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luXHJcbiAgICAgICAgY29uc3Qgcm91dGVyQ29udGV4dDogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9eyBzdG9yZSB9PlxyXG4gICAgICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBiYXNlbmFtZT17IGJhc2VuYW1lIH0gY29udGV4dD17IHJvdXRlckNvbnRleHQgfSBsb2NhdGlvbj17IHBhcmFtcy5sb2NhdGlvbi5wYXRoIH0gY2hpbGRyZW49eyByb3V0ZXMgfSAvPlxyXG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVuZGVyVG9TdHJpbmcoYXBwKTtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICAgICAgaWYgKHJvdXRlckNvbnRleHQudXJsKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyByZWRpcmVjdFVybDogcm91dGVyQ29udGV4dC51cmwgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gT25jZSBhbnkgYXN5bmMgdGFza3MgYXJlIGRvbmUsIHdlIGNhbiBwZXJmb3JtIHRoZSBmaW5hbCByZW5kZXJcclxuICAgICAgICAvLyBXZSBhbHNvIHNlbmQgdGhlIHJlZHV4IHN0b3JlIHN0YXRlLCBzbyB0aGUgY2xpZW50IGNhbiBjb250aW51ZSBleGVjdXRpb24gd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZlxyXG4gICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJUb1N0cmluZyhhcHApLFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsczogeyBpbml0aWFsUmVkdXhTdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uXHJcbiAgICB9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib290LXNlcnZlci50c3giLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMzkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTkyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE4MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMzYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG4vL2ltcG9ydCB7IExheW91dCB9IGZyb20gJy4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG4vL2ltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcclxuLy9pbXBvcnQgRmV0Y2hEYXRhIGZyb20gJy4vY29tcG9uZW50cy9GZXRjaERhdGEnO1xyXG4vL2ltcG9ydCBDb3VudGVyIGZyb20gJy4vY29tcG9uZW50cy9Db3VudGVyJztcclxuaW1wb3J0IFByb3NwZWN0RWRpdENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvUHJvc3BlY3RFZGl0Q29udGFpbmVyJztcclxuICAgIFxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gKDxkaXY+XHJcbiAgICAgICAgICAgIFxyXG48UHJvc3BlY3RFZGl0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPC9kaXY+KTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMudHN4IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTGluaywgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBUYWJDb250YWluZXIsIFRhYiB9IGZyb20gJy4uLy4uL3NoYXJlZC9UYWJDb250YWluZXJDb21wb25lbnQvVGFiQ29udGFpbmVyQ29tcG9uZW50JztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFZhbGljVmFsaWRhdGlvbk1lc3NhZ2UgZnJvbSAnLi4vLi4vc2hhcmVkL1ZhbGljVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQvVmFsaWNWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vc2hhcmVkL0xvYWRlckNvbXBvbmVudC9Mb2FkZXJDb21wb25lbnQnO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUZvcm1GaWVsZCB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlsaXR5L1V0aWxpdHknO1xyXG5pbXBvcnQgeyBQZXJzb25hbEluZm9ybWF0aW9uQ29udGFpbmVyIH0gZnJvbSAnLi9QZXJzb25hbEluZm9ybWF0aW9uQ29udGFpbmVyJztcclxuaW1wb3J0IHsgSW52ZXN0b3JQcm9maWxlQ29udGFpbmVyIH0gZnJvbSAnLi9JbnZlc3RvclByb2ZpbGVDb250YWluZXInO1xyXG5pbXBvcnQgeyBJbmNvbWVTb3VyY2VDb250YWluZXIgfSBmcm9tICcuL0luY29tZVNvdXJjZUNvbnRhaW5lcic7XHJcbmltcG9ydCB7IGFnaWxlbmV0dXJsIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQWRkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9WYWxpZGF0aW9uTWVzc2FnZUFjdGlvbic7XHJcbi8vaW1wb3J0IHtQcm9zcGVjdEFQSX0gZnJvbSAnLi4vYXBpL3Byb3NwZWN0QXBpJztcclxuLy9pbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tICcuLi9hY3Rpb25zL2FjdGlvblR5cGVzJztcclxuaW1wb3J0ICogYXMgUHJvc3BlY3RBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9Qcm9zcGVjdEFjdGlvbic7XHJcbmltcG9ydCAnLi9Qcm9zcGVjdEVkaXRDb250YWluZXIuY3NzJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuaW1wb3J0ICogYXMgUHJvc3BlY3RTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9Qcm9zcGVjdCdcclxuaW1wb3J0ICogYXMgU3RhdGVTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9TdGF0ZXMnO1xyXG5pbXBvcnQgKiBhcyBMb2FkZXJTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9Mb2FkZXInO1xyXG5pbXBvcnQgKiBhcyBWYWxpZGF0aW9uTWVzc2FnZVN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL3ZhbGlkYXRpb25NZXNzYWdlJztcclxuXHJcbnR5cGUgUHJvc3BlY3RFZGl0UHJvcHMgPSBQcm9zcGVjdFN0b3JlLlByb3NwZWN0U3RhdGVcclxuICAgICYgdHlwZW9mIFByb3NwZWN0U3RvcmUuYWN0aW9uQ3JlYXRvcnNcclxuICAgICYgdHlwZW9mIFByb3NwZWN0U3RvcmUuYWN0aW9uQ3JlYXRvcnNBZ2VudENvZGVcclxuICAgICYgdHlwZW9mIFN0YXRlU3RvcmUuYWN0aW9uQ3JlYXRvcnNcclxuICAgICYgdHlwZW9mIExvYWRlclN0b3JlLmFjdGlvbkNyZWF0b3JzXHJcbiAgICAmIFJvdXRlQ29tcG9uZW50UHJvcHM8e30+XHJcbiAgICAmIHByb3NwZWN0UHJvcHNcclxuICAgIDtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9zcGVjdEVkaXRDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuY29tcG9uZW50RGlkTW91bnQoKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBpbmZvKSB7XHJcbiAgICAgICAgLy9jb25zdCB7ZGlzcGF0Y2h9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAvL2Rpc3BhdGNoKClcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdjb21wb25lbnRjYXRoJyk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBmb3JtRXJyb3JzLCBpc0xvYWRpbmcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKGZvcm1FcnJvcnMgIT09IHVuZGVmaW5lZCAmJiBmb3JtRXJyb3JzICE9PSBudWxsICYmIGZvcm1FcnJvcnMubGVuZ3RoID4wKSB7XHJcbiAgICAgICAgICAgIGxldCBlcnJvcnMgPSBmb3JtRXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci5lcnJvck1lc3NhZ2UgIT09ICcnICYmIGVycm9yLmZpZWxkTmFtZSA9PT0gJycpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVycm9ycyk7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy90aHJvdyBuZXcgRXJyb3IoXCJmYWlsZWQgY29tcG9uZW50XCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxBcHBFcnJvciBlcnJvcj17ZXJyb3JzWzBdLmVycm9yTWVzc2FnZX0gLz4pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsoaXNMb2FkaW5nIGFzIGJvb2xlYW4pID09IHRydWUgPyA8TG9hZGVyIC8+IDogJyd9XHJcbiAgICAgICAgICAgICAgICA8VmFsaWNWYWxpZGF0aW9uTWVzc2FnZSBmb3JtRXJyb3JzPXtmb3JtRXJyb3JzfSBjbGFzc05hbWU9XCJmb3JtLWVycm9yc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIG5hbWU9XCJQZXJzb25hbCBJbmZvcm1hdGlvblwiIGlzRGVmYXVsdFRhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25hbEluZm9ybWF0aW9uQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIG5hbWU9XCJJbnZlc3RvciBQcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW52ZXN0b3JQcm9maWxlQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIG5hbWU9XCJJbmNvbWUgU291cmNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5jb21lU291cmNlQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zYXZlUHJvc3BlY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDs8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2FuY2VsUHJvc3BlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fSA+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHNhdmVQcm9zcGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBjb21wb25lbnREaWRNb3VudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBmb3JtRXJyb3JzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgICAgICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcclxuICAgIH1cclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+ICh7XHJcbiAgICBmb3JtRXJyb3JzOiBzdGF0ZS5lcnJvcnMsXHJcbiAgICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZ1xyXG59KVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgICBzYXZlUHJvc3BlY3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JykgYXMgYW55O1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dHMubGVuZ3RoOyArK2luZGV4KSB7XHJcbiAgICAgICAgICAgIGxldCBpbnB1dEZpZWxkID0gaW5wdXRzW2luZGV4XTtcclxuICAgICAgICAgICAgdmFsaWRhdGVGb3JtRmllbGQoaW5wdXRGaWVsZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5wdXRGaWVsZC5pc1ZhbGlkID09PSBmYWxzZSB8fCBpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2Rpc3BhdGNoKEFkZEVycm9yTWVzc2FnZShpbnB1dEZpZWxkLm5hbWUsIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChWYWxpZGF0aW9uTWVzc2FnZVN0b3JlLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZShpbnB1dEZpZWxkLm5hbWUsIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICAkKGlucHV0RmllbGQpLnBhcmVudCgpLmFkZENsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL2Rpc3BhdGNoKEFkZEVycm9yTWVzc2FnZShpbnB1dEZpZWxkLm5hbWUsICcnKSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChWYWxpZGF0aW9uTWVzc2FnZVN0b3JlLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZShpbnB1dEZpZWxkLm5hbWUsICcnKSk7XHJcbiAgICAgICAgICAgICAgICAkKGlucHV0RmllbGQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKFByb3NwZWN0U3RvcmUuYWN0aW9uQ3JlYXRvcnMudXBkYXRlUHJvc3BlY3RSZXF1ZXN0KCkpO1xyXG4gICAgfSxcclxuICAgIGNhbmNlbFByb3NwZWN0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHdhbnQgdG8gY2FuY2VsPycpKSB7XHJcbiAgICAgICAgICAgIChkb2N1bWVudCBhcyBhbnkpLmxvY2F0aW9uID0gYWdpbGVuZXR1cmwgKyBcIkRhc2hib2FyZC9BZHZpc29yL0NsaWVudFByb3NwZWN0TGlzdGluZy5hc3B4P2FnZW50SWQ9MDM0OTlcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwYXRjaChMb2FkZXJTdG9yZS5hY3Rpb25DcmVhdG9ycy5sb2FkZXJCZWdpbigpKTtcclxuICAgICAgICBkaXNwYXRjaChQcm9zcGVjdFN0b3JlLmFjdGlvbkNyZWF0b3JzQWdlbnRDb2RlLnNldEFnZW50Q29kZSgod2luZG93IGFzIGFueSkuX19hZ2VudENvZGVfXykpO1xyXG4gICAgICAgIGRpc3BhdGNoKFN0YXRlU3RvcmUuYWN0aW9uQ3JlYXRvcnMuZmV0Y2hTdGF0ZVJlcXVlc3QoKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goUHJvc3BlY3RTdG9yZS5hY3Rpb25DcmVhdG9ycy5mZXRjaFByb3NwZWN0UmVxdWVzdCgod2luZG93IGFzIGFueSkuX19QUk9TUEVDVElEX18pKTsgICAgICAgIFxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmludGVyZmFjZSBwcm9zcGVjdFByb3BzIHtcclxuICAgIGNhbmNlbFByb3NwZWN0OiAoKSA9PiB2b2lkO1xyXG4gICAgc2F2ZVByb3NwZWN0OiAoKSA9PiB2b2lkO1xyXG4gICAgZm9ybUVycm9yczogYW55O1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQ6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgQXBwRXJyb3IgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgIFNvbWV0aGluZyB3ZW50IHdyb25nISEhIHtwcm9wcy5lcnJvcn1cclxuICAgIDwvZGl2Pik7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvc3BlY3RFZGl0Q29udGFpbmVyKSBhcyB0eXBlb2YgUHJvc3BlY3RFZGl0Q29udGFpbmVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9Qcm9zcGVjdEVkaXRDb250YWluZXIudHN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICcuL1RhYkNvbnRhaW5lci5jc3MnO1xyXG5jb25zdCBjbGVhclN0eWxlID0ge2NsZWFyOidib3RoJywgaGVpZ2h0OicyMHB4J307XHJcbmV4cG9ydCBjbGFzcyBUYWJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LGFueT4geyAgICAgICBcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMudGFiSGVhZGVyKCk7XHJcbiAgICAgICAgdmFyIGN1c3RvbVN0eWxlID0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgbWFpblN0eWxlID0ge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicGFkMjAgbWFpblN0eWxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0yIGN1c3RvbVN0eWxlXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cdFx0XHJcblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y2xlYXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHRcdFx0XHRcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGFiSGVhZGVyKCl7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhlYWRlckxpbmsgPSB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoY2hpbGQsaSkgPT4geyAgICAgICAgICAgIFxyXG5cdFx0XHRcdFx0XHRsZXQgaGVhZGVySWQgPSBjaGlsZC5wcm9wcy5uYW1lLnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gY291bnQgKyAxIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8VGFiSGVhZGVyIGtleT17aX0gaWQgPXtoZWFkZXJJZH0gaGVhZGVyTmFtZSA9IHtjaGlsZC5wcm9wcy5uYW1lfSAgaXNEZWZhdWx0ID0ge2NoaWxkLnByb3BzLmlzRGVmYXVsdFRhYn0gaW5kZXggPSB7Y291bnR9IC8+KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoPHNwYW4gY2xhc3NOYW1lPVwibm9iclwiPiB7aGVhZGVyTGlua30gPC9zcGFuPik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbmRlY2xhcmUgbmFtZXNwYWNlIEpTWCB7XHJcbiAgICBpbnRlcmZhY2UgSW50cmluc2ljRWxlbWVudHMge1xyXG4gICAgICAgIG5vYnI6IGFueVxyXG4gICAgfVxyXG59Ki9cclxuXHJcbmNsYXNzIFRhYkhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksYW55PntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9eyBpZDogdGhpcy5wcm9wcy5pZCArIFwiVGFiXCIsaW5kZXggOiB0aGlzLnByb3BzLmluZGV4LCBpc0RlZmF1bHQ6IHRoaXMucHJvcHMuaXNEZWZhdWx0LCBjdXJyZW50VGFiSW5kZXg6IDAgfTtcclxuICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZSA9IHRoaXMuY2hhbmdlQWN0aXZlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKDxsaSBjbGFzc05hbWUgPSBcInRhYkxpc3RJdGVtIGFjdGl2ZVRhYlwiIG5hbWUgPSBcImZvbGRlclRhYlwiIGlkID0ge3RoaXMuc3RhdGUuaWR9IG9uQ2xpY2sgPSB7dGhpcy5jaGFuZ2VBY3RpdmV9ID4gXHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyTmFtZX0gXHJcbiAgICAgICAgICAgICAgICA8L2xpPik7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VBY3RpdmUgPSAoKSA9PiB7ICAgICAgICBcclxuICAgICAgICB2YXIgeHl6ID0gJChcIltuYW1lPSdmb2xkZXJUYWInXVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHh5ei5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAkKHh5eltpXSkuYXR0cihcImNsYXNzXCIsIFwidGFiTGlzdEl0ZW0gcmVhY3QtdGFiSGVhZGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI1wiICsgdGhpcy5zdGF0ZS5pZCkuYXR0cihcImNsYXNzXCIsIFwidGFiTGlzdEl0ZW0gYWN0aXZlVGFiICByZWFjdC10YWJIZWFkZXJcIik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRUYWJJbmRleDogdGhpcy5wcm9wcy5pbmRleH0pO1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbnRlbnQodGhpcy5zdGF0ZS5pZCk7XHJcbiAgICB9XHJcbiAgICBzaG93Q29udGVudCh4KSB7XHRcdFxyXG4gICAgICAgIHZhciBjb25Cb3hlcyA9ICQoXCJbbmFtZT0nY29udGVudEJveCddXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uQm94ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJChjb25Cb3hlc1tpXSkuYXR0cihcImNsYXNzXCIsIFwibm9TaG93IHJlYWN0LXRhYkNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICQoY29uQm94ZXNbaV0pLmF0dHIoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHhQYXJ0cyA9IHguc3BsaXQoJ1RhYicpO1xyXG4gICAgICAgIGxldCB3aGljaEJveCA9IHhQYXJ0c1swXTtcclxuICAgICAgICAkKFwiI1wiICsgd2hpY2hCb3ggKyAnQm94JykuYXR0cihcImNsYXNzXCIsIFwic2hvdyByZWFjdC10YWJDb250ZW50XCIpO1xyXG4gICAgICAgICQoXCIjXCIgKyB3aGljaEJveCArICdCb3gnKS5hdHRyKFwic3R5bGVcIiwgXCJkaXNwbGF5OmJsb2NrXCIpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0RlZmF1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCl7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LGFueT4ge1xyXG4gICByZW5kZXIoKXtcclxuXHRcdGxldCBpZCA9IHRoaXMucHJvcHMubmFtZS5zcGxpdCgnICcpLmpvaW4oJycpO1xyXG4gICAgICAgIHJldHVybiAoPGRpdiBpZCA9IHtpZCArIFwiQm94XCJ9IG5hbWUgPSBcImNvbnRlbnRCb3hcIiBjbGFzc05hbWUgPSBcIm5vU2hvdyByZWFjdC10YWJDb250ZW50XCIgPiBcclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e2NsZWFyU3R5bGV9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufSBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvVGFiQ29udGFpbmVyQ29tcG9uZW50L1RhYkNvbnRhaW5lckNvbXBvbmVudC50c3giLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYXJlZC9UYWJDb250YWluZXJDb21wb25lbnQvVGFiQ29udGFpbmVyLmNzc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuY2xhc3MgVmFsaWNWYWxpZGF0aW9uTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksYW55PnsgICBcclxuICAgIHJlbmRlcigpeyAgICAgIFxyXG4gICAgICAgIGNvbnN0IHtmb3JtRXJyb3JzfSAgID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPSdmb3JtLWVycm9ycyc+XHJcbiAgICAgICAgICAgIHtmb3JtRXJyb3JzICE9PSB1bmRlZmluZWQgJiYgZm9ybUVycm9ycy5sZW5ndGggPjAgPyBmb3JtRXJyb3JzLm1hcCgoZmllbGQsIGkpID0+IHtcclxuICAgICAgaWYoZmllbGQuZXJyb3JNZXNzYWdlICE9PSBcIlwiKXtcclxuICAgICAgICByZXR1cm4gKCAgICAgICAgICBcclxuXHRcdCAgPHAgIGtleT17aX0+PGxhYmVsIGtleT17aX0gY2xhc3NOYW1lPVwidG9vbHRpcC10ZXh0IGZvcm0tZXJyb3JcIj57IGZpZWxkLmVycm9yTWVzc2FnZX0gPC9sYWJlbD48L3A+XHJcbiAgICAgICAgKSAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTonJ31cclxuICA8L2Rpdj4pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIFByb3BUeXBlcyA9IHtcclxuICAgICAgICBmb3JtRXJyb3JzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmaWVsZE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxuICAgICAgICB9KS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFsaWNWYWxpZGF0aW9uTWVzc2FnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL1ZhbGljVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQvVmFsaWNWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudC50c3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vbG9hZGVyLmNzcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRyZW5kZXIoKXtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1N0eWxlXCI+IDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9kaXY+IDwvZGl2Pik7XHJcblx0fVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL0xvYWRlckNvbXBvbmVudC9Mb2FkZXJDb21wb25lbnQudHN4IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFyZWQvTG9hZGVyQ29tcG9uZW50L2xvYWRlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWYWxpY0lucHV0IGZyb20gJy4uLy4uL3NoYXJlZC9WYWxpY0lucHV0Q29tcG9uZW50L1ZhbGljSW5wdXRDb21wb25lbnQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge2Vycm9yQ2xhc3N9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlsaXR5L1V0aWxpdHknO1xyXG5cclxuLypcclxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGVze1xyXG5Db2RlOnN0cmluZztcclxufSovXHJcblxyXG5jbGFzcyBQZXJzb25hbEluZm9ybWF0aW9uIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVVzZXJJbnB1dCA9IHRoaXMuaGFuZGxlVXNlcklucHV0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy52YWxpY0lucHV0Q2hhbmdlID0gdGhpcy52YWxpY0lucHV0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICB2YWxpY0lucHV0Q2hhbmdlKGUpe1xyXG4gICAgICAgIGNvbnN0IHsgdmFsaWNJbnB1dENoYW5nZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB2YWxpY0lucHV0Q2hhbmdlKGUpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlVXNlcklucHV0KGUpIHtcclxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIG9uQ2hhbmdlKGUpO1xyXG4gICAgfSAgIFxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHsgc3RhdGVzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBzdGF0ZXNMaXN0RG93bjtcclxuICAgICAgICBpZiAoc3RhdGVzICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlc0xpc3REb3duID0gT2JqZWN0LmtleXMoc3RhdGVzKS5tYXAoKGtleSwgaW5kZXgpID0+IHsgcmV0dXJuIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e3N0YXRlc1trZXldLkNvZGV9ID57c3RhdGVzW2tleV0uQ29kZX08L29wdGlvbj4gfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy89IHN0YXRlcyAhPT0gdW5kZWZpbmVkID8gc3RhdGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHsgcmV0dXJuIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9IHtpdGVtLkNvZGV9PntpdGVtLkNvZGV9PC9vcHRpb24+fSk6ICcnO1x0XHRcdFx0XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwidGl0bGVcIiB2YWx1ZT17dGhpcy5wcm9wcy50aXRsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk1yLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5NcnMuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk1zLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Eci48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+UmV2Ljwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZvcm0tZ3JvdXAgY29sLXNtLTQgJHtlcnJvckNsYXNzKHRoaXMucHJvcHMuZXJyb3JzLCAnZmlyc3ROYW1lJyl9YH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtaWRkbGVJbml0aWFsXCI+TUk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibWlkZGxlSW5pdGlhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1JXCIgdmFsdWU9e3RoaXMucHJvcHMubWlkZGxlSW5pdGlhbH0gbWF4LWxlbmd0aD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bmb3JtLWdyb3VwIGNvbC1zbS01ICR7ZXJyb3JDbGFzcyh0aGlzLnByb3BzLmVycm9ycywgJ2xhc3ROYW1lJyl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZm9ybWFzbS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZm9ybS1ncm91cCBjb2wtc20tMyAke2Vycm9yQ2xhc3ModGhpcy5wcm9wcy5lcnJvcnMsICdzc24nKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzc25cIj5TU048L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwic3NuXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInNzblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFBQS1BQS1BQUFBXCIgbWFzaz1cIioqKlxcLSoqXFwtKioqKlwiIG1hc2tDaGFyPVwiX1wiIG9uQ2hhbmdlPXt0aGlzLnZhbGljSW5wdXRDaGFuZ2V9IHJlcXVpcmVkIHZhbHVlPXt0aGlzLnByb3BzLnNzbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgT25seSBjaGFuZ2UgU1NOIGlmIHlvdSBrbm93IHRoZSByZWFsIHZhbHVlLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkYXRlT2ZCaXJ0aFwiPkRhdGUgT2YgQmlydGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBkYXRhLWRhdGVCaXJ0aD0ndHJ1ZScgbmFtZT1cImRhdGVPZkJpcnRoXCIgdmFsdWU9e3RoaXMucHJvcHMuZGF0ZU9mQmlydGh9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnZW5kZXJcIj5HZW5kZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtaW5saW5lXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMVwiIG5hbWU9XCJnZW5kZXJcIiBjaGVja2VkPXt0aGlzLnByb3BzLmdlbmRlciA9PT0gXCIxXCJ9IC8+TWFsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtaW5saW5lXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMlwiIG5hbWU9XCJnZW5kZXJcIiBjaGVja2VkPXt0aGlzLnByb3BzLmdlbmRlciA9PT0gXCIyXCJ9IC8+RmVtYWxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzQ2l0aXplblwiPlVTIENpdGl6ZW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ1c0NpdGl6ZW5cIiB2YWx1ZT1cIjFcIiBjaGVja2VkPXt0aGlzLnByb3BzLnVzQ2l0aXplbiA9PT0gXCIxXCJ9IC8+WWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidXNDaXRpemVuXCIgdmFsdWU9XCIwXCIgY2hlY2tlZD17dGhpcy5wcm9wcy51c0NpdGl6ZW4gPT09IFwiMFwifSAvPk5vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYXJpdGFsU3RhdHVzXCI+TWFyaXRhbCBTdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtaW5saW5lXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJtYXJpdGFsU3RhdHVzXCIgdmFsdWU9XCIxXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5tYXJpdGFsU3RhdHVzID09PSBcIjFcIn0gLz5NYXJyaWVkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm1hcml0YWxTdGF0dXNcIiB2YWx1ZT1cIjBcIiBjaGVja2VkPXt0aGlzLnByb3BzLm1hcml0YWxTdGF0dXMgPT09IFwiMFwifSAvPk5vdCBNYXJyaWVkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm1hcml0YWxTdGF0dXNcIiB2YWx1ZT1cIjZcIiBjaGVja2VkPXt0aGlzLnByb3BzLm1hcml0YWxTdGF0dXMgIT09IFwiMVwiICYmIHRoaXMucHJvcHMubWFyaXRhbFN0YXR1cyAhPT0gXCIwXCJ9IC8+Q2l2aWwgVW5pb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhhbGYtcnVsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ib21lIEFkZHJlc3M6PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob21lQWRkcmVzc0xpbmUxXCI+QWRkcmVzcyBMaW5lIDE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJob21lQWRkcmVzc0xpbmUxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIExpbmUgMVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaG9tZUFkZHJlc3NMaW5lMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvbWVBZGRyZXNzTGluZTJcIj5BZGRyZXNzIExpbmUgMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImhvbWVBZGRyZXNzTGluZTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgTGluZSAyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5ob21lQWRkcmVzc0xpbmUyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG9tZUFkZHJlc3NMaW5lM1wiPkFkZHJlc3MgTGluZSAzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaG9tZUFkZHJlc3NMaW5lM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBMaW5lIDNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmhvbWVBZGRyZXNzTGluZTN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvbWVBZGRyZXNzQ2l0eVwiPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJob21lQWRkcmVzc0NpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNpdHlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmhvbWVBZGRyZXNzQ2l0eX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob21lQWRkcmVzc1N0YXRlXCI+U3RhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImhvbWVBZGRyZXNzU3RhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmhvbWVBZGRyZXNzU3RhdGV9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiID48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlc0xpc3REb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvbWVBZGRyZXNzWmlwQ29kZVwiPlppcCBDb2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaG9tZUFkZHJlc3NaaXBDb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJaaXBDb2RlXCIgbWF4LWxlbmd0aD1cIjVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmhvbWVBZGRyZXNzWmlwQ29kZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFpbGluZyBBZGRyZXNzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYWlsaW5nQWRkcmVzc0xpbmUxXCI+QWRkcmVzcyBMaW5lIDE8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJtYWlsaW5nQWRkcmVzc0xpbmUxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIExpbmUgMVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMubWFpbGluZ0FkZHJlc3NMaW5lMX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1haWxpbmdBZGRyZXNzTGluZTJcIj5BZGRyZXNzIExpbmUgMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm1haWxpbmdBZGRyZXNzTGluZTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgTGluZSAyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5tYWlsaW5nQWRkcmVzc0xpbmUyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFpbGluZ0FkZHJlc3NMaW5lM1wiPkFkZHJlc3MgTGluZSAzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibWFpbGluZ0FkZHJlc3NMaW5lM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBMaW5lIDNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLm1haWxpbmdBZGRyZXNzTGluZTN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1haWxpbmdBZGRyZXNzQ2l0eVwiPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJtYWlsaW5nQWRkcmVzc0NpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNpdHlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLm1haWxpbmdBZGRyZXNzQ2l0eX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYWlsaW5nQWRkcmVzc1N0YXRlXCI+U3RhdGU8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJtYWlsaW5nQWRkcmVzc1N0YXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5tYWlsaW5nQWRkcmVzc1N0YXRlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlc0xpc3REb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1haWxpbmdBZGRyZXNzWmlwQ29kZVwiPlppcCBDb2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibWFpbGluZ0FkZHJlc3NaaXBDb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJaaXBDb2RlXCIgbWF4LWxlbmd0aD1cIjVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLm1haWxpbmdBZGRyZXNzWmlwQ29kZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG9tZVBob25lXCI+SG9tZSBQaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWYWxpY0lucHV0IHR5cGU9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJob21lUGhvbmVcIiBtYXNrPVwiXFwoOTk5XFwpOTk5XFwtOTk5OVwiIG1hc2tDaGFyPVwiX1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy52YWxpY0lucHV0Q2hhbmdlfSB2YWx1ZT17dGhpcy5wcm9wcy5ob21lUGhvbmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid29ya1Bob25lXCI+V29yayBQaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWYWxpY0lucHV0IHR5cGU9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ3b3JrUGhvbmVcIiBtYXNrPVwiXFwoOTk5XFwpOTk5XFwtOTk5OVwiIG1hc2tDaGFyPVwiX1wiIG9uQ2hhbmdlPXt0aGlzLnZhbGljSW5wdXRDaGFuZ2V9IHZhbHVlPXt0aGlzLnByb3BzLndvcmtQaG9uZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3RoZXJQaG9uZVwiPk90aGVyIFBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZhbGljSW5wdXQgdHlwZT1cInBob25lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm90aGVyUGhvbmVcIiBtYXNrPVwiXFwoOTk5XFwpOTk5XFwtOTk5OVwiIG1hc2tDaGFyPVwiX1wiIG9uQ2hhbmdlPXt0aGlzLnZhbGljSW5wdXRDaGFuZ2V9IHZhbHVlPXt0aGlzLnByb3BzLm90aGVyUGhvbmV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmVcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlZmVycmFsXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSBjaGVja2VkPXt0aGlzLnByb3BzLnJlZmVycmFsfSAvPlJlZmVycmFsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxBZGRyZXNzXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWYWxpY0lucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbEFkZHJlc3NcIiBvbkNoYW5nZT17dGhpcy52YWxpY0lucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZW1haWxBZGRyZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5zdGF0aWMgcHJvcFR5cGVzID0ge1xyXG5cdFx0IG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgdmFsaWNJbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQZXJzb25hbEluZm9ybWF0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L1BlcnNvbmFsSW5mb3JtYXRpb25Db21wb25lbnQudHN4IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wYXJzZU1hc2sgPSByZXF1aXJlKCcuL3V0aWxzL3BhcnNlTWFzaycpO1xuXG52YXIgX3BhcnNlTWFzazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZU1hc2spO1xuXG52YXIgX2Vudmlyb25tZW50ID0gcmVxdWlyZSgnLi91dGlscy9lbnZpcm9ubWVudCcpO1xuXG52YXIgX3N0cmluZyA9IHJlcXVpcmUoJy4vdXRpbHMvc3RyaW5nJyk7XG5cbnZhciBfZGVmZXIgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmVyJyk7XG5cbnZhciBfZGVmZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gaHR0cHM6Ly9naXRodWIuY29tL3Nhbm5pYXNzaW4vcmVhY3QtaW5wdXQtbWFza1xuXG5cbnZhciBJbnB1dEVsZW1lbnQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoSW5wdXRFbGVtZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbnB1dEVsZW1lbnQocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXRFbGVtZW50KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChJbnB1dEVsZW1lbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihJbnB1dEVsZW1lbnQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfaW5pdGlhbGlzZVByb3BzLmNhbGwoX3RoaXMpO1xuXG4gICAgdmFyIG1hc2sgPSBwcm9wcy5tYXNrLFxuICAgICAgICBtYXNrQ2hhciA9IHByb3BzLm1hc2tDaGFyLFxuICAgICAgICBmb3JtYXRDaGFycyA9IHByb3BzLmZvcm1hdENoYXJzLFxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICAgIGFsd2F5c1Nob3dNYXNrID0gcHJvcHMuYWx3YXlzU2hvd01hc2s7XG5cblxuICAgIF90aGlzLmhhc1ZhbHVlID0gdmFsdWUgIT0gbnVsbDtcbiAgICBfdGhpcy5tYXNrT3B0aW9ucyA9ICgwLCBfcGFyc2VNYXNrMi5kZWZhdWx0KShtYXNrLCBtYXNrQ2hhciwgZm9ybWF0Q2hhcnMpO1xuXG4gICAgaWYgKGRlZmF1bHRWYWx1ZSA9PSBudWxsKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSAnJztcbiAgICB9XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHZhbHVlID0gX3RoaXMuZ2V0U3RyaW5nVmFsdWUodmFsdWUpO1xuXG4gICAgaWYgKF90aGlzLm1hc2tPcHRpb25zLm1hc2sgJiYgKGFsd2F5c1Nob3dNYXNrIHx8IHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSAoMCwgX3N0cmluZy5mb3JtYXRWYWx1ZSkoX3RoaXMubWFza09wdGlvbnMsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBfdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHJldHVybiBJbnB1dEVsZW1lbnQ7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIHRoaXMubGFzdEN1cnNvclBvcyA9IG51bGw7XG4gIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuXG4gIHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXMyLmlzQW5kcm9pZEJyb3dzZXIgPSAoMCwgX2Vudmlyb25tZW50LmlzQW5kcm9pZEJyb3dzZXIpKCk7XG4gICAgX3RoaXMyLmlzV2luZG93c1Bob25lQnJvd3NlciA9ICgwLCBfZW52aXJvbm1lbnQuaXNXaW5kb3dzUGhvbmVCcm93c2VyKSgpO1xuICAgIF90aGlzMi5pc0FuZHJvaWRGaXJlZm94ID0gKDAsIF9lbnZpcm9ubWVudC5pc0FuZHJvaWRGaXJlZm94KSgpO1xuXG4gICAgaWYgKF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICYmIF90aGlzMi5nZXRJbnB1dFZhbHVlKCkgIT09IF90aGlzMi52YWx1ZSkge1xuICAgICAgX3RoaXMyLnNldElucHV0VmFsdWUoX3RoaXMyLnZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gKG5leHRQcm9wcykge1xuICAgIHZhciBvbGRNYXNrT3B0aW9ucyA9IF90aGlzMi5tYXNrT3B0aW9ucztcblxuICAgIF90aGlzMi5oYXNWYWx1ZSA9IG5leHRQcm9wcy52YWx1ZSAhPSBudWxsO1xuICAgIF90aGlzMi5tYXNrT3B0aW9ucyA9ICgwLCBfcGFyc2VNYXNrMi5kZWZhdWx0KShuZXh0UHJvcHMubWFzaywgbmV4dFByb3BzLm1hc2tDaGFyLCBuZXh0UHJvcHMuZm9ybWF0Q2hhcnMpO1xuXG4gICAgaWYgKCFfdGhpczIubWFza09wdGlvbnMubWFzaykge1xuICAgICAgX3RoaXMyLmJhY2tzcGFjZU9yRGVsZXRlUmVtb3ZhbCA9IG51bGw7XG4gICAgICBfdGhpczIubGFzdEN1cnNvclBvcyA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGlzTWFza0NoYW5nZWQgPSBfdGhpczIubWFza09wdGlvbnMubWFzayAmJiBfdGhpczIubWFza09wdGlvbnMubWFzayAhPT0gb2xkTWFza09wdGlvbnMubWFzaztcbiAgICB2YXIgc2hvd0VtcHR5ID0gbmV4dFByb3BzLmFsd2F5c1Nob3dNYXNrIHx8IF90aGlzMi5pc0ZvY3VzZWQoKTtcbiAgICB2YXIgbmV3VmFsdWUgPSBfdGhpczIuaGFzVmFsdWUgPyBfdGhpczIuZ2V0U3RyaW5nVmFsdWUobmV4dFByb3BzLnZhbHVlKSA6IF90aGlzMi52YWx1ZTtcblxuICAgIGlmICghb2xkTWFza09wdGlvbnMubWFzayAmJiAhX3RoaXMyLmhhc1ZhbHVlKSB7XG4gICAgICBuZXdWYWx1ZSA9IF90aGlzMi5nZXRJbnB1dERPTU5vZGUoKS52YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNNYXNrQ2hhbmdlZCB8fCBfdGhpczIubWFza09wdGlvbnMubWFzayAmJiAobmV3VmFsdWUgfHwgc2hvd0VtcHR5KSkge1xuICAgICAgbmV3VmFsdWUgPSAoMCwgX3N0cmluZy5mb3JtYXRWYWx1ZSkoX3RoaXMyLm1hc2tPcHRpb25zLCBuZXdWYWx1ZSk7XG5cbiAgICAgIGlmIChpc01hc2tDaGFuZ2VkKSB7XG4gICAgICAgIHZhciBwb3MgPSBfdGhpczIubGFzdEN1cnNvclBvcztcbiAgICAgICAgdmFyIGZpbGxlZExlbiA9ICgwLCBfc3RyaW5nLmdldEZpbGxlZExlbmd0aCkoX3RoaXMyLm1hc2tPcHRpb25zLCBuZXdWYWx1ZSk7XG4gICAgICAgIGlmIChwb3MgPT09IG51bGwgfHwgZmlsbGVkTGVuIDwgcG9zKSB7XG4gICAgICAgICAgaWYgKCgwLCBfc3RyaW5nLmlzRmlsbGVkKShfdGhpczIubWFza09wdGlvbnMsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgcG9zID0gZmlsbGVkTGVuO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3MgPSBfdGhpczIuZ2V0UmlnaHRFZGl0YWJsZVBvcyhmaWxsZWRMZW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpczIuc2V0Q3Vyc29yUG9zKHBvcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoX3RoaXMyLm1hc2tPcHRpb25zLm1hc2sgJiYgKDAsIF9zdHJpbmcuaXNFbXB0eSkoX3RoaXMyLm1hc2tPcHRpb25zLCBuZXdWYWx1ZSkgJiYgIXNob3dFbXB0eSAmJiAoIV90aGlzMi5oYXNWYWx1ZSB8fCAhbmV4dFByb3BzLnZhbHVlKSkge1xuICAgICAgbmV3VmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBfdGhpczIudmFsdWUgPSBuZXdWYWx1ZTtcbiAgfTtcblxuICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoX3RoaXMyLm1hc2tPcHRpb25zLm1hc2sgJiYgX3RoaXMyLmdldElucHV0VmFsdWUoKSAhPT0gX3RoaXMyLnZhbHVlKSB7XG4gICAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZShfdGhpczIudmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmlzRE9NRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICh0eXBlb2YgSFRNTEVsZW1lbnQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKEhUTUxFbGVtZW50KSkgPT09ICdvYmplY3QnID8gZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IC8vIERPTTJcbiAgICA6IGVsZW1lbnQubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIGVsZW1lbnQubm9kZU5hbWUgPT09ICdzdHJpbmcnO1xuICB9O1xuXG4gIHRoaXMuZ2V0SW5wdXRET01Ob2RlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9IF90aGlzMi5pbnB1dDtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoX3RoaXMyLmlzRE9NRWxlbWVudChpbnB1dCkpIHtcbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICAvLyBSZWFjdCAwLjEzXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5maW5kRE9NTm9kZShpbnB1dCk7XG4gIH07XG5cbiAgdGhpcy5nZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9IF90aGlzMi5nZXRJbnB1dERPTU5vZGUoKTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XG4gIH07XG5cbiAgdGhpcy5zZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIGlucHV0ID0gX3RoaXMyLmdldElucHV0RE9NTm9kZSgpO1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfdGhpczIudmFsdWUgPSB2YWx1ZTtcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICB9O1xuXG4gIHRoaXMuZ2V0TGVmdEVkaXRhYmxlUG9zID0gZnVuY3Rpb24gKHBvcykge1xuICAgIGZvciAodmFyIGkgPSBwb3M7IGkgPj0gMDsgLS1pKSB7XG4gICAgICBpZiAoISgwLCBfc3RyaW5nLmlzUGVybWFuZW50Q2hhcikoX3RoaXMyLm1hc2tPcHRpb25zLCBpKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdGhpcy5nZXRSaWdodEVkaXRhYmxlUG9zID0gZnVuY3Rpb24gKHBvcykge1xuICAgIHZhciBtYXNrID0gX3RoaXMyLm1hc2tPcHRpb25zLm1hc2s7XG5cbiAgICBmb3IgKHZhciBpID0gcG9zOyBpIDwgbWFzay5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKCEoMCwgX3N0cmluZy5pc1Blcm1hbmVudENoYXIpKF90aGlzMi5tYXNrT3B0aW9ucywgaSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHRoaXMuc2V0Q3Vyc29yVG9FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpbGxlZExlbiA9ICgwLCBfc3RyaW5nLmdldEZpbGxlZExlbmd0aCkoX3RoaXMyLm1hc2tPcHRpb25zLCBfdGhpczIudmFsdWUpO1xuICAgIHZhciBwb3MgPSBfdGhpczIuZ2V0UmlnaHRFZGl0YWJsZVBvcyhmaWxsZWRMZW4pO1xuICAgIGlmIChwb3MgIT09IG51bGwpIHtcbiAgICAgIF90aGlzMi5zZXRDdXJzb3JQb3MocG9zKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5zZXRTZWxlY3Rpb24gPSBmdW5jdGlvbiAoc3RhcnQpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuXG4gICAgdmFyIGlucHV0ID0gX3RoaXMyLmdldElucHV0RE9NTm9kZSgpO1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gc3RhcnQgKyBsZW47XG4gICAgaWYgKCdzZWxlY3Rpb25TdGFydCcgaW4gaW5wdXQgJiYgJ3NlbGVjdGlvbkVuZCcgaW4gaW5wdXQpIHtcbiAgICAgIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gc3RhcnQ7XG4gICAgICBpbnB1dC5zZWxlY3Rpb25FbmQgPSBlbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByYW5nZSA9IGlucHV0LmNyZWF0ZVRleHRSYW5nZSgpO1xuICAgICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSk7XG4gICAgICByYW5nZS5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsIHN0YXJ0KTtcbiAgICAgIHJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIGVuZCAtIHN0YXJ0KTtcbiAgICAgIHJhbmdlLnNlbGVjdCgpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmdldFNlbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXQgPSBfdGhpczIuZ2V0SW5wdXRET01Ob2RlKCk7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICB2YXIgZW5kID0gMDtcblxuICAgIGlmICgnc2VsZWN0aW9uU3RhcnQnIGluIGlucHV0ICYmICdzZWxlY3Rpb25FbmQnIGluIGlucHV0KSB7XG4gICAgICBzdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgZW5kID0gaW5wdXQuc2VsZWN0aW9uRW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcbiAgICAgIGlmIChyYW5nZS5wYXJlbnRFbGVtZW50KCkgPT09IGlucHV0KSB7XG4gICAgICAgIHN0YXJ0ID0gLXJhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgLWlucHV0LnZhbHVlLmxlbmd0aCk7XG4gICAgICAgIGVuZCA9IC1yYW5nZS5tb3ZlRW5kKCdjaGFyYWN0ZXInLCAtaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgZW5kOiBlbmQsXG4gICAgICBsZW5ndGg6IGVuZCAtIHN0YXJ0XG4gICAgfTtcbiAgfTtcblxuICB0aGlzLmdldEN1cnNvclBvcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMyLmdldFNlbGVjdGlvbigpLnN0YXJ0O1xuICB9O1xuXG4gIHRoaXMuc2V0Q3Vyc29yUG9zID0gZnVuY3Rpb24gKHBvcykge1xuICAgIF90aGlzMi5zZXRTZWxlY3Rpb24ocG9zLCAwKTtcblxuICAgICgwLCBfZGVmZXIyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5zZXRTZWxlY3Rpb24ocG9zLCAwKTtcbiAgICB9KTtcblxuICAgIF90aGlzMi5sYXN0Q3Vyc29yUG9zID0gcG9zO1xuICB9O1xuXG4gIHRoaXMuaXNGb2N1c2VkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczIuZm9jdXNlZDtcbiAgfTtcblxuICB0aGlzLmdldFN0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCA/ICcnIDogdmFsdWUgKyAnJztcbiAgfTtcblxuICB0aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIF90aGlzMi5iYWNrc3BhY2VPckRlbGV0ZVJlbW92YWwgPSBudWxsO1xuXG4gICAgaWYgKHR5cGVvZiBfdGhpczIucHJvcHMub25LZXlEb3duID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBfdGhpczIucHJvcHMub25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICB2YXIga2V5ID0gZXZlbnQua2V5LFxuICAgICAgICBjdHJsS2V5ID0gZXZlbnQuY3RybEtleSxcbiAgICAgICAgbWV0YUtleSA9IGV2ZW50Lm1ldGFLZXksXG4gICAgICAgIGRlZmF1bHRQcmV2ZW50ZWQgPSBldmVudC5kZWZhdWx0UHJldmVudGVkO1xuXG4gICAgaWYgKGN0cmxLZXkgfHwgbWV0YUtleSB8fCBkZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ0JhY2tzcGFjZScgfHwga2V5ID09PSAnRGVsZXRlJykge1xuICAgICAgdmFyIHNlbGVjdGlvbiA9IF90aGlzMi5nZXRTZWxlY3Rpb24oKTtcbiAgICAgIHZhciBjYW5SZW1vdmUgPSBrZXkgPT09ICdCYWNrc3BhY2UnICYmIHNlbGVjdGlvbi5lbmQgPiAwIHx8IGtleSA9PT0gJ0RlbGV0ZScgJiYgX3RoaXMyLnZhbHVlLmxlbmd0aCA+IHNlbGVjdGlvbi5zdGFydDtcblxuICAgICAgaWYgKCFjYW5SZW1vdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpczIuYmFja3NwYWNlT3JEZWxldGVSZW1vdmFsID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgc2VsZWN0aW9uOiBfdGhpczIuZ2V0U2VsZWN0aW9uKClcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgcGFzdGUgPSBfdGhpczIucGFzdGU7XG4gICAgdmFyIF9tYXNrT3B0aW9ucyA9IF90aGlzMi5tYXNrT3B0aW9ucyxcbiAgICAgICAgbWFzayA9IF9tYXNrT3B0aW9ucy5tYXNrLFxuICAgICAgICBtYXNrQ2hhciA9IF9tYXNrT3B0aW9ucy5tYXNrQ2hhcixcbiAgICAgICAgbGFzdEVkaXRhYmxlUG9zID0gX21hc2tPcHRpb25zLmxhc3RFZGl0YWJsZVBvcyxcbiAgICAgICAgcHJlZml4ID0gX21hc2tPcHRpb25zLnByZWZpeDtcblxuXG4gICAgdmFyIHZhbHVlID0gX3RoaXMyLmdldElucHV0VmFsdWUoKTtcbiAgICB2YXIgb2xkVmFsdWUgPSBfdGhpczIudmFsdWU7XG5cbiAgICBpZiAocGFzdGUpIHtcbiAgICAgIF90aGlzMi5wYXN0ZSA9IG51bGw7XG4gICAgICBfdGhpczIucGFzdGVUZXh0KHBhc3RlLnZhbHVlLCB2YWx1ZSwgcGFzdGUuc2VsZWN0aW9uLCBldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNlbGVjdGlvbiA9IF90aGlzMi5nZXRTZWxlY3Rpb24oKTtcbiAgICB2YXIgY3Vyc29yUG9zID0gc2VsZWN0aW9uLmVuZDtcbiAgICB2YXIgbWFza0xlbiA9IG1hc2subGVuZ3RoO1xuICAgIHZhciB2YWx1ZUxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICB2YXIgb2xkVmFsdWVMZW4gPSBvbGRWYWx1ZS5sZW5ndGg7XG5cbiAgICB2YXIgY2xlYXJlZFZhbHVlO1xuICAgIHZhciBlbnRlcmVkU3RyaW5nO1xuXG4gICAgaWYgKF90aGlzMi5iYWNrc3BhY2VPckRlbGV0ZVJlbW92YWwpIHtcbiAgICAgIHZhciBkZWxldGVGcm9tUmlnaHQgPSBfdGhpczIuYmFja3NwYWNlT3JEZWxldGVSZW1vdmFsLmtleSA9PT0gJ0RlbGV0ZSc7XG4gICAgICB2YWx1ZSA9IF90aGlzMi52YWx1ZTtcbiAgICAgIHNlbGVjdGlvbiA9IF90aGlzMi5iYWNrc3BhY2VPckRlbGV0ZVJlbW92YWwuc2VsZWN0aW9uO1xuICAgICAgY3Vyc29yUG9zID0gc2VsZWN0aW9uLnN0YXJ0O1xuXG4gICAgICBfdGhpczIuYmFja3NwYWNlT3JEZWxldGVSZW1vdmFsID0gbnVsbDtcblxuICAgICAgaWYgKHNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSAoMCwgX3N0cmluZy5jbGVhclJhbmdlKShfdGhpczIubWFza09wdGlvbnMsIHZhbHVlLCBzZWxlY3Rpb24uc3RhcnQsIHNlbGVjdGlvbi5sZW5ndGgpO1xuICAgICAgfSBlbHNlIGlmIChzZWxlY3Rpb24uc3RhcnQgPCBwcmVmaXgubGVuZ3RoIHx8ICFkZWxldGVGcm9tUmlnaHQgJiYgc2VsZWN0aW9uLnN0YXJ0ID09PSBwcmVmaXgubGVuZ3RoKSB7XG4gICAgICAgIGN1cnNvclBvcyA9IHByZWZpeC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZWRpdGFibGVQb3MgPSBkZWxldGVGcm9tUmlnaHQgPyBfdGhpczIuZ2V0UmlnaHRFZGl0YWJsZVBvcyhjdXJzb3JQb3MpIDogX3RoaXMyLmdldExlZnRFZGl0YWJsZVBvcyhjdXJzb3JQb3MgLSAxKTtcblxuICAgICAgICBpZiAoZWRpdGFibGVQb3MgIT09IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZSA9ICgwLCBfc3RyaW5nLmNsZWFyUmFuZ2UpKF90aGlzMi5tYXNrT3B0aW9ucywgdmFsdWUsIGVkaXRhYmxlUG9zLCAxKTtcbiAgICAgICAgICBjdXJzb3JQb3MgPSBlZGl0YWJsZVBvcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWVMZW4gPiBvbGRWYWx1ZUxlbikge1xuICAgICAgdmFyIGVudGVyZWRTdHJpbmdMZW4gPSB2YWx1ZUxlbiAtIG9sZFZhbHVlTGVuO1xuICAgICAgdmFyIHN0YXJ0UG9zID0gc2VsZWN0aW9uLmVuZCAtIGVudGVyZWRTdHJpbmdMZW47XG4gICAgICBlbnRlcmVkU3RyaW5nID0gdmFsdWUuc3Vic3RyKHN0YXJ0UG9zLCBlbnRlcmVkU3RyaW5nTGVuKTtcblxuICAgICAgaWYgKHN0YXJ0UG9zIDwgbGFzdEVkaXRhYmxlUG9zICYmIChlbnRlcmVkU3RyaW5nTGVuICE9PSAxIHx8IGVudGVyZWRTdHJpbmcgIT09IG1hc2tbc3RhcnRQb3NdKSkge1xuICAgICAgICBjdXJzb3JQb3MgPSBfdGhpczIuZ2V0UmlnaHRFZGl0YWJsZVBvcyhzdGFydFBvcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJzb3JQb3MgPSBzdGFydFBvcztcbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgc3RhcnRQb3MpICsgdmFsdWUuc3Vic3RyKHN0YXJ0UG9zICsgZW50ZXJlZFN0cmluZ0xlbik7XG5cbiAgICAgIGNsZWFyZWRWYWx1ZSA9ICgwLCBfc3RyaW5nLmNsZWFyUmFuZ2UpKF90aGlzMi5tYXNrT3B0aW9ucywgdmFsdWUsIHN0YXJ0UG9zLCBtYXNrTGVuIC0gc3RhcnRQb3MpO1xuICAgICAgY2xlYXJlZFZhbHVlID0gKDAsIF9zdHJpbmcuaW5zZXJ0U3RyaW5nKShfdGhpczIubWFza09wdGlvbnMsIGNsZWFyZWRWYWx1ZSwgZW50ZXJlZFN0cmluZywgY3Vyc29yUG9zKTtcblxuICAgICAgdmFsdWUgPSAoMCwgX3N0cmluZy5pbnNlcnRTdHJpbmcpKF90aGlzMi5tYXNrT3B0aW9ucywgb2xkVmFsdWUsIGVudGVyZWRTdHJpbmcsIGN1cnNvclBvcyk7XG5cbiAgICAgIGlmIChlbnRlcmVkU3RyaW5nTGVuICE9PSAxIHx8IGN1cnNvclBvcyA+PSBwcmVmaXgubGVuZ3RoICYmIGN1cnNvclBvcyA8IGxhc3RFZGl0YWJsZVBvcykge1xuICAgICAgICBjdXJzb3JQb3MgPSBNYXRoLm1heCgoMCwgX3N0cmluZy5nZXRGaWxsZWRMZW5ndGgpKF90aGlzMi5tYXNrT3B0aW9ucywgY2xlYXJlZFZhbHVlKSwgY3Vyc29yUG9zKTtcbiAgICAgICAgaWYgKGN1cnNvclBvcyA8IGxhc3RFZGl0YWJsZVBvcykge1xuICAgICAgICAgIGN1cnNvclBvcyA9IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKGN1cnNvclBvcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY3Vyc29yUG9zIDwgbGFzdEVkaXRhYmxlUG9zKSB7XG4gICAgICAgIGN1cnNvclBvcysrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWVMZW4gPCBvbGRWYWx1ZUxlbikge1xuICAgICAgdmFyIHJlbW92ZWRMZW4gPSBtYXNrTGVuIC0gdmFsdWVMZW47XG4gICAgICBlbnRlcmVkU3RyaW5nID0gdmFsdWUuc3Vic3RyKDAsIHNlbGVjdGlvbi5lbmQpO1xuICAgICAgdmFyIGNsZWFyT25seSA9IGVudGVyZWRTdHJpbmcgPT09IG9sZFZhbHVlLnN1YnN0cigwLCBzZWxlY3Rpb24uZW5kKTtcblxuICAgICAgY2xlYXJlZFZhbHVlID0gKDAsIF9zdHJpbmcuY2xlYXJSYW5nZSkoX3RoaXMyLm1hc2tPcHRpb25zLCBvbGRWYWx1ZSwgc2VsZWN0aW9uLmVuZCwgcmVtb3ZlZExlbik7XG5cbiAgICAgIGlmIChtYXNrQ2hhcikge1xuICAgICAgICB2YWx1ZSA9ICgwLCBfc3RyaW5nLmluc2VydFN0cmluZykoX3RoaXMyLm1hc2tPcHRpb25zLCBjbGVhcmVkVmFsdWUsIGVudGVyZWRTdHJpbmcsIDApO1xuICAgICAgfVxuXG4gICAgICBjbGVhcmVkVmFsdWUgPSAoMCwgX3N0cmluZy5jbGVhclJhbmdlKShfdGhpczIubWFza09wdGlvbnMsIGNsZWFyZWRWYWx1ZSwgc2VsZWN0aW9uLmVuZCwgbWFza0xlbiAtIHNlbGVjdGlvbi5lbmQpO1xuICAgICAgY2xlYXJlZFZhbHVlID0gKDAsIF9zdHJpbmcuaW5zZXJ0U3RyaW5nKShfdGhpczIubWFza09wdGlvbnMsIGNsZWFyZWRWYWx1ZSwgZW50ZXJlZFN0cmluZywgMCk7XG5cbiAgICAgIGlmICghY2xlYXJPbmx5KSB7XG4gICAgICAgIGN1cnNvclBvcyA9IE1hdGgubWF4KCgwLCBfc3RyaW5nLmdldEZpbGxlZExlbmd0aCkoX3RoaXMyLm1hc2tPcHRpb25zLCBjbGVhcmVkVmFsdWUpLCBjdXJzb3JQb3MpO1xuICAgICAgICBpZiAoY3Vyc29yUG9zIDwgbGFzdEVkaXRhYmxlUG9zKSB7XG4gICAgICAgICAgY3Vyc29yUG9zID0gX3RoaXMyLmdldFJpZ2h0RWRpdGFibGVQb3MoY3Vyc29yUG9zKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjdXJzb3JQb3MgPCBwcmVmaXgubGVuZ3RoKSB7XG4gICAgICAgIGN1cnNvclBvcyA9IHByZWZpeC5sZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIHZhbHVlID0gKDAsIF9zdHJpbmcuZm9ybWF0VmFsdWUpKF90aGlzMi5tYXNrT3B0aW9ucywgdmFsdWUpO1xuXG4gICAgX3RoaXMyLnNldElucHV0VmFsdWUodmFsdWUpO1xuXG4gICAgaWYgKHR5cGVvZiBfdGhpczIucHJvcHMub25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKF90aGlzMi5pc1dpbmRvd3NQaG9uZUJyb3dzZXIpIHtcbiAgICAgICgwLCBfZGVmZXIyLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNldFNlbGVjdGlvbihjdXJzb3JQb3MsIDApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzMi5zZXRDdXJzb3JQb3MoY3Vyc29yUG9zKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgX3RoaXMyLmZvY3VzZWQgPSB0cnVlO1xuXG4gICAgaWYgKF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrKSB7XG4gICAgICBpZiAoIV90aGlzMi52YWx1ZSkge1xuICAgICAgICB2YXIgcHJlZml4ID0gX3RoaXMyLm1hc2tPcHRpb25zLnByZWZpeDtcbiAgICAgICAgdmFyIHZhbHVlID0gKDAsIF9zdHJpbmcuZm9ybWF0VmFsdWUpKF90aGlzMi5tYXNrT3B0aW9ucywgcHJlZml4KTtcbiAgICAgICAgdmFyIGlucHV0VmFsdWUgPSAoMCwgX3N0cmluZy5mb3JtYXRWYWx1ZSkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSk7XG5cbiAgICAgICAgLy8gZG8gbm90IHVzZSB0aGlzLmdldElucHV0VmFsdWUgYW5kIHRoaXMuc2V0SW5wdXRWYWx1ZSBhcyB0aGlzLmlucHV0XG4gICAgICAgIC8vIGNhbiBiZSB1bmRlZmluZWQgYXQgdGhpcyBtb21lbnQgaWYgYXV0b0ZvY3VzIGF0dHJpYnV0ZSBpcyBzZXRcbiAgICAgICAgdmFyIGlzSW5wdXRWYWx1ZUNoYW5nZWQgPSBpbnB1dFZhbHVlICE9PSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKGlzSW5wdXRWYWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSBpbnB1dFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMyLnZhbHVlID0gaW5wdXRWYWx1ZTtcblxuICAgICAgICBpZiAoaXNJbnB1dFZhbHVlQ2hhbmdlZCAmJiB0eXBlb2YgX3RoaXMyLnByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzMi5zZXRDdXJzb3JUb0VuZCgpO1xuICAgICAgfSBlbHNlIGlmICgoMCwgX3N0cmluZy5nZXRGaWxsZWRMZW5ndGgpKF90aGlzMi5tYXNrT3B0aW9ucywgX3RoaXMyLnZhbHVlKSA8IF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrLmxlbmd0aCkge1xuICAgICAgICBfdGhpczIuc2V0Q3Vyc29yVG9FbmQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF90aGlzMi5wcm9wcy5vbkZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBfdGhpczIucHJvcHMub25Gb2N1cyhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25CbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgX3RoaXMyLmZvY3VzZWQgPSBmYWxzZTtcblxuICAgIGlmIChfdGhpczIubWFza09wdGlvbnMubWFzayAmJiAhX3RoaXMyLnByb3BzLmFsd2F5c1Nob3dNYXNrICYmICgwLCBfc3RyaW5nLmlzRW1wdHkpKF90aGlzMi5tYXNrT3B0aW9ucywgX3RoaXMyLnZhbHVlKSkge1xuICAgICAgdmFyIGlucHV0VmFsdWUgPSAnJztcbiAgICAgIHZhciBpc0lucHV0VmFsdWVDaGFuZ2VkID0gaW5wdXRWYWx1ZSAhPT0gX3RoaXMyLmdldElucHV0VmFsdWUoKTtcblxuICAgICAgaWYgKGlzSW5wdXRWYWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgX3RoaXMyLnNldElucHV0VmFsdWUoaW5wdXRWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0lucHV0VmFsdWVDaGFuZ2VkICYmIHR5cGVvZiBfdGhpczIucHJvcHMub25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF90aGlzMi5wcm9wcy5vbkJsdXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uUGFzdGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAodHlwZW9mIF90aGlzMi5wcm9wcy5vblBhc3RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBfdGhpczIucHJvcHMub25QYXN0ZShldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKF90aGlzMi5pc0FuZHJvaWRCcm93c2VyICYmICFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBfdGhpczIucGFzdGUgPSB7XG4gICAgICAgIHZhbHVlOiBfdGhpczIuZ2V0SW5wdXRWYWx1ZSgpLFxuICAgICAgICBzZWxlY3Rpb246IF90aGlzMi5nZXRTZWxlY3Rpb24oKVxuICAgICAgfTtcbiAgICAgIF90aGlzMi5zZXRJbnB1dFZhbHVlKCcnKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5wYXN0ZVRleHQgPSBmdW5jdGlvbiAodmFsdWUsIHRleHQsIHNlbGVjdGlvbiwgZXZlbnQpIHtcbiAgICB2YXIgY3Vyc29yUG9zID0gc2VsZWN0aW9uLnN0YXJ0O1xuICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9ICgwLCBfc3RyaW5nLmNsZWFyUmFuZ2UpKF90aGlzMi5tYXNrT3B0aW9ucywgdmFsdWUsIGN1cnNvclBvcywgc2VsZWN0aW9uLmxlbmd0aCk7XG4gICAgfVxuICAgIHZhciB0ZXh0TGVuID0gKDAsIF9zdHJpbmcuZ2V0SW5zZXJ0U3RyaW5nTGVuZ3RoKShfdGhpczIubWFza09wdGlvbnMsIHZhbHVlLCB0ZXh0LCBjdXJzb3JQb3MpO1xuICAgIHZhbHVlID0gKDAsIF9zdHJpbmcuaW5zZXJ0U3RyaW5nKShfdGhpczIubWFza09wdGlvbnMsIHZhbHVlLCB0ZXh0LCBjdXJzb3JQb3MpO1xuICAgIGN1cnNvclBvcyArPSB0ZXh0TGVuO1xuICAgIGN1cnNvclBvcyA9IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKGN1cnNvclBvcykgfHwgY3Vyc29yUG9zO1xuXG4gICAgaWYgKHZhbHVlICE9PSBfdGhpczIuZ2V0SW5wdXRWYWx1ZSgpKSB7XG4gICAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG4gICAgICBpZiAoZXZlbnQgJiYgdHlwZW9mIF90aGlzMi5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBfdGhpczIucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF90aGlzMi5zZXRDdXJzb3JQb3MoY3Vyc29yUG9zKTtcbiAgfTtcblxuICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3Byb3BzID0gX3RoaXMyLnByb3BzLFxuICAgICAgICBtYXNrID0gX3Byb3BzLm1hc2ssXG4gICAgICAgIGFsd2F5c1Nob3dNYXNrID0gX3Byb3BzLmFsd2F5c1Nob3dNYXNrLFxuICAgICAgICBtYXNrQ2hhciA9IF9wcm9wcy5tYXNrQ2hhcixcbiAgICAgICAgZm9ybWF0Q2hhcnMgPSBfcHJvcHMuZm9ybWF0Q2hhcnMsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydtYXNrJywgJ2Fsd2F5c1Nob3dNYXNrJywgJ21hc2tDaGFyJywgJ2Zvcm1hdENoYXJzJ10pO1xuXG4gICAgaWYgKF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrKSB7XG4gICAgICBpZiAoIXByb3BzLmRpc2FibGVkICYmICFwcm9wcy5yZWFkT25seSkge1xuICAgICAgICB2YXIgaGFuZGxlcnNLZXlzID0gWydvbkNoYW5nZScsICdvbktleURvd24nLCAnb25QYXN0ZSddO1xuICAgICAgICBoYW5kbGVyc0tleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcHJvcHNba2V5XSA9IF90aGlzMltrZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgcHJvcHMudmFsdWUgPSBfdGhpczIudmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHsgcmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuICAgICAgICByZXR1cm4gX3RoaXMyLmlucHV0ID0gX3JlZjtcbiAgICAgIH0gfSwgcHJvcHMsIHsgb25Gb2N1czogX3RoaXMyLm9uRm9jdXMsIG9uQmx1cjogX3RoaXMyLm9uQmx1ciB9KSk7XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJbnB1dEVsZW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAobWFzaywgbWFza0NoYXIsIGNoYXJzUnVsZXMpIHtcbiAgaWYgKG1hc2tDaGFyID09PSB1bmRlZmluZWQpIHtcbiAgICBtYXNrQ2hhciA9IF9jb25zdGFudHMuZGVmYXVsdE1hc2tDaGFyO1xuICB9XG4gIGlmIChjaGFyc1J1bGVzID09IG51bGwpIHtcbiAgICBjaGFyc1J1bGVzID0gX2NvbnN0YW50cy5kZWZhdWx0Q2hhcnNSdWxlcztcbiAgfVxuXG4gIGlmICghbWFzayB8fCB0eXBlb2YgbWFzayAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWFza0NoYXI6IG1hc2tDaGFyLFxuICAgICAgY2hhcnNSdWxlczogY2hhcnNSdWxlcyxcbiAgICAgIG1hc2s6IG51bGwsXG4gICAgICBwcmVmaXg6IG51bGwsXG4gICAgICBsYXN0RWRpdGFibGVQb3M6IG51bGwsXG4gICAgICBwZXJtYW5lbnRzOiBbXVxuICAgIH07XG4gIH1cbiAgdmFyIHN0ciA9ICcnO1xuICB2YXIgcHJlZml4ID0gJyc7XG4gIHZhciBwZXJtYW5lbnRzID0gW107XG4gIHZhciBpc1Blcm1hbmVudCA9IGZhbHNlO1xuICB2YXIgbGFzdEVkaXRhYmxlUG9zID0gbnVsbDtcblxuICBtYXNrLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGFyYWN0ZXIpIHtcbiAgICBpZiAoIWlzUGVybWFuZW50ICYmIGNoYXJhY3RlciA9PT0gJ1xcXFwnKSB7XG4gICAgICBpc1Blcm1hbmVudCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc1Blcm1hbmVudCB8fCAhY2hhcnNSdWxlc1tjaGFyYWN0ZXJdKSB7XG4gICAgICAgIHBlcm1hbmVudHMucHVzaChzdHIubGVuZ3RoKTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPT09IHBlcm1hbmVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHByZWZpeCArPSBjaGFyYWN0ZXI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhc3RFZGl0YWJsZVBvcyA9IHN0ci5sZW5ndGggKyAxO1xuICAgICAgfVxuICAgICAgc3RyICs9IGNoYXJhY3RlcjtcbiAgICAgIGlzUGVybWFuZW50ID0gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIG1hc2tDaGFyOiBtYXNrQ2hhcixcbiAgICBjaGFyc1J1bGVzOiBjaGFyc1J1bGVzLFxuICAgIHByZWZpeDogcHJlZml4LFxuICAgIG1hc2s6IHN0cixcbiAgICBsYXN0RWRpdGFibGVQb3M6IGxhc3RFZGl0YWJsZVBvcyxcbiAgICBwZXJtYW5lbnRzOiBwZXJtYW5lbnRzXG4gIH07XG59O1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2xpYi91dGlscy9wYXJzZU1hc2suanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBkZWZhdWx0Q2hhcnNSdWxlcyA9IGV4cG9ydHMuZGVmYXVsdENoYXJzUnVsZXMgPSB7XG4gICc5JzogJ1swLTldJyxcbiAgJ2EnOiAnW0EtWmEtel0nLFxuICAnKic6ICdbQS1aYS16MC05XSdcbn07XG5cbnZhciBkZWZhdWx0TWFza0NoYXIgPSBleHBvcnRzLmRlZmF1bHRNYXNrQ2hhciA9ICdfJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2xpYi9jb25zdGFudHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNBbmRyb2lkQnJvd3NlciA9IGlzQW5kcm9pZEJyb3dzZXI7XG5leHBvcnRzLmlzV2luZG93c1Bob25lQnJvd3NlciA9IGlzV2luZG93c1Bob25lQnJvd3NlcjtcbmV4cG9ydHMuaXNBbmRyb2lkRmlyZWZveCA9IGlzQW5kcm9pZEZpcmVmb3g7XG5leHBvcnRzLmlzSU9TID0gaXNJT1M7XG5mdW5jdGlvbiBpc0FuZHJvaWRCcm93c2VyKCkge1xuICB2YXIgd2luZG93cyA9IG5ldyBSZWdFeHAoJ3dpbmRvd3MnLCAnaScpO1xuICB2YXIgZmlyZWZveCA9IG5ldyBSZWdFeHAoJ2ZpcmVmb3gnLCAnaScpO1xuICB2YXIgYW5kcm9pZCA9IG5ldyBSZWdFeHAoJ2FuZHJvaWQnLCAnaScpO1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4gIXdpbmRvd3MudGVzdCh1YSkgJiYgIWZpcmVmb3gudGVzdCh1YSkgJiYgYW5kcm9pZC50ZXN0KHVhKTtcbn1cblxuZnVuY3Rpb24gaXNXaW5kb3dzUGhvbmVCcm93c2VyKCkge1xuICB2YXIgd2luZG93cyA9IG5ldyBSZWdFeHAoJ3dpbmRvd3MnLCAnaScpO1xuICB2YXIgcGhvbmUgPSBuZXcgUmVnRXhwKCdwaG9uZScsICdpJyk7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHJldHVybiB3aW5kb3dzLnRlc3QodWEpICYmIHBob25lLnRlc3QodWEpO1xufVxuXG5mdW5jdGlvbiBpc0FuZHJvaWRGaXJlZm94KCkge1xuICB2YXIgd2luZG93cyA9IG5ldyBSZWdFeHAoJ3dpbmRvd3MnLCAnaScpO1xuICB2YXIgZmlyZWZveCA9IG5ldyBSZWdFeHAoJ2ZpcmVmb3gnLCAnaScpO1xuICB2YXIgYW5kcm9pZCA9IG5ldyBSZWdFeHAoJ2FuZHJvaWQnLCAnaScpO1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4gIXdpbmRvd3MudGVzdCh1YSkgJiYgZmlyZWZveC50ZXN0KHVhKSAmJiBhbmRyb2lkLnRlc3QodWEpO1xufVxuXG5mdW5jdGlvbiBpc0lPUygpIHtcbiAgdmFyIHdpbmRvd3MgPSBuZXcgUmVnRXhwKCd3aW5kb3dzJywgJ2knKTtcbiAgdmFyIGlvcyA9IG5ldyBSZWdFeHAoJyhpcG9kfGlwaG9uZXxpcGFkKScsICdpJyk7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHJldHVybiAhd2luZG93cy50ZXN0KHVhKSAmJiBpb3MudGVzdCh1YSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9saWIvdXRpbHMvZW52aXJvbm1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaXNQZXJtYW5lbnRDaGFyID0gaXNQZXJtYW5lbnRDaGFyO1xuZXhwb3J0cy5pc0FsbG93ZWRDaGFyID0gaXNBbGxvd2VkQ2hhcjtcbmV4cG9ydHMuaXNFbXB0eSA9IGlzRW1wdHk7XG5leHBvcnRzLmdldEZpbGxlZExlbmd0aCA9IGdldEZpbGxlZExlbmd0aDtcbmV4cG9ydHMuaXNGaWxsZWQgPSBpc0ZpbGxlZDtcbmV4cG9ydHMuZm9ybWF0VmFsdWUgPSBmb3JtYXRWYWx1ZTtcbmV4cG9ydHMuY2xlYXJSYW5nZSA9IGNsZWFyUmFuZ2U7XG5leHBvcnRzLmluc2VydFN0cmluZyA9IGluc2VydFN0cmluZztcbmV4cG9ydHMuZ2V0SW5zZXJ0U3RyaW5nTGVuZ3RoID0gZ2V0SW5zZXJ0U3RyaW5nTGVuZ3RoO1xuZnVuY3Rpb24gaXNQZXJtYW5lbnRDaGFyKG1hc2tPcHRpb25zLCBwb3MpIHtcbiAgcmV0dXJuIG1hc2tPcHRpb25zLnBlcm1hbmVudHMuaW5kZXhPZihwb3MpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gaXNBbGxvd2VkQ2hhcihtYXNrT3B0aW9ucywgcG9zLCBjaGFyYWN0ZXIpIHtcbiAgdmFyIG1hc2sgPSBtYXNrT3B0aW9ucy5tYXNrLFxuICAgICAgY2hhcnNSdWxlcyA9IG1hc2tPcHRpb25zLmNoYXJzUnVsZXM7XG5cblxuICBpZiAoIWNoYXJhY3Rlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIHBvcykpIHtcbiAgICByZXR1cm4gbWFza1twb3NdID09PSBjaGFyYWN0ZXI7XG4gIH1cblxuICB2YXIgcnVsZUNoYXIgPSBtYXNrW3Bvc107XG4gIHZhciBjaGFyUnVsZSA9IGNoYXJzUnVsZXNbcnVsZUNoYXJdO1xuXG4gIHJldHVybiBuZXcgUmVnRXhwKGNoYXJSdWxlKS50ZXN0KGNoYXJhY3Rlcik7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkobWFza09wdGlvbnMsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5zcGxpdCgnJykuZXZlcnkoZnVuY3Rpb24gKGNoYXJhY3RlciwgaSkge1xuICAgIHJldHVybiBpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIGkpIHx8ICFpc0FsbG93ZWRDaGFyKG1hc2tPcHRpb25zLCBpLCBjaGFyYWN0ZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RmlsbGVkTGVuZ3RoKG1hc2tPcHRpb25zLCB2YWx1ZSkge1xuICB2YXIgbWFza0NoYXIgPSBtYXNrT3B0aW9ucy5tYXNrQ2hhcixcbiAgICAgIHByZWZpeCA9IG1hc2tPcHRpb25zLnByZWZpeDtcblxuXG4gIGlmICghbWFza0NoYXIpIHtcbiAgICB3aGlsZSAodmFsdWUubGVuZ3RoID4gcHJlZml4Lmxlbmd0aCAmJiBpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIHZhbHVlLmxlbmd0aCAtIDEpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIHZhbHVlLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoO1xuICB9XG5cbiAgdmFyIGZpbGxlZExlbmd0aCA9IHByZWZpeC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSB2YWx1ZS5sZW5ndGg7IGkgPj0gcHJlZml4Lmxlbmd0aDsgaS0tKSB7XG4gICAgdmFyIGNoYXJhY3RlciA9IHZhbHVlW2ldO1xuICAgIHZhciBpc0VudGVyZWRDaGFyYWN0ZXIgPSAhaXNQZXJtYW5lbnRDaGFyKG1hc2tPcHRpb25zLCBpKSAmJiBpc0FsbG93ZWRDaGFyKG1hc2tPcHRpb25zLCBpLCBjaGFyYWN0ZXIpO1xuICAgIGlmIChpc0VudGVyZWRDaGFyYWN0ZXIpIHtcbiAgICAgIGZpbGxlZExlbmd0aCA9IGkgKyAxO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbGxlZExlbmd0aDtcbn1cblxuZnVuY3Rpb24gaXNGaWxsZWQobWFza09wdGlvbnMsIHZhbHVlKSB7XG4gIHJldHVybiBnZXRGaWxsZWRMZW5ndGgobWFza09wdGlvbnMsIHZhbHVlKSA9PT0gbWFza09wdGlvbnMubWFzay5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKG1hc2tPcHRpb25zLCB2YWx1ZSkge1xuICB2YXIgbWFza0NoYXIgPSBtYXNrT3B0aW9ucy5tYXNrQ2hhcixcbiAgICAgIG1hc2sgPSBtYXNrT3B0aW9ucy5tYXNrLFxuICAgICAgcHJlZml4ID0gbWFza09wdGlvbnMucHJlZml4O1xuXG5cbiAgaWYgKCFtYXNrQ2hhcikge1xuICAgIHZhbHVlID0gaW5zZXJ0U3RyaW5nKG1hc2tPcHRpb25zLCAnJywgdmFsdWUsIDApO1xuICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgZ2V0RmlsbGVkTGVuZ3RoKG1hc2tPcHRpb25zLCB2YWx1ZSkpO1xuXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8IHByZWZpeC5sZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gcHJlZml4O1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSkge1xuICAgIHZhciBlbXB0eVZhbHVlID0gZm9ybWF0VmFsdWUobWFza09wdGlvbnMsICcnKTtcbiAgICByZXR1cm4gaW5zZXJ0U3RyaW5nKG1hc2tPcHRpb25zLCBlbXB0eVZhbHVlLCB2YWx1ZSwgMCk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaXNQZXJtYW5lbnRDaGFyKG1hc2tPcHRpb25zLCBpKSkge1xuICAgICAgdmFsdWUgKz0gbWFza1tpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gbWFza0NoYXI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbGVhclJhbmdlKG1hc2tPcHRpb25zLCB2YWx1ZSwgc3RhcnQsIGxlbikge1xuICB2YXIgZW5kID0gc3RhcnQgKyBsZW47XG4gIHZhciBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBwcmVmaXggPSBtYXNrT3B0aW9ucy5wcmVmaXg7XG5cbiAgdmFyIGFycmF5VmFsdWUgPSB2YWx1ZS5zcGxpdCgnJyk7XG5cbiAgaWYgKCFtYXNrQ2hhcikge1xuICAgIHN0YXJ0ID0gTWF0aC5tYXgocHJlZml4Lmxlbmd0aCwgc3RhcnQpO1xuICAgIGFycmF5VmFsdWUuc3BsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCk7XG4gICAgdmFsdWUgPSBhcnJheVZhbHVlLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIGZvcm1hdFZhbHVlKG1hc2tPcHRpb25zLCB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlWYWx1ZS5tYXAoZnVuY3Rpb24gKGNoYXJhY3RlciwgaSkge1xuICAgIGlmIChpIDwgc3RhcnQgfHwgaSA+PSBlbmQpIHtcbiAgICAgIHJldHVybiBjaGFyYWN0ZXI7XG4gICAgfVxuICAgIGlmIChpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIGkpKSB7XG4gICAgICByZXR1cm4gbWFza1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIG1hc2tDaGFyO1xuICB9KS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3RyaW5nKG1hc2tPcHRpb25zLCB2YWx1ZSwgaW5zZXJ0U3RyLCBpbnNlcnRQb3MpIHtcbiAgdmFyIG1hc2sgPSBtYXNrT3B0aW9ucy5tYXNrLFxuICAgICAgbWFza0NoYXIgPSBtYXNrT3B0aW9ucy5tYXNrQ2hhcixcbiAgICAgIHByZWZpeCA9IG1hc2tPcHRpb25zLnByZWZpeDtcblxuICB2YXIgYXJyYXlJbnNlcnRTdHIgPSBpbnNlcnRTdHIuc3BsaXQoJycpO1xuICB2YXIgaXNJbnB1dEZpbGxlZCA9IGlzRmlsbGVkKG1hc2tPcHRpb25zLCB2YWx1ZSk7XG5cbiAgdmFyIGlzVXNhYmxlUG9zaXRpb24gPSBmdW5jdGlvbiBpc1VzYWJsZVBvc2l0aW9uKHBvcywgY2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuICFpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIHBvcykgfHwgY2hhcmFjdGVyID09PSBtYXNrW3Bvc107XG4gIH07XG4gIHZhciBpc1VzYWJsZUNoYXJhY3RlciA9IGZ1bmN0aW9uIGlzVXNhYmxlQ2hhcmFjdGVyKGNoYXJhY3RlciwgcG9zKSB7XG4gICAgcmV0dXJuICFtYXNrQ2hhciB8fCAhaXNQZXJtYW5lbnRDaGFyKG1hc2tPcHRpb25zLCBwb3MpIHx8IGNoYXJhY3RlciAhPT0gbWFza0NoYXI7XG4gIH07XG5cbiAgaWYgKCFtYXNrQ2hhciAmJiBpbnNlcnRQb3MgPiB2YWx1ZS5sZW5ndGgpIHtcbiAgICB2YWx1ZSArPSBtYXNrLnNsaWNlKHZhbHVlLmxlbmd0aCwgaW5zZXJ0UG9zKTtcbiAgfVxuXG4gIGFycmF5SW5zZXJ0U3RyLmV2ZXJ5KGZ1bmN0aW9uIChpbnNlcnRDaGFyYWN0ZXIpIHtcbiAgICB3aGlsZSAoIWlzVXNhYmxlUG9zaXRpb24oaW5zZXJ0UG9zLCBpbnNlcnRDaGFyYWN0ZXIpKSB7XG4gICAgICBpZiAoaW5zZXJ0UG9zID49IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSArPSBtYXNrW2luc2VydFBvc107XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNVc2FibGVDaGFyYWN0ZXIoaW5zZXJ0Q2hhcmFjdGVyLCBpbnNlcnRQb3MpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpbnNlcnRQb3MrKztcblxuICAgICAgLy8gc3RvcCBpdGVyYXRpb24gaWYgbWF4aW11bSB2YWx1ZSBsZW5ndGggcmVhY2hlZFxuICAgICAgaWYgKGluc2VydFBvcyA+PSBtYXNrLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGlzQWxsb3dlZCA9IGlzQWxsb3dlZENoYXIobWFza09wdGlvbnMsIGluc2VydFBvcywgaW5zZXJ0Q2hhcmFjdGVyKSB8fCBpbnNlcnRDaGFyYWN0ZXIgPT09IG1hc2tDaGFyO1xuICAgIGlmICghaXNBbGxvd2VkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaW5zZXJ0UG9zIDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICBpZiAobWFza0NoYXIgfHwgaXNJbnB1dEZpbGxlZCB8fCBpbnNlcnRQb3MgPCBwcmVmaXgubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgaW5zZXJ0UG9zKSArIGluc2VydENoYXJhY3RlciArIHZhbHVlLnNsaWNlKGluc2VydFBvcyArIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpbnNlcnRQb3MpICsgaW5zZXJ0Q2hhcmFjdGVyICsgdmFsdWUuc2xpY2UoaW5zZXJ0UG9zKTtcbiAgICAgICAgdmFsdWUgPSBmb3JtYXRWYWx1ZShtYXNrT3B0aW9ucywgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIW1hc2tDaGFyKSB7XG4gICAgICB2YWx1ZSArPSBpbnNlcnRDaGFyYWN0ZXI7XG4gICAgfVxuXG4gICAgaW5zZXJ0UG9zKys7XG5cbiAgICAvLyBzdG9wIGl0ZXJhdGlvbiBpZiBtYXhpbXVtIHZhbHVlIGxlbmd0aCByZWFjaGVkXG4gICAgcmV0dXJuIGluc2VydFBvcyA8IG1hc2subGVuZ3RoO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldEluc2VydFN0cmluZ0xlbmd0aChtYXNrT3B0aW9ucywgdmFsdWUsIGluc2VydFN0ciwgaW5zZXJ0UG9zKSB7XG4gIHZhciBtYXNrID0gbWFza09wdGlvbnMubWFzayxcbiAgICAgIG1hc2tDaGFyID0gbWFza09wdGlvbnMubWFza0NoYXI7XG5cbiAgdmFyIGFycmF5SW5zZXJ0U3RyID0gaW5zZXJ0U3RyLnNwbGl0KCcnKTtcbiAgdmFyIGluaXRpYWxJbnNlcnRQb3MgPSBpbnNlcnRQb3M7XG5cbiAgdmFyIGlzVXNhYmxlUG9zaXRpb24gPSBmdW5jdGlvbiBpc1VzYWJsZVBvc2l0aW9uKHBvcywgY2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuICFpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIHBvcykgfHwgY2hhcmFjdGVyID09PSBtYXNrW3Bvc107XG4gIH07XG5cbiAgYXJyYXlJbnNlcnRTdHIuZXZlcnkoZnVuY3Rpb24gKGluc2VydENoYXJhY3Rlcikge1xuICAgIHdoaWxlICghaXNVc2FibGVQb3NpdGlvbihpbnNlcnRQb3MsIGluc2VydENoYXJhY3RlcikpIHtcbiAgICAgIGluc2VydFBvcysrO1xuXG4gICAgICAvLyBzdG9wIGl0ZXJhdGlvbiBpZiBtYXhpbXVtIHZhbHVlIGxlbmd0aCByZWFjaGVkXG4gICAgICBpZiAoaW5zZXJ0UG9zID49IG1hc2subGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaXNBbGxvd2VkID0gaXNBbGxvd2VkQ2hhcihtYXNrT3B0aW9ucywgaW5zZXJ0UG9zLCBpbnNlcnRDaGFyYWN0ZXIpIHx8IGluc2VydENoYXJhY3RlciA9PT0gbWFza0NoYXI7XG5cbiAgICBpZiAoaXNBbGxvd2VkKSB7XG4gICAgICBpbnNlcnRQb3MrKztcbiAgICB9XG5cbiAgICAvLyBzdG9wIGl0ZXJhdGlvbiBpZiBtYXhpbXVtIHZhbHVlIGxlbmd0aCByZWFjaGVkXG4gICAgcmV0dXJuIGluc2VydFBvcyA8IG1hc2subGVuZ3RoO1xuICB9KTtcblxuICByZXR1cm4gaW5zZXJ0UG9zIC0gaW5pdGlhbEluc2VydFBvcztcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2xpYi91dGlscy9zdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB2YXIgZGVmZXIgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmbiwgMCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gZGVmZXIoZm4pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2xpYi91dGlscy9kZWZlci5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbWFwRGlzcGF0Y2hUb1Byb3BzIH0gZnJvbSAnLi9QZXJzb25hbEluZm9ybWF0aW9uQ29udGFpbmVyJztcclxuaW1wb3J0IEludmVzdG9yUHJvZmlsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L0ludmVzdG9yUHJvZmlsZUNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7ICAgICAgICAgICBcclxuICAgIHByZXZpb3VzRnVuZHM6IHN0YXRlLlByb3NwZWN0RGV0YWlsLnByZXZpb3VzRnVuZHMsXHJcbiAgICBGSU5SQTogc3RhdGUuUHJvc3BlY3REZXRhaWwuRklOUkEsXHJcbiAgICBpbnZlc3RtZW50T2JqZWN0aXZlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5pbnZlc3RtZW50T2JqZWN0aXZlLFxyXG4gICAgcmlza1Byb2ZpbGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLnJpc2tQcm9maWxlLFxyXG4gICAgYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2U6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlLFxyXG4gICAgbmV0V29ydGhSYW5nZTogc3RhdGUuUHJvc3BlY3REZXRhaWwubmV0V29ydGhSYW5nZSxcclxuICAgIGxpZmVJbnN1cmFuY2VSYW5nZTogc3RhdGUuUHJvc3BlY3REZXRhaWwubGlmZUluc3VyYW5jZVJhbmdlLFxyXG4gICAgdGF4QnJhY2tldDogc3RhdGUuUHJvc3BlY3REZXRhaWwudGF4QnJhY2tldCxcclxuICAgIGRlcGVuZGVudHNObzogc3RhdGUuUHJvc3BlY3REZXRhaWwuZGVwZW5kZW50c05vLFxyXG4gICAgYWdlczogc3RhdGUuUHJvc3BlY3REZXRhaWwuYWdlcyxcclxuICAgIGN1cnJlbnRFbXBsb3llcjogc3RhdGUuUHJvc3BlY3REZXRhaWwuY3VycmVudEVtcGxveWVyLFxyXG4gICAgZW1wbG95bWVudFN0YXR1czogc3RhdGUuUHJvc3BlY3REZXRhaWwuZW1wbG95bWVudFN0YXR1cyxcclxuICAgIG9jY3VwYXRpb246IHN0YXRlLlByb3NwZWN0RGV0YWlsLm9jY3VwYXRpb24sXHJcbiAgICBlbXBsb3llckFkZHJlc3M6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmVtcGxveWVyQWRkcmVzcyxcclxuICAgIGVtcGxveWVyQ2l0eTogc3RhdGUuUHJvc3BlY3REZXRhaWwuZW1wbG95ZXJDaXR5LFxyXG4gICAgZW1wbG95ZXJTdGF0ZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuZW1wbG95ZXJTdGF0ZSxcclxuICAgIGVtcGxveWVyWmlwQ29kZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuZW1wbG95ZXJaaXBDb2RlLFxyXG4gICAgaGlyZURhdGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmhpcmVEYXRlLFxyXG4gICAgZXhwZWN0ZWRBbm51aXR5RGF0ZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuZXhwZWN0ZWRBbm51aXR5RGF0ZSxcclxuICAgIGVtcGxveWVyU2FsYXJ5OiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5lbXBsb3llclNhbGFyeSxcclxuICAgIHN0YXRlczogc3RhdGUuc3RhdGVzXHJcbiAgICB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnZlc3RvclByb2ZpbGVDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbnZlc3RvclByb2ZpbGUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL1Byb3NwZWN0Q29udGFpbmVyL0ludmVzdG9yUHJvZmlsZUNvbnRhaW5lci50cyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWYWxpY0lucHV0IGZyb20gJy4uLy4uL3NoYXJlZC9WYWxpY0lucHV0Q29tcG9uZW50L1ZhbGljSW5wdXRDb21wb25lbnQnO1xyXG4vKmV4cG9ydCBpbnRlcmZhY2UgSUludmVzdG9yUHJvZmlsZVByb3Bze1xyXG4vL3N0YXRlcz86IElTdGF0ZVtdO1xyXG5zdGF0ZXM/OiBhbnlbXTtcclxub25DaGFuZ2U6ICgpPT4gdm9pZDtcclxucHJldmlvdXNGdW5kcz86IHN0cmluZztcclxuRklOUkE/OiBzdHJpbmc7XHJcbmludmVzdG1lbnRPYmplY3RpdmU/OnN0cmluZztcclxucmlza1Byb2ZpbGU/OnN0cmluZztcclxuYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2U/OnN0cmluZztcclxubmV0V29ydGhSYW5nZT86c3RyaW5nO1xyXG5saWZlSW5zdXJhbmNlUmFuZ2U/OiBzdHJpbmc7XHJcbnRheEJyYWNrZXQ/OnN0cmluZztcclxuZGVwZW5kZW50c05vPzpzdHJpbmc7XHJcbmFnZXM/OnN0cmluZztcclxuY3VycmVudEVtcGxveWVyPzpzdHJpbmc7XHJcbmVtcGxveW1lbnRTdGF0dXM/OnN0cmluZztcclxub2NjdXBhdGlvbj86c3RyaW5nO1xyXG5lbXBsb3llckFkZHJlc3M/OnN0cmluZztcclxuZW1wbG95ZXJDaXR5PzpzdHJpbmc7XHJcbmVtcGxveWVyU3RhdGU/OnN0cmluZztcclxuZW1wbG95ZXJaaXBDb2RlPzpzdHJpbmc7XHJcbmVtcGxveWVyU2FsYXJ5PzpzdHJpbmc7XHJcbmhpcmVEYXRlPzphbnk7XHJcbmV4cGVjdGVkQW5udWl0eURhdGU/OmFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGV7XHJcbkNvZGU6c3RyaW5nO1xyXG59XHJcbiovXHJcbmNsYXNzIEludmVzdG9yUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudDxhbnksYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVVzZXJJbnB1dCA9IHRoaXMuaGFuZGxlVXNlcklucHV0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVVc2VySW5wdXQoZSkge1xyXG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgb25DaGFuZ2UoZSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHsgc3RhdGVzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBzdGF0ZXNMaXN0RG93bjtcclxuICAgICAgICBpZiAoc3RhdGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3RhdGVzTGlzdERvd24gPSBPYmplY3Qua2V5cyhzdGF0ZXMpLm1hcCgoa2V5LCBpbmRleCkgPT4geyByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17c3RhdGVzW2tleV0uQ29kZX0gPntzdGF0ZXNba2V5XS5Db2RlfTwvb3B0aW9uPiB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmV2aW91c0Z1bmRzXCI+UHJldmlvdXNseSBwdXJjaGFzZWQgbXV0dWFsIGZ1bmRzIG9yIG90aGVyIHNlY3VyaXRpZXM/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXt0aGlzLnByb3BzLnByZXZpb3VzRnVuZHMgPT09IFwiMVwifSBuYW1lPVwicHJldmlvdXNGdW5kc1wiIHZhbHVlPVwiMVwiIC8+WWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIwXCIgbmFtZT1cInByZXZpb3VzRnVuZHNcIiBjaGVja2VkPXt0aGlzLnByb3BzLnByZXZpb3VzRnVuZHMgPT09IFwiMFwifSAvPk5vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkZJTlJBXCI+RW1wbG95ZWQgYnkgb3IgcmVnaXN0ZXJlZCB3aXRoIGEgRklOUkEgbWVtYmVyIGZpcm0/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiRklOUkFcIiB2YWx1ZT1cIjFcIiBjaGVja2VkPXt0aGlzLnByb3BzLkZJTlJBID09PSBcIjFcIn0gLz5ZZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiRklOUkFcIiB2YWx1ZT1cIjBcIiBjaGVja2VkPXt0aGlzLnByb3BzLkZJTlJBID09PSBcIjBcIn0gLz5Ob1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW52ZXN0bWVudE9iamVjdGl2ZVwiPkludmVzdG1lbnQgT2JqZWN0aXZlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiaW52ZXN0bWVudE9iamVjdGl2ZVwiIHZhbHVlPVwiU1BcIiBjaGVja2VkPXt0aGlzLnByb3BzLmludmVzdG1lbnRPYmplY3RpdmUgPT09IFwiU1BcIn0gLz5TYWZldHkgb2YgUHJpbmNpcGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImludmVzdG1lbnRPYmplY3RpdmVcIiB2YWx1ZT1cIkxHXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5pbnZlc3RtZW50T2JqZWN0aXZlID09PSBcIkxHXCJ9IC8+TG9uZy1UZXJtIEdyb3d0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJpbnZlc3RtZW50T2JqZWN0aXZlXCIgdmFsdWU9XCJJTlwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuaW52ZXN0bWVudE9iamVjdGl2ZSA9PT0gXCJJTlwifSAvPkluY29tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyaXNrUHJvZmlsZVwiPlJpc2sgUHJvZmlsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicmlza1Byb2ZpbGVcIiB2YWx1ZT17dGhpcy5wcm9wcy5yaXNrUHJvZmlsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSFJcIj5IaWdoZXIgUmlzazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUdcIj5BZ2dyZXNzaXZlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNQVwiPk1vZGVyYXRlbHkgQWdncmVzc2l2ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTURcIj5Nb2RlcmF0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUNcIj5Nb2RlcmF0ZWx5IENvbnNlcnZhdGl2ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ05cIj5Db25zZXJ2YXRpdmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNBXCI+Q2F1dGlvdXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiBGaW5hbmNpYWwgU2l0dWF0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlXCI+QW5udWFsIEhvdXNlaG9sZCBJbmNvbWUgUmFuZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZVwiIHZhbHVlPVwiMDFcIiBjaGVja2VkPXt0aGlzLnByb3BzLmFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlID09PSBcIjAxXCJ9IC8+VW5kZXIgJDUwLDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZVwiIHZhbHVlPVwiMDJcIiBjaGVja2VkPXt0aGlzLnByb3BzLmFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlID09PSBcIjAyXCJ9IC8+JDUwLDAwMCAtICQxMDAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlXCIgdmFsdWU9XCIwM1wiIGNoZWNrZWQ9e3RoaXMucHJvcHMuYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2UgPT09IFwiMDNcIn0gLz5PdmVyICQxMDAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ldFdvcnRoUmFuZ2VcIj5OZXQgV29ydGggUmFuZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJuZXRXb3J0aFJhbmdlXCIgdmFsdWU9XCIxXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5uZXRXb3J0aFJhbmdlID09PSBcIjFcIn0gLz5VbmRlciAkNTAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm5ldFdvcnRoUmFuZ2VcIiB2YWx1ZT1cIjJcIiBjaGVja2VkPXt0aGlzLnByb3BzLm5ldFdvcnRoUmFuZ2UgPT09IFwiMlwifSAvPiQ1MCwwMDAgLSAkMTAwLDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJuZXRXb3J0aFJhbmdlXCIgdmFsdWU9XCIzXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5uZXRXb3J0aFJhbmdlID09PSBcIjNcIn0gLz5PdmVyICQxMDAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxpZmVJbnN1cmFuY2VSYW5nZVwiPkxpZmUgSW5zdXJhbmNlIFJhbmdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibGlmZUluc3VyYW5jZVJhbmdlXCIgdmFsdWU9XCIwMVwiIGNoZWNrZWQ9e3RoaXMucHJvcHMubGlmZUluc3VyYW5jZVJhbmdlID09PSBcIjAxXCJ9IC8+VW5kZXIgJDUwLDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJsaWZlSW5zdXJhbmNlUmFuZ2VcIiB2YWx1ZT1cIjAyXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5saWZlSW5zdXJhbmNlUmFuZ2UgPT09IFwiMDJcIn0gLz4kNTAsMDAwIC0gJDEwMCwwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibGlmZUluc3VyYW5jZVJhbmdlXCIgdmFsdWU9XCIwM1wiIGNoZWNrZWQ9e3RoaXMucHJvcHMubGlmZUluc3VyYW5jZVJhbmdlID09PSBcIjAzXCJ9IC8+T3ZlciAkMTAwLDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRheEJyYWNrZXRcIj5UYXggQnJhY2tldDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZhbGljSW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBuYW1lPVwidGF4QnJhY2tldFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMudGF4QnJhY2tldH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXBlbmRlbnRzTm9cIj5EZXBlbmRlbnRzOiAgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIG5hbWU9XCJkZXBlbmRlbnRzTm9cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmRlcGVuZGVudHNOb30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ2VzXCI+QWdlczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZhbGljSW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBuYW1lPVwiYWdlc1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuYWdlc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJoYWxmLXJ1bGVcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3VycmVudEVtcGxveWVyXCI+Q3VycmVudCBFbXBsb3llcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImN1cnJlbnRFbXBsb3llclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuY3VycmVudEVtcGxveWVyfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9jY3VwYXRpb25cIj5PY2N1cGF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwib2NjdXBhdGlvblwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMub2NjdXBhdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZW1wbG95bWVudFN0YXR1c1wiIHZhbHVlPVwiUlwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuZW1wbG95bWVudFN0YXR1cyA9PT0gXCJSXCJ9IC8+UmV0aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJlbXBsb3ltZW50U3RhdHVzXCIgdmFsdWU9XCJVXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5lbXBsb3ltZW50U3RhdHVzID09PSBcIlVcIn0gLz5VbmVtcGxveWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtcGxveWVyQWRkcmVzc1wiPkVtcGxveWVyIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbXBsb3llckFkZHJlc3NcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmVtcGxveWVyQWRkcmVzc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbXBsb3llckNpdHlcIj5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1wbG95ZXJDaXR5XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5lbXBsb3llckNpdHl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1wbG95ZXJTdGF0ZVwiPlN0YXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJlbXBsb3llclN0YXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5lbXBsb3llclN0YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGVzTGlzdERvd259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1wbG95ZXJaaXBDb2RlXCI+WmlwQ29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtcGxveWVyWmlwQ29kZVwiIG1heC1sZW5ndGg9XCI1XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5lbXBsb3llclppcENvZGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtcGxveWVyU2FsYXJ5XCI+U2FsYXJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJlbXBsb3llclNhbGFyeVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG1pbj1cIjBcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmVtcGxveWVyU2FsYXJ5fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhpcmVEYXRlXCI+SGlyZSBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiaGlyZURhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmhpcmVEYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4cGVjdGVkQW5udWl0eURhdGVcIj5FeHBlY3RlZCBBbm51aXR5IERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJleHBlY3RlZEFubnVpdHlEYXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5leHBlY3RlZEFubnVpdHlEYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEludmVzdG9yUHJvZmlsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qcm9zcGVjdENvbXBvbmVudC9JbnZlc3RvclByb2ZpbGVDb21wb25lbnQudHN4IiwiaW1wb3J0IEluY29tZVNvdXJjZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L0luY29tZVNvdXJjZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7bWFwRGlzcGF0Y2hUb1Byb3BzfSBmcm9tICcuL1BlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXInO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoeyAgICAgICBcclxuICAgIGluY29tZUFjY291bnRTYWxhcnk6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmluY29tZUFjY291bnRTYWxhcnksXHJcbiAgICBzb2NpYWxTZWN1cml0eTogc3RhdGUuUHJvc3BlY3REZXRhaWwuc29jaWFsU2VjdXJpdHksXHJcbiAgICBwZW5zaW9uQmVuZWZpdHM6IHN0YXRlLlByb3NwZWN0RGV0YWlsLnBlbnNpb25CZW5lZml0cyxcclxuICAgIGludmVzdG1lbnRJbmNvbWU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmludmVzdG1lbnRJbmNvbWUsXHJcbiAgICBybWQ6IHN0YXRlLlByb3NwZWN0RGV0YWlsLnJtZCxcclxuICAgIG90aGVyOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5vdGhlcixcclxuICAgIGV4cGVuc2VzQW1vdW50OiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5leHBlbnNlc0Ftb3VudCAgICBcclxufSk7XHJcbmV4cG9ydCBjb25zdCBJbmNvbWVTb3VyY2VDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbmNvbWVTb3VyY2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL1Byb3NwZWN0Q29udGFpbmVyL0luY29tZVNvdXJjZUNvbnRhaW5lci50cyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUluY29tZVNvdXJjZVByb3BzIHtcclxuaW5jb21lQWNjb3VudFNhbGFyeT86c3RyaW5nO1xyXG5zb2NpYWxTZWN1cml0eT86c3RyaW5nO1xyXG5wZW5zaW9uQmVuZWZpdHM/OiBzdHJpbmc7XHJcbmludmVzdG1lbnRJbmNvbWU/OiBzdHJpbmc7XHJcbnJtZD86c3RyaW5nO1xyXG5vdGhlcj86c3RyaW5nO1xyXG5leHBlbnNlc0Ftb3VudD86c3RyaW5nO1xyXG5vbkNoYW5nZTooKSA9PiBhbnk7XHJcbn1cclxuY2xhc3MgSW5jb21lU291cmNlIGV4dGVuZHMgQ29tcG9uZW50PGFueSxhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVXNlcklucHV0ID0gdGhpcy5oYW5kbGVVc2VySW5wdXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGhhbmRsZVVzZXJJbnB1dChlKSB7XHJcbiAgICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBvbkNoYW5nZShlKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKDxkaXY+PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPHNwYW4+QW5udWFsIEhvdXNlaG9sZDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIEluY29tZSBBY2NvdW50IEZyb206XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5jb21lQWNjb3VudFNhbGFyeVwiPlNhbGFyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaW5jb21lQWNjb3VudFNhbGFyeVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaW5jb21lQWNjb3VudFNhbGFyeX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzb2NpYWxTZWN1cml0eVwiPlNvY2lhbCBTZWN1cml0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwic29jaWFsU2VjdXJpdHlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLnNvY2lhbFNlY3VyaXR5fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBlbnNpb25CZW5lZml0c1wiPlBlbnNpb24gQmVuZWZpdHM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBlbnNpb25CZW5lZml0c1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMucGVuc2lvbkJlbmVmaXRzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnZlc3RtZW50SW5jb21lXCI+SW52ZXN0bWVudCBJbmNvbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImludmVzdG1lbnRJbmNvbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmludmVzdG1lbnRJbmNvbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicm1kXCI+Uk1EPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJybWRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLnJtZH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdGhlclwiPk90aGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJvdGhlclwiIG1pbj1cIjBcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLm90aGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleHBlbnNlc0Ftb3VudFwiPkV4cGVuc2VzIEFtb3VudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZXhwZW5zZXNBbW91bnRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmV4cGVuc2VzQW1vdW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5jb21lU291cmNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L0luY29tZVNvdXJjZUNvbXBvbmVudC50c3giLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvUHJvc3BlY3RFZGl0Q29udGFpbmVyLmNzc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY29tYmluZVJlZHVjZXJzLCBHZW5lcmljU3RvcmVFbmhhbmNlciwgU3RvcmUsIFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3IsIFJlZHVjZXJzTWFwT2JqZWN0IH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0ICogYXMgU3RvcmVNb2R1bGUgZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIHJlZHVjZXJzIH0gZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuaW1wb3J0IHsgUHJvc3BlY3RNaWRkbGVXYXJlLCBlcnJvckhhbmRsZXIgfSBmcm9tICcuL2FwaS9Qcm9zcGVjdC9Qcm9zcGVjdEFwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShoaXN0b3J5OiBIaXN0b3J5LCBpbml0aWFsU3RhdGU/OiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxyXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcclxuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxyXG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xyXG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXHJcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rLCBlcnJvckhhbmRsZXIsIFByb3NwZWN0TWlkZGxlV2FyZSwgcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KSksXHJcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogPFM+KG5leHQ6IFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3I8Uz4pID0+IG5leHRcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihyZWR1Y2Vycyk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgU3RvcmU8QXBwbGljYXRpb25TdGF0ZT47XHJcblxyXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIFN0b3JlTW9kdWxlPignLi9zdG9yZScpO1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2VyczogUmVkdWNlcnNNYXBPYmplY3QpIHtcclxuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwbGljYXRpb25TdGF0ZT4oT2JqZWN0LmFzc2lnbih7fSwgYWxsUmVkdWNlcnMsIHsgcm91dGluZzogcm91dGVyUmVkdWNlciB9KSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZ3VyZVN0b3JlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMTQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL2ltcG9ydCAqIGFzIFdlYXRoZXJGb3JlY2FzdHMgZnJvbSAnLi9XZWF0aGVyRm9yZWNhc3RzJztcclxuLy9pbXBvcnQgKiBhcyBDb3VudGVyIGZyb20gJy4vQ291bnRlcic7XHJcblxyXG5pbXBvcnQgKiBhcyBMb2FkZXIgZnJvbSAnLi9Mb2FkZXInO1xyXG5pbXBvcnQgKiBhcyBQcm9zcGVjdCBmcm9tICcuL1Byb3NwZWN0JztcclxuaW1wb3J0ICogYXMgU3RhdGVzIGZyb20gJy4vU3RhdGVzJztcclxuaW1wb3J0ICogYXMgVmFsaWRhdGlvbk1lc3NhZ2UgZnJvbSAnLi9WYWxpZGF0aW9uTWVzc2FnZSc7XHJcblxyXG4vLy8vIFRoZSB0b3AtbGV2ZWwgc3RhdGUgb2JqZWN0XHJcbi8vZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcclxuLy8gICAgY291bnRlcjogQ291bnRlci5Db3VudGVyU3RhdGU7XHJcbi8vICAgIHdlYXRoZXJGb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdHMuV2VhdGhlckZvcmVjYXN0c1N0YXRlO1xyXG4vL31cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gICAgUHJvc3BlY3REZXRhaWw6IFByb3NwZWN0LlByb3NwZWN0U3RhdGU7XHJcbiAgICBpc0xvYWRpbmc6IExvYWRlci5Mb2FkZXJTdGF0ZTtcclxuICAgIHN0YXRlczogU3RhdGVzLlN0YXRlc1N0YXRlO1xyXG4gICAgZXJyb3JzOiBWYWxpZGF0aW9uTWVzc2FnZS5WYWxpZGF0aW9ObWVzc2FnZVN0YXRlW107XHJcbiAgICBhZ2VudENvZGU6IFByb3NwZWN0LkFnZW50Q29kZVN0YXRlO1xyXG59XHJcbi8vIFdoZW5ldmVyIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLCBSZWR1eCB3aWxsIHVwZGF0ZSBlYWNoIHRvcC1sZXZlbCBhcHBsaWNhdGlvbiBzdGF0ZSBwcm9wZXJ0eSB1c2luZ1xyXG4vLyB0aGUgcmVkdWNlciB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBuYW1lcyBtYXRjaCBleGFjdGx5LCBhbmQgdGhhdCB0aGUgcmVkdWNlclxyXG4vLyBhY3RzIG9uIHRoZSBjb3JyZXNwb25kaW5nIEFwcGxpY2F0aW9uU3RhdGUgcHJvcGVydHkgdHlwZS5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xyXG4gICAgaXNMb2FkaW5nOiBMb2FkZXIucmVkdWNlcixcclxuICAgIHN0YXRlczogU3RhdGVzLnJlZHVjZXIsXHJcbiAgICBQcm9zcGVjdERldGFpbDogUHJvc3BlY3QucmVkdWNlcixcclxuICAgIGVycm9yczogVmFsaWRhdGlvbk1lc3NhZ2UucmVkdWNlcixcclxuICAgIGFnZW50Q29kZTogUHJvc3BlY3QuYWdlbnRDb2RlcmVkdWNlclxyXG59O1xyXG5cclxuLy8gVGhpcyB0eXBlIGNhbiBiZSB1c2VkIGFzIGEgaGludCBvbiBhY3Rpb24gY3JlYXRvcnMgc28gdGhhdCBpdHMgJ2Rpc3BhdGNoJyBhbmQgJ2dldFN0YXRlJyBwYXJhbXMgYXJlXHJcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcclxuICAgIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcGxpY2F0aW9uU3RhdGUpOiB2b2lkO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9pbmRleC50cyIsImltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb25UeXBlcydcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9ObWVzc2FnZVN0YXRlIHtcclxuICAgIGVycm9yczogRXJyb3JNZXNzYWdlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yTWVzc2FnZSB7XHJcbiAgICBmaWVsZE5hbWU6IHN0cmluZztcclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuaW50ZXJmYWNlIEFkZEVycm9yTWVzc2FnZSB7IHR5cGU6ICdBRERfRVJST1JfTUVTU0FHRScsIGZpZWxkTmFtZSwgZXJyb3JNZXNzYWdlIH1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIGFkZEVycm9yTWVzc2FnZTogKGZpZWxkTmFtZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U6IHN0cmluZykgPT4gPEFkZEVycm9yTWVzc2FnZT57IHR5cGU6ICdBRERfRVJST1JfTUVTU0FHRScgLGZpZWxkTmFtZSwgZXJyb3JNZXNzYWdlfSxcclxuICAgXHJcbn07XHJcbnR5cGUgS25vd25BY3Rpb24gPSBBZGRFcnJvck1lc3NhZ2VcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFZhbGlkYXRpb05tZXNzYWdlU3RhdGVbXT4gPSAoc3RhdGU6IFZhbGlkYXRpb05tZXNzYWdlU3RhdGVbXSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgY2FzZSBcIkFERF9FUlJPUl9NRVNTQUdFXCI6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNFeGlzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld29iaiA9IHN0YXRlLm1hcCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5maWVsZE5hbWUgPT09IGFjdGlvbi5maWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNFeGlzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBlcnJvciwgeyBlcnJvck1lc3NhZ2U6IGFjdGlvbi5lcnJvck1lc3NhZ2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzRXhpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiBhY3Rpb24uZmllbGROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBhY3Rpb24uZXJyb3JNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3b2JqO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogYWN0aW9uLmZpZWxkTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBhY3Rpb24uZXJyb3JNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgT2JqZWN0LmFzc2lnbih7fSwgbnVsbCk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9WYWxpZGF0aW9uTWVzc2FnZS50cyIsIi8vaW1wb3J0ICogYXMgUHJvc3BlY3RBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9Qcm9zcGVjdEFjdGlvbic7XHJcbmltcG9ydCAgQXBpVXJsICBmcm9tICcuLi9hcGlVcmwuZGV2JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBhZ2lsZW5ldHVybCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcbi8vaW1wb3J0ICogYXMgVmFsaWRhdGlvbk1lc3NhZ2UgZnJvbSAnLi4vLi4vYWN0aW9ucy9WYWxpZGF0aW9uTWVzc2FnZUFjdGlvbic7XHJcbmltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4uLy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XHJcbmltcG9ydCAqIGFzIExvYWRlckFjdGlvbiBmcm9tICcuLi8uLi9zdG9yZS9Mb2FkZXInO1xyXG5pbXBvcnQgKiBhcyBWYWxpZGF0aW9uTWVzc2FnZUFjdGlvbiBmcm9tICcuLi8uLi9zdG9yZS92YWxpZGF0aW9uTWVzc2FnZSc7XHJcbmltcG9ydCAqIGFzIFByb3NwZWN0QWN0aW9uIGZyb20gJy4uLy4uL3N0b3JlL1Byb3NwZWN0JztcclxuaW1wb3J0ICogYXMgU3RhdGVBY3Rpb24gZnJvbSAnLi4vLi4vc3RvcmUvU3RhdGVzJztcclxuXHJcbi8vaW1wb3J0IGVycm9yaGFuZGxlciBmcm9tICdlcnJvcmhhbmRsZXInO1xyXG4vL2ltcG9ydCBjb25uZWN0IGZyb20gJ2Nvbm5lY3QnO1xyXG5pbnRlcmZhY2UgUHJvc3BlY3R7XHJcbkZpcnN0TmFtZTpzdHJpbmc7XHJcbkxhc3ROYW1lOnN0cmluZztcclxuU3NuOnN0cmluZztcclxuSWQ6bnVtYmVyO1xyXG5cclxufVxyXG5jb25zdCBhZHZpc29yVXJsID0gQXBpVXJsLmFkdmlzb3JVcmw7XHJcbmNvbnN0IHBhcnRpY2lwYW50VXJsID0gQXBpVXJsLnBhcnRpY2lwYW50VXJsO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb3NwZWN0TWlkZGxlV2FyZSA9IChzdG9yZTphbnkpID0+IChuZXh0OmFueSkgPT4gKGFjdGlvbjphbnkpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFjdGlvblR5cGVzLkdFVF9QUk9TUEVDVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQmVnaW4oKSk7XHJcbiAgICAgICAgICAgIG5leHQoTG9hZGVyQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmxvYWRlckJlZ2luKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goYCR7cGFydGljaXBhbnRVcmx9cHJvc3BlY3QvJHthY3Rpb24uaWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOmFueSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvc3BlY3QgPSB7fSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmZpcnN0TmFtZSA9IGRhdGEuRmlyc3ROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5sYXN0TmFtZSA9IGRhdGEuTGFzdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnNzbiA9IGRhdGEuU3NuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmNsaWVudFByb3NwZWN0SWQgPSBkYXRhLklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5JZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvbWVBZGRyZXNzU3RyZWV0MSwgaG9tZUFkZHJlc3NTdHJlZXQyLCBob21lQWRkcmVzc1N0cmVldDMsIGhvbWVBZGRyZXNzWmlwQ29kZSwgaG9tZUFkZHJlc3NTdGF0ZSwgaG9tZUFkZHJlc3NDaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFpbGluZ0FkZHJlc3NTdHJlZXQxLCBtYWlsaW5nQWRkcmVzc1N0cmVldDIsIG1haWxpbmdBZGRyZXNzU3RyZWV0MywgbWFpbGluZ0FkZHJlc3NaaXBDb2RlLCBtYWlsaW5nQWRkcmVzc1N0YXRlLCBtYWlsaW5nQWRkcmVzc0NpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLkFkZHJlc3NlcyAhPT0gdW5kZWZpbmVkICYmIGRhdGEuQWRkcmVzc2VzICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLkFkZHJlc3Nlc1tcIiR2YWx1ZXNcIl0uZm9yRWFjaChmdW5jdGlvbiAoYWRkcmVzczphbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RhdGEuQWRkcmVzc2VzLmZvckVhY2goZnVuY3Rpb24gKGFkZHJlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkcmVzcy5BZGRyZXNzVHlwZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lQWRkcmVzc1N0cmVldDEgPSBhZGRyZXNzLlN0cmVldDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzU3RyZWV0MiA9IGFkZHJlc3MuU3RyZWV0MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZUFkZHJlc3NTdHJlZXQzID0gYWRkcmVzcy5TdHJlZXQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lQWRkcmVzc1N0YXRlID0gYWRkcmVzcy5TdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZUFkZHJlc3NDaXR5ID0gYWRkcmVzcy5DaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hvbWVBZGRyZXNzQ291bnRyeSA9IGFkZHJlc3MuQ291bnRyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZUFkZHJlc3NaaXBDb2RlID0gYWRkcmVzcy5aaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFkZHJlc3MuQWRkcmVzc1R5cGUgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3NTdHJlZXQxID0gYWRkcmVzcy5TdHJlZXQxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzc1N0cmVldDIgPSBhZGRyZXNzLlN0cmVldDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzU3RyZWV0MyA9IGFkZHJlc3MuU3RyZWV0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3NTdGF0ZSA9IGFkZHJlc3MuU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzQ2l0eSA9IGFkZHJlc3MuQ2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYWlsaW5nQWRkcmVzc0NvdW50cnkgPSBhZGRyZXNzLkNvdW50cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzWmlwQ29kZSA9IGFkZHJlc3MuWmlwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvbWVQaG9uZU51bWJlcjsgbGV0IHdvcmtQaG9uZU51bWJlcjsgbGV0IG90aGVyUGhvbmVOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLlBob25lTnVtYmVycyAhPT0gbnVsbCAmJiBkYXRhLlBob25lTnVtYmVycyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLlBob25lTnVtYmVyc1tcIiR2YWx1ZXNcIl0uZm9yRWFjaChmdW5jdGlvbiAocGhvbmU6YW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhLlBob25lTnVtYmVycy5mb3JFYWNoKChwaG9uZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwaG9uZS5QaG9uZVR5cGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZVBob25lTnVtYmVyID0gcGhvbmUuTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwaG9uZS5QaG9uZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd29ya1Bob25lTnVtYmVyID0gcGhvbmUuTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwaG9uZS5QaG9uZVR5cGUgPT09IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJQaG9uZU51bWJlciA9IHBob25lLk51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc1JlZmVycmFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLlJlZmVycmFsRGF0ZSAhPT0gbnVsbCAmJiBkYXRhLlJlZmVycmFsRGF0ZSAhPT0gdW5kZWZpbmVkICYmIG5ldyBEYXRlKGRhdGEuUmVmZXJyYWxEYXRlLnRvU3RyaW5nKCkpLmdldEZ1bGxZZWFyKCkgPiAxOTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlZmVycmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC50aXRsZSA9IGRhdGEuVGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm1pZGRsZUluaXRpYWwgPSBkYXRhLk1pZGRsZUluaXRpYWwgIT09IG51bGwgPyBkYXRhLk1pZGRsZUluaXRpYWwgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZGF0ZU9mQmlydGggPSBkYXRhLkRhdGVPZkJpcnRoICE9PSBudWxsICYmIGRhdGEuRGF0ZU9mQmlydGggIT09IHVuZGVmaW5lZCA/IG5ldyBEYXRlKGRhdGEuRGF0ZU9mQmlydGgudG9TdHJpbmcoKSkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmdlbmRlciA9IGRhdGEuR2VuZGVyICE9PSBudWxsICYmIGRhdGEuR2VuZGVyICE9PSB1bmRlZmluZWQgPyBkYXRhLkdlbmRlci50b1N0cmluZygpIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnVzQ2l0aXplbiA9IGRhdGEuVXNDaXRpemVuRmxhZyAhPT0gbnVsbCAmJiBkYXRhLlVzQ2l0aXplbkZsYWcgIT09IHVuZGVmaW5lZCA/IGRhdGEuVXNDaXRpemVuRmxhZy50b1N0cmluZygpIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm1hcml0YWxTdGF0dXMgPSBkYXRhLk1hcml0YWxTdGF0dXMgIT09IG51bGwgJiYgZGF0YS5NYXJpdGFsU3RhdHVzICE9PSB1bmRlZmluZWQgPyBkYXRhLk1hcml0YWxTdGF0dXMudG9TdHJpbmcoKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5ob21lQWRkcmVzc0xpbmUxID0gaG9tZUFkZHJlc3NTdHJlZXQxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5ob21lQWRkcmVzc0xpbmUyID0gaG9tZUFkZHJlc3NTdHJlZXQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5ob21lQWRkcmVzc0xpbmUzID0gaG9tZUFkZHJlc3NTdHJlZXQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5ob21lQWRkcmVzc0NpdHkgPSBob21lQWRkcmVzc0NpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhvbWVBZGRyZXNzU3RhdGUgPSBob21lQWRkcmVzc1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5ob21lQWRkcmVzc1ppcENvZGUgPSBob21lQWRkcmVzc1ppcENvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzTGluZTEgPSBtYWlsaW5nQWRkcmVzc1N0cmVldDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzTGluZTIgPSBtYWlsaW5nQWRkcmVzc1N0cmVldDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzTGluZTMgPSBtYWlsaW5nQWRkcmVzc1N0cmVldDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzQ2l0eSA9IG1haWxpbmdBZGRyZXNzQ2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NTdGF0ZSA9IG1haWxpbmdBZGRyZXNzU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzWmlwQ29kZSA9IG1haWxpbmdBZGRyZXNzWmlwQ29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaG9tZVBob25lID0gaG9tZVBob25lTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC53b3JrUGhvbmUgPSB3b3JrUGhvbmVOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm90aGVyUGhvbmUgPSBvdGhlclBob25lTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5yZWZlcnJhbCA9IGlzUmVmZXJyYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmVtYWlsQWRkcmVzcyA9IGRhdGEuRW1haWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlICE9PSBudWxsICYmIGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QucHJldmlvdXNGdW5kcyA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuSW52ZXN0bWVudEV4cGVyaWVuY2VfRmxhZyAhPT0gdW5kZWZpbmVkICYmIGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuSW52ZXN0bWVudEV4cGVyaWVuY2VfRmxhZyAhPT0gbnVsbCA/IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuSW52ZXN0bWVudEV4cGVyaWVuY2VfRmxhZy50b1N0cmluZygpIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5GSU5SQSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRmlucmFfRmxhZyAhPT0gdW5kZWZpbmVkICYmIGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRmlucmFfRmxhZyAhPT0gbnVsbCA/IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRmlucmFfRmxhZy50b1N0cmluZygpIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pbnZlc3RtZW50T2JqZWN0aXZlID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5JbnZlc3RtZW50T2JqZWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3Qucmlza1Byb2ZpbGUgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLlJpc2tQcm9maWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2UgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkhvdXNlaG9sZEluY29tZVJhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubmV0V29ydGhSYW5nZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuTmV0V29ydGhSYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmxpZmVJbnN1cmFuY2VSYW5nZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuTGlmZUluc3VyYW5jZVJhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QudGF4QnJhY2tldCA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuVGF4QnJhY2tldE51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmRlcGVuZGVudHNObyA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRGVwZWRlbnROdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5hZ2VzID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5BZ2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuY3VycmVudEVtcGxveWVyID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5DdXJyZW50RW1wbG95ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5lbXBsb3ltZW50U3RhdHVzID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5FbXBsb3ltZW50U3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3Qub2NjdXBhdGlvbiA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuT2NjdXBhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmVtcGxveWVyQWRkcmVzcyA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRW1wbG95ZXJBZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZW1wbG95ZXJDaXR5ID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5FbXBsb3llckNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5lbXBsb3llclN0YXRlID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5FbXBsb3llclN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZW1wbG95ZXJaaXBDb2RlID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5FbXBsb3llclppcENvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5lbXBsb3llclNhbGFyeSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuU2FsYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaGlyZURhdGUgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkhpcmVEYXRlICE9PSBudWxsICYmIGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuSGlyZURhdGUgIT09IHVuZGVmaW5lZCA/IG5ldyBEYXRlKGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuSGlyZURhdGUudG9TdHJpbmcoKSkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5leHBlY3RlZEFubnVpdHlEYXRlID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5FeHBlY3RlZEFubnVpdHlEYXRlICE9PSBudWxsICYmIGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRXhwZWN0ZWRBbm51aXR5RGF0ZSAhPT0gdW5kZWZpbmVkID8gbmV3IERhdGUoZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5FeHBlY3RlZEFubnVpdHlEYXRlLnRvU3RyaW5nKCkpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaXNJbnZlc3RvclByb2ZpbGVOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmlzSW52ZXN0b3JQcm9maWxlTmV3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIGRhdGEuUHJvc3BlY3RJbmNvbWVTb3VyY2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmluY29tZUFjY291bnRTYWxhcnkgPSBkYXRhLlByb3NwZWN0SW5jb21lU291cmNlLlNhbGFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnNvY2lhbFNlY3VyaXR5ID0gZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZS5Tb2NpYWxTZWN1cml0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnBlbnNpb25CZW5lZml0cyA9IGRhdGEuUHJvc3BlY3RJbmNvbWVTb3VyY2UuUGVuc2lvbkJlbmVmaXRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaW52ZXN0bWVudEluY29tZSA9IGRhdGEuUHJvc3BlY3RJbmNvbWVTb3VyY2UuSW52ZXN0bWVudEluY29tZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnJtZCA9IGRhdGEuUHJvc3BlY3RJbmNvbWVTb3VyY2UuUk1EO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3Qub3RoZXIgPSBkYXRhLlByb3NwZWN0SW5jb21lU291cmNlLk90aGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZXhwZW5zZXNBbW91bnQgPSBkYXRhLlByb3NwZWN0SW5jb21lU291cmNlLkV4cGVuc2VzQW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaXNJbmNvbWVTb3VyY2VOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmlzSW5jb21lU291cmNlTmV3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24uZmV0Y2hQcm9zcGVjdFN1Y2Nlc3MocHJvc3BlY3QpKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV4dChQcm9zcGVjdEFjdGlvbi5sb2FkZXJDb21wbGV0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KFByb3NwZWN0QWN0aW9uLmFjdGlvbkNyZWF0b3JzLmZldGNoUHJvc3BlY3RTdWNjZXNzKHByb3NwZWN0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChMb2FkZXJBY3Rpb24uYWN0aW9uQ3JlYXRvcnMubG9hZGVyRW5kKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBuZXh0KFZhbGlkYXRpb25NZXNzYWdlLkFkZEVycm9yTWVzc2FnZSgnJywgXCJVbmFibGUgdG8gZ2V0IHByb3NwZWN0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24uZmV0Y2hQcm9zcGVjdEZhaWxlZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQ29tcGxldGUoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoVmFsaWRhdGlvbk1lc3NhZ2VBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuYWRkRXJyb3JNZXNzYWdlKCcnLCBcIlVuYWJsZSB0byBnZXQgcHJvc3BlY3RcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoUHJvc3BlY3RBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuZmV0Y2hQcm9zcGVjdEZhaWxlZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KExvYWRlckFjdGlvbi5hY3Rpb25DcmVhdG9ycy5sb2FkZXJFbmQoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5HRVRfU1RBVEVTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIC8vbmV4dChQcm9zcGVjdEFjdGlvbi5sb2FkZXJCZWdpbigpKTtcclxuICAgICAgICAgICAgbmV4dChMb2FkZXJBY3Rpb24uYWN0aW9uQ3JlYXRvcnMubG9hZGVyQmVnaW4oKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChgJHthZHZpc29yVXJsfWFkdmlzb3Ivc3RhdGVzYClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV4dChQcm9zcGVjdEFjdGlvbi5mZXRjaFN0YXRlc1N1Y2Nlc3MoanNvbltcIiR2YWx1ZXNcIl0pKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV4dChQcm9zcGVjdEFjdGlvbi5sb2FkZXJDb21wbGV0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KFN0YXRlQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmZldGNoU3RhdGVTdWNjZXNzKGpzb25bXCIkdmFsdWVzXCJdKSlcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KExvYWRlckFjdGlvbi5hY3Rpb25DcmVhdG9ycy5sb2FkZXJFbmQoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3Qgc3RhdGVzIGZhaWxlZCcsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQ29tcGxldGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFZhbGlkYXRpb25NZXNzYWdlLkFkZEVycm9yTWVzc2FnZSgnJywgXCJVbmFibGUgdG8gZ2V0IHN0YXRlc1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmZldGNoU3RhdGVzRmFpbGVkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoVmFsaWRhdGlvbk1lc3NhZ2VBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuYWRkRXJyb3JNZXNzYWdlKCcnLCBcIlVuYWJsZSB0byBnZXQgc3RhdGVzXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KFN0YXRlQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmZldGNoU3RhdGVzRmFpbGVkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoTG9hZGVyQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmxvYWRlckVuZCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy90aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2JyZWFrO1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuVVBEQVRFX1BST1NQRUNUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBwcm9zcGVjdCA9IHN0YXRlLlByb3NwZWN0RGV0YWlsO1xyXG4gICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQmVnaW4oKSk7XHJcbiAgICAgICAgICAgIG5leHQoTG9hZGVyQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmxvYWRlckJlZ2luKCkpO1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRGb3JtID0gdHJ1ZSBhcyBhbnk7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZXJyb3IsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3JNZXNzYWdlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHZhbGlkRm9ybSk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZEZvcm0gIT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwbGFpblNTTiA9IHByb3NwZWN0LnNzbjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYWluU1NOKTtcclxuICAgICAgICAgICAgICAgIHBsYWluU1NOID0gcGxhaW5TU04uc3BsaXQoJy0nKS5qb2luKCcnKS5zcGxpdCgnXycpLmpvaW4oJycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZWZlcnJhbDtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9zcGVjdC5yZWZlcnJhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZmVycmFsID0gbmV3IERhdGUoKS50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGhvbWVBZGRyZXNzID0ge30gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgaG9tZUFkZHJlc3MuU3RyZWV0MSA9IHByb3NwZWN0LmhvbWVBZGRyZXNzTGluZTE7XHJcbiAgICAgICAgICAgICAgICBob21lQWRkcmVzcy5TdHJlZXQyID0gcHJvc3BlY3QuaG9tZUFkZHJlc3NMaW5lMjtcclxuICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzLlN0cmVldDMgPSBwcm9zcGVjdC5ob21lQWRkcmVzc0xpbmUzO1xyXG4gICAgICAgICAgICAgICAgaG9tZUFkZHJlc3MuQ2l0eSA9IHByb3NwZWN0LmhvbWVBZGRyZXNzQ2l0eTtcclxuICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzLlN0YXRlID0gcHJvc3BlY3QuaG9tZUFkZHJlc3NTdGF0ZTtcclxuICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzLlppcCA9IHByb3NwZWN0LmhvbWVBZGRyZXNzWmlwQ29kZTtcclxuICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzLkFkZHJlc3NUeXBlID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzID0gW10gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzcy5wdXNoKGhvbWVBZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgIHZhciBtYWlsaW5nQWRkcmVzcyA9IHt9IGFzIGFueTtcclxuICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzLlN0cmVldDEgPSBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0xpbmUxO1xyXG4gICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3MuU3RyZWV0MiA9IHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzTGluZTI7XHJcbiAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzcy5TdHJlZXQzID0gcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NMaW5lMztcclxuICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzLkNpdHkgPSBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0NpdHk7XHJcbiAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzcy5TdGF0ZSA9IHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzU3RhdGU7XHJcbiAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzcy5aaXAgPSBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc1ppcENvZGU7XHJcbiAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzcy5BZGRyZXNzVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzLnB1c2gobWFpbGluZ0FkZHJlc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwaG9uZU51bWJlcnMgPSBbXSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaG9tZVBob25lID0ge30gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgaG9tZVBob25lLk51bWJlciA9IHByb3NwZWN0LmhvbWVQaG9uZSAhPT0gdW5kZWZpbmVkID8gcHJvc3BlY3QuaG9tZVBob25lLnNwbGl0KCctJykuam9pbignJykuc3BsaXQoJygnKS5qb2luKCcnKS5zcGxpdCgnKScpLmpvaW4oJycpLnNwbGl0KCdfJykuam9pbignJykgOiAnJztcclxuICAgICAgICAgICAgICAgIGhvbWVQaG9uZS5QaG9uZVR5cGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXJzLnB1c2goaG9tZVBob25lKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgd29ya1Bob25lID0ge30gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgd29ya1Bob25lLk51bWJlciA9IHByb3NwZWN0LndvcmtQaG9uZSAhPT0gdW5kZWZpbmVkID8gcHJvc3BlY3Qud29ya1Bob25lLnNwbGl0KCctJykuam9pbignJykuc3BsaXQoJygnKS5qb2luKCcnKS5zcGxpdCgnKScpLmpvaW4oJycpLnNwbGl0KCdfJykuam9pbignJykgOiAnJztcclxuICAgICAgICAgICAgICAgIHdvcmtQaG9uZS5QaG9uZVR5cGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXJzLnB1c2god29ya1Bob25lKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb3RoZXJQaG9uZSA9IHt9IGFzIGFueTtcclxuICAgICAgICAgICAgICAgIG90aGVyUGhvbmUuTnVtYmVyID0gcHJvc3BlY3Qub3RoZXJQaG9uZSAhPT0gdW5kZWZpbmVkID8gcHJvc3BlY3Qub3RoZXJQaG9uZS5zcGxpdCgnLScpLmpvaW4oJycpLnNwbGl0KCcoJykuam9pbignJykuc3BsaXQoJyknKS5qb2luKCcnKS5zcGxpdCgnXycpLmpvaW4oJycpIDogJyc7XHJcbiAgICAgICAgICAgICAgICBvdGhlclBob25lLlBob25lVHlwZSA9IDU7XHJcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcnMucHVzaChvdGhlclBob25lKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5jb21lU291cmNlID0ge30gIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGluY29tZVNvdXJjZS5Tb2NpYWxTZWN1cml0eSA9IHByb3NwZWN0LnNvY2lhbFNlY3VyaXR5O1xyXG4gICAgICAgICAgICAgICAgaW5jb21lU291cmNlLlNhbGFyeSA9IHByb3NwZWN0LmluY29tZUFjY291bnRTYWxhcnk7XHJcbiAgICAgICAgICAgICAgICBpbmNvbWVTb3VyY2UuUGVuc2lvbkJlbmVmaXRzID0gcHJvc3BlY3QucGVuc2lvbkJlbmVmaXRzO1xyXG4gICAgICAgICAgICAgICAgaW5jb21lU291cmNlLkludmVzdG1lbnRJbmNvbWUgPSBwcm9zcGVjdC5pbnZlc3RtZW50SW5jb21lO1xyXG4gICAgICAgICAgICAgICAgaW5jb21lU291cmNlLlJNRCA9IHByb3NwZWN0LnJtZDtcclxuICAgICAgICAgICAgICAgIGluY29tZVNvdXJjZS5PdGhlciA9IHByb3NwZWN0Lm90aGVyO1xyXG4gICAgICAgICAgICAgICAgaW5jb21lU291cmNlLkV4cGVuc2VzQW1vdW50ID0gcHJvc3BlY3QuZXhwZW5zZXNBbW91bnQ7XHJcbiAgICAgICAgICAgICAgICBpbmNvbWVTb3VyY2UuQ2xpZW50UHJvc3BlY3RJZCA9IHByb3NwZWN0LmNsaWVudFByb3NwZWN0SWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGludmVzdG9yUHJvZmlsZSA9IHt9IGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5JbnZlc3RtZW50RXhwZXJpZW5jZV9GbGFnID0gcHJvc3BlY3QucHJldmlvdXNGdW5kcztcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5GaW5yYV9GbGFnID0gcHJvc3BlY3QuRklOUkE7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuSW52ZXN0bWVudE9iamVjdGl2ZSA9IHByb3NwZWN0LmludmVzdG1lbnRPYmplY3RpdmU7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuUmlza1Byb2ZpbGUgPSBwcm9zcGVjdC5yaXNrUHJvZmlsZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5Ib3VzZWhvbGRJbmNvbWVSYW5nZSA9IHByb3NwZWN0LmFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLk5ldFdvcnRoUmFuZ2UgPSBwcm9zcGVjdC5uZXRXb3J0aFJhbmdlO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkxpZmVJbnN1cmFuY2VSYW5nZSA9IHByb3NwZWN0LmxpZmVJbnN1cmFuY2VSYW5nZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5UYXhCcmFja2V0TnVtYmVyID0gcHJvc3BlY3QudGF4QnJhY2tldDtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5EZXBlZGVudE51bWJlciA9IHByb3NwZWN0LmRlcGVuZGVudHNObztcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5BZ2VzID0gcHJvc3BlY3QuYWdlcztcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5DdXJyZW50RW1wbG95ZXIgPSBwcm9zcGVjdC5jdXJyZW50RW1wbG95ZXI7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRW1wbG95bWVudFN0YXR1cyA9IHByb3NwZWN0LmVtcGxveW1lbnRTdGF0dXM7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuT2NjdXBhdGlvbiA9IHByb3NwZWN0Lm9jY3VwYXRpb247XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRW1wbG95ZXJBZGRyZXNzID0gcHJvc3BlY3QuZW1wbG95ZXJBZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkVtcGxveWVyQ2l0eSA9IHByb3NwZWN0LmVtcGxveWVyQ2l0eTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5FbXBsb3llclN0YXRlID0gcHJvc3BlY3QuZW1wbG95ZXJTdGF0ZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5FbXBsb3llclppcENvZGUgPSBwcm9zcGVjdC5lbXBsb3llclppcENvZGU7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuSGlyZURhdGUgPSBwcm9zcGVjdC5oaXJlRGF0ZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5FeHBlY3RlZEFubnVpdHlEYXRlID0gcHJvc3BlY3QuZXhwZWN0ZWRBbm51aXR5RGF0ZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5TYWxhcnkgPSBwcm9zcGVjdC5lbXBsb3llclNhbGFyeTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5DbGllbnRJZCA9IHByb3NwZWN0LmNsaWVudFByb3NwZWN0SWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb3NwZWN0RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogcHJvc3BlY3QuY2xpZW50UHJvc3BlY3RJZCwgRmlyc3ROYW1lOiBwcm9zcGVjdC5maXJzdE5hbWUsIFRpdGxlOiBwcm9zcGVjdC50aXRsZSwgTWlkZGxlSW5pdGlhbDogcHJvc3BlY3QubWlkZGxlSW5pdGlhbCxcclxuICAgICAgICAgICAgICAgICAgICBMYXN0TmFtZTogcHJvc3BlY3QubGFzdE5hbWUsIFNzbjogcGxhaW5TU04sIERhdGVPZkJpcnRoOiBwcm9zcGVjdC5kYXRlT2ZCaXJ0aCwgTWFyaXRhbFN0YXR1czogcHJvc3BlY3QubWFyaXRhbFN0YXR1cywgUmVmZXJyYWxEYXRlOiByZWZlcnJhbCwgQWRkcmVzc2VzOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIFBob25lTnVtYmVyczogcGhvbmVOdW1iZXJzLCBHZW5kZXI6IHByb3NwZWN0LmdlbmRlciwgRW1haWw6IHByb3NwZWN0LmVtYWlsQWRkcmVzcywgUHJvc3BlY3RJbmNvbWVTb3VyY2U6IGluY29tZVNvdXJjZSxcclxuICAgICAgICAgICAgICAgICAgICBQcm9zcGVjdEludmVzdG9yUHJvZmlsZTogaW52ZXN0b3JQcm9maWxlLCBVc0NpdGl6ZW5GbGFnOiBwcm9zcGVjdC51c0NpdGl6ZW5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaChgJHtwYXJ0aWNpcGFudFVybH1wcm9zcGVjdC91cGRhdGVgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvc3BlY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbmV4dChQcm9zcGVjdEFjdGlvbi5sb2FkZXJDb21wbGV0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dChMb2FkZXJBY3Rpb24uYWN0aW9uQ3JlYXRvcnMubG9hZGVyRW5kKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5sb2NhdGlvbiA9IGFnaWxlbmV0dXJsICsgXCIvRGFzaGJvYXJkL0Fkdmlzb3IvQ2xpZW50UHJvc3BlY3RMaXN0aW5nLmFzcHg/YWdlbnRJZD0wMzQ5OVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL25leHQoVmFsaWRhdGlvbk1lc3NhZ2UuQWRkRXJyb3JNZXNzYWdlKCcnLCBcIlVuYWJsZSB0byB1cGRhdGUgcHJvc3BlY3RcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQ29tcGxldGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoVmFsaWRhdGlvbk1lc3NhZ2VBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuYWRkRXJyb3JNZXNzYWdlKCcnLCBcIlVuYWJsZSB0byB1cGRhdGUgcHJvc3BlY3RcIikpOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0KExvYWRlckFjdGlvbi5hY3Rpb25DcmVhdG9ycy5sb2FkZXJFbmQoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0KFZhbGlkYXRpb25NZXNzYWdlQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZSgnJywgXCJVbmFibGUgdG8gdXBkYXRlIHByb3NwZWN0XCIpKTtcclxuICAgICAgICAgICAgICAgIG5leHQoTG9hZGVyQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmxvYWRlckVuZCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICAgICAgICAgIG5leHQoYWN0aW9uKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGVycm9ySGFuZGxlciA9IHN0YXRlID0+IG5leHQgPT4gYWN0aW9uID0+IHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIG5leHQoYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGNhdWdodFwiKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBpL1Byb3NwZWN0L1Byb3NwZWN0QXBpLnRzIiwiY2xhc3MgQXBpVXJse1xyXG4gICAgc3RhdGljIHBhcnRpY2lwYW50VXJsID0naHR0cHM6Ly9kZXYudmFsaWMuY29tL3JlYWN0L3BhcnRpY2lwYW50c2VydmljZS9hcGkvJztcclxuICAgIHN0YXRpYyBhZHZpc29yVXJsID0naHR0cHM6Ly9kZXYudmFsaWMuY29tL1NlcnZpY2VzL0Fkdmlzb3IvYXBpLyc7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBpVXJsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcGkvYXBpVXJsLmRldi50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE1MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLW5vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uVHlwZXMnXHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvTm1lc3NhZ2VTdGF0ZSB7XHJcbiAgICBlcnJvcnM6IEVycm9yTWVzc2FnZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFcnJvck1lc3NhZ2Uge1xyXG4gICAgZmllbGROYW1lOiBzdHJpbmc7XHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBBZGRFcnJvck1lc3NhZ2UgeyB0eXBlOiAnQUREX0VSUk9SX01FU1NBR0UnLCBmaWVsZE5hbWUsIGVycm9yTWVzc2FnZSB9XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBhZGRFcnJvck1lc3NhZ2U6IChmaWVsZE5hbWU6IHN0cmluZywgZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IDxBZGRFcnJvck1lc3NhZ2U+eyB0eXBlOiAnQUREX0VSUk9SX01FU1NBR0UnICxmaWVsZE5hbWUsIGVycm9yTWVzc2FnZX0sXHJcbiAgIFxyXG59O1xyXG50eXBlIEtub3duQWN0aW9uID0gQWRkRXJyb3JNZXNzYWdlXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxWYWxpZGF0aW9ObWVzc2FnZVN0YXRlW10+ID0gKHN0YXRlOiBWYWxpZGF0aW9ObWVzc2FnZVN0YXRlW10sIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgIGNhc2UgXCJBRERfRVJST1JfTUVTU0FHRVwiOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzRXhpc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdvYmogPSBzdGF0ZS5tYXAoKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZmllbGROYW1lID09PSBhY3Rpb24uZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IsIHsgZXJyb3JNZXNzYWdlOiBhY3Rpb24uZXJyb3JNZXNzYWdlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0V4aXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogYWN0aW9uLmZpZWxkTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogYWN0aW9uLmVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld29iajtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IGFjdGlvbi5maWVsZE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogYWN0aW9uLmVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IE9iamVjdC5hc3NpZ24oe30sIG51bGwpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvdmFsaWRhdGlvbk1lc3NhZ2UudHMiXSwic291cmNlUm9vdCI6IiJ9