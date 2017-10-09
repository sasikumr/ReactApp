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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ProspectComponent_PersonalInformationComponent__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utility_Utility__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_ProspectAction__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_ValidationMessageAction__ = __webpack_require__(8);






var mapDispatchToProps = function (dispatch) { return ({
    valicInputChange: function (e) {
        var name = e.target.name;
        var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        var inputField = e.target;
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions_ProspectAction__["g" /* onInputChange */])(name, value));
        if (inputField.isValid === false || inputField.isFormatValid === false) {
            dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_ValidationMessageAction__["a" /* AddErrorMessage */])(name, inputField.errorMessage));
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(inputField).parent().addClass('has-error has-feedback');
        }
        else {
            dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_ValidationMessageAction__["a" /* AddErrorMessage */])(name, ''));
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(inputField).parent().removeClass('has-error has-feedback');
        }
    },
    onChange: function (e) {
        var name = e.target.name;
        var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        var inputField = e.target;
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions_ProspectAction__["g" /* onInputChange */])(name, value));
        Object(__WEBPACK_IMPORTED_MODULE_3__shared_utility_Utility__["b" /* validateFormField */])(inputField);
        if (inputField.isValid === false || inputField.isFormatValid === false) {
            dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_ValidationMessageAction__["a" /* AddErrorMessage */])(name, inputField.errorMessage));
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(inputField).parent().addClass('has-error has-feedback');
        }
        else {
            dispatch(Object(__WEBPACK_IMPORTED_MODULE_5__actions_ValidationMessageAction__["a" /* AddErrorMessage */])(name, ''));
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_PROSPECT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_PROSPECT_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_PROSPECT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return UPDATE_PROSPECT_REQUEST; });
/* unused harmony export UPDATE_PROSPECT_FAILED */
/* unused harmony export UPDATE_PROSPECT_SUCCESS */
/* unused harmony export ADD_PROSPECT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_STATES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_STATES_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_STATES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ON_INPUT_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_VALIDATION_ERROR_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOADER_BEGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOADER_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SET_AGENTCODE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddErrorMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(7);

var AddErrorMessage = function (fieldName, errorMessage) { return ({
    type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["a" /* ADD_VALIDATION_ERROR_MESSAGE */],
    fieldName: fieldName,
    errorMessage: errorMessage
}); };


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(115);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_input_mask__ = __webpack_require__(29);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchProspectRequest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchProspectFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchProspectSuccess; });
/* unused harmony export fetchStatesRequest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchStatesFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fetchStatesSuccess; });
/* unused harmony export updateProspectRequest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return onInputChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loaderBegin; });
/* unused harmony export setAgentCode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return loaderComplete; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(7);

var fetchProspectRequest = function (id) { return ({
    type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["c" /* GET_PROSPECT_REQUEST */],
    id: id
}); };
/*
export const fetchProspectSuccess =  () => ({
    type: ProspectActionType.GET_PROSPECT_REQUEST
    
})
*/
var fetchProspectFailed = function () { return ({
    type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["b" /* GET_PROSPECT_FAILED */]
}); };
var fetchProspectSuccess = function (prospect) { return ({
    type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["d" /* GET_PROSPECT_SUCCESS */],
    prospect: prospect
}); };
var fetchStatesRequest = function () { return ({
    type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["f" /* GET_STATES_REQUEST */]
}); };
var fetchStatesFailed = function () { return ({
    type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["e" /* GET_STATES_FAILED */]
}); };
var fetchStatesSuccess = function (states) { return ({
    type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["g" /* GET_STATES_SUCCESS */],
    states: states
}); };
var updateProspectRequest = function () { return ({
    type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["l" /* UPDATE_PROSPECT_REQUEST */]
}); };
var onInputChange = function (name, value) { return ({
    type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["j" /* ON_INPUT_CHANGE */],
    name: name,
    value: value
}); };
var loaderBegin = function () { return ({
    type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["h" /* LOADER_BEGIN */]
}); };
var setAgentCode = function (agentCode) { return ({
    type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["k" /* SET_AGENTCODE */],
    agentCode: agentCode
}); };
var loaderComplete = function () { return ({
    type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["i" /* LOADER_COMPLETE */]
}); };


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export prospectId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return agileneturl; });
var prospectId = 1963;
var agileneturl = 'https://d4.valic.com/agilenet5/';


/***/ }),
/* 13 */
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
            return "";
    }
};


/***/ }),
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(21);
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(139);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(192);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(180);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(136);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_ProspectContainer_ProspectEditContainer__ = __webpack_require__(22);

//import { Layout } from './components/Layout';
//import Home from './components/Home';
//import FetchData from './components/FetchData';
//import Counter from './components/Counter';

var routes = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__containers_ProspectContainer_ProspectEditContainer__["a" /* default */], null)));


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProspectEditContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_ValicValidationMessageComponent_ValicValidationMessageComponent__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_LoaderComponent_LoaderComponent__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_utility_Utility__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PersonalInformationContainer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__InvestorProfileContainer__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__IncomeSourceContainer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_ValidationMessageAction__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ProspectEditContainer_css__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ProspectEditContainer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__ProspectEditContainer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_Prospect__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store_States__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_Loader__ = __webpack_require__(15);
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
        if (formErrors !== undefined && formErrors !== null) {
            var errors = formErrors.filter(function (error) { return error.errorMessage !== '' && error.fieldName === ''; });
            //console.log(errors);
            if (errors.length > 0) {
                //throw new Error("failed component")
                return (__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(AppError, { error: errors[0].errorMessage }));
            }
        }
        return (__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null,
            isLoading ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__shared_LoaderComponent_LoaderComponent__["a" /* default */], null) : '',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__shared_ValicValidationMessageComponent_ValicValidationMessageComponent__["a" /* default */], { formErrors: formErrors, className: "form-errors" }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", { className: isLoading ? 'showPartial' : 'showFull' },
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
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_12__actions_ValidationMessageAction__["a" /* AddErrorMessage */])(inputField.name, inputField.errorMessage));
                __WEBPACK_IMPORTED_MODULE_4_jquery___default()(inputField).parent().addClass('has-error has-feedback');
            }
            else {
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_12__actions_ValidationMessageAction__["a" /* AddErrorMessage */])(inputField.name, ''));
                __WEBPACK_IMPORTED_MODULE_4_jquery___default()(inputField).parent().removeClass('has-error has-feedback');
            }
        }
        dispatch(__WEBPACK_IMPORTED_MODULE_14__store_Prospect__["a" /* actionCreators */].updateProspectRequest());
    },
    cancelProspect: function (e) {
        if (window.confirm('Are you sure want to cancel?')) {
            document.location = __WEBPACK_IMPORTED_MODULE_11__constants__["a" /* agileneturl */] + "Dashboard/Advisor/ClientProspectListing.aspx?agentId=03499";
        }
    },
    componentDidMount: function () {
        dispatch(__WEBPACK_IMPORTED_MODULE_16__store_Loader__["a" /* actionCreators */].loaderBegin());
        dispatch(__WEBPACK_IMPORTED_MODULE_14__store_Prospect__["b" /* actionCreatorsAgentCode */].setAgentCode(window.__agentCode__));
        dispatch(__WEBPACK_IMPORTED_MODULE_15__store_States__["a" /* actionCreators */].fetchStateRequest());
        dispatch(__WEBPACK_IMPORTED_MODULE_14__store_Prospect__["a" /* actionCreators */].fetchProspectRequest(window.__PROSPECTID__));
    }
}); };
var AppError = function (props) {
    return (__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null,
        "Something went wrong!!! ",
        props.error));
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ProspectEditContainer));


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TabContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabContainer_css__ = __webpack_require__(24);
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
/* 24 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: C:\\Users\\sasikumar.nagalingam\\source\\repos\\ReactApp\\ReactApp\\src\\shared\\TabContainerComponent\\TabContainer.css Unexpected token (1:1)\nYou may need an appropriate loader to handle this file type.\n| ﻿.mainStyle {\r\n|     overflow: auto;\r\n| }\r");

/***/ }),
/* 25 */
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
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: 'form-errors' }, formErrors !== undefined ? formErrors.map(function (field, i) {
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_css__ = __webpack_require__(27);
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
/* 27 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: C:\\Users\\sasikumar.nagalingam\\source\\repos\\ReactApp\\ReactApp\\src\\shared\\LoaderComponent\\loader.css Unexpected character '@' (1:1)\nYou may need an appropriate loader to handle this file type.\n| ﻿@import './Loader.scss';\r\n| ");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__ = __webpack_require__(10);
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _parseMask = __webpack_require__(30);

var _parseMask2 = _interopRequireDefault(_parseMask);

var _environment = __webpack_require__(32);

var _string = __webpack_require__(33);

var _defer = __webpack_require__(34);

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
/* 30 */
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

var _constants = __webpack_require__(31);

module.exports = exports['default'];

/***/ }),
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__ = __webpack_require__(10);
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

throw new Error("Module parse failed: C:\\Users\\sasikumar.nagalingam\\source\\repos\\ReactApp\\ReactApp\\src\\containers\\ProspectContainer\\ProspectEditContainer.css Unexpected token (1:1)\nYou may need an appropriate loader to handle this file type.\n| ﻿.showPartial{\r\n|     opacity:0.4;\r\n| }\r");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(9);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Loader__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Prospect__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__States__ = __webpack_require__(14);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apiUrl_dev__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_ValidationMessageAction__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_ActionTypes__ = __webpack_require__(7);






