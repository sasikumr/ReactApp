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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInformationContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ProspectComponent_PersonalInformationComponent__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utility_Utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_Prospect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_validationMessage__ = __webpack_require__(8);




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
/* 8 */
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
    return state === undefined ? [] : state;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_input_mask__ = __webpack_require__(27);
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export prospectId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return agileneturl; });
var prospectId = 1963;
var agileneturl = 'https://d4.valic.com/agilenet5/';


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configureStore__ = __webpack_require__(38);









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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(139);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(192);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(180);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(136);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_ProspectContainer_ProspectEditContainer__ = __webpack_require__(20);

//import { Layout } from './components/Layout';
//import Home from './components/Home';
//import FetchData from './components/FetchData';
//import Counter from './components/Counter';

var routes = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__containers_ProspectContainer_ProspectEditContainer__["a" /* default */], null)));


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProspectEditContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_ValicValidationMessageComponent_ValicValidationMessageComponent__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_LoaderComponent_LoaderComponent__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_utility_Utility__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PersonalInformationContainer__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__InvestorProfileContainer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__IncomeSourceContainer__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ProspectEditContainer_css__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ProspectEditContainer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__ProspectEditContainer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_Prospect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_States__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store_Loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_validationMessage__ = __webpack_require__(8);
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TabContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabContainer_css__ = __webpack_require__(22);
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
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_css__ = __webpack_require__(25);
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
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utility_Utility__ = __webpack_require__(6);
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _parseMask = __webpack_require__(28);

var _parseMask2 = _interopRequireDefault(_parseMask);

var _environment = __webpack_require__(30);

var _string = __webpack_require__(31);

var _defer = __webpack_require__(32);

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
/* 28 */
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

var _constants = __webpack_require__(29);

module.exports = exports['default'];

/***/ }),
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestorProfileContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonalInformationContainer__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ProspectComponent_InvestorProfileComponent__ = __webpack_require__(34);



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
/* 34 */
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeSourceContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ProspectComponent_IncomeSourceComponent__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PersonalInformationContainer__ = __webpack_require__(7);



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
/* 36 */
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
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_Prospect_ProspectApi__ = __webpack_require__(43);





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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(37);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(114);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Prospect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__States__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ValidationMessage__ = __webpack_require__(42);
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
/* 42 */
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
    return state === undefined ? [] : state;
};


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProspectMiddleWare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return errorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiUrl_dev__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_ActionTypes__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_Loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_validationMessage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_Prospect__ = __webpack_require__(5);
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
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(151);

/***/ }),
/* 46 */
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


