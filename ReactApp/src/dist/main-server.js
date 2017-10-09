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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ProspectComponent_PersonalInformationComponent__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utility_Utility__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_ProspectAction__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_ValidationMessageAction__ = __webpack_require__(13);






var mapDispatchToProps = function (dispatch) { return ({
    valicInputChange: function (e) {
        var name = e.target.name;
        var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        var inputField = e.target;
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions_ProspectAction__["a" /* onInputChange */])(name, value));
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
        dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions_ProspectAction__["a" /* onInputChange */])(name, value));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_input_mask__ = __webpack_require__(26);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddErrorMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(7);

var AddErrorMessage = function (fieldName, errorMessage) { return ({
    type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["a" /* ADD_VALIDATION_ERROR_MESSAGE */],
    fieldName: fieldName,
    errorMessage: errorMessage
}); };


/***/ }),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utility_Utility__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PersonalInformationContainer__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__InvestorProfileContainer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__IncomeSourceContainer__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_ValidationMessageAction__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ProspectEditContainer_css__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ProspectEditContainer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__ProspectEditContainer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_Prospect__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_States__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store_Loader__ = __webpack_require__(10);
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
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__shared_ValicValidationMessageComponent_ValicValidationMessageComponent__["a" /* default */], { formErrors: formErrors, className: "form-errors" }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", null,
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__["b" /* TabContainer */], null,
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__["a" /* Tab */], { name: "Personal Information", isDefaultTab: true },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__PersonalInformationContainer__["a" /* PersonalInformationContainer */], null)),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__["a" /* Tab */], { name: "Investor Profile" },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__InvestorProfileContainer__["a" /* InvestorProfileContainer */], null)),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__["a" /* Tab */], { name: "Income Source" },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__IncomeSourceContainer__["a" /* IncomeSourceContainer */], null))),
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
            Object(__WEBPACK_IMPORTED_MODULE_6__shared_utility_Utility__["b" /* validateFormField */])(inputField);
            if (inputField.isValid === false || inputField.isFormatValid === false) {
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_11__actions_ValidationMessageAction__["a" /* AddErrorMessage */])(inputField.name, inputField.errorMessage));
                __WEBPACK_IMPORTED_MODULE_4_jquery___default()(inputField).parent().addClass('has-error has-feedback');
            }
            else {
                dispatch(Object(__WEBPACK_IMPORTED_MODULE_11__actions_ValidationMessageAction__["a" /* AddErrorMessage */])(inputField.name, ''));
                __WEBPACK_IMPORTED_MODULE_4_jquery___default()(inputField).parent().removeClass('has-error has-feedback');
            }
        }
        dispatch(__WEBPACK_IMPORTED_MODULE_13__store_Prospect__["a" /* actionCreators */].updateProspectRequest());
    },
    cancelProspect: function (e) {
        if (window.confirm('Are you sure want to cancel?')) {
            document.location = __WEBPACK_IMPORTED_MODULE_10__constants__["a" /* agileneturl */] + "Dashboard/Advisor/ClientProspectListing.aspx?agentId=03499";
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _parseMask = __webpack_require__(27);

var _parseMask2 = _interopRequireDefault(_parseMask);

var _environment = __webpack_require__(29);

var _string = __webpack_require__(30);

var _defer = __webpack_require__(31);

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
/* 27 */
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

var _constants = __webpack_require__(28);

module.exports = exports['default'];

/***/ }),
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchProspectRequest */
/* unused harmony export fetchProspectFailed */
/* unused harmony export fetchProspectSuccess */
/* unused harmony export fetchStatesRequest */
/* unused harmony export fetchStatesFailed */
/* unused harmony export fetchStatesSuccess */
/* unused harmony export updateProspectRequest */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onInputChange; });
/* unused harmony export loaderBegin */
/* unused harmony export setAgentCode */
/* unused harmony export loaderComplete */
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestorProfileContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonalInformationContainer__ = __webpack_require__(6);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Prospect__ = __webpack_require__(8);
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
    return state || Object.assign({}, null);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_ActionTypes__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_Loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_validationMessage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_Prospect__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_States__ = __webpack_require__(9);
//import * as ProspectAction from '../../actions/ProspectAction';



//import * as ValidationMessage from '../../actions/ValidationMessageAction';