var advisorUrl = __WEBPACK_IMPORTED_MODULE_1__apiUrl_dev__["a" /* default */].advisorUrl;
var participantUrl = __WEBPACK_IMPORTED_MODULE_1__apiUrl_dev__["a" /* default */].participantUrl;
var ProspectMiddleWare = function (store) { return function (next) { return function (action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_5__constants_ActionTypes__["c" /* GET_PROSPECT_REQUEST */]:
            next(__WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__["e" /* loaderBegin */]());
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default()(participantUrl + "prospect/" + action.id, {
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
                next(__WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__["b" /* fetchProspectSuccess */](prospect));
                next(__WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__["f" /* loaderComplete */]());
                //return Promise.resolve();
            })
                .catch(function (error) {
                next(__WEBPACK_IMPORTED_MODULE_4__actions_ValidationMessageAction__["a" /* AddErrorMessage */]('', "Unable to get prospect"));
                next(__WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__["a" /* fetchProspectFailed */]());
                next(__WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__["f" /* loaderComplete */]());
                //console.log(error);
                //return Promise.resolve();
            });
        //break;
        case __WEBPACK_IMPORTED_MODULE_5__constants_ActionTypes__["f" /* GET_STATES_REQUEST */]:
            next(__WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__["e" /* loaderBegin */]());
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default()(advisorUrl + "advisor/states")
                .then(function (response) { return response.json(); })
                .then(function (json) {
                next(__WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__["d" /* fetchStatesSuccess */](json["$values"]));
                next(__WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__["f" /* loaderComplete */]());
            })
                .catch(function (error) {
                console.log('request states failed', error);
                next(__WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__["f" /* loaderComplete */]());
                next(__WEBPACK_IMPORTED_MODULE_4__actions_ValidationMessageAction__["a" /* AddErrorMessage */]('', "Unable to get states"));
                next(__WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__["c" /* fetchStatesFailed */]());
                //throw error;
                //return error;
            });
        //break;
        case __WEBPACK_IMPORTED_MODULE_5__constants_ActionTypes__["l" /* UPDATE_PROSPECT_REQUEST */]:
            var state = store.getState();
            var prospect = state.ProspectDetail;
            next(__WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__["e" /* loaderBegin */]());
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
                return __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default()(participantUrl + "prospect/update", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(prospectData)
                })
                    .then(function (response) {
                    next(__WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__["f" /* loaderComplete */]());
                    if (response.status >= 200 && response.status < 300) {
                        window.location = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* agileneturl */] + "/Dashboard/Advisor/ClientProspectListing.aspx?agentId=03499";
                    }
                    else {
                        var error = new Error(response.statusText);
                        error.response = response;
                        throw error;
                    }
                })
                    .catch(function (error) {
                    next(__WEBPACK_IMPORTED_MODULE_4__actions_ValidationMessageAction__["a" /* AddErrorMessage */]('', "Unable to update prospect"));
                    next(__WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__["f" /* loaderComplete */]());
                });
            }
            else {
                next(__WEBPACK_IMPORTED_MODULE_0__actions_ProspectAction__["f" /* loaderComplete */]());
                next(__WEBPACK_IMPORTED_MODULE_4__actions_ValidationMessageAction__["a" /* AddErrorMessage */]('', "Unable to update prospect"));
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

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWM4NjY1MzlkNmEzMjk0Njk3N2UiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC91dGlsaXR5L1V0aWxpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvUGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL0FjdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1ZhbGlkYXRpb25NZXNzYWdlQWN0aW9uLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1ZhbGljSW5wdXRDb21wb25lbnQvVmFsaWNJbnB1dENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvUHJvc3BlY3RBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvUHJvc3BlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL1N0YXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9Qcm9zcGVjdEVkaXRDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvVGFiQ29udGFpbmVyQ29tcG9uZW50L1RhYkNvbnRhaW5lckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9WYWxpY1ZhbGlkYXRpb25NZXNzYWdlQ29tcG9uZW50L1ZhbGljVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvTG9hZGVyQ29tcG9uZW50L0xvYWRlckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvUGVyc29uYWxJbmZvcm1hdGlvbkNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2xpYi91dGlscy9wYXJzZU1hc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9saWIvdXRpbHMvZW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9saWIvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvSW52ZXN0b3JQcm9maWxlQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L0ludmVzdG9yUHJvZmlsZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvSW5jb21lU291cmNlQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L0luY29tZVNvdXJjZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9WYWxpZGF0aW9uTWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL1Byb3NwZWN0L1Byb3NwZWN0QXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvYXBpVXJsLmRldi50cyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLW5vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxxQzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQXVCO0FBQ3ZCLElBQU0sWUFBWSxHQUFHLFVBQUMsS0FBUztJQUMzQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FB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QSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQSxPQUFPLEVBQUUsVUFBVSxpREFBaUQ7QUFDcEU7QUFDQTs7QUFFQTtBQUNBLG9DOzs7Ozs7O0FDemhCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FB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QUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEMsQ0FBQztBQUNMLENBQUMsRUFSNEMsQ0FRNUMsRUFSb0MsQ0FRcEM7Ozs7Ozs7O0FDdlVEO0lBQUE7SUFHQSxDQUFDO0lBRlUscUJBQWMsR0FBRSxxREFBcUQsQ0FBQztJQUN0RSxpQkFBVSxHQUFFLDZDQUE2QyxDQUFDO0lBQ3JFLGFBQUM7Q0FBQTtBQUNELHlEQUFlLE1BQU0sRUFBQzs7Ozs7OztBQ0p0QiwrQyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImRpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVjODY2NTM5ZDZhMzI5NDY5NzdlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoODIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5jb25zdCBpc0ZpZWxkVmFsaWQgPSAoaW5wdXQ6YW55KSA9PiB7XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKCdyZXF1aXJlZCcpICE9PSBudWxsICYmIGlucHV0LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxufVxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVGb3JtRmllbGQgPSAoaW5wdXRGaWVsZDogYW55KSA9PiB7XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgICBpc1ZhbGlkID0gaXNGaWVsZFZhbGlkKGlucHV0RmllbGQpO1xyXG4gICAgaW5wdXRGaWVsZC5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgIGlmIChpc1ZhbGlkID09PSBmYWxzZSkge1xyXG4gICAgICAgIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gaW5wdXRGaWVsZC5uYW1lICsgXCIgaXMgcmVxdWlyZWRcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh2YWxpZGF0ZUZvcm1hdChpbnB1dEZpZWxkKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSBpbnB1dEZpZWxkLm5hbWUgKyBcIiBpcyBpbnZhbGlkXCI7XHJcbiAgICAgICAgICAgIGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLypcclxuY29uc3QgdmFsaWRhdGVBbGxGaWVsZCA9IChlKSA9PiB7XHJcbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5wdXRzLmxlbmd0aDsgKytpbmRleCkge1xyXG4gICAgICAgIHZhbGlkYXRlRm9ybUZpZWxkKGlucHV0c1tpbmRleF0pO1xyXG4gICAgfVxyXG59Ki9cclxuY29uc3QgdmFsaWRhdGVGb3JtYXQgPSAoaW5wdXQ6YW55KSA9PiB7XHJcbiAgICBsZXQgaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcbiAgICBsZXQgZm9ybWF0ID0gXCJcIjtcclxuICAgIGlmIChpbnB1dCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09IFwiZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgIC8vZm9ybWF0ID0vXigwWzEtOV18MVswLTJdKVxcLygwWzEtOV18MVxcZHwyXFxkfDNbMDFdKVxcLygxOXwyMClcXGR7Mn0kLztcclxuICAgICAgICAgICAgaWYgKGlucHV0LnZhbGlkaXR5ICE9PSB1bmRlZmluZWQgJiYgKGlucHV0LnZhbGlkaXR5LmJhZElucHV0ID09PSB0cnVlIHx8IGlucHV0LnZhbGlkaXR5LnZhbGlkID09PSBmYWxzZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJChpbnB1dCkuYXR0cignZGF0YS1kYXRlQmlydGgnKSAhPT0gdW5kZWZpbmVkICYmIGlucHV0LnZhbHVlICE9PSBcIlwiICYmIGlucHV0LnZhbHVlQXNEYXRlID49IG5ldyBEYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIgJiYgKGlucHV0LnZhbHVlQXNEYXRlLmdldEZ1bGxZZWFyKCkgPj0gMjA5OSB8fCBpbnB1dC52YWx1ZUFzRGF0ZS5nZXRGdWxsWWVhcigpIDw9IDE5MDApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiICYmIGZvcm1hdCAhPT0gXCJcIiAmJiAoZm9ybWF0IGFzIGFueSkudGVzdChpbnB1dC52YWx1ZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlzRm9ybWF0VmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNGb3JtYXRWYWxpZDtcclxufVxyXG5leHBvcnQgY29uc3QgZXJyb3JDbGFzcyA9IChlcnJvcnM6IGFueSwgZmllbGROYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChlcnJvcnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSAmJiBlcnJvci5lcnJvck1lc3NhZ2UgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnaGFzLWVycm9yIGhhcy1mZWVkYmFjayc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvdXRpbGl0eS9VdGlsaXR5LnRzIiwiICAgIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQZXJzb25hbEluZm9ybWF0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvUGVyc29uYWxJbmZvcm1hdGlvbkNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHZhbGlkYXRlRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxpdHkvVXRpbGl0eSc7XHJcbmltcG9ydCB7IG9uSW5wdXRDaGFuZ2UgYXMgb25DaGFuZ2UgfSBmcm9tICcuLi8uLi9hY3Rpb25zL1Byb3NwZWN0QWN0aW9uJztcclxuaW1wb3J0IHsgQWRkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9WYWxpZGF0aW9uTWVzc2FnZUFjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgdmFsaWNJbnB1dENoYW5nZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gZS50YXJnZXQuY2hlY2tlZCA6IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGxldCBpbnB1dEZpZWxkID0gZS50YXJnZXQ7XHJcbiAgICAgICAgZGlzcGF0Y2gob25DaGFuZ2UobmFtZSwgdmFsdWUpKTtcclxuICAgICAgICBpZiAoaW5wdXRGaWVsZC5pc1ZhbGlkID09PSBmYWxzZSB8fCBpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKEFkZEVycm9yTWVzc2FnZShuYW1lLCBpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAkKGlucHV0RmllbGQpLnBhcmVudCgpLmFkZENsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChBZGRFcnJvck1lc3NhZ2UobmFtZSwgJycpKTtcclxuICAgICAgICAgICAgJChpbnB1dEZpZWxkKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yIGhhcy1mZWVkYmFjaycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IGUudGFyZ2V0LmNoZWNrZWQgOiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGRpc3BhdGNoKG9uQ2hhbmdlKG5hbWUsIHZhbHVlKSk7XHJcbiAgICAgICAgdmFsaWRhdGVGb3JtRmllbGQoaW5wdXRGaWVsZCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dEZpZWxkLmlzVmFsaWQgPT09IGZhbHNlIHx8IGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goQWRkRXJyb3JNZXNzYWdlKG5hbWUsIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICQoaW5wdXRGaWVsZCkucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKEFkZEVycm9yTWVzc2FnZShuYW1lLCAnJykpO1xyXG4gICAgICAgICAgICAkKGlucHV0RmllbGQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59KVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBzc246IHN0YXRlLlByb3NwZWN0RGV0YWlsLnNzbixcclxuICAgIHRpdGxlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC50aXRsZSxcclxuICAgIGZpcnN0TmFtZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmxhc3ROYW1lLFxyXG4gICAgbWlkZGxlSW5pdGlhbDogc3RhdGUuUHJvc3BlY3REZXRhaWwubWlkZGxlSW5pdGlhbCxcclxuICAgIGRhdGVPZkJpcnRoOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5kYXRlT2ZCaXJ0aCxcclxuICAgIGdlbmRlcjogc3RhdGUuUHJvc3BlY3REZXRhaWwuZ2VuZGVyLFxyXG4gICAgdXNDaXRpemVuOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC51c0NpdGl6ZW4sXHJcbiAgICBtYXJpdGFsU3RhdHVzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5tYXJpdGFsU3RhdHVzLFxyXG4gICAgaG9tZUFkZHJlc3NMaW5lMTogc3RhdGUuUHJvc3BlY3REZXRhaWwuaG9tZUFkZHJlc3NMaW5lMSxcclxuICAgIGhvbWVBZGRyZXNzTGluZTI6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmhvbWVBZGRyZXNzTGluZTIsXHJcbiAgICBob21lQWRkcmVzc0xpbmUzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lQWRkcmVzc0xpbmUzLFxyXG4gICAgaG9tZUFkZHJlc3NDaXR5OiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lQWRkcmVzc0NpdHksXHJcbiAgICBob21lQWRkcmVzc1N0YXRlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lQWRkcmVzc1N0YXRlLFxyXG4gICAgaG9tZUFkZHJlc3NaaXBDb2RlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lQWRkcmVzc1ppcENvZGUsXHJcbiAgICBtYWlsaW5nQWRkcmVzc0xpbmUxOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5tYWlsaW5nQWRkcmVzc0xpbmUxLFxyXG4gICAgbWFpbGluZ0FkZHJlc3NMaW5lMjogc3RhdGUuUHJvc3BlY3REZXRhaWwubWFpbGluZ0FkZHJlc3NMaW5lMixcclxuICAgIG1haWxpbmdBZGRyZXNzTGluZTM6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1haWxpbmdBZGRyZXNzTGluZTMsXHJcbiAgICBtYWlsaW5nQWRkcmVzc0NpdHk6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1haWxpbmdBZGRyZXNzQ2l0eSxcclxuICAgIG1haWxpbmdBZGRyZXNzU3RhdGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1haWxpbmdBZGRyZXNzU3RhdGUsXHJcbiAgICBtYWlsaW5nQWRkcmVzc1ppcENvZGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1haWxpbmdBZGRyZXNzWmlwQ29kZSxcclxuICAgIGhvbWVQaG9uZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuaG9tZVBob25lLFxyXG4gICAgd29ya1Bob25lOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC53b3JrUGhvbmUsXHJcbiAgICBvdGhlclBob25lOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5vdGhlclBob25lLFxyXG4gICAgcmVmZXJyYWw6IHN0YXRlLlByb3NwZWN0RGV0YWlsLnJlZmVycmFsLFxyXG4gICAgZW1haWxBZGRyZXNzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5lbWFpbEFkZHJlc3MsXHJcbiAgICBzdGF0ZXM6IHN0YXRlLnN0YXRlc1xyXG59KTtcclxuZXhwb3J0IGNvbnN0IFBlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQZXJzb25hbEluZm9ybWF0aW9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvUGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lci50cyIsImV4cG9ydCBjb25zdCBHRVRfUFJPU1BFQ1RfUkVRVUVTVCA9ICdHRVRfUFJPU1BFQ1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPU1BFQ1RfRkFJTEVEID0gJ0dFVF9QUk9TUEVDVF9GQUlMRUQnO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST1NQRUNUX1NVQ0NFU1MgPSAnR0VUX1BST1NQRUNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9TUEVDVF9SRVFVRVNUID0gJ1VQREFURV9QUk9TUEVDVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9TUEVDVF9GQUlMRUQgPSAnVVBEQVRFX1BST1NQRUNUX0ZBSUxFRCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPU1BFQ1RfU1VDQ0VTUyA9ICdVUERBVEVfUFJPU1BFQ1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUFJPU1BFQ1QgPSAnQUREX1BST1NQRUNUJztcclxuLy9leHBvcnQgY29uc3QgR0VUX1NUQVRFUyA9J0dFVF9TVEFURVMnO1xyXG5leHBvcnQgY29uc3QgR0VUX1NUQVRFU19SRVFVRVNUID0nR0VUX1NUQVRFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9TVEFURVNfRkFJTEVEID0nR0VUX1NUQVRFU19GQUlMRUQnO1xyXG5leHBvcnQgY29uc3QgR0VUX1NUQVRFU19TVUNDRVNTID0nR0VUX1NUQVRFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE9OX0lOUFVUX0NIQU5HRSA9J09OX0lOUFVUX0NIQU5HRSc7XHJcbmV4cG9ydCBjb25zdCBBRERfVkFMSURBVElPTl9FUlJPUl9NRVNTQUdFID0gJ0FERF9FUlJPUl9NRVNTQUdFJztcclxuZXhwb3J0IGNvbnN0IExPQURFUl9CRUdJTiA9J0xPQURFUl9TVEFSVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FERVJfQ09NUExFVEUgPSdMT0FERVJfRU5EJztcclxuZXhwb3J0IGNvbnN0IFNFVF9BR0VOVENPREUgPSdTRVRfQUdFTlRDT0RFJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uc3RhbnRzL0FjdGlvblR5cGVzLnRzIiwiaW1wb3J0IHsgQUREX1ZBTElEQVRJT05fRVJST1JfTUVTU0FHRSB9IGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRXJyb3JNZXNzYWdlID0gKGZpZWxkTmFtZTpzdHJpbmcsIGVycm9yTWVzc2FnZTpzdHJpbmcpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfVkFMSURBVElPTl9FUlJPUl9NRVNTQUdFLFxyXG4gICAgICAgIGZpZWxkTmFtZSxcclxuICAgICAgICBlcnJvck1lc3NhZ2VcclxufSlcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvVmFsaWRhdGlvbk1lc3NhZ2VBY3Rpb24udHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMTUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSAncmVhY3QtaW5wdXQtbWFzayc7XHJcbmNsYXNzIFZhbGljSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55PiB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5vbkNoYW5nZUVtYWlsID0gdGhpcy5vbkNoYW5nZUVtYWlsLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlUGhvbmVOdW1iZXIgPSB0aGlzLm9uQ2hhbmdlUGhvbmVOdW1iZXIuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25DaGFuZ2VTU04gPSB0aGlzLm9uQ2hhbmdlU1NOLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlVGV4dCA9IHRoaXMub25DaGFuZ2VUZXh0LmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLm9uQ2hhbmdlTnVtYmVyID0gdGhpcy5vbkNoYW5nZU51bWJlci5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHRvbkNoYW5nZVRleHQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0aWYgKHRoaXMucHJvcHMub25DaGFuZ2UgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRvbkNoYW5nZU51bWJlcihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xyXG5cdH1cclxuXHRvbkNoYW5nZUVtYWlsKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHRcdGxldCBpbnB1dEZpZWxkID0gZS50YXJnZXQ7XHJcblx0XHRpc1ZhbGlkID0gdGhpcy5pc1ZhbGlkKGlucHV0RmllbGQpO1xyXG5cdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdGlmIChpc1ZhbGlkID09PSBmYWxzZSkge1xyXG5cdFx0XHQvL3RoaXMuYWRkRXJyb3IodGhpcy5zdGF0ZSxpbnB1dEZpZWxkLm5hbWUsIGlucHV0RmllbGQubmFtZSArIFwiIGlzIHJlcXVpcmVkXCIpO1xyXG5cdFx0XHRpbnB1dEZpZWxkLmlzVmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSBpbnB1dEZpZWxkLm5hbWUgKyBcIiBpcyByZXF1aXJlZFwiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlucHV0RmllbGQuaXNWYWxpZCA9IHRydWU7XHJcblx0XHRcdGlmICh0aGlzLnZhbGlkYXRlRW1haWxGb3JtYXQoaW5wdXRGaWVsZCkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID0gZmFsc2U7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSBpbnB1dEZpZWxkLm5hbWUgKyAnIGlzIGludmFsaWQnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPSB0cnVlO1xyXG5cdFx0XHRcdGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gJyc7XHJcblx0XHRcdFx0Ly8kKGlucHV0RmllbGQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7ICAgICAgIFxyXG5cdFx0XHRcdC8vdGhpcy5hZGRFcnJvcih0aGlzLnByb3BzLnN0YXRlLGlucHV0RmllbGQubmFtZSwgXCJcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cdFx0XHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xyXG5cdH1cclxuXHRvbkNoYW5nZVBob25lTnVtYmVyKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHRcdGxldCBpbnB1dEZpZWxkID0gZS50YXJnZXQ7XHJcblx0XHRpc1ZhbGlkID0gdGhpcy5pc1ZhbGlkKGlucHV0RmllbGQpO1xyXG5cclxuXHRcdGlmIChpc1ZhbGlkID09PSBmYWxzZSkge1xyXG5cdFx0XHQvL3RoaXMuYWRkRXJyb3IodGhpcy5zdGF0ZSxpbnB1dEZpZWxkLm5hbWUsIGlucHV0RmllbGQubmFtZSArIFwiIGlzIHJlcXVpcmVkXCIpO1xyXG5cdFx0XHRpbnB1dEZpZWxkLmlzVmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSBpbnB1dEZpZWxkLm5hbWUgKyBcIiBpcyByZXF1aXJlZFwiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlucHV0RmllbGQuaXNWYWxpZCA9IHRydWU7XHJcblx0XHRcdGlmICh0aGlzLnZhbGlkYXRlUGhvbmVOdW1iZXJGb3JtYXQoaW5wdXRGaWVsZCkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0Ly8kKGlucHV0RmllbGQpLnBhcmVudCgpLmFkZENsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7ICAgICAgIFx0XHRcdFx0XHRcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArICcgaXMgaW52YWxpZCc7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlU1NOKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHRcdGxldCBpbnB1dEZpZWxkID0gZS50YXJnZXQ7XHJcblx0XHRpc1ZhbGlkID0gdGhpcy5pc1ZhbGlkKGlucHV0RmllbGQpO1xyXG5cclxuXHRcdGlmIChpc1ZhbGlkID09PSBmYWxzZSkge1xyXG5cdFx0XHRpbnB1dEZpZWxkLmlzVmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSBpbnB1dEZpZWxkLm5hbWUgKyBcIiBpcyByZXF1aXJlZFwiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlucHV0RmllbGQuaXNWYWxpZCA9IHRydWU7XHJcblx0XHRcdGlmICh0aGlzLnZhbGlkYXRlU1NORm9ybWF0KGlucHV0RmllbGQpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gaW5wdXRGaWVsZC5uYW1lICsgJyBpcyBpbnZhbGlkJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPSB0cnVlO1xyXG5cdFx0XHRcdGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcclxuXHR9XHJcblx0dmFsaWRhdGVFbWFpbEZvcm1hdChpbnB1dCkge1xyXG5cdFx0bGV0IGlzRm9ybWF0VmFsaWQgPSB0cnVlO1xyXG5cdFx0bGV0IGZvcm1hdCA9IC9eXFx3KyhbLi1dP1xcdyspKkBcXHcrKFsuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLztcclxuXHRcdGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIiAmJiBmb3JtYXQudGVzdChpbnB1dC52YWx1ZSkgPT09IGZhbHNlKSB7XHJcblx0XHRcdGlzRm9ybWF0VmFsaWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpc0Zvcm1hdFZhbGlkO1xyXG5cdH1cclxuXHR2YWxpZGF0ZVNTTkZvcm1hdChpbnB1dCkge1xyXG5cdFx0bGV0IGlzRm9ybWF0VmFsaWQgPSB0cnVlO1xyXG5cdFx0bGV0IGZvcm1hdCA9IC9eWzAtOUEtWl17M30tWzAtOUEtWl17Mn0tWzAtOUEtWl17NH0kLztcclxuXHRcdGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIiAmJiBmb3JtYXQudGVzdChpbnB1dC52YWx1ZSkgPT09IGZhbHNlKSB7XHJcblx0XHRcdGlzRm9ybWF0VmFsaWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpc0Zvcm1hdFZhbGlkO1xyXG5cdH1cclxuXHR2YWxpZGF0ZVBob25lTnVtYmVyRm9ybWF0KGlucHV0KSB7XHJcblx0XHRsZXQgaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcblx0XHRsZXQgZm9ybWF0ID0gLyg/OlxcKFxcZHszfVxcKXxcXGR7M30pWy0gXT9cXGR7M31bLSBdP1xcZHs0fS87XHJcblx0XHRpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIgICYmIGZvcm1hdC50ZXN0KGlucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0aXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGlzRm9ybWF0VmFsaWQ7XHJcblx0fVxyXG5cdGlzVmFsaWQoaW5wdXQpIHtcclxuXHRcdGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHRcdC8vY29uc29sZS5sb2coaW5wdXQpXHJcblx0XHRpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKCdyZXF1aXJlZCcpICE9PSBudWxsICYmIGlucHV0LnZhbHVlID09PSBcIlwiKSB7XHJcblx0XHRcdC8vJChpbnB1dCkucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTsgICAgICAgICAgIFxyXG5cdFx0XHRpc1ZhbGlkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Ly8gJChpbnB1dCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuXHRcdFx0Ly9pbnB1dC5uZXh0U2libGluZy50ZXh0Q29udGVudCA9IFwiXCI7XHJcblx0XHRcdGlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGlzVmFsaWQ7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGxldCBpbnB1dFR5cGUgPSB0aGlzLnByb3BzLnR5cGUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzLnR5cGUgIT09IG51bGwgPyB0aGlzLnByb3BzLnR5cGUgOiBcInRleHRcIjtcclxuXHRcdGxldCBpbnB1dENvbnRyb2w7XHJcblx0XHRjb25zdCBwcm9wcyA9IHsgLi4udGhpcy5wcm9wcyB9O1xyXG5cclxuXHRcdHN3aXRjaCAoaW5wdXRUeXBlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkge1xyXG5cdFx0XHRjYXNlIFwicGhvbmVcIjpcclxuXHRcdFx0XHRpbnB1dENvbnRyb2wgPSA8SW5wdXRNYXNrICB7Li4ucHJvcHN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlUGhvbmVOdW1iZXJ9IC8+O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwibnVtYmVyXCI6XHJcblx0XHRcdFx0aW5wdXRDb250cm9sID0gPGlucHV0IHsuLi5wcm9wc30gdHlwZT1cIm51bWJlclwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlTnVtYmVyfSAvPjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImVtYWlsXCI6XHJcblx0XHRcdFx0aW5wdXRDb250cm9sID0gPGlucHV0IHsuLi5wcm9wc30gdHlwZT1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VFbWFpbH0gLz47XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJzc25cIjpcclxuXHRcdFx0XHRpbnB1dENvbnRyb2wgPSA8SW5wdXRNYXNrICB7Li4ucHJvcHN9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU1NOfSAvPjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRpbnB1dENvbnRyb2wgPSA8aW5wdXQgey4uLnByb3BzfSB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlVGV4dH0gLz47XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaW5wdXRDb250cm9sO1xyXG5cdH1cclxuXHJcblxyXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcblx0XHR0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0XHRvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuXHRcdG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYWxpY0lucHV0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvVmFsaWNJbnB1dENvbXBvbmVudC9WYWxpY0lucHV0Q29tcG9uZW50LnRzeCIsImltcG9ydCAqIGFzIFByb3NwZWN0QWN0aW9uVHlwZSBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvc3BlY3RSZXF1ZXN0ID0gIChpZDphbnkpID0+ICh7XHJcbiAgICB0eXBlOiBQcm9zcGVjdEFjdGlvblR5cGUuR0VUX1BST1NQRUNUX1JFUVVFU1QsXHJcbiAgICBpZFxyXG59KVxyXG4vKlxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9zcGVjdFN1Y2Nlc3MgPSAgKCkgPT4gKHtcclxuICAgIHR5cGU6IFByb3NwZWN0QWN0aW9uVHlwZS5HRVRfUFJPU1BFQ1RfUkVRVUVTVFxyXG4gICAgXHJcbn0pXHJcbiovXHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9zcGVjdEZhaWxlZCA9ICAoKSA9PiAoe1xyXG4gICAgdHlwZTogUHJvc3BlY3RBY3Rpb25UeXBlLkdFVF9QUk9TUEVDVF9GQUlMRUQgICAgXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9zcGVjdFN1Y2Nlc3MgPSAocHJvc3BlY3Q6YW55KSA9PiAoe1xyXG4gICAgdHlwZTogUHJvc3BlY3RBY3Rpb25UeXBlLkdFVF9QUk9TUEVDVF9TVUNDRVNTLFxyXG4gICAgcHJvc3BlY3RcclxufSlcclxuZXhwb3J0IGNvbnN0IGZldGNoU3RhdGVzUmVxdWVzdCA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBQcm9zcGVjdEFjdGlvblR5cGUuR0VUX1NUQVRFU19SRVFVRVNUICAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU3RhdGVzRmFpbGVkID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IFByb3NwZWN0QWN0aW9uVHlwZS5HRVRfU1RBVEVTX0ZBSUxFRCAgICBcclxufSlcclxuaW50ZXJmYWNlIFN0YXRle1xyXG5Db2RlOnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU3RhdGVzU3VjY2VzcyA9IChzdGF0ZXM6IGFueSkgPT4gKHtcclxuICAgIHR5cGU6IFByb3NwZWN0QWN0aW9uVHlwZS5HRVRfU1RBVEVTX1NVQ0NFU1MsXHJcbiAgICBzdGF0ZXNcclxufSlcclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb3NwZWN0UmVxdWVzdCA9ICgpID0+KHtcclxuICAgIHR5cGU6IFByb3NwZWN0QWN0aW9uVHlwZS5VUERBVEVfUFJPU1BFQ1RfUkVRVUVTVFxyXG59KVxyXG5leHBvcnQgY29uc3Qgb25JbnB1dENoYW5nZSA9IChuYW1lOnN0cmluZyx2YWx1ZTpzdHJpbmcpID0+ICh7XHJcbiAgICB0eXBlOiBQcm9zcGVjdEFjdGlvblR5cGUuT05fSU5QVVRfQ0hBTkdFLFxyXG4gICAgbmFtZSxcclxuICAgIHZhbHVlXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyQmVnaW49ICgpID0+KHtcclxuICAgIHR5cGU6IFByb3NwZWN0QWN0aW9uVHlwZS5MT0FERVJfQkVHSU5cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBZ2VudENvZGUgPSAoYWdlbnRDb2RlOnN0cmluZykgPT4gKHtcclxuICAgIHR5cGU6IFByb3NwZWN0QWN0aW9uVHlwZS5TRVRfQUdFTlRDT0RFLFxyXG4gICAgYWdlbnRDb2RlXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyQ29tcGxldGUgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogUHJvc3BlY3RBY3Rpb25UeXBlLkxPQURFUl9DT01QTEVURVxyXG59KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9ucy9Qcm9zcGVjdEFjdGlvbi50cyIsImV4cG9ydCBjb25zdCBwcm9zcGVjdElkID0gMTk2MztcclxuZXhwb3J0IGNvbnN0IGFnaWxlbmV0dXJsID0naHR0cHM6Ly9kNC52YWxpYy5jb20vYWdpbGVuZXQ1Lyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25zdGFudHMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uVHlwZXMnXHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuZXhwb3J0IGludGVyZmFjZSBQcm9zcGVjdFN0YXRlIHtcclxuICAgIFByb3NwZWN0RGV0YWlsOiBQcm9zcGVjdDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9zcGVjdCB7XHJcbiAgICBmaXJzdE5hbWU/OiBzdHJpbmc7XHJcbiAgICBsYXN0TmFtZT86IHN0cmluZztcclxuICAgIHNzbj86IHN0cmluZztcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgbWlkZGxlSW5pdGlhbD86IHN0cmluZztcclxuICAgIGRhdGVPZkJpcnRoPzogRGF0ZTtcclxuICAgIGdlbmRlcj86IHN0cmluZztcclxuICAgIHVzQ2l0aXplbj86IHN0cmluZztcclxuICAgIG1hcml0YWxTdGF0dXM/OiBzdHJpbmc7XHJcbiAgICBob21lQWRkcmVzc0xpbmUxPzogc3RyaW5nO1xyXG4gICAgaG9tZUFkZHJlc3NMaW5lMj86IHN0cmluZztcclxuICAgIGhvbWVBZGRyZXNzTGluZTM/OiBzdHJpbmc7XHJcbiAgICBob21lQWRkcmVzc0NpdHk/OiBzdHJpbmc7XHJcbiAgICBob21lQWRkcmVzc1N0YXRlPzogc3RyaW5nO1xyXG4gICAgaG9tZUFkZHJlc3NaaXBDb2RlPzogc3RyaW5nO1xyXG4gICAgbWFpbGluZ0FkZHJlc3NMaW5lMT86IHN0cmluZztcclxuICAgIG1haWxpbmdBZGRyZXNzTGluZTI/OiBzdHJpbmc7XHJcbiAgICBtYWlsaW5nQWRkcmVzc0xpbmUzPzogc3RyaW5nO1xyXG4gICAgbWFpbGluZ0FkZHJlc3NDaXR5Pzogc3RyaW5nO1xyXG4gICAgbWFpbGluZ0FkZHJlc3NTdGF0ZT86IHN0cmluZztcclxuICAgIG1haWxpbmdBZGRyZXNzWmlwQ29kZT86IHN0cmluZztcclxuICAgIGhvbWVQaG9uZT86IHN0cmluZztcclxuICAgIHdvcmtQaG9uZT86IHN0cmluZztcclxuICAgIG90aGVyUGhvbmU/OiBzdHJpbmc7XHJcbiAgICByZWZlcnJhbD86IGJvb2xlYW47XHJcbiAgICBlbWFpbEFkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICBwcmV2aW91c0Z1bmRzPzogc3RyaW5nO1xyXG4gICAgRklOUkE/OiBzdHJpbmc7XHJcbiAgICBpbnZlc3RtZW50T2JqZWN0aXZlPzogc3RyaW5nO1xyXG4gICAgcmlza1Byb2ZpbGU/OiBzdHJpbmc7XHJcbiAgICBhbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZT86IHN0cmluZztcclxuICAgIG5ldFdvcnRoUmFuZ2U/OiBzdHJpbmc7XHJcbiAgICBsaWZlSW5zdXJhbmNlUmFuZ2U/OiBzdHJpbmc7XHJcbiAgICB0YXhCcmFja2V0Pzogc3RyaW5nO1xyXG4gICAgZGVwZW5kZW50c05vPzogc3RyaW5nO1xyXG4gICAgYWdlcz86IHN0cmluZztcclxuICAgIGN1cnJlbnRFbXBsb3llcj86IHN0cmluZztcclxuICAgIGVtcGxveW1lbnRTdGF0dXM/OiBzdHJpbmc7XHJcbiAgICBvY2N1cGF0aW9uPzogc3RyaW5nO1xyXG4gICAgZW1wbG95ZXJBZGRyZXNzPzogc3RyaW5nO1xyXG4gICAgZW1wbG95ZXJDaXR5Pzogc3RyaW5nO1xyXG4gICAgZW1wbG95ZXJTdGF0ZT86IHN0cmluZztcclxuICAgIGVtcGxveWVyWmlwQ29kZT86IHN0cmluZztcclxuICAgIGVtcGxveWVyU2FsYXJ5Pzogc3RyaW5nO1xyXG4gICAgaGlyZURhdGU/OiBEYXRlO1xyXG4gICAgZXhwZWN0ZWRBbm51aXR5RGF0ZT86IERhdGU7XHJcbiAgICBpbmNvbWVBY2NvdW50U2FsYXJ5Pzogc3RyaW5nO1xyXG4gICAgc29jaWFsU2VjdXJpdHk/OiBzdHJpbmc7XHJcbiAgICBwZW5zaW9uQmVuZWZpdHM/OiBzdHJpbmc7XHJcbiAgICBpbnZlc3RtZW50SW5jb21lPzogc3RyaW5nO1xyXG4gICAgcm1kPzogc3RyaW5nO1xyXG4gICAgb3RoZXI/OiBzdHJpbmc7XHJcbiAgICBleHBlbnNlc0Ftb3VudD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xyXG4gICAgQ29kZTogc3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBGZXRjaFByb3NwZWN0UmVxdWVzdCB7IHR5cGU6ICdHRVRfUFJPU1BFQ1RfUkVRVUVTVCcsIGlkOiBzdHJpbmcgfVxyXG5pbnRlcmZhY2UgRmV0Y2hQcm9zcGVjdFN1Y2Nlc3MgeyB0eXBlOiAnR0VUX1BST1NQRUNUJywgcHJvc3BlY3Q6YW55IH1cclxuaW50ZXJmYWNlIEZldGNoUHJvc3BlY3RGYWlsZWQgeyB0eXBlOiAnR0VUX1BST1NQRUNUX0ZBSUxFRCcgfVxyXG5pbnRlcmZhY2UgVXBkYXRlUHJvc3BlY3RSZXF1ZXN0IHsgdHlwZTogJ1VQREFURV9QUk9TUEVDVF9SRVFVRVNUJyB9XHJcbmludGVyZmFjZSBPbklucHV0Q2hhbmdlIHsgdHlwZTogJ09OX0lOUFVUX0NIQU5HRScgLCBuYW1lOnN0cmluZywgdmFsdWU6c3RyaW5nfVxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IEZldGNoUHJvc3BlY3RTdWNjZXNzIHwgRmV0Y2hQcm9zcGVjdEZhaWxlZCB8IE9uSW5wdXRDaGFuZ2U7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBmZXRjaFByb3NwZWN0UmVxdWVzdDogKGlkOiBzdHJpbmcpID0+IDxGZXRjaFByb3NwZWN0UmVxdWVzdD57IHR5cGU6ICdHRVRfUFJPU1BFQ1RfUkVRVUVTVCcsIGlkIH0sXHJcbiAgICBmZXRjaFByb3NwZWN0U3VjY2VzczogKHByb3NwZWN0OmFueSkgPT4gPEZldGNoUHJvc3BlY3RTdWNjZXNzPnsgdHlwZTogJ0dFVF9QUk9TUEVDVCcsIHByb3NwZWN0IH0sXHJcbiAgICBmZXRjaFByb3NwZWN0RmFpbGVkOiAoKSA9PiA8RmV0Y2hQcm9zcGVjdEZhaWxlZD57IHR5cGU6ICdHRVRfUFJPU1BFQ1RfRkFJTEVEJyB9LFxyXG4gICAgb25JbnB1dENoYW5nZTogKG5hbWUsIHZhbHVlKSA9PiA8T25JbnB1dENoYW5nZT57IHR5cGU6ICdPTl9JTlBVVF9DSEFOR0UnLCBuYW1lLCB2YWx1ZSB9LFxyXG4gICAgdXBkYXRlUHJvc3BlY3RSZXF1ZXN0OiAoKSA9PiA8VXBkYXRlUHJvc3BlY3RSZXF1ZXN0PnsgdHlwZTogJ1VQREFURV9QUk9TUEVDVF9SRVFVRVNUJyB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8UHJvc3BlY3RTdGF0ZT4gPSAoc3RhdGU6IFByb3NwZWN0U3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiT05fSU5QVVRfQ0hBTkdFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBbYWN0aW9uLm5hbWVdOiBhY3Rpb24udmFsdWUgfSk7XHJcbiAgICAgICAgY2FzZVwiR0VUX1BST1NQRUNUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24ucHJvc3BlY3QpO1xyXG4gICAgICAgIGNhc2UgXCJHRVRfUFJPU1BFQ1RfRkFJTEVEXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBudWxsKTtcclxuICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgT2JqZWN0LmFzc2lnbih7fSwgbnVsbClcclxufTtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFnZW50Q29kZVN0YXRlIHtcclxuICAgIGFnZW50Q29kZTogc3RyaW5nO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIEFnZW50Q29kZSB7IHR5cGU6ICdTRVRfQUdFTlRDT0RFJywgYWdlbnRDb2RlIH1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9yc0FnZW50Q29kZSA9IHtcclxuICAgIHNldEFnZW50Q29kZTogKGFnZW50Q29kZTogc3RyaW5nKSA9PiA8QWdlbnRDb2RlPnsgdHlwZTogJ1NFVF9BR0VOVENPREUnLCBhZ2VudENvZGUgfVxyXG5cclxufTtcclxuXHJcbnR5cGUgS25vd25BY3Rpb25BZ2VudENvZGUgPSBBZ2VudENvZGVcclxuXHJcbmV4cG9ydCBjb25zdCBhZ2VudENvZGVyZWR1Y2VyOiBSZWR1Y2VyPEFnZW50Q29kZVN0YXRlPiA9IChzdGF0ZTogQWdlbnRDb2RlU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb25BZ2VudENvZGUpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiU0VUX0FHRU5UQ09ERVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmFnZW50Q29kZTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL1Byb3NwZWN0LnRzIiwiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzJ1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVzU3RhdGUge1xyXG4gICAgc3RhdGVzOiBTdGF0ZVtdO1xyXG59XHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBDb2RlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBGZXRjaFN0YXRlUmVxdWVzdCB7IHR5cGU6ICdHRVRfU1RBVEVTX1JFUVVFU1QnIH1cclxuaW50ZXJmYWNlIEZldGNoU3RhdGVTdWNjZXNzIHsgdHlwZTogJ0dFVF9TVEFURVNfU1VDQ0VTUycsIHN0YXRlcyB9XHJcbmludGVyZmFjZSBGZXRjaFN0YXRlc0ZhaWxlZCB7IHR5cGU6ICdHRVRfU1RBVEVTX0ZBSUxFRCcgfVxyXG50eXBlIEtub3duQWN0aW9uID0gRmV0Y2hTdGF0ZVN1Y2Nlc3MgfCBGZXRjaFN0YXRlUmVxdWVzdCB8IEZldGNoU3RhdGVzRmFpbGVkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgZmV0Y2hTdGF0ZVJlcXVlc3Q6ICgpID0+IDxGZXRjaFN0YXRlUmVxdWVzdD57IHR5cGU6ICdHRVRfU1RBVEVTX1JFUVVFU1QnIH0sXHJcbiAgICBmZXRjaFN0YXRlU3VjY2VzczogKHN0YXRlcykgPT4gPEZldGNoU3RhdGVTdWNjZXNzPnsgdHlwZTogJ0dFVF9TVEFURVNfU1VDQ0VTUycsIHN0YXRlcyB9LFxyXG4gICAgZmV0Y2hTdGF0ZXNGYWlsZWQ6ICgpID0+IDxGZXRjaFN0YXRlc0ZhaWxlZD57IHR5cGU6ICdHRVRfU1RBVEVTX0ZBSUxFRCcgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFN0YXRlc1N0YXRlPiA9IChzdGF0ZTogU3RhdGVzU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdHRVRfU1RBVEVTX1NVQ0NFU1MnOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgc3RhdGUsIGFjdGlvbi5zdGF0ZXMpOyAgICAgIFxyXG4gICAgICAgIGNhc2UgJ0dFVF9TVEFURVNfUkVRVUVTVCc6XHJcbiAgICAgICAgY2FzZSAnR0VUX1NUQVRFU19GQUlMRUQnOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgbnVsbCk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIHVucmVjb2duaXplZCBhY3Rpb25zIChvciBpbiBjYXNlcyB3aGVyZSBhY3Rpb25zIGhhdmUgbm8gZWZmZWN0KSwgbXVzdCByZXR1cm4gdGhlIGV4aXN0aW5nIHN0YXRlXHJcbiAgICAvLyAgKG9yIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZSBpZiBub25lIHdhcyBzdXBwbGllZClcclxuICAgIHJldHVybiBzdGF0ZSB8fCBPYmplY3QuYXNzaWduKFtdLCBudWxsKSBcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL1N0YXRlcy50cyIsImltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb25UeXBlcydcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlclN0YXRlIHtcclxuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIExvYWRlckJlZ2luIHsgdHlwZTogJ0xPQURFUl9CRUdJTicgfVxyXG5pbnRlcmZhY2UgTG9hZGVyRW5kIHsgdHlwZTogJ0xPQURFUl9FTkQnIH1cclxuXHJcblxyXG5cclxudHlwZSBLbm93bkFjdGlvbiA9IExvYWRlckJlZ2luIHwgTG9hZGVyRW5kO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgbG9hZGVyQmVnaW46ICgpID0+IDxMb2FkZXJCZWdpbj57IHR5cGU6ICdMT0FERVJfQkVHSU4nIH0sXHJcbiAgICBsb2FkZXJFbmQ6ICgpID0+IDxMb2FkZXJFbmQ+eyB0eXBlOiAnTE9BREVSX0VORCcgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPExvYWRlclN0YXRlPiA9IChzdGF0ZTogTG9hZGVyU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdMT0FERVJfQkVHSU4nOlxyXG4gICAgICAgICAgICByZXR1cm4geyBpc0xvYWRpbmc6IHRydWUgfTtcclxuICAgICAgICBjYXNlICdMT0FERVJfRU5EJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgaXNMb2FkaW5nOiBmYWxzZSB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgeyBpc0xvYWRpbmc6IGZhbHNlIH07XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9Mb2FkZXIudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgcmVwbGFjZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbW9yeUhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gJ2FzcG5ldC1wcmVyZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3JvdXRlcyc7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlcnZlclJlbmRlcmVyKHBhcmFtcyA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVuZGVyUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gUHJlcGFyZSBSZWR1eCBzdG9yZSB3aXRoIGluLW1lbW9yeSBoaXN0b3J5LCBhbmQgZGlzcGF0Y2ggYSBuYXZpZ2F0aW9uIGV2ZW50XHJcbiAgICAgICAgLy8gY29ycmVzcG9uZGluZyB0byB0aGUgaW5jb21pbmcgVVJMXHJcbiAgICAgICAgY29uc3QgYmFzZW5hbWUgPSBwYXJhbXMuYmFzZVVybC5zdWJzdHJpbmcoMCwgcGFyYW1zLmJhc2VVcmwubGVuZ3RoIC0gMSk7IC8vIFJlbW92ZSB0cmFpbGluZyBzbGFzaFxyXG4gICAgICAgIGNvbnN0IHVybEFmdGVyQmFzZW5hbWUgPSBwYXJhbXMudXJsLnN1YnN0cmluZyhiYXNlbmFtZS5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoY3JlYXRlTWVtb3J5SGlzdG9yeSgpKTtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZXBsYWNlKHVybEFmdGVyQmFzZW5hbWUpKTtcclxuXHJcbiAgICAgICAgLy8gUHJlcGFyZSBhbiBpbnN0YW5jZSBvZiB0aGUgYXBwbGljYXRpb24gYW5kIHBlcmZvcm0gYW4gaW5pdGFsIHJlbmRlciB0aGF0IHdpbGxcclxuICAgICAgICAvLyBjYXVzZSBhbnkgYXN5bmMgdGFza3MgKGUuZy4sIGRhdGEgYWNjZXNzKSB0byBiZWdpblxyXG4gICAgICAgIGNvbnN0IHJvdXRlckNvbnRleHQ6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IChcclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXsgc3RvcmUgfT5cclxuICAgICAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgYmFzZW5hbWU9eyBiYXNlbmFtZSB9IGNvbnRleHQ9eyByb3V0ZXJDb250ZXh0IH0gbG9jYXRpb249eyBwYXJhbXMubG9jYXRpb24ucGF0aCB9IGNoaWxkcmVuPXsgcm91dGVzIH0gLz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJlbmRlclRvU3RyaW5nKGFwcCk7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlJ3MgYSByZWRpcmVjdGlvbiwganVzdCBzZW5kIHRoaXMgaW5mb3JtYXRpb24gYmFjayB0byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgICAgIGlmIChyb3V0ZXJDb250ZXh0LnVybCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHsgcmVkaXJlY3RVcmw6IHJvdXRlckNvbnRleHQudXJsIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE9uY2UgYW55IGFzeW5jIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyXHJcbiAgICAgICAgLy8gV2UgYWxzbyBzZW5kIHRoZSByZWR1eCBzdG9yZSBzdGF0ZSwgc28gdGhlIGNsaWVudCBjYW4gY29udGludWUgZXhlY3V0aW9uIHdoZXJlIHRoZSBzZXJ2ZXIgbGVmdCBvZmZcclxuICAgICAgICBwYXJhbXMuZG9tYWluVGFza3MudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgaHRtbDogcmVuZGVyVG9TdHJpbmcoYXBwKSxcclxuICAgICAgICAgICAgICAgIGdsb2JhbHM6IHsgaW5pdGlhbFJlZHV4U3RhdGU6IHN0b3JlLmdldFN0YXRlKCkgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCByZWplY3QpOyAvLyBBbHNvIHByb3BhZ2F0ZSBhbnkgZXJyb3JzIGJhY2sgaW50byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9vdC1zZXJ2ZXIudHN4IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTM5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE5Mik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxODApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTM2KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuLy9pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0JztcclxuLy9pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XHJcbi8vaW1wb3J0IEZldGNoRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvRmV0Y2hEYXRhJztcclxuLy9pbXBvcnQgQ291bnRlciBmcm9tICcuL2NvbXBvbmVudHMvQ291bnRlcic7XHJcbmltcG9ydCBQcm9zcGVjdEVkaXRDb250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL1Byb3NwZWN0Q29udGFpbmVyL1Byb3NwZWN0RWRpdENvbnRhaW5lcic7XHJcbiAgICBcclxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9ICg8ZGl2PlxyXG4gICAgICAgICAgICBcclxuPFByb3NwZWN0RWRpdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvZGl2Pik7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzLnRzeCIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgVGFiQ29udGFpbmVyLCBUYWIgfSBmcm9tICcuLi8uLi9zaGFyZWQvVGFiQ29udGFpbmVyQ29tcG9uZW50L1RhYkNvbnRhaW5lckNvbXBvbmVudCc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBWYWxpY1ZhbGlkYXRpb25NZXNzYWdlIGZyb20gJy4uLy4uL3NoYXJlZC9WYWxpY1ZhbGlkYXRpb25NZXNzYWdlQ29tcG9uZW50L1ZhbGljVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL3NoYXJlZC9Mb2FkZXJDb21wb25lbnQvTG9hZGVyQ29tcG9uZW50JztcclxuaW1wb3J0IHsgdmFsaWRhdGVGb3JtRmllbGQgfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbGl0eS9VdGlsaXR5JztcclxuaW1wb3J0IHsgUGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lciB9IGZyb20gJy4vUGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lcic7XHJcbmltcG9ydCB7IEludmVzdG9yUHJvZmlsZUNvbnRhaW5lciB9IGZyb20gJy4vSW52ZXN0b3JQcm9maWxlQ29udGFpbmVyJztcclxuaW1wb3J0IHsgSW5jb21lU291cmNlQ29udGFpbmVyIH0gZnJvbSAnLi9JbmNvbWVTb3VyY2VDb250YWluZXInO1xyXG5pbXBvcnQgeyBhZ2lsZW5ldHVybCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFkZEVycm9yTWVzc2FnZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvVmFsaWRhdGlvbk1lc3NhZ2VBY3Rpb24nO1xyXG4vL2ltcG9ydCB7UHJvc3BlY3RBUEl9IGZyb20gJy4uL2FwaS9wcm9zcGVjdEFwaSc7XHJcbi8vaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25UeXBlcyc7XHJcbmltcG9ydCAqIGFzIFByb3NwZWN0QWN0aW9uIGZyb20gJy4uLy4uL2FjdGlvbnMvUHJvc3BlY3RBY3Rpb24nO1xyXG5pbXBvcnQgJy4vUHJvc3BlY3RFZGl0Q29udGFpbmVyLmNzcyc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIFByb3NwZWN0U3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvUHJvc3BlY3QnXHJcbmltcG9ydCAqIGFzIFN0YXRlU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvU3RhdGVzJztcclxuaW1wb3J0ICogYXMgTG9hZGVyU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvTG9hZGVyJztcclxuaW1wb3J0ICogYXMgVmFsaWRhdGlvbk1lc3NhZ2VTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS92YWxpZGF0aW9uTWVzc2FnZSc7XHJcblxyXG50eXBlIFByb3NwZWN0RWRpdFByb3BzID0gUHJvc3BlY3RTdG9yZS5Qcm9zcGVjdFN0YXRlXHJcbiAgICAmIHR5cGVvZiBQcm9zcGVjdFN0b3JlLmFjdGlvbkNyZWF0b3JzXHJcbiAgICAmIHR5cGVvZiBQcm9zcGVjdFN0b3JlLmFjdGlvbkNyZWF0b3JzQWdlbnRDb2RlXHJcbiAgICAmIHR5cGVvZiBTdGF0ZVN0b3JlLmFjdGlvbkNyZWF0b3JzXHJcbiAgICAmIHR5cGVvZiBMb2FkZXJTdG9yZS5hY3Rpb25DcmVhdG9yc1xyXG4gICAgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PlxyXG4gICAgJiBwcm9zcGVjdFByb3BzXHJcbiAgICA7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvc3BlY3RFZGl0Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmNvbXBvbmVudERpZE1vdW50KCk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgaW5mbykge1xyXG4gICAgICAgIC8vY29uc3Qge2Rpc3BhdGNofSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgLy9kaXNwYXRjaCgpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnY29tcG9uZW50Y2F0aCcpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZm9ybUVycm9ycywgaXNMb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChmb3JtRXJyb3JzICE9PSB1bmRlZmluZWQgJiYgZm9ybUVycm9ycyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JzID0gZm9ybUVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IuZXJyb3JNZXNzYWdlICE9PSAnJyAmJiBlcnJvci5maWVsZE5hbWUgPT09ICcnKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlcnJvcnMpO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKFwiZmFpbGVkIGNvbXBvbmVudFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8QXBwRXJyb3IgZXJyb3I9e2Vycm9yc1swXS5lcnJvck1lc3NhZ2V9IC8+KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICB7aXNMb2FkaW5nID8gPExvYWRlciAvPiA6ICcnIH1cclxuICAgIDxWYWxpY1ZhbGlkYXRpb25NZXNzYWdlIGZvcm1FcnJvcnM9e2Zvcm1FcnJvcnN9IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JzXCIgLz5cclxuICAgIDxmb3JtIGNsYXNzTmFtZT17aXNMb2FkaW5nID8gJ3Nob3dQYXJ0aWFsJzonc2hvd0Z1bGwnfT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRhYkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIG5hbWU9XCJQZXJzb25hbCBJbmZvcm1hdGlvblwiIGlzRGVmYXVsdFRhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIG5hbWU9XCJJbnZlc3RvciBQcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnZlc3RvclByb2ZpbGVDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiIG5hbWU9XCJJbmNvbWUgU291cmNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmNvbWVTb3VyY2VDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIDwvVGFiQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zYXZlUHJvc3BlY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9fSA+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jYW5jZWxQcm9zcGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfX0gPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBzYXZlUHJvc3BlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgZm9ybUVycm9yczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXHJcbiAgICB9XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiAoe1xyXG4gICAgZm9ybUVycm9yczogc3RhdGUuZXJyb3JzLFxyXG4gICAgaXNMb2FkaW5nOiBzdGF0ZS5pc0xvYWRpbmdcclxufSlcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgc2F2ZVByb3NwZWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpIGFzIGFueTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5wdXRzLmxlbmd0aDsgKytpbmRleCkge1xyXG4gICAgICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IGlucHV0c1tpbmRleF07XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRm9ybUZpZWxkKGlucHV0RmllbGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlucHV0RmllbGQuaXNWYWxpZCA9PT0gZmFsc2UgfHwgaW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goQWRkRXJyb3JNZXNzYWdlKGlucHV0RmllbGQubmFtZSwgaW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgICQoaW5wdXRGaWVsZCkucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKEFkZEVycm9yTWVzc2FnZShpbnB1dEZpZWxkLm5hbWUsICcnKSk7XHJcbiAgICAgICAgICAgICAgICAkKGlucHV0RmllbGQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKFByb3NwZWN0U3RvcmUuYWN0aW9uQ3JlYXRvcnMudXBkYXRlUHJvc3BlY3RSZXF1ZXN0KCkpO1xyXG4gICAgfSxcclxuICAgIGNhbmNlbFByb3NwZWN0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHdhbnQgdG8gY2FuY2VsPycpKSB7XHJcbiAgICAgICAgICAgIChkb2N1bWVudCBhcyBhbnkpLmxvY2F0aW9uID0gYWdpbGVuZXR1cmwgKyBcIkRhc2hib2FyZC9BZHZpc29yL0NsaWVudFByb3NwZWN0TGlzdGluZy5hc3B4P2FnZW50SWQ9MDM0OTlcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwYXRjaChMb2FkZXJTdG9yZS5hY3Rpb25DcmVhdG9ycy5sb2FkZXJCZWdpbigpKTtcclxuICAgICAgICBkaXNwYXRjaChQcm9zcGVjdFN0b3JlLmFjdGlvbkNyZWF0b3JzQWdlbnRDb2RlLnNldEFnZW50Q29kZSgod2luZG93IGFzIGFueSkuX19hZ2VudENvZGVfXykpO1xyXG4gICAgICAgIGRpc3BhdGNoKFN0YXRlU3RvcmUuYWN0aW9uQ3JlYXRvcnMuZmV0Y2hTdGF0ZVJlcXVlc3QoKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goUHJvc3BlY3RTdG9yZS5hY3Rpb25DcmVhdG9ycy5mZXRjaFByb3NwZWN0UmVxdWVzdCgod2luZG93IGFzIGFueSkuX19QUk9TUEVDVElEX18pKTtcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5pbnRlcmZhY2UgcHJvc3BlY3RQcm9wcyB7XHJcbiAgICBjYW5jZWxQcm9zcGVjdDogKCkgPT4gdm9pZDtcclxuICAgIHNhdmVQcm9zcGVjdDogKCkgPT4gdm9pZDtcclxuICAgIGZvcm1FcnJvcnM6IGFueTtcclxuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICAgIGNvbXBvbmVudERpZE1vdW50OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IEFwcEVycm9yID0gKHByb3BzOmFueSkgPT4ge1xyXG4gICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgIFNvbWV0aGluZyB3ZW50IHdyb25nISEhIHtwcm9wcy5lcnJvcn1cclxuICAgIDwvZGl2Pik7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvc3BlY3RFZGl0Q29udGFpbmVyKSBhcyB0eXBlb2YgUHJvc3BlY3RFZGl0Q29udGFpbmVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9Qcm9zcGVjdEVkaXRDb250YWluZXIudHN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICcuL1RhYkNvbnRhaW5lci5jc3MnO1xyXG5jb25zdCBjbGVhclN0eWxlID0ge2NsZWFyOidib3RoJywgaGVpZ2h0OicyMHB4J307XHJcbmV4cG9ydCBjbGFzcyBUYWJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LGFueT4geyAgICAgICBcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMudGFiSGVhZGVyKCk7XHJcbiAgICAgICAgdmFyIGN1c3RvbVN0eWxlID0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgbWFpblN0eWxlID0ge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicGFkMjAgbWFpblN0eWxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0yIGN1c3RvbVN0eWxlXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cdFx0XHJcblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y2xlYXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHRcdFx0XHRcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGFiSGVhZGVyKCl7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhlYWRlckxpbmsgPSB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoY2hpbGQsaSkgPT4geyAgICAgICAgICAgIFxyXG5cdFx0XHRcdFx0XHRsZXQgaGVhZGVySWQgPSBjaGlsZC5wcm9wcy5uYW1lLnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gY291bnQgKyAxIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8VGFiSGVhZGVyIGtleT17aX0gaWQgPXtoZWFkZXJJZH0gaGVhZGVyTmFtZSA9IHtjaGlsZC5wcm9wcy5uYW1lfSAgaXNEZWZhdWx0ID0ge2NoaWxkLnByb3BzLmlzRGVmYXVsdFRhYn0gaW5kZXggPSB7Y291bnR9IC8+KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoPHNwYW4gY2xhc3NOYW1lPVwibm9iclwiPiB7aGVhZGVyTGlua30gPC9zcGFuPik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbmRlY2xhcmUgbmFtZXNwYWNlIEpTWCB7XHJcbiAgICBpbnRlcmZhY2UgSW50cmluc2ljRWxlbWVudHMge1xyXG4gICAgICAgIG5vYnI6IGFueVxyXG4gICAgfVxyXG59Ki9cclxuXHJcbmNsYXNzIFRhYkhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksYW55PntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9eyBpZDogdGhpcy5wcm9wcy5pZCArIFwiVGFiXCIsaW5kZXggOiB0aGlzLnByb3BzLmluZGV4LCBpc0RlZmF1bHQ6IHRoaXMucHJvcHMuaXNEZWZhdWx0LCBjdXJyZW50VGFiSW5kZXg6IDAgfTtcclxuICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZSA9IHRoaXMuY2hhbmdlQWN0aXZlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKDxsaSBjbGFzc05hbWUgPSBcInRhYkxpc3RJdGVtIGFjdGl2ZVRhYlwiIG5hbWUgPSBcImZvbGRlclRhYlwiIGlkID0ge3RoaXMuc3RhdGUuaWR9IG9uQ2xpY2sgPSB7dGhpcy5jaGFuZ2VBY3RpdmV9ID4gXHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyTmFtZX0gXHJcbiAgICAgICAgICAgICAgICA8L2xpPik7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VBY3RpdmUgPSAoKSA9PiB7ICAgICAgICBcclxuICAgICAgICB2YXIgeHl6ID0gJChcIltuYW1lPSdmb2xkZXJUYWInXVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHh5ei5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAkKHh5eltpXSkuYXR0cihcImNsYXNzXCIsIFwidGFiTGlzdEl0ZW0gcmVhY3QtdGFiSGVhZGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI1wiICsgdGhpcy5zdGF0ZS5pZCkuYXR0cihcImNsYXNzXCIsIFwidGFiTGlzdEl0ZW0gYWN0aXZlVGFiICByZWFjdC10YWJIZWFkZXJcIik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRUYWJJbmRleDogdGhpcy5wcm9wcy5pbmRleH0pO1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbnRlbnQodGhpcy5zdGF0ZS5pZCk7XHJcbiAgICB9XHJcbiAgICBzaG93Q29udGVudCh4KSB7XHRcdFxyXG4gICAgICAgIHZhciBjb25Cb3hlcyA9ICQoXCJbbmFtZT0nY29udGVudEJveCddXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uQm94ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJChjb25Cb3hlc1tpXSkuYXR0cihcImNsYXNzXCIsIFwibm9TaG93IHJlYWN0LXRhYkNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICQoY29uQm94ZXNbaV0pLmF0dHIoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHhQYXJ0cyA9IHguc3BsaXQoJ1RhYicpO1xyXG4gICAgICAgIGxldCB3aGljaEJveCA9IHhQYXJ0c1swXTtcclxuICAgICAgICAkKFwiI1wiICsgd2hpY2hCb3ggKyAnQm94JykuYXR0cihcImNsYXNzXCIsIFwic2hvdyByZWFjdC10YWJDb250ZW50XCIpO1xyXG4gICAgICAgICQoXCIjXCIgKyB3aGljaEJveCArICdCb3gnKS5hdHRyKFwic3R5bGVcIiwgXCJkaXNwbGF5OmJsb2NrXCIpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0RlZmF1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCl7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LGFueT4ge1xyXG4gICByZW5kZXIoKXtcclxuXHRcdGxldCBpZCA9IHRoaXMucHJvcHMubmFtZS5zcGxpdCgnICcpLmpvaW4oJycpO1xyXG4gICAgICAgIHJldHVybiAoPGRpdiBpZCA9IHtpZCArIFwiQm94XCJ9IG5hbWUgPSBcImNvbnRlbnRCb3hcIiBjbGFzc05hbWUgPSBcIm5vU2hvdyByZWFjdC10YWJDb250ZW50XCIgPiBcclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e2NsZWFyU3R5bGV9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufSBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvVGFiQ29udGFpbmVyQ29tcG9uZW50L1RhYkNvbnRhaW5lckNvbXBvbmVudC50c3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5jbGFzcyBWYWxpY1ZhbGlkYXRpb25NZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSxhbnk+eyAgIFxyXG4gICAgcmVuZGVyKCl7ICAgICAgXHJcbiAgICAgICAgY29uc3Qge2Zvcm1FcnJvcnN9ICAgPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWVycm9ycyc+XHJcbiAgICB7Zm9ybUVycm9ycyAhPT0gdW5kZWZpbmVkPyBmb3JtRXJyb3JzLm1hcCgoZmllbGQsIGkpID0+IHtcclxuICAgICAgaWYoZmllbGQuZXJyb3JNZXNzYWdlICE9PSBcIlwiKXtcclxuICAgICAgICByZXR1cm4gKCAgICAgICAgICBcclxuXHRcdCAgPHAgIGtleT17aX0+PGxhYmVsIGtleT17aX0gY2xhc3NOYW1lPVwidG9vbHRpcC10ZXh0IGZvcm0tZXJyb3JcIj57IGZpZWxkLmVycm9yTWVzc2FnZX0gPC9sYWJlbD48L3A+XHJcbiAgICAgICAgKSAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTonJ31cclxuICA8L2Rpdj4pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIFByb3BUeXBlcyA9IHtcclxuICAgICAgICBmb3JtRXJyb3JzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmaWVsZE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxuICAgICAgICB9KS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFsaWNWYWxpZGF0aW9uTWVzc2FnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL1ZhbGljVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQvVmFsaWNWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudC50c3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vbG9hZGVyLmNzcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRyZW5kZXIoKXtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1N0eWxlXCI+IDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9kaXY+IDwvZGl2Pik7XHJcblx0fVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL0xvYWRlckNvbXBvbmVudC9Mb2FkZXJDb21wb25lbnQudHN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZhbGljSW5wdXQgZnJvbSAnLi4vLi4vc2hhcmVkL1ZhbGljSW5wdXRDb21wb25lbnQvVmFsaWNJbnB1dENvbXBvbmVudCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7ZXJyb3JDbGFzc30gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxpdHkvVXRpbGl0eSc7XHJcblxyXG4vKlxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZXN7XHJcbkNvZGU6c3RyaW5nO1xyXG59Ki9cclxuXHJcbmNsYXNzIFBlcnNvbmFsSW5mb3JtYXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVXNlcklucHV0ID0gdGhpcy5oYW5kbGVVc2VySW5wdXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnZhbGljSW5wdXRDaGFuZ2UgPSB0aGlzLnZhbGljSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHZhbGljSW5wdXRDaGFuZ2UoZSl7XHJcbiAgICAgICAgY29uc3QgeyB2YWxpY0lucHV0Q2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhbGljSW5wdXRDaGFuZ2UoZSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVVc2VySW5wdXQoZSkge1xyXG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgb25DaGFuZ2UoZSk7XHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgeyBzdGF0ZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHN0YXRlc0xpc3REb3duO1xyXG4gICAgICAgIGlmIChzdGF0ZXMgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgc3RhdGVzTGlzdERvd24gPSBPYmplY3Qua2V5cyhzdGF0ZXMpLm1hcCgoa2V5LCBpbmRleCkgPT4geyByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17c3RhdGVzW2tleV0uQ29kZX0gPntzdGF0ZXNba2V5XS5Db2RlfTwvb3B0aW9uPiB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLz0gc3RhdGVzICE9PSB1bmRlZmluZWQgPyBzdGF0ZXMubWFwKChpdGVtLCBpbmRleCkgPT4geyByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT0ge2l0ZW0uQ29kZX0+e2l0ZW0uQ29kZX08L29wdGlvbj59KTogJyc7XHRcdFx0XHRcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ0aXRsZVwiIHZhbHVlPXt0aGlzLnByb3BzLnRpdGxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TXIuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk1ycy48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TXMuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkRyLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5SZXYuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZm9ybS1ncm91cCBjb2wtc20tNCAke2Vycm9yQ2xhc3ModGhpcy5wcm9wcy5lcnJvcnMsICdmaXJzdE5hbWUnKX1gfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1pZGRsZUluaXRpYWxcIj5NSTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJtaWRkbGVJbml0aWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTUlcIiB2YWx1ZT17dGhpcy5wcm9wcy5taWRkbGVJbml0aWFsfSBtYXgtbGVuZ3RoPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZvcm0tZ3JvdXAgY29sLXNtLTUgJHtlcnJvckNsYXNzKHRoaXMucHJvcHMuZXJyb3JzLCAnbGFzdE5hbWUnKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb3JtYXNtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bmb3JtLWdyb3VwIGNvbC1zbS0zICR7ZXJyb3JDbGFzcyh0aGlzLnByb3BzLmVycm9ycywgJ3NzbicpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNzblwiPlNTTjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWYWxpY0lucHV0IHR5cGU9XCJzc25cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwic3NuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQUFBLUFBLUFBQUFcIiBtYXNrPVwiKioqXFwtKipcXC0qKioqXCIgbWFza0NoYXI9XCJfXCIgb25DaGFuZ2U9e3RoaXMudmFsaWNJbnB1dENoYW5nZX0gcmVxdWlyZWQgdmFsdWU9e3RoaXMucHJvcHMuc3NufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPbmx5IGNoYW5nZSBTU04gaWYgeW91IGtub3cgdGhlIHJlYWwgdmFsdWUuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRhdGVPZkJpcnRoXCI+RGF0ZSBPZiBCaXJ0aDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGRhdGEtZGF0ZUJpcnRoPSd0cnVlJyBuYW1lPVwiZGF0ZU9mQmlydGhcIiB2YWx1ZT17dGhpcy5wcm9wcy5kYXRlT2ZCaXJ0aH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlbmRlclwiPkdlbmRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIxXCIgbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuZ2VuZGVyID09PSBcIjFcIn0gLz5NYWxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIyXCIgbmFtZT1cImdlbmRlclwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuZ2VuZGVyID09PSBcIjJcIn0gLz5GZW1hbGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNDaXRpemVuXCI+VVMgQ2l0aXplbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInVzQ2l0aXplblwiIHZhbHVlPVwiMVwiIGNoZWNrZWQ9e3RoaXMucHJvcHMudXNDaXRpemVuID09PSBcIjFcIn0gLz5ZZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ1c0NpdGl6ZW5cIiB2YWx1ZT1cIjBcIiBjaGVja2VkPXt0aGlzLnByb3BzLnVzQ2l0aXplbiA9PT0gXCIwXCJ9IC8+Tm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1hcml0YWxTdGF0dXNcIj5NYXJpdGFsIFN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmVcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm1hcml0YWxTdGF0dXNcIiB2YWx1ZT1cIjFcIiBjaGVja2VkPXt0aGlzLnByb3BzLm1hcml0YWxTdGF0dXMgPT09IFwiMVwifSAvPk1hcnJpZWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibWFyaXRhbFN0YXR1c1wiIHZhbHVlPVwiMFwiIGNoZWNrZWQ9e3RoaXMucHJvcHMubWFyaXRhbFN0YXR1cyA9PT0gXCIwXCJ9IC8+Tm90IE1hcnJpZWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibWFyaXRhbFN0YXR1c1wiIHZhbHVlPVwiNlwiIGNoZWNrZWQ9e3RoaXMucHJvcHMubWFyaXRhbFN0YXR1cyAhPT0gXCIxXCIgJiYgdGhpcy5wcm9wcy5tYXJpdGFsU3RhdHVzICE9PSBcIjBcIn0gLz5DaXZpbCBVbmlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaGFsZi1ydWxlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkhvbWUgQWRkcmVzczo8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvbWVBZGRyZXNzTGluZTFcIj5BZGRyZXNzIExpbmUgMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImhvbWVBZGRyZXNzTGluZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgTGluZSAxXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5ob21lQWRkcmVzc0xpbmUxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG9tZUFkZHJlc3NMaW5lMlwiPkFkZHJlc3MgTGluZSAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaG9tZUFkZHJlc3NMaW5lMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBMaW5lIDJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmhvbWVBZGRyZXNzTGluZTJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob21lQWRkcmVzc0xpbmUzXCI+QWRkcmVzcyBMaW5lIDM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJob21lQWRkcmVzc0xpbmUzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIExpbmUgM1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaG9tZUFkZHJlc3NMaW5lM30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG9tZUFkZHJlc3NDaXR5XCI+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImhvbWVBZGRyZXNzQ2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2l0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaG9tZUFkZHJlc3NDaXR5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvbWVBZGRyZXNzU3RhdGVcIj5TdGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiaG9tZUFkZHJlc3NTdGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaG9tZUFkZHJlc3NTdGF0ZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGVzTGlzdERvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG9tZUFkZHJlc3NaaXBDb2RlXCI+WmlwIENvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJob21lQWRkcmVzc1ppcENvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlppcENvZGVcIiBtYXgtbGVuZ3RoPVwiNVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaG9tZUFkZHJlc3NaaXBDb2RlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYWlsaW5nIEFkZHJlc3M6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1haWxpbmdBZGRyZXNzTGluZTFcIj5BZGRyZXNzIExpbmUgMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm1haWxpbmdBZGRyZXNzTGluZTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgTGluZSAxXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5tYWlsaW5nQWRkcmVzc0xpbmUxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFpbGluZ0FkZHJlc3NMaW5lMlwiPkFkZHJlc3MgTGluZSAyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibWFpbGluZ0FkZHJlc3NMaW5lMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBMaW5lIDJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLm1haWxpbmdBZGRyZXNzTGluZTJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYWlsaW5nQWRkcmVzc0xpbmUzXCI+QWRkcmVzcyBMaW5lIDM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJtYWlsaW5nQWRkcmVzc0xpbmUzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIExpbmUgM1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMubWFpbGluZ0FkZHJlc3NMaW5lM30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFpbGluZ0FkZHJlc3NDaXR5XCI+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm1haWxpbmdBZGRyZXNzQ2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2l0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMubWFpbGluZ0FkZHJlc3NDaXR5fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1haWxpbmdBZGRyZXNzU3RhdGVcIj5TdGF0ZTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIm1haWxpbmdBZGRyZXNzU3RhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLm1haWxpbmdBZGRyZXNzU3RhdGV9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGVzTGlzdERvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFpbGluZ0FkZHJlc3NaaXBDb2RlXCI+WmlwIENvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJtYWlsaW5nQWRkcmVzc1ppcENvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlppcENvZGVcIiBtYXgtbGVuZ3RoPVwiNVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMubWFpbGluZ0FkZHJlc3NaaXBDb2RlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob21lUGhvbmVcIj5Ib21lIFBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZhbGljSW5wdXQgdHlwZT1cInBob25lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImhvbWVQaG9uZVwiIG1hc2s9XCJcXCg5OTlcXCk5OTlcXC05OTk5XCIgbWFza0NoYXI9XCJfXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnZhbGljSW5wdXRDaGFuZ2V9IHZhbHVlPXt0aGlzLnByb3BzLmhvbWVQaG9uZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3b3JrUGhvbmVcIj5Xb3JrIFBob25lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZhbGljSW5wdXQgdHlwZT1cInBob25lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIndvcmtQaG9uZVwiIG1hc2s9XCJcXCg5OTlcXCk5OTlcXC05OTk5XCIgbWFza0NoYXI9XCJfXCIgb25DaGFuZ2U9e3RoaXMudmFsaWNJbnB1dENoYW5nZX0gdmFsdWU9e3RoaXMucHJvcHMud29ya1Bob25lfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdGhlclBob25lXCI+T3RoZXIgUGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwicGhvbmVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwib3RoZXJQaG9uZVwiIG1hc2s9XCJcXCg5OTlcXCk5OTlcXC05OTk5XCIgbWFza0NoYXI9XCJfXCIgb25DaGFuZ2U9e3RoaXMudmFsaWNJbnB1dENoYW5nZX0gdmFsdWU9e3RoaXMucHJvcHMub3RoZXJQaG9uZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVmZXJyYWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IGNoZWNrZWQ9e3RoaXMucHJvcHMucmVmZXJyYWx9IC8+UmVmZXJyYWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbEFkZHJlc3NcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZhbGljSW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImVtYWlsQWRkcmVzc1wiIG9uQ2hhbmdlPXt0aGlzLnZhbGljSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5lbWFpbEFkZHJlc3N9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbnN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcblx0XHQgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICB2YWxpY0lucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNvbmFsSW5mb3JtYXRpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvUGVyc29uYWxJbmZvcm1hdGlvbkNvbXBvbmVudC50c3giLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3BhcnNlTWFzayA9IHJlcXVpcmUoJy4vdXRpbHMvcGFyc2VNYXNrJyk7XG5cbnZhciBfcGFyc2VNYXNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlTWFzayk7XG5cbnZhciBfZW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL3V0aWxzL2Vudmlyb25tZW50Jyk7XG5cbnZhciBfc3RyaW5nID0gcmVxdWlyZSgnLi91dGlscy9zdHJpbmcnKTtcblxudmFyIF9kZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKTtcblxudmFyIF9kZWZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fubmlhc3Npbi9yZWFjdC1pbnB1dC1tYXNrXG5cblxudmFyIElucHV0RWxlbWVudCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhJbnB1dEVsZW1lbnQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIElucHV0RWxlbWVudChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dEVsZW1lbnQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKElucHV0RWxlbWVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKElucHV0RWxlbWVudCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICB2YXIgbWFzayA9IHByb3BzLm1hc2ssXG4gICAgICAgIG1hc2tDaGFyID0gcHJvcHMubWFza0NoYXIsXG4gICAgICAgIGZvcm1hdENoYXJzID0gcHJvcHMuZm9ybWF0Q2hhcnMsXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgICAgYWx3YXlzU2hvd01hc2sgPSBwcm9wcy5hbHdheXNTaG93TWFzaztcblxuXG4gICAgX3RoaXMuaGFzVmFsdWUgPSB2YWx1ZSAhPSBudWxsO1xuICAgIF90aGlzLm1hc2tPcHRpb25zID0gKDAsIF9wYXJzZU1hc2syLmRlZmF1bHQpKG1hc2ssIG1hc2tDaGFyLCBmb3JtYXRDaGFycyk7XG5cbiAgICBpZiAoZGVmYXVsdFZhbHVlID09IG51bGwpIHtcbiAgICAgIGRlZmF1bHRWYWx1ZSA9ICcnO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBfdGhpcy5nZXRTdHJpbmdWYWx1ZSh2YWx1ZSk7XG5cbiAgICBpZiAoX3RoaXMubWFza09wdGlvbnMubWFzayAmJiAoYWx3YXlzU2hvd01hc2sgfHwgdmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9ICgwLCBfc3RyaW5nLmZvcm1hdFZhbHVlKShfdGhpcy5tYXNrT3B0aW9ucywgdmFsdWUpO1xuICAgIH1cblxuICAgIF90aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIElucHV0RWxlbWVudDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbnZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgdGhpcy5sYXN0Q3Vyc29yUG9zID0gbnVsbDtcbiAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG5cbiAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpczIuaXNBbmRyb2lkQnJvd3NlciA9ICgwLCBfZW52aXJvbm1lbnQuaXNBbmRyb2lkQnJvd3NlcikoKTtcbiAgICBfdGhpczIuaXNXaW5kb3dzUGhvbmVCcm93c2VyID0gKDAsIF9lbnZpcm9ubWVudC5pc1dpbmRvd3NQaG9uZUJyb3dzZXIpKCk7XG4gICAgX3RoaXMyLmlzQW5kcm9pZEZpcmVmb3ggPSAoMCwgX2Vudmlyb25tZW50LmlzQW5kcm9pZEZpcmVmb3gpKCk7XG5cbiAgICBpZiAoX3RoaXMyLm1hc2tPcHRpb25zLm1hc2sgJiYgX3RoaXMyLmdldElucHV0VmFsdWUoKSAhPT0gX3RoaXMyLnZhbHVlKSB7XG4gICAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZShfdGhpczIudmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiAobmV4dFByb3BzKSB7XG4gICAgdmFyIG9sZE1hc2tPcHRpb25zID0gX3RoaXMyLm1hc2tPcHRpb25zO1xuXG4gICAgX3RoaXMyLmhhc1ZhbHVlID0gbmV4dFByb3BzLnZhbHVlICE9IG51bGw7XG4gICAgX3RoaXMyLm1hc2tPcHRpb25zID0gKDAsIF9wYXJzZU1hc2syLmRlZmF1bHQpKG5leHRQcm9wcy5tYXNrLCBuZXh0UHJvcHMubWFza0NoYXIsIG5leHRQcm9wcy5mb3JtYXRDaGFycyk7XG5cbiAgICBpZiAoIV90aGlzMi5tYXNrT3B0aW9ucy5tYXNrKSB7XG4gICAgICBfdGhpczIuYmFja3NwYWNlT3JEZWxldGVSZW1vdmFsID0gbnVsbDtcbiAgICAgIF90aGlzMi5sYXN0Q3Vyc29yUG9zID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXNNYXNrQ2hhbmdlZCA9IF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICYmIF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICE9PSBvbGRNYXNrT3B0aW9ucy5tYXNrO1xuICAgIHZhciBzaG93RW1wdHkgPSBuZXh0UHJvcHMuYWx3YXlzU2hvd01hc2sgfHwgX3RoaXMyLmlzRm9jdXNlZCgpO1xuICAgIHZhciBuZXdWYWx1ZSA9IF90aGlzMi5oYXNWYWx1ZSA/IF90aGlzMi5nZXRTdHJpbmdWYWx1ZShuZXh0UHJvcHMudmFsdWUpIDogX3RoaXMyLnZhbHVlO1xuXG4gICAgaWYgKCFvbGRNYXNrT3B0aW9ucy5tYXNrICYmICFfdGhpczIuaGFzVmFsdWUpIHtcbiAgICAgIG5ld1ZhbHVlID0gX3RoaXMyLmdldElucHV0RE9NTm9kZSgpLnZhbHVlO1xuICAgIH1cblxuICAgIGlmIChpc01hc2tDaGFuZ2VkIHx8IF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICYmIChuZXdWYWx1ZSB8fCBzaG93RW1wdHkpKSB7XG4gICAgICBuZXdWYWx1ZSA9ICgwLCBfc3RyaW5nLmZvcm1hdFZhbHVlKShfdGhpczIubWFza09wdGlvbnMsIG5ld1ZhbHVlKTtcblxuICAgICAgaWYgKGlzTWFza0NoYW5nZWQpIHtcbiAgICAgICAgdmFyIHBvcyA9IF90aGlzMi5sYXN0Q3Vyc29yUG9zO1xuICAgICAgICB2YXIgZmlsbGVkTGVuID0gKDAsIF9zdHJpbmcuZ2V0RmlsbGVkTGVuZ3RoKShfdGhpczIubWFza09wdGlvbnMsIG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKHBvcyA9PT0gbnVsbCB8fCBmaWxsZWRMZW4gPCBwb3MpIHtcbiAgICAgICAgICBpZiAoKDAsIF9zdHJpbmcuaXNGaWxsZWQpKF90aGlzMi5tYXNrT3B0aW9ucywgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgICBwb3MgPSBmaWxsZWRMZW47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvcyA9IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKGZpbGxlZExlbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIF90aGlzMi5zZXRDdXJzb3JQb3MocG9zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChfdGhpczIubWFza09wdGlvbnMubWFzayAmJiAoMCwgX3N0cmluZy5pc0VtcHR5KShfdGhpczIubWFza09wdGlvbnMsIG5ld1ZhbHVlKSAmJiAhc2hvd0VtcHR5ICYmICghX3RoaXMyLmhhc1ZhbHVlIHx8ICFuZXh0UHJvcHMudmFsdWUpKSB7XG4gICAgICBuZXdWYWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIF90aGlzMi52YWx1ZSA9IG5ld1ZhbHVlO1xuICB9O1xuXG4gIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfdGhpczIubWFza09wdGlvbnMubWFzayAmJiBfdGhpczIuZ2V0SW5wdXRWYWx1ZSgpICE9PSBfdGhpczIudmFsdWUpIHtcbiAgICAgIF90aGlzMi5zZXRJbnB1dFZhbHVlKF90aGlzMi52YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuaXNET01FbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoSFRNTEVsZW1lbnQpKSA9PT0gJ29iamVjdCcgPyBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgLy8gRE9NMlxuICAgIDogZWxlbWVudC5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2YgZWxlbWVudC5ub2RlTmFtZSA9PT0gJ3N0cmluZyc7XG4gIH07XG5cbiAgdGhpcy5nZXRJbnB1dERPTU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0ID0gX3RoaXMyLmlucHV0O1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChfdGhpczIuaXNET01FbGVtZW50KGlucHV0KSkge1xuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIC8vIFJlYWN0IDAuMTNcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmZpbmRET01Ob2RlKGlucHV0KTtcbiAgfTtcblxuICB0aGlzLmdldElucHV0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0ID0gX3RoaXMyLmdldElucHV0RE9NTm9kZSgpO1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgfTtcblxuICB0aGlzLnNldElucHV0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgaW5wdXQgPSBfdGhpczIuZ2V0SW5wdXRET01Ob2RlKCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIF90aGlzMi52YWx1ZSA9IHZhbHVlO1xuICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gIH07XG5cbiAgdGhpcy5nZXRMZWZ0RWRpdGFibGVQb3MgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgZm9yICh2YXIgaSA9IHBvczsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIGlmICghKDAsIF9zdHJpbmcuaXNQZXJtYW5lbnRDaGFyKShfdGhpczIubWFza09wdGlvbnMsIGkpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB0aGlzLmdldFJpZ2h0RWRpdGFibGVQb3MgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgdmFyIG1hc2sgPSBfdGhpczIubWFza09wdGlvbnMubWFzaztcblxuICAgIGZvciAodmFyIGkgPSBwb3M7IGkgPCBtYXNrLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoISgwLCBfc3RyaW5nLmlzUGVybWFuZW50Q2hhcikoX3RoaXMyLm1hc2tPcHRpb25zLCBpKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdGhpcy5zZXRDdXJzb3JUb0VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmlsbGVkTGVuID0gKDAsIF9zdHJpbmcuZ2V0RmlsbGVkTGVuZ3RoKShfdGhpczIubWFza09wdGlvbnMsIF90aGlzMi52YWx1ZSk7XG4gICAgdmFyIHBvcyA9IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKGZpbGxlZExlbik7XG4gICAgaWYgKHBvcyAhPT0gbnVsbCkge1xuICAgICAgX3RoaXMyLnNldEN1cnNvclBvcyhwb3MpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnNldFNlbGVjdGlvbiA9IGZ1bmN0aW9uIChzdGFydCkge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG5cbiAgICB2YXIgaW5wdXQgPSBfdGhpczIuZ2V0SW5wdXRET01Ob2RlKCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBzdGFydCArIGxlbjtcbiAgICBpZiAoJ3NlbGVjdGlvblN0YXJ0JyBpbiBpbnB1dCAmJiAnc2VsZWN0aW9uRW5kJyBpbiBpbnB1dCkge1xuICAgICAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBzdGFydDtcbiAgICAgIGlucHV0LnNlbGVjdGlvbkVuZCA9IGVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJhbmdlID0gaW5wdXQuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcbiAgICAgIHJhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgc3RhcnQpO1xuICAgICAgcmFuZ2UubW92ZUVuZCgnY2hhcmFjdGVyJywgZW5kIC0gc3RhcnQpO1xuICAgICAgcmFuZ2Uuc2VsZWN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuZ2V0U2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9IF90aGlzMi5nZXRJbnB1dERPTU5vZGUoKTtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIHZhciBlbmQgPSAwO1xuXG4gICAgaWYgKCdzZWxlY3Rpb25TdGFydCcgaW4gaW5wdXQgJiYgJ3NlbGVjdGlvbkVuZCcgaW4gaW5wdXQpIHtcbiAgICAgIHN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICBlbmQgPSBpbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpO1xuICAgICAgaWYgKHJhbmdlLnBhcmVudEVsZW1lbnQoKSA9PT0gaW5wdXQpIHtcbiAgICAgICAgc3RhcnQgPSAtcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAtaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgZW5kID0gLXJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIC1pbnB1dC52YWx1ZS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBlbmQ6IGVuZCxcbiAgICAgIGxlbmd0aDogZW5kIC0gc3RhcnRcbiAgICB9O1xuICB9O1xuXG4gIHRoaXMuZ2V0Q3Vyc29yUG9zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczIuZ2V0U2VsZWN0aW9uKCkuc3RhcnQ7XG4gIH07XG5cbiAgdGhpcy5zZXRDdXJzb3JQb3MgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgX3RoaXMyLnNldFNlbGVjdGlvbihwb3MsIDApO1xuXG4gICAgKDAsIF9kZWZlcjIuZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnNldFNlbGVjdGlvbihwb3MsIDApO1xuICAgIH0pO1xuXG4gICAgX3RoaXMyLmxhc3RDdXJzb3JQb3MgPSBwb3M7XG4gIH07XG5cbiAgdGhpcy5pc0ZvY3VzZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzMi5mb2N1c2VkO1xuICB9O1xuXG4gIHRoaXMuZ2V0U3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gIXZhbHVlICYmIHZhbHVlICE9PSAwID8gJycgOiB2YWx1ZSArICcnO1xuICB9O1xuXG4gIHRoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgX3RoaXMyLmJhY2tzcGFjZU9yRGVsZXRlUmVtb3ZhbCA9IG51bGw7XG5cbiAgICBpZiAodHlwZW9mIF90aGlzMi5wcm9wcy5vbktleURvd24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cblxuICAgIHZhciBrZXkgPSBldmVudC5rZXksXG4gICAgICAgIGN0cmxLZXkgPSBldmVudC5jdHJsS2V5LFxuICAgICAgICBtZXRhS2V5ID0gZXZlbnQubWV0YUtleSxcbiAgICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XG5cbiAgICBpZiAoY3RybEtleSB8fCBtZXRhS2V5IHx8IGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnQmFja3NwYWNlJyB8fCBrZXkgPT09ICdEZWxldGUnKSB7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gX3RoaXMyLmdldFNlbGVjdGlvbigpO1xuICAgICAgdmFyIGNhblJlbW92ZSA9IGtleSA9PT0gJ0JhY2tzcGFjZScgJiYgc2VsZWN0aW9uLmVuZCA+IDAgfHwga2V5ID09PSAnRGVsZXRlJyAmJiBfdGhpczIudmFsdWUubGVuZ3RoID4gc2VsZWN0aW9uLnN0YXJ0O1xuXG4gICAgICBpZiAoIWNhblJlbW92ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzMi5iYWNrc3BhY2VPckRlbGV0ZVJlbW92YWwgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBzZWxlY3Rpb246IF90aGlzMi5nZXRTZWxlY3Rpb24oKVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBwYXN0ZSA9IF90aGlzMi5wYXN0ZTtcbiAgICB2YXIgX21hc2tPcHRpb25zID0gX3RoaXMyLm1hc2tPcHRpb25zLFxuICAgICAgICBtYXNrID0gX21hc2tPcHRpb25zLm1hc2ssXG4gICAgICAgIG1hc2tDaGFyID0gX21hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgICBsYXN0RWRpdGFibGVQb3MgPSBfbWFza09wdGlvbnMubGFzdEVkaXRhYmxlUG9zLFxuICAgICAgICBwcmVmaXggPSBfbWFza09wdGlvbnMucHJlZml4O1xuXG5cbiAgICB2YXIgdmFsdWUgPSBfdGhpczIuZ2V0SW5wdXRWYWx1ZSgpO1xuICAgIHZhciBvbGRWYWx1ZSA9IF90aGlzMi52YWx1ZTtcblxuICAgIGlmIChwYXN0ZSkge1xuICAgICAgX3RoaXMyLnBhc3RlID0gbnVsbDtcbiAgICAgIF90aGlzMi5wYXN0ZVRleHQocGFzdGUudmFsdWUsIHZhbHVlLCBwYXN0ZS5zZWxlY3Rpb24sIGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZWN0aW9uID0gX3RoaXMyLmdldFNlbGVjdGlvbigpO1xuICAgIHZhciBjdXJzb3JQb3MgPSBzZWxlY3Rpb24uZW5kO1xuICAgIHZhciBtYXNrTGVuID0gbWFzay5sZW5ndGg7XG4gICAgdmFyIHZhbHVlTGVuID0gdmFsdWUubGVuZ3RoO1xuICAgIHZhciBvbGRWYWx1ZUxlbiA9IG9sZFZhbHVlLmxlbmd0aDtcblxuICAgIHZhciBjbGVhcmVkVmFsdWU7XG4gICAgdmFyIGVudGVyZWRTdHJpbmc7XG5cbiAgICBpZiAoX3RoaXMyLmJhY2tzcGFjZU9yRGVsZXRlUmVtb3ZhbCkge1xuICAgICAgdmFyIGRlbGV0ZUZyb21SaWdodCA9IF90aGlzMi5iYWNrc3BhY2VPckRlbGV0ZVJlbW92YWwua2V5ID09PSAnRGVsZXRlJztcbiAgICAgIHZhbHVlID0gX3RoaXMyLnZhbHVlO1xuICAgICAgc2VsZWN0aW9uID0gX3RoaXMyLmJhY2tzcGFjZU9yRGVsZXRlUmVtb3ZhbC5zZWxlY3Rpb247XG4gICAgICBjdXJzb3JQb3MgPSBzZWxlY3Rpb24uc3RhcnQ7XG5cbiAgICAgIF90aGlzMi5iYWNrc3BhY2VPckRlbGV0ZVJlbW92YWwgPSBudWxsO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9ICgwLCBfc3RyaW5nLmNsZWFyUmFuZ2UpKF90aGlzMi5tYXNrT3B0aW9ucywgdmFsdWUsIHNlbGVjdGlvbi5zdGFydCwgc2VsZWN0aW9uLmxlbmd0aCk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbi5zdGFydCA8IHByZWZpeC5sZW5ndGggfHwgIWRlbGV0ZUZyb21SaWdodCAmJiBzZWxlY3Rpb24uc3RhcnQgPT09IHByZWZpeC5sZW5ndGgpIHtcbiAgICAgICAgY3Vyc29yUG9zID0gcHJlZml4Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlZGl0YWJsZVBvcyA9IGRlbGV0ZUZyb21SaWdodCA/IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKGN1cnNvclBvcykgOiBfdGhpczIuZ2V0TGVmdEVkaXRhYmxlUG9zKGN1cnNvclBvcyAtIDEpO1xuXG4gICAgICAgIGlmIChlZGl0YWJsZVBvcyAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlID0gKDAsIF9zdHJpbmcuY2xlYXJSYW5nZSkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSwgZWRpdGFibGVQb3MsIDEpO1xuICAgICAgICAgIGN1cnNvclBvcyA9IGVkaXRhYmxlUG9zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZUxlbiA+IG9sZFZhbHVlTGVuKSB7XG4gICAgICB2YXIgZW50ZXJlZFN0cmluZ0xlbiA9IHZhbHVlTGVuIC0gb2xkVmFsdWVMZW47XG4gICAgICB2YXIgc3RhcnRQb3MgPSBzZWxlY3Rpb24uZW5kIC0gZW50ZXJlZFN0cmluZ0xlbjtcbiAgICAgIGVudGVyZWRTdHJpbmcgPSB2YWx1ZS5zdWJzdHIoc3RhcnRQb3MsIGVudGVyZWRTdHJpbmdMZW4pO1xuXG4gICAgICBpZiAoc3RhcnRQb3MgPCBsYXN0RWRpdGFibGVQb3MgJiYgKGVudGVyZWRTdHJpbmdMZW4gIT09IDEgfHwgZW50ZXJlZFN0cmluZyAhPT0gbWFza1tzdGFydFBvc10pKSB7XG4gICAgICAgIGN1cnNvclBvcyA9IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKHN0YXJ0UG9zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnNvclBvcyA9IHN0YXJ0UG9zO1xuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCBzdGFydFBvcykgKyB2YWx1ZS5zdWJzdHIoc3RhcnRQb3MgKyBlbnRlcmVkU3RyaW5nTGVuKTtcblxuICAgICAgY2xlYXJlZFZhbHVlID0gKDAsIF9zdHJpbmcuY2xlYXJSYW5nZSkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSwgc3RhcnRQb3MsIG1hc2tMZW4gLSBzdGFydFBvcyk7XG4gICAgICBjbGVhcmVkVmFsdWUgPSAoMCwgX3N0cmluZy5pbnNlcnRTdHJpbmcpKF90aGlzMi5tYXNrT3B0aW9ucywgY2xlYXJlZFZhbHVlLCBlbnRlcmVkU3RyaW5nLCBjdXJzb3JQb3MpO1xuXG4gICAgICB2YWx1ZSA9ICgwLCBfc3RyaW5nLmluc2VydFN0cmluZykoX3RoaXMyLm1hc2tPcHRpb25zLCBvbGRWYWx1ZSwgZW50ZXJlZFN0cmluZywgY3Vyc29yUG9zKTtcblxuICAgICAgaWYgKGVudGVyZWRTdHJpbmdMZW4gIT09IDEgfHwgY3Vyc29yUG9zID49IHByZWZpeC5sZW5ndGggJiYgY3Vyc29yUG9zIDwgbGFzdEVkaXRhYmxlUG9zKSB7XG4gICAgICAgIGN1cnNvclBvcyA9IE1hdGgubWF4KCgwLCBfc3RyaW5nLmdldEZpbGxlZExlbmd0aCkoX3RoaXMyLm1hc2tPcHRpb25zLCBjbGVhcmVkVmFsdWUpLCBjdXJzb3JQb3MpO1xuICAgICAgICBpZiAoY3Vyc29yUG9zIDwgbGFzdEVkaXRhYmxlUG9zKSB7XG4gICAgICAgICAgY3Vyc29yUG9zID0gX3RoaXMyLmdldFJpZ2h0RWRpdGFibGVQb3MoY3Vyc29yUG9zKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjdXJzb3JQb3MgPCBsYXN0RWRpdGFibGVQb3MpIHtcbiAgICAgICAgY3Vyc29yUG9zKys7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZUxlbiA8IG9sZFZhbHVlTGVuKSB7XG4gICAgICB2YXIgcmVtb3ZlZExlbiA9IG1hc2tMZW4gLSB2YWx1ZUxlbjtcbiAgICAgIGVudGVyZWRTdHJpbmcgPSB2YWx1ZS5zdWJzdHIoMCwgc2VsZWN0aW9uLmVuZCk7XG4gICAgICB2YXIgY2xlYXJPbmx5ID0gZW50ZXJlZFN0cmluZyA9PT0gb2xkVmFsdWUuc3Vic3RyKDAsIHNlbGVjdGlvbi5lbmQpO1xuXG4gICAgICBjbGVhcmVkVmFsdWUgPSAoMCwgX3N0cmluZy5jbGVhclJhbmdlKShfdGhpczIubWFza09wdGlvbnMsIG9sZFZhbHVlLCBzZWxlY3Rpb24uZW5kLCByZW1vdmVkTGVuKTtcblxuICAgICAgaWYgKG1hc2tDaGFyKSB7XG4gICAgICAgIHZhbHVlID0gKDAsIF9zdHJpbmcuaW5zZXJ0U3RyaW5nKShfdGhpczIubWFza09wdGlvbnMsIGNsZWFyZWRWYWx1ZSwgZW50ZXJlZFN0cmluZywgMCk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFyZWRWYWx1ZSA9ICgwLCBfc3RyaW5nLmNsZWFyUmFuZ2UpKF90aGlzMi5tYXNrT3B0aW9ucywgY2xlYXJlZFZhbHVlLCBzZWxlY3Rpb24uZW5kLCBtYXNrTGVuIC0gc2VsZWN0aW9uLmVuZCk7XG4gICAgICBjbGVhcmVkVmFsdWUgPSAoMCwgX3N0cmluZy5pbnNlcnRTdHJpbmcpKF90aGlzMi5tYXNrT3B0aW9ucywgY2xlYXJlZFZhbHVlLCBlbnRlcmVkU3RyaW5nLCAwKTtcblxuICAgICAgaWYgKCFjbGVhck9ubHkpIHtcbiAgICAgICAgY3Vyc29yUG9zID0gTWF0aC5tYXgoKDAsIF9zdHJpbmcuZ2V0RmlsbGVkTGVuZ3RoKShfdGhpczIubWFza09wdGlvbnMsIGNsZWFyZWRWYWx1ZSksIGN1cnNvclBvcyk7XG4gICAgICAgIGlmIChjdXJzb3JQb3MgPCBsYXN0RWRpdGFibGVQb3MpIHtcbiAgICAgICAgICBjdXJzb3JQb3MgPSBfdGhpczIuZ2V0UmlnaHRFZGl0YWJsZVBvcyhjdXJzb3JQb3MpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGN1cnNvclBvcyA8IHByZWZpeC5sZW5ndGgpIHtcbiAgICAgICAgY3Vyc29yUG9zID0gcHJlZml4Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFsdWUgPSAoMCwgX3N0cmluZy5mb3JtYXRWYWx1ZSkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSk7XG5cbiAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG5cbiAgICBpZiAodHlwZW9mIF90aGlzMi5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgX3RoaXMyLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoX3RoaXMyLmlzV2luZG93c1Bob25lQnJvd3Nlcikge1xuICAgICAgKDAsIF9kZWZlcjIuZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2V0U2VsZWN0aW9uKGN1cnNvclBvcywgMCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMyLnNldEN1cnNvclBvcyhjdXJzb3JQb3MpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBfdGhpczIuZm9jdXNlZCA9IHRydWU7XG5cbiAgICBpZiAoX3RoaXMyLm1hc2tPcHRpb25zLm1hc2spIHtcbiAgICAgIGlmICghX3RoaXMyLnZhbHVlKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBfdGhpczIubWFza09wdGlvbnMucHJlZml4O1xuICAgICAgICB2YXIgdmFsdWUgPSAoMCwgX3N0cmluZy5mb3JtYXRWYWx1ZSkoX3RoaXMyLm1hc2tPcHRpb25zLCBwcmVmaXgpO1xuICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9ICgwLCBfc3RyaW5nLmZvcm1hdFZhbHVlKShfdGhpczIubWFza09wdGlvbnMsIHZhbHVlKTtcblxuICAgICAgICAvLyBkbyBub3QgdXNlIHRoaXMuZ2V0SW5wdXRWYWx1ZSBhbmQgdGhpcy5zZXRJbnB1dFZhbHVlIGFzIHRoaXMuaW5wdXRcbiAgICAgICAgLy8gY2FuIGJlIHVuZGVmaW5lZCBhdCB0aGlzIG1vbWVudCBpZiBhdXRvRm9jdXMgYXR0cmlidXRlIGlzIHNldFxuICAgICAgICB2YXIgaXNJbnB1dFZhbHVlQ2hhbmdlZCA9IGlucHV0VmFsdWUgIT09IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoaXNJbnB1dFZhbHVlQ2hhbmdlZCkge1xuICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIudmFsdWUgPSBpbnB1dFZhbHVlO1xuXG4gICAgICAgIGlmIChpc0lucHV0VmFsdWVDaGFuZ2VkICYmIHR5cGVvZiBfdGhpczIucHJvcHMub25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMyLnNldEN1cnNvclRvRW5kKCk7XG4gICAgICB9IGVsc2UgaWYgKCgwLCBfc3RyaW5nLmdldEZpbGxlZExlbmd0aCkoX3RoaXMyLm1hc2tPcHRpb25zLCBfdGhpczIudmFsdWUpIDwgX3RoaXMyLm1hc2tPcHRpb25zLm1hc2subGVuZ3RoKSB7XG4gICAgICAgIF90aGlzMi5zZXRDdXJzb3JUb0VuZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX3RoaXMyLnByb3BzLm9uRm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBfdGhpczIuZm9jdXNlZCA9IGZhbHNlO1xuXG4gICAgaWYgKF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICYmICFfdGhpczIucHJvcHMuYWx3YXlzU2hvd01hc2sgJiYgKDAsIF9zdHJpbmcuaXNFbXB0eSkoX3RoaXMyLm1hc2tPcHRpb25zLCBfdGhpczIudmFsdWUpKSB7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgdmFyIGlzSW5wdXRWYWx1ZUNoYW5nZWQgPSBpbnB1dFZhbHVlICE9PSBfdGhpczIuZ2V0SW5wdXRWYWx1ZSgpO1xuXG4gICAgICBpZiAoaXNJbnB1dFZhbHVlQ2hhbmdlZCkge1xuICAgICAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZShpbnB1dFZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSW5wdXRWYWx1ZUNoYW5nZWQgJiYgdHlwZW9mIF90aGlzMi5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBfdGhpczIucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX3RoaXMyLnByb3BzLm9uQmx1ciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgX3RoaXMyLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25QYXN0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICh0eXBlb2YgX3RoaXMyLnByb3BzLm9uUGFzdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vblBhc3RlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoX3RoaXMyLmlzQW5kcm9pZEJyb3dzZXIgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIF90aGlzMi5wYXN0ZSA9IHtcbiAgICAgICAgdmFsdWU6IF90aGlzMi5nZXRJbnB1dFZhbHVlKCksXG4gICAgICAgIHNlbGVjdGlvbjogX3RoaXMyLmdldFNlbGVjdGlvbigpXG4gICAgICB9O1xuICAgICAgX3RoaXMyLnNldElucHV0VmFsdWUoJycpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnBhc3RlVGV4dCA9IGZ1bmN0aW9uICh2YWx1ZSwgdGV4dCwgc2VsZWN0aW9uLCBldmVudCkge1xuICAgIHZhciBjdXJzb3JQb3MgPSBzZWxlY3Rpb24uc3RhcnQ7XG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gKDAsIF9zdHJpbmcuY2xlYXJSYW5nZSkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSwgY3Vyc29yUG9zLCBzZWxlY3Rpb24ubGVuZ3RoKTtcbiAgICB9XG4gICAgdmFyIHRleHRMZW4gPSAoMCwgX3N0cmluZy5nZXRJbnNlcnRTdHJpbmdMZW5ndGgpKF90aGlzMi5tYXNrT3B0aW9ucywgdmFsdWUsIHRleHQsIGN1cnNvclBvcyk7XG4gICAgdmFsdWUgPSAoMCwgX3N0cmluZy5pbnNlcnRTdHJpbmcpKF90aGlzMi5tYXNrT3B0aW9ucywgdmFsdWUsIHRleHQsIGN1cnNvclBvcyk7XG4gICAgY3Vyc29yUG9zICs9IHRleHRMZW47XG4gICAgY3Vyc29yUG9zID0gX3RoaXMyLmdldFJpZ2h0RWRpdGFibGVQb3MoY3Vyc29yUG9zKSB8fCBjdXJzb3JQb3M7XG5cbiAgICBpZiAodmFsdWUgIT09IF90aGlzMi5nZXRJbnB1dFZhbHVlKCkpIHtcbiAgICAgIF90aGlzMi5zZXRJbnB1dFZhbHVlKHZhbHVlKTtcbiAgICAgIGlmIChldmVudCAmJiB0eXBlb2YgX3RoaXMyLnByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RoaXMyLnNldEN1cnNvclBvcyhjdXJzb3JQb3MpO1xuICB9O1xuXG4gIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcHJvcHMgPSBfdGhpczIucHJvcHMsXG4gICAgICAgIG1hc2sgPSBfcHJvcHMubWFzayxcbiAgICAgICAgYWx3YXlzU2hvd01hc2sgPSBfcHJvcHMuYWx3YXlzU2hvd01hc2ssXG4gICAgICAgIG1hc2tDaGFyID0gX3Byb3BzLm1hc2tDaGFyLFxuICAgICAgICBmb3JtYXRDaGFycyA9IF9wcm9wcy5mb3JtYXRDaGFycyxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ21hc2snLCAnYWx3YXlzU2hvd01hc2snLCAnbWFza0NoYXInLCAnZm9ybWF0Q2hhcnMnXSk7XG5cbiAgICBpZiAoX3RoaXMyLm1hc2tPcHRpb25zLm1hc2spIHtcbiAgICAgIGlmICghcHJvcHMuZGlzYWJsZWQgJiYgIXByb3BzLnJlYWRPbmx5KSB7XG4gICAgICAgIHZhciBoYW5kbGVyc0tleXMgPSBbJ29uQ2hhbmdlJywgJ29uS2V5RG93bicsICdvblBhc3RlJ107XG4gICAgICAgIGhhbmRsZXJzS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBwcm9wc1trZXldID0gX3RoaXMyW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBwcm9wcy52YWx1ZSA9IF90aGlzMi52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoeyByZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuaW5wdXQgPSBfcmVmO1xuICAgICAgfSB9LCBwcm9wcywgeyBvbkZvY3VzOiBfdGhpczIub25Gb2N1cywgb25CbHVyOiBfdGhpczIub25CbHVyIH0pKTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0RWxlbWVudDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChtYXNrLCBtYXNrQ2hhciwgY2hhcnNSdWxlcykge1xuICBpZiAobWFza0NoYXIgPT09IHVuZGVmaW5lZCkge1xuICAgIG1hc2tDaGFyID0gX2NvbnN0YW50cy5kZWZhdWx0TWFza0NoYXI7XG4gIH1cbiAgaWYgKGNoYXJzUnVsZXMgPT0gbnVsbCkge1xuICAgIGNoYXJzUnVsZXMgPSBfY29uc3RhbnRzLmRlZmF1bHRDaGFyc1J1bGVzO1xuICB9XG5cbiAgaWYgKCFtYXNrIHx8IHR5cGVvZiBtYXNrICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB7XG4gICAgICBtYXNrQ2hhcjogbWFza0NoYXIsXG4gICAgICBjaGFyc1J1bGVzOiBjaGFyc1J1bGVzLFxuICAgICAgbWFzazogbnVsbCxcbiAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgIGxhc3RFZGl0YWJsZVBvczogbnVsbCxcbiAgICAgIHBlcm1hbmVudHM6IFtdXG4gICAgfTtcbiAgfVxuICB2YXIgc3RyID0gJyc7XG4gIHZhciBwcmVmaXggPSAnJztcbiAgdmFyIHBlcm1hbmVudHMgPSBbXTtcbiAgdmFyIGlzUGVybWFuZW50ID0gZmFsc2U7XG4gIHZhciBsYXN0RWRpdGFibGVQb3MgPSBudWxsO1xuXG4gIG1hc2suc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGNoYXJhY3Rlcikge1xuICAgIGlmICghaXNQZXJtYW5lbnQgJiYgY2hhcmFjdGVyID09PSAnXFxcXCcpIHtcbiAgICAgIGlzUGVybWFuZW50ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzUGVybWFuZW50IHx8ICFjaGFyc1J1bGVzW2NoYXJhY3Rlcl0pIHtcbiAgICAgICAgcGVybWFuZW50cy5wdXNoKHN0ci5sZW5ndGgpO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gcGVybWFuZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcHJlZml4ICs9IGNoYXJhY3RlcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdEVkaXRhYmxlUG9zID0gc3RyLmxlbmd0aCArIDE7XG4gICAgICB9XG4gICAgICBzdHIgKz0gY2hhcmFjdGVyO1xuICAgICAgaXNQZXJtYW5lbnQgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgbWFza0NoYXI6IG1hc2tDaGFyLFxuICAgIGNoYXJzUnVsZXM6IGNoYXJzUnVsZXMsXG4gICAgcHJlZml4OiBwcmVmaXgsXG4gICAgbWFzazogc3RyLFxuICAgIGxhc3RFZGl0YWJsZVBvczogbGFzdEVkaXRhYmxlUG9zLFxuICAgIHBlcm1hbmVudHM6IHBlcm1hbmVudHNcbiAgfTtcbn07XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL3BhcnNlTWFzay5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGRlZmF1bHRDaGFyc1J1bGVzID0gZXhwb3J0cy5kZWZhdWx0Q2hhcnNSdWxlcyA9IHtcbiAgJzknOiAnWzAtOV0nLFxuICAnYSc6ICdbQS1aYS16XScsXG4gICcqJzogJ1tBLVphLXowLTldJ1xufTtcblxudmFyIGRlZmF1bHRNYXNrQ2hhciA9IGV4cG9ydHMuZGVmYXVsdE1hc2tDaGFyID0gJ18nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL2NvbnN0YW50cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc0FuZHJvaWRCcm93c2VyID0gaXNBbmRyb2lkQnJvd3NlcjtcbmV4cG9ydHMuaXNXaW5kb3dzUGhvbmVCcm93c2VyID0gaXNXaW5kb3dzUGhvbmVCcm93c2VyO1xuZXhwb3J0cy5pc0FuZHJvaWRGaXJlZm94ID0gaXNBbmRyb2lkRmlyZWZveDtcbmV4cG9ydHMuaXNJT1MgPSBpc0lPUztcbmZ1bmN0aW9uIGlzQW5kcm9pZEJyb3dzZXIoKSB7XG4gIHZhciB3aW5kb3dzID0gbmV3IFJlZ0V4cCgnd2luZG93cycsICdpJyk7XG4gIHZhciBmaXJlZm94ID0gbmV3IFJlZ0V4cCgnZmlyZWZveCcsICdpJyk7XG4gIHZhciBhbmRyb2lkID0gbmV3IFJlZ0V4cCgnYW5kcm9pZCcsICdpJyk7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHJldHVybiAhd2luZG93cy50ZXN0KHVhKSAmJiAhZmlyZWZveC50ZXN0KHVhKSAmJiBhbmRyb2lkLnRlc3QodWEpO1xufVxuXG5mdW5jdGlvbiBpc1dpbmRvd3NQaG9uZUJyb3dzZXIoKSB7XG4gIHZhciB3aW5kb3dzID0gbmV3IFJlZ0V4cCgnd2luZG93cycsICdpJyk7XG4gIHZhciBwaG9uZSA9IG5ldyBSZWdFeHAoJ3Bob25lJywgJ2knKTtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuIHdpbmRvd3MudGVzdCh1YSkgJiYgcGhvbmUudGVzdCh1YSk7XG59XG5cbmZ1bmN0aW9uIGlzQW5kcm9pZEZpcmVmb3goKSB7XG4gIHZhciB3aW5kb3dzID0gbmV3IFJlZ0V4cCgnd2luZG93cycsICdpJyk7XG4gIHZhciBmaXJlZm94ID0gbmV3IFJlZ0V4cCgnZmlyZWZveCcsICdpJyk7XG4gIHZhciBhbmRyb2lkID0gbmV3IFJlZ0V4cCgnYW5kcm9pZCcsICdpJyk7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHJldHVybiAhd2luZG93cy50ZXN0KHVhKSAmJiBmaXJlZm94LnRlc3QodWEpICYmIGFuZHJvaWQudGVzdCh1YSk7XG59XG5cbmZ1bmN0aW9uIGlzSU9TKCkge1xuICB2YXIgd2luZG93cyA9IG5ldyBSZWdFeHAoJ3dpbmRvd3MnLCAnaScpO1xuICB2YXIgaW9zID0gbmV3IFJlZ0V4cCgnKGlwb2R8aXBob25lfGlwYWQpJywgJ2knKTtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuICF3aW5kb3dzLnRlc3QodWEpICYmIGlvcy50ZXN0KHVhKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2xpYi91dGlscy9lbnZpcm9ubWVudC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc1Blcm1hbmVudENoYXIgPSBpc1Blcm1hbmVudENoYXI7XG5leHBvcnRzLmlzQWxsb3dlZENoYXIgPSBpc0FsbG93ZWRDaGFyO1xuZXhwb3J0cy5pc0VtcHR5ID0gaXNFbXB0eTtcbmV4cG9ydHMuZ2V0RmlsbGVkTGVuZ3RoID0gZ2V0RmlsbGVkTGVuZ3RoO1xuZXhwb3J0cy5pc0ZpbGxlZCA9IGlzRmlsbGVkO1xuZXhwb3J0cy5mb3JtYXRWYWx1ZSA9IGZvcm1hdFZhbHVlO1xuZXhwb3J0cy5jbGVhclJhbmdlID0gY2xlYXJSYW5nZTtcbmV4cG9ydHMuaW5zZXJ0U3RyaW5nID0gaW5zZXJ0U3RyaW5nO1xuZXhwb3J0cy5nZXRJbnNlcnRTdHJpbmdMZW5ndGggPSBnZXRJbnNlcnRTdHJpbmdMZW5ndGg7XG5mdW5jdGlvbiBpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIHBvcykge1xuICByZXR1cm4gbWFza09wdGlvbnMucGVybWFuZW50cy5pbmRleE9mKHBvcykgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBpc0FsbG93ZWRDaGFyKG1hc2tPcHRpb25zLCBwb3MsIGNoYXJhY3Rlcikge1xuICB2YXIgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBjaGFyc1J1bGVzID0gbWFza09wdGlvbnMuY2hhcnNSdWxlcztcblxuXG4gIGlmICghY2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgcG9zKSkge1xuICAgIHJldHVybiBtYXNrW3Bvc10gPT09IGNoYXJhY3RlcjtcbiAgfVxuXG4gIHZhciBydWxlQ2hhciA9IG1hc2tbcG9zXTtcbiAgdmFyIGNoYXJSdWxlID0gY2hhcnNSdWxlc1tydWxlQ2hhcl07XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoY2hhclJ1bGUpLnRlc3QoY2hhcmFjdGVyKTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eShtYXNrT3B0aW9ucywgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnNwbGl0KCcnKS5ldmVyeShmdW5jdGlvbiAoY2hhcmFjdGVyLCBpKSB7XG4gICAgcmV0dXJuIGlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgaSkgfHwgIWlzQWxsb3dlZENoYXIobWFza09wdGlvbnMsIGksIGNoYXJhY3Rlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRGaWxsZWRMZW5ndGgobWFza09wdGlvbnMsIHZhbHVlKSB7XG4gIHZhciBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgcHJlZml4ID0gbWFza09wdGlvbnMucHJlZml4O1xuXG5cbiAgaWYgKCFtYXNrQ2hhcikge1xuICAgIHdoaWxlICh2YWx1ZS5sZW5ndGggPiBwcmVmaXgubGVuZ3RoICYmIGlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgdmFsdWUubGVuZ3RoIC0gMSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgdmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGg7XG4gIH1cblxuICB2YXIgZmlsbGVkTGVuZ3RoID0gcHJlZml4Lmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IHZhbHVlLmxlbmd0aDsgaSA+PSBwcmVmaXgubGVuZ3RoOyBpLS0pIHtcbiAgICB2YXIgY2hhcmFjdGVyID0gdmFsdWVbaV07XG4gICAgdmFyIGlzRW50ZXJlZENoYXJhY3RlciA9ICFpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIGkpICYmIGlzQWxsb3dlZENoYXIobWFza09wdGlvbnMsIGksIGNoYXJhY3Rlcik7XG4gICAgaWYgKGlzRW50ZXJlZENoYXJhY3Rlcikge1xuICAgICAgZmlsbGVkTGVuZ3RoID0gaSArIDE7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsbGVkTGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBpc0ZpbGxlZChtYXNrT3B0aW9ucywgdmFsdWUpIHtcbiAgcmV0dXJuIGdldEZpbGxlZExlbmd0aChtYXNrT3B0aW9ucywgdmFsdWUpID09PSBtYXNrT3B0aW9ucy5tYXNrLmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUobWFza09wdGlvbnMsIHZhbHVlKSB7XG4gIHZhciBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBwcmVmaXggPSBtYXNrT3B0aW9ucy5wcmVmaXg7XG5cblxuICBpZiAoIW1hc2tDaGFyKSB7XG4gICAgdmFsdWUgPSBpbnNlcnRTdHJpbmcobWFza09wdGlvbnMsICcnLCB2YWx1ZSwgMCk7XG4gICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBnZXRGaWxsZWRMZW5ndGgobWFza09wdGlvbnMsIHZhbHVlKSk7XG5cbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgcHJlZml4Lmxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBwcmVmaXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaWYgKHZhbHVlKSB7XG4gICAgdmFyIGVtcHR5VmFsdWUgPSBmb3JtYXRWYWx1ZShtYXNrT3B0aW9ucywgJycpO1xuICAgIHJldHVybiBpbnNlcnRTdHJpbmcobWFza09wdGlvbnMsIGVtcHR5VmFsdWUsIHZhbHVlLCAwKTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIGkpKSB7XG4gICAgICB2YWx1ZSArPSBtYXNrW2ldO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBtYXNrQ2hhcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUmFuZ2UobWFza09wdGlvbnMsIHZhbHVlLCBzdGFydCwgbGVuKSB7XG4gIHZhciBlbmQgPSBzdGFydCArIGxlbjtcbiAgdmFyIG1hc2tDaGFyID0gbWFza09wdGlvbnMubWFza0NoYXIsXG4gICAgICBtYXNrID0gbWFza09wdGlvbnMubWFzayxcbiAgICAgIHByZWZpeCA9IG1hc2tPcHRpb25zLnByZWZpeDtcblxuICB2YXIgYXJyYXlWYWx1ZSA9IHZhbHVlLnNwbGl0KCcnKTtcblxuICBpZiAoIW1hc2tDaGFyKSB7XG4gICAgc3RhcnQgPSBNYXRoLm1heChwcmVmaXgubGVuZ3RoLCBzdGFydCk7XG4gICAgYXJyYXlWYWx1ZS5zcGxpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0KTtcbiAgICB2YWx1ZSA9IGFycmF5VmFsdWUuam9pbignJyk7XG5cbiAgICByZXR1cm4gZm9ybWF0VmFsdWUobWFza09wdGlvbnMsIHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBhcnJheVZhbHVlLm1hcChmdW5jdGlvbiAoY2hhcmFjdGVyLCBpKSB7XG4gICAgaWYgKGkgPCBzdGFydCB8fCBpID49IGVuZCkge1xuICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICB9XG4gICAgaWYgKGlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgaSkpIHtcbiAgICAgIHJldHVybiBtYXNrW2ldO1xuICAgIH1cbiAgICByZXR1cm4gbWFza0NoYXI7XG4gIH0pLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHJpbmcobWFza09wdGlvbnMsIHZhbHVlLCBpbnNlcnRTdHIsIGluc2VydFBvcykge1xuICB2YXIgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgcHJlZml4ID0gbWFza09wdGlvbnMucHJlZml4O1xuXG4gIHZhciBhcnJheUluc2VydFN0ciA9IGluc2VydFN0ci5zcGxpdCgnJyk7XG4gIHZhciBpc0lucHV0RmlsbGVkID0gaXNGaWxsZWQobWFza09wdGlvbnMsIHZhbHVlKTtcblxuICB2YXIgaXNVc2FibGVQb3NpdGlvbiA9IGZ1bmN0aW9uIGlzVXNhYmxlUG9zaXRpb24ocG9zLCBjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gIWlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgcG9zKSB8fCBjaGFyYWN0ZXIgPT09IG1hc2tbcG9zXTtcbiAgfTtcbiAgdmFyIGlzVXNhYmxlQ2hhcmFjdGVyID0gZnVuY3Rpb24gaXNVc2FibGVDaGFyYWN0ZXIoY2hhcmFjdGVyLCBwb3MpIHtcbiAgICByZXR1cm4gIW1hc2tDaGFyIHx8ICFpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIHBvcykgfHwgY2hhcmFjdGVyICE9PSBtYXNrQ2hhcjtcbiAgfTtcblxuICBpZiAoIW1hc2tDaGFyICYmIGluc2VydFBvcyA+IHZhbHVlLmxlbmd0aCkge1xuICAgIHZhbHVlICs9IG1hc2suc2xpY2UodmFsdWUubGVuZ3RoLCBpbnNlcnRQb3MpO1xuICB9XG5cbiAgYXJyYXlJbnNlcnRTdHIuZXZlcnkoZnVuY3Rpb24gKGluc2VydENoYXJhY3Rlcikge1xuICAgIHdoaWxlICghaXNVc2FibGVQb3NpdGlvbihpbnNlcnRQb3MsIGluc2VydENoYXJhY3RlcikpIHtcbiAgICAgIGlmIChpbnNlcnRQb3MgPj0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlICs9IG1hc2tbaW5zZXJ0UG9zXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1VzYWJsZUNoYXJhY3RlcihpbnNlcnRDaGFyYWN0ZXIsIGluc2VydFBvcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGluc2VydFBvcysrO1xuXG4gICAgICAvLyBzdG9wIGl0ZXJhdGlvbiBpZiBtYXhpbXVtIHZhbHVlIGxlbmd0aCByZWFjaGVkXG4gICAgICBpZiAoaW5zZXJ0UG9zID49IG1hc2subGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaXNBbGxvd2VkID0gaXNBbGxvd2VkQ2hhcihtYXNrT3B0aW9ucywgaW5zZXJ0UG9zLCBpbnNlcnRDaGFyYWN0ZXIpIHx8IGluc2VydENoYXJhY3RlciA9PT0gbWFza0NoYXI7XG4gICAgaWYgKCFpc0FsbG93ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpbnNlcnRQb3MgPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGlmIChtYXNrQ2hhciB8fCBpc0lucHV0RmlsbGVkIHx8IGluc2VydFBvcyA8IHByZWZpeC5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpbnNlcnRQb3MpICsgaW5zZXJ0Q2hhcmFjdGVyICsgdmFsdWUuc2xpY2UoaW5zZXJ0UG9zICsgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGluc2VydFBvcykgKyBpbnNlcnRDaGFyYWN0ZXIgKyB2YWx1ZS5zbGljZShpbnNlcnRQb3MpO1xuICAgICAgICB2YWx1ZSA9IGZvcm1hdFZhbHVlKG1hc2tPcHRpb25zLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghbWFza0NoYXIpIHtcbiAgICAgIHZhbHVlICs9IGluc2VydENoYXJhY3RlcjtcbiAgICB9XG5cbiAgICBpbnNlcnRQb3MrKztcblxuICAgIC8vIHN0b3AgaXRlcmF0aW9uIGlmIG1heGltdW0gdmFsdWUgbGVuZ3RoIHJlYWNoZWRcbiAgICByZXR1cm4gaW5zZXJ0UG9zIDwgbWFzay5sZW5ndGg7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5zZXJ0U3RyaW5nTGVuZ3RoKG1hc2tPcHRpb25zLCB2YWx1ZSwgaW5zZXJ0U3RyLCBpbnNlcnRQb3MpIHtcbiAgdmFyIG1hc2sgPSBtYXNrT3B0aW9ucy5tYXNrLFxuICAgICAgbWFza0NoYXIgPSBtYXNrT3B0aW9ucy5tYXNrQ2hhcjtcblxuICB2YXIgYXJyYXlJbnNlcnRTdHIgPSBpbnNlcnRTdHIuc3BsaXQoJycpO1xuICB2YXIgaW5pdGlhbEluc2VydFBvcyA9IGluc2VydFBvcztcblxuICB2YXIgaXNVc2FibGVQb3NpdGlvbiA9IGZ1bmN0aW9uIGlzVXNhYmxlUG9zaXRpb24ocG9zLCBjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gIWlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgcG9zKSB8fCBjaGFyYWN0ZXIgPT09IG1hc2tbcG9zXTtcbiAgfTtcblxuICBhcnJheUluc2VydFN0ci5ldmVyeShmdW5jdGlvbiAoaW5zZXJ0Q2hhcmFjdGVyKSB7XG4gICAgd2hpbGUgKCFpc1VzYWJsZVBvc2l0aW9uKGluc2VydFBvcywgaW5zZXJ0Q2hhcmFjdGVyKSkge1xuICAgICAgaW5zZXJ0UG9zKys7XG5cbiAgICAgIC8vIHN0b3AgaXRlcmF0aW9uIGlmIG1heGltdW0gdmFsdWUgbGVuZ3RoIHJlYWNoZWRcbiAgICAgIGlmIChpbnNlcnRQb3MgPj0gbWFzay5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpc0FsbG93ZWQgPSBpc0FsbG93ZWRDaGFyKG1hc2tPcHRpb25zLCBpbnNlcnRQb3MsIGluc2VydENoYXJhY3RlcikgfHwgaW5zZXJ0Q2hhcmFjdGVyID09PSBtYXNrQ2hhcjtcblxuICAgIGlmIChpc0FsbG93ZWQpIHtcbiAgICAgIGluc2VydFBvcysrO1xuICAgIH1cblxuICAgIC8vIHN0b3AgaXRlcmF0aW9uIGlmIG1heGltdW0gdmFsdWUgbGVuZ3RoIHJlYWNoZWRcbiAgICByZXR1cm4gaW5zZXJ0UG9zIDwgbWFzay5sZW5ndGg7XG4gIH0pO1xuXG4gIHJldHVybiBpbnNlcnRQb3MgLSBpbml0aWFsSW5zZXJ0UG9zO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL3N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHZhciBkZWZlciA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZlcihmbik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL2RlZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBtYXBEaXNwYXRjaFRvUHJvcHMgfSBmcm9tICcuL1BlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXInO1xyXG5pbXBvcnQgSW52ZXN0b3JQcm9maWxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvSW52ZXN0b3JQcm9maWxlQ29tcG9uZW50JztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHsgICAgICAgICAgIFxyXG4gICAgcHJldmlvdXNGdW5kczogc3RhdGUuUHJvc3BlY3REZXRhaWwucHJldmlvdXNGdW5kcyxcclxuICAgIEZJTlJBOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5GSU5SQSxcclxuICAgIGludmVzdG1lbnRPYmplY3RpdmU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmludmVzdG1lbnRPYmplY3RpdmUsXHJcbiAgICByaXNrUHJvZmlsZTogc3RhdGUuUHJvc3BlY3REZXRhaWwucmlza1Byb2ZpbGUsXHJcbiAgICBhbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2UsXHJcbiAgICBuZXRXb3J0aFJhbmdlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5uZXRXb3J0aFJhbmdlLFxyXG4gICAgbGlmZUluc3VyYW5jZVJhbmdlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5saWZlSW5zdXJhbmNlUmFuZ2UsXHJcbiAgICB0YXhCcmFja2V0OiBzdGF0ZS5Qcm9zcGVjdERldGFpbC50YXhCcmFja2V0LFxyXG4gICAgZGVwZW5kZW50c05vOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5kZXBlbmRlbnRzTm8sXHJcbiAgICBhZ2VzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5hZ2VzLFxyXG4gICAgY3VycmVudEVtcGxveWVyOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5jdXJyZW50RW1wbG95ZXIsXHJcbiAgICBlbXBsb3ltZW50U3RhdHVzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5lbXBsb3ltZW50U3RhdHVzLFxyXG4gICAgb2NjdXBhdGlvbjogc3RhdGUuUHJvc3BlY3REZXRhaWwub2NjdXBhdGlvbixcclxuICAgIGVtcGxveWVyQWRkcmVzczogc3RhdGUuUHJvc3BlY3REZXRhaWwuZW1wbG95ZXJBZGRyZXNzLFxyXG4gICAgZW1wbG95ZXJDaXR5OiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5lbXBsb3llckNpdHksXHJcbiAgICBlbXBsb3llclN0YXRlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5lbXBsb3llclN0YXRlLFxyXG4gICAgZW1wbG95ZXJaaXBDb2RlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5lbXBsb3llclppcENvZGUsXHJcbiAgICBoaXJlRGF0ZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuaGlyZURhdGUsXHJcbiAgICBleHBlY3RlZEFubnVpdHlEYXRlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5leHBlY3RlZEFubnVpdHlEYXRlLFxyXG4gICAgZW1wbG95ZXJTYWxhcnk6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmVtcGxveWVyU2FsYXJ5LFxyXG4gICAgc3RhdGVzOiBzdGF0ZS5zdGF0ZXNcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEludmVzdG9yUHJvZmlsZUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEludmVzdG9yUHJvZmlsZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvSW52ZXN0b3JQcm9maWxlQ29udGFpbmVyLnRzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZhbGljSW5wdXQgZnJvbSAnLi4vLi4vc2hhcmVkL1ZhbGljSW5wdXRDb21wb25lbnQvVmFsaWNJbnB1dENvbXBvbmVudCc7XHJcbi8qZXhwb3J0IGludGVyZmFjZSBJSW52ZXN0b3JQcm9maWxlUHJvcHN7XHJcbi8vc3RhdGVzPzogSVN0YXRlW107XHJcbnN0YXRlcz86IGFueVtdO1xyXG5vbkNoYW5nZTogKCk9PiB2b2lkO1xyXG5wcmV2aW91c0Z1bmRzPzogc3RyaW5nO1xyXG5GSU5SQT86IHN0cmluZztcclxuaW52ZXN0bWVudE9iamVjdGl2ZT86c3RyaW5nO1xyXG5yaXNrUHJvZmlsZT86c3RyaW5nO1xyXG5hbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZT86c3RyaW5nO1xyXG5uZXRXb3J0aFJhbmdlPzpzdHJpbmc7XHJcbmxpZmVJbnN1cmFuY2VSYW5nZT86IHN0cmluZztcclxudGF4QnJhY2tldD86c3RyaW5nO1xyXG5kZXBlbmRlbnRzTm8/OnN0cmluZztcclxuYWdlcz86c3RyaW5nO1xyXG5jdXJyZW50RW1wbG95ZXI/OnN0cmluZztcclxuZW1wbG95bWVudFN0YXR1cz86c3RyaW5nO1xyXG5vY2N1cGF0aW9uPzpzdHJpbmc7XHJcbmVtcGxveWVyQWRkcmVzcz86c3RyaW5nO1xyXG5lbXBsb3llckNpdHk/OnN0cmluZztcclxuZW1wbG95ZXJTdGF0ZT86c3RyaW5nO1xyXG5lbXBsb3llclppcENvZGU/OnN0cmluZztcclxuZW1wbG95ZXJTYWxhcnk/OnN0cmluZztcclxuaGlyZURhdGU/OmFueTtcclxuZXhwZWN0ZWRBbm51aXR5RGF0ZT86YW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZXtcclxuQ29kZTpzdHJpbmc7XHJcbn1cclxuKi9cclxuY2xhc3MgSW52ZXN0b3JQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50PGFueSxhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVXNlcklucHV0ID0gdGhpcy5oYW5kbGVVc2VySW5wdXQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGhhbmRsZVVzZXJJbnB1dChlKSB7XHJcbiAgICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBvbkNoYW5nZShlKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgeyBzdGF0ZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHN0YXRlc0xpc3REb3duO1xyXG4gICAgICAgIGlmIChzdGF0ZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzdGF0ZXNMaXN0RG93biA9IE9iamVjdC5rZXlzKHN0YXRlcykubWFwKChrZXksIGluZGV4KSA9PiB7IHJldHVybiA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtzdGF0ZXNba2V5XS5Db2RlfSA+e3N0YXRlc1trZXldLkNvZGV9PC9vcHRpb24+IH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByZXZpb3VzRnVuZHNcIj5QcmV2aW91c2x5IHB1cmNoYXNlZCBtdXR1YWwgZnVuZHMgb3Igb3RoZXIgc2VjdXJpdGllcz88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNoZWNrZWQ9e3RoaXMucHJvcHMucHJldmlvdXNGdW5kcyA9PT0gXCIxXCJ9IG5hbWU9XCJwcmV2aW91c0Z1bmRzXCIgdmFsdWU9XCIxXCIgLz5ZZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjBcIiBuYW1lPVwicHJldmlvdXNGdW5kc1wiIGNoZWNrZWQ9e3RoaXMucHJvcHMucHJldmlvdXNGdW5kcyA9PT0gXCIwXCJ9IC8+Tm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiRklOUkFcIj5FbXBsb3llZCBieSBvciByZWdpc3RlcmVkIHdpdGggYSBGSU5SQSBtZW1iZXIgZmlybT88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJGSU5SQVwiIHZhbHVlPVwiMVwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuRklOUkEgPT09IFwiMVwifSAvPlllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJGSU5SQVwiIHZhbHVlPVwiMFwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuRklOUkEgPT09IFwiMFwifSAvPk5vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnZlc3RtZW50T2JqZWN0aXZlXCI+SW52ZXN0bWVudCBPYmplY3RpdmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJpbnZlc3RtZW50T2JqZWN0aXZlXCIgdmFsdWU9XCJTUFwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuaW52ZXN0bWVudE9iamVjdGl2ZSA9PT0gXCJTUFwifSAvPlNhZmV0eSBvZiBQcmluY2lwYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiaW52ZXN0bWVudE9iamVjdGl2ZVwiIHZhbHVlPVwiTEdcIiBjaGVja2VkPXt0aGlzLnByb3BzLmludmVzdG1lbnRPYmplY3RpdmUgPT09IFwiTEdcIn0gLz5Mb25nLVRlcm0gR3Jvd3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImludmVzdG1lbnRPYmplY3RpdmVcIiB2YWx1ZT1cIklOXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5pbnZlc3RtZW50T2JqZWN0aXZlID09PSBcIklOXCJ9IC8+SW5jb21lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJpc2tQcm9maWxlXCI+UmlzayBQcm9maWxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJyaXNrUHJvZmlsZVwiIHZhbHVlPXt0aGlzLnByb3BzLnJpc2tQcm9maWxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIUlwiPkhpZ2hlciBSaXNrPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBR1wiPkFnZ3Jlc3NpdmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1BXCI+TW9kZXJhdGVseSBBZ2dyZXNzaXZlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNRFwiPk1vZGVyYXRlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNQ1wiPk1vZGVyYXRlbHkgQ29uc2VydmF0aXZlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDTlwiPkNvbnNlcnZhdGl2ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0FcIj5DYXV0aW91czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+IEZpbmFuY2lhbCBTaXR1YXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2VcIj5Bbm51YWwgSG91c2Vob2xkIEluY29tZSBSYW5nZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlXCIgdmFsdWU9XCIwMVwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2UgPT09IFwiMDFcIn0gLz5VbmRlciAkNTAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlXCIgdmFsdWU9XCIwMlwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2UgPT09IFwiMDJcIn0gLz4kNTAsMDAwIC0gJDEwMCwwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2VcIiB2YWx1ZT1cIjAzXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5hbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZSA9PT0gXCIwM1wifSAvPk92ZXIgJDEwMCwwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV0V29ydGhSYW5nZVwiPk5ldCBXb3J0aCBSYW5nZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm5ldFdvcnRoUmFuZ2VcIiB2YWx1ZT1cIjFcIiBjaGVja2VkPXt0aGlzLnByb3BzLm5ldFdvcnRoUmFuZ2UgPT09IFwiMVwifSAvPlVuZGVyICQ1MCwwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibmV0V29ydGhSYW5nZVwiIHZhbHVlPVwiMlwiIGNoZWNrZWQ9e3RoaXMucHJvcHMubmV0V29ydGhSYW5nZSA9PT0gXCIyXCJ9IC8+JDUwLDAwMCAtICQxMDAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm5ldFdvcnRoUmFuZ2VcIiB2YWx1ZT1cIjNcIiBjaGVja2VkPXt0aGlzLnByb3BzLm5ldFdvcnRoUmFuZ2UgPT09IFwiM1wifSAvPk92ZXIgJDEwMCwwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGlmZUluc3VyYW5jZVJhbmdlXCI+TGlmZSBJbnN1cmFuY2UgUmFuZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJsaWZlSW5zdXJhbmNlUmFuZ2VcIiB2YWx1ZT1cIjAxXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5saWZlSW5zdXJhbmNlUmFuZ2UgPT09IFwiMDFcIn0gLz5VbmRlciAkNTAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImxpZmVJbnN1cmFuY2VSYW5nZVwiIHZhbHVlPVwiMDJcIiBjaGVja2VkPXt0aGlzLnByb3BzLmxpZmVJbnN1cmFuY2VSYW5nZSA9PT0gXCIwMlwifSAvPiQ1MCwwMDAgLSAkMTAwLDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJsaWZlSW5zdXJhbmNlUmFuZ2VcIiB2YWx1ZT1cIjAzXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5saWZlSW5zdXJhbmNlUmFuZ2UgPT09IFwiMDNcIn0gLz5PdmVyICQxMDAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGF4QnJhY2tldFwiPlRheCBCcmFja2V0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIG5hbWU9XCJ0YXhCcmFja2V0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy50YXhCcmFja2V0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlcGVuZGVudHNOb1wiPkRlcGVuZGVudHM6ICBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxWYWxpY0lucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgbmFtZT1cImRlcGVuZGVudHNOb1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuZGVwZW5kZW50c05vfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFnZXNcIj5BZ2VzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIG5hbWU9XCJhZ2VzXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5hZ2VzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImhhbGYtcnVsZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdXJyZW50RW1wbG95ZXJcIj5DdXJyZW50IEVtcGxveWVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3VycmVudEVtcGxveWVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5jdXJyZW50RW1wbG95ZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib2NjdXBhdGlvblwiPk9jY3VwYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJvY2N1cGF0aW9uXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5vY2N1cGF0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJlbXBsb3ltZW50U3RhdHVzXCIgdmFsdWU9XCJSXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5lbXBsb3ltZW50U3RhdHVzID09PSBcIlJcIn0gLz5SZXRpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImVtcGxveW1lbnRTdGF0dXNcIiB2YWx1ZT1cIlVcIiBjaGVja2VkPXt0aGlzLnByb3BzLmVtcGxveW1lbnRTdGF0dXMgPT09IFwiVVwifSAvPlVuZW1wbG95ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1wbG95ZXJBZGRyZXNzXCI+RW1wbG95ZXIgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtcGxveWVyQWRkcmVzc1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuZW1wbG95ZXJBZGRyZXNzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtcGxveWVyQ2l0eVwiPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbXBsb3llckNpdHlcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmVtcGxveWVyQ2l0eX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbXBsb3llclN0YXRlXCI+U3RhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImVtcGxveWVyU3RhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmVtcGxveWVyU3RhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZXNMaXN0RG93bn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbXBsb3llclppcENvZGVcIj5aaXBDb2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1wbG95ZXJaaXBDb2RlXCIgbWF4LWxlbmd0aD1cIjVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmVtcGxveWVyWmlwQ29kZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1wbG95ZXJTYWxhcnlcIj5TYWxhcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cImVtcGxveWVyU2FsYXJ5XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbWluPVwiMFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuZW1wbG95ZXJTYWxhcnl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaGlyZURhdGVcIj5IaXJlIERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJoaXJlRGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaGlyZURhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhwZWN0ZWRBbm51aXR5RGF0ZVwiPkV4cGVjdGVkIEFubnVpdHkgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImV4cGVjdGVkQW5udWl0eURhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmV4cGVjdGVkQW5udWl0eURhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW52ZXN0b3JQcm9maWxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L0ludmVzdG9yUHJvZmlsZUNvbXBvbmVudC50c3giLCJpbXBvcnQgSW5jb21lU291cmNlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvSW5jb21lU291cmNlQ29tcG9uZW50JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHttYXBEaXNwYXRjaFRvUHJvcHN9IGZyb20gJy4vUGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lcic7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7ICAgICAgIFxyXG4gICAgaW5jb21lQWNjb3VudFNhbGFyeTogc3RhdGUuUHJvc3BlY3REZXRhaWwuaW5jb21lQWNjb3VudFNhbGFyeSxcclxuICAgIHNvY2lhbFNlY3VyaXR5OiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5zb2NpYWxTZWN1cml0eSxcclxuICAgIHBlbnNpb25CZW5lZml0czogc3RhdGUuUHJvc3BlY3REZXRhaWwucGVuc2lvbkJlbmVmaXRzLFxyXG4gICAgaW52ZXN0bWVudEluY29tZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuaW52ZXN0bWVudEluY29tZSxcclxuICAgIHJtZDogc3RhdGUuUHJvc3BlY3REZXRhaWwucm1kLFxyXG4gICAgb3RoZXI6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm90aGVyLFxyXG4gICAgZXhwZW5zZXNBbW91bnQ6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmV4cGVuc2VzQW1vdW50ICAgIFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IEluY29tZVNvdXJjZUNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluY29tZVNvdXJjZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvSW5jb21lU291cmNlQ29udGFpbmVyLnRzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGludGVyZmFjZSBJSW5jb21lU291cmNlUHJvcHMge1xyXG5pbmNvbWVBY2NvdW50U2FsYXJ5PzpzdHJpbmc7XHJcbnNvY2lhbFNlY3VyaXR5PzpzdHJpbmc7XHJcbnBlbnNpb25CZW5lZml0cz86IHN0cmluZztcclxuaW52ZXN0bWVudEluY29tZT86IHN0cmluZztcclxucm1kPzpzdHJpbmc7XHJcbm90aGVyPzpzdHJpbmc7XHJcbmV4cGVuc2VzQW1vdW50PzpzdHJpbmc7XHJcbm9uQ2hhbmdlOigpID0+IGFueTtcclxufVxyXG5jbGFzcyBJbmNvbWVTb3VyY2UgZXh0ZW5kcyBDb21wb25lbnQ8YW55LGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVVc2VySW5wdXQgPSB0aGlzLmhhbmRsZVVzZXJJbnB1dC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlVXNlcklucHV0KGUpIHtcclxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIG9uQ2hhbmdlKGUpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoPGRpdj48ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Bbm51YWwgSG91c2Vob2xkPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgSW5jb21lIEFjY291bnQgRnJvbTpcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbmNvbWVBY2NvdW50U2FsYXJ5XCI+U2FsYXJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJpbmNvbWVBY2NvdW50U2FsYXJ5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5pbmNvbWVBY2NvdW50U2FsYXJ5fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNvY2lhbFNlY3VyaXR5XCI+U29jaWFsIFNlY3VyaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJzb2NpYWxTZWN1cml0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuc29jaWFsU2VjdXJpdHl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGVuc2lvbkJlbmVmaXRzXCI+UGVuc2lvbiBCZW5lZml0czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGVuc2lvbkJlbmVmaXRzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5wZW5zaW9uQmVuZWZpdHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImludmVzdG1lbnRJbmNvbWVcIj5JbnZlc3RtZW50IEluY29tZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaW52ZXN0bWVudEluY29tZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaW52ZXN0bWVudEluY29tZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJybWRcIj5STUQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInJtZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMucm1kfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90aGVyXCI+T3RoZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm90aGVyXCIgbWluPVwiMFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMub3RoZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4cGVuc2VzQW1vdW50XCI+RXhwZW5zZXMgQW1vdW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJleHBlbnNlc0Ftb3VudFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuZXhwZW5zZXNBbW91bnR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmNvbWVTb3VyY2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvSW5jb21lU291cmNlQ29tcG9uZW50LnRzeCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNvbWJpbmVSZWR1Y2VycywgR2VuZXJpY1N0b3JlRW5oYW5jZXIsIFN0b3JlLCBTdG9yZUVuaGFuY2VyU3RvcmVDcmVhdG9yLCBSZWR1Y2Vyc01hcE9iamVjdCB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHsgcm91dGVyUmVkdWNlciwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIFN0b3JlTW9kdWxlIGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlLCByZWR1Y2VycyB9IGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCB7IFByb3NwZWN0TWlkZGxlV2FyZSwgZXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9hcGkvUHJvc3BlY3QvUHJvc3BlY3RBcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaGlzdG9yeTogSGlzdG9yeSwgaW5pdGlhbFN0YXRlPzogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cclxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XHJcbiAgICAvLyBJZiBkZXZUb29scyBpcyBpbnN0YWxsZWQsIGNvbm5lY3QgdG8gaXRcclxuICAgIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93SWZEZWZpbmVkICYmIHdpbmRvd0lmRGVmaW5lZC5kZXZUb29sc0V4dGVuc2lvbiBhcyAoKSA9PiBHZW5lcmljU3RvcmVFbmhhbmNlcjtcclxuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgZXJyb3JIYW5kbGVyLCBQcm9zcGVjdE1pZGRsZVdhcmUsIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSkpLFxyXG4gICAgICAgIGRldlRvb2xzRXh0ZW5zaW9uID8gZGV2VG9vbHNFeHRlbnNpb24oKSA6IDxTPihuZXh0OiBTdG9yZUVuaGFuY2VyU3RvcmVDcmVhdG9yPFM+KSA9PiBuZXh0XHJcbiAgICApKGNyZWF0ZVN0b3JlKTtcclxuXHJcbiAgICAvLyBDb21iaW5lIGFsbCByZWR1Y2VycyBhbmQgaW5zdGFudGlhdGUgdGhlIGFwcC13aWRlIHN0b3JlIGluc3RhbmNlXHJcbiAgICBjb25zdCBhbGxSZWR1Y2VycyA9IGJ1aWxkUm9vdFJlZHVjZXIocmVkdWNlcnMpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKGFsbFJlZHVjZXJzLCBpbml0aWFsU3RhdGUpIGFzIFN0b3JlPEFwcGxpY2F0aW9uU3RhdGU+O1xyXG5cclxuICAgIC8vIEVuYWJsZSBXZWJwYWNrIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgZm9yIHJlZHVjZXJzXHJcbiAgICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3N0b3JlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlPHR5cGVvZiBTdG9yZU1vZHVsZT4oJy4vc3RvcmUnKTtcclxuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoYnVpbGRSb290UmVkdWNlcihuZXh0Um9vdFJlZHVjZXIucmVkdWNlcnMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkUm9vdFJlZHVjZXIoYWxsUmVkdWNlcnM6IFJlZHVjZXJzTWFwT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gY29tYmluZVJlZHVjZXJzPEFwcGxpY2F0aW9uU3RhdGU+KE9iamVjdC5hc3NpZ24oe30sIGFsbFJlZHVjZXJzLCB7IHJvdXRpbmc6IHJvdXRlclJlZHVjZXIgfSkpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWd1cmVTdG9yZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDM3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTE0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy9pbXBvcnQgKiBhcyBXZWF0aGVyRm9yZWNhc3RzIGZyb20gJy4vV2VhdGhlckZvcmVjYXN0cyc7XHJcbi8vaW1wb3J0ICogYXMgQ291bnRlciBmcm9tICcuL0NvdW50ZXInO1xyXG5cclxuaW1wb3J0ICogYXMgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuaW1wb3J0ICogYXMgUHJvc3BlY3QgZnJvbSAnLi9Qcm9zcGVjdCc7XHJcbmltcG9ydCAqIGFzIFN0YXRlcyBmcm9tICcuL1N0YXRlcyc7XHJcbmltcG9ydCAqIGFzIFZhbGlkYXRpb25NZXNzYWdlIGZyb20gJy4vVmFsaWRhdGlvbk1lc3NhZ2UnO1xyXG5cclxuLy8vLyBUaGUgdG9wLWxldmVsIHN0YXRlIG9iamVjdFxyXG4vL2V4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25TdGF0ZSB7XHJcbi8vICAgIGNvdW50ZXI6IENvdW50ZXIuQ291bnRlclN0YXRlO1xyXG4vLyAgICB3ZWF0aGVyRm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RzLldlYXRoZXJGb3JlY2FzdHNTdGF0ZTtcclxuLy99XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcclxuICAgIFByb3NwZWN0RGV0YWlsOiBQcm9zcGVjdC5Qcm9zcGVjdFN0YXRlO1xyXG4gICAgaXNMb2FkaW5nOiBMb2FkZXIuTG9hZGVyU3RhdGU7XHJcbiAgICBzdGF0ZXM6IFN0YXRlcy5TdGF0ZXNTdGF0ZTtcclxuICAgIGVycm9yczogVmFsaWRhdGlvbk1lc3NhZ2UuVmFsaWRhdGlvTm1lc3NhZ2VTdGF0ZVtdO1xyXG4gICAgYWdlbnRDb2RlOiBQcm9zcGVjdC5BZ2VudENvZGVTdGF0ZTtcclxufVxyXG4vLyBXaGVuZXZlciBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCwgUmVkdXggd2lsbCB1cGRhdGUgZWFjaCB0b3AtbGV2ZWwgYXBwbGljYXRpb24gc3RhdGUgcHJvcGVydHkgdXNpbmdcclxuLy8gdGhlIHJlZHVjZXIgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgbmFtZXMgbWF0Y2ggZXhhY3RseSwgYW5kIHRoYXQgdGhlIHJlZHVjZXJcclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcclxuICAgIGlzTG9hZGluZzogTG9hZGVyLnJlZHVjZXIsXHJcbiAgICBzdGF0ZXM6IFN0YXRlcy5yZWR1Y2VyLFxyXG4gICAgUHJvc3BlY3REZXRhaWw6IFByb3NwZWN0LnJlZHVjZXIsXHJcbiAgICBlcnJvcnM6IFZhbGlkYXRpb25NZXNzYWdlLnJlZHVjZXIsXHJcbiAgICBhZ2VudENvZGU6IFByb3NwZWN0LmFnZW50Q29kZXJlZHVjZXJcclxufTtcclxuXHJcbi8vIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCBhcyBhIGhpbnQgb24gYWN0aW9uIGNyZWF0b3JzIHNvIHRoYXQgaXRzICdkaXNwYXRjaCcgYW5kICdnZXRTdGF0ZScgcGFyYW1zIGFyZVxyXG4vLyBjb3JyZWN0bHkgdHlwZWQgdG8gbWF0Y2ggeW91ciBzdG9yZS5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XHJcbiAgICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uVHlwZXMnXHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvTm1lc3NhZ2VTdGF0ZSB7XHJcbiAgICBlcnJvcnM6IEVycm9yTWVzc2FnZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFcnJvck1lc3NhZ2Uge1xyXG4gICAgZmllbGROYW1lOiBzdHJpbmc7XHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBBZGRFcnJvck1lc3NhZ2UgeyB0eXBlOiAnQUREX0VSUk9SX01FU1NBR0UnLCBmaWVsZE5hbWUsIGVycm9yTWVzc2FnZSB9XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBhZGRFcnJvck1lc3NhZ2U6IChmaWVsZE5hbWU6IHN0cmluZywgZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IDxBZGRFcnJvck1lc3NhZ2U+eyB0eXBlOiAnQUREX0VSUk9SX01FU1NBR0UnICxmaWVsZE5hbWUsIGVycm9yTWVzc2FnZX0sXHJcbiAgIFxyXG59O1xyXG50eXBlIEtub3duQWN0aW9uID0gQWRkRXJyb3JNZXNzYWdlXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxWYWxpZGF0aW9ObWVzc2FnZVN0YXRlW10+ID0gKHN0YXRlOiBWYWxpZGF0aW9ObWVzc2FnZVN0YXRlW10sIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgIGNhc2UgXCJBRERfRVJST1JfTUVTU0FHRVwiOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzRXhpc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdvYmogPSBzdGF0ZS5tYXAoKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZmllbGROYW1lID09PSBhY3Rpb24uZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IsIHsgZXJyb3JNZXNzYWdlOiBhY3Rpb24uZXJyb3JNZXNzYWdlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0V4aXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogYWN0aW9uLmZpZWxkTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogYWN0aW9uLmVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld29iajtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IGFjdGlvbi5maWVsZE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogYWN0aW9uLmVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IE9iamVjdC5hc3NpZ24oe30sbnVsbCk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9WYWxpZGF0aW9uTWVzc2FnZS50cyIsImltcG9ydCAqIGFzIFByb3NwZWN0QWN0aW9uIGZyb20gJy4uLy4uL2FjdGlvbnMvUHJvc3BlY3RBY3Rpb24nO1xyXG5pbXBvcnQgIEFwaVVybCAgZnJvbSAnLi4vYXBpVXJsLmRldic7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgYWdpbGVuZXR1cmwgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgKiBhcyBWYWxpZGF0aW9uTWVzc2FnZSBmcm9tICcuLi8uLi9hY3Rpb25zL1ZhbGlkYXRpb25NZXNzYWdlQWN0aW9uJztcclxuaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJztcclxuLy9pbXBvcnQgZXJyb3JoYW5kbGVyIGZyb20gJ2Vycm9yaGFuZGxlcic7XHJcbi8vaW1wb3J0IGNvbm5lY3QgZnJvbSAnY29ubmVjdCc7XHJcbmludGVyZmFjZSBQcm9zcGVjdHtcclxuRmlyc3ROYW1lOnN0cmluZztcclxuTGFzdE5hbWU6c3RyaW5nO1xyXG5Tc246c3RyaW5nO1xyXG5JZDpudW1iZXI7XHJcblxyXG59XHJcbmNvbnN0IGFkdmlzb3JVcmwgPSBBcGlVcmwuYWR2aXNvclVybDtcclxuY29uc3QgcGFydGljaXBhbnRVcmwgPSBBcGlVcmwucGFydGljaXBhbnRVcmw7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvc3BlY3RNaWRkbGVXYXJlID0gKHN0b3JlOmFueSkgPT4gKG5leHQ6YW55KSA9PiAoYWN0aW9uOmFueSkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuR0VUX1BST1NQRUNUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIG5leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQmVnaW4oKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChgJHtwYXJ0aWNpcGFudFVybH1wcm9zcGVjdC8ke2FjdGlvbi5pZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6YW55KSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9zcGVjdCA9IHt9IGFzIGFueTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkICYmIGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZmlyc3ROYW1lID0gZGF0YS5GaXJzdE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lmxhc3ROYW1lID0gZGF0YS5MYXN0TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3Quc3NuID0gZGF0YS5Tc247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuY2xpZW50UHJvc3BlY3RJZCA9IGRhdGEuSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLklkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG9tZUFkZHJlc3NTdHJlZXQxLCBob21lQWRkcmVzc1N0cmVldDIsIGhvbWVBZGRyZXNzU3RyZWV0MywgaG9tZUFkZHJlc3NaaXBDb2RlLCBob21lQWRkcmVzc1N0YXRlLCBob21lQWRkcmVzc0NpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYWlsaW5nQWRkcmVzc1N0cmVldDEsIG1haWxpbmdBZGRyZXNzU3RyZWV0MiwgbWFpbGluZ0FkZHJlc3NTdHJlZXQzLCBtYWlsaW5nQWRkcmVzc1ppcENvZGUsIG1haWxpbmdBZGRyZXNzU3RhdGUsIG1haWxpbmdBZGRyZXNzQ2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuQWRkcmVzc2VzICE9PSB1bmRlZmluZWQgJiYgZGF0YS5BZGRyZXNzZXMgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuQWRkcmVzc2VzW1wiJHZhbHVlc1wiXS5mb3JFYWNoKGZ1bmN0aW9uIChhZGRyZXNzOmFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGF0YS5BZGRyZXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoYWRkcmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzLkFkZHJlc3NUeXBlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzU3RyZWV0MSA9IGFkZHJlc3MuU3RyZWV0MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZUFkZHJlc3NTdHJlZXQyID0gYWRkcmVzcy5TdHJlZXQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lQWRkcmVzc1N0cmVldDMgPSBhZGRyZXNzLlN0cmVldDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzU3RhdGUgPSBhZGRyZXNzLlN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lQWRkcmVzc0NpdHkgPSBhZGRyZXNzLkNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaG9tZUFkZHJlc3NDb3VudHJ5ID0gYWRkcmVzcy5Db3VudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lQWRkcmVzc1ppcENvZGUgPSBhZGRyZXNzLlppcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoYWRkcmVzcy5BZGRyZXNzVHlwZSA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzc1N0cmVldDEgPSBhZGRyZXNzLlN0cmVldDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzU3RyZWV0MiA9IGFkZHJlc3MuU3RyZWV0MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3NTdHJlZXQzID0gYWRkcmVzcy5TdHJlZXQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzc1N0YXRlID0gYWRkcmVzcy5TdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3NDaXR5ID0gYWRkcmVzcy5DaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21haWxpbmdBZGRyZXNzQ291bnRyeSA9IGFkZHJlc3MuQ291bnRyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3NaaXBDb2RlID0gYWRkcmVzcy5aaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG9tZVBob25lTnVtYmVyOyBsZXQgd29ya1Bob25lTnVtYmVyOyBsZXQgb3RoZXJQaG9uZU51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuUGhvbmVOdW1iZXJzICE9PSBudWxsICYmIGRhdGEuUGhvbmVOdW1iZXJzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuUGhvbmVOdW1iZXJzW1wiJHZhbHVlc1wiXS5mb3JFYWNoKGZ1bmN0aW9uIChwaG9uZTphbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2RhdGEuUGhvbmVOdW1iZXJzLmZvckVhY2goKHBob25lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBob25lLlBob25lVHlwZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lUGhvbmVOdW1iZXIgPSBwaG9uZS5OdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBob25lLlBob25lVHlwZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrUGhvbmVOdW1iZXIgPSBwaG9uZS5OdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBob25lLlBob25lVHlwZSA9PT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlclBob25lTnVtYmVyID0gcGhvbmUuTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzUmVmZXJyYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuUmVmZXJyYWxEYXRlICE9PSBudWxsICYmIGRhdGEuUmVmZXJyYWxEYXRlICE9PSB1bmRlZmluZWQgJiYgbmV3IERhdGUoZGF0YS5SZWZlcnJhbERhdGUudG9TdHJpbmcoKSkuZ2V0RnVsbFllYXIoKSA+IDE5MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVmZXJyYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnRpdGxlID0gZGF0YS5UaXRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWlkZGxlSW5pdGlhbCA9IGRhdGEuTWlkZGxlSW5pdGlhbCAhPT0gbnVsbCA/IGRhdGEuTWlkZGxlSW5pdGlhbCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5kYXRlT2ZCaXJ0aCA9IGRhdGEuRGF0ZU9mQmlydGggIT09IG51bGwgJiYgZGF0YS5EYXRlT2ZCaXJ0aCAhPT0gdW5kZWZpbmVkID8gbmV3IERhdGUoZGF0YS5EYXRlT2ZCaXJ0aC50b1N0cmluZygpKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZ2VuZGVyID0gZGF0YS5HZW5kZXIgIT09IG51bGwgJiYgZGF0YS5HZW5kZXIgIT09IHVuZGVmaW5lZCA/IGRhdGEuR2VuZGVyLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QudXNDaXRpemVuID0gZGF0YS5Vc0NpdGl6ZW5GbGFnICE9PSBudWxsICYmIGRhdGEuVXNDaXRpemVuRmxhZyAhPT0gdW5kZWZpbmVkID8gZGF0YS5Vc0NpdGl6ZW5GbGFnLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWFyaXRhbFN0YXR1cyA9IGRhdGEuTWFyaXRhbFN0YXR1cyAhPT0gbnVsbCAmJiBkYXRhLk1hcml0YWxTdGF0dXMgIT09IHVuZGVmaW5lZCA/IGRhdGEuTWFyaXRhbFN0YXR1cy50b1N0cmluZygpIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhvbWVBZGRyZXNzTGluZTEgPSBob21lQWRkcmVzc1N0cmVldDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhvbWVBZGRyZXNzTGluZTIgPSBob21lQWRkcmVzc1N0cmVldDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhvbWVBZGRyZXNzTGluZTMgPSBob21lQWRkcmVzc1N0cmVldDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhvbWVBZGRyZXNzQ2l0eSA9IGhvbWVBZGRyZXNzQ2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaG9tZUFkZHJlc3NTdGF0ZSA9IGhvbWVBZGRyZXNzU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhvbWVBZGRyZXNzWmlwQ29kZSA9IGhvbWVBZGRyZXNzWmlwQ29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NMaW5lMSA9IG1haWxpbmdBZGRyZXNzU3RyZWV0MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NMaW5lMiA9IG1haWxpbmdBZGRyZXNzU3RyZWV0MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NMaW5lMyA9IG1haWxpbmdBZGRyZXNzU3RyZWV0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NDaXR5ID0gbWFpbGluZ0FkZHJlc3NDaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc1N0YXRlID0gbWFpbGluZ0FkZHJlc3NTdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NaaXBDb2RlID0gbWFpbGluZ0FkZHJlc3NaaXBDb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5ob21lUGhvbmUgPSBob21lUGhvbmVOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LndvcmtQaG9uZSA9IHdvcmtQaG9uZU51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3Qub3RoZXJQaG9uZSA9IG90aGVyUGhvbmVOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnJlZmVycmFsID0gaXNSZWZlcnJhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZW1haWxBZGRyZXNzID0gZGF0YS5FbWFpbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUgIT09IG51bGwgJiYgZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5wcmV2aW91c0Z1bmRzID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5JbnZlc3RtZW50RXhwZXJpZW5jZV9GbGFnICE9PSB1bmRlZmluZWQgJiYgZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5JbnZlc3RtZW50RXhwZXJpZW5jZV9GbGFnICE9PSBudWxsID8gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5JbnZlc3RtZW50RXhwZXJpZW5jZV9GbGFnLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LkZJTlJBID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5GaW5yYV9GbGFnICE9PSB1bmRlZmluZWQgJiYgZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5GaW5yYV9GbGFnICE9PSBudWxsID8gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5GaW5yYV9GbGFnLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmludmVzdG1lbnRPYmplY3RpdmUgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkludmVzdG1lbnRPYmplY3RpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5yaXNrUHJvZmlsZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuUmlza1Byb2ZpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5hbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuSG91c2Vob2xkSW5jb21lUmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5uZXRXb3J0aFJhbmdlID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5OZXRXb3J0aFJhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubGlmZUluc3VyYW5jZVJhbmdlID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5MaWZlSW5zdXJhbmNlUmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC50YXhCcmFja2V0ID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5UYXhCcmFja2V0TnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZGVwZW5kZW50c05vID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5EZXBlZGVudE51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmFnZXMgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkFnZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5jdXJyZW50RW1wbG95ZXIgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkN1cnJlbnRFbXBsb3llcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmVtcGxveW1lbnRTdGF0dXMgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkVtcGxveW1lbnRTdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5vY2N1cGF0aW9uID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5PY2N1cGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZW1wbG95ZXJBZGRyZXNzID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5FbXBsb3llckFkZHJlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5lbXBsb3llckNpdHkgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkVtcGxveWVyQ2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmVtcGxveWVyU3RhdGUgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkVtcGxveWVyU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5lbXBsb3llclppcENvZGUgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkVtcGxveWVyWmlwQ29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmVtcGxveWVyU2FsYXJ5ID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5TYWxhcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5oaXJlRGF0ZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuSGlyZURhdGUgIT09IG51bGwgJiYgZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5IaXJlRGF0ZSAhPT0gdW5kZWZpbmVkID8gbmV3IERhdGUoZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5IaXJlRGF0ZS50b1N0cmluZygpKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmV4cGVjdGVkQW5udWl0eURhdGUgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkV4cGVjdGVkQW5udWl0eURhdGUgIT09IG51bGwgJiYgZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5FeHBlY3RlZEFubnVpdHlEYXRlICE9PSB1bmRlZmluZWQgPyBuZXcgRGF0ZShkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkV4cGVjdGVkQW5udWl0eURhdGUudG9TdHJpbmcoKSkudG9JU09TdHJpbmcoKS5zdWJzdHIoMCwgMTApIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pc0ludmVzdG9yUHJvZmlsZU5ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaXNJbnZlc3RvclByb2ZpbGVOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLlByb3NwZWN0SW5jb21lU291cmNlICE9PSB1bmRlZmluZWQgJiYgZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaW5jb21lQWNjb3VudFNhbGFyeSA9IGRhdGEuUHJvc3BlY3RJbmNvbWVTb3VyY2UuU2FsYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3Quc29jaWFsU2VjdXJpdHkgPSBkYXRhLlByb3NwZWN0SW5jb21lU291cmNlLlNvY2lhbFNlY3VyaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QucGVuc2lvbkJlbmVmaXRzID0gZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZS5QZW5zaW9uQmVuZWZpdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pbnZlc3RtZW50SW5jb21lID0gZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZS5JbnZlc3RtZW50SW5jb21lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3Qucm1kID0gZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZS5STUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5vdGhlciA9IGRhdGEuUHJvc3BlY3RJbmNvbWVTb3VyY2UuT3RoZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5leHBlbnNlc0Ftb3VudCA9IGRhdGEuUHJvc3BlY3RJbmNvbWVTb3VyY2UuRXhwZW5zZXNBbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pc0luY29tZVNvdXJjZU5ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaXNJbmNvbWVTb3VyY2VOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoUHJvc3BlY3RBY3Rpb24uZmV0Y2hQcm9zcGVjdFN1Y2Nlc3MocHJvc3BlY3QpKVxyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQ29tcGxldGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KFZhbGlkYXRpb25NZXNzYWdlLkFkZEVycm9yTWVzc2FnZSgnJywgXCJVbmFibGUgdG8gZ2V0IHByb3NwZWN0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KFByb3NwZWN0QWN0aW9uLmZldGNoUHJvc3BlY3RGYWlsZWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChQcm9zcGVjdEFjdGlvbi5sb2FkZXJDb21wbGV0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2JyZWFrO1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuR0VUX1NUQVRFU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBuZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckJlZ2luKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goYCR7YWR2aXNvclVybH1hZHZpc29yL3N0YXRlc2ApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KFByb3NwZWN0QWN0aW9uLmZldGNoU3RhdGVzU3VjY2Vzcyhqc29uW1wiJHZhbHVlc1wiXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChQcm9zcGVjdEFjdGlvbi5sb2FkZXJDb21wbGV0ZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBzdGF0ZXMgZmFpbGVkJywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQ29tcGxldGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChWYWxpZGF0aW9uTWVzc2FnZS5BZGRFcnJvck1lc3NhZ2UoJycsIFwiVW5hYmxlIHRvIGdldCBzdGF0ZXNcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoUHJvc3BlY3RBY3Rpb24uZmV0Y2hTdGF0ZXNGYWlsZWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2JyZWFrO1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuVVBEQVRFX1BST1NQRUNUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBwcm9zcGVjdCA9IHN0YXRlLlByb3NwZWN0RGV0YWlsO1xyXG4gICAgICAgICAgICBuZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckJlZ2luKCkpO1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRGb3JtID0gdHJ1ZSBhcyBhbnk7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5lcnJvcnMuZm9yRWFjaChmdW5jdGlvbiAoZXJyb3IsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3JNZXNzYWdlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRGb3JtID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHZhbGlkRm9ybSk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZEZvcm0gIT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwbGFpblNTTiA9IHByb3NwZWN0LnNzbjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYWluU1NOKTtcclxuICAgICAgICAgICAgICAgIHBsYWluU1NOID0gcGxhaW5TU04uc3BsaXQoJy0nKS5qb2luKCcnKS5zcGxpdCgnXycpLmpvaW4oJycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZWZlcnJhbDtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9zcGVjdC5yZWZlcnJhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZmVycmFsID0gbmV3IERhdGUoKS50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGhvbWVBZGRyZXNzID0ge30gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgaG9tZUFkZHJlc3MuU3RyZWV0MSA9IHByb3NwZWN0LmhvbWVBZGRyZXNzTGluZTE7XHJcbiAgICAgICAgICAgICAgICBob21lQWRkcmVzcy5TdHJlZXQyID0gcHJvc3BlY3QuaG9tZUFkZHJlc3NMaW5lMjtcclxuICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzLlN0cmVldDMgPSBwcm9zcGVjdC5ob21lQWRkcmVzc0xpbmUzO1xyXG4gICAgICAgICAgICAgICAgaG9tZUFkZHJlc3MuQ2l0eSA9IHByb3NwZWN0LmhvbWVBZGRyZXNzQ2l0eTtcclxuICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzLlN0YXRlID0gcHJvc3BlY3QuaG9tZUFkZHJlc3NTdGF0ZTtcclxuICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzLlppcCA9IHByb3NwZWN0LmhvbWVBZGRyZXNzWmlwQ29kZTtcclxuICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzLkFkZHJlc3NUeXBlID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzID0gW10gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzcy5wdXNoKGhvbWVBZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgIHZhciBtYWlsaW5nQWRkcmVzcyA9IHt9IGFzIGFueTtcclxuICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzLlN0cmVldDEgPSBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0xpbmUxO1xyXG4gICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3MuU3RyZWV0MiA9IHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzTGluZTI7XHJcbiAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzcy5TdHJlZXQzID0gcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NMaW5lMztcclxuICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzLkNpdHkgPSBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0NpdHk7XHJcbiAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzcy5TdGF0ZSA9IHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzU3RhdGU7XHJcbiAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzcy5aaXAgPSBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc1ppcENvZGU7XHJcbiAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzcy5BZGRyZXNzVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzLnB1c2gobWFpbGluZ0FkZHJlc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwaG9uZU51bWJlcnMgPSBbXSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaG9tZVBob25lID0ge30gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgaG9tZVBob25lLk51bWJlciA9IHByb3NwZWN0LmhvbWVQaG9uZSAhPT0gdW5kZWZpbmVkID8gcHJvc3BlY3QuaG9tZVBob25lLnNwbGl0KCctJykuam9pbignJykuc3BsaXQoJygnKS5qb2luKCcnKS5zcGxpdCgnKScpLmpvaW4oJycpLnNwbGl0KCdfJykuam9pbignJykgOiAnJztcclxuICAgICAgICAgICAgICAgIGhvbWVQaG9uZS5QaG9uZVR5cGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXJzLnB1c2goaG9tZVBob25lKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgd29ya1Bob25lID0ge30gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgd29ya1Bob25lLk51bWJlciA9IHByb3NwZWN0LndvcmtQaG9uZSAhPT0gdW5kZWZpbmVkID8gcHJvc3BlY3Qud29ya1Bob25lLnNwbGl0KCctJykuam9pbignJykuc3BsaXQoJygnKS5qb2luKCcnKS5zcGxpdCgnKScpLmpvaW4oJycpLnNwbGl0KCdfJykuam9pbignJykgOiAnJztcclxuICAgICAgICAgICAgICAgIHdvcmtQaG9uZS5QaG9uZVR5cGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXJzLnB1c2god29ya1Bob25lKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgb3RoZXJQaG9uZSA9IHt9IGFzIGFueTtcclxuICAgICAgICAgICAgICAgIG90aGVyUGhvbmUuTnVtYmVyID0gcHJvc3BlY3Qub3RoZXJQaG9uZSAhPT0gdW5kZWZpbmVkID8gcHJvc3BlY3Qub3RoZXJQaG9uZS5zcGxpdCgnLScpLmpvaW4oJycpLnNwbGl0KCcoJykuam9pbignJykuc3BsaXQoJyknKS5qb2luKCcnKS5zcGxpdCgnXycpLmpvaW4oJycpIDogJyc7XHJcbiAgICAgICAgICAgICAgICBvdGhlclBob25lLlBob25lVHlwZSA9IDU7XHJcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcnMucHVzaChvdGhlclBob25lKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5jb21lU291cmNlID0ge30gIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGluY29tZVNvdXJjZS5Tb2NpYWxTZWN1cml0eSA9IHByb3NwZWN0LnNvY2lhbFNlY3VyaXR5O1xyXG4gICAgICAgICAgICAgICAgaW5jb21lU291cmNlLlNhbGFyeSA9IHByb3NwZWN0LmluY29tZUFjY291bnRTYWxhcnk7XHJcbiAgICAgICAgICAgICAgICBpbmNvbWVTb3VyY2UuUGVuc2lvbkJlbmVmaXRzID0gcHJvc3BlY3QucGVuc2lvbkJlbmVmaXRzO1xyXG4gICAgICAgICAgICAgICAgaW5jb21lU291cmNlLkludmVzdG1lbnRJbmNvbWUgPSBwcm9zcGVjdC5pbnZlc3RtZW50SW5jb21lO1xyXG4gICAgICAgICAgICAgICAgaW5jb21lU291cmNlLlJNRCA9IHByb3NwZWN0LnJtZDtcclxuICAgICAgICAgICAgICAgIGluY29tZVNvdXJjZS5PdGhlciA9IHByb3NwZWN0Lm90aGVyO1xyXG4gICAgICAgICAgICAgICAgaW5jb21lU291cmNlLkV4cGVuc2VzQW1vdW50ID0gcHJvc3BlY3QuZXhwZW5zZXNBbW91bnQ7XHJcbiAgICAgICAgICAgICAgICBpbmNvbWVTb3VyY2UuQ2xpZW50UHJvc3BlY3RJZCA9IHByb3NwZWN0LmNsaWVudFByb3NwZWN0SWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGludmVzdG9yUHJvZmlsZSA9IHt9IGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5JbnZlc3RtZW50RXhwZXJpZW5jZV9GbGFnID0gcHJvc3BlY3QucHJldmlvdXNGdW5kcztcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5GaW5yYV9GbGFnID0gcHJvc3BlY3QuRklOUkE7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuSW52ZXN0bWVudE9iamVjdGl2ZSA9IHByb3NwZWN0LmludmVzdG1lbnRPYmplY3RpdmU7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuUmlza1Byb2ZpbGUgPSBwcm9zcGVjdC5yaXNrUHJvZmlsZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5Ib3VzZWhvbGRJbmNvbWVSYW5nZSA9IHByb3NwZWN0LmFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLk5ldFdvcnRoUmFuZ2UgPSBwcm9zcGVjdC5uZXRXb3J0aFJhbmdlO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkxpZmVJbnN1cmFuY2VSYW5nZSA9IHByb3NwZWN0LmxpZmVJbnN1cmFuY2VSYW5nZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5UYXhCcmFja2V0TnVtYmVyID0gcHJvc3BlY3QudGF4QnJhY2tldDtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5EZXBlZGVudE51bWJlciA9IHByb3NwZWN0LmRlcGVuZGVudHNObztcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5BZ2VzID0gcHJvc3BlY3QuYWdlcztcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5DdXJyZW50RW1wbG95ZXIgPSBwcm9zcGVjdC5jdXJyZW50RW1wbG95ZXI7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRW1wbG95bWVudFN0YXR1cyA9IHByb3NwZWN0LmVtcGxveW1lbnRTdGF0dXM7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuT2NjdXBhdGlvbiA9IHByb3NwZWN0Lm9jY3VwYXRpb247XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRW1wbG95ZXJBZGRyZXNzID0gcHJvc3BlY3QuZW1wbG95ZXJBZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkVtcGxveWVyQ2l0eSA9IHByb3NwZWN0LmVtcGxveWVyQ2l0eTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5FbXBsb3llclN0YXRlID0gcHJvc3BlY3QuZW1wbG95ZXJTdGF0ZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5FbXBsb3llclppcENvZGUgPSBwcm9zcGVjdC5lbXBsb3llclppcENvZGU7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuSGlyZURhdGUgPSBwcm9zcGVjdC5oaXJlRGF0ZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5FeHBlY3RlZEFubnVpdHlEYXRlID0gcHJvc3BlY3QuZXhwZWN0ZWRBbm51aXR5RGF0ZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5TYWxhcnkgPSBwcm9zcGVjdC5lbXBsb3llclNhbGFyeTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5DbGllbnRJZCA9IHByb3NwZWN0LmNsaWVudFByb3NwZWN0SWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb3NwZWN0RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBJZDogcHJvc3BlY3QuY2xpZW50UHJvc3BlY3RJZCwgRmlyc3ROYW1lOiBwcm9zcGVjdC5maXJzdE5hbWUsIFRpdGxlOiBwcm9zcGVjdC50aXRsZSwgTWlkZGxlSW5pdGlhbDogcHJvc3BlY3QubWlkZGxlSW5pdGlhbCxcclxuICAgICAgICAgICAgICAgICAgICBMYXN0TmFtZTogcHJvc3BlY3QubGFzdE5hbWUsIFNzbjogcGxhaW5TU04sIERhdGVPZkJpcnRoOiBwcm9zcGVjdC5kYXRlT2ZCaXJ0aCwgTWFyaXRhbFN0YXR1czogcHJvc3BlY3QubWFyaXRhbFN0YXR1cywgUmVmZXJyYWxEYXRlOiByZWZlcnJhbCwgQWRkcmVzc2VzOiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIFBob25lTnVtYmVyczogcGhvbmVOdW1iZXJzLCBHZW5kZXI6IHByb3NwZWN0LmdlbmRlciwgRW1haWw6IHByb3NwZWN0LmVtYWlsQWRkcmVzcywgUHJvc3BlY3RJbmNvbWVTb3VyY2U6IGluY29tZVNvdXJjZSxcclxuICAgICAgICAgICAgICAgICAgICBQcm9zcGVjdEludmVzdG9yUHJvZmlsZTogaW52ZXN0b3JQcm9maWxlLCBVc0NpdGl6ZW5GbGFnOiBwcm9zcGVjdC51c0NpdGl6ZW5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaChgJHtwYXJ0aWNpcGFudFVybH1wcm9zcGVjdC91cGRhdGVgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvc3BlY3REYXRhKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQ29tcGxldGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLmxvY2F0aW9uID0gYWdpbGVuZXR1cmwgKyBcIi9EYXNoYm9hcmQvQWR2aXNvci9DbGllbnRQcm9zcGVjdExpc3RpbmcuYXNweD9hZ2VudElkPTAzNDk5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoVmFsaWRhdGlvbk1lc3NhZ2UuQWRkRXJyb3JNZXNzYWdlKCcnLCBcIlVuYWJsZSB0byB1cGRhdGUgcHJvc3BlY3RcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckNvbXBsZXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckNvbXBsZXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgbmV4dChWYWxpZGF0aW9uTWVzc2FnZS5BZGRFcnJvck1lc3NhZ2UoJycsIFwiVW5hYmxlIHRvIHVwZGF0ZSBwcm9zcGVjdFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgICAgICAgICBuZXh0KGFjdGlvbik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBlcnJvckhhbmRsZXIgPSBzdGF0ZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBuZXh0KGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjYXVnaHRcIik7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwaS9Qcm9zcGVjdC9Qcm9zcGVjdEFwaS50cyIsImNsYXNzIEFwaVVybHtcclxuICAgIHN0YXRpYyBwYXJ0aWNpcGFudFVybCA9J2h0dHBzOi8vZGV2LnZhbGljLmNvbS9yZWFjdC9wYXJ0aWNpcGFudHNlcnZpY2UvYXBpLyc7XHJcbiAgICBzdGF0aWMgYWR2aXNvclVybCA9J2h0dHBzOi8vZGV2LnZhbGljLmNvbS9TZXJ2aWNlcy9BZHZpc29yL2FwaS8nO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwaVVybDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBpL2FwaVVybC5kZXYudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==