/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2IzZDFiN2JjZjgzMzI0MjEwYTMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL1Byb3NwZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvdXRpbGl0eS9VdGlsaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1Byb3NwZWN0Q29udGFpbmVyL1BlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3ZhbGlkYXRpb25NZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9TdGF0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL0xvYWRlci50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9WYWxpY0lucHV0Q29tcG9uZW50L1ZhbGljSW5wdXRDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jvb3Qtc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1Byb3NwZWN0Q29udGFpbmVyL1Byb3NwZWN0RWRpdENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9UYWJDb250YWluZXJDb21wb25lbnQvVGFiQ29udGFpbmVyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1RhYkNvbnRhaW5lckNvbXBvbmVudC9UYWJDb250YWluZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvVmFsaWNWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudC9WYWxpY1ZhbGlkYXRpb25NZXNzYWdlQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0xvYWRlckNvbXBvbmVudC9Mb2FkZXJDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvTG9hZGVyQ29tcG9uZW50L2xvYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvUGVyc29uYWxJbmZvcm1hdGlvbkNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2xpYi91dGlscy9wYXJzZU1hc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9saWIvdXRpbHMvZW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9saWIvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvSW52ZXN0b3JQcm9maWxlQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L0ludmVzdG9yUHJvZmlsZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvSW5jb21lU291cmNlQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L0luY29tZVNvdXJjZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvUHJvc3BlY3RFZGl0Q29udGFpbmVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL1ZhbGlkYXRpb25NZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvUHJvc3BlY3QvUHJvc3BlY3RBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hcGlVcmwuZGV2LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9BY3Rpb25UeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEscUM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ3lFTyxJQUFNLGNBQWMsR0FBRztJQUMxQixvQkFBb0IsRUFB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBLE9BQU8sRUFBRSxVQUFVLGlEQUFpRDtBQUNwRTtBQUNBOztBQUVBO0FBQ0Esb0M7Ozs7Ozs7QUN6aEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtB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Q0FBd0M7QUFDakMsSUFBTSxrQkFBa0IsR0FBRSxvQkFBb0IsQ0FBQztBQUMvQyxJQUFNLGlCQUFpQixHQUFFLG1CQUFtQixDQUFDO0FBQzdDLElBQU0sa0JBQWtCLEdBQUUsb0JBQW9CLENBQUM7QUFDL0MsSUFBTSxlQUFlLEdBQUUsaUJBQWlCLENBQUM7QUFDekMsSUFBTSw0QkFBNEIsR0FBRyxtQkFBbUIsQ0FBQztBQUN6RCxJQUFNLFlBQVksR0FBRSxjQUFjLENBQUM7QUFDbkMsSUFBTSxlQUFlLEdBQUUsWUFBWSxDQUFDO0FBQ3BDLElBQU0sYUFBYSxHQUFFLGVBQWUsQ0FBQyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImRpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNiM2QxYjdiY2Y4MzMyNDIxMGEzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoODIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uVHlwZXMnXHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuZXhwb3J0IGludGVyZmFjZSBQcm9zcGVjdFN0YXRlIHtcclxuICAgIFByb3NwZWN0RGV0YWlsOiBQcm9zcGVjdDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9zcGVjdCB7XHJcbiAgICBmaXJzdE5hbWU/OiBzdHJpbmc7XHJcbiAgICBsYXN0TmFtZT86IHN0cmluZztcclxuICAgIHNzbj86IHN0cmluZztcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgbWlkZGxlSW5pdGlhbD86IHN0cmluZztcclxuICAgIGRhdGVPZkJpcnRoPzogRGF0ZTtcclxuICAgIGdlbmRlcj86IHN0cmluZztcclxuICAgIHVzQ2l0aXplbj86IHN0cmluZztcclxuICAgIG1hcml0YWxTdGF0dXM/OiBzdHJpbmc7XHJcbiAgICBob21lQWRkcmVzc0xpbmUxPzogc3RyaW5nO1xyXG4gICAgaG9tZUFkZHJlc3NMaW5lMj86IHN0cmluZztcclxuICAgIGhvbWVBZGRyZXNzTGluZTM/OiBzdHJpbmc7XHJcbiAgICBob21lQWRkcmVzc0NpdHk/OiBzdHJpbmc7XHJcbiAgICBob21lQWRkcmVzc1N0YXRlPzogc3RyaW5nO1xyXG4gICAgaG9tZUFkZHJlc3NaaXBDb2RlPzogc3RyaW5nO1xyXG4gICAgbWFpbGluZ0FkZHJlc3NMaW5lMT86IHN0cmluZztcclxuICAgIG1haWxpbmdBZGRyZXNzTGluZTI/OiBzdHJpbmc7XHJcbiAgICBtYWlsaW5nQWRkcmVzc0xpbmUzPzogc3RyaW5nO1xyXG4gICAgbWFpbGluZ0FkZHJlc3NDaXR5Pzogc3RyaW5nO1xyXG4gICAgbWFpbGluZ0FkZHJlc3NTdGF0ZT86IHN0cmluZztcclxuICAgIG1haWxpbmdBZGRyZXNzWmlwQ29kZT86IHN0cmluZztcclxuICAgIGhvbWVQaG9uZT86IHN0cmluZztcclxuICAgIHdvcmtQaG9uZT86IHN0cmluZztcclxuICAgIG90aGVyUGhvbmU/OiBzdHJpbmc7XHJcbiAgICByZWZlcnJhbD86IGJvb2xlYW47XHJcbiAgICBlbWFpbEFkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICBwcmV2aW91c0Z1bmRzPzogc3RyaW5nO1xyXG4gICAgRklOUkE/OiBzdHJpbmc7XHJcbiAgICBpbnZlc3RtZW50T2JqZWN0aXZlPzogc3RyaW5nO1xyXG4gICAgcmlza1Byb2ZpbGU/OiBzdHJpbmc7XHJcbiAgICBhbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZT86IHN0cmluZztcclxuICAgIG5ldFdvcnRoUmFuZ2U/OiBzdHJpbmc7XHJcbiAgICBsaWZlSW5zdXJhbmNlUmFuZ2U/OiBzdHJpbmc7XHJcbiAgICB0YXhCcmFja2V0Pzogc3RyaW5nO1xyXG4gICAgZGVwZW5kZW50c05vPzogc3RyaW5nO1xyXG4gICAgYWdlcz86IHN0cmluZztcclxuICAgIGN1cnJlbnRFbXBsb3llcj86IHN0cmluZztcclxuICAgIGVtcGxveW1lbnRTdGF0dXM/OiBzdHJpbmc7XHJcbiAgICBvY2N1cGF0aW9uPzogc3RyaW5nO1xyXG4gICAgZW1wbG95ZXJBZGRyZXNzPzogc3RyaW5nO1xyXG4gICAgZW1wbG95ZXJDaXR5Pzogc3RyaW5nO1xyXG4gICAgZW1wbG95ZXJTdGF0ZT86IHN0cmluZztcclxuICAgIGVtcGxveWVyWmlwQ29kZT86IHN0cmluZztcclxuICAgIGVtcGxveWVyU2FsYXJ5Pzogc3RyaW5nO1xyXG4gICAgaGlyZURhdGU/OiBEYXRlO1xyXG4gICAgZXhwZWN0ZWRBbm51aXR5RGF0ZT86IERhdGU7XHJcbiAgICBpbmNvbWVBY2NvdW50U2FsYXJ5Pzogc3RyaW5nO1xyXG4gICAgc29jaWFsU2VjdXJpdHk/OiBzdHJpbmc7XHJcbiAgICBwZW5zaW9uQmVuZWZpdHM/OiBzdHJpbmc7XHJcbiAgICBpbnZlc3RtZW50SW5jb21lPzogc3RyaW5nO1xyXG4gICAgcm1kPzogc3RyaW5nO1xyXG4gICAgb3RoZXI/OiBzdHJpbmc7XHJcbiAgICBleHBlbnNlc0Ftb3VudD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xyXG4gICAgQ29kZTogc3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBGZXRjaFByb3NwZWN0UmVxdWVzdCB7IHR5cGU6ICdHRVRfUFJPU1BFQ1RfUkVRVUVTVCcsIGlkOiBzdHJpbmcgfVxyXG5pbnRlcmZhY2UgRmV0Y2hQcm9zcGVjdFN1Y2Nlc3MgeyB0eXBlOiAnR0VUX1BST1NQRUNUJywgcHJvc3BlY3Q6YW55IH1cclxuaW50ZXJmYWNlIEZldGNoUHJvc3BlY3RGYWlsZWQgeyB0eXBlOiAnR0VUX1BST1NQRUNUX0ZBSUxFRCcgfVxyXG5pbnRlcmZhY2UgVXBkYXRlUHJvc3BlY3RSZXF1ZXN0IHsgdHlwZTogJ1VQREFURV9QUk9TUEVDVF9SRVFVRVNUJyB9XHJcbmludGVyZmFjZSBPbklucHV0Q2hhbmdlIHsgdHlwZTogJ09OX0lOUFVUX0NIQU5HRScgLCBuYW1lOnN0cmluZywgdmFsdWU6c3RyaW5nfVxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IEZldGNoUHJvc3BlY3RTdWNjZXNzIHwgRmV0Y2hQcm9zcGVjdEZhaWxlZCB8IE9uSW5wdXRDaGFuZ2U7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBmZXRjaFByb3NwZWN0UmVxdWVzdDogKGlkOiBzdHJpbmcpID0+IDxGZXRjaFByb3NwZWN0UmVxdWVzdD57IHR5cGU6ICdHRVRfUFJPU1BFQ1RfUkVRVUVTVCcsIGlkIH0sXHJcbiAgICBmZXRjaFByb3NwZWN0U3VjY2VzczogKHByb3NwZWN0OmFueSkgPT4gPEZldGNoUHJvc3BlY3RTdWNjZXNzPnsgdHlwZTogJ0dFVF9QUk9TUEVDVCcsIHByb3NwZWN0IH0sXHJcbiAgICBmZXRjaFByb3NwZWN0RmFpbGVkOiAoKSA9PiA8RmV0Y2hQcm9zcGVjdEZhaWxlZD57IHR5cGU6ICdHRVRfUFJPU1BFQ1RfRkFJTEVEJyB9LFxyXG4gICAgb25JbnB1dENoYW5nZTogKG5hbWUsIHZhbHVlKSA9PiA8T25JbnB1dENoYW5nZT57IHR5cGU6ICdPTl9JTlBVVF9DSEFOR0UnLCBuYW1lLCB2YWx1ZSB9LFxyXG4gICAgdXBkYXRlUHJvc3BlY3RSZXF1ZXN0OiAoKSA9PiA8VXBkYXRlUHJvc3BlY3RSZXF1ZXN0PnsgdHlwZTogJ1VQREFURV9QUk9TUEVDVF9SRVFVRVNUJyB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8UHJvc3BlY3RTdGF0ZT4gPSAoc3RhdGU6IFByb3NwZWN0U3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiT05fSU5QVVRfQ0hBTkdFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBbYWN0aW9uLm5hbWVdOiBhY3Rpb24udmFsdWUgfSk7XHJcbiAgICAgICAgY2FzZVwiR0VUX1BST1NQRUNUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24ucHJvc3BlY3QpO1xyXG4gICAgICAgIGNhc2UgXCJHRVRfUFJPU1BFQ1RfRkFJTEVEXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBudWxsKTtcclxuICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgT2JqZWN0LmFzc2lnbih7fSwgbnVsbClcclxufTtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFnZW50Q29kZVN0YXRlIHtcclxuICAgIGFnZW50Q29kZTogc3RyaW5nO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIEFnZW50Q29kZSB7IHR5cGU6ICdTRVRfQUdFTlRDT0RFJywgYWdlbnRDb2RlIH1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9yc0FnZW50Q29kZSA9IHtcclxuICAgIHNldEFnZW50Q29kZTogKGFnZW50Q29kZTogc3RyaW5nKSA9PiA8QWdlbnRDb2RlPnsgdHlwZTogJ1NFVF9BR0VOVENPREUnLCBhZ2VudENvZGUgfVxyXG5cclxufTtcclxuXHJcbnR5cGUgS25vd25BY3Rpb25BZ2VudENvZGUgPSBBZ2VudENvZGVcclxuXHJcbmV4cG9ydCBjb25zdCBhZ2VudENvZGVyZWR1Y2VyOiBSZWR1Y2VyPEFnZW50Q29kZVN0YXRlPiA9IChzdGF0ZTogQWdlbnRDb2RlU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb25BZ2VudENvZGUpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiU0VUX0FHRU5UQ09ERVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmFnZW50Q29kZTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL1Byb3NwZWN0LnRzIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuY29uc3QgaXNGaWVsZFZhbGlkID0gKGlucHV0OmFueSkgPT4ge1xyXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG4gICAgaWYgKGlucHV0LmdldEF0dHJpYnV0ZSgncmVxdWlyZWQnKSAhPT0gbnVsbCAmJiBpbnB1dC52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlzVmFsaWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzVmFsaWQ7XHJcbn1cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlRm9ybUZpZWxkID0gKGlucHV0RmllbGQ6IGFueSkgPT4ge1xyXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG4gICAgaXNWYWxpZCA9IGlzRmllbGRWYWxpZChpbnB1dEZpZWxkKTtcclxuICAgIGlucHV0RmllbGQuaXNWYWxpZCA9IGlzVmFsaWQ7XHJcbiAgICBpZiAoaXNWYWxpZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICBpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArIFwiIGlzIHJlcXVpcmVkXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAodmFsaWRhdGVGb3JtYXQoaW5wdXRGaWVsZCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gaW5wdXRGaWVsZC5uYW1lICsgXCIgaXMgaW52YWxpZFwiO1xyXG4gICAgICAgICAgICBpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICAgICAgICAgIGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qXHJcbmNvbnN0IHZhbGlkYXRlQWxsRmllbGQgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGlucHV0cy5sZW5ndGg7ICsraW5kZXgpIHtcclxuICAgICAgICB2YWxpZGF0ZUZvcm1GaWVsZChpbnB1dHNbaW5kZXhdKTtcclxuICAgIH1cclxufSovXHJcbmNvbnN0IHZhbGlkYXRlRm9ybWF0ID0gKGlucHV0OmFueSkgPT4ge1xyXG4gICAgbGV0IGlzRm9ybWF0VmFsaWQgPSB0cnVlO1xyXG4gICAgbGV0IGZvcm1hdCA9IFwiXCI7XHJcbiAgICBpZiAoaW5wdXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChpbnB1dC50eXBlID09PSBcImRhdGVcIikge1xyXG4gICAgICAgICAgICAvL2Zvcm1hdCA9L14oMFsxLTldfDFbMC0yXSlcXC8oMFsxLTldfDFcXGR8MlxcZHwzWzAxXSlcXC8oMTl8MjApXFxkezJ9JC87XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC52YWxpZGl0eSAhPT0gdW5kZWZpbmVkICYmIChpbnB1dC52YWxpZGl0eS5iYWRJbnB1dCA9PT0gdHJ1ZSB8fCBpbnB1dC52YWxpZGl0eS52YWxpZCA9PT0gZmFsc2UpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQoaW5wdXQpLmF0dHIoJ2RhdGEtZGF0ZUJpcnRoJykgIT09IHVuZGVmaW5lZCAmJiBpbnB1dC52YWx1ZSAhPT0gXCJcIiAmJiBpbnB1dC52YWx1ZUFzRGF0ZSA+PSBuZXcgRGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiICYmIChpbnB1dC52YWx1ZUFzRGF0ZS5nZXRGdWxsWWVhcigpID49IDIwOTkgfHwgaW5wdXQudmFsdWVBc0RhdGUuZ2V0RnVsbFllYXIoKSA8PSAxOTAwKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIiAmJiBmb3JtYXQgIT09IFwiXCIgJiYgKGZvcm1hdCBhcyBhbnkpLnRlc3QoaW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpc0Zvcm1hdFZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzRm9ybWF0VmFsaWQ7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGVycm9yQ2xhc3MgPSAoZXJyb3JzOiBhbnksIGZpZWxkTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoZXJyb3JzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBlcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IuZmllbGROYW1lID09PSBmaWVsZE5hbWUgJiYgZXJyb3IuZXJyb3JNZXNzYWdlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL3V0aWxpdHkvVXRpbGl0eS50cyIsIiAgICBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUGVyc29uYWxJbmZvcm1hdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L1BlcnNvbmFsSW5mb3JtYXRpb25Db21wb25lbnQnO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUZvcm1GaWVsZCB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlsaXR5L1V0aWxpdHknO1xyXG4vL2ltcG9ydCB7IG9uSW5wdXRDaGFuZ2UgYXMgb25DaGFuZ2UgfSBmcm9tICcuLi8uLi9hY3Rpb25zL1Byb3NwZWN0QWN0aW9uJztcclxuaW1wb3J0ICogYXMgIFByb3NwZWN0QWN0aW9uIGZyb20gJy4uLy4uL3N0b3JlL1Byb3NwZWN0JztcclxuaW1wb3J0ICogYXMgVmFsaWRhdGlvbk1lc3NhZ0FjdGlvbiBmcm9tICcuLi8uLi9zdG9yZS92YWxpZGF0aW9uTWVzc2FnZSc7XHJcbi8vaW1wb3J0IHsgQWRkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9WYWxpZGF0aW9uTWVzc2FnZUFjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgdmFsaWNJbnB1dENoYW5nZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gZS50YXJnZXQuY2hlY2tlZCA6IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGxldCBpbnB1dEZpZWxkID0gZS50YXJnZXQ7XHJcbiAgICAgICAgLy9kaXNwYXRjaChvbkNoYW5nZShuYW1lLCB2YWx1ZSkpO1xyXG4gICAgICAgIGRpc3BhdGNoKFByb3NwZWN0QWN0aW9uLmFjdGlvbkNyZWF0b3JzLm9uSW5wdXRDaGFuZ2UobmFtZSwgdmFsdWUpKTtcclxuICAgICAgICBpZiAoaW5wdXRGaWVsZC5pc1ZhbGlkID09PSBmYWxzZSB8fCBpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC8vZGlzcGF0Y2goQWRkRXJyb3JNZXNzYWdlKG5hbWUsIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFZhbGlkYXRpb25NZXNzYWdBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuYWRkRXJyb3JNZXNzYWdlKG5hbWUsIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICQoaW5wdXRGaWVsZCkucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vZGlzcGF0Y2goQWRkRXJyb3JNZXNzYWdlKG5hbWUsICcnKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFZhbGlkYXRpb25NZXNzYWdBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuYWRkRXJyb3JNZXNzYWdlKG5hbWUsICcnKSk7XHJcbiAgICAgICAgICAgICQoaW5wdXRGaWVsZCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyBlLnRhcmdldC5jaGVja2VkIDogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgbGV0IGlucHV0RmllbGQgPSBlLnRhcmdldDtcclxuICAgICAgICAvL2Rpc3BhdGNoKG9uQ2hhbmdlKG5hbWUsIHZhbHVlKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goUHJvc3BlY3RBY3Rpb24uYWN0aW9uQ3JlYXRvcnMub25JbnB1dENoYW5nZShuYW1lLCB2YWx1ZSkpO1xyXG4gICAgICAgIHZhbGlkYXRlRm9ybUZpZWxkKGlucHV0RmllbGQpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRGaWVsZC5pc1ZhbGlkID09PSBmYWxzZSB8fCBpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC8vZGlzcGF0Y2goQWRkRXJyb3JNZXNzYWdlKG5hbWUsIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFZhbGlkYXRpb25NZXNzYWdBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuYWRkRXJyb3JNZXNzYWdlKG5hbWUsIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICQoaW5wdXRGaWVsZCkucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vZGlzcGF0Y2goQWRkRXJyb3JNZXNzYWdlKG5hbWUsICcnKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFZhbGlkYXRpb25NZXNzYWdBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuYWRkRXJyb3JNZXNzYWdlKG5hbWUsICcnKSk7XHJcbiAgICAgICAgICAgICQoaW5wdXRGaWVsZCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn0pXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAgIHNzbjogc3RhdGUuUHJvc3BlY3REZXRhaWwuc3NuLFxyXG4gICAgdGl0bGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLnRpdGxlLFxyXG4gICAgZmlyc3ROYW1lOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5maXJzdE5hbWUsXHJcbiAgICBsYXN0TmFtZTogc3RhdGUuUHJvc3BlY3REZXRhaWwubGFzdE5hbWUsXHJcbiAgICBtaWRkbGVJbml0aWFsOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5taWRkbGVJbml0aWFsLFxyXG4gICAgZGF0ZU9mQmlydGg6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmRhdGVPZkJpcnRoLFxyXG4gICAgZ2VuZGVyOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5nZW5kZXIsXHJcbiAgICB1c0NpdGl6ZW46IHN0YXRlLlByb3NwZWN0RGV0YWlsLnVzQ2l0aXplbixcclxuICAgIG1hcml0YWxTdGF0dXM6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1hcml0YWxTdGF0dXMsXHJcbiAgICBob21lQWRkcmVzc0xpbmUxOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lQWRkcmVzc0xpbmUxLFxyXG4gICAgaG9tZUFkZHJlc3NMaW5lMjogc3RhdGUuUHJvc3BlY3REZXRhaWwuaG9tZUFkZHJlc3NMaW5lMixcclxuICAgIGhvbWVBZGRyZXNzTGluZTM6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmhvbWVBZGRyZXNzTGluZTMsXHJcbiAgICBob21lQWRkcmVzc0NpdHk6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmhvbWVBZGRyZXNzQ2l0eSxcclxuICAgIGhvbWVBZGRyZXNzU3RhdGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmhvbWVBZGRyZXNzU3RhdGUsXHJcbiAgICBob21lQWRkcmVzc1ppcENvZGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmhvbWVBZGRyZXNzWmlwQ29kZSxcclxuICAgIG1haWxpbmdBZGRyZXNzTGluZTE6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1haWxpbmdBZGRyZXNzTGluZTEsXHJcbiAgICBtYWlsaW5nQWRkcmVzc0xpbmUyOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5tYWlsaW5nQWRkcmVzc0xpbmUyLFxyXG4gICAgbWFpbGluZ0FkZHJlc3NMaW5lMzogc3RhdGUuUHJvc3BlY3REZXRhaWwubWFpbGluZ0FkZHJlc3NMaW5lMyxcclxuICAgIG1haWxpbmdBZGRyZXNzQ2l0eTogc3RhdGUuUHJvc3BlY3REZXRhaWwubWFpbGluZ0FkZHJlc3NDaXR5LFxyXG4gICAgbWFpbGluZ0FkZHJlc3NTdGF0ZTogc3RhdGUuUHJvc3BlY3REZXRhaWwubWFpbGluZ0FkZHJlc3NTdGF0ZSxcclxuICAgIG1haWxpbmdBZGRyZXNzWmlwQ29kZTogc3RhdGUuUHJvc3BlY3REZXRhaWwubWFpbGluZ0FkZHJlc3NaaXBDb2RlLFxyXG4gICAgaG9tZVBob25lOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lUGhvbmUsXHJcbiAgICB3b3JrUGhvbmU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLndvcmtQaG9uZSxcclxuICAgIG90aGVyUGhvbmU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm90aGVyUGhvbmUsXHJcbiAgICByZWZlcnJhbDogc3RhdGUuUHJvc3BlY3REZXRhaWwucmVmZXJyYWwsXHJcbiAgICBlbWFpbEFkZHJlc3M6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmVtYWlsQWRkcmVzcyxcclxuICAgIHN0YXRlczogc3RhdGUuc3RhdGVzXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgUGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBlcnNvbmFsSW5mb3JtYXRpb24pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9QZXJzb25hbEluZm9ybWF0aW9uQ29udGFpbmVyLnRzIiwiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzJ1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb05tZXNzYWdlU3RhdGUge1xyXG4gICAgZXJyb3JzOiBFcnJvck1lc3NhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JNZXNzYWdlIHtcclxuICAgIGZpZWxkTmFtZTogc3RyaW5nO1xyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5pbnRlcmZhY2UgQWRkRXJyb3JNZXNzYWdlIHsgdHlwZTogJ0FERF9FUlJPUl9NRVNTQUdFJywgZmllbGROYW1lLCBlcnJvck1lc3NhZ2UgfVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgYWRkRXJyb3JNZXNzYWdlOiAoZmllbGROYW1lOiBzdHJpbmcsIGVycm9yTWVzc2FnZTogc3RyaW5nKSA9PiA8QWRkRXJyb3JNZXNzYWdlPnsgdHlwZTogJ0FERF9FUlJPUl9NRVNTQUdFJyAsZmllbGROYW1lLCBlcnJvck1lc3NhZ2V9LFxyXG4gICBcclxufTtcclxudHlwZSBLbm93bkFjdGlvbiA9IEFkZEVycm9yTWVzc2FnZVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8VmFsaWRhdGlvTm1lc3NhZ2VTdGF0ZVtdPiA9IChzdGF0ZTogVmFsaWRhdGlvTm1lc3NhZ2VTdGF0ZVtdLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICBjYXNlIFwiQUREX0VSUk9SX01FU1NBR0VcIjpcclxuICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpc0V4aXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3b2JqID0gc3RhdGUubWFwKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmZpZWxkTmFtZSA9PT0gYWN0aW9uLmZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0V4aXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGVycm9yLCB7IGVycm9yTWVzc2FnZTogYWN0aW9uLmVycm9yTWVzc2FnZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNFeGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IGFjdGlvbi5maWVsZE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5lcnJvck1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdvYmo7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiBhY3Rpb24uZmllbGROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5lcnJvck1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIHVucmVjb2duaXplZCBhY3Rpb25zIChvciBpbiBjYXNlcyB3aGVyZSBhY3Rpb25zIGhhdmUgbm8gZWZmZWN0KSwgbXVzdCByZXR1cm4gdGhlIGV4aXN0aW5nIHN0YXRlXHJcbiAgICAvLyAgKG9yIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZSBpZiBub25lIHdhcyBzdXBwbGllZClcclxuICAgIHJldHVybiBzdGF0ZSA9PT0gdW5kZWZpbmVkID8gW10gOiBzdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL3ZhbGlkYXRpb25NZXNzYWdlLnRzIiwiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzJ1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVzU3RhdGUge1xyXG4gICAgc3RhdGVzOiBTdGF0ZVtdO1xyXG59XHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBDb2RlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBGZXRjaFN0YXRlUmVxdWVzdCB7IHR5cGU6ICdHRVRfU1RBVEVTX1JFUVVFU1QnIH1cclxuaW50ZXJmYWNlIEZldGNoU3RhdGVTdWNjZXNzIHsgdHlwZTogJ0dFVF9TVEFURVNfU1VDQ0VTUycsIHN0YXRlcyB9XHJcbmludGVyZmFjZSBGZXRjaFN0YXRlc0ZhaWxlZCB7IHR5cGU6ICdHRVRfU1RBVEVTX0ZBSUxFRCcgfVxyXG50eXBlIEtub3duQWN0aW9uID0gRmV0Y2hTdGF0ZVN1Y2Nlc3MgfCBGZXRjaFN0YXRlUmVxdWVzdCB8IEZldGNoU3RhdGVzRmFpbGVkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgZmV0Y2hTdGF0ZVJlcXVlc3Q6ICgpID0+IDxGZXRjaFN0YXRlUmVxdWVzdD57IHR5cGU6ICdHRVRfU1RBVEVTX1JFUVVFU1QnIH0sXHJcbiAgICBmZXRjaFN0YXRlU3VjY2VzczogKHN0YXRlcykgPT4gPEZldGNoU3RhdGVTdWNjZXNzPnsgdHlwZTogJ0dFVF9TVEFURVNfU1VDQ0VTUycsIHN0YXRlcyB9LFxyXG4gICAgZmV0Y2hTdGF0ZXNGYWlsZWQ6ICgpID0+IDxGZXRjaFN0YXRlc0ZhaWxlZD57IHR5cGU6ICdHRVRfU1RBVEVTX0ZBSUxFRCcgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFN0YXRlc1N0YXRlPiA9IChzdGF0ZTogU3RhdGVzU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdHRVRfU1RBVEVTX1NVQ0NFU1MnOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgc3RhdGUsIGFjdGlvbi5zdGF0ZXMpOyAgICAgIFxyXG4gICAgICAgIGNhc2UgJ0dFVF9TVEFURVNfUkVRVUVTVCc6XHJcbiAgICAgICAgY2FzZSAnR0VUX1NUQVRFU19GQUlMRUQnOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgbnVsbCk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIHVucmVjb2duaXplZCBhY3Rpb25zIChvciBpbiBjYXNlcyB3aGVyZSBhY3Rpb25zIGhhdmUgbm8gZWZmZWN0KSwgbXVzdCByZXR1cm4gdGhlIGV4aXN0aW5nIHN0YXRlXHJcbiAgICAvLyAgKG9yIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZSBpZiBub25lIHdhcyBzdXBwbGllZClcclxuICAgIHJldHVybiBzdGF0ZSB8fCBPYmplY3QuYXNzaWduKFtdLCBudWxsKSBcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL1N0YXRlcy50cyIsImltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb25UeXBlcydcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlclN0YXRlIHtcclxuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIExvYWRlckJlZ2luIHsgdHlwZTogJ0xPQURFUl9CRUdJTicgfVxyXG5pbnRlcmZhY2UgTG9hZGVyRW5kIHsgdHlwZTogJ0xPQURFUl9FTkQnIH1cclxuXHJcblxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IExvYWRlckJlZ2luIHwgTG9hZGVyRW5kO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgbG9hZGVyQmVnaW46ICgpID0+IDxMb2FkZXJCZWdpbj57IHR5cGU6ICdMT0FERVJfQkVHSU4nIH0sXHJcbiAgICBsb2FkZXJFbmQ6ICgpID0+IDxMb2FkZXJFbmQ+eyB0eXBlOiAnTE9BREVSX0VORCcgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPExvYWRlclN0YXRlPiA9IChzdGF0ZTogTG9hZGVyU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdMT0FERVJfQkVHSU4nOlxyXG4gICAgICAgICAgICByZXR1cm4geyBpc0xvYWRpbmc6IHRydWUgfTtcclxuICAgICAgICBjYXNlICdMT0FERVJfRU5EJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgaXNMb2FkaW5nOiBmYWxzZSB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgeyBpc0xvYWRpbmc6IGZhbHNlIH07XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9Mb2FkZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMTUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gJ3JlYWN0LWlucHV0LW1hc2snO1xyXG5jbGFzcyBWYWxpY0lucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueT4ge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHRcclxuXHRcdHRoaXMub25DaGFuZ2VFbWFpbCA9IHRoaXMub25DaGFuZ2VFbWFpbC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVBob25lTnVtYmVyID0gdGhpcy5vbkNoYW5nZVBob25lTnVtYmVyLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlU1NOID0gdGhpcy5vbkNoYW5nZVNTTi5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVRleHQgPSB0aGlzLm9uQ2hhbmdlVGV4dC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZU51bWJlciA9IHRoaXMub25DaGFuZ2VOdW1iZXIuYmluZCh0aGlzKTtcclxuXHR9XHJcblx0b25DaGFuZ2VUZXh0KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcclxuXHRcdH1cclxuXHR9XHJcblx0b25DaGFuZ2VOdW1iZXIoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcclxuXHR9XHJcblx0b25DaGFuZ2VFbWFpbChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgaXNWYWxpZCA9IHRydWU7XHJcblx0XHRsZXQgaW5wdXRGaWVsZCA9IGUudGFyZ2V0O1xyXG5cdFx0aXNWYWxpZCA9IHRoaXMuaXNWYWxpZChpbnB1dEZpZWxkKTtcclxuXHRcdGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gJyc7XHJcblx0XHRpZiAoaXNWYWxpZCA9PT0gZmFsc2UpIHtcclxuXHRcdFx0Ly90aGlzLmFkZEVycm9yKHRoaXMuc3RhdGUsaW5wdXRGaWVsZC5uYW1lLCBpbnB1dEZpZWxkLm5hbWUgKyBcIiBpcyByZXF1aXJlZFwiKTtcclxuXHRcdFx0aW5wdXRGaWVsZC5pc1ZhbGlkID0gZmFsc2U7XHJcblx0XHRcdGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gaW5wdXRGaWVsZC5uYW1lICsgXCIgaXMgcmVxdWlyZWRcIjtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRpbnB1dEZpZWxkLmlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0XHRpZiAodGhpcy52YWxpZGF0ZUVtYWlsRm9ybWF0KGlucHV0RmllbGQpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gaW5wdXRGaWVsZC5uYW1lICsgJyBpcyBpbnZhbGlkJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0aW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cdFx0XHRcdC8vJChpbnB1dEZpZWxkKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yIGhhcy1mZWVkYmFjaycpOyAgICAgICBcclxuXHRcdFx0XHQvL3RoaXMuYWRkRXJyb3IodGhpcy5wcm9wcy5zdGF0ZSxpbnB1dEZpZWxkLm5hbWUsIFwiXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHRcdFxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcclxuXHR9XHJcblx0b25DaGFuZ2VQaG9uZU51bWJlcihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgaXNWYWxpZCA9IHRydWU7XHJcblx0XHRsZXQgaW5wdXRGaWVsZCA9IGUudGFyZ2V0O1xyXG5cdFx0aXNWYWxpZCA9IHRoaXMuaXNWYWxpZChpbnB1dEZpZWxkKTtcclxuXHJcblx0XHRpZiAoaXNWYWxpZCA9PT0gZmFsc2UpIHtcclxuXHRcdFx0Ly90aGlzLmFkZEVycm9yKHRoaXMuc3RhdGUsaW5wdXRGaWVsZC5uYW1lLCBpbnB1dEZpZWxkLm5hbWUgKyBcIiBpcyByZXF1aXJlZFwiKTtcclxuXHRcdFx0aW5wdXRGaWVsZC5pc1ZhbGlkID0gZmFsc2U7XHJcblx0XHRcdGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gaW5wdXRGaWVsZC5uYW1lICsgXCIgaXMgcmVxdWlyZWRcIjtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRpbnB1dEZpZWxkLmlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0XHRpZiAodGhpcy52YWxpZGF0ZVBob25lTnVtYmVyRm9ybWF0KGlucHV0RmllbGQpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdC8vJChpbnB1dEZpZWxkKS5wYXJlbnQoKS5hZGRDbGFzcygnaGFzLWVycm9yIGhhcy1mZWVkYmFjaycpOyAgICAgICBcdFx0XHRcdFx0XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID0gZmFsc2U7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSBpbnB1dEZpZWxkLm5hbWUgKyAnIGlzIGludmFsaWQnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xyXG5cdH1cclxuXHRvbkNoYW5nZVNTTihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgaXNWYWxpZCA9IHRydWU7XHJcblx0XHRsZXQgaW5wdXRGaWVsZCA9IGUudGFyZ2V0O1xyXG5cdFx0aXNWYWxpZCA9IHRoaXMuaXNWYWxpZChpbnB1dEZpZWxkKTtcclxuXHJcblx0XHRpZiAoaXNWYWxpZCA9PT0gZmFsc2UpIHtcclxuXHRcdFx0aW5wdXRGaWVsZC5pc1ZhbGlkID0gZmFsc2U7XHJcblx0XHRcdGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gaW5wdXRGaWVsZC5uYW1lICsgXCIgaXMgcmVxdWlyZWRcIjtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRpbnB1dEZpZWxkLmlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0XHRpZiAodGhpcy52YWxpZGF0ZVNTTkZvcm1hdChpbnB1dEZpZWxkKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArICcgaXMgaW52YWxpZCc7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XHJcblx0fVxyXG5cdHZhbGlkYXRlRW1haWxGb3JtYXQoaW5wdXQpIHtcclxuXHRcdGxldCBpc0Zvcm1hdFZhbGlkID0gdHJ1ZTtcclxuXHRcdGxldCBmb3JtYXQgPSAvXlxcdysoWy4tXT9cXHcrKSpAXFx3KyhbLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC87XHJcblx0XHRpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIgJiYgZm9ybWF0LnRlc3QoaW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xyXG5cdFx0XHRpc0Zvcm1hdFZhbGlkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXNGb3JtYXRWYWxpZDtcclxuXHR9XHJcblx0dmFsaWRhdGVTU05Gb3JtYXQoaW5wdXQpIHtcclxuXHRcdGxldCBpc0Zvcm1hdFZhbGlkID0gdHJ1ZTtcclxuXHRcdGxldCBmb3JtYXQgPSAvXlswLTlBLVpdezN9LVswLTlBLVpdezJ9LVswLTlBLVpdezR9JC87XHJcblx0XHRpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIgJiYgZm9ybWF0LnRlc3QoaW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xyXG5cdFx0XHRpc0Zvcm1hdFZhbGlkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXNGb3JtYXRWYWxpZDtcclxuXHR9XHJcblx0dmFsaWRhdGVQaG9uZU51bWJlckZvcm1hdChpbnB1dCkge1xyXG5cdFx0bGV0IGlzRm9ybWF0VmFsaWQgPSB0cnVlO1xyXG5cdFx0bGV0IGZvcm1hdCA9IC8oPzpcXChcXGR7M31cXCl8XFxkezN9KVstIF0/XFxkezN9Wy0gXT9cXGR7NH0vO1xyXG5cdFx0aWYgKGlucHV0LnZhbHVlICE9PSBcIlwiICAmJiBmb3JtYXQudGVzdChpbnB1dC52YWx1ZSkgPT09IGZhbHNlKSB7XHJcblx0XHRcdGlzRm9ybWF0VmFsaWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpc0Zvcm1hdFZhbGlkO1xyXG5cdH1cclxuXHRpc1ZhbGlkKGlucHV0KSB7XHJcblx0XHRsZXQgaXNWYWxpZCA9IHRydWU7XHJcblx0XHQvL2NvbnNvbGUubG9nKGlucHV0KVxyXG5cdFx0aWYgKGlucHV0LmdldEF0dHJpYnV0ZSgncmVxdWlyZWQnKSAhPT0gbnVsbCAmJiBpbnB1dC52YWx1ZSA9PT0gXCJcIikge1xyXG5cdFx0XHQvLyQoaW5wdXQpLnBhcmVudCgpLmFkZENsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7ICAgICAgICAgICBcclxuXHRcdFx0aXNWYWxpZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdC8vICQoaW5wdXQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcblx0XHRcdC8vaW5wdXQubmV4dFNpYmxpbmcudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cdFx0XHRpc1ZhbGlkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpc1ZhbGlkO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgaW5wdXRUeXBlID0gdGhpcy5wcm9wcy50eXBlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5wcm9wcy50eXBlICE9PSBudWxsID8gdGhpcy5wcm9wcy50eXBlIDogXCJ0ZXh0XCI7XHJcblx0XHRsZXQgaW5wdXRDb250cm9sO1xyXG5cdFx0Y29uc3QgcHJvcHMgPSB7IC4uLnRoaXMucHJvcHMgfTtcclxuXHJcblx0XHRzd2l0Y2ggKGlucHV0VHlwZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpIHtcclxuXHRcdFx0Y2FzZSBcInBob25lXCI6XHJcblx0XHRcdFx0aW5wdXRDb250cm9sID0gPElucHV0TWFzayAgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVBob25lTnVtYmVyfSAvPjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIm51bWJlclwiOlxyXG5cdFx0XHRcdGlucHV0Q29udHJvbCA9IDxpbnB1dCB7Li4ucHJvcHN9IHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZU51bWJlcn0gLz47XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJlbWFpbFwiOlxyXG5cdFx0XHRcdGlucHV0Q29udHJvbCA9IDxpbnB1dCB7Li4ucHJvcHN9IHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlRW1haWx9IC8+O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwic3NuXCI6XHJcblx0XHRcdFx0aW5wdXRDb250cm9sID0gPElucHV0TWFzayAgey4uLnByb3BzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNTTn0gLz47XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0aW5wdXRDb250cm9sID0gPGlucHV0IHsuLi5wcm9wc30gdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVRleHR9IC8+O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGlucHV0Q29udHJvbDtcclxuXHR9XHJcblxyXG5cclxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG5cdFx0dHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdFx0b25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblx0XHRuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFsaWNJbnB1dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL1ZhbGljSW5wdXRDb21wb25lbnQvVmFsaWNJbnB1dENvbXBvbmVudC50c3giLCJleHBvcnQgY29uc3QgcHJvc3BlY3RJZCA9IDE5NjM7XHJcbmV4cG9ydCBjb25zdCBhZ2lsZW5ldHVybCA9J2h0dHBzOi8vZDQudmFsaWMuY29tL2FnaWxlbmV0NS8nO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uc3RhbnRzL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHJlcGxhY2UgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIFByZXBhcmUgUmVkdXggc3RvcmUgd2l0aCBpbi1tZW1vcnkgaGlzdG9yeSwgYW5kIGRpc3BhdGNoIGEgbmF2aWdhdGlvbiBldmVudFxyXG4gICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGluY29taW5nIFVSTFxyXG4gICAgICAgIGNvbnN0IGJhc2VuYW1lID0gcGFyYW1zLmJhc2VVcmwuc3Vic3RyaW5nKDAsIHBhcmFtcy5iYXNlVXJsLmxlbmd0aCAtIDEpOyAvLyBSZW1vdmUgdHJhaWxpbmcgc2xhc2hcclxuICAgICAgICBjb25zdCB1cmxBZnRlckJhc2VuYW1lID0gcGFyYW1zLnVybC5zdWJzdHJpbmcoYmFzZW5hbWUubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGNyZWF0ZU1lbW9yeUhpc3RvcnkoKSk7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocmVwbGFjZSh1cmxBZnRlckJhc2VuYW1lKSk7XHJcblxyXG4gICAgICAgIC8vIFByZXBhcmUgYW4gaW5zdGFuY2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGFuZCBwZXJmb3JtIGFuIGluaXRhbCByZW5kZXIgdGhhdCB3aWxsXHJcbiAgICAgICAgLy8gY2F1c2UgYW55IGFzeW5jIHRhc2tzIChlLmcuLCBkYXRhIGFjY2VzcykgdG8gYmVnaW5cclxuICAgICAgICBjb25zdCByb3V0ZXJDb250ZXh0OiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBhcHAgPSAoXHJcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17IHN0b3JlIH0+XHJcbiAgICAgICAgICAgICAgICA8U3RhdGljUm91dGVyIGJhc2VuYW1lPXsgYmFzZW5hbWUgfSBjb250ZXh0PXsgcm91dGVyQ29udGV4dCB9IGxvY2F0aW9uPXsgcGFyYW1zLmxvY2F0aW9uLnBhdGggfSBjaGlsZHJlbj17IHJvdXRlcyB9IC8+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZW5kZXJUb1N0cmluZyhhcHApO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmVkaXJlY3Rpb24sIGp1c3Qgc2VuZCB0aGlzIGluZm9ybWF0aW9uIGJhY2sgdG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICBpZiAocm91dGVyQ29udGV4dC51cmwpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByb3V0ZXJDb250ZXh0LnVybCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBPbmNlIGFueSBhc3luYyB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlclxyXG4gICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXHJcbiAgICAgICAgcGFyYW1zLmRvbWFpblRhc2tzLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7IGluaXRpYWxSZWR1eFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jvb3Qtc2VydmVyLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEzOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxOTIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEzNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbi8vaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9jb21wb25lbnRzL0xheW91dCc7XHJcbi8vaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xyXG4vL2ltcG9ydCBGZXRjaERhdGEgZnJvbSAnLi9jb21wb25lbnRzL0ZldGNoRGF0YSc7XHJcbi8vaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb21wb25lbnRzL0NvdW50ZXInO1xyXG5pbXBvcnQgUHJvc3BlY3RFZGl0Q29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9Qcm9zcGVjdEVkaXRDb250YWluZXInO1xyXG4gICAgXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSAoPGRpdj5cclxuICAgICAgICAgICAgXHJcbjxQcm9zcGVjdEVkaXRDb250YWluZXIgLz5cclxuICAgICAgICA8L2Rpdj4pO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy50c3giLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFRhYkNvbnRhaW5lciwgVGFiIH0gZnJvbSAnLi4vLi4vc2hhcmVkL1RhYkNvbnRhaW5lckNvbXBvbmVudC9UYWJDb250YWluZXJDb21wb25lbnQnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVmFsaWNWYWxpZGF0aW9uTWVzc2FnZSBmcm9tICcuLi8uLi9zaGFyZWQvVmFsaWNWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudC9WYWxpY1ZhbGlkYXRpb25NZXNzYWdlQ29tcG9uZW50JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9zaGFyZWQvTG9hZGVyQ29tcG9uZW50L0xvYWRlckNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHZhbGlkYXRlRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxpdHkvVXRpbGl0eSc7XHJcbmltcG9ydCB7IFBlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXIgfSBmcm9tICcuL1BlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXInO1xyXG5pbXBvcnQgeyBJbnZlc3RvclByb2ZpbGVDb250YWluZXIgfSBmcm9tICcuL0ludmVzdG9yUHJvZmlsZUNvbnRhaW5lcic7XHJcbmltcG9ydCB7IEluY29tZVNvdXJjZUNvbnRhaW5lciB9IGZyb20gJy4vSW5jb21lU291cmNlQ29udGFpbmVyJztcclxuaW1wb3J0IHsgYWdpbGVuZXR1cmwgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBZGRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9hY3Rpb25zL1ZhbGlkYXRpb25NZXNzYWdlQWN0aW9uJztcclxuLy9pbXBvcnQge1Byb3NwZWN0QVBJfSBmcm9tICcuLi9hcGkvcHJvc3BlY3RBcGknO1xyXG4vL2ltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgKiBhcyBQcm9zcGVjdEFjdGlvbiBmcm9tICcuLi8uLi9hY3Rpb25zL1Byb3NwZWN0QWN0aW9uJztcclxuaW1wb3J0ICcuL1Byb3NwZWN0RWRpdENvbnRhaW5lci5jc3MnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBQcm9zcGVjdFN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL1Byb3NwZWN0J1xyXG5pbXBvcnQgKiBhcyBTdGF0ZVN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL1N0YXRlcyc7XHJcbmltcG9ydCAqIGFzIExvYWRlclN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL0xvYWRlcic7XHJcbmltcG9ydCAqIGFzIFZhbGlkYXRpb25NZXNzYWdlU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvdmFsaWRhdGlvbk1lc3NhZ2UnO1xyXG5cclxudHlwZSBQcm9zcGVjdEVkaXRQcm9wcyA9IFByb3NwZWN0U3RvcmUuUHJvc3BlY3RTdGF0ZVxyXG4gICAgJiB0eXBlb2YgUHJvc3BlY3RTdG9yZS5hY3Rpb25DcmVhdG9yc1xyXG4gICAgJiB0eXBlb2YgUHJvc3BlY3RTdG9yZS5hY3Rpb25DcmVhdG9yc0FnZW50Q29kZVxyXG4gICAgJiB0eXBlb2YgU3RhdGVTdG9yZS5hY3Rpb25DcmVhdG9yc1xyXG4gICAgJiB0eXBlb2YgTG9hZGVyU3RvcmUuYWN0aW9uQ3JlYXRvcnNcclxuICAgICYgUm91dGVDb21wb25lbnRQcm9wczx7fT5cclxuICAgICYgcHJvc3BlY3RQcm9wc1xyXG4gICAgO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb3NwZWN0RWRpdENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb21wb25lbnREaWRNb3VudCgpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGluZm8pIHtcclxuICAgICAgICAvL2NvbnN0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIC8vZGlzcGF0Y2goKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2NvbXBvbmVudGNhdGgnKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGZvcm1FcnJvcnMsIGlzTG9hZGluZyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoZm9ybUVycm9ycyAhPT0gdW5kZWZpbmVkICYmIGZvcm1FcnJvcnMgIT09IG51bGwgJiYgZm9ybUVycm9ycy5sZW5ndGggPjApIHtcclxuICAgICAgICAgICAgbGV0IGVycm9ycyA9IGZvcm1FcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLmVycm9yTWVzc2FnZSAhPT0gJycgJiYgZXJyb3IuZmllbGROYW1lID09PSAnJyk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXJyb3JzKTtcclxuICAgICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvL3Rocm93IG5ldyBFcnJvcihcImZhaWxlZCBjb21wb25lbnRcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPEFwcEVycm9yIGVycm9yPXtlcnJvcnNbMF0uZXJyb3JNZXNzYWdlfSAvPilcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgeyhpc0xvYWRpbmcgYXMgYm9vbGVhbikgPT0gdHJ1ZSA/IDxMb2FkZXIgLz4gOiAnJ31cclxuICAgICAgICAgICAgICAgIDxWYWxpY1ZhbGlkYXRpb25NZXNzYWdlIGZvcm1FcnJvcnM9e2Zvcm1FcnJvcnN9IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgbmFtZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uXCIgaXNEZWZhdWx0VGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgbmFtZT1cIkludmVzdG9yIFByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnZlc3RvclByb2ZpbGVDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgbmFtZT1cIkluY29tZSBTb3VyY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmNvbWVTb3VyY2VDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNhdmVQcm9zcGVjdChlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fSA+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jYW5jZWxQcm9zcGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19ID5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgc2F2ZVByb3NwZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGZvcm1FcnJvcnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGlzTG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxyXG4gICAgfVxyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gKHtcclxuICAgIGZvcm1FcnJvcnM6IHN0YXRlLmVycm9ycyxcclxuICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nXHJcbn0pXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICAgIHNhdmVQcm9zcGVjdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKSBhcyBhbnk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGlucHV0cy5sZW5ndGg7ICsraW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IGlucHV0RmllbGQgPSBpbnB1dHNbaW5kZXhdO1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUZvcm1GaWVsZChpbnB1dEZpZWxkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnB1dEZpZWxkLmlzVmFsaWQgPT09IGZhbHNlIHx8IGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vZGlzcGF0Y2goQWRkRXJyb3JNZXNzYWdlKGlucHV0RmllbGQubmFtZSwgaW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFZhbGlkYXRpb25NZXNzYWdlU3RvcmUuYWN0aW9uQ3JlYXRvcnMuYWRkRXJyb3JNZXNzYWdlKGlucHV0RmllbGQubmFtZSwgaW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgICQoaW5wdXRGaWVsZCkucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vZGlzcGF0Y2goQWRkRXJyb3JNZXNzYWdlKGlucHV0RmllbGQubmFtZSwgJycpKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFZhbGlkYXRpb25NZXNzYWdlU3RvcmUuYWN0aW9uQ3JlYXRvcnMuYWRkRXJyb3JNZXNzYWdlKGlucHV0RmllbGQubmFtZSwgJycpKTtcclxuICAgICAgICAgICAgICAgICQoaW5wdXRGaWVsZCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goUHJvc3BlY3RTdG9yZS5hY3Rpb25DcmVhdG9ycy51cGRhdGVQcm9zcGVjdFJlcXVlc3QoKSk7XHJcbiAgICB9LFxyXG4gICAgY2FuY2VsUHJvc3BlY3Q6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmUgd2FudCB0byBjYW5jZWw/JykpIHtcclxuICAgICAgICAgICAgKGRvY3VtZW50IGFzIGFueSkubG9jYXRpb24gPSBhZ2lsZW5ldHVybCArIFwiRGFzaGJvYXJkL0Fkdmlzb3IvQ2xpZW50UHJvc3BlY3RMaXN0aW5nLmFzcHg/YWdlbnRJZD0wMzQ5OVwiO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRpc3BhdGNoKExvYWRlclN0b3JlLmFjdGlvbkNyZWF0b3JzLmxvYWRlckJlZ2luKCkpO1xyXG4gICAgICAgIGRpc3BhdGNoKFByb3NwZWN0U3RvcmUuYWN0aW9uQ3JlYXRvcnNBZ2VudENvZGUuc2V0QWdlbnRDb2RlKCh3aW5kb3cgYXMgYW55KS5fX2FnZW50Q29kZV9fKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goU3RhdGVTdG9yZS5hY3Rpb25DcmVhdG9ycy5mZXRjaFN0YXRlUmVxdWVzdCgpKTtcclxuICAgICAgICBkaXNwYXRjaChQcm9zcGVjdFN0b3JlLmFjdGlvbkNyZWF0b3JzLmZldGNoUHJvc3BlY3RSZXF1ZXN0KCh3aW5kb3cgYXMgYW55KS5fX1BST1NQRUNUSURfXykpOyAgICAgICAgXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuaW50ZXJmYWNlIHByb3NwZWN0UHJvcHMge1xyXG4gICAgY2FuY2VsUHJvc3BlY3Q6ICgpID0+IHZvaWQ7XHJcbiAgICBzYXZlUHJvc3BlY3Q6ICgpID0+IHZvaWQ7XHJcbiAgICBmb3JtRXJyb3JzOiBhbnk7XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBjb21wb25lbnREaWRNb3VudDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBBcHBFcnJvciA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgU29tZXRoaW5nIHdlbnQgd3JvbmchISEge3Byb3BzLmVycm9yfVxyXG4gICAgPC9kaXY+KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQcm9zcGVjdEVkaXRDb250YWluZXIpIGFzIHR5cGVvZiBQcm9zcGVjdEVkaXRDb250YWluZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL1Byb3NwZWN0Q29udGFpbmVyL1Byb3NwZWN0RWRpdENvbnRhaW5lci50c3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgJy4vVGFiQ29udGFpbmVyLmNzcyc7XHJcbmNvbnN0IGNsZWFyU3R5bGUgPSB7Y2xlYXI6J2JvdGgnLCBoZWlnaHQ6JzIwcHgnfTtcclxuZXhwb3J0IGNsYXNzIFRhYkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksYW55PiB7ICAgICAgIFxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy50YWJIZWFkZXIoKTtcclxuICAgICAgICB2YXIgY3VzdG9tU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogXCIzMHB4XCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBtYWluU3R5bGUgPSB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJwYWQyMCBtYWluU3R5bGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTIgY3VzdG9tU3R5bGVcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Plx0XHRcclxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVx0XHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtjbGVhclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cdFx0XHRcdFxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0YWJIZWFkZXIoKXtcclxuICAgICAgICBsZXQgY291bnQgPSAwOyAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaGVhZGVyTGluayA9IHRoaXMucHJvcHMuY2hpbGRyZW4ubWFwKChjaGlsZCxpKSA9PiB7ICAgICAgICAgICAgXHJcblx0XHRcdFx0XHRcdGxldCBoZWFkZXJJZCA9IGNoaWxkLnByb3BzLm5hbWUuc3BsaXQoJyAnKS5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgPSBjb3VudCArIDEgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxUYWJIZWFkZXIga2V5PXtpfSBpZCA9e2hlYWRlcklkfSBoZWFkZXJOYW1lID0ge2NoaWxkLnByb3BzLm5hbWV9ICBpc0RlZmF1bHQgPSB7Y2hpbGQucHJvcHMuaXNEZWZhdWx0VGFifSBpbmRleCA9IHtjb3VudH0gLz4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuICg8c3BhbiBjbGFzc05hbWU9XCJub2JyXCI+IHtoZWFkZXJMaW5rfSA8L3NwYW4+KTtcclxuICAgIH1cclxufVxyXG5cclxuLypcclxuZGVjbGFyZSBuYW1lc3BhY2UgSlNYIHtcclxuICAgIGludGVyZmFjZSBJbnRyaW5zaWNFbGVtZW50cyB7XHJcbiAgICAgICAgbm9icjogYW55XHJcbiAgICB9XHJcbn0qL1xyXG5cclxuY2xhc3MgVGFiSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSxhbnk+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID17IGlkOiB0aGlzLnByb3BzLmlkICsgXCJUYWJcIixpbmRleCA6IHRoaXMucHJvcHMuaW5kZXgsIGlzRGVmYXVsdDogdGhpcy5wcm9wcy5pc0RlZmF1bHQsIGN1cnJlbnRUYWJJbmRleDogMCB9O1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQWN0aXZlID0gdGhpcy5jaGFuZ2VBY3RpdmUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoPGxpIGNsYXNzTmFtZSA9IFwidGFiTGlzdEl0ZW0gYWN0aXZlVGFiXCIgbmFtZSA9IFwiZm9sZGVyVGFiXCIgaWQgPSB7dGhpcy5zdGF0ZS5pZH0gb25DbGljayA9IHt0aGlzLmNoYW5nZUFjdGl2ZX0gPiBcclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5oZWFkZXJOYW1lfSBcclxuICAgICAgICAgICAgICAgIDwvbGk+KTtcclxuICAgIH1cclxuICAgIGNoYW5nZUFjdGl2ZSA9ICgpID0+IHsgICAgICAgIFxyXG4gICAgICAgIHZhciB4eXogPSAkKFwiW25hbWU9J2ZvbGRlclRhYiddXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeHl6Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICQoeHl6W2ldKS5hdHRyKFwiY2xhc3NcIiwgXCJ0YWJMaXN0SXRlbSByZWFjdC10YWJIZWFkZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjXCIgKyB0aGlzLnN0YXRlLmlkKS5hdHRyKFwiY2xhc3NcIiwgXCJ0YWJMaXN0SXRlbSBhY3RpdmVUYWIgIHJlYWN0LXRhYkhlYWRlclwiKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFRhYkluZGV4OiB0aGlzLnByb3BzLmluZGV4fSk7XHJcbiAgICAgICAgdGhpcy5zaG93Q29udGVudCh0aGlzLnN0YXRlLmlkKTtcclxuICAgIH1cclxuICAgIHNob3dDb250ZW50KHgpIHtcdFx0XHJcbiAgICAgICAgdmFyIGNvbkJveGVzID0gJChcIltuYW1lPSdjb250ZW50Qm94J11cIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25Cb3hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAkKGNvbkJveGVzW2ldKS5hdHRyKFwiY2xhc3NcIiwgXCJub1Nob3cgcmVhY3QtdGFiQ29udGVudFwiKTtcclxuICAgICAgICAgICAgJChjb25Cb3hlc1tpXSkuYXR0cihcInN0eWxlXCIsIFwiZGlzcGxheTpub25lXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgeFBhcnRzID0geC5zcGxpdCgnVGFiJyk7XHJcbiAgICAgICAgbGV0IHdoaWNoQm94ID0geFBhcnRzWzBdO1xyXG4gICAgICAgICQoXCIjXCIgKyB3aGljaEJveCArICdCb3gnKS5hdHRyKFwiY2xhc3NcIiwgXCJzaG93IHJlYWN0LXRhYkNvbnRlbnRcIik7XHJcbiAgICAgICAgJChcIiNcIiArIHdoaWNoQm94ICsgJ0JveCcpLmF0dHIoXCJzdHlsZVwiLCBcImRpc3BsYXk6YmxvY2tcIik7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzRGVmYXVsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUoKXtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksYW55PiB7XHJcbiAgIHJlbmRlcigpe1xyXG5cdFx0bGV0IGlkID0gdGhpcy5wcm9wcy5uYW1lLnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkID0ge2lkICsgXCJCb3hcIn0gbmFtZSA9IFwiY29udGVudEJveFwiIGNsYXNzTmFtZSA9IFwibm9TaG93IHJlYWN0LXRhYkNvbnRlbnRcIiA+IFxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17Y2xlYXJTdHlsZX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9UYWJDb250YWluZXJDb21wb25lbnQvVGFiQ29udGFpbmVyQ29tcG9uZW50LnRzeCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhcmVkL1RhYkNvbnRhaW5lckNvbXBvbmVudC9UYWJDb250YWluZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5jbGFzcyBWYWxpY1ZhbGlkYXRpb25NZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSxhbnk+eyAgIFxyXG4gICAgcmVuZGVyKCl7ICAgICAgXHJcbiAgICAgICAgY29uc3Qge2Zvcm1FcnJvcnN9ICAgPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9J2Zvcm0tZXJyb3JzJz5cclxuICAgICAgICAgICAge2Zvcm1FcnJvcnMgIT09IHVuZGVmaW5lZCAmJiBmb3JtRXJyb3JzLmxlbmd0aCA+MCA/IGZvcm1FcnJvcnMubWFwKChmaWVsZCwgaSkgPT4ge1xyXG4gICAgICBpZihmaWVsZC5lcnJvck1lc3NhZ2UgIT09IFwiXCIpe1xyXG4gICAgICAgIHJldHVybiAoICAgICAgICAgIFxyXG5cdFx0ICA8cCAga2V5PXtpfT48bGFiZWwga2V5PXtpfSBjbGFzc05hbWU9XCJ0b29sdGlwLXRleHQgZm9ybS1lcnJvclwiPnsgZmllbGQuZXJyb3JNZXNzYWdlfSA8L2xhYmVsPjwvcD5cclxuICAgICAgICApICAgICAgICBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH1cclxuICAgIH0pOicnfVxyXG4gIDwvZGl2Pik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgUHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGZvcm1FcnJvcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZpZWxkTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG4gICAgICAgIH0pLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYWxpY1ZhbGlkYXRpb25NZXNzYWdlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvVmFsaWNWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudC9WYWxpY1ZhbGlkYXRpb25NZXNzYWdlQ29tcG9uZW50LnRzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9sb2FkZXIuY3NzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdHJlbmRlcigpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nU3R5bGVcIj4gPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj48L2Rpdj4gPC9kaXY+KTtcclxuXHR9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvTG9hZGVyQ29tcG9uZW50L0xvYWRlckNvbXBvbmVudC50c3giLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYXJlZC9Mb2FkZXJDb21wb25lbnQvbG9hZGVyLmNzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZhbGljSW5wdXQgZnJvbSAnLi4vLi4vc2hhcmVkL1ZhbGljSW5wdXRDb21wb25lbnQvVmFsaWNJbnB1dENvbXBvbmVudCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7ZXJyb3JDbGFzc30gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxpdHkvVXRpbGl0eSc7XHJcblxyXG4vKlxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZXN7XHJcbkNvZGU6c3RyaW5nO1xyXG59Ki9cclxuXHJcbmNsYXNzIFBlcnNvbmFsSW5mb3JtYXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVXNlcklucHV0ID0gdGhpcy5oYW5kbGVVc2VySW5wdXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnZhbGljSW5wdXRDaGFuZ2UgPSB0aGlzLnZhbGljSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHZhbGljSW5wdXRDaGFuZ2UoZSl7XHJcbiAgICAgICAgY29uc3QgeyB2YWxpY0lucHV0Q2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhbGljSW5wdXRDaGFuZ2UoZSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVVc2VySW5wdXQoZSkge1xyXG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgb25DaGFuZ2UoZSk7XHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgeyBzdGF0ZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHN0YXRlc0xpc3REb3duO1xyXG4gICAgICAgIGlmIChzdGF0ZXMgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgc3RhdGVzTGlzdERvd24gPSBPYmplY3Qua2V5cyhzdGF0ZXMpLm1hcCgoa2V5LCBpbmRleCkgPT4geyByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17c3RhdGVzW2tleV0uQ29kZX0gPntzdGF0ZXNba2V5XS5Db2RlfTwvb3B0aW9uPiB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLz0gc3RhdGVzICE9PSB1bmRlZmluZWQgPyBzdGF0ZXMubWFwKChpdGVtLCBpbmRleCkgPT4geyByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT0ge2l0ZW0uQ29kZX0+e2l0ZW0uQ29kZX08L29wdGlvbj59KTogJyc7XHRcdFx0XHRcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ0aXRsZVwiIHZhbHVlPXt0aGlzLnByb3BzLnRpdGxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TXIuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk1ycy48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TXMuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkRyLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5SZXYuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZm9ybS1ncm91cCBjb2wtc20tNCAke2Vycm9yQ2xhc3ModGhpcy5wcm9wcy5lcnJvcnMsICdmaXJzdE5hbWUnKX1gfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1pZGRsZUluaXRpYWxcIj5NSTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJtaWRkbGVJbml0aWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTUlcIiB2YWx1ZT17dGhpcy5wcm9wcy5taWRkbGVJbml0aWFsfSBtYXgtbGVuZ3RoPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZvcm0tZ3JvdXAgY29sLXNtLTUgJHtlcnJvckNsYXNzKHRoaXMucHJvcHMuZXJyb3JzLCAnbGFzdE5hbWUnKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb3JtYXNtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bmb3JtLWdyb3VwIGNvbC1zbS0zICR7ZXJyb3JDbGFzcyh0aGlzLnByb3BzLmVycm9ycywgJ3NzbicpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNzblwiPlNTTjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWYWxpY0lucHV0IHR5cGU9XCJzc25cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwic3NuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQUFBLUFBLUFBQUFcIiBtYXNrPVwiKioqXFwtKipcXC0qKioqXCIgbWFza0NoYXI9XCJfXCIgb25DaGFuZ2U9e3RoaXMudmFsaWNJbnB1dENoYW5nZX0gcmVxdWlyZWQgdmFsdWU9e3RoaXMucHJvcHMuc3NufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPbmx5IGNoYW5nZSBTU04gaWYgeW91IGtub3cgdGhlIHJlYWwgdmFsdWUuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRhdGVPZkJpcnRoXCI+RGF0ZSBPZiBCaXJ0aDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGRhdGEtZGF0ZUJpcnRoPSd0cnVlJyBuYW1lPVwiZGF0ZU9mQmlydGhcIiB2YWx1ZT17dGhpcy5wcm9wcy5kYXRlT2ZCaXJ0aH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlbmRlclwiPkdlbmRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIxXCIgbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuZ2VuZGVyID09PSBcIjFcIn0gLz5NYWxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIyXCIgbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuZ2VuZGVyID09PSBcIjJcIn0gLz5GZW1hbGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNDaXRpemVuXCI+VVMgQ2l0aXplbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInVzQ2l0aXplblwiIHZhbHVlPVwiMVwiIGNoZWNrZWQ9e3RoaXMucHJvcHMudXNDaXRpemVuID09PSBcIjFcIn0gLz5ZZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ1c0NpdGl6ZW5cIiB2YWx1ZT1cIjBcIiBjaGVja2VkPXt0aGlzLnByb3BzLnVzQ2l0aXplbiA9PT0gXCIwXCJ9IC8+Tm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1hcml0YWxTdGF0dXNcIj5NYXJpdGFsIFN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm1hcml0YWxTdGF0dXNcIiB2YWx1ZT1cIjFcIiBjaGVja2VkPXt0aGlzLnByb3BzLm1hcml0YWxTdGF0dXMgPT09IFwiMVwifSAvPk1hcnJpZWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibWFyaXRhbFN0YXR1c1wiIHZhbHVlPVwiMFwiIGNoZWNrZWQ9e3RoaXMucHJvcHMubWFyaXRhbFN0YXR1cyA9PT0gXCIwXCJ9IC8+Tm90IE1hcnJpZWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibWFyaXRhbFN0YXR1c1wiIHZhbHVlPVwiNlwiIGNoZWNrZWQ9e3RoaXMucHJvcHMubWFyaXRhbFN0YXR1cyAhPT0gXCIxXCIgJiYgdGhpcy5wcm9wcy5tYXJpdGFsU3RhdHVzICE9PSBcIjBcIn0gLz5DaXZpbCBVbmlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaGFsZi1ydWxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkhvbWUgQWRkcmVzczo8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvbWVBZGRyZXNzTGluZTFcIj5BZGRyZXNzIExpbmUgMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImhvbWVBZGRyZXNzTGluZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgTGluZSAxXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5ob21lQWRkcmVzc0xpbmUxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG9tZUFkZHJlc3NMaW5lMlwiPkFkZHJlc3MgTGluZSAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaG9tZUFkZHJlc3NMaW5lMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBMaW5lIDJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmhvbWVBZGRyZXNzTGluZTJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob21lQWRkcmVzc0xpbmUzXCI+QWRkcmVzcyBMaW5lIDM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJob21lQWRkcmVzc0xpbmUzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIExpbmUgM1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaG9tZUFkZHJlc3NMaW5lM30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG9tZUFkZHJlc3NDaXR5XCI+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImhvbWVBZGRyZXNzQ2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2l0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaG9tZUFkZHJlc3NDaXR5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvbWVBZGRyZXNzU3RhdGVcIj5TdGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiaG9tZUFkZHJlc3NTdGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaG9tZUFkZHJlc3NTdGF0ZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGVzTGlzdERvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG9tZUFkZHJlc3NaaXBDb2RlXCI+WmlwIENvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJob21lQWRkcmVzc1ppcENvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlppcENvZGVcIiBtYXgtbGVuZ3RoPVwiNVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaG9tZUFkZHJlc3NaaXBDb2RlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYWlsaW5nIEFkZHJlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1haWxpbmdBZGRyZXNzTGluZTFcIj5BZGRyZXNzIExpbmUgMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm1haWxpbmdBZGRyZXNzTGluZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgTGluZSAxXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5tYWlsaW5nQWRkcmVzc0xpbmUxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFpbGluZ0FkZHJlc3NMaW5lMlwiPkFkZHJlc3MgTGluZSAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibWFpbGluZ0FkZHJlc3NMaW5lMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBMaW5lIDJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLm1haWxpbmdBZGRyZXNzTGluZTJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYWlsaW5nQWRkcmVzc0xpbmUzXCI+QWRkcmVzcyBMaW5lIDM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJtYWlsaW5nQWRkcmVzc0xpbmUzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIExpbmUgM1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMubWFpbGluZ0FkZHJlc3NMaW5lM30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFpbGluZ0FkZHJlc3NDaXR5XCI+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm1haWxpbmdBZGRyZXNzQ2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2l0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMubWFpbGluZ0FkZHJlc3NDaXR5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1haWxpbmdBZGRyZXNzU3RhdGVcIj5TdGF0ZTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIm1haWxpbmdBZGRyZXNzU3RhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLm1haWxpbmdBZGRyZXNzU3RhdGV9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGVzTGlzdERvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFpbGluZ0FkZHJlc3NaaXBDb2RlXCI+WmlwIENvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJtYWlsaW5nQWRkcmVzc1ppcENvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlppcENvZGVcIiBtYXgtbGVuZ3RoPVwiNVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMubWFpbGluZ0FkZHJlc3NaaXBDb2RlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob21lUGhvbmVcIj5Ib21lIFBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZhbGljSW5wdXQgdHlwZT1cInBob25lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImhvbWVQaG9uZVwiIG1hc2s9XCJcXCg5OTlcXCk5OTlcXC05OTk5XCIgbWFza0NoYXI9XCJfXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnZhbGljSW5wdXRDaGFuZ2V9IHZhbHVlPXt0aGlzLnByb3BzLmhvbWVQaG9uZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3b3JrUGhvbmVcIj5Xb3JrIFBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZhbGljSW5wdXQgdHlwZT1cInBob25lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIndvcmtQaG9uZVwiIG1hc2s9XCJcXCg5OTlcXCk5OTlcXC05OTk5XCIgbWFza0NoYXI9XCJfXCIgb25DaGFuZ2U9e3RoaXMudmFsaWNJbnB1dENoYW5nZX0gdmFsdWU9e3RoaXMucHJvcHMud29ya1Bob25lfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdGhlclBob25lXCI+T3RoZXIgUGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwicGhvbmVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwib3RoZXJQaG9uZVwiIG1hc2s9XCJcXCg5OTlcXCk5OTlcXC05OTk5XCIgbWFza0NoYXI9XCJfXCIgb25DaGFuZ2U9e3RoaXMudmFsaWNJbnB1dENoYW5nZX0gdmFsdWU9e3RoaXMucHJvcHMub3RoZXJQaG9uZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVmZXJyYWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IGNoZWNrZWQ9e3RoaXMucHJvcHMucmVmZXJyYWx9IC8+UmVmZXJyYWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbEFkZHJlc3NcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZhbGljSW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImVtYWlsQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLnZhbGljSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5lbWFpbEFkZHJlc3N9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbnN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcblx0XHQgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICB2YWxpY0lucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNvbmFsSW5mb3JtYXRpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvUGVyc29uYWxJbmZvcm1hdGlvbkNvbXBvbmVudC50c3giLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3BhcnNlTWFzayA9IHJlcXVpcmUoJy4vdXRpbHMvcGFyc2VNYXNrJyk7XG5cbnZhciBfcGFyc2VNYXNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlTWFzayk7XG5cbnZhciBfZW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL3V0aWxzL2Vudmlyb25tZW50Jyk7XG5cbnZhciBfc3RyaW5nID0gcmVxdWlyZSgnLi91dGlscy9zdHJpbmcnKTtcblxudmFyIF9kZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKTtcblxudmFyIF9kZWZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fubmlhc3Npbi9yZWFjdC1pbnB1dC1tYXNrXG5cblxudmFyIElucHV0RWxlbWVudCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhJbnB1dEVsZW1lbnQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIElucHV0RWxlbWVudChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dEVsZW1lbnQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKElucHV0RWxlbWVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKElucHV0RWxlbWVudCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICB2YXIgbWFzayA9IHByb3BzLm1hc2ssXG4gICAgICAgIG1hc2tDaGFyID0gcHJvcHMubWFza0NoYXIsXG4gICAgICAgIGZvcm1hdENoYXJzID0gcHJvcHMuZm9ybWF0Q2hhcnMsXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgICAgYWx3YXlzU2hvd01hc2sgPSBwcm9wcy5hbHdheXNTaG93TWFzaztcblxuXG4gICAgX3RoaXMuaGFzVmFsdWUgPSB2YWx1ZSAhPSBudWxsO1xuICAgIF90aGlzLm1hc2tPcHRpb25zID0gKDAsIF9wYXJzZU1hc2syLmRlZmF1bHQpKG1hc2ssIG1hc2tDaGFyLCBmb3JtYXRDaGFycyk7XG5cbiAgICBpZiAoZGVmYXVsdFZhbHVlID09IG51bGwpIHtcbiAgICAgIGRlZmF1bHRWYWx1ZSA9ICcnO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBfdGhpcy5nZXRTdHJpbmdWYWx1ZSh2YWx1ZSk7XG5cbiAgICBpZiAoX3RoaXMubWFza09wdGlvbnMubWFzayAmJiAoYWx3YXlzU2hvd01hc2sgfHwgdmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9ICgwLCBfc3RyaW5nLmZvcm1hdFZhbHVlKShfdGhpcy5tYXNrT3B0aW9ucywgdmFsdWUpO1xuICAgIH1cblxuICAgIF90aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIElucHV0RWxlbWVudDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbnZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgdGhpcy5sYXN0Q3Vyc29yUG9zID0gbnVsbDtcbiAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG5cbiAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpczIuaXNBbmRyb2lkQnJvd3NlciA9ICgwLCBfZW52aXJvbm1lbnQuaXNBbmRyb2lkQnJvd3NlcikoKTtcbiAgICBfdGhpczIuaXNXaW5kb3dzUGhvbmVCcm93c2VyID0gKDAsIF9lbnZpcm9ubWVudC5pc1dpbmRvd3NQaG9uZUJyb3dzZXIpKCk7XG4gICAgX3RoaXMyLmlzQW5kcm9pZEZpcmVmb3ggPSAoMCwgX2Vudmlyb25tZW50LmlzQW5kcm9pZEZpcmVmb3gpKCk7XG5cbiAgICBpZiAoX3RoaXMyLm1hc2tPcHRpb25zLm1hc2sgJiYgX3RoaXMyLmdldElucHV0VmFsdWUoKSAhPT0gX3RoaXMyLnZhbHVlKSB7XG4gICAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZShfdGhpczIudmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiAobmV4dFByb3BzKSB7XG4gICAgdmFyIG9sZE1hc2tPcHRpb25zID0gX3RoaXMyLm1hc2tPcHRpb25zO1xuXG4gICAgX3RoaXMyLmhhc1ZhbHVlID0gbmV4dFByb3BzLnZhbHVlICE9IG51bGw7XG4gICAgX3RoaXMyLm1hc2tPcHRpb25zID0gKDAsIF9wYXJzZU1hc2syLmRlZmF1bHQpKG5leHRQcm9wcy5tYXNrLCBuZXh0UHJvcHMubWFza0NoYXIsIG5leHRQcm9wcy5mb3JtYXRDaGFycyk7XG5cbiAgICBpZiAoIV90aGlzMi5tYXNrT3B0aW9ucy5tYXNrKSB7XG4gICAgICBfdGhpczIuYmFja3NwYWNlT3JEZWxldGVSZW1vdmFsID0gbnVsbDtcbiAgICAgIF90aGlzMi5sYXN0Q3Vyc29yUG9zID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXNNYXNrQ2hhbmdlZCA9IF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICYmIF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICE9PSBvbGRNYXNrT3B0aW9ucy5tYXNrO1xuICAgIHZhciBzaG93RW1wdHkgPSBuZXh0UHJvcHMuYWx3YXlzU2hvd01hc2sgfHwgX3RoaXMyLmlzRm9jdXNlZCgpO1xuICAgIHZhciBuZXdWYWx1ZSA9IF90aGlzMi5oYXNWYWx1ZSA/IF90aGlzMi5nZXRTdHJpbmdWYWx1ZShuZXh0UHJvcHMudmFsdWUpIDogX3RoaXMyLnZhbHVlO1xuXG4gICAgaWYgKCFvbGRNYXNrT3B0aW9ucy5tYXNrICYmICFfdGhpczIuaGFzVmFsdWUpIHtcbiAgICAgIG5ld1ZhbHVlID0gX3RoaXMyLmdldElucHV0RE9NTm9kZSgpLnZhbHVlO1xuICAgIH1cblxuICAgIGlmIChpc01hc2tDaGFuZ2VkIHx8IF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICYmIChuZXdWYWx1ZSB8fCBzaG93RW1wdHkpKSB7XG4gICAgICBuZXdWYWx1ZSA9ICgwLCBfc3RyaW5nLmZvcm1hdFZhbHVlKShfdGhpczIubWFza09wdGlvbnMsIG5ld1ZhbHVlKTtcblxuICAgICAgaWYgKGlzTWFza0NoYW5nZWQpIHtcbiAgICAgICAgdmFyIHBvcyA9IF90aGlzMi5sYXN0Q3Vyc29yUG9zO1xuICAgICAgICB2YXIgZmlsbGVkTGVuID0gKDAsIF9zdHJpbmcuZ2V0RmlsbGVkTGVuZ3RoKShfdGhpczIubWFza09wdGlvbnMsIG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKHBvcyA9PT0gbnVsbCB8fCBmaWxsZWRMZW4gPCBwb3MpIHtcbiAgICAgICAgICBpZiAoKDAsIF9zdHJpbmcuaXNGaWxsZWQpKF90aGlzMi5tYXNrT3B0aW9ucywgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgICBwb3MgPSBmaWxsZWRMZW47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvcyA9IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKGZpbGxlZExlbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIF90aGlzMi5zZXRDdXJzb3JQb3MocG9zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChfdGhpczIubWFza09wdGlvbnMubWFzayAmJiAoMCwgX3N0cmluZy5pc0VtcHR5KShfdGhpczIubWFza09wdGlvbnMsIG5ld1ZhbHVlKSAmJiAhc2hvd0VtcHR5ICYmICghX3RoaXMyLmhhc1ZhbHVlIHx8ICFuZXh0UHJvcHMudmFsdWUpKSB7XG4gICAgICBuZXdWYWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIF90aGlzMi52YWx1ZSA9IG5ld1ZhbHVlO1xuICB9O1xuXG4gIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfdGhpczIubWFza09wdGlvbnMubWFzayAmJiBfdGhpczIuZ2V0SW5wdXRWYWx1ZSgpICE9PSBfdGhpczIudmFsdWUpIHtcbiAgICAgIF90aGlzMi5zZXRJbnB1dFZhbHVlKF90aGlzMi52YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuaXNET01FbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoSFRNTEVsZW1lbnQpKSA9PT0gJ29iamVjdCcgPyBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgLy8gRE9NMlxuICAgIDogZWxlbWVudC5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2YgZWxlbWVudC5ub2RlTmFtZSA9PT0gJ3N0cmluZyc7XG4gIH07XG5cbiAgdGhpcy5nZXRJbnB1dERPTU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0ID0gX3RoaXMyLmlucHV0O1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChfdGhpczIuaXNET01FbGVtZW50KGlucHV0KSkge1xuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIC8vIFJlYWN0IDAuMTNcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmZpbmRET01Ob2RlKGlucHV0KTtcbiAgfTtcblxuICB0aGlzLmdldElucHV0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0ID0gX3RoaXMyLmdldElucHV0RE9NTm9kZSgpO1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgfTtcblxuICB0aGlzLnNldElucHV0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgaW5wdXQgPSBfdGhpczIuZ2V0SW5wdXRET01Ob2RlKCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIF90aGlzMi52YWx1ZSA9IHZhbHVlO1xuICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gIH07XG5cbiAgdGhpcy5nZXRMZWZ0RWRpdGFibGVQb3MgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgZm9yICh2YXIgaSA9IHBvczsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIGlmICghKDAsIF9zdHJpbmcuaXNQZXJtYW5lbnRDaGFyKShfdGhpczIubWFza09wdGlvbnMsIGkpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB0aGlzLmdldFJpZ2h0RWRpdGFibGVQb3MgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgdmFyIG1hc2sgPSBfdGhpczIubWFza09wdGlvbnMubWFzaztcblxuICAgIGZvciAodmFyIGkgPSBwb3M7IGkgPCBtYXNrLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoISgwLCBfc3RyaW5nLmlzUGVybWFuZW50Q2hhcikoX3RoaXMyLm1hc2tPcHRpb25zLCBpKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdGhpcy5zZXRDdXJzb3JUb0VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmlsbGVkTGVuID0gKDAsIF9zdHJpbmcuZ2V0RmlsbGVkTGVuZ3RoKShfdGhpczIubWFza09wdGlvbnMsIF90aGlzMi52YWx1ZSk7XG4gICAgdmFyIHBvcyA9IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKGZpbGxlZExlbik7XG4gICAgaWYgKHBvcyAhPT0gbnVsbCkge1xuICAgICAgX3RoaXMyLnNldEN1cnNvclBvcyhwb3MpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnNldFNlbGVjdGlvbiA9IGZ1bmN0aW9uIChzdGFydCkge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG5cbiAgICB2YXIgaW5wdXQgPSBfdGhpczIuZ2V0SW5wdXRET01Ob2RlKCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBzdGFydCArIGxlbjtcbiAgICBpZiAoJ3NlbGVjdGlvblN0YXJ0JyBpbiBpbnB1dCAmJiAnc2VsZWN0aW9uRW5kJyBpbiBpbnB1dCkge1xuICAgICAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBzdGFydDtcbiAgICAgIGlucHV0LnNlbGVjdGlvbkVuZCA9IGVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJhbmdlID0gaW5wdXQuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcbiAgICAgIHJhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgc3RhcnQpO1xuICAgICAgcmFuZ2UubW92ZUVuZCgnY2hhcmFjdGVyJywgZW5kIC0gc3RhcnQpO1xuICAgICAgcmFuZ2Uuc2VsZWN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuZ2V0U2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9IF90aGlzMi5nZXRJbnB1dERPTU5vZGUoKTtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIHZhciBlbmQgPSAwO1xuXG4gICAgaWYgKCdzZWxlY3Rpb25TdGFydCcgaW4gaW5wdXQgJiYgJ3NlbGVjdGlvbkVuZCcgaW4gaW5wdXQpIHtcbiAgICAgIHN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICBlbmQgPSBpbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpO1xuICAgICAgaWYgKHJhbmdlLnBhcmVudEVsZW1lbnQoKSA9PT0gaW5wdXQpIHtcbiAgICAgICAgc3RhcnQgPSAtcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAtaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgZW5kID0gLXJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIC1pbnB1dC52YWx1ZS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBlbmQ6IGVuZCxcbiAgICAgIGxlbmd0aDogZW5kIC0gc3RhcnRcbiAgICB9O1xuICB9O1xuXG4gIHRoaXMuZ2V0Q3Vyc29yUG9zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczIuZ2V0U2VsZWN0aW9uKCkuc3RhcnQ7XG4gIH07XG5cbiAgdGhpcy5zZXRDdXJzb3JQb3MgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgX3RoaXMyLnNldFNlbGVjdGlvbihwb3MsIDApO1xuXG4gICAgKDAsIF9kZWZlcjIuZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnNldFNlbGVjdGlvbihwb3MsIDApO1xuICAgIH0pO1xuXG4gICAgX3RoaXMyLmxhc3RDdXJzb3JQb3MgPSBwb3M7XG4gIH07XG5cbiAgdGhpcy5pc0ZvY3VzZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzMi5mb2N1c2VkO1xuICB9O1xuXG4gIHRoaXMuZ2V0U3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gIXZhbHVlICYmIHZhbHVlICE9PSAwID8gJycgOiB2YWx1ZSArICcnO1xuICB9O1xuXG4gIHRoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgX3RoaXMyLmJhY2tzcGFjZU9yRGVsZXRlUmVtb3ZhbCA9IG51bGw7XG5cbiAgICBpZiAodHlwZW9mIF90aGlzMi5wcm9wcy5vbktleURvd24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cblxuICAgIHZhciBrZXkgPSBldmVudC5rZXksXG4gICAgICAgIGN0cmxLZXkgPSBldmVudC5jdHJsS2V5LFxuICAgICAgICBtZXRhS2V5ID0gZXZlbnQubWV0YUtleSxcbiAgICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XG5cbiAgICBpZiAoY3RybEtleSB8fCBtZXRhS2V5IHx8IGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnQmFja3NwYWNlJyB8fCBrZXkgPT09ICdEZWxldGUnKSB7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gX3RoaXMyLmdldFNlbGVjdGlvbigpO1xuICAgICAgdmFyIGNhblJlbW92ZSA9IGtleSA9PT0gJ0JhY2tzcGFjZScgJiYgc2VsZWN0aW9uLmVuZCA+IDAgfHwga2V5ID09PSAnRGVsZXRlJyAmJiBfdGhpczIudmFsdWUubGVuZ3RoID4gc2VsZWN0aW9uLnN0YXJ0O1xuXG4gICAgICBpZiAoIWNhblJlbW92ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzMi5iYWNrc3BhY2VPckRlbGV0ZVJlbW92YWwgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBzZWxlY3Rpb246IF90aGlzMi5nZXRTZWxlY3Rpb24oKVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBwYXN0ZSA9IF90aGlzMi5wYXN0ZTtcbiAgICB2YXIgX21hc2tPcHRpb25zID0gX3RoaXMyLm1hc2tPcHRpb25zLFxuICAgICAgICBtYXNrID0gX21hc2tPcHRpb25zLm1hc2ssXG4gICAgICAgIG1hc2tDaGFyID0gX21hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgICBsYXN0RWRpdGFibGVQb3MgPSBfbWFza09wdGlvbnMubGFzdEVkaXRhYmxlUG9zLFxuICAgICAgICBwcmVmaXggPSBfbWFza09wdGlvbnMucHJlZml4O1xuXG5cbiAgICB2YXIgdmFsdWUgPSBfdGhpczIuZ2V0SW5wdXRWYWx1ZSgpO1xuICAgIHZhciBvbGRWYWx1ZSA9IF90aGlzMi52YWx1ZTtcblxuICAgIGlmIChwYXN0ZSkge1xuICAgICAgX3RoaXMyLnBhc3RlID0gbnVsbDtcbiAgICAgIF90aGlzMi5wYXN0ZVRleHQocGFzdGUudmFsdWUsIHZhbHVlLCBwYXN0ZS5zZWxlY3Rpb24sIGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZWN0aW9uID0gX3RoaXMyLmdldFNlbGVjdGlvbigpO1xuICAgIHZhciBjdXJzb3JQb3MgPSBzZWxlY3Rpb24uZW5kO1xuICAgIHZhciBtYXNrTGVuID0gbWFzay5sZW5ndGg7XG4gICAgdmFyIHZhbHVlTGVuID0gdmFsdWUubGVuZ3RoO1xuICAgIHZhciBvbGRWYWx1ZUxlbiA9IG9sZFZhbHVlLmxlbmd0aDtcblxuICAgIHZhciBjbGVhcmVkVmFsdWU7XG4gICAgdmFyIGVudGVyZWRTdHJpbmc7XG5cbiAgICBpZiAoX3RoaXMyLmJhY2tzcGFjZU9yRGVsZXRlUmVtb3ZhbCkge1xuICAgICAgdmFyIGRlbGV0ZUZyb21SaWdodCA9IF90aGlzMi5iYWNrc3BhY2VPckRlbGV0ZVJlbW92YWwua2V5ID09PSAnRGVsZXRlJztcbiAgICAgIHZhbHVlID0gX3RoaXMyLnZhbHVlO1xuICAgICAgc2VsZWN0aW9uID0gX3RoaXMyLmJhY2tzcGFjZU9yRGVsZXRlUmVtb3ZhbC5zZWxlY3Rpb247XG4gICAgICBjdXJzb3JQb3MgPSBzZWxlY3Rpb24uc3RhcnQ7XG5cbiAgICAgIF90aGlzMi5iYWNrc3BhY2VPckRlbGV0ZVJlbW92YWwgPSBudWxsO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9ICgwLCBfc3RyaW5nLmNsZWFyUmFuZ2UpKF90aGlzMi5tYXNrT3B0aW9ucywgdmFsdWUsIHNlbGVjdGlvbi5zdGFydCwgc2VsZWN0aW9uLmxlbmd0aCk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbi5zdGFydCA8IHByZWZpeC5sZW5ndGggfHwgIWRlbGV0ZUZyb21SaWdodCAmJiBzZWxlY3Rpb24uc3RhcnQgPT09IHByZWZpeC5sZW5ndGgpIHtcbiAgICAgICAgY3Vyc29yUG9zID0gcHJlZml4Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlZGl0YWJsZVBvcyA9IGRlbGV0ZUZyb21SaWdodCA/IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKGN1cnNvclBvcykgOiBfdGhpczIuZ2V0TGVmdEVkaXRhYmxlUG9zKGN1cnNvclBvcyAtIDEpO1xuXG4gICAgICAgIGlmIChlZGl0YWJsZVBvcyAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlID0gKDAsIF9zdHJpbmcuY2xlYXJSYW5nZSkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSwgZWRpdGFibGVQb3MsIDEpO1xuICAgICAgICAgIGN1cnNvclBvcyA9IGVkaXRhYmxlUG9zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZUxlbiA+IG9sZFZhbHVlTGVuKSB7XG4gICAgICB2YXIgZW50ZXJlZFN0cmluZ0xlbiA9IHZhbHVlTGVuIC0gb2xkVmFsdWVMZW47XG4gICAgICB2YXIgc3RhcnRQb3MgPSBzZWxlY3Rpb24uZW5kIC0gZW50ZXJlZFN0cmluZ0xlbjtcbiAgICAgIGVudGVyZWRTdHJpbmcgPSB2YWx1ZS5zdWJzdHIoc3RhcnRQb3MsIGVudGVyZWRTdHJpbmdMZW4pO1xuXG4gICAgICBpZiAoc3RhcnRQb3MgPCBsYXN0RWRpdGFibGVQb3MgJiYgKGVudGVyZWRTdHJpbmdMZW4gIT09IDEgfHwgZW50ZXJlZFN0cmluZyAhPT0gbWFza1tzdGFydFBvc10pKSB7XG4gICAgICAgIGN1cnNvclBvcyA9IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKHN0YXJ0UG9zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnNvclBvcyA9IHN0YXJ0UG9zO1xuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCBzdGFydFBvcykgKyB2YWx1ZS5zdWJzdHIoc3RhcnRQb3MgKyBlbnRlcmVkU3RyaW5nTGVuKTtcblxuICAgICAgY2xlYXJlZFZhbHVlID0gKDAsIF9zdHJpbmcuY2xlYXJSYW5nZSkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSwgc3RhcnRQb3MsIG1hc2tMZW4gLSBzdGFydFBvcyk7XG4gICAgICBjbGVhcmVkVmFsdWUgPSAoMCwgX3N0cmluZy5pbnNlcnRTdHJpbmcpKF90aGlzMi5tYXNrT3B0aW9ucywgY2xlYXJlZFZhbHVlLCBlbnRlcmVkU3RyaW5nLCBjdXJzb3JQb3MpO1xuXG4gICAgICB2YWx1ZSA9ICgwLCBfc3RyaW5nLmluc2VydFN0cmluZykoX3RoaXMyLm1hc2tPcHRpb25zLCBvbGRWYWx1ZSwgZW50ZXJlZFN0cmluZywgY3Vyc29yUG9zKTtcblxuICAgICAgaWYgKGVudGVyZWRTdHJpbmdMZW4gIT09IDEgfHwgY3Vyc29yUG9zID49IHByZWZpeC5sZW5ndGggJiYgY3Vyc29yUG9zIDwgbGFzdEVkaXRhYmxlUG9zKSB7XG4gICAgICAgIGN1cnNvclBvcyA9IE1hdGgubWF4KCgwLCBfc3RyaW5nLmdldEZpbGxlZExlbmd0aCkoX3RoaXMyLm1hc2tPcHRpb25zLCBjbGVhcmVkVmFsdWUpLCBjdXJzb3JQb3MpO1xuICAgICAgICBpZiAoY3Vyc29yUG9zIDwgbGFzdEVkaXRhYmxlUG9zKSB7XG4gICAgICAgICAgY3Vyc29yUG9zID0gX3RoaXMyLmdldFJpZ2h0RWRpdGFibGVQb3MoY3Vyc29yUG9zKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjdXJzb3JQb3MgPCBsYXN0RWRpdGFibGVQb3MpIHtcbiAgICAgICAgY3Vyc29yUG9zKys7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZUxlbiA8IG9sZFZhbHVlTGVuKSB7XG4gICAgICB2YXIgcmVtb3ZlZExlbiA9IG1hc2tMZW4gLSB2YWx1ZUxlbjtcbiAgICAgIGVudGVyZWRTdHJpbmcgPSB2YWx1ZS5zdWJzdHIoMCwgc2VsZWN0aW9uLmVuZCk7XG4gICAgICB2YXIgY2xlYXJPbmx5ID0gZW50ZXJlZFN0cmluZyA9PT0gb2xkVmFsdWUuc3Vic3RyKDAsIHNlbGVjdGlvbi5lbmQpO1xuXG4gICAgICBjbGVhcmVkVmFsdWUgPSAoMCwgX3N0cmluZy5jbGVhclJhbmdlKShfdGhpczIubWFza09wdGlvbnMsIG9sZFZhbHVlLCBzZWxlY3Rpb24uZW5kLCByZW1vdmVkTGVuKTtcblxuICAgICAgaWYgKG1hc2tDaGFyKSB7XG4gICAgICAgIHZhbHVlID0gKDAsIF9zdHJpbmcuaW5zZXJ0U3RyaW5nKShfdGhpczIubWFza09wdGlvbnMsIGNsZWFyZWRWYWx1ZSwgZW50ZXJlZFN0cmluZywgMCk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFyZWRWYWx1ZSA9ICgwLCBfc3RyaW5nLmNsZWFyUmFuZ2UpKF90aGlzMi5tYXNrT3B0aW9ucywgY2xlYXJlZFZhbHVlLCBzZWxlY3Rpb24uZW5kLCBtYXNrTGVuIC0gc2VsZWN0aW9uLmVuZCk7XG4gICAgICBjbGVhcmVkVmFsdWUgPSAoMCwgX3N0cmluZy5pbnNlcnRTdHJpbmcpKF90aGlzMi5tYXNrT3B0aW9ucywgY2xlYXJlZFZhbHVlLCBlbnRlcmVkU3RyaW5nLCAwKTtcblxuICAgICAgaWYgKCFjbGVhck9ubHkpIHtcbiAgICAgICAgY3Vyc29yUG9zID0gTWF0aC5tYXgoKDAsIF9zdHJpbmcuZ2V0RmlsbGVkTGVuZ3RoKShfdGhpczIubWFza09wdGlvbnMsIGNsZWFyZWRWYWx1ZSksIGN1cnNvclBvcyk7XG4gICAgICAgIGlmIChjdXJzb3JQb3MgPCBsYXN0RWRpdGFibGVQb3MpIHtcbiAgICAgICAgICBjdXJzb3JQb3MgPSBfdGhpczIuZ2V0UmlnaHRFZGl0YWJsZVBvcyhjdXJzb3JQb3MpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGN1cnNvclBvcyA8IHByZWZpeC5sZW5ndGgpIHtcbiAgICAgICAgY3Vyc29yUG9zID0gcHJlZml4Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFsdWUgPSAoMCwgX3N0cmluZy5mb3JtYXRWYWx1ZSkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSk7XG5cbiAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG5cbiAgICBpZiAodHlwZW9mIF90aGlzMi5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgX3RoaXMyLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoX3RoaXMyLmlzV2luZG93c1Bob25lQnJvd3Nlcikge1xuICAgICAgKDAsIF9kZWZlcjIuZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2V0U2VsZWN0aW9uKGN1cnNvclBvcywgMCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMyLnNldEN1cnNvclBvcyhjdXJzb3JQb3MpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBfdGhpczIuZm9jdXNlZCA9IHRydWU7XG5cbiAgICBpZiAoX3RoaXMyLm1hc2tPcHRpb25zLm1hc2spIHtcbiAgICAgIGlmICghX3RoaXMyLnZhbHVlKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBfdGhpczIubWFza09wdGlvbnMucHJlZml4O1xuICAgICAgICB2YXIgdmFsdWUgPSAoMCwgX3N0cmluZy5mb3JtYXRWYWx1ZSkoX3RoaXMyLm1hc2tPcHRpb25zLCBwcmVmaXgpO1xuICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9ICgwLCBfc3RyaW5nLmZvcm1hdFZhbHVlKShfdGhpczIubWFza09wdGlvbnMsIHZhbHVlKTtcblxuICAgICAgICAvLyBkbyBub3QgdXNlIHRoaXMuZ2V0SW5wdXRWYWx1ZSBhbmQgdGhpcy5zZXRJbnB1dFZhbHVlIGFzIHRoaXMuaW5wdXRcbiAgICAgICAgLy8gY2FuIGJlIHVuZGVmaW5lZCBhdCB0aGlzIG1vbWVudCBpZiBhdXRvRm9jdXMgYXR0cmlidXRlIGlzIHNldFxuICAgICAgICB2YXIgaXNJbnB1dFZhbHVlQ2hhbmdlZCA9IGlucHV0VmFsdWUgIT09IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoaXNJbnB1dFZhbHVlQ2hhbmdlZCkge1xuICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIudmFsdWUgPSBpbnB1dFZhbHVlO1xuXG4gICAgICAgIGlmIChpc0lucHV0VmFsdWVDaGFuZ2VkICYmIHR5cGVvZiBfdGhpczIucHJvcHMub25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMyLnNldEN1cnNvclRvRW5kKCk7XG4gICAgICB9IGVsc2UgaWYgKCgwLCBfc3RyaW5nLmdldEZpbGxlZExlbmd0aCkoX3RoaXMyLm1hc2tPcHRpb25zLCBfdGhpczIudmFsdWUpIDwgX3RoaXMyLm1hc2tPcHRpb25zLm1hc2subGVuZ3RoKSB7XG4gICAgICAgIF90aGlzMi5zZXRDdXJzb3JUb0VuZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX3RoaXMyLnByb3BzLm9uRm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBfdGhpczIuZm9jdXNlZCA9IGZhbHNlO1xuXG4gICAgaWYgKF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICYmICFfdGhpczIucHJvcHMuYWx3YXlzU2hvd01hc2sgJiYgKDAsIF9zdHJpbmcuaXNFbXB0eSkoX3RoaXMyLm1hc2tPcHRpb25zLCBfdGhpczIudmFsdWUpKSB7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgdmFyIGlzSW5wdXRWYWx1ZUNoYW5nZWQgPSBpbnB1dFZhbHVlICE9PSBfdGhpczIuZ2V0SW5wdXRWYWx1ZSgpO1xuXG4gICAgICBpZiAoaXNJbnB1dFZhbHVlQ2hhbmdlZCkge1xuICAgICAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZShpbnB1dFZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSW5wdXRWYWx1ZUNoYW5nZWQgJiYgdHlwZW9mIF90aGlzMi5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBfdGhpczIucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX3RoaXMyLnByb3BzLm9uQmx1ciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgX3RoaXMyLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25QYXN0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICh0eXBlb2YgX3RoaXMyLnByb3BzLm9uUGFzdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vblBhc3RlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoX3RoaXMyLmlzQW5kcm9pZEJyb3dzZXIgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIF90aGlzMi5wYXN0ZSA9IHtcbiAgICAgICAgdmFsdWU6IF90aGlzMi5nZXRJbnB1dFZhbHVlKCksXG4gICAgICAgIHNlbGVjdGlvbjogX3RoaXMyLmdldFNlbGVjdGlvbigpXG4gICAgICB9O1xuICAgICAgX3RoaXMyLnNldElucHV0VmFsdWUoJycpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnBhc3RlVGV4dCA9IGZ1bmN0aW9uICh2YWx1ZSwgdGV4dCwgc2VsZWN0aW9uLCBldmVudCkge1xuICAgIHZhciBjdXJzb3JQb3MgPSBzZWxlY3Rpb24uc3RhcnQ7XG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gKDAsIF9zdHJpbmcuY2xlYXJSYW5nZSkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSwgY3Vyc29yUG9zLCBzZWxlY3Rpb24ubGVuZ3RoKTtcbiAgICB9XG4gICAgdmFyIHRleHRMZW4gPSAoMCwgX3N0cmluZy5nZXRJbnNlcnRTdHJpbmdMZW5ndGgpKF90aGlzMi5tYXNrT3B0aW9ucywgdmFsdWUsIHRleHQsIGN1cnNvclBvcyk7XG4gICAgdmFsdWUgPSAoMCwgX3N0cmluZy5pbnNlcnRTdHJpbmcpKF90aGlzMi5tYXNrT3B0aW9ucywgdmFsdWUsIHRleHQsIGN1cnNvclBvcyk7XG4gICAgY3Vyc29yUG9zICs9IHRleHRMZW47XG4gICAgY3Vyc29yUG9zID0gX3RoaXMyLmdldFJpZ2h0RWRpdGFibGVQb3MoY3Vyc29yUG9zKSB8fCBjdXJzb3JQb3M7XG5cbiAgICBpZiAodmFsdWUgIT09IF90aGlzMi5nZXRJbnB1dFZhbHVlKCkpIHtcbiAgICAgIF90aGlzMi5zZXRJbnB1dFZhbHVlKHZhbHVlKTtcbiAgICAgIGlmIChldmVudCAmJiB0eXBlb2YgX3RoaXMyLnByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RoaXMyLnNldEN1cnNvclBvcyhjdXJzb3JQb3MpO1xuICB9O1xuXG4gIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcHJvcHMgPSBfdGhpczIucHJvcHMsXG4gICAgICAgIG1hc2sgPSBfcHJvcHMubWFzayxcbiAgICAgICAgYWx3YXlzU2hvd01hc2sgPSBfcHJvcHMuYWx3YXlzU2hvd01hc2ssXG4gICAgICAgIG1hc2tDaGFyID0gX3Byb3BzLm1hc2tDaGFyLFxuICAgICAgICBmb3JtYXRDaGFycyA9IF9wcm9wcy5mb3JtYXRDaGFycyxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ21hc2snLCAnYWx3YXlzU2hvd01hc2snLCAnbWFza0NoYXInLCAnZm9ybWF0Q2hhcnMnXSk7XG5cbiAgICBpZiAoX3RoaXMyLm1hc2tPcHRpb25zLm1hc2spIHtcbiAgICAgIGlmICghcHJvcHMuZGlzYWJsZWQgJiYgIXByb3BzLnJlYWRPbmx5KSB7XG4gICAgICAgIHZhciBoYW5kbGVyc0tleXMgPSBbJ29uQ2hhbmdlJywgJ29uS2V5RG93bicsICdvblBhc3RlJ107XG4gICAgICAgIGhhbmRsZXJzS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBwcm9wc1trZXldID0gX3RoaXMyW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBwcm9wcy52YWx1ZSA9IF90aGlzMi52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoeyByZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuaW5wdXQgPSBfcmVmO1xuICAgICAgfSB9LCBwcm9wcywgeyBvbkZvY3VzOiBfdGhpczIub25Gb2N1cywgb25CbHVyOiBfdGhpczIub25CbHVyIH0pKTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0RWxlbWVudDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChtYXNrLCBtYXNrQ2hhciwgY2hhcnNSdWxlcykge1xuICBpZiAobWFza0NoYXIgPT09IHVuZGVmaW5lZCkge1xuICAgIG1hc2tDaGFyID0gX2NvbnN0YW50cy5kZWZhdWx0TWFza0NoYXI7XG4gIH1cbiAgaWYgKGNoYXJzUnVsZXMgPT0gbnVsbCkge1xuICAgIGNoYXJzUnVsZXMgPSBfY29uc3RhbnRzLmRlZmF1bHRDaGFyc1J1bGVzO1xuICB9XG5cbiAgaWYgKCFtYXNrIHx8IHR5cGVvZiBtYXNrICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB7XG4gICAgICBtYXNrQ2hhcjogbWFza0NoYXIsXG4gICAgICBjaGFyc1J1bGVzOiBjaGFyc1J1bGVzLFxuICAgICAgbWFzazogbnVsbCxcbiAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgIGxhc3RFZGl0YWJsZVBvczogbnVsbCxcbiAgICAgIHBlcm1hbmVudHM6IFtdXG4gICAgfTtcbiAgfVxuICB2YXIgc3RyID0gJyc7XG4gIHZhciBwcmVmaXggPSAnJztcbiAgdmFyIHBlcm1hbmVudHMgPSBbXTtcbiAgdmFyIGlzUGVybWFuZW50ID0gZmFsc2U7XG4gIHZhciBsYXN0RWRpdGFibGVQb3MgPSBudWxsO1xuXG4gIG1hc2suc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGNoYXJhY3Rlcikge1xuICAgIGlmICghaXNQZXJtYW5lbnQgJiYgY2hhcmFjdGVyID09PSAnXFxcXCcpIHtcbiAgICAgIGlzUGVybWFuZW50ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzUGVybWFuZW50IHx8ICFjaGFyc1J1bGVzW2NoYXJhY3Rlcl0pIHtcbiAgICAgICAgcGVybWFuZW50cy5wdXNoKHN0ci5sZW5ndGgpO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gcGVybWFuZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcHJlZml4ICs9IGNoYXJhY3RlcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdEVkaXRhYmxlUG9zID0gc3RyLmxlbmd0aCArIDE7XG4gICAgICB9XG4gICAgICBzdHIgKz0gY2hhcmFjdGVyO1xuICAgICAgaXNQZXJtYW5lbnQgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgbWFza0NoYXI6IG1hc2tDaGFyLFxuICAgIGNoYXJzUnVsZXM6IGNoYXJzUnVsZXMsXG4gICAgcHJlZml4OiBwcmVmaXgsXG4gICAgbWFzazogc3RyLFxuICAgIGxhc3RFZGl0YWJsZVBvczogbGFzdEVkaXRhYmxlUG9zLFxuICAgIHBlcm1hbmVudHM6IHBlcm1hbmVudHNcbiAgfTtcbn07XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL3BhcnNlTWFzay5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGRlZmF1bHRDaGFyc1J1bGVzID0gZXhwb3J0cy5kZWZhdWx0Q2hhcnNSdWxlcyA9IHtcbiAgJzknOiAnWzAtOV0nLFxuICAnYSc6ICdbQS1aYS16XScsXG4gICcqJzogJ1tBLVphLXowLTldJ1xufTtcblxudmFyIGRlZmF1bHRNYXNrQ2hhciA9IGV4cG9ydHMuZGVmYXVsdE1hc2tDaGFyID0gJ18nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL2NvbnN0YW50cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc0FuZHJvaWRCcm93c2VyID0gaXNBbmRyb2lkQnJvd3NlcjtcbmV4cG9ydHMuaXNXaW5kb3dzUGhvbmVCcm93c2VyID0gaXNXaW5kb3dzUGhvbmVCcm93c2VyO1xuZXhwb3J0cy5pc0FuZHJvaWRGaXJlZm94ID0gaXNBbmRyb2lkRmlyZWZveDtcbmV4cG9ydHMuaXNJT1MgPSBpc0lPUztcbmZ1bmN0aW9uIGlzQW5kcm9pZEJyb3dzZXIoKSB7XG4gIHZhciB3aW5kb3dzID0gbmV3IFJlZ0V4cCgnd2luZG93cycsICdpJyk7XG4gIHZhciBmaXJlZm94ID0gbmV3IFJlZ0V4cCgnZmlyZWZveCcsICdpJyk7XG4gIHZhciBhbmRyb2lkID0gbmV3IFJlZ0V4cCgnYW5kcm9pZCcsICdpJyk7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHJldHVybiAhd2luZG93cy50ZXN0KHVhKSAmJiAhZmlyZWZveC50ZXN0KHVhKSAmJiBhbmRyb2lkLnRlc3QodWEpO1xufVxuXG5mdW5jdGlvbiBpc1dpbmRvd3NQaG9uZUJyb3dzZXIoKSB7XG4gIHZhciB3aW5kb3dzID0gbmV3IFJlZ0V4cCgnd2luZG93cycsICdpJyk7XG4gIHZhciBwaG9uZSA9IG5ldyBSZWdFeHAoJ3Bob25lJywgJ2knKTtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuIHdpbmRvd3MudGVzdCh1YSkgJiYgcGhvbmUudGVzdCh1YSk7XG59XG5cbmZ1bmN0aW9uIGlzQW5kcm9pZEZpcmVmb3goKSB7XG4gIHZhciB3aW5kb3dzID0gbmV3IFJlZ0V4cCgnd2luZG93cycsICdpJyk7XG4gIHZhciBmaXJlZm94ID0gbmV3IFJlZ0V4cCgnZmlyZWZveCcsICdpJyk7XG4gIHZhciBhbmRyb2lkID0gbmV3IFJlZ0V4cCgnYW5kcm9pZCcsICdpJyk7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHJldHVybiAhd2luZG93cy50ZXN0KHVhKSAmJiBmaXJlZm94LnRlc3QodWEpICYmIGFuZHJvaWQudGVzdCh1YSk7XG59XG5cbmZ1bmN0aW9uIGlzSU9TKCkge1xuICB2YXIgd2luZG93cyA9IG5ldyBSZWdFeHAoJ3dpbmRvd3MnLCAnaScpO1xuICB2YXIgaW9zID0gbmV3IFJlZ0V4cCgnKGlwb2R8aXBob25lfGlwYWQpJywgJ2knKTtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuICF3aW5kb3dzLnRlc3QodWEpICYmIGlvcy50ZXN0KHVhKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2xpYi91dGlscy9lbnZpcm9ubWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc1Blcm1hbmVudENoYXIgPSBpc1Blcm1hbmVudENoYXI7XG5leHBvcnRzLmlzQWxsb3dlZENoYXIgPSBpc0FsbG93ZWRDaGFyO1xuZXhwb3J0cy5pc0VtcHR5ID0gaXNFbXB0eTtcbmV4cG9ydHMuZ2V0RmlsbGVkTGVuZ3RoID0gZ2V0RmlsbGVkTGVuZ3RoO1xuZXhwb3J0cy5pc0ZpbGxlZCA9IGlzRmlsbGVkO1xuZXhwb3J0cy5mb3JtYXRWYWx1ZSA9IGZvcm1hdFZhbHVlO1xuZXhwb3J0cy5jbGVhclJhbmdlID0gY2xlYXJSYW5nZTtcbmV4cG9ydHMuaW5zZXJ0U3RyaW5nID0gaW5zZXJ0U3RyaW5nO1xuZXhwb3J0cy5nZXRJbnNlcnRTdHJpbmdMZW5ndGggPSBnZXRJbnNlcnRTdHJpbmdMZW5ndGg7XG5mdW5jdGlvbiBpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIHBvcykge1xuICByZXR1cm4gbWFza09wdGlvbnMucGVybWFuZW50cy5pbmRleE9mKHBvcykgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBpc0FsbG93ZWRDaGFyKG1hc2tPcHRpb25zLCBwb3MsIGNoYXJhY3Rlcikge1xuICB2YXIgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBjaGFyc1J1bGVzID0gbWFza09wdGlvbnMuY2hhcnNSdWxlcztcblxuXG4gIGlmICghY2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgcG9zKSkge1xuICAgIHJldHVybiBtYXNrW3Bvc10gPT09IGNoYXJhY3RlcjtcbiAgfVxuXG4gIHZhciBydWxlQ2hhciA9IG1hc2tbcG9zXTtcbiAgdmFyIGNoYXJSdWxlID0gY2hhcnNSdWxlc1tydWxlQ2hhcl07XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoY2hhclJ1bGUpLnRlc3QoY2hhcmFjdGVyKTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eShtYXNrT3B0aW9ucywgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnNwbGl0KCcnKS5ldmVyeShmdW5jdGlvbiAoY2hhcmFjdGVyLCBpKSB7XG4gICAgcmV0dXJuIGlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgaSkgfHwgIWlzQWxsb3dlZENoYXIobWFza09wdGlvbnMsIGksIGNoYXJhY3Rlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRGaWxsZWRMZW5ndGgobWFza09wdGlvbnMsIHZhbHVlKSB7XG4gIHZhciBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgcHJlZml4ID0gbWFza09wdGlvbnMucHJlZml4O1xuXG5cbiAgaWYgKCFtYXNrQ2hhcikge1xuICAgIHdoaWxlICh2YWx1ZS5sZW5ndGggPiBwcmVmaXgubGVuZ3RoICYmIGlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgdmFsdWUubGVuZ3RoIC0gMSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgdmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGg7XG4gIH1cblxuICB2YXIgZmlsbGVkTGVuZ3RoID0gcHJlZml4Lmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IHZhbHVlLmxlbmd0aDsgaSA+PSBwcmVmaXgubGVuZ3RoOyBpLS0pIHtcbiAgICB2YXIgY2hhcmFjdGVyID0gdmFsdWVbaV07XG4gICAgdmFyIGlzRW50ZXJlZENoYXJhY3RlciA9ICFpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIGkpICYmIGlzQWxsb3dlZENoYXIobWFza09wdGlvbnMsIGksIGNoYXJhY3Rlcik7XG4gICAgaWYgKGlzRW50ZXJlZENoYXJhY3Rlcikge1xuICAgICAgZmlsbGVkTGVuZ3RoID0gaSArIDE7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsbGVkTGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBpc0ZpbGxlZChtYXNrT3B0aW9ucywgdmFsdWUpIHtcbiAgcmV0dXJuIGdldEZpbGxlZExlbmd0aChtYXNrT3B0aW9ucywgdmFsdWUpID09PSBtYXNrT3B0aW9ucy5tYXNrLmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUobWFza09wdGlvbnMsIHZhbHVlKSB7XG4gIHZhciBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBwcmVmaXggPSBtYXNrT3B0aW9ucy5wcmVmaXg7XG5cblxuICBpZiAoIW1hc2tDaGFyKSB7XG4gICAgdmFsdWUgPSBpbnNlcnRTdHJpbmcobWFza09wdGlvbnMsICcnLCB2YWx1ZSwgMCk7XG4gICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBnZXRGaWxsZWRMZW5ndGgobWFza09wdGlvbnMsIHZhbHVlKSk7XG5cbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgcHJlZml4Lmxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBwcmVmaXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaWYgKHZhbHVlKSB7XG4gICAgdmFyIGVtcHR5VmFsdWUgPSBmb3JtYXRWYWx1ZShtYXNrT3B0aW9ucywgJycpO1xuICAgIHJldHVybiBpbnNlcnRTdHJpbmcobWFza09wdGlvbnMsIGVtcHR5VmFsdWUsIHZhbHVlLCAwKTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIGkpKSB7XG4gICAgICB2YWx1ZSArPSBtYXNrW2ldO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBtYXNrQ2hhcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUmFuZ2UobWFza09wdGlvbnMsIHZhbHVlLCBzdGFydCwgbGVuKSB7XG4gIHZhciBlbmQgPSBzdGFydCArIGxlbjtcbiAgdmFyIG1hc2tDaGFyID0gbWFza09wdGlvbnMubWFza0NoYXIsXG4gICAgICBtYXNrID0gbWFza09wdGlvbnMubWFzayxcbiAgICAgIHByZWZpeCA9IG1hc2tPcHRpb25zLnByZWZpeDtcblxuICB2YXIgYXJyYXlWYWx1ZSA9IHZhbHVlLnNwbGl0KCcnKTtcblxuICBpZiAoIW1hc2tDaGFyKSB7XG4gICAgc3RhcnQgPSBNYXRoLm1heChwcmVmaXgubGVuZ3RoLCBzdGFydCk7XG4gICAgYXJyYXlWYWx1ZS5zcGxpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0KTtcbiAgICB2YWx1ZSA9IGFycmF5VmFsdWUuam9pbignJyk7XG5cbiAgICByZXR1cm4gZm9ybWF0VmFsdWUobWFza09wdGlvbnMsIHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBhcnJheVZhbHVlLm1hcChmdW5jdGlvbiAoY2hhcmFjdGVyLCBpKSB7XG4gICAgaWYgKGkgPCBzdGFydCB8fCBpID49IGVuZCkge1xuICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICB9XG4gICAgaWYgKGlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgaSkpIHtcbiAgICAgIHJldHVybiBtYXNrW2ldO1xuICAgIH1cbiAgICByZXR1cm4gbWFza0NoYXI7XG4gIH0pLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHJpbmcobWFza09wdGlvbnMsIHZhbHVlLCBpbnNlcnRTdHIsIGluc2VydFBvcykge1xuICB2YXIgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgcHJlZml4ID0gbWFza09wdGlvbnMucHJlZml4O1xuXG4gIHZhciBhcnJheUluc2VydFN0ciA9IGluc2VydFN0ci5zcGxpdCgnJyk7XG4gIHZhciBpc0lucHV0RmlsbGVkID0gaXNGaWxsZWQobWFza09wdGlvbnMsIHZhbHVlKTtcblxuICB2YXIgaXNVc2FibGVQb3NpdGlvbiA9IGZ1bmN0aW9uIGlzVXNhYmxlUG9zaXRpb24ocG9zLCBjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gIWlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgcG9zKSB8fCBjaGFyYWN0ZXIgPT09IG1hc2tbcG9zXTtcbiAgfTtcbiAgdmFyIGlzVXNhYmxlQ2hhcmFjdGVyID0gZnVuY3Rpb24gaXNVc2FibGVDaGFyYWN0ZXIoY2hhcmFjdGVyLCBwb3MpIHtcbiAgICByZXR1cm4gIW1hc2tDaGFyIHx8ICFpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIHBvcykgfHwgY2hhcmFjdGVyICE9PSBtYXNrQ2hhcjtcbiAgfTtcblxuICBpZiAoIW1hc2tDaGFyICYmIGluc2VydFBvcyA+IHZhbHVlLmxlbmd0aCkge1xuICAgIHZhbHVlICs9IG1hc2suc2xpY2UodmFsdWUubGVuZ3RoLCBpbnNlcnRQb3MpO1xuICB9XG5cbiAgYXJyYXlJbnNlcnRTdHIuZXZlcnkoZnVuY3Rpb24gKGluc2VydENoYXJhY3Rlcikge1xuICAgIHdoaWxlICghaXNVc2FibGVQb3NpdGlvbihpbnNlcnRQb3MsIGluc2VydENoYXJhY3RlcikpIHtcbiAgICAgIGlmIChpbnNlcnRQb3MgPj0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlICs9IG1hc2tbaW5zZXJ0UG9zXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1VzYWJsZUNoYXJhY3RlcihpbnNlcnRDaGFyYWN0ZXIsIGluc2VydFBvcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGluc2VydFBvcysrO1xuXG4gICAgICAvLyBzdG9wIGl0ZXJhdGlvbiBpZiBtYXhpbXVtIHZhbHVlIGxlbmd0aCByZWFjaGVkXG4gICAgICBpZiAoaW5zZXJ0UG9zID49IG1hc2subGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaXNBbGxvd2VkID0gaXNBbGxvd2VkQ2hhcihtYXNrT3B0aW9ucywgaW5zZXJ0UG9zLCBpbnNlcnRDaGFyYWN0ZXIpIHx8IGluc2VydENoYXJhY3RlciA9PT0gbWFza0NoYXI7XG4gICAgaWYgKCFpc0FsbG93ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpbnNlcnRQb3MgPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGlmIChtYXNrQ2hhciB8fCBpc0lucHV0RmlsbGVkIHx8IGluc2VydFBvcyA8IHByZWZpeC5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpbnNlcnRQb3MpICsgaW5zZXJ0Q2hhcmFjdGVyICsgdmFsdWUuc2xpY2UoaW5zZXJ0UG9zICsgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGluc2VydFBvcykgKyBpbnNlcnRDaGFyYWN0ZXIgKyB2YWx1ZS5zbGljZShpbnNlcnRQb3MpO1xuICAgICAgICB2YWx1ZSA9IGZvcm1hdFZhbHVlKG1hc2tPcHRpb25zLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghbWFza0NoYXIpIHtcbiAgICAgIHZhbHVlICs9IGluc2VydENoYXJhY3RlcjtcbiAgICB9XG5cbiAgICBpbnNlcnRQb3MrKztcblxuICAgIC8vIHN0b3AgaXRlcmF0aW9uIGlmIG1heGltdW0gdmFsdWUgbGVuZ3RoIHJlYWNoZWRcbiAgICByZXR1cm4gaW5zZXJ0UG9zIDwgbWFzay5sZW5ndGg7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5zZXJ0U3RyaW5nTGVuZ3RoKG1hc2tPcHRpb25zLCB2YWx1ZSwgaW5zZXJ0U3RyLCBpbnNlcnRQb3MpIHtcbiAgdmFyIG1hc2sgPSBtYXNrT3B0aW9ucy5tYXNrLFxuICAgICAgbWFza0NoYXIgPSBtYXNrT3B0aW9ucy5tYXNrQ2hhcjtcblxuICB2YXIgYXJyYXlJbnNlcnRTdHIgPSBpbnNlcnRTdHIuc3BsaXQoJycpO1xuICB2YXIgaW5pdGlhbEluc2VydFBvcyA9IGluc2VydFBvcztcblxuICB2YXIgaXNVc2FibGVQb3NpdGlvbiA9IGZ1bmN0aW9uIGlzVXNhYmxlUG9zaXRpb24ocG9zLCBjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gIWlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgcG9zKSB8fCBjaGFyYWN0ZXIgPT09IG1hc2tbcG9zXTtcbiAgfTtcblxuICBhcnJheUluc2VydFN0ci5ldmVyeShmdW5jdGlvbiAoaW5zZXJ0Q2hhcmFjdGVyKSB7XG4gICAgd2hpbGUgKCFpc1VzYWJsZVBvc2l0aW9uKGluc2VydFBvcywgaW5zZXJ0Q2hhcmFjdGVyKSkge1xuICAgICAgaW5zZXJ0UG9zKys7XG5cbiAgICAgIC8vIHN0b3AgaXRlcmF0aW9uIGlmIG1heGltdW0gdmFsdWUgbGVuZ3RoIHJlYWNoZWRcbiAgICAgIGlmIChpbnNlcnRQb3MgPj0gbWFzay5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpc0FsbG93ZWQgPSBpc0FsbG93ZWRDaGFyKG1hc2tPcHRpb25zLCBpbnNlcnRQb3MsIGluc2VydENoYXJhY3RlcikgfHwgaW5zZXJ0Q2hhcmFjdGVyID09PSBtYXNrQ2hhcjtcblxuICAgIGlmIChpc0FsbG93ZWQpIHtcbiAgICAgIGluc2VydFBvcysrO1xuICAgIH1cblxuICAgIC8vIHN0b3AgaXRlcmF0aW9uIGlmIG1heGltdW0gdmFsdWUgbGVuZ3RoIHJlYWNoZWRcbiAgICByZXR1cm4gaW5zZXJ0UG9zIDwgbWFzay5sZW5ndGg7XG4gIH0pO1xuXG4gIHJldHVybiBpbnNlcnRQb3MgLSBpbml0aWFsSW5zZXJ0UG9zO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL3N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHZhciBkZWZlciA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZlcihmbik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL2RlZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBtYXBEaXNwYXRjaFRvUHJvcHMgfSBmcm9tICcuL1BlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXInO1xyXG5pbXBvcnQgSW52ZXN0b3JQcm9maWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvSW52ZXN0b3JQcm9maWxlQ29tcG9uZW50JztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHsgICAgICAgICAgIFxyXG4gICAgcHJldmlvdXNGdW5kczogc3RhdGUuUHJvc3BlY3REZXRhaWwucHJldmlvdXNGdW5kcyxcclxuICAgIEZJTlJBOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5GSU5SQSxcclxuICAgIGludmVzdG1lbnRPYmplY3RpdmU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmludmVzdG1lbnRPYmplY3RpdmUsXHJcbiAgICByaXNrUHJvZmlsZTogc3RhdGUuUHJvc3BlY3REZXRhaWwucmlza1Byb2ZpbGUsXHJcbiAgICBhbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2UsXHJcbiAgICBuZXRXb3J0aFJhbmdlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5uZXRXb3J0aFJhbmdlLFxyXG4gICAgbGlmZUluc3VyYW5jZVJhbmdlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5saWZlSW5zdXJhbmNlUmFuZ2UsXHJcbiAgICB0YXhCcmFja2V0OiBzdGF0ZS5Qcm9zcGVjdERldGFpbC50YXhCcmFja2V0LFxyXG4gICAgZGVwZW5kZW50c05vOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5kZXBlbmRlbnRzTm8sXHJcbiAgICBhZ2VzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5hZ2VzLFxyXG4gICAgY3VycmVudEVtcGxveWVyOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5jdXJyZW50RW1wbG95ZXIsXHJcbiAgICBlbXBsb3ltZW50U3RhdHVzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5lbXBsb3ltZW50U3RhdHVzLFxyXG4gICAgb2NjdXBhdGlvbjogc3RhdGUuUHJvc3BlY3REZXRhaWwub2NjdXBhdGlvbixcclxuICAgIGVtcGxveWVyQWRkcmVzczogc3RhdGUuUHJvc3BlY3REZXRhaWwuZW1wbG95ZXJBZGRyZXNzLFxyXG4gICAgZW1wbG95ZXJDaXR5OiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5lbXBsb3llckNpdHksXHJcbiAgICBlbXBsb3llclN0YXRlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5lbXBsb3llclN0YXRlLFxyXG4gICAgZW1wbG95ZXJaaXBDb2RlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5lbXBsb3llclppcENvZGUsXHJcbiAgICBoaXJlRGF0ZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuaGlyZURhdGUsXHJcbiAgICBleHBlY3RlZEFubnVpdHlEYXRlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5leHBlY3RlZEFubnVpdHlEYXRlLFxyXG4gICAgZW1wbG95ZXJTYWxhcnk6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmVtcGxveWVyU2FsYXJ5LFxyXG4gICAgc3RhdGVzOiBzdGF0ZS5zdGF0ZXNcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEludmVzdG9yUHJvZmlsZUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEludmVzdG9yUHJvZmlsZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvSW52ZXN0b3JQcm9maWxlQ29udGFpbmVyLnRzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZhbGljSW5wdXQgZnJvbSAnLi4vLi4vc2hhcmVkL1ZhbGljSW5wdXRDb21wb25lbnQvVmFsaWNJbnB1dENvbXBvbmVudCc7XHJcbi8qZXhwb3J0IGludGVyZmFjZSBJSW52ZXN0b3JQcm9maWxlUHJvcHN7XHJcbi8vc3RhdGVzPzogSVN0YXRlW107XHJcbnN0YXRlcz86IGFueVtdO1xyXG5vbkNoYW5nZTogKCk9PiB2b2lkO1xyXG5wcmV2aW91c0Z1bmRzPzogc3RyaW5nO1xyXG5GSU5SQT86IHN0cmluZztcclxuaW52ZXN0bWVudE9iamVjdGl2ZT86c3RyaW5nO1xyXG5yaXNrUHJvZmlsZT86c3RyaW5nO1xyXG5hbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZT86c3RyaW5nO1xyXG5uZXRXb3J0aFJhbmdlPzpzdHJpbmc7XHJcbmxpZmVJbnN1cmFuY2VSYW5nZT86IHN0cmluZztcclxudGF4QnJhY2tldD86c3RyaW5nO1xyXG5kZXBlbmRlbnRzTm8/OnN0cmluZztcclxuYWdlcz86c3RyaW5nO1xyXG5jdXJyZW50RW1wbG95ZXI/OnN0cmluZztcclxuZW1wbG95bWVudFN0YXR1cz86c3RyaW5nO1xyXG5vY2N1cGF0aW9uPzpzdHJpbmc7XHJcbmVtcGxveWVyQWRkcmVzcz86c3RyaW5nO1xyXG5lbXBsb3llckNpdHk/OnN0cmluZztcclxuZW1wbG95ZXJTdGF0ZT86c3RyaW5nO1xyXG5lbXBsb3llclppcENvZGU/OnN0cmluZztcclxuZW1wbG95ZXJTYWxhcnk/OnN0cmluZztcclxuaGlyZURhdGU/OmFueTtcclxuZXhwZWN0ZWRBbm51aXR5RGF0ZT86YW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZXtcclxuQ29kZTpzdHJpbmc7XHJcbn1cclxuKi9cclxuY2xhc3MgSW52ZXN0b3JQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50PGFueSxhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVXNlcklucHV0ID0gdGhpcy5oYW5kbGVVc2VySW5wdXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGhhbmRsZVVzZXJJbnB1dChlKSB7XHJcbiAgICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBvbkNoYW5nZShlKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgeyBzdGF0ZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHN0YXRlc0xpc3REb3duO1xyXG4gICAgICAgIGlmIChzdGF0ZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzdGF0ZXNMaXN0RG93biA9IE9iamVjdC5rZXlzKHN0YXRlcykubWFwKChrZXksIGluZGV4KSA9PiB7IHJldHVybiA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtzdGF0ZXNba2V5XS5Db2RlfSA+e3N0YXRlc1trZXldLkNvZGV9PC9vcHRpb24+IH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByZXZpb3VzRnVuZHNcIj5QcmV2aW91c2x5IHB1cmNoYXNlZCBtdXR1YWwgZnVuZHMgb3Igb3RoZXIgc2VjdXJpdGllcz88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3RoaXMucHJvcHMucHJldmlvdXNGdW5kcyA9PT0gXCIxXCJ9IG5hbWU9XCJwcmV2aW91c0Z1bmRzXCIgdmFsdWU9XCIxXCIgLz5ZZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjBcIiBuYW1lPVwicHJldmlvdXNGdW5kc1wiIGNoZWNrZWQ9e3RoaXMucHJvcHMucHJldmlvdXNGdW5kcyA9PT0gXCIwXCJ9IC8+Tm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiRklOUkFcIj5FbXBsb3llZCBieSBvciByZWdpc3RlcmVkIHdpdGggYSBGSU5SQSBtZW1iZXIgZmlybT88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJGSU5SQVwiIHZhbHVlPVwiMVwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuRklOUkEgPT09IFwiMVwifSAvPlllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJGSU5SQVwiIHZhbHVlPVwiMFwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuRklOUkEgPT09IFwiMFwifSAvPk5vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnZlc3RtZW50T2JqZWN0aXZlXCI+SW52ZXN0bWVudCBPYmplY3RpdmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJpbnZlc3RtZW50T2JqZWN0aXZlXCIgdmFsdWU9XCJTUFwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuaW52ZXN0bWVudE9iamVjdGl2ZSA9PT0gXCJTUFwifSAvPlNhZmV0eSBvZiBQcmluY2lwYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiaW52ZXN0bWVudE9iamVjdGl2ZVwiIHZhbHVlPVwiTEdcIiBjaGVja2VkPXt0aGlzLnByb3BzLmludmVzdG1lbnRPYmplY3RpdmUgPT09IFwiTEdcIn0gLz5Mb25nLVRlcm0gR3Jvd3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImludmVzdG1lbnRPYmplY3RpdmVcIiB2YWx1ZT1cIklOXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5pbnZlc3RtZW50T2JqZWN0aXZlID09PSBcIklOXCJ9IC8+SW5jb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJpc2tQcm9maWxlXCI+UmlzayBQcm9maWxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJyaXNrUHJvZmlsZVwiIHZhbHVlPXt0aGlzLnByb3BzLnJpc2tQcm9maWxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIUlwiPkhpZ2hlciBSaXNrPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBR1wiPkFnZ3Jlc3NpdmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1BXCI+TW9kZXJhdGVseSBBZ2dyZXNzaXZlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNRFwiPk1vZGVyYXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNQ1wiPk1vZGVyYXRlbHkgQ29uc2VydmF0aXZlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDTlwiPkNvbnNlcnZhdGl2ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0FcIj5DYXV0aW91czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+IEZpbmFuY2lhbCBTaXR1YXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2VcIj5Bbm51YWwgSG91c2Vob2xkIEluY29tZSBSYW5nZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlXCIgdmFsdWU9XCIwMVwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2UgPT09IFwiMDFcIn0gLz5VbmRlciAkNTAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlXCIgdmFsdWU9XCIwMlwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2UgPT09IFwiMDJcIn0gLz4kNTAsMDAwIC0gJDEwMCwwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2VcIiB2YWx1ZT1cIjAzXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5hbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZSA9PT0gXCIwM1wifSAvPk92ZXIgJDEwMCwwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV0V29ydGhSYW5nZVwiPk5ldCBXb3J0aCBSYW5nZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm5ldFdvcnRoUmFuZ2VcIiB2YWx1ZT1cIjFcIiBjaGVja2VkPXt0aGlzLnByb3BzLm5ldFdvcnRoUmFuZ2UgPT09IFwiMVwifSAvPlVuZGVyICQ1MCwwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibmV0V29ydGhSYW5nZVwiIHZhbHVlPVwiMlwiIGNoZWNrZWQ9e3RoaXMucHJvcHMubmV0V29ydGhSYW5nZSA9PT0gXCIyXCJ9IC8+JDUwLDAwMCAtICQxMDAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm5ldFdvcnRoUmFuZ2VcIiB2YWx1ZT1cIjNcIiBjaGVja2VkPXt0aGlzLnByb3BzLm5ldFdvcnRoUmFuZ2UgPT09IFwiM1wifSAvPk92ZXIgJDEwMCwwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGlmZUluc3VyYW5jZVJhbmdlXCI+TGlmZSBJbnN1cmFuY2UgUmFuZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJsaWZlSW5zdXJhbmNlUmFuZ2VcIiB2YWx1ZT1cIjAxXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5saWZlSW5zdXJhbmNlUmFuZ2UgPT09IFwiMDFcIn0gLz5VbmRlciAkNTAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImxpZmVJbnN1cmFuY2VSYW5nZVwiIHZhbHVlPVwiMDJcIiBjaGVja2VkPXt0aGlzLnByb3BzLmxpZmVJbnN1cmFuY2VSYW5nZSA9PT0gXCIwMlwifSAvPiQ1MCwwMDAgLSAkMTAwLDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJsaWZlSW5zdXJhbmNlUmFuZ2VcIiB2YWx1ZT1cIjAzXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5saWZlSW5zdXJhbmNlUmFuZ2UgPT09IFwiMDNcIn0gLz5PdmVyICQxMDAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGF4QnJhY2tldFwiPlRheCBCcmFja2V0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIG5hbWU9XCJ0YXhCcmFja2V0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy50YXhCcmFja2V0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlcGVuZGVudHNOb1wiPkRlcGVuZGVudHM6ICBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxWYWxpY0lucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgbmFtZT1cImRlcGVuZGVudHNOb1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuZGVwZW5kZW50c05vfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFnZXNcIj5BZ2VzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIG5hbWU9XCJhZ2VzXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5hZ2VzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhhbGYtcnVsZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdXJyZW50RW1wbG95ZXJcIj5DdXJyZW50IEVtcGxveWVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3VycmVudEVtcGxveWVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5jdXJyZW50RW1wbG95ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib2NjdXBhdGlvblwiPk9jY3VwYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJvY2N1cGF0aW9uXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5vY2N1cGF0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJlbXBsb3ltZW50U3RhdHVzXCIgdmFsdWU9XCJSXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5lbXBsb3ltZW50U3RhdHVzID09PSBcIlJcIn0gLz5SZXRpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImVtcGxveW1lbnRTdGF0dXNcIiB2YWx1ZT1cIlVcIiBjaGVja2VkPXt0aGlzLnByb3BzLmVtcGxveW1lbnRTdGF0dXMgPT09IFwiVVwifSAvPlVuZW1wbG95ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1wbG95ZXJBZGRyZXNzXCI+RW1wbG95ZXIgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtcGxveWVyQWRkcmVzc1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuZW1wbG95ZXJBZGRyZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtcGxveWVyQ2l0eVwiPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbXBsb3llckNpdHlcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmVtcGxveWVyQ2l0eX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbXBsb3llclN0YXRlXCI+U3RhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImVtcGxveWVyU3RhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmVtcGxveWVyU3RhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZXNMaXN0RG93bn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbXBsb3llclppcENvZGVcIj5aaXBDb2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1wbG95ZXJaaXBDb2RlXCIgbWF4LWxlbmd0aD1cIjVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmVtcGxveWVyWmlwQ29kZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1wbG95ZXJTYWxhcnlcIj5TYWxhcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImVtcGxveWVyU2FsYXJ5XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbWluPVwiMFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuZW1wbG95ZXJTYWxhcnl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaGlyZURhdGVcIj5IaXJlIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJoaXJlRGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaGlyZURhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhwZWN0ZWRBbm51aXR5RGF0ZVwiPkV4cGVjdGVkIEFubnVpdHkgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImV4cGVjdGVkQW5udWl0eURhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmV4cGVjdGVkQW5udWl0eURhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW52ZXN0b3JQcm9maWxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L0ludmVzdG9yUHJvZmlsZUNvbXBvbmVudC50c3giLCJpbXBvcnQgSW5jb21lU291cmNlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvSW5jb21lU291cmNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHttYXBEaXNwYXRjaFRvUHJvcHN9IGZyb20gJy4vUGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lcic7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7ICAgICAgIFxyXG4gICAgaW5jb21lQWNjb3VudFNhbGFyeTogc3RhdGUuUHJvc3BlY3REZXRhaWwuaW5jb21lQWNjb3VudFNhbGFyeSxcclxuICAgIHNvY2lhbFNlY3VyaXR5OiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5zb2NpYWxTZWN1cml0eSxcclxuICAgIHBlbnNpb25CZW5lZml0czogc3RhdGUuUHJvc3BlY3REZXRhaWwucGVuc2lvbkJlbmVmaXRzLFxyXG4gICAgaW52ZXN0bWVudEluY29tZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuaW52ZXN0bWVudEluY29tZSxcclxuICAgIHJtZDogc3RhdGUuUHJvc3BlY3REZXRhaWwucm1kLFxyXG4gICAgb3RoZXI6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm90aGVyLFxyXG4gICAgZXhwZW5zZXNBbW91bnQ6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmV4cGVuc2VzQW1vdW50ICAgIFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IEluY29tZVNvdXJjZUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluY29tZVNvdXJjZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvSW5jb21lU291cmNlQ29udGFpbmVyLnRzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGludGVyZmFjZSBJSW5jb21lU291cmNlUHJvcHMge1xyXG5pbmNvbWVBY2NvdW50U2FsYXJ5PzpzdHJpbmc7XHJcbnNvY2lhbFNlY3VyaXR5PzpzdHJpbmc7XHJcbnBlbnNpb25CZW5lZml0cz86IHN0cmluZztcclxuaW52ZXN0bWVudEluY29tZT86IHN0cmluZztcclxucm1kPzpzdHJpbmc7XHJcbm90aGVyPzpzdHJpbmc7XHJcbmV4cGVuc2VzQW1vdW50PzpzdHJpbmc7XHJcbm9uQ2hhbmdlOigpID0+IGFueTtcclxufVxyXG5jbGFzcyBJbmNvbWVTb3VyY2UgZXh0ZW5kcyBDb21wb25lbnQ8YW55LGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVVc2VySW5wdXQgPSB0aGlzLmhhbmRsZVVzZXJJbnB1dC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlVXNlcklucHV0KGUpIHtcclxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIG9uQ2hhbmdlKGUpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoPGRpdj48ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Bbm51YWwgSG91c2Vob2xkPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgSW5jb21lIEFjY291bnQgRnJvbTpcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbmNvbWVBY2NvdW50U2FsYXJ5XCI+U2FsYXJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJpbmNvbWVBY2NvdW50U2FsYXJ5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5pbmNvbWVBY2NvdW50U2FsYXJ5fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNvY2lhbFNlY3VyaXR5XCI+U29jaWFsIFNlY3VyaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJzb2NpYWxTZWN1cml0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuc29jaWFsU2VjdXJpdHl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGVuc2lvbkJlbmVmaXRzXCI+UGVuc2lvbiBCZW5lZml0czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGVuc2lvbkJlbmVmaXRzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5wZW5zaW9uQmVuZWZpdHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImludmVzdG1lbnRJbmNvbWVcIj5JbnZlc3RtZW50IEluY29tZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaW52ZXN0bWVudEluY29tZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaW52ZXN0bWVudEluY29tZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJybWRcIj5STUQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInJtZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMucm1kfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90aGVyXCI+T3RoZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm90aGVyXCIgbWluPVwiMFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMub3RoZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4cGVuc2VzQW1vdW50XCI+RXhwZW5zZXMgQW1vdW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJleHBlbnNlc0Ftb3VudFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuZXhwZW5zZXNBbW91bnR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmNvbWVTb3VyY2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvSW5jb21lU291cmNlQ29tcG9uZW50LnRzeCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9Qcm9zcGVjdEVkaXRDb250YWluZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjb21iaW5lUmVkdWNlcnMsIEdlbmVyaWNTdG9yZUVuaGFuY2VyLCBTdG9yZSwgU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvciwgUmVkdWNlcnNNYXBPYmplY3QgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IHJvdXRlclJlZHVjZXIsIHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgKiBhcyBTdG9yZU1vZHVsZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgcmVkdWNlcnMgfSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5pbXBvcnQgeyBQcm9zcGVjdE1pZGRsZVdhcmUsIGVycm9ySGFuZGxlciB9IGZyb20gJy4vYXBpL1Byb3NwZWN0L1Byb3NwZWN0QXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGhpc3Rvcnk6IEhpc3RvcnksIGluaXRpYWxTdGF0ZT86IEFwcGxpY2F0aW9uU3RhdGUpIHtcclxuICAgIC8vIEJ1aWxkIG1pZGRsZXdhcmUuIFRoZXNlIGFyZSBmdW5jdGlvbnMgdGhhdCBjYW4gcHJvY2VzcyB0aGUgYWN0aW9ucyBiZWZvcmUgdGhleSByZWFjaCB0aGUgc3RvcmUuXHJcbiAgICBjb25zdCB3aW5kb3dJZkRlZmluZWQgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB3aW5kb3cgYXMgYW55O1xyXG4gICAgLy8gSWYgZGV2VG9vbHMgaXMgaW5zdGFsbGVkLCBjb25uZWN0IHRvIGl0XHJcbiAgICBjb25zdCBkZXZUb29sc0V4dGVuc2lvbiA9IHdpbmRvd0lmRGVmaW5lZCAmJiB3aW5kb3dJZkRlZmluZWQuZGV2VG9vbHNFeHRlbnNpb24gYXMgKCkgPT4gR2VuZXJpY1N0b3JlRW5oYW5jZXI7XHJcbiAgICBjb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gY29tcG9zZShcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmssIGVycm9ySGFuZGxlciwgUHJvc3BlY3RNaWRkbGVXYXJlLCByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpKSxcclxuICAgICAgICBkZXZUb29sc0V4dGVuc2lvbiA/IGRldlRvb2xzRXh0ZW5zaW9uKCkgOiA8Uz4obmV4dDogU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvcjxTPikgPT4gbmV4dFxyXG4gICAgKShjcmVhdGVTdG9yZSk7XHJcblxyXG4gICAgLy8gQ29tYmluZSBhbGwgcmVkdWNlcnMgYW5kIGluc3RhbnRpYXRlIHRoZSBhcHAtd2lkZSBzdG9yZSBpbnN0YW5jZVxyXG4gICAgY29uc3QgYWxsUmVkdWNlcnMgPSBidWlsZFJvb3RSZWR1Y2VyKHJlZHVjZXJzKTtcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZShhbGxSZWR1Y2VycywgaW5pdGlhbFN0YXRlKSBhcyBTdG9yZTxBcHBsaWNhdGlvblN0YXRlPjtcclxuXHJcbiAgICAvLyBFbmFibGUgV2VicGFjayBob3QgbW9kdWxlIHJlcGxhY2VtZW50IGZvciByZWR1Y2Vyc1xyXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9zdG9yZScsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dFJvb3RSZWR1Y2VyID0gcmVxdWlyZTx0eXBlb2YgU3RvcmVNb2R1bGU+KCcuL3N0b3JlJyk7XHJcbiAgICAgICAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGJ1aWxkUm9vdFJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyLnJlZHVjZXJzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFJvb3RSZWR1Y2VyKGFsbFJlZHVjZXJzOiBSZWR1Y2Vyc01hcE9iamVjdCkge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxBcHBsaWNhdGlvblN0YXRlPihPYmplY3QuYXNzaWduKHt9LCBhbGxSZWR1Y2VycywgeyByb3V0aW5nOiByb3V0ZXJSZWR1Y2VyIH0pKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uZmlndXJlU3RvcmUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgzNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDExNCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vaW1wb3J0ICogYXMgV2VhdGhlckZvcmVjYXN0cyBmcm9tICcuL1dlYXRoZXJGb3JlY2FzdHMnO1xyXG4vL2ltcG9ydCAqIGFzIENvdW50ZXIgZnJvbSAnLi9Db3VudGVyJztcclxuXHJcbmltcG9ydCAqIGFzIExvYWRlciBmcm9tICcuL0xvYWRlcic7XHJcbmltcG9ydCAqIGFzIFByb3NwZWN0IGZyb20gJy4vUHJvc3BlY3QnO1xyXG5pbXBvcnQgKiBhcyBTdGF0ZXMgZnJvbSAnLi9TdGF0ZXMnO1xyXG5pbXBvcnQgKiBhcyBWYWxpZGF0aW9uTWVzc2FnZSBmcm9tICcuL1ZhbGlkYXRpb25NZXNzYWdlJztcclxuXHJcbi8vLy8gVGhlIHRvcC1sZXZlbCBzdGF0ZSBvYmplY3RcclxuLy9leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xyXG4vLyAgICBjb3VudGVyOiBDb3VudGVyLkNvdW50ZXJTdGF0ZTtcclxuLy8gICAgd2VhdGhlckZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0cy5XZWF0aGVyRm9yZWNhc3RzU3RhdGU7XHJcbi8vfVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25TdGF0ZSB7XHJcbiAgICBQcm9zcGVjdERldGFpbDogUHJvc3BlY3QuUHJvc3BlY3RTdGF0ZTtcclxuICAgIGlzTG9hZGluZzogTG9hZGVyLkxvYWRlclN0YXRlO1xyXG4gICAgc3RhdGVzOiBTdGF0ZXMuU3RhdGVzU3RhdGU7XHJcbiAgICBlcnJvcnM6IFZhbGlkYXRpb25NZXNzYWdlLlZhbGlkYXRpb05tZXNzYWdlU3RhdGVbXTtcclxuICAgIGFnZW50Q29kZTogUHJvc3BlY3QuQWdlbnRDb2RlU3RhdGU7XHJcbn1cclxuLy8gV2hlbmV2ZXIgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsIFJlZHV4IHdpbGwgdXBkYXRlIGVhY2ggdG9wLWxldmVsIGFwcGxpY2F0aW9uIHN0YXRlIHByb3BlcnR5IHVzaW5nXHJcbi8vIHRoZSByZWR1Y2VyIHdpdGggdGhlIG1hdGNoaW5nIG5hbWUuIEl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIG5hbWVzIG1hdGNoIGV4YWN0bHksIGFuZCB0aGF0IHRoZSByZWR1Y2VyXHJcbi8vIGFjdHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgQXBwbGljYXRpb25TdGF0ZSBwcm9wZXJ0eSB0eXBlLlxyXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSB7XHJcbiAgICBpc0xvYWRpbmc6IExvYWRlci5yZWR1Y2VyLFxyXG4gICAgc3RhdGVzOiBTdGF0ZXMucmVkdWNlcixcclxuICAgIFByb3NwZWN0RGV0YWlsOiBQcm9zcGVjdC5yZWR1Y2VyLFxyXG4gICAgZXJyb3JzOiBWYWxpZGF0aW9uTWVzc2FnZS5yZWR1Y2VyLFxyXG4gICAgYWdlbnRDb2RlOiBQcm9zcGVjdC5hZ2VudENvZGVyZWR1Y2VyXHJcbn07XHJcblxyXG4vLyBUaGlzIHR5cGUgY2FuIGJlIHVzZWQgYXMgYSBoaW50IG9uIGFjdGlvbiBjcmVhdG9ycyBzbyB0aGF0IGl0cyAnZGlzcGF0Y2gnIGFuZCAnZ2V0U3RhdGUnIHBhcmFtcyBhcmVcclxuLy8gY29ycmVjdGx5IHR5cGVkIHRvIG1hdGNoIHlvdXIgc3RvcmUuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwVGh1bmtBY3Rpb248VEFjdGlvbj4ge1xyXG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSk6IHZvaWQ7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzJ1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb05tZXNzYWdlU3RhdGUge1xyXG4gICAgZXJyb3JzOiBFcnJvck1lc3NhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JNZXNzYWdlIHtcclxuICAgIGZpZWxkTmFtZTogc3RyaW5nO1xyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5pbnRlcmZhY2UgQWRkRXJyb3JNZXNzYWdlIHsgdHlwZTogJ0FERF9FUlJPUl9NRVNTQUdFJywgZmllbGROYW1lLCBlcnJvck1lc3NhZ2UgfVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgYWRkRXJyb3JNZXNzYWdlOiAoZmllbGROYW1lOiBzdHJpbmcsIGVycm9yTWVzc2FnZTogc3RyaW5nKSA9PiA8QWRkRXJyb3JNZXNzYWdlPnsgdHlwZTogJ0FERF9FUlJPUl9NRVNTQUdFJyAsZmllbGROYW1lLCBlcnJvck1lc3NhZ2V9LFxyXG4gICBcclxufTtcclxudHlwZSBLbm93bkFjdGlvbiA9IEFkZEVycm9yTWVzc2FnZVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8VmFsaWRhdGlvTm1lc3NhZ2VTdGF0ZVtdPiA9IChzdGF0ZTogVmFsaWRhdGlvTm1lc3NhZ2VTdGF0ZVtdLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICBjYXNlIFwiQUREX0VSUk9SX01FU1NBR0VcIjpcclxuICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpc0V4aXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3b2JqID0gc3RhdGUubWFwKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmZpZWxkTmFtZSA9PT0gYWN0aW9uLmZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0V4aXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGVycm9yLCB7IGVycm9yTWVzc2FnZTogYWN0aW9uLmVycm9yTWVzc2FnZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNFeGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IGFjdGlvbi5maWVsZE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5lcnJvck1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdvYmo7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiBhY3Rpb24uZmllbGROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5lcnJvck1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIHVucmVjb2duaXplZCBhY3Rpb25zIChvciBpbiBjYXNlcyB3aGVyZSBhY3Rpb25zIGhhdmUgbm8gZWZmZWN0KSwgbXVzdCByZXR1cm4gdGhlIGV4aXN0aW5nIHN0YXRlXHJcbiAgICAvLyAgKG9yIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZSBpZiBub25lIHdhcyBzdXBwbGllZClcclxuICAgIHJldHVybiBzdGF0ZSA9PT0gdW5kZWZpbmVkID8gW10gOiBzdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL1ZhbGlkYXRpb25NZXNzYWdlLnRzIiwiLy9pbXBvcnQgKiBhcyBQcm9zcGVjdEFjdGlvbiBmcm9tICcuLi8uLi9hY3Rpb25zL1Byb3NwZWN0QWN0aW9uJztcclxuaW1wb3J0ICBBcGlVcmwgIGZyb20gJy4uL2FwaVVybC5kZXYnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IGFnaWxlbmV0dXJsIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuLy9pbXBvcnQgKiBhcyBWYWxpZGF0aW9uTWVzc2FnZSBmcm9tICcuLi8uLi9hY3Rpb25zL1ZhbGlkYXRpb25NZXNzYWdlQWN0aW9uJztcclxuaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJztcclxuaW1wb3J0ICogYXMgTG9hZGVyQWN0aW9uIGZyb20gJy4uLy4uL3N0b3JlL0xvYWRlcic7XHJcbmltcG9ydCAqIGFzIFZhbGlkYXRpb25NZXNzYWdlQWN0aW9uIGZyb20gJy4uLy4uL3N0b3JlL3ZhbGlkYXRpb25NZXNzYWdlJztcclxuaW1wb3J0ICogYXMgUHJvc3BlY3RBY3Rpb24gZnJvbSAnLi4vLi4vc3RvcmUvUHJvc3BlY3QnO1xyXG5pbXBvcnQgKiBhcyBTdGF0ZUFjdGlvbiBmcm9tICcuLi8uLi9zdG9yZS9TdGF0ZXMnO1xyXG5cclxuLy9pbXBvcnQgZXJyb3JoYW5kbGVyIGZyb20gJ2Vycm9yaGFuZGxlcic7XHJcbi8vaW1wb3J0IGNvbm5lY3QgZnJvbSAnY29ubmVjdCc7XHJcbmludGVyZmFjZSBQcm9zcGVjdHtcclxuRmlyc3ROYW1lOnN0cmluZztcclxuTGFzdE5hbWU6c3RyaW5nO1xyXG5Tc246c3RyaW5nO1xyXG5JZDpudW1iZXI7XHJcblxyXG59XHJcbmNvbnN0IGFkdmlzb3JVcmwgPSBBcGlVcmwuYWR2aXNvclVybDtcclxuY29uc3QgcGFydGljaXBhbnRVcmwgPSBBcGlVcmwucGFydGljaXBhbnRVcmw7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvc3BlY3RNaWRkbGVXYXJlID0gKHN0b3JlOmFueSkgPT4gKG5leHQ6YW55KSA9PiAoYWN0aW9uOmFueSkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuR0VUX1BST1NQRUNUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIC8vbmV4dChQcm9zcGVjdEFjdGlvbi5sb2FkZXJCZWdpbigpKTtcclxuICAgICAgICAgICAgbmV4dChMb2FkZXJBY3Rpb24uYWN0aW9uQ3JlYXRvcnMubG9hZGVyQmVnaW4oKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChgJHtwYXJ0aWNpcGFudFVybH1wcm9zcGVjdC8ke2FjdGlvbi5pZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6YW55KSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9zcGVjdCA9IHt9IGFzIGFueTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZmlyc3ROYW1lID0gZGF0YS5GaXJzdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lmxhc3ROYW1lID0gZGF0YS5MYXN0TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3Quc3NuID0gZGF0YS5Tc247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuY2xpZW50UHJvc3BlY3RJZCA9IGRhdGEuSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLklkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG9tZUFkZHJlc3NTdHJlZXQxLCBob21lQWRkcmVzc1N0cmVldDIsIGhvbWVBZGRyZXNzU3RyZWV0MywgaG9tZUFkZHJlc3NaaXBDb2RlLCBob21lQWRkcmVzc1N0YXRlLCBob21lQWRkcmVzc0NpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYWlsaW5nQWRkcmVzc1N0cmVldDEsIG1haWxpbmdBZGRyZXNzU3RyZWV0MiwgbWFpbGluZ0FkZHJlc3NTdHJlZXQzLCBtYWlsaW5nQWRkcmVzc1ppcENvZGUsIG1haWxpbmdBZGRyZXNzU3RhdGUsIG1haWxpbmdBZGRyZXNzQ2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuQWRkcmVzc2VzICE9PSB1bmRlZmluZWQgJiYgZGF0YS5BZGRyZXNzZXMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuQWRkcmVzc2VzW1wiJHZhbHVlc1wiXS5mb3JFYWNoKGZ1bmN0aW9uIChhZGRyZXNzOmFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGF0YS5BZGRyZXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoYWRkcmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzLkFkZHJlc3NUeXBlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzU3RyZWV0MSA9IGFkZHJlc3MuU3RyZWV0MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZUFkZHJlc3NTdHJlZXQyID0gYWRkcmVzcy5TdHJlZXQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lQWRkcmVzc1N0cmVldDMgPSBhZGRyZXNzLlN0cmVldDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzU3RhdGUgPSBhZGRyZXNzLlN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lQWRkcmVzc0NpdHkgPSBhZGRyZXNzLkNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaG9tZUFkZHJlc3NDb3VudHJ5ID0gYWRkcmVzcy5Db3VudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lQWRkcmVzc1ppcENvZGUgPSBhZGRyZXNzLlppcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYWRkcmVzcy5BZGRyZXNzVHlwZSA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzc1N0cmVldDEgPSBhZGRyZXNzLlN0cmVldDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzU3RyZWV0MiA9IGFkZHJlc3MuU3RyZWV0MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3NTdHJlZXQzID0gYWRkcmVzcy5TdHJlZXQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzc1N0YXRlID0gYWRkcmVzcy5TdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3NDaXR5ID0gYWRkcmVzcy5DaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21haWxpbmdBZGRyZXNzQ291bnRyeSA9IGFkZHJlc3MuQ291bnRyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3NaaXBDb2RlID0gYWRkcmVzcy5aaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG9tZVBob25lTnVtYmVyOyBsZXQgd29ya1Bob25lTnVtYmVyOyBsZXQgb3RoZXJQaG9uZU51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuUGhvbmVOdW1iZXJzICE9PSBudWxsICYmIGRhdGEuUGhvbmVOdW1iZXJzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuUGhvbmVOdW1iZXJzW1wiJHZhbHVlc1wiXS5mb3JFYWNoKGZ1bmN0aW9uIChwaG9uZTphbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RhdGEuUGhvbmVOdW1iZXJzLmZvckVhY2goKHBob25lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBob25lLlBob25lVHlwZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lUGhvbmVOdW1iZXIgPSBwaG9uZS5OdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBob25lLlBob25lVHlwZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrUGhvbmVOdW1iZXIgPSBwaG9uZS5OdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBob25lLlBob25lVHlwZSA9PT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlclBob25lTnVtYmVyID0gcGhvbmUuTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzUmVmZXJyYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuUmVmZXJyYWxEYXRlICE9PSBudWxsICYmIGRhdGEuUmVmZXJyYWxEYXRlICE9PSB1bmRlZmluZWQgJiYgbmV3IERhdGUoZGF0YS5SZWZlcnJhbERhdGUudG9TdHJpbmcoKSkuZ2V0RnVsbFllYXIoKSA+IDE5MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVmZXJyYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnRpdGxlID0gZGF0YS5UaXRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWlkZGxlSW5pdGlhbCA9IGRhdGEuTWlkZGxlSW5pdGlhbCAhPT0gbnVsbCA/IGRhdGEuTWlkZGxlSW5pdGlhbCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5kYXRlT2ZCaXJ0aCA9IGRhdGEuRGF0ZU9mQmlydGggIT09IG51bGwgJiYgZGF0YS5EYXRlT2ZCaXJ0aCAhPT0gdW5kZWZpbmVkID8gbmV3IERhdGUoZGF0YS5EYXRlT2ZCaXJ0aC50b1N0cmluZygpKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZ2VuZGVyID0gZGF0YS5HZW5kZXIgIT09IG51bGwgJiYgZGF0YS5HZW5kZXIgIT09IHVuZGVmaW5lZCA/IGRhdGEuR2VuZGVyLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QudXNDaXRpemVuID0gZGF0YS5Vc0NpdGl6ZW5GbGFnICE9PSBudWxsICYmIGRhdGEuVXNDaXRpemVuRmxhZyAhPT0gdW5kZWZpbmVkID8gZGF0YS5Vc0NpdGl6ZW5GbGFnLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWFyaXRhbFN0YXR1cyA9IGRhdGEuTWFyaXRhbFN0YXR1cyAhPT0gbnVsbCAmJiBkYXRhLk1hcml0YWxTdGF0dXMgIT09IHVuZGVmaW5lZCA/IGRhdGEuTWFyaXRhbFN0YXR1cy50b1N0cmluZygpIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhvbWVBZGRyZXNzTGluZTEgPSBob21lQWRkcmVzc1N0cmVldDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhvbWVBZGRyZXNzTGluZTIgPSBob21lQWRkcmVzc1N0cmVldDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhvbWVBZGRyZXNzTGluZTMgPSBob21lQWRkcmVzc1N0cmVldDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhvbWVBZGRyZXNzQ2l0eSA9IGhvbWVBZGRyZXNzQ2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaG9tZUFkZHJlc3NTdGF0ZSA9IGhvbWVBZGRyZXNzU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhvbWVBZGRyZXNzWmlwQ29kZSA9IGhvbWVBZGRyZXNzWmlwQ29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NMaW5lMSA9IG1haWxpbmdBZGRyZXNzU3RyZWV0MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NMaW5lMiA9IG1haWxpbmdBZGRyZXNzU3RyZWV0MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NMaW5lMyA9IG1haWxpbmdBZGRyZXNzU3RyZWV0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NDaXR5ID0gbWFpbGluZ0FkZHJlc3NDaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc1N0YXRlID0gbWFpbGluZ0FkZHJlc3NTdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NaaXBDb2RlID0gbWFpbGluZ0FkZHJlc3NaaXBDb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5ob21lUGhvbmUgPSBob21lUGhvbmVOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LndvcmtQaG9uZSA9IHdvcmtQaG9uZU51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3Qub3RoZXJQaG9uZSA9IG90aGVyUGhvbmVOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnJlZmVycmFsID0gaXNSZWZlcnJhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZW1haWxBZGRyZXNzID0gZGF0YS5FbWFpbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUgIT09IG51bGwgJiYgZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5wcmV2aW91c0Z1bmRzID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5JbnZlc3RtZW50RXhwZXJpZW5jZV9GbGFnICE9PSB1bmRlZmluZWQgJiYgZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5JbnZlc3RtZW50RXhwZXJpZW5jZV9GbGFnICE9PSBudWxsID8gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5JbnZlc3RtZW50RXhwZXJpZW5jZV9GbGFnLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LkZJTlJBID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5GaW5yYV9GbGFnICE9PSB1bmRlZmluZWQgJiYgZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5GaW5yYV9GbGFnICE9PSBudWxsID8gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5GaW5yYV9GbGFnLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmludmVzdG1lbnRPYmplY3RpdmUgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkludmVzdG1lbnRPYmplY3RpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5yaXNrUHJvZmlsZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuUmlza1Byb2ZpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5hbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuSG91c2Vob2xkSW5jb21lUmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5uZXRXb3J0aFJhbmdlID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5OZXRXb3J0aFJhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubGlmZUluc3VyYW5jZVJhbmdlID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5MaWZlSW5zdXJhbmNlUmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC50YXhCcmFja2V0ID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5UYXhCcmFja2V0TnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZGVwZW5kZW50c05vID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5EZXBlZGVudE51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmFnZXMgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkFnZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5jdXJyZW50RW1wbG95ZXIgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkN1cnJlbnRFbXBsb3llcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmVtcGxveW1lbnRTdGF0dXMgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkVtcGxveW1lbnRTdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5vY2N1cGF0aW9uID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5PY2N1cGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZW1wbG95ZXJBZGRyZXNzID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5FbXBsb3llckFkZHJlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5lbXBsb3llckNpdHkgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkVtcGxveWVyQ2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmVtcGxveWVyU3RhdGUgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkVtcGxveWVyU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5lbXBsb3llclppcENvZGUgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkVtcGxveWVyWmlwQ29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmVtcGxveWVyU2FsYXJ5ID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5TYWxhcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5oaXJlRGF0ZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuSGlyZURhdGUgIT09IG51bGwgJiYgZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5IaXJlRGF0ZSAhPT0gdW5kZWZpbmVkID8gbmV3IERhdGUoZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5IaXJlRGF0ZS50b1N0cmluZygpKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmV4cGVjdGVkQW5udWl0eURhdGUgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkV4cGVjdGVkQW5udWl0eURhdGUgIT09IG51bGwgJiYgZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5FeHBlY3RlZEFubnVpdHlEYXRlICE9PSB1bmRlZmluZWQgPyBuZXcgRGF0ZShkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkV4cGVjdGVkQW5udWl0eURhdGUudG9TdHJpbmcoKSkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pc0ludmVzdG9yUHJvZmlsZU5ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaXNJbnZlc3RvclByb2ZpbGVOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLlByb3NwZWN0SW5jb21lU291cmNlICE9PSB1bmRlZmluZWQgJiYgZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaW5jb21lQWNjb3VudFNhbGFyeSA9IGRhdGEuUHJvc3BlY3RJbmNvbWVTb3VyY2UuU2FsYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3Quc29jaWFsU2VjdXJpdHkgPSBkYXRhLlByb3NwZWN0SW5jb21lU291cmNlLlNvY2lhbFNlY3VyaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QucGVuc2lvbkJlbmVmaXRzID0gZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZS5QZW5zaW9uQmVuZWZpdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pbnZlc3RtZW50SW5jb21lID0gZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZS5JbnZlc3RtZW50SW5jb21lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3Qucm1kID0gZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZS5STUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5vdGhlciA9IGRhdGEuUHJvc3BlY3RJbmNvbWVTb3VyY2UuT3RoZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5leHBlbnNlc0Ftb3VudCA9IGRhdGEuUHJvc3BlY3RJbmNvbWVTb3VyY2UuRXhwZW5zZXNBbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pc0luY29tZVNvdXJjZU5ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaXNJbmNvbWVTb3VyY2VOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV4dChQcm9zcGVjdEFjdGlvbi5mZXRjaFByb3NwZWN0U3VjY2Vzcyhwcm9zcGVjdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckNvbXBsZXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoUHJvc3BlY3RBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuZmV0Y2hQcm9zcGVjdFN1Y2Nlc3MocHJvc3BlY3QpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KExvYWRlckFjdGlvbi5hY3Rpb25DcmVhdG9ycy5sb2FkZXJFbmQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgIC8vIG5leHQoVmFsaWRhdGlvbk1lc3NhZ2UuQWRkRXJyb3JNZXNzYWdlKCcnLCBcIlVuYWJsZSB0byBnZXQgcHJvc3BlY3RcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV4dChQcm9zcGVjdEFjdGlvbi5mZXRjaFByb3NwZWN0RmFpbGVkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV4dChQcm9zcGVjdEFjdGlvbi5sb2FkZXJDb21wbGV0ZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChWYWxpZGF0aW9uTWVzc2FnZUFjdGlvbi5hY3Rpb25DcmVhdG9ycy5hZGRFcnJvck1lc3NhZ2UoJycsIFwiVW5hYmxlIHRvIGdldCBwcm9zcGVjdFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChQcm9zcGVjdEFjdGlvbi5hY3Rpb25DcmVhdG9ycy5mZXRjaFByb3NwZWN0RmFpbGVkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoTG9hZGVyQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmxvYWRlckVuZCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9icmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvblR5cGVzLkdFVF9TVEFURVNfUkVRVUVTVDpcclxuICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckJlZ2luKCkpO1xyXG4gICAgICAgICAgICBuZXh0KExvYWRlckFjdGlvbi5hY3Rpb25DcmVhdG9ycy5sb2FkZXJCZWdpbigpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZldGNoKGAke2Fkdmlzb3JVcmx9YWR2aXNvci9zdGF0ZXNgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmZldGNoU3RhdGVzU3VjY2Vzcyhqc29uW1wiJHZhbHVlc1wiXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckNvbXBsZXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoU3RhdGVBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuZmV0Y2hTdGF0ZVN1Y2Nlc3MoanNvbltcIiR2YWx1ZXNcIl0pKVxyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoTG9hZGVyQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmxvYWRlckVuZCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBzdGF0ZXMgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV4dChQcm9zcGVjdEFjdGlvbi5sb2FkZXJDb21wbGV0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL25leHQoVmFsaWRhdGlvbk1lc3NhZ2UuQWRkRXJyb3JNZXNzYWdlKCcnLCBcIlVuYWJsZSB0byBnZXQgc3RhdGVzXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24uZmV0Y2hTdGF0ZXNGYWlsZWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChWYWxpZGF0aW9uTWVzc2FnZUFjdGlvbi5hY3Rpb25DcmVhdG9ycy5hZGRFcnJvck1lc3NhZ2UoJycsIFwiVW5hYmxlIHRvIGdldCBzdGF0ZXNcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoU3RhdGVBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuZmV0Y2hTdGF0ZXNGYWlsZWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChMb2FkZXJBY3Rpb24uYWN0aW9uQ3JlYXRvcnMubG9hZGVyRW5kKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3Rocm93IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5VUERBVEVfUFJPU1BFQ1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgbGV0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgbGV0IHByb3NwZWN0ID0gc3RhdGUuUHJvc3BlY3REZXRhaWw7XHJcbiAgICAgICAgICAgIC8vbmV4dChQcm9zcGVjdEFjdGlvbi5sb2FkZXJCZWdpbigpKTtcclxuICAgICAgICAgICAgbmV4dChMb2FkZXJBY3Rpb24uYWN0aW9uQ3JlYXRvcnMubG9hZGVyQmVnaW4oKSk7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZEZvcm0gPSB0cnVlIGFzIGFueTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLmVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlcnJvciwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5lcnJvck1lc3NhZ2UgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZEZvcm0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codmFsaWRGb3JtKTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkRm9ybSAhPSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBsYWluU1NOID0gcHJvc3BlY3Quc3NuO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGxhaW5TU04pO1xyXG4gICAgICAgICAgICAgICAgcGxhaW5TU04gPSBwbGFpblNTTi5zcGxpdCgnLScpLmpvaW4oJycpLnNwbGl0KCdfJykuam9pbignJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlZmVycmFsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3NwZWN0LnJlZmVycmFsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJyYWwgPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgaG9tZUFkZHJlc3MgPSB7fSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBob21lQWRkcmVzcy5TdHJlZXQxID0gcHJvc3BlY3QuaG9tZUFkZHJlc3NMaW5lMTtcclxuICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzLlN0cmVldDIgPSBwcm9zcGVjdC5ob21lQWRkcmVzc0xpbmUyO1xyXG4gICAgICAgICAgICAgICAgaG9tZUFkZHJlc3MuU3RyZWV0MyA9IHByb3NwZWN0LmhvbWVBZGRyZXNzTGluZTM7XHJcbiAgICAgICAgICAgICAgICBob21lQWRkcmVzcy5DaXR5ID0gcHJvc3BlY3QuaG9tZUFkZHJlc3NDaXR5O1xyXG4gICAgICAgICAgICAgICAgaG9tZUFkZHJlc3MuU3RhdGUgPSBwcm9zcGVjdC5ob21lQWRkcmVzc1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgaG9tZUFkZHJlc3MuWmlwID0gcHJvc3BlY3QuaG9tZUFkZHJlc3NaaXBDb2RlO1xyXG4gICAgICAgICAgICAgICAgaG9tZUFkZHJlc3MuQWRkcmVzc1R5cGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFkZHJlc3MgPSBbXSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzLnB1c2goaG9tZUFkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1haWxpbmdBZGRyZXNzID0ge30gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3MuU3RyZWV0MSA9IHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzTGluZTE7XHJcbiAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzcy5TdHJlZXQyID0gcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NMaW5lMjtcclxuICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzLlN0cmVldDMgPSBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0xpbmUzO1xyXG4gICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3MuQ2l0eSA9IHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzQ2l0eTtcclxuICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzLlN0YXRlID0gcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NTdGF0ZTtcclxuICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzLlppcCA9IHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzWmlwQ29kZTtcclxuICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzLkFkZHJlc3NUeXBlID0gMjtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MucHVzaChtYWlsaW5nQWRkcmVzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHBob25lTnVtYmVycyA9IFtdIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIHZhciBob21lUGhvbmUgPSB7fSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBob21lUGhvbmUuTnVtYmVyID0gcHJvc3BlY3QuaG9tZVBob25lICE9PSB1bmRlZmluZWQgPyBwcm9zcGVjdC5ob21lUGhvbmUuc3BsaXQoJy0nKS5qb2luKCcnKS5zcGxpdCgnKCcpLmpvaW4oJycpLnNwbGl0KCcpJykuam9pbignJykuc3BsaXQoJ18nKS5qb2luKCcnKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgaG9tZVBob25lLlBob25lVHlwZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcnMucHVzaChob21lUGhvbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB3b3JrUGhvbmUgPSB7fSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICB3b3JrUGhvbmUuTnVtYmVyID0gcHJvc3BlY3Qud29ya1Bob25lICE9PSB1bmRlZmluZWQgPyBwcm9zcGVjdC53b3JrUGhvbmUuc3BsaXQoJy0nKS5qb2luKCcnKS5zcGxpdCgnKCcpLmpvaW4oJycpLnNwbGl0KCcpJykuam9pbignJykuc3BsaXQoJ18nKS5qb2luKCcnKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgd29ya1Bob25lLlBob25lVHlwZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcnMucHVzaCh3b3JrUGhvbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvdGhlclBob25lID0ge30gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgb3RoZXJQaG9uZS5OdW1iZXIgPSBwcm9zcGVjdC5vdGhlclBob25lICE9PSB1bmRlZmluZWQgPyBwcm9zcGVjdC5vdGhlclBob25lLnNwbGl0KCctJykuam9pbignJykuc3BsaXQoJygnKS5qb2luKCcnKS5zcGxpdCgnKScpLmpvaW4oJycpLnNwbGl0KCdfJykuam9pbignJykgOiAnJztcclxuICAgICAgICAgICAgICAgIG90aGVyUGhvbmUuUGhvbmVUeXBlID0gNTtcclxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVycy5wdXNoKG90aGVyUGhvbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbmNvbWVTb3VyY2UgPSB7fSAgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgaW5jb21lU291cmNlLlNvY2lhbFNlY3VyaXR5ID0gcHJvc3BlY3Quc29jaWFsU2VjdXJpdHk7XHJcbiAgICAgICAgICAgICAgICBpbmNvbWVTb3VyY2UuU2FsYXJ5ID0gcHJvc3BlY3QuaW5jb21lQWNjb3VudFNhbGFyeTtcclxuICAgICAgICAgICAgICAgIGluY29tZVNvdXJjZS5QZW5zaW9uQmVuZWZpdHMgPSBwcm9zcGVjdC5wZW5zaW9uQmVuZWZpdHM7XHJcbiAgICAgICAgICAgICAgICBpbmNvbWVTb3VyY2UuSW52ZXN0bWVudEluY29tZSA9IHByb3NwZWN0LmludmVzdG1lbnRJbmNvbWU7XHJcbiAgICAgICAgICAgICAgICBpbmNvbWVTb3VyY2UuUk1EID0gcHJvc3BlY3Qucm1kO1xyXG4gICAgICAgICAgICAgICAgaW5jb21lU291cmNlLk90aGVyID0gcHJvc3BlY3Qub3RoZXI7XHJcbiAgICAgICAgICAgICAgICBpbmNvbWVTb3VyY2UuRXhwZW5zZXNBbW91bnQgPSBwcm9zcGVjdC5leHBlbnNlc0Ftb3VudDtcclxuICAgICAgICAgICAgICAgIGluY29tZVNvdXJjZS5DbGllbnRQcm9zcGVjdElkID0gcHJvc3BlY3QuY2xpZW50UHJvc3BlY3RJZDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW52ZXN0b3JQcm9maWxlID0ge30gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkludmVzdG1lbnRFeHBlcmllbmNlX0ZsYWcgPSBwcm9zcGVjdC5wcmV2aW91c0Z1bmRzO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkZpbnJhX0ZsYWcgPSBwcm9zcGVjdC5GSU5SQTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5JbnZlc3RtZW50T2JqZWN0aXZlID0gcHJvc3BlY3QuaW52ZXN0bWVudE9iamVjdGl2ZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5SaXNrUHJvZmlsZSA9IHByb3NwZWN0LnJpc2tQcm9maWxlO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkhvdXNlaG9sZEluY29tZVJhbmdlID0gcHJvc3BlY3QuYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuTmV0V29ydGhSYW5nZSA9IHByb3NwZWN0Lm5ldFdvcnRoUmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuTGlmZUluc3VyYW5jZVJhbmdlID0gcHJvc3BlY3QubGlmZUluc3VyYW5jZVJhbmdlO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLlRheEJyYWNrZXROdW1iZXIgPSBwcm9zcGVjdC50YXhCcmFja2V0O1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkRlcGVkZW50TnVtYmVyID0gcHJvc3BlY3QuZGVwZW5kZW50c05vO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkFnZXMgPSBwcm9zcGVjdC5hZ2VzO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkN1cnJlbnRFbXBsb3llciA9IHByb3NwZWN0LmN1cnJlbnRFbXBsb3llcjtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5FbXBsb3ltZW50U3RhdHVzID0gcHJvc3BlY3QuZW1wbG95bWVudFN0YXR1cztcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5PY2N1cGF0aW9uID0gcHJvc3BlY3Qub2NjdXBhdGlvbjtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5FbXBsb3llckFkZHJlc3MgPSBwcm9zcGVjdC5lbXBsb3llckFkZHJlc3M7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRW1wbG95ZXJDaXR5ID0gcHJvc3BlY3QuZW1wbG95ZXJDaXR5O1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkVtcGxveWVyU3RhdGUgPSBwcm9zcGVjdC5lbXBsb3llclN0YXRlO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkVtcGxveWVyWmlwQ29kZSA9IHByb3NwZWN0LmVtcGxveWVyWmlwQ29kZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5IaXJlRGF0ZSA9IHByb3NwZWN0LmhpcmVEYXRlO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkV4cGVjdGVkQW5udWl0eURhdGUgPSBwcm9zcGVjdC5leHBlY3RlZEFubnVpdHlEYXRlO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLlNhbGFyeSA9IHByb3NwZWN0LmVtcGxveWVyU2FsYXJ5O1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkNsaWVudElkID0gcHJvc3BlY3QuY2xpZW50UHJvc3BlY3RJZDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvc3BlY3REYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIElkOiBwcm9zcGVjdC5jbGllbnRQcm9zcGVjdElkLCBGaXJzdE5hbWU6IHByb3NwZWN0LmZpcnN0TmFtZSwgVGl0bGU6IHByb3NwZWN0LnRpdGxlLCBNaWRkbGVJbml0aWFsOiBwcm9zcGVjdC5taWRkbGVJbml0aWFsLFxyXG4gICAgICAgICAgICAgICAgICAgIExhc3ROYW1lOiBwcm9zcGVjdC5sYXN0TmFtZSwgU3NuOiBwbGFpblNTTiwgRGF0ZU9mQmlydGg6IHByb3NwZWN0LmRhdGVPZkJpcnRoLCBNYXJpdGFsU3RhdHVzOiBwcm9zcGVjdC5tYXJpdGFsU3RhdHVzLCBSZWZlcnJhbERhdGU6IHJlZmVycmFsLCBBZGRyZXNzZXM6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgUGhvbmVOdW1iZXJzOiBwaG9uZU51bWJlcnMsIEdlbmRlcjogcHJvc3BlY3QuZ2VuZGVyLCBFbWFpbDogcHJvc3BlY3QuZW1haWxBZGRyZXNzLCBQcm9zcGVjdEluY29tZVNvdXJjZTogaW5jb21lU291cmNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFByb3NwZWN0SW52ZXN0b3JQcm9maWxlOiBpbnZlc3RvclByb2ZpbGUsIFVzQ2l0aXplbkZsYWc6IHByb3NwZWN0LnVzQ2l0aXplblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoKGAke3BhcnRpY2lwYW50VXJsfXByb3NwZWN0L3VwZGF0ZWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9zcGVjdERhdGEpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTphbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckNvbXBsZXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0KExvYWRlckFjdGlvbi5hY3Rpb25DcmVhdG9ycy5sb2FkZXJFbmQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLmxvY2F0aW9uID0gYWdpbGVuZXR1cmwgKyBcIi9EYXNoYm9hcmQvQWR2aXNvci9DbGllbnRQcm9zcGVjdExpc3RpbmcuYXNweD9hZ2VudElkPTAzNDk5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbmV4dChWYWxpZGF0aW9uTWVzc2FnZS5BZGRFcnJvck1lc3NhZ2UoJycsIFwiVW5hYmxlIHRvIHVwZGF0ZSBwcm9zcGVjdFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbmV4dChQcm9zcGVjdEFjdGlvbi5sb2FkZXJDb21wbGV0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dChWYWxpZGF0aW9uTWVzc2FnZUFjdGlvbi5hY3Rpb25DcmVhdG9ycy5hZGRFcnJvck1lc3NhZ2UoJycsIFwiVW5hYmxlIHRvIHVwZGF0ZSBwcm9zcGVjdFwiKSk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoTG9hZGVyQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmxvYWRlckVuZCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5leHQoVmFsaWRhdGlvbk1lc3NhZ2VBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuYWRkRXJyb3JNZXNzYWdlKCcnLCBcIlVuYWJsZSB0byB1cGRhdGUgcHJvc3BlY3RcIikpO1xyXG4gICAgICAgICAgICAgICAgbmV4dChMb2FkZXJBY3Rpb24uYWN0aW9uQ3JlYXRvcnMubG9hZGVyRW5kKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgICAgICAgICAgbmV4dChhY3Rpb24pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JIYW5kbGVyID0gc3RhdGUgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgbmV4dChhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgY2F1Z2h0XCIpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcGkvUHJvc3BlY3QvUHJvc3BlY3RBcGkudHMiLCJjbGFzcyBBcGlVcmx7XHJcbiAgICBzdGF0aWMgcGFydGljaXBhbnRVcmwgPSdodHRwczovL2Rldi52YWxpYy5jb20vcmVhY3QvcGFydGljaXBhbnRzZXJ2aWNlL2FwaS8nO1xyXG4gICAgc3RhdGljIGFkdmlzb3JVcmwgPSdodHRwczovL2Rldi52YWxpYy5jb20vU2VydmljZXMvQWR2aXNvci9hcGkvJztcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcGlVcmw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwaS9hcGlVcmwuZGV2LnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTUxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBHRVRfUFJPU1BFQ1RfUkVRVUVTVCA9ICdHRVRfUFJPU1BFQ1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPU1BFQ1RfRkFJTEVEID0gJ0dFVF9QUk9TUEVDVF9GQUlMRUQnO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST1NQRUNUX1NVQ0NFU1MgPSAnR0VUX1BST1NQRUNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9TUEVDVF9SRVFVRVNUID0gJ1VQREFURV9QUk9TUEVDVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9TUEVDVF9GQUlMRUQgPSAnVVBEQVRFX1BST1NQRUNUX0ZBSUxFRCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPU1BFQ1RfU1VDQ0VTUyA9ICdVUERBVEVfUFJPU1BFQ1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUFJPU1BFQ1QgPSAnQUREX1BST1NQRUNUJztcclxuLy9leHBvcnQgY29uc3QgR0VUX1NUQVRFUyA9J0dFVF9TVEFURVMnO1xyXG5leHBvcnQgY29uc3QgR0VUX1NUQVRFU19SRVFVRVNUID0nR0VUX1NUQVRFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9TVEFURVNfRkFJTEVEID0nR0VUX1NUQVRFU19GQUlMRUQnO1xyXG5leHBvcnQgY29uc3QgR0VUX1NUQVRFU19TVUNDRVNTID0nR0VUX1NUQVRFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE9OX0lOUFVUX0NIQU5HRSA9J09OX0lOUFVUX0NIQU5HRSc7XHJcbmV4cG9ydCBjb25zdCBBRERfVkFMSURBVElPTl9FUlJPUl9NRVNTQUdFID0gJ0FERF9FUlJPUl9NRVNTQUdFJztcclxuZXhwb3J0IGNvbnN0IExPQURFUl9CRUdJTiA9J0xPQURFUl9TVEFSVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FERVJfQ09NUExFVEUgPSdMT0FERVJfRU5EJztcclxuZXhwb3J0IGNvbnN0IFNFVF9BR0VOVENPREUgPSdTRVRfQUdFTlRDT0RFJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uc3RhbnRzL0FjdGlvblR5cGVzLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==