var advisorUrl = __WEBPACK_IMPORTED_MODULE_0__apiUrl_dev__["a" /* default */].advisorUrl;
var participantUrl = __WEBPACK_IMPORTED_MODULE_0__apiUrl_dev__["a" /* default */].participantUrl;
var ProspectMiddleWare = function (store) { return function (next) { return function (action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_3__constants_ActionTypes__["c" /* GET_PROSPECT_REQUEST */]:
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
        case __WEBPACK_IMPORTED_MODULE_3__constants_ActionTypes__["f" /* GET_STATES_REQUEST */]:
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
        case __WEBPACK_IMPORTED_MODULE_3__constants_ActionTypes__["l" /* UPDATE_PROSPECT_REQUEST */]:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmU0ZTg3MmQxYjM2NDc3MDdiNWQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC91dGlsaXR5L1V0aWxpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvUGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL0FjdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9Qcm9zcGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvU3RhdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvVmFsaWNJbnB1dENvbXBvbmVudC9WYWxpY0lucHV0Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9WYWxpZGF0aW9uTWVzc2FnZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9Qcm9zcGVjdEVkaXRDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvVGFiQ29udGFpbmVyQ29tcG9uZW50L1RhYkNvbnRhaW5lckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9UYWJDb250YWluZXJDb21wb25lbnQvVGFiQ29udGFpbmVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1ZhbGljVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQvVmFsaWNWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvUGVyc29uYWxJbmZvcm1hdGlvbkNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2xpYi91dGlscy9wYXJzZU1hc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9saWIvdXRpbHMvZW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9saWIvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvUHJvc3BlY3RBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvSW52ZXN0b3JQcm9maWxlQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L0ludmVzdG9yUHJvZmlsZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvSW5jb21lU291cmNlQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L0luY29tZVNvdXJjZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvUHJvc3BlY3RFZGl0Q29udGFpbmVyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL1ZhbGlkYXRpb25NZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvUHJvc3BlY3QvUHJvc3BlY3RBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hcGlVcmwuZGV2LnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3ZhbGlkYXRpb25NZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSxxQzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQXVCO0FBQ3ZCLElBQU0sWUFBWSxHQUFHLFVBQUMsS0FBUztJQUMzQixJQUFJLE9BQU8s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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQSxPQUFPLEVBQUUsVUFBVSxpREFBaUQ7QUFDcEU7QUFDQTs7QUFFQTtBQUNBLG9DOzs7Ozs7O0FDemhCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9DOzs7Ozs7O0FDM0RBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvRDs7Ozs7OztBQ1hBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNyQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFF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LEdBQUcsQ0FBQyxVQUFDLEtBQVU7b0JBQzlCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLFNBQU8sR0FBRyxJQUFJLENBQUM7d0JBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztvQkFDM0UsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDWCxNQUFNLENBQ0MsS0FBSzt3QkFDUjs0QkFDSSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7NEJBQzNCLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWTt5QkFDcEM7dUJBQUM7Z0JBQ1YsQ0FBQztnQkFDRCxJQUFJLENBQUMsQ0FBQztvQkFDRixNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNsQixDQUFDO1lBQ0wsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLE1BQU0sQ0FDQyxLQUFLO29CQUNSO3dCQUNJLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUzt3QkFDM0IsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZO3FCQUNwQzttQkFBQztZQUNWLENBQUM7SUFDVCxDQUFDO0lBRUQsc0dBQXNHO0lBQ3RHLG1EQUFtRDtJQUNuRCxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImRpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZlNGU4NzJkMWIzNjQ3NzA3YjVkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoODIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5jb25zdCBpc0ZpZWxkVmFsaWQgPSAoaW5wdXQ6YW55KSA9PiB7XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKCdyZXF1aXJlZCcpICE9PSBudWxsICYmIGlucHV0LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxufVxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVGb3JtRmllbGQgPSAoaW5wdXRGaWVsZDogYW55KSA9PiB7XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgICBpc1ZhbGlkID0gaXNGaWVsZFZhbGlkKGlucHV0RmllbGQpO1xyXG4gICAgaW5wdXRGaWVsZC5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgIGlmIChpc1ZhbGlkID09PSBmYWxzZSkge1xyXG4gICAgICAgIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gaW5wdXRGaWVsZC5uYW1lICsgXCIgaXMgcmVxdWlyZWRcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh2YWxpZGF0ZUZvcm1hdChpbnB1dEZpZWxkKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSBpbnB1dEZpZWxkLm5hbWUgKyBcIiBpcyBpbnZhbGlkXCI7XHJcbiAgICAgICAgICAgIGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLypcclxuY29uc3QgdmFsaWRhdGVBbGxGaWVsZCA9IChlKSA9PiB7XHJcbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5wdXRzLmxlbmd0aDsgKytpbmRleCkge1xyXG4gICAgICAgIHZhbGlkYXRlRm9ybUZpZWxkKGlucHV0c1tpbmRleF0pO1xyXG4gICAgfVxyXG59Ki9cclxuY29uc3QgdmFsaWRhdGVGb3JtYXQgPSAoaW5wdXQ6YW55KSA9PiB7XHJcbiAgICBsZXQgaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcbiAgICBsZXQgZm9ybWF0ID0gXCJcIjtcclxuICAgIGlmIChpbnB1dCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09IFwiZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgIC8vZm9ybWF0ID0vXigwWzEtOV18MVswLTJdKVxcLygwWzEtOV18MVxcZHwyXFxkfDNbMDFdKVxcLygxOXwyMClcXGR7Mn0kLztcclxuICAgICAgICAgICAgaWYgKGlucHV0LnZhbGlkaXR5ICE9PSB1bmRlZmluZWQgJiYgKGlucHV0LnZhbGlkaXR5LmJhZElucHV0ID09PSB0cnVlIHx8IGlucHV0LnZhbGlkaXR5LnZhbGlkID09PSBmYWxzZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJChpbnB1dCkuYXR0cignZGF0YS1kYXRlQmlydGgnKSAhPT0gdW5kZWZpbmVkICYmIGlucHV0LnZhbHVlICE9PSBcIlwiICYmIGlucHV0LnZhbHVlQXNEYXRlID49IG5ldyBEYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIgJiYgKGlucHV0LnZhbHVlQXNEYXRlLmdldEZ1bGxZZWFyKCkgPj0gMjA5OSB8fCBpbnB1dC52YWx1ZUFzRGF0ZS5nZXRGdWxsWWVhcigpIDw9IDE5MDApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiICYmIGZvcm1hdCAhPT0gXCJcIiAmJiAoZm9ybWF0IGFzIGFueSkudGVzdChpbnB1dC52YWx1ZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlzRm9ybWF0VmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNGb3JtYXRWYWxpZDtcclxufVxyXG5leHBvcnQgY29uc3QgZXJyb3JDbGFzcyA9IChlcnJvcnM6IGFueSwgZmllbGROYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChlcnJvcnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSAmJiBlcnJvci5lcnJvck1lc3NhZ2UgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnaGFzLWVycm9yIGhhcy1mZWVkYmFjayc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvdXRpbGl0eS9VdGlsaXR5LnRzIiwiICAgIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQZXJzb25hbEluZm9ybWF0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvUGVyc29uYWxJbmZvcm1hdGlvbkNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHZhbGlkYXRlRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxpdHkvVXRpbGl0eSc7XHJcbmltcG9ydCB7IG9uSW5wdXRDaGFuZ2UgYXMgb25DaGFuZ2UgfSBmcm9tICcuLi8uLi9hY3Rpb25zL1Byb3NwZWN0QWN0aW9uJztcclxuaW1wb3J0IHsgQWRkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9WYWxpZGF0aW9uTWVzc2FnZUFjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgdmFsaWNJbnB1dENoYW5nZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gZS50YXJnZXQuY2hlY2tlZCA6IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGxldCBpbnB1dEZpZWxkID0gZS50YXJnZXQ7XHJcbiAgICAgICAgZGlzcGF0Y2gob25DaGFuZ2UobmFtZSwgdmFsdWUpKTtcclxuICAgICAgICBpZiAoaW5wdXRGaWVsZC5pc1ZhbGlkID09PSBmYWxzZSB8fCBpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKEFkZEVycm9yTWVzc2FnZShuYW1lLCBpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAkKGlucHV0RmllbGQpLnBhcmVudCgpLmFkZENsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChBZGRFcnJvck1lc3NhZ2UobmFtZSwgJycpKTtcclxuICAgICAgICAgICAgJChpbnB1dEZpZWxkKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yIGhhcy1mZWVkYmFjaycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyA/IGUudGFyZ2V0LmNoZWNrZWQgOiBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGRpc3BhdGNoKG9uQ2hhbmdlKG5hbWUsIHZhbHVlKSk7XHJcbiAgICAgICAgdmFsaWRhdGVGb3JtRmllbGQoaW5wdXRGaWVsZCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dEZpZWxkLmlzVmFsaWQgPT09IGZhbHNlIHx8IGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goQWRkRXJyb3JNZXNzYWdlKG5hbWUsIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICQoaW5wdXRGaWVsZCkucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKEFkZEVycm9yTWVzc2FnZShuYW1lLCAnJykpO1xyXG4gICAgICAgICAgICAkKGlucHV0RmllbGQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59KVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBzc246IHN0YXRlLlByb3NwZWN0RGV0YWlsLnNzbixcclxuICAgIHRpdGxlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC50aXRsZSxcclxuICAgIGZpcnN0TmFtZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmxhc3ROYW1lLFxyXG4gICAgbWlkZGxlSW5pdGlhbDogc3RhdGUuUHJvc3BlY3REZXRhaWwubWlkZGxlSW5pdGlhbCxcclxuICAgIGRhdGVPZkJpcnRoOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5kYXRlT2ZCaXJ0aCxcclxuICAgIGdlbmRlcjogc3RhdGUuUHJvc3BlY3REZXRhaWwuZ2VuZGVyLFxyXG4gICAgdXNDaXRpemVuOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC51c0NpdGl6ZW4sXHJcbiAgICBtYXJpdGFsU3RhdHVzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5tYXJpdGFsU3RhdHVzLFxyXG4gICAgaG9tZUFkZHJlc3NMaW5lMTogc3RhdGUuUHJvc3BlY3REZXRhaWwuaG9tZUFkZHJlc3NMaW5lMSxcclxuICAgIGhvbWVBZGRyZXNzTGluZTI6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmhvbWVBZGRyZXNzTGluZTIsXHJcbiAgICBob21lQWRkcmVzc0xpbmUzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lQWRkcmVzc0xpbmUzLFxyXG4gICAgaG9tZUFkZHJlc3NDaXR5OiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lQWRkcmVzc0NpdHksXHJcbiAgICBob21lQWRkcmVzc1N0YXRlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lQWRkcmVzc1N0YXRlLFxyXG4gICAgaG9tZUFkZHJlc3NaaXBDb2RlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lQWRkcmVzc1ppcENvZGUsXHJcbiAgICBtYWlsaW5nQWRkcmVzc0xpbmUxOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5tYWlsaW5nQWRkcmVzc0xpbmUxLFxyXG4gICAgbWFpbGluZ0FkZHJlc3NMaW5lMjogc3RhdGUuUHJvc3BlY3REZXRhaWwubWFpbGluZ0FkZHJlc3NMaW5lMixcclxuICAgIG1haWxpbmdBZGRyZXNzTGluZTM6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1haWxpbmdBZGRyZXNzTGluZTMsXHJcbiAgICBtYWlsaW5nQWRkcmVzc0NpdHk6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1haWxpbmdBZGRyZXNzQ2l0eSxcclxuICAgIG1haWxpbmdBZGRyZXNzU3RhdGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1haWxpbmdBZGRyZXNzU3RhdGUsXHJcbiAgICBtYWlsaW5nQWRkcmVzc1ppcENvZGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1haWxpbmdBZGRyZXNzWmlwQ29kZSxcclxuICAgIGhvbWVQaG9uZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuaG9tZVBob25lLFxyXG4gICAgd29ya1Bob25lOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC53b3JrUGhvbmUsXHJcbiAgICBvdGhlclBob25lOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5vdGhlclBob25lLFxyXG4gICAgcmVmZXJyYWw6IHN0YXRlLlByb3NwZWN0RGV0YWlsLnJlZmVycmFsLFxyXG4gICAgZW1haWxBZGRyZXNzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5lbWFpbEFkZHJlc3MsXHJcbiAgICBzdGF0ZXM6IHN0YXRlLnN0YXRlc1xyXG59KTtcclxuZXhwb3J0IGNvbnN0IFBlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQZXJzb25hbEluZm9ybWF0aW9uKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvUGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lci50cyIsImV4cG9ydCBjb25zdCBHRVRfUFJPU1BFQ1RfUkVRVUVTVCA9ICdHRVRfUFJPU1BFQ1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPU1BFQ1RfRkFJTEVEID0gJ0dFVF9QUk9TUEVDVF9GQUlMRUQnO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST1NQRUNUX1NVQ0NFU1MgPSAnR0VUX1BST1NQRUNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9TUEVDVF9SRVFVRVNUID0gJ1VQREFURV9QUk9TUEVDVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9TUEVDVF9GQUlMRUQgPSAnVVBEQVRFX1BST1NQRUNUX0ZBSUxFRCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPU1BFQ1RfU1VDQ0VTUyA9ICdVUERBVEVfUFJPU1BFQ1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUFJPU1BFQ1QgPSAnQUREX1BST1NQRUNUJztcclxuLy9leHBvcnQgY29uc3QgR0VUX1NUQVRFUyA9J0dFVF9TVEFURVMnO1xyXG5leHBvcnQgY29uc3QgR0VUX1NUQVRFU19SRVFVRVNUID0nR0VUX1NUQVRFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9TVEFURVNfRkFJTEVEID0nR0VUX1NUQVRFU19GQUlMRUQnO1xyXG5leHBvcnQgY29uc3QgR0VUX1NUQVRFU19TVUNDRVNTID0nR0VUX1NUQVRFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE9OX0lOUFVUX0NIQU5HRSA9J09OX0lOUFVUX0NIQU5HRSc7XHJcbmV4cG9ydCBjb25zdCBBRERfVkFMSURBVElPTl9FUlJPUl9NRVNTQUdFID0gJ0FERF9FUlJPUl9NRVNTQUdFJztcclxuZXhwb3J0IGNvbnN0IExPQURFUl9CRUdJTiA9J0xPQURFUl9TVEFSVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FERVJfQ09NUExFVEUgPSdMT0FERVJfRU5EJztcclxuZXhwb3J0IGNvbnN0IFNFVF9BR0VOVENPREUgPSdTRVRfQUdFTlRDT0RFJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uc3RhbnRzL0FjdGlvblR5cGVzLnRzIiwiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzJ1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvc3BlY3RTdGF0ZSB7XHJcbiAgICBQcm9zcGVjdERldGFpbDogUHJvc3BlY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvc3BlY3Qge1xyXG4gICAgZmlyc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU/OiBzdHJpbmc7XHJcbiAgICBzc24/OiBzdHJpbmc7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIG1pZGRsZUluaXRpYWw/OiBzdHJpbmc7XHJcbiAgICBkYXRlT2ZCaXJ0aD86IERhdGU7XHJcbiAgICBnZW5kZXI/OiBzdHJpbmc7XHJcbiAgICB1c0NpdGl6ZW4/OiBzdHJpbmc7XHJcbiAgICBtYXJpdGFsU3RhdHVzPzogc3RyaW5nO1xyXG4gICAgaG9tZUFkZHJlc3NMaW5lMT86IHN0cmluZztcclxuICAgIGhvbWVBZGRyZXNzTGluZTI/OiBzdHJpbmc7XHJcbiAgICBob21lQWRkcmVzc0xpbmUzPzogc3RyaW5nO1xyXG4gICAgaG9tZUFkZHJlc3NDaXR5Pzogc3RyaW5nO1xyXG4gICAgaG9tZUFkZHJlc3NTdGF0ZT86IHN0cmluZztcclxuICAgIGhvbWVBZGRyZXNzWmlwQ29kZT86IHN0cmluZztcclxuICAgIG1haWxpbmdBZGRyZXNzTGluZTE/OiBzdHJpbmc7XHJcbiAgICBtYWlsaW5nQWRkcmVzc0xpbmUyPzogc3RyaW5nO1xyXG4gICAgbWFpbGluZ0FkZHJlc3NMaW5lMz86IHN0cmluZztcclxuICAgIG1haWxpbmdBZGRyZXNzQ2l0eT86IHN0cmluZztcclxuICAgIG1haWxpbmdBZGRyZXNzU3RhdGU/OiBzdHJpbmc7XHJcbiAgICBtYWlsaW5nQWRkcmVzc1ppcENvZGU/OiBzdHJpbmc7XHJcbiAgICBob21lUGhvbmU/OiBzdHJpbmc7XHJcbiAgICB3b3JrUGhvbmU/OiBzdHJpbmc7XHJcbiAgICBvdGhlclBob25lPzogc3RyaW5nO1xyXG4gICAgcmVmZXJyYWw/OiBib29sZWFuO1xyXG4gICAgZW1haWxBZGRyZXNzPzogc3RyaW5nO1xyXG4gICAgcHJldmlvdXNGdW5kcz86IHN0cmluZztcclxuICAgIEZJTlJBPzogc3RyaW5nO1xyXG4gICAgaW52ZXN0bWVudE9iamVjdGl2ZT86IHN0cmluZztcclxuICAgIHJpc2tQcm9maWxlPzogc3RyaW5nO1xyXG4gICAgYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2U/OiBzdHJpbmc7XHJcbiAgICBuZXRXb3J0aFJhbmdlPzogc3RyaW5nO1xyXG4gICAgbGlmZUluc3VyYW5jZVJhbmdlPzogc3RyaW5nO1xyXG4gICAgdGF4QnJhY2tldD86IHN0cmluZztcclxuICAgIGRlcGVuZGVudHNObz86IHN0cmluZztcclxuICAgIGFnZXM/OiBzdHJpbmc7XHJcbiAgICBjdXJyZW50RW1wbG95ZXI/OiBzdHJpbmc7XHJcbiAgICBlbXBsb3ltZW50U3RhdHVzPzogc3RyaW5nO1xyXG4gICAgb2NjdXBhdGlvbj86IHN0cmluZztcclxuICAgIGVtcGxveWVyQWRkcmVzcz86IHN0cmluZztcclxuICAgIGVtcGxveWVyQ2l0eT86IHN0cmluZztcclxuICAgIGVtcGxveWVyU3RhdGU/OiBzdHJpbmc7XHJcbiAgICBlbXBsb3llclppcENvZGU/OiBzdHJpbmc7XHJcbiAgICBlbXBsb3llclNhbGFyeT86IHN0cmluZztcclxuICAgIGhpcmVEYXRlPzogRGF0ZTtcclxuICAgIGV4cGVjdGVkQW5udWl0eURhdGU/OiBEYXRlO1xyXG4gICAgaW5jb21lQWNjb3VudFNhbGFyeT86IHN0cmluZztcclxuICAgIHNvY2lhbFNlY3VyaXR5Pzogc3RyaW5nO1xyXG4gICAgcGVuc2lvbkJlbmVmaXRzPzogc3RyaW5nO1xyXG4gICAgaW52ZXN0bWVudEluY29tZT86IHN0cmluZztcclxuICAgIHJtZD86IHN0cmluZztcclxuICAgIG90aGVyPzogc3RyaW5nO1xyXG4gICAgZXhwZW5zZXNBbW91bnQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcclxuICAgIENvZGU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgRmV0Y2hQcm9zcGVjdFJlcXVlc3QgeyB0eXBlOiAnR0VUX1BST1NQRUNUX1JFUVVFU1QnLCBpZDogc3RyaW5nIH1cclxuaW50ZXJmYWNlIEZldGNoUHJvc3BlY3RTdWNjZXNzIHsgdHlwZTogJ0dFVF9QUk9TUEVDVCcsIHByb3NwZWN0OmFueSB9XHJcbmludGVyZmFjZSBGZXRjaFByb3NwZWN0RmFpbGVkIHsgdHlwZTogJ0dFVF9QUk9TUEVDVF9GQUlMRUQnIH1cclxuaW50ZXJmYWNlIFVwZGF0ZVByb3NwZWN0UmVxdWVzdCB7IHR5cGU6ICdVUERBVEVfUFJPU1BFQ1RfUkVRVUVTVCcgfVxyXG5pbnRlcmZhY2UgT25JbnB1dENoYW5nZSB7IHR5cGU6ICdPTl9JTlBVVF9DSEFOR0UnICwgbmFtZTpzdHJpbmcsIHZhbHVlOnN0cmluZ31cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBGZXRjaFByb3NwZWN0U3VjY2VzcyB8IEZldGNoUHJvc3BlY3RGYWlsZWQgfCBPbklucHV0Q2hhbmdlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgZmV0Y2hQcm9zcGVjdFJlcXVlc3Q6IChpZDogc3RyaW5nKSA9PiA8RmV0Y2hQcm9zcGVjdFJlcXVlc3Q+eyB0eXBlOiAnR0VUX1BST1NQRUNUX1JFUVVFU1QnLCBpZCB9LFxyXG4gICAgZmV0Y2hQcm9zcGVjdFN1Y2Nlc3M6IChwcm9zcGVjdDphbnkpID0+IDxGZXRjaFByb3NwZWN0U3VjY2Vzcz57IHR5cGU6ICdHRVRfUFJPU1BFQ1QnLCBwcm9zcGVjdCB9LFxyXG4gICAgZmV0Y2hQcm9zcGVjdEZhaWxlZDogKCkgPT4gPEZldGNoUHJvc3BlY3RGYWlsZWQ+eyB0eXBlOiAnR0VUX1BST1NQRUNUX0ZBSUxFRCcgfSxcclxuICAgIG9uSW5wdXRDaGFuZ2U6IChuYW1lLCB2YWx1ZSkgPT4gPE9uSW5wdXRDaGFuZ2U+eyB0eXBlOiAnT05fSU5QVVRfQ0hBTkdFJywgbmFtZSwgdmFsdWUgfSxcclxuICAgIHVwZGF0ZVByb3NwZWN0UmVxdWVzdDogKCkgPT4gPFVwZGF0ZVByb3NwZWN0UmVxdWVzdD57IHR5cGU6ICdVUERBVEVfUFJPU1BFQ1RfUkVRVUVTVCcgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFByb3NwZWN0U3RhdGU+ID0gKHN0YXRlOiBQcm9zcGVjdFN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIk9OX0lOUFVUX0NIQU5HRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgW2FjdGlvbi5uYW1lXTogYWN0aW9uLnZhbHVlIH0pO1xyXG4gICAgICAgIGNhc2VcIkdFVF9QUk9TUEVDVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLnByb3NwZWN0KTtcclxuICAgICAgICBjYXNlIFwiR0VUX1BST1NQRUNUX0ZBSUxFRFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgbnVsbCk7XHJcbiAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IE9iamVjdC5hc3NpZ24oe30sIG51bGwpXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZ2VudENvZGVTdGF0ZSB7XHJcbiAgICBhZ2VudENvZGU6IHN0cmluZztcclxufTtcclxuXHJcbmludGVyZmFjZSBBZ2VudENvZGUgeyB0eXBlOiAnU0VUX0FHRU5UQ09ERScsIGFnZW50Q29kZSB9XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnNBZ2VudENvZGUgPSB7XHJcbiAgICBzZXRBZ2VudENvZGU6IChhZ2VudENvZGU6IHN0cmluZykgPT4gPEFnZW50Q29kZT57IHR5cGU6ICdTRVRfQUdFTlRDT0RFJywgYWdlbnRDb2RlIH1cclxuXHJcbn07XHJcblxyXG50eXBlIEtub3duQWN0aW9uQWdlbnRDb2RlID0gQWdlbnRDb2RlXHJcblxyXG5leHBvcnQgY29uc3QgYWdlbnRDb2RlcmVkdWNlcjogUmVkdWNlcjxBZ2VudENvZGVTdGF0ZT4gPSAoc3RhdGU6IEFnZW50Q29kZVN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uQWdlbnRDb2RlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIlNFVF9BR0VOVENPREVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5hZ2VudENvZGU7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9Qcm9zcGVjdC50cyIsImltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb25UeXBlcydcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlc1N0YXRlIHtcclxuICAgIHN0YXRlczogU3RhdGVbXTtcclxufVxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gICAgQ29kZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRmV0Y2hTdGF0ZVJlcXVlc3QgeyB0eXBlOiAnR0VUX1NUQVRFU19SRVFVRVNUJyB9XHJcbmludGVyZmFjZSBGZXRjaFN0YXRlU3VjY2VzcyB7IHR5cGU6ICdHRVRfU1RBVEVTX1NVQ0NFU1MnLCBzdGF0ZXMgfVxyXG5pbnRlcmZhY2UgRmV0Y2hTdGF0ZXNGYWlsZWQgeyB0eXBlOiAnR0VUX1NUQVRFU19GQUlMRUQnIH1cclxudHlwZSBLbm93bkFjdGlvbiA9IEZldGNoU3RhdGVTdWNjZXNzIHwgRmV0Y2hTdGF0ZVJlcXVlc3QgfCBGZXRjaFN0YXRlc0ZhaWxlZDtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIGZldGNoU3RhdGVSZXF1ZXN0OiAoKSA9PiA8RmV0Y2hTdGF0ZVJlcXVlc3Q+eyB0eXBlOiAnR0VUX1NUQVRFU19SRVFVRVNUJyB9LFxyXG4gICAgZmV0Y2hTdGF0ZVN1Y2Nlc3M6IChzdGF0ZXMpID0+IDxGZXRjaFN0YXRlU3VjY2Vzcz57IHR5cGU6ICdHRVRfU1RBVEVTX1NVQ0NFU1MnLCBzdGF0ZXMgfSxcclxuICAgIGZldGNoU3RhdGVzRmFpbGVkOiAoKSA9PiA8RmV0Y2hTdGF0ZXNGYWlsZWQ+eyB0eXBlOiAnR0VUX1NUQVRFU19GQUlMRUQnIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxTdGF0ZXNTdGF0ZT4gPSAoc3RhdGU6IFN0YXRlc1N0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUX1NUQVRFU19TVUNDRVNTJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oW10sIHN0YXRlLCBhY3Rpb24uc3RhdGVzKTsgICAgICBcclxuICAgICAgICBjYXNlICdHRVRfU1RBVEVTX1JFUVVFU1QnOlxyXG4gICAgICAgIGNhc2UgJ0dFVF9TVEFURVNfRkFJTEVEJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oW10sIG51bGwpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgfHwgT2JqZWN0LmFzc2lnbihbXSwgbnVsbCkgXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9TdGF0ZXMudHMiLCJpbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uVHlwZXMnXHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuZXhwb3J0IGludGVyZmFjZSBMb2FkZXJTdGF0ZSB7XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBMb2FkZXJCZWdpbiB7IHR5cGU6ICdMT0FERVJfQkVHSU4nIH1cclxuaW50ZXJmYWNlIExvYWRlckVuZCB7IHR5cGU6ICdMT0FERVJfRU5EJyB9XHJcblxyXG5cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBMb2FkZXJCZWdpbiB8IExvYWRlckVuZDtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIGxvYWRlckJlZ2luOiAoKSA9PiA8TG9hZGVyQmVnaW4+eyB0eXBlOiAnTE9BREVSX0JFR0lOJyB9LFxyXG4gICAgbG9hZGVyRW5kOiAoKSA9PiA8TG9hZGVyRW5kPnsgdHlwZTogJ0xPQURFUl9FTkQnIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxMb2FkZXJTdGF0ZT4gPSAoc3RhdGU6IExvYWRlclN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnTE9BREVSX0JFR0lOJzpcclxuICAgICAgICAgICAgcmV0dXJuIHsgaXNMb2FkaW5nOiB0cnVlIH07XHJcbiAgICAgICAgY2FzZSAnTE9BREVSX0VORCc6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGlzTG9hZGluZzogZmFsc2UgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IHsgaXNMb2FkaW5nOiBmYWxzZSB9O1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvTG9hZGVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTE1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLXJlZHV4L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IElucHV0TWFzayBmcm9tICdyZWFjdC1pbnB1dC1tYXNrJztcclxuY2xhc3MgVmFsaWNJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnk+IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0XHJcblx0XHR0aGlzLm9uQ2hhbmdlRW1haWwgPSB0aGlzLm9uQ2hhbmdlRW1haWwuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25DaGFuZ2VQaG9uZU51bWJlciA9IHRoaXMub25DaGFuZ2VQaG9uZU51bWJlci5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVNTTiA9IHRoaXMub25DaGFuZ2VTU04uYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25DaGFuZ2VUZXh0ID0gdGhpcy5vbkNoYW5nZVRleHQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25DaGFuZ2VOdW1iZXIgPSB0aGlzLm9uQ2hhbmdlTnVtYmVyLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlVGV4dChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdG9uQ2hhbmdlTnVtYmVyKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlRW1haWwoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0bGV0IGlucHV0RmllbGQgPSBlLnRhcmdldDtcclxuXHRcdGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoaW5wdXRGaWVsZCk7XHJcblx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cdFx0aWYgKGlzVmFsaWQgPT09IGZhbHNlKSB7XHJcblx0XHRcdC8vdGhpcy5hZGRFcnJvcih0aGlzLnN0YXRlLGlucHV0RmllbGQubmFtZSwgaW5wdXRGaWVsZC5uYW1lICsgXCIgaXMgcmVxdWlyZWRcIik7XHJcblx0XHRcdGlucHV0RmllbGQuaXNWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArIFwiIGlzIHJlcXVpcmVkXCI7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aW5wdXRGaWVsZC5pc1ZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHRoaXMudmFsaWRhdGVFbWFpbEZvcm1hdChpbnB1dEZpZWxkKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArICcgaXMgaW52YWxpZCc7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdFx0XHQvLyQoaW5wdXRGaWVsZCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTsgICAgICAgXHJcblx0XHRcdFx0Ly90aGlzLmFkZEVycm9yKHRoaXMucHJvcHMuc3RhdGUsaW5wdXRGaWVsZC5uYW1lLCBcIlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHRcclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlUGhvbmVOdW1iZXIoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0bGV0IGlucHV0RmllbGQgPSBlLnRhcmdldDtcclxuXHRcdGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoaW5wdXRGaWVsZCk7XHJcblxyXG5cdFx0aWYgKGlzVmFsaWQgPT09IGZhbHNlKSB7XHJcblx0XHRcdC8vdGhpcy5hZGRFcnJvcih0aGlzLnN0YXRlLGlucHV0RmllbGQubmFtZSwgaW5wdXRGaWVsZC5uYW1lICsgXCIgaXMgcmVxdWlyZWRcIik7XHJcblx0XHRcdGlucHV0RmllbGQuaXNWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArIFwiIGlzIHJlcXVpcmVkXCI7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aW5wdXRGaWVsZC5pc1ZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHRoaXMudmFsaWRhdGVQaG9uZU51bWJlckZvcm1hdChpbnB1dEZpZWxkKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHQvLyQoaW5wdXRGaWVsZCkucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTsgICAgICAgXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gaW5wdXRGaWVsZC5uYW1lICsgJyBpcyBpbnZhbGlkJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPSB0cnVlO1xyXG5cdFx0XHRcdGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcclxuXHR9XHJcblx0b25DaGFuZ2VTU04oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0bGV0IGlucHV0RmllbGQgPSBlLnRhcmdldDtcclxuXHRcdGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoaW5wdXRGaWVsZCk7XHJcblxyXG5cdFx0aWYgKGlzVmFsaWQgPT09IGZhbHNlKSB7XHJcblx0XHRcdGlucHV0RmllbGQuaXNWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArIFwiIGlzIHJlcXVpcmVkXCI7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aW5wdXRGaWVsZC5pc1ZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHRoaXMudmFsaWRhdGVTU05Gb3JtYXQoaW5wdXRGaWVsZCkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID0gZmFsc2U7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSBpbnB1dEZpZWxkLm5hbWUgKyAnIGlzIGludmFsaWQnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xyXG5cdH1cclxuXHR2YWxpZGF0ZUVtYWlsRm9ybWF0KGlucHV0KSB7XHJcblx0XHRsZXQgaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcblx0XHRsZXQgZm9ybWF0ID0gL15cXHcrKFsuLV0/XFx3KykqQFxcdysoWy4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvO1xyXG5cdFx0aWYgKGlucHV0LnZhbHVlICE9PSBcIlwiICYmIGZvcm1hdC50ZXN0KGlucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0aXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGlzRm9ybWF0VmFsaWQ7XHJcblx0fVxyXG5cdHZhbGlkYXRlU1NORm9ybWF0KGlucHV0KSB7XHJcblx0XHRsZXQgaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcblx0XHRsZXQgZm9ybWF0ID0gL15bMC05QS1aXXszfS1bMC05QS1aXXsyfS1bMC05QS1aXXs0fSQvO1xyXG5cdFx0aWYgKGlucHV0LnZhbHVlICE9PSBcIlwiICYmIGZvcm1hdC50ZXN0KGlucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0aXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGlzRm9ybWF0VmFsaWQ7XHJcblx0fVxyXG5cdHZhbGlkYXRlUGhvbmVOdW1iZXJGb3JtYXQoaW5wdXQpIHtcclxuXHRcdGxldCBpc0Zvcm1hdFZhbGlkID0gdHJ1ZTtcclxuXHRcdGxldCBmb3JtYXQgPSAvKD86XFwoXFxkezN9XFwpfFxcZHszfSlbLSBdP1xcZHszfVstIF0/XFxkezR9LztcclxuXHRcdGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIiAgJiYgZm9ybWF0LnRlc3QoaW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xyXG5cdFx0XHRpc0Zvcm1hdFZhbGlkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXNGb3JtYXRWYWxpZDtcclxuXHR9XHJcblx0aXNWYWxpZChpbnB1dCkge1xyXG5cdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhpbnB1dClcclxuXHRcdGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJykgIT09IG51bGwgJiYgaW5wdXQudmFsdWUgPT09IFwiXCIpIHtcclxuXHRcdFx0Ly8kKGlucHV0KS5wYXJlbnQoKS5hZGRDbGFzcygnaGFzLWVycm9yIGhhcy1mZWVkYmFjaycpOyAgICAgICAgICAgXHJcblx0XHRcdGlzVmFsaWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHQvLyAkKGlucHV0KS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yIGhhcy1mZWVkYmFjaycpO1xyXG5cdFx0XHQvL2lucHV0Lm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHRcdFx0aXNWYWxpZCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXNWYWxpZDtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IGlucHV0VHlwZSA9IHRoaXMucHJvcHMudHlwZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMucHJvcHMudHlwZSAhPT0gbnVsbCA/IHRoaXMucHJvcHMudHlwZSA6IFwidGV4dFwiO1xyXG5cdFx0bGV0IGlucHV0Q29udHJvbDtcclxuXHRcdGNvbnN0IHByb3BzID0geyAuLi50aGlzLnByb3BzIH07XHJcblxyXG5cdFx0c3dpdGNoIChpbnB1dFR5cGUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdGNhc2UgXCJwaG9uZVwiOlxyXG5cdFx0XHRcdGlucHV0Q29udHJvbCA9IDxJbnB1dE1hc2sgIHsuLi5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VQaG9uZU51bWJlcn0gLz47XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJudW1iZXJcIjpcclxuXHRcdFx0XHRpbnB1dENvbnRyb2wgPSA8aW5wdXQgey4uLnByb3BzfSB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VOdW1iZXJ9IC8+O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiZW1haWxcIjpcclxuXHRcdFx0XHRpbnB1dENvbnRyb2wgPSA8aW5wdXQgey4uLnByb3BzfSB0eXBlPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUVtYWlsfSAvPjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcInNzblwiOlxyXG5cdFx0XHRcdGlucHV0Q29udHJvbCA9IDxJbnB1dE1hc2sgIHsuLi5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTU059IC8+O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGlucHV0Q29udHJvbCA9IDxpbnB1dCB7Li4ucHJvcHN9IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VUZXh0fSAvPjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHJldHVybiBpbnB1dENvbnRyb2w7XHJcblx0fVxyXG5cclxuXHJcblx0c3RhdGljIHByb3BUeXBlcyA9IHtcclxuXHRcdHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHRcdG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cdFx0bmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhbGljSW5wdXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9WYWxpY0lucHV0Q29tcG9uZW50L1ZhbGljSW5wdXRDb21wb25lbnQudHN4IiwiaW1wb3J0IHsgQUREX1ZBTElEQVRJT05fRVJST1JfTUVTU0FHRSB9IGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkRXJyb3JNZXNzYWdlID0gKGZpZWxkTmFtZTpzdHJpbmcsIGVycm9yTWVzc2FnZTpzdHJpbmcpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfVkFMSURBVElPTl9FUlJPUl9NRVNTQUdFLFxyXG4gICAgICAgIGZpZWxkTmFtZSxcclxuICAgICAgICBlcnJvck1lc3NhZ2VcclxufSlcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvVmFsaWRhdGlvbk1lc3NhZ2VBY3Rpb24udHMiLCJleHBvcnQgY29uc3QgcHJvc3BlY3RJZCA9IDE5NjM7XHJcbmV4cG9ydCBjb25zdCBhZ2lsZW5ldHVybCA9J2h0dHBzOi8vZDQudmFsaWMuY29tL2FnaWxlbmV0NS8nO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uc3RhbnRzL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHJlcGxhY2UgfSBmcm9tICdyZWFjdC1yb3V0ZXItcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcihwYXJhbXMgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIC8vIFByZXBhcmUgUmVkdXggc3RvcmUgd2l0aCBpbi1tZW1vcnkgaGlzdG9yeSwgYW5kIGRpc3BhdGNoIGEgbmF2aWdhdGlvbiBldmVudFxyXG4gICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGluY29taW5nIFVSTFxyXG4gICAgICAgIGNvbnN0IGJhc2VuYW1lID0gcGFyYW1zLmJhc2VVcmwuc3Vic3RyaW5nKDAsIHBhcmFtcy5iYXNlVXJsLmxlbmd0aCAtIDEpOyAvLyBSZW1vdmUgdHJhaWxpbmcgc2xhc2hcclxuICAgICAgICBjb25zdCB1cmxBZnRlckJhc2VuYW1lID0gcGFyYW1zLnVybC5zdWJzdHJpbmcoYmFzZW5hbWUubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGNyZWF0ZU1lbW9yeUhpc3RvcnkoKSk7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocmVwbGFjZSh1cmxBZnRlckJhc2VuYW1lKSk7XHJcblxyXG4gICAgICAgIC8vIFByZXBhcmUgYW4gaW5zdGFuY2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGFuZCBwZXJmb3JtIGFuIGluaXRhbCByZW5kZXIgdGhhdCB3aWxsXHJcbiAgICAgICAgLy8gY2F1c2UgYW55IGFzeW5jIHRhc2tzIChlLmcuLCBkYXRhIGFjY2VzcykgdG8gYmVnaW5cclxuICAgICAgICBjb25zdCByb3V0ZXJDb250ZXh0OiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBhcHAgPSAoXHJcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17IHN0b3JlIH0+XHJcbiAgICAgICAgICAgICAgICA8U3RhdGljUm91dGVyIGJhc2VuYW1lPXsgYmFzZW5hbWUgfSBjb250ZXh0PXsgcm91dGVyQ29udGV4dCB9IGxvY2F0aW9uPXsgcGFyYW1zLmxvY2F0aW9uLnBhdGggfSBjaGlsZHJlbj17IHJvdXRlcyB9IC8+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZW5kZXJUb1N0cmluZyhhcHApO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmVkaXJlY3Rpb24sIGp1c3Qgc2VuZCB0aGlzIGluZm9ybWF0aW9uIGJhY2sgdG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgICAgICBpZiAocm91dGVyQ29udGV4dC51cmwpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IHJlZGlyZWN0VXJsOiByb3V0ZXJDb250ZXh0LnVybCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBPbmNlIGFueSBhc3luYyB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlclxyXG4gICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmXHJcbiAgICAgICAgcGFyYW1zLmRvbWFpblRhc2tzLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlclRvU3RyaW5nKGFwcCksXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7IGluaXRpYWxSZWR1eFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSgpIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb25cclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jvb3Qtc2VydmVyLnRzeCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEzOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxOTIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTgwKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDEzNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbi8vaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi9jb21wb25lbnRzL0xheW91dCc7XHJcbi8vaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xyXG4vL2ltcG9ydCBGZXRjaERhdGEgZnJvbSAnLi9jb21wb25lbnRzL0ZldGNoRGF0YSc7XHJcbi8vaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb21wb25lbnRzL0NvdW50ZXInO1xyXG5pbXBvcnQgUHJvc3BlY3RFZGl0Q29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9Qcm9zcGVjdEVkaXRDb250YWluZXInO1xyXG4gICAgXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSAoPGRpdj5cclxuICAgICAgICAgICAgXHJcbjxQcm9zcGVjdEVkaXRDb250YWluZXIgLz5cclxuICAgICAgICA8L2Rpdj4pO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy50c3giLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFRhYkNvbnRhaW5lciwgVGFiIH0gZnJvbSAnLi4vLi4vc2hhcmVkL1RhYkNvbnRhaW5lckNvbXBvbmVudC9UYWJDb250YWluZXJDb21wb25lbnQnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVmFsaWNWYWxpZGF0aW9uTWVzc2FnZSBmcm9tICcuLi8uLi9zaGFyZWQvVmFsaWNWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudC9WYWxpY1ZhbGlkYXRpb25NZXNzYWdlQ29tcG9uZW50JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9zaGFyZWQvTG9hZGVyQ29tcG9uZW50L0xvYWRlckNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHZhbGlkYXRlRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxpdHkvVXRpbGl0eSc7XHJcbmltcG9ydCB7IFBlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXIgfSBmcm9tICcuL1BlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXInO1xyXG5pbXBvcnQgeyBJbnZlc3RvclByb2ZpbGVDb250YWluZXIgfSBmcm9tICcuL0ludmVzdG9yUHJvZmlsZUNvbnRhaW5lcic7XHJcbmltcG9ydCB7IEluY29tZVNvdXJjZUNvbnRhaW5lciB9IGZyb20gJy4vSW5jb21lU291cmNlQ29udGFpbmVyJztcclxuaW1wb3J0IHsgYWdpbGVuZXR1cmwgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBZGRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi8uLi9hY3Rpb25zL1ZhbGlkYXRpb25NZXNzYWdlQWN0aW9uJztcclxuLy9pbXBvcnQge1Byb3NwZWN0QVBJfSBmcm9tICcuLi9hcGkvcHJvc3BlY3RBcGknO1xyXG4vL2ltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgKiBhcyBQcm9zcGVjdEFjdGlvbiBmcm9tICcuLi8uLi9hY3Rpb25zL1Byb3NwZWN0QWN0aW9uJztcclxuaW1wb3J0ICcuL1Byb3NwZWN0RWRpdENvbnRhaW5lci5jc3MnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xyXG5pbXBvcnQgKiBhcyBQcm9zcGVjdFN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL1Byb3NwZWN0J1xyXG5pbXBvcnQgKiBhcyBTdGF0ZVN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL1N0YXRlcyc7XHJcbmltcG9ydCAqIGFzIExvYWRlclN0b3JlIGZyb20gJy4uLy4uL3N0b3JlL0xvYWRlcic7XHJcbmltcG9ydCAqIGFzIFZhbGlkYXRpb25NZXNzYWdlU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvdmFsaWRhdGlvbk1lc3NhZ2UnO1xyXG5cclxudHlwZSBQcm9zcGVjdEVkaXRQcm9wcyA9IFByb3NwZWN0U3RvcmUuUHJvc3BlY3RTdGF0ZVxyXG4gICAgJiB0eXBlb2YgUHJvc3BlY3RTdG9yZS5hY3Rpb25DcmVhdG9yc1xyXG4gICAgJiB0eXBlb2YgUHJvc3BlY3RTdG9yZS5hY3Rpb25DcmVhdG9yc0FnZW50Q29kZVxyXG4gICAgJiB0eXBlb2YgU3RhdGVTdG9yZS5hY3Rpb25DcmVhdG9yc1xyXG4gICAgJiB0eXBlb2YgTG9hZGVyU3RvcmUuYWN0aW9uQ3JlYXRvcnNcclxuICAgICYgUm91dGVDb21wb25lbnRQcm9wczx7fT5cclxuICAgICYgcHJvc3BlY3RQcm9wc1xyXG4gICAgO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb3NwZWN0RWRpdENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb21wb25lbnREaWRNb3VudCgpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGluZm8pIHtcclxuICAgICAgICAvL2NvbnN0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIC8vZGlzcGF0Y2goKVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2NvbXBvbmVudGNhdGgnKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGZvcm1FcnJvcnMsIGlzTG9hZGluZyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoZm9ybUVycm9ycyAhPT0gdW5kZWZpbmVkICYmIGZvcm1FcnJvcnMgIT09IG51bGwgJiYgZm9ybUVycm9ycy5sZW5ndGggPjApIHtcclxuICAgICAgICAgICAgbGV0IGVycm9ycyA9IGZvcm1FcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLmVycm9yTWVzc2FnZSAhPT0gJycgJiYgZXJyb3IuZmllbGROYW1lID09PSAnJyk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXJyb3JzKTtcclxuICAgICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvL3Rocm93IG5ldyBFcnJvcihcImZhaWxlZCBjb21wb25lbnRcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPEFwcEVycm9yIGVycm9yPXtlcnJvcnNbMF0uZXJyb3JNZXNzYWdlfSAvPilcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICA8ZGl2PiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFZhbGljVmFsaWRhdGlvbk1lc3NhZ2UgZm9ybUVycm9ycz17Zm9ybUVycm9yc30gY2xhc3NOYW1lPVwiZm9ybS1lcnJvcnNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBuYW1lPVwiUGVyc29uYWwgSW5mb3JtYXRpb25cIiBpc0RlZmF1bHRUYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBuYW1lPVwiSW52ZXN0b3IgUHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEludmVzdG9yUHJvZmlsZUNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBuYW1lPVwiSW5jb21lIFNvdXJjZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluY29tZVNvdXJjZUNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2F2ZVByb3NwZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19ID5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNhbmNlbFByb3NwZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBzYXZlUHJvc3BlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgZm9ybUVycm9yczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkXHJcbiAgICB9XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiAoe1xyXG4gICAgZm9ybUVycm9yczogc3RhdGUuZXJyb3JzLFxyXG4gICAgaXNMb2FkaW5nOiBzdGF0ZS5pc0xvYWRpbmdcclxufSlcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgc2F2ZVByb3NwZWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpIGFzIGFueTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5wdXRzLmxlbmd0aDsgKytpbmRleCkge1xyXG4gICAgICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IGlucHV0c1tpbmRleF07XHJcbiAgICAgICAgICAgIHZhbGlkYXRlRm9ybUZpZWxkKGlucHV0RmllbGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlucHV0RmllbGQuaXNWYWxpZCA9PT0gZmFsc2UgfHwgaW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goQWRkRXJyb3JNZXNzYWdlKGlucHV0RmllbGQubmFtZSwgaW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgICQoaW5wdXRGaWVsZCkucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKEFkZEVycm9yTWVzc2FnZShpbnB1dEZpZWxkLm5hbWUsICcnKSk7XHJcbiAgICAgICAgICAgICAgICAkKGlucHV0RmllbGQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKFByb3NwZWN0U3RvcmUuYWN0aW9uQ3JlYXRvcnMudXBkYXRlUHJvc3BlY3RSZXF1ZXN0KCkpO1xyXG4gICAgfSxcclxuICAgIGNhbmNlbFByb3NwZWN0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHdhbnQgdG8gY2FuY2VsPycpKSB7XHJcbiAgICAgICAgICAgIChkb2N1bWVudCBhcyBhbnkpLmxvY2F0aW9uID0gYWdpbGVuZXR1cmwgKyBcIkRhc2hib2FyZC9BZHZpc29yL0NsaWVudFByb3NwZWN0TGlzdGluZy5hc3B4P2FnZW50SWQ9MDM0OTlcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwYXRjaChMb2FkZXJTdG9yZS5hY3Rpb25DcmVhdG9ycy5sb2FkZXJCZWdpbigpKTtcclxuICAgICAgICBkaXNwYXRjaChQcm9zcGVjdFN0b3JlLmFjdGlvbkNyZWF0b3JzQWdlbnRDb2RlLnNldEFnZW50Q29kZSgod2luZG93IGFzIGFueSkuX19hZ2VudENvZGVfXykpO1xyXG4gICAgICAgIGRpc3BhdGNoKFN0YXRlU3RvcmUuYWN0aW9uQ3JlYXRvcnMuZmV0Y2hTdGF0ZVJlcXVlc3QoKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goUHJvc3BlY3RTdG9yZS5hY3Rpb25DcmVhdG9ycy5mZXRjaFByb3NwZWN0UmVxdWVzdCgod2luZG93IGFzIGFueSkuX19QUk9TUEVDVElEX18pKTsgICAgICAgIFxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmludGVyZmFjZSBwcm9zcGVjdFByb3BzIHtcclxuICAgIGNhbmNlbFByb3NwZWN0OiAoKSA9PiB2b2lkO1xyXG4gICAgc2F2ZVByb3NwZWN0OiAoKSA9PiB2b2lkO1xyXG4gICAgZm9ybUVycm9yczogYW55O1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQ6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgQXBwRXJyb3IgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgIFNvbWV0aGluZyB3ZW50IHdyb25nISEhIHtwcm9wcy5lcnJvcn1cclxuICAgIDwvZGl2Pik7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvc3BlY3RFZGl0Q29udGFpbmVyKSBhcyB0eXBlb2YgUHJvc3BlY3RFZGl0Q29udGFpbmVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9Qcm9zcGVjdEVkaXRDb250YWluZXIudHN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICcuL1RhYkNvbnRhaW5lci5jc3MnO1xyXG5jb25zdCBjbGVhclN0eWxlID0ge2NsZWFyOidib3RoJywgaGVpZ2h0OicyMHB4J307XHJcbmV4cG9ydCBjbGFzcyBUYWJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LGFueT4geyAgICAgICBcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMudGFiSGVhZGVyKCk7XHJcbiAgICAgICAgdmFyIGN1c3RvbVN0eWxlID0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgbWFpblN0eWxlID0ge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicGFkMjAgbWFpblN0eWxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0yIGN1c3RvbVN0eWxlXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cdFx0XHJcblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y2xlYXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHRcdFx0XHRcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGFiSGVhZGVyKCl7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhlYWRlckxpbmsgPSB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoY2hpbGQsaSkgPT4geyAgICAgICAgICAgIFxyXG5cdFx0XHRcdFx0XHRsZXQgaGVhZGVySWQgPSBjaGlsZC5wcm9wcy5uYW1lLnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gY291bnQgKyAxIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8VGFiSGVhZGVyIGtleT17aX0gaWQgPXtoZWFkZXJJZH0gaGVhZGVyTmFtZSA9IHtjaGlsZC5wcm9wcy5uYW1lfSAgaXNEZWZhdWx0ID0ge2NoaWxkLnByb3BzLmlzRGVmYXVsdFRhYn0gaW5kZXggPSB7Y291bnR9IC8+KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoPHNwYW4gY2xhc3NOYW1lPVwibm9iclwiPiB7aGVhZGVyTGlua30gPC9zcGFuPik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbmRlY2xhcmUgbmFtZXNwYWNlIEpTWCB7XHJcbiAgICBpbnRlcmZhY2UgSW50cmluc2ljRWxlbWVudHMge1xyXG4gICAgICAgIG5vYnI6IGFueVxyXG4gICAgfVxyXG59Ki9cclxuXHJcbmNsYXNzIFRhYkhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksYW55PntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9eyBpZDogdGhpcy5wcm9wcy5pZCArIFwiVGFiXCIsaW5kZXggOiB0aGlzLnByb3BzLmluZGV4LCBpc0RlZmF1bHQ6IHRoaXMucHJvcHMuaXNEZWZhdWx0LCBjdXJyZW50VGFiSW5kZXg6IDAgfTtcclxuICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZSA9IHRoaXMuY2hhbmdlQWN0aXZlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKDxsaSBjbGFzc05hbWUgPSBcInRhYkxpc3RJdGVtIGFjdGl2ZVRhYlwiIG5hbWUgPSBcImZvbGRlclRhYlwiIGlkID0ge3RoaXMuc3RhdGUuaWR9IG9uQ2xpY2sgPSB7dGhpcy5jaGFuZ2VBY3RpdmV9ID4gXHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyTmFtZX0gXHJcbiAgICAgICAgICAgICAgICA8L2xpPik7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VBY3RpdmUgPSAoKSA9PiB7ICAgICAgICBcclxuICAgICAgICB2YXIgeHl6ID0gJChcIltuYW1lPSdmb2xkZXJUYWInXVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHh5ei5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAkKHh5eltpXSkuYXR0cihcImNsYXNzXCIsIFwidGFiTGlzdEl0ZW0gcmVhY3QtdGFiSGVhZGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI1wiICsgdGhpcy5zdGF0ZS5pZCkuYXR0cihcImNsYXNzXCIsIFwidGFiTGlzdEl0ZW0gYWN0aXZlVGFiICByZWFjdC10YWJIZWFkZXJcIik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRUYWJJbmRleDogdGhpcy5wcm9wcy5pbmRleH0pO1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbnRlbnQodGhpcy5zdGF0ZS5pZCk7XHJcbiAgICB9XHJcbiAgICBzaG93Q29udGVudCh4KSB7XHRcdFxyXG4gICAgICAgIHZhciBjb25Cb3hlcyA9ICQoXCJbbmFtZT0nY29udGVudEJveCddXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uQm94ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJChjb25Cb3hlc1tpXSkuYXR0cihcImNsYXNzXCIsIFwibm9TaG93IHJlYWN0LXRhYkNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICQoY29uQm94ZXNbaV0pLmF0dHIoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHhQYXJ0cyA9IHguc3BsaXQoJ1RhYicpO1xyXG4gICAgICAgIGxldCB3aGljaEJveCA9IHhQYXJ0c1swXTtcclxuICAgICAgICAkKFwiI1wiICsgd2hpY2hCb3ggKyAnQm94JykuYXR0cihcImNsYXNzXCIsIFwic2hvdyByZWFjdC10YWJDb250ZW50XCIpO1xyXG4gICAgICAgICQoXCIjXCIgKyB3aGljaEJveCArICdCb3gnKS5hdHRyKFwic3R5bGVcIiwgXCJkaXNwbGF5OmJsb2NrXCIpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0RlZmF1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCl7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LGFueT4ge1xyXG4gICByZW5kZXIoKXtcclxuXHRcdGxldCBpZCA9IHRoaXMucHJvcHMubmFtZS5zcGxpdCgnICcpLmpvaW4oJycpO1xyXG4gICAgICAgIHJldHVybiAoPGRpdiBpZCA9IHtpZCArIFwiQm94XCJ9IG5hbWUgPSBcImNvbnRlbnRCb3hcIiBjbGFzc05hbWUgPSBcIm5vU2hvdyByZWFjdC10YWJDb250ZW50XCIgPiBcclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e2NsZWFyU3R5bGV9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufSBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvVGFiQ29udGFpbmVyQ29tcG9uZW50L1RhYkNvbnRhaW5lckNvbXBvbmVudC50c3giLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYXJlZC9UYWJDb250YWluZXJDb21wb25lbnQvVGFiQ29udGFpbmVyLmNzc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuY2xhc3MgVmFsaWNWYWxpZGF0aW9uTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksYW55PnsgICBcclxuICAgIHJlbmRlcigpeyAgICAgIFxyXG4gICAgICAgIGNvbnN0IHtmb3JtRXJyb3JzfSAgID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPSdmb3JtLWVycm9ycyc+XHJcbiAgICAgICAgICAgIHtmb3JtRXJyb3JzICE9PSB1bmRlZmluZWQgJiYgZm9ybUVycm9ycy5sZW5ndGggPjAgPyBmb3JtRXJyb3JzLm1hcCgoZmllbGQsIGkpID0+IHtcclxuICAgICAgaWYoZmllbGQuZXJyb3JNZXNzYWdlICE9PSBcIlwiKXtcclxuICAgICAgICByZXR1cm4gKCAgICAgICAgICBcclxuXHRcdCAgPHAgIGtleT17aX0+PGxhYmVsIGtleT17aX0gY2xhc3NOYW1lPVwidG9vbHRpcC10ZXh0IGZvcm0tZXJyb3JcIj57IGZpZWxkLmVycm9yTWVzc2FnZX0gPC9sYWJlbD48L3A+XHJcbiAgICAgICAgKSAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTonJ31cclxuICA8L2Rpdj4pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIFByb3BUeXBlcyA9IHtcclxuICAgICAgICBmb3JtRXJyb3JzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmaWVsZE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxuICAgICAgICB9KS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFsaWNWYWxpZGF0aW9uTWVzc2FnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL1ZhbGljVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQvVmFsaWNWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudC50c3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVmFsaWNJbnB1dCBmcm9tICcuLi8uLi9zaGFyZWQvVmFsaWNJbnB1dENvbXBvbmVudC9WYWxpY0lucHV0Q29tcG9uZW50JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtlcnJvckNsYXNzfSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbGl0eS9VdGlsaXR5JztcclxuXHJcbi8qXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlc3tcclxuQ29kZTpzdHJpbmc7XHJcbn0qL1xyXG5cclxuY2xhc3MgUGVyc29uYWxJbmZvcm1hdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVVc2VySW5wdXQgPSB0aGlzLmhhbmRsZVVzZXJJbnB1dC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudmFsaWNJbnB1dENoYW5nZSA9IHRoaXMudmFsaWNJbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgdmFsaWNJbnB1dENoYW5nZShlKXtcclxuICAgICAgICBjb25zdCB7IHZhbGljSW5wdXRDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdmFsaWNJbnB1dENoYW5nZShlKTtcclxuICAgIH1cclxuICAgIGhhbmRsZVVzZXJJbnB1dChlKSB7XHJcbiAgICAgICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBvbkNoYW5nZShlKTtcclxuICAgIH0gICBcclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7IHN0YXRlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgc3RhdGVzTGlzdERvd247XHJcbiAgICAgICAgaWYgKHN0YXRlcyAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZXNMaXN0RG93biA9IE9iamVjdC5rZXlzKHN0YXRlcykubWFwKChrZXksIGluZGV4KSA9PiB7IHJldHVybiA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtzdGF0ZXNba2V5XS5Db2RlfSA+e3N0YXRlc1trZXldLkNvZGV9PC9vcHRpb24+IH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vPSBzdGF0ZXMgIT09IHVuZGVmaW5lZCA/IHN0YXRlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7IHJldHVybiA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPSB7aXRlbS5Db2RlfT57aXRlbS5Db2RlfTwvb3B0aW9uPn0pOiAnJztcdFx0XHRcdFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInRpdGxlXCIgdmFsdWU9e3RoaXMucHJvcHMudGl0bGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Nci48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TXJzLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Ncy48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RHIuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlJldi48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bmb3JtLWdyb3VwIGNvbC1zbS00ICR7ZXJyb3JDbGFzcyh0aGlzLnByb3BzLmVycm9ycywgJ2ZpcnN0TmFtZScpfWB9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5maXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWlkZGxlSW5pdGlhbFwiPk1JPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm1pZGRsZUluaXRpYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNSVwiIHZhbHVlPXt0aGlzLnByb3BzLm1pZGRsZUluaXRpYWx9IG1heC1sZW5ndGg9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZm9ybS1ncm91cCBjb2wtc20tNSAke2Vycm9yQ2xhc3ModGhpcy5wcm9wcy5lcnJvcnMsICdsYXN0TmFtZScpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMubGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZvcm1hc20tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZvcm0tZ3JvdXAgY29sLXNtLTMgJHtlcnJvckNsYXNzKHRoaXMucHJvcHMuZXJyb3JzLCAnc3NuJyl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3NuXCI+U1NOPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFZhbGljSW5wdXQgdHlwZT1cInNzblwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJzc25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBQUEtQUEtQUFBQVwiIG1hc2s9XCIqKipcXC0qKlxcLSoqKipcIiBtYXNrQ2hhcj1cIl9cIiBvbkNoYW5nZT17dGhpcy52YWxpY0lucHV0Q2hhbmdlfSByZXF1aXJlZCB2YWx1ZT17dGhpcy5wcm9wcy5zc259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9ubHkgY2hhbmdlIFNTTiBpZiB5b3Uga25vdyB0aGUgcmVhbCB2YWx1ZS5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZU9mQmlydGhcIj5EYXRlIE9mIEJpcnRoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgZGF0YS1kYXRlQmlydGg9J3RydWUnIG5hbWU9XCJkYXRlT2ZCaXJ0aFwiIHZhbHVlPXt0aGlzLnByb3BzLmRhdGVPZkJpcnRofSBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2VuZGVyXCI+R2VuZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjFcIiBuYW1lPVwiZ2VuZGVyXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5nZW5kZXIgPT09IFwiMVwifSAvPk1hbGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjJcIiBuYW1lPVwiZ2VuZGVyXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5nZW5kZXIgPT09IFwiMlwifSAvPkZlbWFsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c0NpdGl6ZW5cIj5VUyBDaXRpemVuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidXNDaXRpemVuXCIgdmFsdWU9XCIxXCIgY2hlY2tlZD17dGhpcy5wcm9wcy51c0NpdGl6ZW4gPT09IFwiMVwifSAvPlllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInVzQ2l0aXplblwiIHZhbHVlPVwiMFwiIGNoZWNrZWQ9e3RoaXMucHJvcHMudXNDaXRpemVuID09PSBcIjBcIn0gLz5Ob1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFyaXRhbFN0YXR1c1wiPk1hcml0YWwgU3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibWFyaXRhbFN0YXR1c1wiIHZhbHVlPVwiMVwiIGNoZWNrZWQ9e3RoaXMucHJvcHMubWFyaXRhbFN0YXR1cyA9PT0gXCIxXCJ9IC8+TWFycmllZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtaW5saW5lXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJtYXJpdGFsU3RhdHVzXCIgdmFsdWU9XCIwXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5tYXJpdGFsU3RhdHVzID09PSBcIjBcIn0gLz5Ob3QgTWFycmllZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtaW5saW5lXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJtYXJpdGFsU3RhdHVzXCIgdmFsdWU9XCI2XCIgY2hlY2tlZD17dGhpcy5wcm9wcy5tYXJpdGFsU3RhdHVzICE9PSBcIjFcIiAmJiB0aGlzLnByb3BzLm1hcml0YWxTdGF0dXMgIT09IFwiMFwifSAvPkNpdmlsIFVuaW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJoYWxmLXJ1bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SG9tZSBBZGRyZXNzOjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG9tZUFkZHJlc3NMaW5lMVwiPkFkZHJlc3MgTGluZSAxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaG9tZUFkZHJlc3NMaW5lMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBMaW5lIDFcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmhvbWVBZGRyZXNzTGluZTF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob21lQWRkcmVzc0xpbmUyXCI+QWRkcmVzcyBMaW5lIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJob21lQWRkcmVzc0xpbmUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIExpbmUgMlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaG9tZUFkZHJlc3NMaW5lMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvbWVBZGRyZXNzTGluZTNcIj5BZGRyZXNzIExpbmUgMzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImhvbWVBZGRyZXNzTGluZTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgTGluZSAzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5ob21lQWRkcmVzc0xpbmUzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob21lQWRkcmVzc0NpdHlcIj5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaG9tZUFkZHJlc3NDaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaXR5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5ob21lQWRkcmVzc0NpdHl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG9tZUFkZHJlc3NTdGF0ZVwiPlN0YXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJob21lQWRkcmVzc1N0YXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5ob21lQWRkcmVzc1N0YXRlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiA+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZXNMaXN0RG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob21lQWRkcmVzc1ppcENvZGVcIj5aaXAgQ29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImhvbWVBZGRyZXNzWmlwQ29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWmlwQ29kZVwiIG1heC1sZW5ndGg9XCI1XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5ob21lQWRkcmVzc1ppcENvZGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1haWxpbmcgQWRkcmVzczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFpbGluZ0FkZHJlc3NMaW5lMVwiPkFkZHJlc3MgTGluZSAxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibWFpbGluZ0FkZHJlc3NMaW5lMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBMaW5lIDFcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLm1haWxpbmdBZGRyZXNzTGluZTF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYWlsaW5nQWRkcmVzc0xpbmUyXCI+QWRkcmVzcyBMaW5lIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJtYWlsaW5nQWRkcmVzc0xpbmUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIExpbmUgMlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMubWFpbGluZ0FkZHJlc3NMaW5lMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1haWxpbmdBZGRyZXNzTGluZTNcIj5BZGRyZXNzIExpbmUgMzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm1haWxpbmdBZGRyZXNzTGluZTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgTGluZSAzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5tYWlsaW5nQWRkcmVzc0xpbmUzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYWlsaW5nQWRkcmVzc0NpdHlcIj5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibWFpbGluZ0FkZHJlc3NDaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaXR5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5tYWlsaW5nQWRkcmVzc0NpdHl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFpbGluZ0FkZHJlc3NTdGF0ZVwiPlN0YXRlPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwibWFpbGluZ0FkZHJlc3NTdGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMubWFpbGluZ0FkZHJlc3NTdGF0ZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZXNMaXN0RG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYWlsaW5nQWRkcmVzc1ppcENvZGVcIj5aaXAgQ29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm1haWxpbmdBZGRyZXNzWmlwQ29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWmlwQ29kZVwiIG1heC1sZW5ndGg9XCI1XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5tYWlsaW5nQWRkcmVzc1ppcENvZGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvbWVQaG9uZVwiPkhvbWUgUGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwicGhvbmVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaG9tZVBob25lXCIgbWFzaz1cIlxcKDk5OVxcKTk5OVxcLTk5OTlcIiBtYXNrQ2hhcj1cIl9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudmFsaWNJbnB1dENoYW5nZX0gdmFsdWU9e3RoaXMucHJvcHMuaG9tZVBob25lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIndvcmtQaG9uZVwiPldvcmsgUGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwicGhvbmVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwid29ya1Bob25lXCIgbWFzaz1cIlxcKDk5OVxcKTk5OVxcLTk5OTlcIiBtYXNrQ2hhcj1cIl9cIiBvbkNoYW5nZT17dGhpcy52YWxpY0lucHV0Q2hhbmdlfSB2YWx1ZT17dGhpcy5wcm9wcy53b3JrUGhvbmV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90aGVyUGhvbmVcIj5PdGhlciBQaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWYWxpY0lucHV0IHR5cGU9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJvdGhlclBob25lXCIgbWFzaz1cIlxcKDk5OVxcKTk5OVxcLTk5OTlcIiBtYXNrQ2hhcj1cIl9cIiBvbkNoYW5nZT17dGhpcy52YWxpY0lucHV0Q2hhbmdlfSB2YWx1ZT17dGhpcy5wcm9wcy5vdGhlclBob25lfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3ggY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtaW5saW5lXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZWZlcnJhbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gY2hlY2tlZD17dGhpcy5wcm9wcy5yZWZlcnJhbH0gLz5SZWZlcnJhbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsQWRkcmVzc1wiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMudmFsaWNJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmVtYWlsQWRkcmVzc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuc3RhdGljIHByb3BUeXBlcyA9IHtcclxuXHRcdCBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHZhbGljSW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxJbmZvcm1hdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qcm9zcGVjdENvbXBvbmVudC9QZXJzb25hbEluZm9ybWF0aW9uQ29tcG9uZW50LnRzeCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcGFyc2VNYXNrID0gcmVxdWlyZSgnLi91dGlscy9wYXJzZU1hc2snKTtcblxudmFyIF9wYXJzZU1hc2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2VNYXNrKTtcblxudmFyIF9lbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vdXRpbHMvZW52aXJvbm1lbnQnKTtcblxudmFyIF9zdHJpbmcgPSByZXF1aXJlKCcuL3V0aWxzL3N0cmluZycpO1xuXG52YXIgX2RlZmVyID0gcmVxdWlyZSgnLi91dGlscy9kZWZlcicpO1xuXG52YXIgX2RlZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYW5uaWFzc2luL3JlYWN0LWlucHV0LW1hc2tcblxuXG52YXIgSW5wdXRFbGVtZW50ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKElucHV0RWxlbWVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5wdXRFbGVtZW50KHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0RWxlbWVudCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSW5wdXRFbGVtZW50Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSW5wdXRFbGVtZW50KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgIHZhciBtYXNrID0gcHJvcHMubWFzayxcbiAgICAgICAgbWFza0NoYXIgPSBwcm9wcy5tYXNrQ2hhcixcbiAgICAgICAgZm9ybWF0Q2hhcnMgPSBwcm9wcy5mb3JtYXRDaGFycyxcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgICBhbHdheXNTaG93TWFzayA9IHByb3BzLmFsd2F5c1Nob3dNYXNrO1xuXG5cbiAgICBfdGhpcy5oYXNWYWx1ZSA9IHZhbHVlICE9IG51bGw7XG4gICAgX3RoaXMubWFza09wdGlvbnMgPSAoMCwgX3BhcnNlTWFzazIuZGVmYXVsdCkobWFzaywgbWFza0NoYXIsIGZvcm1hdENoYXJzKTtcblxuICAgIGlmIChkZWZhdWx0VmFsdWUgPT0gbnVsbCkge1xuICAgICAgZGVmYXVsdFZhbHVlID0gJyc7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IF90aGlzLmdldFN0cmluZ1ZhbHVlKHZhbHVlKTtcblxuICAgIGlmIChfdGhpcy5tYXNrT3B0aW9ucy5tYXNrICYmIChhbHdheXNTaG93TWFzayB8fCB2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gKDAsIF9zdHJpbmcuZm9ybWF0VmFsdWUpKF90aGlzLm1hc2tPcHRpb25zLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgX3RoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gSW5wdXRFbGVtZW50O1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICB0aGlzLmxhc3RDdXJzb3JQb3MgPSBudWxsO1xuICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcblxuICB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzMi5pc0FuZHJvaWRCcm93c2VyID0gKDAsIF9lbnZpcm9ubWVudC5pc0FuZHJvaWRCcm93c2VyKSgpO1xuICAgIF90aGlzMi5pc1dpbmRvd3NQaG9uZUJyb3dzZXIgPSAoMCwgX2Vudmlyb25tZW50LmlzV2luZG93c1Bob25lQnJvd3NlcikoKTtcbiAgICBfdGhpczIuaXNBbmRyb2lkRmlyZWZveCA9ICgwLCBfZW52aXJvbm1lbnQuaXNBbmRyb2lkRmlyZWZveCkoKTtcblxuICAgIGlmIChfdGhpczIubWFza09wdGlvbnMubWFzayAmJiBfdGhpczIuZ2V0SW5wdXRWYWx1ZSgpICE9PSBfdGhpczIudmFsdWUpIHtcbiAgICAgIF90aGlzMi5zZXRJbnB1dFZhbHVlKF90aGlzMi52YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIChuZXh0UHJvcHMpIHtcbiAgICB2YXIgb2xkTWFza09wdGlvbnMgPSBfdGhpczIubWFza09wdGlvbnM7XG5cbiAgICBfdGhpczIuaGFzVmFsdWUgPSBuZXh0UHJvcHMudmFsdWUgIT0gbnVsbDtcbiAgICBfdGhpczIubWFza09wdGlvbnMgPSAoMCwgX3BhcnNlTWFzazIuZGVmYXVsdCkobmV4dFByb3BzLm1hc2ssIG5leHRQcm9wcy5tYXNrQ2hhciwgbmV4dFByb3BzLmZvcm1hdENoYXJzKTtcblxuICAgIGlmICghX3RoaXMyLm1hc2tPcHRpb25zLm1hc2spIHtcbiAgICAgIF90aGlzMi5iYWNrc3BhY2VPckRlbGV0ZVJlbW92YWwgPSBudWxsO1xuICAgICAgX3RoaXMyLmxhc3RDdXJzb3JQb3MgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpc01hc2tDaGFuZ2VkID0gX3RoaXMyLm1hc2tPcHRpb25zLm1hc2sgJiYgX3RoaXMyLm1hc2tPcHRpb25zLm1hc2sgIT09IG9sZE1hc2tPcHRpb25zLm1hc2s7XG4gICAgdmFyIHNob3dFbXB0eSA9IG5leHRQcm9wcy5hbHdheXNTaG93TWFzayB8fCBfdGhpczIuaXNGb2N1c2VkKCk7XG4gICAgdmFyIG5ld1ZhbHVlID0gX3RoaXMyLmhhc1ZhbHVlID8gX3RoaXMyLmdldFN0cmluZ1ZhbHVlKG5leHRQcm9wcy52YWx1ZSkgOiBfdGhpczIudmFsdWU7XG5cbiAgICBpZiAoIW9sZE1hc2tPcHRpb25zLm1hc2sgJiYgIV90aGlzMi5oYXNWYWx1ZSkge1xuICAgICAgbmV3VmFsdWUgPSBfdGhpczIuZ2V0SW5wdXRET01Ob2RlKCkudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGlzTWFza0NoYW5nZWQgfHwgX3RoaXMyLm1hc2tPcHRpb25zLm1hc2sgJiYgKG5ld1ZhbHVlIHx8IHNob3dFbXB0eSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gKDAsIF9zdHJpbmcuZm9ybWF0VmFsdWUpKF90aGlzMi5tYXNrT3B0aW9ucywgbmV3VmFsdWUpO1xuXG4gICAgICBpZiAoaXNNYXNrQ2hhbmdlZCkge1xuICAgICAgICB2YXIgcG9zID0gX3RoaXMyLmxhc3RDdXJzb3JQb3M7XG4gICAgICAgIHZhciBmaWxsZWRMZW4gPSAoMCwgX3N0cmluZy5nZXRGaWxsZWRMZW5ndGgpKF90aGlzMi5tYXNrT3B0aW9ucywgbmV3VmFsdWUpO1xuICAgICAgICBpZiAocG9zID09PSBudWxsIHx8IGZpbGxlZExlbiA8IHBvcykge1xuICAgICAgICAgIGlmICgoMCwgX3N0cmluZy5pc0ZpbGxlZCkoX3RoaXMyLm1hc2tPcHRpb25zLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgIHBvcyA9IGZpbGxlZExlbjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zID0gX3RoaXMyLmdldFJpZ2h0RWRpdGFibGVQb3MoZmlsbGVkTGVuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX3RoaXMyLnNldEN1cnNvclBvcyhwb3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICYmICgwLCBfc3RyaW5nLmlzRW1wdHkpKF90aGlzMi5tYXNrT3B0aW9ucywgbmV3VmFsdWUpICYmICFzaG93RW1wdHkgJiYgKCFfdGhpczIuaGFzVmFsdWUgfHwgIW5leHRQcm9wcy52YWx1ZSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgX3RoaXMyLnZhbHVlID0gbmV3VmFsdWU7XG4gIH07XG5cbiAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICYmIF90aGlzMi5nZXRJbnB1dFZhbHVlKCkgIT09IF90aGlzMi52YWx1ZSkge1xuICAgICAgX3RoaXMyLnNldElucHV0VmFsdWUoX3RoaXMyLnZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5pc0RPTUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihIVE1MRWxlbWVudCkpID09PSAnb2JqZWN0JyA/IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAvLyBET00yXG4gICAgOiBlbGVtZW50Lm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBlbGVtZW50Lm5vZGVOYW1lID09PSAnc3RyaW5nJztcbiAgfTtcblxuICB0aGlzLmdldElucHV0RE9NTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXQgPSBfdGhpczIuaW5wdXQ7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKF90aGlzMi5pc0RPTUVsZW1lbnQoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgLy8gUmVhY3QgMC4xM1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuZmluZERPTU5vZGUoaW5wdXQpO1xuICB9O1xuXG4gIHRoaXMuZ2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXQgPSBfdGhpczIuZ2V0SW5wdXRET01Ob2RlKCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xuICB9O1xuXG4gIHRoaXMuc2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBpbnB1dCA9IF90aGlzMi5nZXRJbnB1dERPTU5vZGUoKTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgX3RoaXMyLnZhbHVlID0gdmFsdWU7XG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgfTtcblxuICB0aGlzLmdldExlZnRFZGl0YWJsZVBvcyA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICBmb3IgKHZhciBpID0gcG9zOyBpID49IDA7IC0taSkge1xuICAgICAgaWYgKCEoMCwgX3N0cmluZy5pc1Blcm1hbmVudENoYXIpKF90aGlzMi5tYXNrT3B0aW9ucywgaSkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHRoaXMuZ2V0UmlnaHRFZGl0YWJsZVBvcyA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICB2YXIgbWFzayA9IF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrO1xuXG4gICAgZm9yICh2YXIgaSA9IHBvczsgaSA8IG1hc2subGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmICghKDAsIF9zdHJpbmcuaXNQZXJtYW5lbnRDaGFyKShfdGhpczIubWFza09wdGlvbnMsIGkpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB0aGlzLnNldEN1cnNvclRvRW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmaWxsZWRMZW4gPSAoMCwgX3N0cmluZy5nZXRGaWxsZWRMZW5ndGgpKF90aGlzMi5tYXNrT3B0aW9ucywgX3RoaXMyLnZhbHVlKTtcbiAgICB2YXIgcG9zID0gX3RoaXMyLmdldFJpZ2h0RWRpdGFibGVQb3MoZmlsbGVkTGVuKTtcbiAgICBpZiAocG9zICE9PSBudWxsKSB7XG4gICAgICBfdGhpczIuc2V0Q3Vyc29yUG9zKHBvcyk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuc2V0U2VsZWN0aW9uID0gZnVuY3Rpb24gKHN0YXJ0KSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcblxuICAgIHZhciBpbnB1dCA9IF90aGlzMi5nZXRJbnB1dERPTU5vZGUoKTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IHN0YXJ0ICsgbGVuO1xuICAgIGlmICgnc2VsZWN0aW9uU3RhcnQnIGluIGlucHV0ICYmICdzZWxlY3Rpb25FbmQnIGluIGlucHV0KSB7XG4gICAgICBpbnB1dC5zZWxlY3Rpb25TdGFydCA9IHN0YXJ0O1xuICAgICAgaW5wdXQuc2VsZWN0aW9uRW5kID0gZW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmFuZ2UgPSBpbnB1dC5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgICAgcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCBzdGFydCk7XG4gICAgICByYW5nZS5tb3ZlRW5kKCdjaGFyYWN0ZXInLCBlbmQgLSBzdGFydCk7XG4gICAgICByYW5nZS5zZWxlY3QoKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5nZXRTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0ID0gX3RoaXMyLmdldElucHV0RE9NTm9kZSgpO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgdmFyIGVuZCA9IDA7XG5cbiAgICBpZiAoJ3NlbGVjdGlvblN0YXJ0JyBpbiBpbnB1dCAmJiAnc2VsZWN0aW9uRW5kJyBpbiBpbnB1dCkge1xuICAgICAgc3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydDtcbiAgICAgIGVuZCA9IGlucHV0LnNlbGVjdGlvbkVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XG4gICAgICBpZiAocmFuZ2UucGFyZW50RWxlbWVudCgpID09PSBpbnB1dCkge1xuICAgICAgICBzdGFydCA9IC1yYW5nZS5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsIC1pbnB1dC52YWx1ZS5sZW5ndGgpO1xuICAgICAgICBlbmQgPSAtcmFuZ2UubW92ZUVuZCgnY2hhcmFjdGVyJywgLWlucHV0LnZhbHVlLmxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIGVuZDogZW5kLFxuICAgICAgbGVuZ3RoOiBlbmQgLSBzdGFydFxuICAgIH07XG4gIH07XG5cbiAgdGhpcy5nZXRDdXJzb3JQb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzMi5nZXRTZWxlY3Rpb24oKS5zdGFydDtcbiAgfTtcblxuICB0aGlzLnNldEN1cnNvclBvcyA9IGZ1bmN0aW9uIChwb3MpIHtcbiAgICBfdGhpczIuc2V0U2VsZWN0aW9uKHBvcywgMCk7XG5cbiAgICAoMCwgX2RlZmVyMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIuc2V0U2VsZWN0aW9uKHBvcywgMCk7XG4gICAgfSk7XG5cbiAgICBfdGhpczIubGFzdEN1cnNvclBvcyA9IHBvcztcbiAgfTtcblxuICB0aGlzLmlzRm9jdXNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMyLmZvY3VzZWQ7XG4gIH07XG5cbiAgdGhpcy5nZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhdmFsdWUgJiYgdmFsdWUgIT09IDAgPyAnJyA6IHZhbHVlICsgJyc7XG4gIH07XG5cbiAgdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBfdGhpczIuYmFja3NwYWNlT3JEZWxldGVSZW1vdmFsID0gbnVsbDtcblxuICAgIGlmICh0eXBlb2YgX3RoaXMyLnByb3BzLm9uS2V5RG93biA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgX3RoaXMyLnByb3BzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IGV2ZW50LmtleSxcbiAgICAgICAgY3RybEtleSA9IGV2ZW50LmN0cmxLZXksXG4gICAgICAgIG1ldGFLZXkgPSBldmVudC5tZXRhS2V5LFxuICAgICAgICBkZWZhdWx0UHJldmVudGVkID0gZXZlbnQuZGVmYXVsdFByZXZlbnRlZDtcblxuICAgIGlmIChjdHJsS2V5IHx8IG1ldGFLZXkgfHwgZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdCYWNrc3BhY2UnIHx8IGtleSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgIHZhciBzZWxlY3Rpb24gPSBfdGhpczIuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICB2YXIgY2FuUmVtb3ZlID0ga2V5ID09PSAnQmFja3NwYWNlJyAmJiBzZWxlY3Rpb24uZW5kID4gMCB8fCBrZXkgPT09ICdEZWxldGUnICYmIF90aGlzMi52YWx1ZS5sZW5ndGggPiBzZWxlY3Rpb24uc3RhcnQ7XG5cbiAgICAgIGlmICghY2FuUmVtb3ZlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMyLmJhY2tzcGFjZU9yRGVsZXRlUmVtb3ZhbCA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHNlbGVjdGlvbjogX3RoaXMyLmdldFNlbGVjdGlvbigpXG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHBhc3RlID0gX3RoaXMyLnBhc3RlO1xuICAgIHZhciBfbWFza09wdGlvbnMgPSBfdGhpczIubWFza09wdGlvbnMsXG4gICAgICAgIG1hc2sgPSBfbWFza09wdGlvbnMubWFzayxcbiAgICAgICAgbWFza0NoYXIgPSBfbWFza09wdGlvbnMubWFza0NoYXIsXG4gICAgICAgIGxhc3RFZGl0YWJsZVBvcyA9IF9tYXNrT3B0aW9ucy5sYXN0RWRpdGFibGVQb3MsXG4gICAgICAgIHByZWZpeCA9IF9tYXNrT3B0aW9ucy5wcmVmaXg7XG5cblxuICAgIHZhciB2YWx1ZSA9IF90aGlzMi5nZXRJbnB1dFZhbHVlKCk7XG4gICAgdmFyIG9sZFZhbHVlID0gX3RoaXMyLnZhbHVlO1xuXG4gICAgaWYgKHBhc3RlKSB7XG4gICAgICBfdGhpczIucGFzdGUgPSBudWxsO1xuICAgICAgX3RoaXMyLnBhc3RlVGV4dChwYXN0ZS52YWx1ZSwgdmFsdWUsIHBhc3RlLnNlbGVjdGlvbiwgZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzZWxlY3Rpb24gPSBfdGhpczIuZ2V0U2VsZWN0aW9uKCk7XG4gICAgdmFyIGN1cnNvclBvcyA9IHNlbGVjdGlvbi5lbmQ7XG4gICAgdmFyIG1hc2tMZW4gPSBtYXNrLmxlbmd0aDtcbiAgICB2YXIgdmFsdWVMZW4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgdmFyIG9sZFZhbHVlTGVuID0gb2xkVmFsdWUubGVuZ3RoO1xuXG4gICAgdmFyIGNsZWFyZWRWYWx1ZTtcbiAgICB2YXIgZW50ZXJlZFN0cmluZztcblxuICAgIGlmIChfdGhpczIuYmFja3NwYWNlT3JEZWxldGVSZW1vdmFsKSB7XG4gICAgICB2YXIgZGVsZXRlRnJvbVJpZ2h0ID0gX3RoaXMyLmJhY2tzcGFjZU9yRGVsZXRlUmVtb3ZhbC5rZXkgPT09ICdEZWxldGUnO1xuICAgICAgdmFsdWUgPSBfdGhpczIudmFsdWU7XG4gICAgICBzZWxlY3Rpb24gPSBfdGhpczIuYmFja3NwYWNlT3JEZWxldGVSZW1vdmFsLnNlbGVjdGlvbjtcbiAgICAgIGN1cnNvclBvcyA9IHNlbGVjdGlvbi5zdGFydDtcblxuICAgICAgX3RoaXMyLmJhY2tzcGFjZU9yRGVsZXRlUmVtb3ZhbCA9IG51bGw7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlID0gKDAsIF9zdHJpbmcuY2xlYXJSYW5nZSkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSwgc2VsZWN0aW9uLnN0YXJ0LCBzZWxlY3Rpb24ubGVuZ3RoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uLnN0YXJ0IDwgcHJlZml4Lmxlbmd0aCB8fCAhZGVsZXRlRnJvbVJpZ2h0ICYmIHNlbGVjdGlvbi5zdGFydCA9PT0gcHJlZml4Lmxlbmd0aCkge1xuICAgICAgICBjdXJzb3JQb3MgPSBwcmVmaXgubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGVkaXRhYmxlUG9zID0gZGVsZXRlRnJvbVJpZ2h0ID8gX3RoaXMyLmdldFJpZ2h0RWRpdGFibGVQb3MoY3Vyc29yUG9zKSA6IF90aGlzMi5nZXRMZWZ0RWRpdGFibGVQb3MoY3Vyc29yUG9zIC0gMSk7XG5cbiAgICAgICAgaWYgKGVkaXRhYmxlUG9zICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFsdWUgPSAoMCwgX3N0cmluZy5jbGVhclJhbmdlKShfdGhpczIubWFza09wdGlvbnMsIHZhbHVlLCBlZGl0YWJsZVBvcywgMSk7XG4gICAgICAgICAgY3Vyc29yUG9zID0gZWRpdGFibGVQb3M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlTGVuID4gb2xkVmFsdWVMZW4pIHtcbiAgICAgIHZhciBlbnRlcmVkU3RyaW5nTGVuID0gdmFsdWVMZW4gLSBvbGRWYWx1ZUxlbjtcbiAgICAgIHZhciBzdGFydFBvcyA9IHNlbGVjdGlvbi5lbmQgLSBlbnRlcmVkU3RyaW5nTGVuO1xuICAgICAgZW50ZXJlZFN0cmluZyA9IHZhbHVlLnN1YnN0cihzdGFydFBvcywgZW50ZXJlZFN0cmluZ0xlbik7XG5cbiAgICAgIGlmIChzdGFydFBvcyA8IGxhc3RFZGl0YWJsZVBvcyAmJiAoZW50ZXJlZFN0cmluZ0xlbiAhPT0gMSB8fCBlbnRlcmVkU3RyaW5nICE9PSBtYXNrW3N0YXJ0UG9zXSkpIHtcbiAgICAgICAgY3Vyc29yUG9zID0gX3RoaXMyLmdldFJpZ2h0RWRpdGFibGVQb3Moc3RhcnRQb3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3Vyc29yUG9zID0gc3RhcnRQb3M7XG4gICAgICB9XG5cbiAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIHN0YXJ0UG9zKSArIHZhbHVlLnN1YnN0cihzdGFydFBvcyArIGVudGVyZWRTdHJpbmdMZW4pO1xuXG4gICAgICBjbGVhcmVkVmFsdWUgPSAoMCwgX3N0cmluZy5jbGVhclJhbmdlKShfdGhpczIubWFza09wdGlvbnMsIHZhbHVlLCBzdGFydFBvcywgbWFza0xlbiAtIHN0YXJ0UG9zKTtcbiAgICAgIGNsZWFyZWRWYWx1ZSA9ICgwLCBfc3RyaW5nLmluc2VydFN0cmluZykoX3RoaXMyLm1hc2tPcHRpb25zLCBjbGVhcmVkVmFsdWUsIGVudGVyZWRTdHJpbmcsIGN1cnNvclBvcyk7XG5cbiAgICAgIHZhbHVlID0gKDAsIF9zdHJpbmcuaW5zZXJ0U3RyaW5nKShfdGhpczIubWFza09wdGlvbnMsIG9sZFZhbHVlLCBlbnRlcmVkU3RyaW5nLCBjdXJzb3JQb3MpO1xuXG4gICAgICBpZiAoZW50ZXJlZFN0cmluZ0xlbiAhPT0gMSB8fCBjdXJzb3JQb3MgPj0gcHJlZml4Lmxlbmd0aCAmJiBjdXJzb3JQb3MgPCBsYXN0RWRpdGFibGVQb3MpIHtcbiAgICAgICAgY3Vyc29yUG9zID0gTWF0aC5tYXgoKDAsIF9zdHJpbmcuZ2V0RmlsbGVkTGVuZ3RoKShfdGhpczIubWFza09wdGlvbnMsIGNsZWFyZWRWYWx1ZSksIGN1cnNvclBvcyk7XG4gICAgICAgIGlmIChjdXJzb3JQb3MgPCBsYXN0RWRpdGFibGVQb3MpIHtcbiAgICAgICAgICBjdXJzb3JQb3MgPSBfdGhpczIuZ2V0UmlnaHRFZGl0YWJsZVBvcyhjdXJzb3JQb3MpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGN1cnNvclBvcyA8IGxhc3RFZGl0YWJsZVBvcykge1xuICAgICAgICBjdXJzb3JQb3MrKztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlTGVuIDwgb2xkVmFsdWVMZW4pIHtcbiAgICAgIHZhciByZW1vdmVkTGVuID0gbWFza0xlbiAtIHZhbHVlTGVuO1xuICAgICAgZW50ZXJlZFN0cmluZyA9IHZhbHVlLnN1YnN0cigwLCBzZWxlY3Rpb24uZW5kKTtcbiAgICAgIHZhciBjbGVhck9ubHkgPSBlbnRlcmVkU3RyaW5nID09PSBvbGRWYWx1ZS5zdWJzdHIoMCwgc2VsZWN0aW9uLmVuZCk7XG5cbiAgICAgIGNsZWFyZWRWYWx1ZSA9ICgwLCBfc3RyaW5nLmNsZWFyUmFuZ2UpKF90aGlzMi5tYXNrT3B0aW9ucywgb2xkVmFsdWUsIHNlbGVjdGlvbi5lbmQsIHJlbW92ZWRMZW4pO1xuXG4gICAgICBpZiAobWFza0NoYXIpIHtcbiAgICAgICAgdmFsdWUgPSAoMCwgX3N0cmluZy5pbnNlcnRTdHJpbmcpKF90aGlzMi5tYXNrT3B0aW9ucywgY2xlYXJlZFZhbHVlLCBlbnRlcmVkU3RyaW5nLCAwKTtcbiAgICAgIH1cblxuICAgICAgY2xlYXJlZFZhbHVlID0gKDAsIF9zdHJpbmcuY2xlYXJSYW5nZSkoX3RoaXMyLm1hc2tPcHRpb25zLCBjbGVhcmVkVmFsdWUsIHNlbGVjdGlvbi5lbmQsIG1hc2tMZW4gLSBzZWxlY3Rpb24uZW5kKTtcbiAgICAgIGNsZWFyZWRWYWx1ZSA9ICgwLCBfc3RyaW5nLmluc2VydFN0cmluZykoX3RoaXMyLm1hc2tPcHRpb25zLCBjbGVhcmVkVmFsdWUsIGVudGVyZWRTdHJpbmcsIDApO1xuXG4gICAgICBpZiAoIWNsZWFyT25seSkge1xuICAgICAgICBjdXJzb3JQb3MgPSBNYXRoLm1heCgoMCwgX3N0cmluZy5nZXRGaWxsZWRMZW5ndGgpKF90aGlzMi5tYXNrT3B0aW9ucywgY2xlYXJlZFZhbHVlKSwgY3Vyc29yUG9zKTtcbiAgICAgICAgaWYgKGN1cnNvclBvcyA8IGxhc3RFZGl0YWJsZVBvcykge1xuICAgICAgICAgIGN1cnNvclBvcyA9IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKGN1cnNvclBvcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY3Vyc29yUG9zIDwgcHJlZml4Lmxlbmd0aCkge1xuICAgICAgICBjdXJzb3JQb3MgPSBwcmVmaXgubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZSA9ICgwLCBfc3RyaW5nLmZvcm1hdFZhbHVlKShfdGhpczIubWFza09wdGlvbnMsIHZhbHVlKTtcblxuICAgIF90aGlzMi5zZXRJbnB1dFZhbHVlKHZhbHVlKTtcblxuICAgIGlmICh0eXBlb2YgX3RoaXMyLnByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBfdGhpczIucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChfdGhpczIuaXNXaW5kb3dzUGhvbmVCcm93c2VyKSB7XG4gICAgICAoMCwgX2RlZmVyMi5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5zZXRTZWxlY3Rpb24oY3Vyc29yUG9zLCAwKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpczIuc2V0Q3Vyc29yUG9zKGN1cnNvclBvcyk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25Gb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIF90aGlzMi5mb2N1c2VkID0gdHJ1ZTtcblxuICAgIGlmIChfdGhpczIubWFza09wdGlvbnMubWFzaykge1xuICAgICAgaWYgKCFfdGhpczIudmFsdWUpIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IF90aGlzMi5tYXNrT3B0aW9ucy5wcmVmaXg7XG4gICAgICAgIHZhciB2YWx1ZSA9ICgwLCBfc3RyaW5nLmZvcm1hdFZhbHVlKShfdGhpczIubWFza09wdGlvbnMsIHByZWZpeCk7XG4gICAgICAgIHZhciBpbnB1dFZhbHVlID0gKDAsIF9zdHJpbmcuZm9ybWF0VmFsdWUpKF90aGlzMi5tYXNrT3B0aW9ucywgdmFsdWUpO1xuXG4gICAgICAgIC8vIGRvIG5vdCB1c2UgdGhpcy5nZXRJbnB1dFZhbHVlIGFuZCB0aGlzLnNldElucHV0VmFsdWUgYXMgdGhpcy5pbnB1dFxuICAgICAgICAvLyBjYW4gYmUgdW5kZWZpbmVkIGF0IHRoaXMgbW9tZW50IGlmIGF1dG9Gb2N1cyBhdHRyaWJ1dGUgaXMgc2V0XG4gICAgICAgIHZhciBpc0lucHV0VmFsdWVDaGFuZ2VkID0gaW5wdXRWYWx1ZSAhPT0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmIChpc0lucHV0VmFsdWVDaGFuZ2VkKSB7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzMi52YWx1ZSA9IGlucHV0VmFsdWU7XG5cbiAgICAgICAgaWYgKGlzSW5wdXRWYWx1ZUNoYW5nZWQgJiYgdHlwZW9mIF90aGlzMi5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIuc2V0Q3Vyc29yVG9FbmQoKTtcbiAgICAgIH0gZWxzZSBpZiAoKDAsIF9zdHJpbmcuZ2V0RmlsbGVkTGVuZ3RoKShfdGhpczIubWFza09wdGlvbnMsIF90aGlzMi52YWx1ZSkgPCBfdGhpczIubWFza09wdGlvbnMubWFzay5sZW5ndGgpIHtcbiAgICAgICAgX3RoaXMyLnNldEN1cnNvclRvRW5kKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfdGhpczIucHJvcHMub25Gb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgX3RoaXMyLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uQmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIF90aGlzMi5mb2N1c2VkID0gZmFsc2U7XG5cbiAgICBpZiAoX3RoaXMyLm1hc2tPcHRpb25zLm1hc2sgJiYgIV90aGlzMi5wcm9wcy5hbHdheXNTaG93TWFzayAmJiAoMCwgX3N0cmluZy5pc0VtcHR5KShfdGhpczIubWFza09wdGlvbnMsIF90aGlzMi52YWx1ZSkpIHtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gJyc7XG4gICAgICB2YXIgaXNJbnB1dFZhbHVlQ2hhbmdlZCA9IGlucHV0VmFsdWUgIT09IF90aGlzMi5nZXRJbnB1dFZhbHVlKCk7XG5cbiAgICAgIGlmIChpc0lucHV0VmFsdWVDaGFuZ2VkKSB7XG4gICAgICAgIF90aGlzMi5zZXRJbnB1dFZhbHVlKGlucHV0VmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNJbnB1dFZhbHVlQ2hhbmdlZCAmJiB0eXBlb2YgX3RoaXMyLnByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfdGhpczIucHJvcHMub25CbHVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBfdGhpczIucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vblBhc3RlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKHR5cGVvZiBfdGhpczIucHJvcHMub25QYXN0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgX3RoaXMyLnByb3BzLm9uUGFzdGUoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChfdGhpczIuaXNBbmRyb2lkQnJvd3NlciAmJiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgX3RoaXMyLnBhc3RlID0ge1xuICAgICAgICB2YWx1ZTogX3RoaXMyLmdldElucHV0VmFsdWUoKSxcbiAgICAgICAgc2VsZWN0aW9uOiBfdGhpczIuZ2V0U2VsZWN0aW9uKClcbiAgICAgIH07XG4gICAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZSgnJyk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMucGFzdGVUZXh0ID0gZnVuY3Rpb24gKHZhbHVlLCB0ZXh0LCBzZWxlY3Rpb24sIGV2ZW50KSB7XG4gICAgdmFyIGN1cnNvclBvcyA9IHNlbGVjdGlvbi5zdGFydDtcbiAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgdmFsdWUgPSAoMCwgX3N0cmluZy5jbGVhclJhbmdlKShfdGhpczIubWFza09wdGlvbnMsIHZhbHVlLCBjdXJzb3JQb3MsIHNlbGVjdGlvbi5sZW5ndGgpO1xuICAgIH1cbiAgICB2YXIgdGV4dExlbiA9ICgwLCBfc3RyaW5nLmdldEluc2VydFN0cmluZ0xlbmd0aCkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSwgdGV4dCwgY3Vyc29yUG9zKTtcbiAgICB2YWx1ZSA9ICgwLCBfc3RyaW5nLmluc2VydFN0cmluZykoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSwgdGV4dCwgY3Vyc29yUG9zKTtcbiAgICBjdXJzb3JQb3MgKz0gdGV4dExlbjtcbiAgICBjdXJzb3JQb3MgPSBfdGhpczIuZ2V0UmlnaHRFZGl0YWJsZVBvcyhjdXJzb3JQb3MpIHx8IGN1cnNvclBvcztcblxuICAgIGlmICh2YWx1ZSAhPT0gX3RoaXMyLmdldElucHV0VmFsdWUoKSkge1xuICAgICAgX3RoaXMyLnNldElucHV0VmFsdWUodmFsdWUpO1xuICAgICAgaWYgKGV2ZW50ICYmIHR5cGVvZiBfdGhpczIucHJvcHMub25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfdGhpczIuc2V0Q3Vyc29yUG9zKGN1cnNvclBvcyk7XG4gIH07XG5cbiAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9wcm9wcyA9IF90aGlzMi5wcm9wcyxcbiAgICAgICAgbWFzayA9IF9wcm9wcy5tYXNrLFxuICAgICAgICBhbHdheXNTaG93TWFzayA9IF9wcm9wcy5hbHdheXNTaG93TWFzayxcbiAgICAgICAgbWFza0NoYXIgPSBfcHJvcHMubWFza0NoYXIsXG4gICAgICAgIGZvcm1hdENoYXJzID0gX3Byb3BzLmZvcm1hdENoYXJzLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnbWFzaycsICdhbHdheXNTaG93TWFzaycsICdtYXNrQ2hhcicsICdmb3JtYXRDaGFycyddKTtcblxuICAgIGlmIChfdGhpczIubWFza09wdGlvbnMubWFzaykge1xuICAgICAgaWYgKCFwcm9wcy5kaXNhYmxlZCAmJiAhcHJvcHMucmVhZE9ubHkpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzS2V5cyA9IFsnb25DaGFuZ2UnLCAnb25LZXlEb3duJywgJ29uUGFzdGUnXTtcbiAgICAgICAgaGFuZGxlcnNLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHByb3BzW2tleV0gPSBfdGhpczJba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHByb3BzLnZhbHVlID0gX3RoaXMyLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7IHJlZjogZnVuY3Rpb24gcmVmKF9yZWYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5pbnB1dCA9IF9yZWY7XG4gICAgICB9IH0sIHByb3BzLCB7IG9uRm9jdXM6IF90aGlzMi5vbkZvY3VzLCBvbkJsdXI6IF90aGlzMi5vbkJsdXIgfSkpO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXRFbGVtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG1hc2ssIG1hc2tDaGFyLCBjaGFyc1J1bGVzKSB7XG4gIGlmIChtYXNrQ2hhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWFza0NoYXIgPSBfY29uc3RhbnRzLmRlZmF1bHRNYXNrQ2hhcjtcbiAgfVxuICBpZiAoY2hhcnNSdWxlcyA9PSBudWxsKSB7XG4gICAgY2hhcnNSdWxlcyA9IF9jb25zdGFudHMuZGVmYXVsdENoYXJzUnVsZXM7XG4gIH1cblxuICBpZiAoIW1hc2sgfHwgdHlwZW9mIG1hc2sgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hc2tDaGFyOiBtYXNrQ2hhcixcbiAgICAgIGNoYXJzUnVsZXM6IGNoYXJzUnVsZXMsXG4gICAgICBtYXNrOiBudWxsLFxuICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgbGFzdEVkaXRhYmxlUG9zOiBudWxsLFxuICAgICAgcGVybWFuZW50czogW11cbiAgICB9O1xuICB9XG4gIHZhciBzdHIgPSAnJztcbiAgdmFyIHByZWZpeCA9ICcnO1xuICB2YXIgcGVybWFuZW50cyA9IFtdO1xuICB2YXIgaXNQZXJtYW5lbnQgPSBmYWxzZTtcbiAgdmFyIGxhc3RFZGl0YWJsZVBvcyA9IG51bGw7XG5cbiAgbWFzay5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoY2hhcmFjdGVyKSB7XG4gICAgaWYgKCFpc1Blcm1hbmVudCAmJiBjaGFyYWN0ZXIgPT09ICdcXFxcJykge1xuICAgICAgaXNQZXJtYW5lbnQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNQZXJtYW5lbnQgfHwgIWNoYXJzUnVsZXNbY2hhcmFjdGVyXSkge1xuICAgICAgICBwZXJtYW5lbnRzLnB1c2goc3RyLmxlbmd0aCk7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID09PSBwZXJtYW5lbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBwcmVmaXggKz0gY2hhcmFjdGVyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0RWRpdGFibGVQb3MgPSBzdHIubGVuZ3RoICsgMTtcbiAgICAgIH1cbiAgICAgIHN0ciArPSBjaGFyYWN0ZXI7XG4gICAgICBpc1Blcm1hbmVudCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBtYXNrQ2hhcjogbWFza0NoYXIsXG4gICAgY2hhcnNSdWxlczogY2hhcnNSdWxlcyxcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICBtYXNrOiBzdHIsXG4gICAgbGFzdEVkaXRhYmxlUG9zOiBsYXN0RWRpdGFibGVQb3MsXG4gICAgcGVybWFuZW50czogcGVybWFuZW50c1xuICB9O1xufTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9saWIvdXRpbHMvcGFyc2VNYXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgZGVmYXVsdENoYXJzUnVsZXMgPSBleHBvcnRzLmRlZmF1bHRDaGFyc1J1bGVzID0ge1xuICAnOSc6ICdbMC05XScsXG4gICdhJzogJ1tBLVphLXpdJyxcbiAgJyonOiAnW0EtWmEtejAtOV0nXG59O1xuXG52YXIgZGVmYXVsdE1hc2tDaGFyID0gZXhwb3J0cy5kZWZhdWx0TWFza0NoYXIgPSAnXyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9saWIvY29uc3RhbnRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzQW5kcm9pZEJyb3dzZXIgPSBpc0FuZHJvaWRCcm93c2VyO1xuZXhwb3J0cy5pc1dpbmRvd3NQaG9uZUJyb3dzZXIgPSBpc1dpbmRvd3NQaG9uZUJyb3dzZXI7XG5leHBvcnRzLmlzQW5kcm9pZEZpcmVmb3ggPSBpc0FuZHJvaWRGaXJlZm94O1xuZXhwb3J0cy5pc0lPUyA9IGlzSU9TO1xuZnVuY3Rpb24gaXNBbmRyb2lkQnJvd3NlcigpIHtcbiAgdmFyIHdpbmRvd3MgPSBuZXcgUmVnRXhwKCd3aW5kb3dzJywgJ2knKTtcbiAgdmFyIGZpcmVmb3ggPSBuZXcgUmVnRXhwKCdmaXJlZm94JywgJ2knKTtcbiAgdmFyIGFuZHJvaWQgPSBuZXcgUmVnRXhwKCdhbmRyb2lkJywgJ2knKTtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuICF3aW5kb3dzLnRlc3QodWEpICYmICFmaXJlZm94LnRlc3QodWEpICYmIGFuZHJvaWQudGVzdCh1YSk7XG59XG5cbmZ1bmN0aW9uIGlzV2luZG93c1Bob25lQnJvd3NlcigpIHtcbiAgdmFyIHdpbmRvd3MgPSBuZXcgUmVnRXhwKCd3aW5kb3dzJywgJ2knKTtcbiAgdmFyIHBob25lID0gbmV3IFJlZ0V4cCgncGhvbmUnLCAnaScpO1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4gd2luZG93cy50ZXN0KHVhKSAmJiBwaG9uZS50ZXN0KHVhKTtcbn1cblxuZnVuY3Rpb24gaXNBbmRyb2lkRmlyZWZveCgpIHtcbiAgdmFyIHdpbmRvd3MgPSBuZXcgUmVnRXhwKCd3aW5kb3dzJywgJ2knKTtcbiAgdmFyIGZpcmVmb3ggPSBuZXcgUmVnRXhwKCdmaXJlZm94JywgJ2knKTtcbiAgdmFyIGFuZHJvaWQgPSBuZXcgUmVnRXhwKCdhbmRyb2lkJywgJ2knKTtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuICF3aW5kb3dzLnRlc3QodWEpICYmIGZpcmVmb3gudGVzdCh1YSkgJiYgYW5kcm9pZC50ZXN0KHVhKTtcbn1cblxuZnVuY3Rpb24gaXNJT1MoKSB7XG4gIHZhciB3aW5kb3dzID0gbmV3IFJlZ0V4cCgnd2luZG93cycsICdpJyk7XG4gIHZhciBpb3MgPSBuZXcgUmVnRXhwKCcoaXBvZHxpcGhvbmV8aXBhZCknLCAnaScpO1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4gIXdpbmRvd3MudGVzdCh1YSkgJiYgaW9zLnRlc3QodWEpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL2Vudmlyb25tZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzUGVybWFuZW50Q2hhciA9IGlzUGVybWFuZW50Q2hhcjtcbmV4cG9ydHMuaXNBbGxvd2VkQ2hhciA9IGlzQWxsb3dlZENoYXI7XG5leHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuZXhwb3J0cy5nZXRGaWxsZWRMZW5ndGggPSBnZXRGaWxsZWRMZW5ndGg7XG5leHBvcnRzLmlzRmlsbGVkID0gaXNGaWxsZWQ7XG5leHBvcnRzLmZvcm1hdFZhbHVlID0gZm9ybWF0VmFsdWU7XG5leHBvcnRzLmNsZWFyUmFuZ2UgPSBjbGVhclJhbmdlO1xuZXhwb3J0cy5pbnNlcnRTdHJpbmcgPSBpbnNlcnRTdHJpbmc7XG5leHBvcnRzLmdldEluc2VydFN0cmluZ0xlbmd0aCA9IGdldEluc2VydFN0cmluZ0xlbmd0aDtcbmZ1bmN0aW9uIGlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgcG9zKSB7XG4gIHJldHVybiBtYXNrT3B0aW9ucy5wZXJtYW5lbnRzLmluZGV4T2YocG9zKSAhPT0gLTE7XG59XG5cbmZ1bmN0aW9uIGlzQWxsb3dlZENoYXIobWFza09wdGlvbnMsIHBvcywgY2hhcmFjdGVyKSB7XG4gIHZhciBtYXNrID0gbWFza09wdGlvbnMubWFzayxcbiAgICAgIGNoYXJzUnVsZXMgPSBtYXNrT3B0aW9ucy5jaGFyc1J1bGVzO1xuXG5cbiAgaWYgKCFjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNQZXJtYW5lbnRDaGFyKG1hc2tPcHRpb25zLCBwb3MpKSB7XG4gICAgcmV0dXJuIG1hc2tbcG9zXSA9PT0gY2hhcmFjdGVyO1xuICB9XG5cbiAgdmFyIHJ1bGVDaGFyID0gbWFza1twb3NdO1xuICB2YXIgY2hhclJ1bGUgPSBjaGFyc1J1bGVzW3J1bGVDaGFyXTtcblxuICByZXR1cm4gbmV3IFJlZ0V4cChjaGFyUnVsZSkudGVzdChjaGFyYWN0ZXIpO1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5KG1hc2tPcHRpb25zLCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoJycpLmV2ZXJ5KGZ1bmN0aW9uIChjaGFyYWN0ZXIsIGkpIHtcbiAgICByZXR1cm4gaXNQZXJtYW5lbnRDaGFyKG1hc2tPcHRpb25zLCBpKSB8fCAhaXNBbGxvd2VkQ2hhcihtYXNrT3B0aW9ucywgaSwgY2hhcmFjdGVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEZpbGxlZExlbmd0aChtYXNrT3B0aW9ucywgdmFsdWUpIHtcbiAgdmFyIG1hc2tDaGFyID0gbWFza09wdGlvbnMubWFza0NoYXIsXG4gICAgICBwcmVmaXggPSBtYXNrT3B0aW9ucy5wcmVmaXg7XG5cblxuICBpZiAoIW1hc2tDaGFyKSB7XG4gICAgd2hpbGUgKHZhbHVlLmxlbmd0aCA+IHByZWZpeC5sZW5ndGggJiYgaXNQZXJtYW5lbnRDaGFyKG1hc2tPcHRpb25zLCB2YWx1ZS5sZW5ndGggLSAxKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCB2YWx1ZS5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aDtcbiAgfVxuXG4gIHZhciBmaWxsZWRMZW5ndGggPSBwcmVmaXgubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gdmFsdWUubGVuZ3RoOyBpID49IHByZWZpeC5sZW5ndGg7IGktLSkge1xuICAgIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZVtpXTtcbiAgICB2YXIgaXNFbnRlcmVkQ2hhcmFjdGVyID0gIWlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgaSkgJiYgaXNBbGxvd2VkQ2hhcihtYXNrT3B0aW9ucywgaSwgY2hhcmFjdGVyKTtcbiAgICBpZiAoaXNFbnRlcmVkQ2hhcmFjdGVyKSB7XG4gICAgICBmaWxsZWRMZW5ndGggPSBpICsgMTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWxsZWRMZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGlzRmlsbGVkKG1hc2tPcHRpb25zLCB2YWx1ZSkge1xuICByZXR1cm4gZ2V0RmlsbGVkTGVuZ3RoKG1hc2tPcHRpb25zLCB2YWx1ZSkgPT09IG1hc2tPcHRpb25zLm1hc2subGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShtYXNrT3B0aW9ucywgdmFsdWUpIHtcbiAgdmFyIG1hc2tDaGFyID0gbWFza09wdGlvbnMubWFza0NoYXIsXG4gICAgICBtYXNrID0gbWFza09wdGlvbnMubWFzayxcbiAgICAgIHByZWZpeCA9IG1hc2tPcHRpb25zLnByZWZpeDtcblxuXG4gIGlmICghbWFza0NoYXIpIHtcbiAgICB2YWx1ZSA9IGluc2VydFN0cmluZyhtYXNrT3B0aW9ucywgJycsIHZhbHVlLCAwKTtcbiAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGdldEZpbGxlZExlbmd0aChtYXNrT3B0aW9ucywgdmFsdWUpKTtcblxuICAgIGlmICh2YWx1ZS5sZW5ndGggPCBwcmVmaXgubGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IHByZWZpeDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAodmFsdWUpIHtcbiAgICB2YXIgZW1wdHlWYWx1ZSA9IGZvcm1hdFZhbHVlKG1hc2tPcHRpb25zLCAnJyk7XG4gICAgcmV0dXJuIGluc2VydFN0cmluZyhtYXNrT3B0aW9ucywgZW1wdHlWYWx1ZSwgdmFsdWUsIDApO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgaSkpIHtcbiAgICAgIHZhbHVlICs9IG1hc2tbaV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IG1hc2tDaGFyO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2xlYXJSYW5nZShtYXNrT3B0aW9ucywgdmFsdWUsIHN0YXJ0LCBsZW4pIHtcbiAgdmFyIGVuZCA9IHN0YXJ0ICsgbGVuO1xuICB2YXIgbWFza0NoYXIgPSBtYXNrT3B0aW9ucy5tYXNrQ2hhcixcbiAgICAgIG1hc2sgPSBtYXNrT3B0aW9ucy5tYXNrLFxuICAgICAgcHJlZml4ID0gbWFza09wdGlvbnMucHJlZml4O1xuXG4gIHZhciBhcnJheVZhbHVlID0gdmFsdWUuc3BsaXQoJycpO1xuXG4gIGlmICghbWFza0NoYXIpIHtcbiAgICBzdGFydCA9IE1hdGgubWF4KHByZWZpeC5sZW5ndGgsIHN0YXJ0KTtcbiAgICBhcnJheVZhbHVlLnNwbGljZShzdGFydCwgZW5kIC0gc3RhcnQpO1xuICAgIHZhbHVlID0gYXJyYXlWYWx1ZS5qb2luKCcnKTtcblxuICAgIHJldHVybiBmb3JtYXRWYWx1ZShtYXNrT3B0aW9ucywgdmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5VmFsdWUubWFwKGZ1bmN0aW9uIChjaGFyYWN0ZXIsIGkpIHtcbiAgICBpZiAoaSA8IHN0YXJ0IHx8IGkgPj0gZW5kKSB7XG4gICAgICByZXR1cm4gY2hhcmFjdGVyO1xuICAgIH1cbiAgICBpZiAoaXNQZXJtYW5lbnRDaGFyKG1hc2tPcHRpb25zLCBpKSkge1xuICAgICAgcmV0dXJuIG1hc2tbaV07XG4gICAgfVxuICAgIHJldHVybiBtYXNrQ2hhcjtcbiAgfSkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0cmluZyhtYXNrT3B0aW9ucywgdmFsdWUsIGluc2VydFN0ciwgaW5zZXJ0UG9zKSB7XG4gIHZhciBtYXNrID0gbWFza09wdGlvbnMubWFzayxcbiAgICAgIG1hc2tDaGFyID0gbWFza09wdGlvbnMubWFza0NoYXIsXG4gICAgICBwcmVmaXggPSBtYXNrT3B0aW9ucy5wcmVmaXg7XG5cbiAgdmFyIGFycmF5SW5zZXJ0U3RyID0gaW5zZXJ0U3RyLnNwbGl0KCcnKTtcbiAgdmFyIGlzSW5wdXRGaWxsZWQgPSBpc0ZpbGxlZChtYXNrT3B0aW9ucywgdmFsdWUpO1xuXG4gIHZhciBpc1VzYWJsZVBvc2l0aW9uID0gZnVuY3Rpb24gaXNVc2FibGVQb3NpdGlvbihwb3MsIGNoYXJhY3Rlcikge1xuICAgIHJldHVybiAhaXNQZXJtYW5lbnRDaGFyKG1hc2tPcHRpb25zLCBwb3MpIHx8IGNoYXJhY3RlciA9PT0gbWFza1twb3NdO1xuICB9O1xuICB2YXIgaXNVc2FibGVDaGFyYWN0ZXIgPSBmdW5jdGlvbiBpc1VzYWJsZUNoYXJhY3RlcihjaGFyYWN0ZXIsIHBvcykge1xuICAgIHJldHVybiAhbWFza0NoYXIgfHwgIWlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgcG9zKSB8fCBjaGFyYWN0ZXIgIT09IG1hc2tDaGFyO1xuICB9O1xuXG4gIGlmICghbWFza0NoYXIgJiYgaW5zZXJ0UG9zID4gdmFsdWUubGVuZ3RoKSB7XG4gICAgdmFsdWUgKz0gbWFzay5zbGljZSh2YWx1ZS5sZW5ndGgsIGluc2VydFBvcyk7XG4gIH1cblxuICBhcnJheUluc2VydFN0ci5ldmVyeShmdW5jdGlvbiAoaW5zZXJ0Q2hhcmFjdGVyKSB7XG4gICAgd2hpbGUgKCFpc1VzYWJsZVBvc2l0aW9uKGluc2VydFBvcywgaW5zZXJ0Q2hhcmFjdGVyKSkge1xuICAgICAgaWYgKGluc2VydFBvcyA+PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgKz0gbWFza1tpbnNlcnRQb3NdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzVXNhYmxlQ2hhcmFjdGVyKGluc2VydENoYXJhY3RlciwgaW5zZXJ0UG9zKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaW5zZXJ0UG9zKys7XG5cbiAgICAgIC8vIHN0b3AgaXRlcmF0aW9uIGlmIG1heGltdW0gdmFsdWUgbGVuZ3RoIHJlYWNoZWRcbiAgICAgIGlmIChpbnNlcnRQb3MgPj0gbWFzay5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpc0FsbG93ZWQgPSBpc0FsbG93ZWRDaGFyKG1hc2tPcHRpb25zLCBpbnNlcnRQb3MsIGluc2VydENoYXJhY3RlcikgfHwgaW5zZXJ0Q2hhcmFjdGVyID09PSBtYXNrQ2hhcjtcbiAgICBpZiAoIWlzQWxsb3dlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGluc2VydFBvcyA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgaWYgKG1hc2tDaGFyIHx8IGlzSW5wdXRGaWxsZWQgfHwgaW5zZXJ0UG9zIDwgcHJlZml4Lmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGluc2VydFBvcykgKyBpbnNlcnRDaGFyYWN0ZXIgKyB2YWx1ZS5zbGljZShpbnNlcnRQb3MgKyAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgaW5zZXJ0UG9zKSArIGluc2VydENoYXJhY3RlciArIHZhbHVlLnNsaWNlKGluc2VydFBvcyk7XG4gICAgICAgIHZhbHVlID0gZm9ybWF0VmFsdWUobWFza09wdGlvbnMsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFtYXNrQ2hhcikge1xuICAgICAgdmFsdWUgKz0gaW5zZXJ0Q2hhcmFjdGVyO1xuICAgIH1cblxuICAgIGluc2VydFBvcysrO1xuXG4gICAgLy8gc3RvcCBpdGVyYXRpb24gaWYgbWF4aW11bSB2YWx1ZSBsZW5ndGggcmVhY2hlZFxuICAgIHJldHVybiBpbnNlcnRQb3MgPCBtYXNrLmxlbmd0aDtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRJbnNlcnRTdHJpbmdMZW5ndGgobWFza09wdGlvbnMsIHZhbHVlLCBpbnNlcnRTdHIsIGluc2VydFBvcykge1xuICB2YXIgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyO1xuXG4gIHZhciBhcnJheUluc2VydFN0ciA9IGluc2VydFN0ci5zcGxpdCgnJyk7XG4gIHZhciBpbml0aWFsSW5zZXJ0UG9zID0gaW5zZXJ0UG9zO1xuXG4gIHZhciBpc1VzYWJsZVBvc2l0aW9uID0gZnVuY3Rpb24gaXNVc2FibGVQb3NpdGlvbihwb3MsIGNoYXJhY3Rlcikge1xuICAgIHJldHVybiAhaXNQZXJtYW5lbnRDaGFyKG1hc2tPcHRpb25zLCBwb3MpIHx8IGNoYXJhY3RlciA9PT0gbWFza1twb3NdO1xuICB9O1xuXG4gIGFycmF5SW5zZXJ0U3RyLmV2ZXJ5KGZ1bmN0aW9uIChpbnNlcnRDaGFyYWN0ZXIpIHtcbiAgICB3aGlsZSAoIWlzVXNhYmxlUG9zaXRpb24oaW5zZXJ0UG9zLCBpbnNlcnRDaGFyYWN0ZXIpKSB7XG4gICAgICBpbnNlcnRQb3MrKztcblxuICAgICAgLy8gc3RvcCBpdGVyYXRpb24gaWYgbWF4aW11bSB2YWx1ZSBsZW5ndGggcmVhY2hlZFxuICAgICAgaWYgKGluc2VydFBvcyA+PSBtYXNrLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGlzQWxsb3dlZCA9IGlzQWxsb3dlZENoYXIobWFza09wdGlvbnMsIGluc2VydFBvcywgaW5zZXJ0Q2hhcmFjdGVyKSB8fCBpbnNlcnRDaGFyYWN0ZXIgPT09IG1hc2tDaGFyO1xuXG4gICAgaWYgKGlzQWxsb3dlZCkge1xuICAgICAgaW5zZXJ0UG9zKys7XG4gICAgfVxuXG4gICAgLy8gc3RvcCBpdGVyYXRpb24gaWYgbWF4aW11bSB2YWx1ZSBsZW5ndGggcmVhY2hlZFxuICAgIHJldHVybiBpbnNlcnRQb3MgPCBtYXNrLmxlbmd0aDtcbiAgfSk7XG5cbiAgcmV0dXJuIGluc2VydFBvcyAtIGluaXRpYWxJbnNlcnRQb3M7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9saWIvdXRpbHMvc3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgdmFyIGRlZmVyID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlZmVyKGZuKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9saWIvdXRpbHMvZGVmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIFByb3NwZWN0QWN0aW9uVHlwZSBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUHJvc3BlY3RSZXF1ZXN0ID0gIChpZDphbnkpID0+ICh7XHJcbiAgICB0eXBlOiBQcm9zcGVjdEFjdGlvblR5cGUuR0VUX1BST1NQRUNUX1JFUVVFU1QsXHJcbiAgICBpZFxyXG59KVxyXG4vKlxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9zcGVjdFN1Y2Nlc3MgPSAgKCkgPT4gKHtcclxuICAgIHR5cGU6IFByb3NwZWN0QWN0aW9uVHlwZS5HRVRfUFJPU1BFQ1RfUkVRVUVTVFxyXG4gICAgXHJcbn0pXHJcbiovXHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9zcGVjdEZhaWxlZCA9ICAoKSA9PiAoe1xyXG4gICAgdHlwZTogUHJvc3BlY3RBY3Rpb25UeXBlLkdFVF9QUk9TUEVDVF9GQUlMRUQgICAgXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9zcGVjdFN1Y2Nlc3MgPSAocHJvc3BlY3Q6YW55KSA9PiAoe1xyXG4gICAgdHlwZTogUHJvc3BlY3RBY3Rpb25UeXBlLkdFVF9QUk9TUEVDVF9TVUNDRVNTLFxyXG4gICAgcHJvc3BlY3RcclxufSlcclxuZXhwb3J0IGNvbnN0IGZldGNoU3RhdGVzUmVxdWVzdCA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBQcm9zcGVjdEFjdGlvblR5cGUuR0VUX1NUQVRFU19SRVFVRVNUICAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU3RhdGVzRmFpbGVkID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IFByb3NwZWN0QWN0aW9uVHlwZS5HRVRfU1RBVEVTX0ZBSUxFRCAgICBcclxufSlcclxuaW50ZXJmYWNlIFN0YXRle1xyXG5Db2RlOnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU3RhdGVzU3VjY2VzcyA9IChzdGF0ZXM6IGFueSkgPT4gKHtcclxuICAgIHR5cGU6IFByb3NwZWN0QWN0aW9uVHlwZS5HRVRfU1RBVEVTX1NVQ0NFU1MsXHJcbiAgICBzdGF0ZXNcclxufSlcclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb3NwZWN0UmVxdWVzdCA9ICgpID0+KHtcclxuICAgIHR5cGU6IFByb3NwZWN0QWN0aW9uVHlwZS5VUERBVEVfUFJPU1BFQ1RfUkVRVUVTVFxyXG59KVxyXG5leHBvcnQgY29uc3Qgb25JbnB1dENoYW5nZSA9IChuYW1lOnN0cmluZyx2YWx1ZTpzdHJpbmcpID0+ICh7XHJcbiAgICB0eXBlOiBQcm9zcGVjdEFjdGlvblR5cGUuT05fSU5QVVRfQ0hBTkdFLFxyXG4gICAgbmFtZSxcclxuICAgIHZhbHVlXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyQmVnaW49ICgpID0+KHtcclxuICAgIHR5cGU6IFByb3NwZWN0QWN0aW9uVHlwZS5MT0FERVJfQkVHSU5cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRBZ2VudENvZGUgPSAoYWdlbnRDb2RlOnN0cmluZykgPT4gKHtcclxuICAgIHR5cGU6IFByb3NwZWN0QWN0aW9uVHlwZS5TRVRfQUdFTlRDT0RFLFxyXG4gICAgYWdlbnRDb2RlXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyQ29tcGxldGUgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogUHJvc3BlY3RBY3Rpb25UeXBlLkxPQURFUl9DT01QTEVURVxyXG59KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9ucy9Qcm9zcGVjdEFjdGlvbi50cyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IG1hcERpc3BhdGNoVG9Qcm9wcyB9IGZyb20gJy4vUGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lcic7XHJcbmltcG9ydCBJbnZlc3RvclByb2ZpbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9zcGVjdENvbXBvbmVudC9JbnZlc3RvclByb2ZpbGVDb21wb25lbnQnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoeyAgICAgICAgICAgXHJcbiAgICBwcmV2aW91c0Z1bmRzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5wcmV2aW91c0Z1bmRzLFxyXG4gICAgRklOUkE6IHN0YXRlLlByb3NwZWN0RGV0YWlsLkZJTlJBLFxyXG4gICAgaW52ZXN0bWVudE9iamVjdGl2ZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuaW52ZXN0bWVudE9iamVjdGl2ZSxcclxuICAgIHJpc2tQcm9maWxlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5yaXNrUHJvZmlsZSxcclxuICAgIGFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5hbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZSxcclxuICAgIG5ldFdvcnRoUmFuZ2U6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm5ldFdvcnRoUmFuZ2UsXHJcbiAgICBsaWZlSW5zdXJhbmNlUmFuZ2U6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmxpZmVJbnN1cmFuY2VSYW5nZSxcclxuICAgIHRheEJyYWNrZXQ6IHN0YXRlLlByb3NwZWN0RGV0YWlsLnRheEJyYWNrZXQsXHJcbiAgICBkZXBlbmRlbnRzTm86IHN0YXRlLlByb3NwZWN0RGV0YWlsLmRlcGVuZGVudHNObyxcclxuICAgIGFnZXM6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmFnZXMsXHJcbiAgICBjdXJyZW50RW1wbG95ZXI6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmN1cnJlbnRFbXBsb3llcixcclxuICAgIGVtcGxveW1lbnRTdGF0dXM6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmVtcGxveW1lbnRTdGF0dXMsXHJcbiAgICBvY2N1cGF0aW9uOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5vY2N1cGF0aW9uLFxyXG4gICAgZW1wbG95ZXJBZGRyZXNzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5lbXBsb3llckFkZHJlc3MsXHJcbiAgICBlbXBsb3llckNpdHk6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmVtcGxveWVyQ2l0eSxcclxuICAgIGVtcGxveWVyU3RhdGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmVtcGxveWVyU3RhdGUsXHJcbiAgICBlbXBsb3llclppcENvZGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmVtcGxveWVyWmlwQ29kZSxcclxuICAgIGhpcmVEYXRlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5oaXJlRGF0ZSxcclxuICAgIGV4cGVjdGVkQW5udWl0eURhdGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmV4cGVjdGVkQW5udWl0eURhdGUsXHJcbiAgICBlbXBsb3llclNhbGFyeTogc3RhdGUuUHJvc3BlY3REZXRhaWwuZW1wbG95ZXJTYWxhcnksXHJcbiAgICBzdGF0ZXM6IHN0YXRlLnN0YXRlc1xyXG4gICAgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgSW52ZXN0b3JQcm9maWxlQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW52ZXN0b3JQcm9maWxlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9JbnZlc3RvclByb2ZpbGVDb250YWluZXIudHMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVmFsaWNJbnB1dCBmcm9tICcuLi8uLi9zaGFyZWQvVmFsaWNJbnB1dENvbXBvbmVudC9WYWxpY0lucHV0Q29tcG9uZW50JztcclxuLypleHBvcnQgaW50ZXJmYWNlIElJbnZlc3RvclByb2ZpbGVQcm9wc3tcclxuLy9zdGF0ZXM/OiBJU3RhdGVbXTtcclxuc3RhdGVzPzogYW55W107XHJcbm9uQ2hhbmdlOiAoKT0+IHZvaWQ7XHJcbnByZXZpb3VzRnVuZHM/OiBzdHJpbmc7XHJcbkZJTlJBPzogc3RyaW5nO1xyXG5pbnZlc3RtZW50T2JqZWN0aXZlPzpzdHJpbmc7XHJcbnJpc2tQcm9maWxlPzpzdHJpbmc7XHJcbmFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlPzpzdHJpbmc7XHJcbm5ldFdvcnRoUmFuZ2U/OnN0cmluZztcclxubGlmZUluc3VyYW5jZVJhbmdlPzogc3RyaW5nO1xyXG50YXhCcmFja2V0PzpzdHJpbmc7XHJcbmRlcGVuZGVudHNObz86c3RyaW5nO1xyXG5hZ2VzPzpzdHJpbmc7XHJcbmN1cnJlbnRFbXBsb3llcj86c3RyaW5nO1xyXG5lbXBsb3ltZW50U3RhdHVzPzpzdHJpbmc7XHJcbm9jY3VwYXRpb24/OnN0cmluZztcclxuZW1wbG95ZXJBZGRyZXNzPzpzdHJpbmc7XHJcbmVtcGxveWVyQ2l0eT86c3RyaW5nO1xyXG5lbXBsb3llclN0YXRlPzpzdHJpbmc7XHJcbmVtcGxveWVyWmlwQ29kZT86c3RyaW5nO1xyXG5lbXBsb3llclNhbGFyeT86c3RyaW5nO1xyXG5oaXJlRGF0ZT86YW55O1xyXG5leHBlY3RlZEFubnVpdHlEYXRlPzphbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRle1xyXG5Db2RlOnN0cmluZztcclxufVxyXG4qL1xyXG5jbGFzcyBJbnZlc3RvclByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQ8YW55LGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVVc2VySW5wdXQgPSB0aGlzLmhhbmRsZVVzZXJJbnB1dC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlVXNlcklucHV0KGUpIHtcclxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIG9uQ2hhbmdlKGUpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7IHN0YXRlcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgc3RhdGVzTGlzdERvd247XHJcbiAgICAgICAgaWYgKHN0YXRlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHN0YXRlc0xpc3REb3duID0gT2JqZWN0LmtleXMoc3RhdGVzKS5tYXAoKGtleSwgaW5kZXgpID0+IHsgcmV0dXJuIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e3N0YXRlc1trZXldLkNvZGV9ID57c3RhdGVzW2tleV0uQ29kZX08L29wdGlvbj4gfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJldmlvdXNGdW5kc1wiPlByZXZpb3VzbHkgcHVyY2hhc2VkIG11dHVhbCBmdW5kcyBvciBvdGhlciBzZWN1cml0aWVzPzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5wcmV2aW91c0Z1bmRzID09PSBcIjFcIn0gbmFtZT1cInByZXZpb3VzRnVuZHNcIiB2YWx1ZT1cIjFcIiAvPlllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiMFwiIG5hbWU9XCJwcmV2aW91c0Z1bmRzXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5wcmV2aW91c0Z1bmRzID09PSBcIjBcIn0gLz5Ob1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJGSU5SQVwiPkVtcGxveWVkIGJ5IG9yIHJlZ2lzdGVyZWQgd2l0aCBhIEZJTlJBIG1lbWJlciBmaXJtPzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIkZJTlJBXCIgdmFsdWU9XCIxXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5GSU5SQSA9PT0gXCIxXCJ9IC8+WWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIkZJTlJBXCIgdmFsdWU9XCIwXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5GSU5SQSA9PT0gXCIwXCJ9IC8+Tm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImludmVzdG1lbnRPYmplY3RpdmVcIj5JbnZlc3RtZW50IE9iamVjdGl2ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImludmVzdG1lbnRPYmplY3RpdmVcIiB2YWx1ZT1cIlNQXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5pbnZlc3RtZW50T2JqZWN0aXZlID09PSBcIlNQXCJ9IC8+U2FmZXR5IG9mIFByaW5jaXBhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJpbnZlc3RtZW50T2JqZWN0aXZlXCIgdmFsdWU9XCJMR1wiIGNoZWNrZWQ9e3RoaXMucHJvcHMuaW52ZXN0bWVudE9iamVjdGl2ZSA9PT0gXCJMR1wifSAvPkxvbmctVGVybSBHcm93dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiaW52ZXN0bWVudE9iamVjdGl2ZVwiIHZhbHVlPVwiSU5cIiBjaGVja2VkPXt0aGlzLnByb3BzLmludmVzdG1lbnRPYmplY3RpdmUgPT09IFwiSU5cIn0gLz5JbmNvbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmlza1Byb2ZpbGVcIj5SaXNrIFByb2ZpbGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJpc2tQcm9maWxlXCIgdmFsdWU9e3RoaXMucHJvcHMucmlza1Byb2ZpbGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhSXCI+SGlnaGVyIFJpc2s8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFHXCI+QWdncmVzc2l2ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUFcIj5Nb2RlcmF0ZWx5IEFnZ3Jlc3NpdmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1EXCI+TW9kZXJhdGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1DXCI+TW9kZXJhdGVseSBDb25zZXJ2YXRpdmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNOXCI+Q29uc2VydmF0aXZlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDQVwiPkNhdXRpb3VzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4gRmluYW5jaWFsIFNpdHVhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZVwiPkFubnVhbCBIb3VzZWhvbGQgSW5jb21lIFJhbmdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2VcIiB2YWx1ZT1cIjAxXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5hbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZSA9PT0gXCIwMVwifSAvPlVuZGVyICQ1MCwwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2VcIiB2YWx1ZT1cIjAyXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5hbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZSA9PT0gXCIwMlwifSAvPiQ1MCwwMDAgLSAkMTAwLDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZVwiIHZhbHVlPVwiMDNcIiBjaGVja2VkPXt0aGlzLnByb3BzLmFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlID09PSBcIjAzXCJ9IC8+T3ZlciAkMTAwLDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXRXb3J0aFJhbmdlXCI+TmV0IFdvcnRoIFJhbmdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibmV0V29ydGhSYW5nZVwiIHZhbHVlPVwiMVwiIGNoZWNrZWQ9e3RoaXMucHJvcHMubmV0V29ydGhSYW5nZSA9PT0gXCIxXCJ9IC8+VW5kZXIgJDUwLDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJuZXRXb3J0aFJhbmdlXCIgdmFsdWU9XCIyXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5uZXRXb3J0aFJhbmdlID09PSBcIjJcIn0gLz4kNTAsMDAwIC0gJDEwMCwwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibmV0V29ydGhSYW5nZVwiIHZhbHVlPVwiM1wiIGNoZWNrZWQ9e3RoaXMucHJvcHMubmV0V29ydGhSYW5nZSA9PT0gXCIzXCJ9IC8+T3ZlciAkMTAwLDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsaWZlSW5zdXJhbmNlUmFuZ2VcIj5MaWZlIEluc3VyYW5jZSBSYW5nZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImxpZmVJbnN1cmFuY2VSYW5nZVwiIHZhbHVlPVwiMDFcIiBjaGVja2VkPXt0aGlzLnByb3BzLmxpZmVJbnN1cmFuY2VSYW5nZSA9PT0gXCIwMVwifSAvPlVuZGVyICQ1MCwwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibGlmZUluc3VyYW5jZVJhbmdlXCIgdmFsdWU9XCIwMlwiIGNoZWNrZWQ9e3RoaXMucHJvcHMubGlmZUluc3VyYW5jZVJhbmdlID09PSBcIjAyXCJ9IC8+JDUwLDAwMCAtICQxMDAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImxpZmVJbnN1cmFuY2VSYW5nZVwiIHZhbHVlPVwiMDNcIiBjaGVja2VkPXt0aGlzLnByb3BzLmxpZmVJbnN1cmFuY2VSYW5nZSA9PT0gXCIwM1wifSAvPk92ZXIgJDEwMCwwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0YXhCcmFja2V0XCI+VGF4IEJyYWNrZXQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxWYWxpY0lucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgbmFtZT1cInRheEJyYWNrZXRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLnRheEJyYWNrZXR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVwZW5kZW50c05vXCI+RGVwZW5kZW50czogIE51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZhbGljSW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBuYW1lPVwiZGVwZW5kZW50c05vXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5kZXBlbmRlbnRzTm99IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWdlc1wiPkFnZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxWYWxpY0lucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgbmFtZT1cImFnZXNcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmFnZXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiaGFsZi1ydWxlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImN1cnJlbnRFbXBsb3llclwiPkN1cnJlbnQgRW1wbG95ZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjdXJyZW50RW1wbG95ZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmN1cnJlbnRFbXBsb3llcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvY2N1cGF0aW9uXCI+T2NjdXBhdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm9jY3VwYXRpb25cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLm9jY3VwYXRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImVtcGxveW1lbnRTdGF0dXNcIiB2YWx1ZT1cIlJcIiBjaGVja2VkPXt0aGlzLnByb3BzLmVtcGxveW1lbnRTdGF0dXMgPT09IFwiUlwifSAvPlJldGlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZW1wbG95bWVudFN0YXR1c1wiIHZhbHVlPVwiVVwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuZW1wbG95bWVudFN0YXR1cyA9PT0gXCJVXCJ9IC8+VW5lbXBsb3llZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbXBsb3llckFkZHJlc3NcIj5FbXBsb3llciBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1wbG95ZXJBZGRyZXNzXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5lbXBsb3llckFkZHJlc3N9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1wbG95ZXJDaXR5XCI+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtcGxveWVyQ2l0eVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuZW1wbG95ZXJDaXR5fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtcGxveWVyU3RhdGVcIj5TdGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiZW1wbG95ZXJTdGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuZW1wbG95ZXJTdGF0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlc0xpc3REb3dufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtcGxveWVyWmlwQ29kZVwiPlppcENvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbXBsb3llclppcENvZGVcIiBtYXgtbGVuZ3RoPVwiNVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuZW1wbG95ZXJaaXBDb2RlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbXBsb3llclNhbGFyeVwiPlNhbGFyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiZW1wbG95ZXJTYWxhcnlcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBtaW49XCIwXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5lbXBsb3llclNhbGFyeX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJoaXJlRGF0ZVwiPkhpcmUgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImhpcmVEYXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5oaXJlRGF0ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleHBlY3RlZEFubnVpdHlEYXRlXCI+RXhwZWN0ZWQgQW5udWl0eSBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZXhwZWN0ZWRBbm51aXR5RGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuZXhwZWN0ZWRBbm51aXR5RGF0ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbnZlc3RvclByb2ZpbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvSW52ZXN0b3JQcm9maWxlQ29tcG9uZW50LnRzeCIsImltcG9ydCBJbmNvbWVTb3VyY2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9zcGVjdENvbXBvbmVudC9JbmNvbWVTb3VyY2VDb21wb25lbnQnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge21hcERpc3BhdGNoVG9Qcm9wc30gZnJvbSAnLi9QZXJzb25hbEluZm9ybWF0aW9uQ29udGFpbmVyJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHsgICAgICAgXHJcbiAgICBpbmNvbWVBY2NvdW50U2FsYXJ5OiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5pbmNvbWVBY2NvdW50U2FsYXJ5LFxyXG4gICAgc29jaWFsU2VjdXJpdHk6IHN0YXRlLlByb3NwZWN0RGV0YWlsLnNvY2lhbFNlY3VyaXR5LFxyXG4gICAgcGVuc2lvbkJlbmVmaXRzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5wZW5zaW9uQmVuZWZpdHMsXHJcbiAgICBpbnZlc3RtZW50SW5jb21lOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5pbnZlc3RtZW50SW5jb21lLFxyXG4gICAgcm1kOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ybWQsXHJcbiAgICBvdGhlcjogc3RhdGUuUHJvc3BlY3REZXRhaWwub3RoZXIsXHJcbiAgICBleHBlbnNlc0Ftb3VudDogc3RhdGUuUHJvc3BlY3REZXRhaWwuZXhwZW5zZXNBbW91bnQgICAgXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgSW5jb21lU291cmNlQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW5jb21lU291cmNlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9JbmNvbWVTb3VyY2VDb250YWluZXIudHMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbmNvbWVTb3VyY2VQcm9wcyB7XHJcbmluY29tZUFjY291bnRTYWxhcnk/OnN0cmluZztcclxuc29jaWFsU2VjdXJpdHk/OnN0cmluZztcclxucGVuc2lvbkJlbmVmaXRzPzogc3RyaW5nO1xyXG5pbnZlc3RtZW50SW5jb21lPzogc3RyaW5nO1xyXG5ybWQ/OnN0cmluZztcclxub3RoZXI/OnN0cmluZztcclxuZXhwZW5zZXNBbW91bnQ/OnN0cmluZztcclxub25DaGFuZ2U6KCkgPT4gYW55O1xyXG59XHJcbmNsYXNzIEluY29tZVNvdXJjZSBleHRlbmRzIENvbXBvbmVudDxhbnksYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVVzZXJJbnB1dCA9IHRoaXMuaGFuZGxlVXNlcklucHV0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVVc2VySW5wdXQoZSkge1xyXG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgb25DaGFuZ2UoZSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2PjxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPkFubnVhbCBIb3VzZWhvbGQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICBJbmNvbWUgQWNjb3VudCBGcm9tOlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImluY29tZUFjY291bnRTYWxhcnlcIj5TYWxhcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImluY29tZUFjY291bnRTYWxhcnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmluY29tZUFjY291bnRTYWxhcnl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic29jaWFsU2VjdXJpdHlcIj5Tb2NpYWwgU2VjdXJpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInNvY2lhbFNlY3VyaXR5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5zb2NpYWxTZWN1cml0eX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwZW5zaW9uQmVuZWZpdHNcIj5QZW5zaW9uIEJlbmVmaXRzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwZW5zaW9uQmVuZWZpdHNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLnBlbnNpb25CZW5lZml0c30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW52ZXN0bWVudEluY29tZVwiPkludmVzdG1lbnQgSW5jb21lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJpbnZlc3RtZW50SW5jb21lXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5pbnZlc3RtZW50SW5jb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJtZFwiPlJNRDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicm1kXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5ybWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3RoZXJcIj5PdGhlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwib3RoZXJcIiBtaW49XCIwXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5vdGhlcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhwZW5zZXNBbW91bnRcIj5FeHBlbnNlcyBBbW91bnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImV4cGVuc2VzQW1vdW50XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5leHBlbnNlc0Ftb3VudH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluY29tZVNvdXJjZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qcm9zcGVjdENvbXBvbmVudC9JbmNvbWVTb3VyY2VDb21wb25lbnQudHN4IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250YWluZXJzL1Byb3NwZWN0Q29udGFpbmVyL1Byb3NwZWN0RWRpdENvbnRhaW5lci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNvbWJpbmVSZWR1Y2VycywgR2VuZXJpY1N0b3JlRW5oYW5jZXIsIFN0b3JlLCBTdG9yZUVuaGFuY2VyU3RvcmVDcmVhdG9yLCBSZWR1Y2Vyc01hcE9iamVjdCB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHsgcm91dGVyUmVkdWNlciwgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCAqIGFzIFN0b3JlTW9kdWxlIGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlLCByZWR1Y2VycyB9IGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCB7IFByb3NwZWN0TWlkZGxlV2FyZSwgZXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9hcGkvUHJvc3BlY3QvUHJvc3BlY3RBcGknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaGlzdG9yeTogSGlzdG9yeSwgaW5pdGlhbFN0YXRlPzogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cclxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XHJcbiAgICAvLyBJZiBkZXZUb29scyBpcyBpbnN0YWxsZWQsIGNvbm5lY3QgdG8gaXRcclxuICAgIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93SWZEZWZpbmVkICYmIHdpbmRvd0lmRGVmaW5lZC5kZXZUb29sc0V4dGVuc2lvbiBhcyAoKSA9PiBHZW5lcmljU3RvcmVFbmhhbmNlcjtcclxuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgZXJyb3JIYW5kbGVyLCBQcm9zcGVjdE1pZGRsZVdhcmUsIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSkpLFxyXG4gICAgICAgIGRldlRvb2xzRXh0ZW5zaW9uID8gZGV2VG9vbHNFeHRlbnNpb24oKSA6IDxTPihuZXh0OiBTdG9yZUVuaGFuY2VyU3RvcmVDcmVhdG9yPFM+KSA9PiBuZXh0XHJcbiAgICApKGNyZWF0ZVN0b3JlKTtcclxuXHJcbiAgICAvLyBDb21iaW5lIGFsbCByZWR1Y2VycyBhbmQgaW5zdGFudGlhdGUgdGhlIGFwcC13aWRlIHN0b3JlIGluc3RhbmNlXHJcbiAgICBjb25zdCBhbGxSZWR1Y2VycyA9IGJ1aWxkUm9vdFJlZHVjZXIocmVkdWNlcnMpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKGFsbFJlZHVjZXJzLCBpbml0aWFsU3RhdGUpIGFzIFN0b3JlPEFwcGxpY2F0aW9uU3RhdGU+O1xyXG5cclxuICAgIC8vIEVuYWJsZSBXZWJwYWNrIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgZm9yIHJlZHVjZXJzXHJcbiAgICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3N0b3JlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlPHR5cGVvZiBTdG9yZU1vZHVsZT4oJy4vc3RvcmUnKTtcclxuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoYnVpbGRSb290UmVkdWNlcihuZXh0Um9vdFJlZHVjZXIucmVkdWNlcnMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkUm9vdFJlZHVjZXIoYWxsUmVkdWNlcnM6IFJlZHVjZXJzTWFwT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gY29tYmluZVJlZHVjZXJzPEFwcGxpY2F0aW9uU3RhdGU+KE9iamVjdC5hc3NpZ24oe30sIGFsbFJlZHVjZXJzLCB7IHJvdXRpbmc6IHJvdXRlclJlZHVjZXIgfSkpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb25maWd1cmVTdG9yZS50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDM3KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTE0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy9pbXBvcnQgKiBhcyBXZWF0aGVyRm9yZWNhc3RzIGZyb20gJy4vV2VhdGhlckZvcmVjYXN0cyc7XHJcbi8vaW1wb3J0ICogYXMgQ291bnRlciBmcm9tICcuL0NvdW50ZXInO1xyXG5cclxuaW1wb3J0ICogYXMgTG9hZGVyIGZyb20gJy4vTG9hZGVyJztcclxuaW1wb3J0ICogYXMgUHJvc3BlY3QgZnJvbSAnLi9Qcm9zcGVjdCc7XHJcbmltcG9ydCAqIGFzIFN0YXRlcyBmcm9tICcuL1N0YXRlcyc7XHJcbmltcG9ydCAqIGFzIFZhbGlkYXRpb25NZXNzYWdlIGZyb20gJy4vVmFsaWRhdGlvbk1lc3NhZ2UnO1xyXG5cclxuLy8vLyBUaGUgdG9wLWxldmVsIHN0YXRlIG9iamVjdFxyXG4vL2V4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25TdGF0ZSB7XHJcbi8vICAgIGNvdW50ZXI6IENvdW50ZXIuQ291bnRlclN0YXRlO1xyXG4vLyAgICB3ZWF0aGVyRm9yZWNhc3RzOiBXZWF0aGVyRm9yZWNhc3RzLldlYXRoZXJGb3JlY2FzdHNTdGF0ZTtcclxuLy99XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcclxuICAgIFByb3NwZWN0RGV0YWlsOiBQcm9zcGVjdC5Qcm9zcGVjdFN0YXRlO1xyXG4gICAgaXNMb2FkaW5nOiBMb2FkZXIuTG9hZGVyU3RhdGU7XHJcbiAgICBzdGF0ZXM6IFN0YXRlcy5TdGF0ZXNTdGF0ZTtcclxuICAgIGVycm9yczogVmFsaWRhdGlvbk1lc3NhZ2UuVmFsaWRhdGlvTm1lc3NhZ2VTdGF0ZVtdO1xyXG4gICAgYWdlbnRDb2RlOiBQcm9zcGVjdC5BZ2VudENvZGVTdGF0ZTtcclxufVxyXG4vLyBXaGVuZXZlciBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCwgUmVkdXggd2lsbCB1cGRhdGUgZWFjaCB0b3AtbGV2ZWwgYXBwbGljYXRpb24gc3RhdGUgcHJvcGVydHkgdXNpbmdcclxuLy8gdGhlIHJlZHVjZXIgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgbmFtZXMgbWF0Y2ggZXhhY3RseSwgYW5kIHRoYXQgdGhlIHJlZHVjZXJcclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcclxuICAgIGlzTG9hZGluZzogTG9hZGVyLnJlZHVjZXIsXHJcbiAgICBzdGF0ZXM6IFN0YXRlcy5yZWR1Y2VyLFxyXG4gICAgUHJvc3BlY3REZXRhaWw6IFByb3NwZWN0LnJlZHVjZXIsXHJcbiAgICBlcnJvcnM6IFZhbGlkYXRpb25NZXNzYWdlLnJlZHVjZXIsXHJcbiAgICBhZ2VudENvZGU6IFByb3NwZWN0LmFnZW50Q29kZXJlZHVjZXJcclxufTtcclxuXHJcbi8vIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCBhcyBhIGhpbnQgb24gYWN0aW9uIGNyZWF0b3JzIHNvIHRoYXQgaXRzICdkaXNwYXRjaCcgYW5kICdnZXRTdGF0ZScgcGFyYW1zIGFyZVxyXG4vLyBjb3JyZWN0bHkgdHlwZWQgdG8gbWF0Y2ggeW91ciBzdG9yZS5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XHJcbiAgICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uVHlwZXMnXHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvTm1lc3NhZ2VTdGF0ZSB7XHJcbiAgICBlcnJvcnM6IEVycm9yTWVzc2FnZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFcnJvck1lc3NhZ2Uge1xyXG4gICAgZmllbGROYW1lOiBzdHJpbmc7XHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBBZGRFcnJvck1lc3NhZ2UgeyB0eXBlOiAnQUREX0VSUk9SX01FU1NBR0UnLCBmaWVsZE5hbWUsIGVycm9yTWVzc2FnZSB9XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBhZGRFcnJvck1lc3NhZ2U6IChmaWVsZE5hbWU6IHN0cmluZywgZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IDxBZGRFcnJvck1lc3NhZ2U+eyB0eXBlOiAnQUREX0VSUk9SX01FU1NBR0UnICxmaWVsZE5hbWUsIGVycm9yTWVzc2FnZX0sXHJcbiAgIFxyXG59O1xyXG50eXBlIEtub3duQWN0aW9uID0gQWRkRXJyb3JNZXNzYWdlXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxWYWxpZGF0aW9ObWVzc2FnZVN0YXRlW10+ID0gKHN0YXRlOiBWYWxpZGF0aW9ObWVzc2FnZVN0YXRlW10sIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgIGNhc2UgXCJBRERfRVJST1JfTUVTU0FHRVwiOlxyXG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzRXhpc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdvYmogPSBzdGF0ZS5tYXAoKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZmllbGROYW1lID09PSBhY3Rpb24uZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRXhpc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IsIHsgZXJyb3JNZXNzYWdlOiBhY3Rpb24uZXJyb3JNZXNzYWdlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0V4aXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogYWN0aW9uLmZpZWxkTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogYWN0aW9uLmVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld29iajtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IGFjdGlvbi5maWVsZE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogYWN0aW9uLmVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxyXG4gICAgcmV0dXJuIHN0YXRlIHx8IE9iamVjdC5hc3NpZ24oe30sIG51bGwpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvVmFsaWRhdGlvbk1lc3NhZ2UudHMiLCIvL2ltcG9ydCAqIGFzIFByb3NwZWN0QWN0aW9uIGZyb20gJy4uLy4uL2FjdGlvbnMvUHJvc3BlY3RBY3Rpb24nO1xyXG5pbXBvcnQgIEFwaVVybCAgZnJvbSAnLi4vYXBpVXJsLmRldic7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgYWdpbGVuZXR1cmwgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG4vL2ltcG9ydCAqIGFzIFZhbGlkYXRpb25NZXNzYWdlIGZyb20gJy4uLy4uL2FjdGlvbnMvVmFsaWRhdGlvbk1lc3NhZ2VBY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tICcuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgKiBhcyBMb2FkZXJBY3Rpb24gZnJvbSAnLi4vLi4vc3RvcmUvTG9hZGVyJztcclxuaW1wb3J0ICogYXMgVmFsaWRhdGlvbk1lc3NhZ2VBY3Rpb24gZnJvbSAnLi4vLi4vc3RvcmUvdmFsaWRhdGlvbk1lc3NhZ2UnO1xyXG5pbXBvcnQgKiBhcyBQcm9zcGVjdEFjdGlvbiBmcm9tICcuLi8uLi9zdG9yZS9Qcm9zcGVjdCc7XHJcbmltcG9ydCAqIGFzIFN0YXRlQWN0aW9uIGZyb20gJy4uLy4uL3N0b3JlL1N0YXRlcyc7XHJcblxyXG4vL2ltcG9ydCBlcnJvcmhhbmRsZXIgZnJvbSAnZXJyb3JoYW5kbGVyJztcclxuLy9pbXBvcnQgY29ubmVjdCBmcm9tICdjb25uZWN0JztcclxuaW50ZXJmYWNlIFByb3NwZWN0e1xyXG5GaXJzdE5hbWU6c3RyaW5nO1xyXG5MYXN0TmFtZTpzdHJpbmc7XHJcblNzbjpzdHJpbmc7XHJcbklkOm51bWJlcjtcclxuXHJcbn1cclxuY29uc3QgYWR2aXNvclVybCA9IEFwaVVybC5hZHZpc29yVXJsO1xyXG5jb25zdCBwYXJ0aWNpcGFudFVybCA9IEFwaVVybC5wYXJ0aWNpcGFudFVybDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9zcGVjdE1pZGRsZVdhcmUgPSAoc3RvcmU6YW55KSA9PiAobmV4dDphbnkpID0+IChhY3Rpb246YW55KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5HRVRfUFJPU1BFQ1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckJlZ2luKCkpO1xyXG4gICAgICAgICAgICBuZXh0KExvYWRlckFjdGlvbi5hY3Rpb25DcmVhdG9ycy5sb2FkZXJCZWdpbigpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZldGNoKGAke3BhcnRpY2lwYW50VXJsfXByb3NwZWN0LyR7YWN0aW9uLmlkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTphbnkpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3NwZWN0ID0ge30gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5maXJzdE5hbWUgPSBkYXRhLkZpcnN0TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubGFzdE5hbWUgPSBkYXRhLkxhc3ROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5zc24gPSBkYXRhLlNzbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5jbGllbnRQcm9zcGVjdElkID0gZGF0YS5JZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuSWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBob21lQWRkcmVzc1N0cmVldDEsIGhvbWVBZGRyZXNzU3RyZWV0MiwgaG9tZUFkZHJlc3NTdHJlZXQzLCBob21lQWRkcmVzc1ppcENvZGUsIGhvbWVBZGRyZXNzU3RhdGUsIGhvbWVBZGRyZXNzQ2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1haWxpbmdBZGRyZXNzU3RyZWV0MSwgbWFpbGluZ0FkZHJlc3NTdHJlZXQyLCBtYWlsaW5nQWRkcmVzc1N0cmVldDMsIG1haWxpbmdBZGRyZXNzWmlwQ29kZSwgbWFpbGluZ0FkZHJlc3NTdGF0ZSwgbWFpbGluZ0FkZHJlc3NDaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5BZGRyZXNzZXMgIT09IHVuZGVmaW5lZCAmJiBkYXRhLkFkZHJlc3NlcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5BZGRyZXNzZXNbXCIkdmFsdWVzXCJdLmZvckVhY2goZnVuY3Rpb24gKGFkZHJlc3M6YW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhLkFkZHJlc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChhZGRyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZHJlc3MuQWRkcmVzc1R5cGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZUFkZHJlc3NTdHJlZXQxID0gYWRkcmVzcy5TdHJlZXQxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lQWRkcmVzc1N0cmVldDIgPSBhZGRyZXNzLlN0cmVldDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzU3RyZWV0MyA9IGFkZHJlc3MuU3RyZWV0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZUFkZHJlc3NTdGF0ZSA9IGFkZHJlc3MuU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzQ2l0eSA9IGFkZHJlc3MuQ2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ob21lQWRkcmVzc0NvdW50cnkgPSBhZGRyZXNzLkNvdW50cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzWmlwQ29kZSA9IGFkZHJlc3MuWmlwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhZGRyZXNzLkFkZHJlc3NUeXBlID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzU3RyZWV0MSA9IGFkZHJlc3MuU3RyZWV0MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3NTdHJlZXQyID0gYWRkcmVzcy5TdHJlZXQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzc1N0cmVldDMgPSBhZGRyZXNzLlN0cmVldDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzU3RhdGUgPSBhZGRyZXNzLlN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzc0NpdHkgPSBhZGRyZXNzLkNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFpbGluZ0FkZHJlc3NDb3VudHJ5ID0gYWRkcmVzcy5Db3VudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzc1ppcENvZGUgPSBhZGRyZXNzLlppcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBob21lUGhvbmVOdW1iZXI7IGxldCB3b3JrUGhvbmVOdW1iZXI7IGxldCBvdGhlclBob25lTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5QaG9uZU51bWJlcnMgIT09IG51bGwgJiYgZGF0YS5QaG9uZU51bWJlcnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5QaG9uZU51bWJlcnNbXCIkdmFsdWVzXCJdLmZvckVhY2goZnVuY3Rpb24gKHBob25lOmFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGF0YS5QaG9uZU51bWJlcnMuZm9yRWFjaCgocGhvbmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGhvbmUuUGhvbmVUeXBlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVQaG9uZU51bWJlciA9IHBob25lLk51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGhvbmUuUGhvbmVUeXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtQaG9uZU51bWJlciA9IHBob25lLk51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGhvbmUuUGhvbmVUeXBlID09PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyUGhvbmVOdW1iZXIgPSBwaG9uZS5OdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNSZWZlcnJhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5SZWZlcnJhbERhdGUgIT09IG51bGwgJiYgZGF0YS5SZWZlcnJhbERhdGUgIT09IHVuZGVmaW5lZCAmJiBuZXcgRGF0ZShkYXRhLlJlZmVycmFsRGF0ZS50b1N0cmluZygpKS5nZXRGdWxsWWVhcigpID4gMTkwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWZlcnJhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QudGl0bGUgPSBkYXRhLlRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5taWRkbGVJbml0aWFsID0gZGF0YS5NaWRkbGVJbml0aWFsICE9PSBudWxsID8gZGF0YS5NaWRkbGVJbml0aWFsIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmRhdGVPZkJpcnRoID0gZGF0YS5EYXRlT2ZCaXJ0aCAhPT0gbnVsbCAmJiBkYXRhLkRhdGVPZkJpcnRoICE9PSB1bmRlZmluZWQgPyBuZXcgRGF0ZShkYXRhLkRhdGVPZkJpcnRoLnRvU3RyaW5nKCkpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5nZW5kZXIgPSBkYXRhLkdlbmRlciAhPT0gbnVsbCAmJiBkYXRhLkdlbmRlciAhPT0gdW5kZWZpbmVkID8gZGF0YS5HZW5kZXIudG9TdHJpbmcoKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC51c0NpdGl6ZW4gPSBkYXRhLlVzQ2l0aXplbkZsYWcgIT09IG51bGwgJiYgZGF0YS5Vc0NpdGl6ZW5GbGFnICE9PSB1bmRlZmluZWQgPyBkYXRhLlVzQ2l0aXplbkZsYWcudG9TdHJpbmcoKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5tYXJpdGFsU3RhdHVzID0gZGF0YS5NYXJpdGFsU3RhdHVzICE9PSBudWxsICYmIGRhdGEuTWFyaXRhbFN0YXR1cyAhPT0gdW5kZWZpbmVkID8gZGF0YS5NYXJpdGFsU3RhdHVzLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaG9tZUFkZHJlc3NMaW5lMSA9IGhvbWVBZGRyZXNzU3RyZWV0MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaG9tZUFkZHJlc3NMaW5lMiA9IGhvbWVBZGRyZXNzU3RyZWV0MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaG9tZUFkZHJlc3NMaW5lMyA9IGhvbWVBZGRyZXNzU3RyZWV0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaG9tZUFkZHJlc3NDaXR5ID0gaG9tZUFkZHJlc3NDaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5ob21lQWRkcmVzc1N0YXRlID0gaG9tZUFkZHJlc3NTdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaG9tZUFkZHJlc3NaaXBDb2RlID0gaG9tZUFkZHJlc3NaaXBDb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0xpbmUxID0gbWFpbGluZ0FkZHJlc3NTdHJlZXQxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0xpbmUyID0gbWFpbGluZ0FkZHJlc3NTdHJlZXQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0xpbmUzID0gbWFpbGluZ0FkZHJlc3NTdHJlZXQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0NpdHkgPSBtYWlsaW5nQWRkcmVzc0NpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzU3RhdGUgPSBtYWlsaW5nQWRkcmVzc1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc1ppcENvZGUgPSBtYWlsaW5nQWRkcmVzc1ppcENvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhvbWVQaG9uZSA9IGhvbWVQaG9uZU51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3Qud29ya1Bob25lID0gd29ya1Bob25lTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5vdGhlclBob25lID0gb3RoZXJQaG9uZU51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QucmVmZXJyYWwgPSBpc1JlZmVycmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5lbWFpbEFkZHJlc3MgPSBkYXRhLkVtYWlsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZSAhPT0gbnVsbCAmJiBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnByZXZpb3VzRnVuZHMgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkludmVzdG1lbnRFeHBlcmllbmNlX0ZsYWcgIT09IHVuZGVmaW5lZCAmJiBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkludmVzdG1lbnRFeHBlcmllbmNlX0ZsYWcgIT09IG51bGwgPyBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkludmVzdG1lbnRFeHBlcmllbmNlX0ZsYWcudG9TdHJpbmcoKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuRklOUkEgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkZpbnJhX0ZsYWcgIT09IHVuZGVmaW5lZCAmJiBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkZpbnJhX0ZsYWcgIT09IG51bGwgPyBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkZpbnJhX0ZsYWcudG9TdHJpbmcoKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaW52ZXN0bWVudE9iamVjdGl2ZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuSW52ZXN0bWVudE9iamVjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnJpc2tQcm9maWxlID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5SaXNrUHJvZmlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5Ib3VzZWhvbGRJbmNvbWVSYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm5ldFdvcnRoUmFuZ2UgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLk5ldFdvcnRoUmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5saWZlSW5zdXJhbmNlUmFuZ2UgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkxpZmVJbnN1cmFuY2VSYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnRheEJyYWNrZXQgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLlRheEJyYWNrZXROdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5kZXBlbmRlbnRzTm8gPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkRlcGVkZW50TnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuYWdlcyA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuQWdlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmN1cnJlbnRFbXBsb3llciA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuQ3VycmVudEVtcGxveWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZW1wbG95bWVudFN0YXR1cyA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRW1wbG95bWVudFN0YXR1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm9jY3VwYXRpb24gPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLk9jY3VwYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5lbXBsb3llckFkZHJlc3MgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkVtcGxveWVyQWRkcmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmVtcGxveWVyQ2l0eSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRW1wbG95ZXJDaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZW1wbG95ZXJTdGF0ZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRW1wbG95ZXJTdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmVtcGxveWVyWmlwQ29kZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRW1wbG95ZXJaaXBDb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZW1wbG95ZXJTYWxhcnkgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLlNhbGFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhpcmVEYXRlID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5IaXJlRGF0ZSAhPT0gbnVsbCAmJiBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkhpcmVEYXRlICE9PSB1bmRlZmluZWQgPyBuZXcgRGF0ZShkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkhpcmVEYXRlLnRvU3RyaW5nKCkpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZXhwZWN0ZWRBbm51aXR5RGF0ZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRXhwZWN0ZWRBbm51aXR5RGF0ZSAhPT0gbnVsbCAmJiBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkV4cGVjdGVkQW5udWl0eURhdGUgIT09IHVuZGVmaW5lZCA/IG5ldyBEYXRlKGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRXhwZWN0ZWRBbm51aXR5RGF0ZS50b1N0cmluZygpKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmlzSW52ZXN0b3JQcm9maWxlTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pc0ludmVzdG9yUHJvZmlsZU5ldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuUHJvc3BlY3RJbmNvbWVTb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBkYXRhLlByb3NwZWN0SW5jb21lU291cmNlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pbmNvbWVBY2NvdW50U2FsYXJ5ID0gZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZS5TYWxhcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5zb2NpYWxTZWN1cml0eSA9IGRhdGEuUHJvc3BlY3RJbmNvbWVTb3VyY2UuU29jaWFsU2VjdXJpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5wZW5zaW9uQmVuZWZpdHMgPSBkYXRhLlByb3NwZWN0SW5jb21lU291cmNlLlBlbnNpb25CZW5lZml0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmludmVzdG1lbnRJbmNvbWUgPSBkYXRhLlByb3NwZWN0SW5jb21lU291cmNlLkludmVzdG1lbnRJbmNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5ybWQgPSBkYXRhLlByb3NwZWN0SW5jb21lU291cmNlLlJNRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm90aGVyID0gZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZS5PdGhlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmV4cGVuc2VzQW1vdW50ID0gZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZS5FeHBlbnNlc0Ftb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmlzSW5jb21lU291cmNlTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pc0luY29tZVNvdXJjZU5ldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmZldGNoUHJvc3BlY3RTdWNjZXNzKHByb3NwZWN0KSlcclxuICAgICAgICAgICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQ29tcGxldGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChQcm9zcGVjdEFjdGlvbi5hY3Rpb25DcmVhdG9ycy5mZXRjaFByb3NwZWN0U3VjY2Vzcyhwcm9zcGVjdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoTG9hZGVyQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmxvYWRlckVuZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgLy8gbmV4dChWYWxpZGF0aW9uTWVzc2FnZS5BZGRFcnJvck1lc3NhZ2UoJycsIFwiVW5hYmxlIHRvIGdldCBwcm9zcGVjdFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmZldGNoUHJvc3BlY3RGYWlsZWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckNvbXBsZXRlKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXh0KFZhbGlkYXRpb25NZXNzYWdlQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZSgnJywgXCJVbmFibGUgdG8gZ2V0IHByb3NwZWN0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KFByb3NwZWN0QWN0aW9uLmFjdGlvbkNyZWF0b3JzLmZldGNoUHJvc3BlY3RGYWlsZWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChMb2FkZXJBY3Rpb24uYWN0aW9uQ3JlYXRvcnMubG9hZGVyRW5kKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2JyZWFrO1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuR0VUX1NUQVRFU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQmVnaW4oKSk7XHJcbiAgICAgICAgICAgIG5leHQoTG9hZGVyQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmxvYWRlckJlZ2luKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goYCR7YWR2aXNvclVybH1hZHZpc29yL3N0YXRlc2ApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24uZmV0Y2hTdGF0ZXNTdWNjZXNzKGpzb25bXCIkdmFsdWVzXCJdKSlcclxuICAgICAgICAgICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQ29tcGxldGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChTdGF0ZUFjdGlvbi5hY3Rpb25DcmVhdG9ycy5mZXRjaFN0YXRlU3VjY2Vzcyhqc29uW1wiJHZhbHVlc1wiXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChMb2FkZXJBY3Rpb24uYWN0aW9uQ3JlYXRvcnMubG9hZGVyRW5kKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN0YXRlcyBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckNvbXBsZXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV4dChWYWxpZGF0aW9uTWVzc2FnZS5BZGRFcnJvck1lc3NhZ2UoJycsIFwiVW5hYmxlIHRvIGdldCBzdGF0ZXNcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV4dChQcm9zcGVjdEFjdGlvbi5mZXRjaFN0YXRlc0ZhaWxlZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KFZhbGlkYXRpb25NZXNzYWdlQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZSgnJywgXCJVbmFibGUgdG8gZ2V0IHN0YXRlc1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChTdGF0ZUFjdGlvbi5hY3Rpb25DcmVhdG9ycy5mZXRjaFN0YXRlc0ZhaWxlZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KExvYWRlckFjdGlvbi5hY3Rpb25DcmVhdG9ycy5sb2FkZXJFbmQoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9icmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlVQREFURV9QUk9TUEVDVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBsZXQgcHJvc3BlY3QgPSBzdGF0ZS5Qcm9zcGVjdERldGFpbDtcclxuICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckJlZ2luKCkpO1xyXG4gICAgICAgICAgICBuZXh0KExvYWRlckFjdGlvbi5hY3Rpb25DcmVhdG9ycy5sb2FkZXJCZWdpbigpKTtcclxuICAgICAgICAgICAgbGV0IHZhbGlkRm9ybSA9IHRydWUgYXMgYW55O1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuZXJyb3JzLmZvckVhY2goZnVuY3Rpb24gKGVycm9yLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmVycm9yTWVzc2FnZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkRm9ybSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2YWxpZEZvcm0pO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRGb3JtICE9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGxhaW5TU04gPSBwcm9zcGVjdC5zc247XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGFpblNTTik7XHJcbiAgICAgICAgICAgICAgICBwbGFpblNTTiA9IHBsYWluU1NOLnNwbGl0KCctJykuam9pbignJykuc3BsaXQoJ18nKS5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVmZXJyYWw7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvc3BlY3QucmVmZXJyYWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWZlcnJhbCA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBob21lQWRkcmVzcyA9IHt9IGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzLlN0cmVldDEgPSBwcm9zcGVjdC5ob21lQWRkcmVzc0xpbmUxO1xyXG4gICAgICAgICAgICAgICAgaG9tZUFkZHJlc3MuU3RyZWV0MiA9IHByb3NwZWN0LmhvbWVBZGRyZXNzTGluZTI7XHJcbiAgICAgICAgICAgICAgICBob21lQWRkcmVzcy5TdHJlZXQzID0gcHJvc3BlY3QuaG9tZUFkZHJlc3NMaW5lMztcclxuICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzLkNpdHkgPSBwcm9zcGVjdC5ob21lQWRkcmVzc0NpdHk7XHJcbiAgICAgICAgICAgICAgICBob21lQWRkcmVzcy5TdGF0ZSA9IHByb3NwZWN0LmhvbWVBZGRyZXNzU3RhdGU7XHJcbiAgICAgICAgICAgICAgICBob21lQWRkcmVzcy5aaXAgPSBwcm9zcGVjdC5ob21lQWRkcmVzc1ppcENvZGU7XHJcbiAgICAgICAgICAgICAgICBob21lQWRkcmVzcy5BZGRyZXNzVHlwZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkcmVzcyA9IFtdIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MucHVzaChob21lQWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFpbGluZ0FkZHJlc3MgPSB7fSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzcy5TdHJlZXQxID0gcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NMaW5lMTtcclxuICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzLlN0cmVldDIgPSBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0xpbmUyO1xyXG4gICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3MuU3RyZWV0MyA9IHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzTGluZTM7XHJcbiAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzcy5DaXR5ID0gcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NDaXR5O1xyXG4gICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3MuU3RhdGUgPSBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3MuWmlwID0gcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NaaXBDb2RlO1xyXG4gICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3MuQWRkcmVzc1R5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzcy5wdXNoKG1haWxpbmdBZGRyZXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcGhvbmVOdW1iZXJzID0gW10gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgdmFyIGhvbWVQaG9uZSA9IHt9IGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGhvbWVQaG9uZS5OdW1iZXIgPSBwcm9zcGVjdC5ob21lUGhvbmUgIT09IHVuZGVmaW5lZCA/IHByb3NwZWN0LmhvbWVQaG9uZS5zcGxpdCgnLScpLmpvaW4oJycpLnNwbGl0KCcoJykuam9pbignJykuc3BsaXQoJyknKS5qb2luKCcnKS5zcGxpdCgnXycpLmpvaW4oJycpIDogJyc7XHJcbiAgICAgICAgICAgICAgICBob21lUGhvbmUuUGhvbmVUeXBlID0gMDtcclxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVycy5wdXNoKGhvbWVQaG9uZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHdvcmtQaG9uZSA9IHt9IGFzIGFueTtcclxuICAgICAgICAgICAgICAgIHdvcmtQaG9uZS5OdW1iZXIgPSBwcm9zcGVjdC53b3JrUGhvbmUgIT09IHVuZGVmaW5lZCA/IHByb3NwZWN0LndvcmtQaG9uZS5zcGxpdCgnLScpLmpvaW4oJycpLnNwbGl0KCcoJykuam9pbignJykuc3BsaXQoJyknKS5qb2luKCcnKS5zcGxpdCgnXycpLmpvaW4oJycpIDogJyc7XHJcbiAgICAgICAgICAgICAgICB3b3JrUGhvbmUuUGhvbmVUeXBlID0gMTtcclxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVycy5wdXNoKHdvcmtQaG9uZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG90aGVyUGhvbmUgPSB7fSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBvdGhlclBob25lLk51bWJlciA9IHByb3NwZWN0Lm90aGVyUGhvbmUgIT09IHVuZGVmaW5lZCA/IHByb3NwZWN0Lm90aGVyUGhvbmUuc3BsaXQoJy0nKS5qb2luKCcnKS5zcGxpdCgnKCcpLmpvaW4oJycpLnNwbGl0KCcpJykuam9pbignJykuc3BsaXQoJ18nKS5qb2luKCcnKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgb3RoZXJQaG9uZS5QaG9uZVR5cGUgPSA1O1xyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXJzLnB1c2gob3RoZXJQaG9uZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGluY29tZVNvdXJjZSA9IHt9ICBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBpbmNvbWVTb3VyY2UuU29jaWFsU2VjdXJpdHkgPSBwcm9zcGVjdC5zb2NpYWxTZWN1cml0eTtcclxuICAgICAgICAgICAgICAgIGluY29tZVNvdXJjZS5TYWxhcnkgPSBwcm9zcGVjdC5pbmNvbWVBY2NvdW50U2FsYXJ5O1xyXG4gICAgICAgICAgICAgICAgaW5jb21lU291cmNlLlBlbnNpb25CZW5lZml0cyA9IHByb3NwZWN0LnBlbnNpb25CZW5lZml0cztcclxuICAgICAgICAgICAgICAgIGluY29tZVNvdXJjZS5JbnZlc3RtZW50SW5jb21lID0gcHJvc3BlY3QuaW52ZXN0bWVudEluY29tZTtcclxuICAgICAgICAgICAgICAgIGluY29tZVNvdXJjZS5STUQgPSBwcm9zcGVjdC5ybWQ7XHJcbiAgICAgICAgICAgICAgICBpbmNvbWVTb3VyY2UuT3RoZXIgPSBwcm9zcGVjdC5vdGhlcjtcclxuICAgICAgICAgICAgICAgIGluY29tZVNvdXJjZS5FeHBlbnNlc0Ftb3VudCA9IHByb3NwZWN0LmV4cGVuc2VzQW1vdW50O1xyXG4gICAgICAgICAgICAgICAgaW5jb21lU291cmNlLkNsaWVudFByb3NwZWN0SWQgPSBwcm9zcGVjdC5jbGllbnRQcm9zcGVjdElkO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbnZlc3RvclByb2ZpbGUgPSB7fSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuSW52ZXN0bWVudEV4cGVyaWVuY2VfRmxhZyA9IHByb3NwZWN0LnByZXZpb3VzRnVuZHM7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRmlucmFfRmxhZyA9IHByb3NwZWN0LkZJTlJBO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkludmVzdG1lbnRPYmplY3RpdmUgPSBwcm9zcGVjdC5pbnZlc3RtZW50T2JqZWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLlJpc2tQcm9maWxlID0gcHJvc3BlY3Qucmlza1Byb2ZpbGU7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuSG91c2Vob2xkSW5jb21lUmFuZ2UgPSBwcm9zcGVjdC5hbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5OZXRXb3J0aFJhbmdlID0gcHJvc3BlY3QubmV0V29ydGhSYW5nZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5MaWZlSW5zdXJhbmNlUmFuZ2UgPSBwcm9zcGVjdC5saWZlSW5zdXJhbmNlUmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuVGF4QnJhY2tldE51bWJlciA9IHByb3NwZWN0LnRheEJyYWNrZXQ7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRGVwZWRlbnROdW1iZXIgPSBwcm9zcGVjdC5kZXBlbmRlbnRzTm87XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuQWdlcyA9IHByb3NwZWN0LmFnZXM7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuQ3VycmVudEVtcGxveWVyID0gcHJvc3BlY3QuY3VycmVudEVtcGxveWVyO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkVtcGxveW1lbnRTdGF0dXMgPSBwcm9zcGVjdC5lbXBsb3ltZW50U3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLk9jY3VwYXRpb24gPSBwcm9zcGVjdC5vY2N1cGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkVtcGxveWVyQWRkcmVzcyA9IHByb3NwZWN0LmVtcGxveWVyQWRkcmVzcztcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5FbXBsb3llckNpdHkgPSBwcm9zcGVjdC5lbXBsb3llckNpdHk7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRW1wbG95ZXJTdGF0ZSA9IHByb3NwZWN0LmVtcGxveWVyU3RhdGU7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRW1wbG95ZXJaaXBDb2RlID0gcHJvc3BlY3QuZW1wbG95ZXJaaXBDb2RlO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkhpcmVEYXRlID0gcHJvc3BlY3QuaGlyZURhdGU7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRXhwZWN0ZWRBbm51aXR5RGF0ZSA9IHByb3NwZWN0LmV4cGVjdGVkQW5udWl0eURhdGU7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuU2FsYXJ5ID0gcHJvc3BlY3QuZW1wbG95ZXJTYWxhcnk7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuQ2xpZW50SWQgPSBwcm9zcGVjdC5jbGllbnRQcm9zcGVjdElkO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9zcGVjdERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHByb3NwZWN0LmNsaWVudFByb3NwZWN0SWQsIEZpcnN0TmFtZTogcHJvc3BlY3QuZmlyc3ROYW1lLCBUaXRsZTogcHJvc3BlY3QudGl0bGUsIE1pZGRsZUluaXRpYWw6IHByb3NwZWN0Lm1pZGRsZUluaXRpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgTGFzdE5hbWU6IHByb3NwZWN0Lmxhc3ROYW1lLCBTc246IHBsYWluU1NOLCBEYXRlT2ZCaXJ0aDogcHJvc3BlY3QuZGF0ZU9mQmlydGgsIE1hcml0YWxTdGF0dXM6IHByb3NwZWN0Lm1hcml0YWxTdGF0dXMsIFJlZmVycmFsRGF0ZTogcmVmZXJyYWwsIEFkZHJlc3NlczogYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBQaG9uZU51bWJlcnM6IHBob25lTnVtYmVycywgR2VuZGVyOiBwcm9zcGVjdC5nZW5kZXIsIEVtYWlsOiBwcm9zcGVjdC5lbWFpbEFkZHJlc3MsIFByb3NwZWN0SW5jb21lU291cmNlOiBpbmNvbWVTb3VyY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvc3BlY3RJbnZlc3RvclByb2ZpbGU6IGludmVzdG9yUHJvZmlsZSwgVXNDaXRpemVuRmxhZzogcHJvc3BlY3QudXNDaXRpemVuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2goYCR7cGFydGljaXBhbnRVcmx9cHJvc3BlY3QvdXBkYXRlYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByb3NwZWN0RGF0YSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQ29tcGxldGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoTG9hZGVyQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmxvYWRlckVuZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2luZG93IGFzIGFueSkubG9jYXRpb24gPSBhZ2lsZW5ldHVybCArIFwiL0Rhc2hib2FyZC9BZHZpc29yL0NsaWVudFByb3NwZWN0TGlzdGluZy5hc3B4P2FnZW50SWQ9MDM0OTlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpIGFzIGFueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFZhbGlkYXRpb25NZXNzYWdlLkFkZEVycm9yTWVzc2FnZSgnJywgXCJVbmFibGUgdG8gdXBkYXRlIHByb3NwZWN0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckNvbXBsZXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0KFZhbGlkYXRpb25NZXNzYWdlQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZSgnJywgXCJVbmFibGUgdG8gdXBkYXRlIHByb3NwZWN0XCIpKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dChMb2FkZXJBY3Rpb24uYWN0aW9uQ3JlYXRvcnMubG9hZGVyRW5kKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV4dChWYWxpZGF0aW9uTWVzc2FnZUFjdGlvbi5hY3Rpb25DcmVhdG9ycy5hZGRFcnJvck1lc3NhZ2UoJycsIFwiVW5hYmxlIHRvIHVwZGF0ZSBwcm9zcGVjdFwiKSk7XHJcbiAgICAgICAgICAgICAgICBuZXh0KExvYWRlckFjdGlvbi5hY3Rpb25DcmVhdG9ycy5sb2FkZXJFbmQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgICAgICAgICBuZXh0KGFjdGlvbik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBlcnJvckhhbmRsZXIgPSBzdGF0ZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBuZXh0KGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjYXVnaHRcIik7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwaS9Qcm9zcGVjdC9Qcm9zcGVjdEFwaS50cyIsImNsYXNzIEFwaVVybHtcclxuICAgIHN0YXRpYyBwYXJ0aWNpcGFudFVybCA9J2h0dHBzOi8vZGV2LnZhbGljLmNvbS9yZWFjdC9wYXJ0aWNpcGFudHNlcnZpY2UvYXBpLyc7XHJcbiAgICBzdGF0aWMgYWR2aXNvclVybCA9J2h0dHBzOi8vZGV2LnZhbGljLmNvbS9TZXJ2aWNlcy9BZHZpc29yL2FwaS8nO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwaVVybDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBpL2FwaVVybC5kZXYudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNTEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzJ1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb05tZXNzYWdlU3RhdGUge1xyXG4gICAgZXJyb3JzOiBFcnJvck1lc3NhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JNZXNzYWdlIHtcclxuICAgIGZpZWxkTmFtZTogc3RyaW5nO1xyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5pbnRlcmZhY2UgQWRkRXJyb3JNZXNzYWdlIHsgdHlwZTogJ0FERF9FUlJPUl9NRVNTQUdFJywgZmllbGROYW1lLCBlcnJvck1lc3NhZ2UgfVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgYWRkRXJyb3JNZXNzYWdlOiAoZmllbGROYW1lOiBzdHJpbmcsIGVycm9yTWVzc2FnZTogc3RyaW5nKSA9PiA8QWRkRXJyb3JNZXNzYWdlPnsgdHlwZTogJ0FERF9FUlJPUl9NRVNTQUdFJyAsZmllbGROYW1lLCBlcnJvck1lc3NhZ2V9LFxyXG4gICBcclxufTtcclxudHlwZSBLbm93bkFjdGlvbiA9IEFkZEVycm9yTWVzc2FnZVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8VmFsaWRhdGlvTm1lc3NhZ2VTdGF0ZVtdPiA9IChzdGF0ZTogVmFsaWRhdGlvTm1lc3NhZ2VTdGF0ZVtdLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICBjYXNlIFwiQUREX0VSUk9SX01FU1NBR0VcIjpcclxuICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpc0V4aXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3b2JqID0gc3RhdGUubWFwKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLmZpZWxkTmFtZSA9PT0gYWN0aW9uLmZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0V4aXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGVycm9yLCB7IGVycm9yTWVzc2FnZTogYWN0aW9uLmVycm9yTWVzc2FnZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNFeGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU6IGFjdGlvbi5maWVsZE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5lcnJvck1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdvYmo7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiBhY3Rpb24uZmllbGROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGFjdGlvbi5lcnJvck1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIHVucmVjb2duaXplZCBhY3Rpb25zIChvciBpbiBjYXNlcyB3aGVyZSBhY3Rpb25zIGhhdmUgbm8gZWZmZWN0KSwgbXVzdCByZXR1cm4gdGhlIGV4aXN0aW5nIHN0YXRlXHJcbiAgICAvLyAgKG9yIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZSBpZiBub25lIHdhcyBzdXBwbGllZClcclxuICAgIHJldHVybiBzdGF0ZSB8fCBPYmplY3QuYXNzaWduKHt9LCBudWxsKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL3ZhbGlkYXRpb25NZXNzYWdlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==