module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BottomBar/BottomBar.styles.tsx":
/*!***************************************************!*\
  !*** ./components/BottomBar/BottomBar.styles.tsx ***!
  \***************************************************/
/*! exports provided: Container, ButtonContainer, Button, Spacer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonContainer", function() { return ButtonContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spacer", function() { return Spacer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const endButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["color:white;background-color:#ffaa00;"]);
const centerButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([""]);
const activeButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:14px;border:1px solid #ffaa00;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BottomBarstyles__Container",
  componentId: "sc-1vv124m-0"
})(["display:flex;height:1.5rem;align-items:center;padding:1rem;border-top:2px solid #ffaa00;"]);
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BottomBarstyles__ButtonContainer",
  componentId: "sc-1vv124m-1"
})(["margin-left:auto;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "BottomBarstyles__Button",
  componentId: "sc-1vv124m-2"
})(["font-size:12px;font-weight:bold;border:none;cursor:pointer;", " ", " &:hover{border-bottom:2px solid #ffaa00;}&,&:active,&:focus{outline:none;}"], ({
  isActive
}) => isActive ? activeButton : null, ({
  isEnd
}) => isEnd ? endButton : centerButton);
const Spacer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "BottomBarstyles__Spacer",
  componentId: "sc-1vv124m-3"
})(["display:inline-block;margin:0 .2rem;"]);

/***/ }),

/***/ "./components/BottomBar/BottomBar.tsx":
/*!********************************************!*\
  !*** ./components/BottomBar/BottomBar.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BottomBar_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BottomBar.styles */ "./components/BottomBar/BottomBar.styles.tsx");
var _jsxFileName = "/Users/bradtudor/Documents/interview_challenges/Frontend Challenge/frontend-challenge/src/components/BottomBar/BottomBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BottomBar = ({
  count,
  page,
  setPage,
  itemsPerPage
}) => {
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);

  const updatePage = number => {
    setPage(number);
    setActive(number);
  };

  const renderButtons = () => {
    const numberOfPages = Math.ceil(count / itemsPerPage);
    let buttons = [];

    const moveBack = () => {
      updatePage(page - 1);
    };

    const moveForward = () => {
      updatePage(page + 1);
    };

    const numberOfButtons = active + 3 > numberOfPages ? numberOfPages - active : 3;

    for (let i = Math.min(active, numberOfPages - 3); i <= Math.min(active - 1 + numberOfButtons, numberOfPages - 1); i++) {
      if (i >= 1) {
        buttons.push(i);
      }
    }

    if (numberOfPages > 4 && active < numberOfPages - 3) {
      buttons[buttons.length - 1] === numberOfPages - 1 ? null : buttons.push(null);
    }

    buttons.push(numberOfPages);
    buttons = buttons.map((pageNumber, i) => pageNumber ? __jsx(_BottomBar_styles__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      key: i,
      onClick: () => {
        updatePage(pageNumber);
      },
      isActive: pageNumber === active,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, pageNumber) : __jsx(_BottomBar_styles__WEBPACK_IMPORTED_MODULE_1__["Spacer"], {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, "..."));

    if (page !== 1) {
      buttons.unshift(__jsx(_BottomBar_styles__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        key: "prev",
        onClick: () => {
          moveBack();
        },
        isEnd: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: undefined
      }, " ", "< Prev"));
    }

    if (numberOfPages > 1 && active !== numberOfPages) {
      buttons.push(__jsx(_BottomBar_styles__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        key: "next",
        onClick: () => {
          moveForward();
        },
        isEnd: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: undefined
      }, "Next >"));
    }

    return buttons;
  };

  return __jsx(_BottomBar_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx(_BottomBar_styles__WEBPACK_IMPORTED_MODULE_1__["ButtonContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, renderButtons()));
};

/* harmony default export */ __webpack_exports__["default"] = (BottomBar);

/***/ }),

/***/ "./components/FilterMenu/FilterMenu.styles.tsx":
/*!*****************************************************!*\
  !*** ./components/FilterMenu/FilterMenu.styles.tsx ***!
  \*****************************************************/
/*! exports provided: Container, MenuContainer, MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContainer", function() { return MenuContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 //    TODO: Style the filter menu.

/*
    Container:
    Use flexbox to center the contents of the menu vertically and horizontally
    the background for the container should be #ffefde
    it should have .5rem padding top and bottom and 5rem of padding left and right
    
    MenuItem:
    there should be .5rem of spacing between each vertical pipe and the text
    when the pointer hovers over the item:
        the font weight should change to bold
        there should be a 2px border on the bottom of the item with the color: #ffaa00
        the cursor should change to a pointer
*/

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FilterMenustyles__Container",
  componentId: "sc-1mleh08-0"
})(["display:flex;justify-content:center;align-items:center;background-color:#ffefde;padding:.5rem 5rem;"]);
const MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FilterMenustyles__MenuContainer",
  componentId: "sc-1mleh08-1"
})([""]);
const MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "FilterMenustyles__MenuItem",
  componentId: "sc-1mleh08-2"
})(["padding:0 .5rem;&:hover{font-weight:bold;border-bottom:2px solid #ffaa00;cursor:pointer;}"]);

/***/ }),

/***/ "./components/FilterMenu/FilterMenu.tsx":
/*!**********************************************!*\
  !*** ./components/FilterMenu/FilterMenu.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FilterMenu_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterMenu.styles */ "./components/FilterMenu/FilterMenu.styles.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_Filter_filter_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/Filter/filter.actions */ "./redux/Filter/filter.actions.ts");
/* harmony import */ var _redux_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/types */ "./redux/types.ts");
var _jsxFileName = "/Users/bradtudor/Documents/interview_challenges/Frontend Challenge/frontend-challenge/src/components/FilterMenu/FilterMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 //TODO: Finish the Filter Menu

/*
  update the filter state to the appropriate type when the MenuItem is clicked
*/

const FilterMenu = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return __jsx(_FilterMenu_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_FilterMenu_styles__WEBPACK_IMPORTED_MODULE_1__["MenuContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Filter by: ", __jsx(_FilterMenu_styles__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: () => {
      dispatch(Object(_redux_Filter_filter_actions__WEBPACK_IMPORTED_MODULE_3__["updateFilter"])(_redux_types__WEBPACK_IMPORTED_MODULE_4__["filterType"].certificate));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Certificate"), " |", __jsx(_FilterMenu_styles__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: () => {
      dispatch(Object(_redux_Filter_filter_actions__WEBPACK_IMPORTED_MODULE_3__["updateFilter"])(_redux_types__WEBPACK_IMPORTED_MODULE_4__["filterType"].bachlores));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Bachlores"), " |", __jsx(_FilterMenu_styles__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: () => {
      dispatch(Object(_redux_Filter_filter_actions__WEBPACK_IMPORTED_MODULE_3__["updateFilter"])(_redux_types__WEBPACK_IMPORTED_MODULE_4__["filterType"].masters));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Masters"), " |", __jsx(_FilterMenu_styles__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: () => {
      dispatch(Object(_redux_Filter_filter_actions__WEBPACK_IMPORTED_MODULE_3__["updateFilter"])(_redux_types__WEBPACK_IMPORTED_MODULE_4__["filterType"].phd));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Ph.D."), " |", __jsx(_FilterMenu_styles__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: () => {
      dispatch(Object(_redux_Filter_filter_actions__WEBPACK_IMPORTED_MODULE_3__["updateFilter"])(_redux_types__WEBPACK_IMPORTED_MODULE_4__["filterType"].all));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "All")));
};

/* harmony default export */ __webpack_exports__["default"] = (FilterMenu);

/***/ }),

/***/ "./components/HamburgerMenu/HamburgerMenu.styles.tsx":
/*!***********************************************************!*\
  !*** ./components/HamburgerMenu/HamburgerMenu.styles.tsx ***!
  \***********************************************************/
/*! exports provided: Container, Bar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HamburgerMenustyles__Container",
  componentId: "edti2t-0"
})(["display:flex;flex-direction:column;justify-content:space-around;width:1.5rem;height:1.5rem;"]);
const Bar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HamburgerMenustyles__Bar",
  componentId: "edti2t-1"
})(["display:block;height:4px;background-color:#888;"]);

/***/ }),

/***/ "./components/HamburgerMenu/HamburgerMenu.tsx":
/*!****************************************************!*\
  !*** ./components/HamburgerMenu/HamburgerMenu.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HamburgerMenu_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HamburgerMenu.styles */ "./components/HamburgerMenu/HamburgerMenu.styles.tsx");
var _jsxFileName = "/Users/bradtudor/Documents/interview_challenges/Frontend Challenge/frontend-challenge/src/components/HamburgerMenu/HamburgerMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const HamburgerMenu = () => {
  return __jsx(_HamburgerMenu_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_HamburgerMenu_styles__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx(_HamburgerMenu_styles__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx(_HamburgerMenu_styles__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HamburgerMenu);

/***/ }),

/***/ "./components/Header/Header.styles.tsx":
/*!*********************************************!*\
  !*** ./components/Header/Header.styles.tsx ***!
  \*********************************************/
/*! exports provided: Container, HamburgerContainer, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburgerContainer", function() { return HamburgerContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyles__Container",
  componentId: "sc-1i9e826-0"
})(["display:flex;align-items:center;padding:1rem 2.5rem;border-bottom:2px solid #ffaa00;"]);
const HamburgerContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Headerstyles__HamburgerContainer",
  componentId: "sc-1i9e826-1"
})(["display:flex;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "Headerstyles__Title",
  componentId: "sc-1i9e826-2"
})(["font-size:1.5rem;color:#ffaa00;margin:0rem 2rem;white-space:nowrap;"]);

/***/ }),

/***/ "./components/Header/Header.tsx":
/*!**************************************!*\
  !*** ./components/Header/Header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HamburgerMenu_HamburgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HamburgerMenu/HamburgerMenu */ "./components/HamburgerMenu/HamburgerMenu.tsx");
/* harmony import */ var _SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SearchBar/SearchBar */ "./components/SearchBar/SearchBar.tsx");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Menu/Menu */ "./components/Menu/Menu.tsx");
/* harmony import */ var _Header_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.styles */ "./components/Header/Header.styles.tsx");
var _jsxFileName = "/Users/bradtudor/Documents/interview_challenges/Frontend Challenge/frontend-challenge/src/components/Header/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Header = () => {
  return __jsx(_Header_styles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_Header_styles__WEBPACK_IMPORTED_MODULE_4__["HamburgerContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_HamburgerMenu_HamburgerMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx(_Header_styles__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Affordable Online Degrees")), __jsx(_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout/Layout.styles.tsx":
/*!*********************************************!*\
  !*** ./components/Layout/Layout.styles.tsx ***!
  \*********************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Layoutstyles__Container",
  componentId: "sc-8hu428-0"
})(["display:flex;flex-direction:column;height:100vh;"]);

/***/ }),

/***/ "./components/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/Header */ "./components/Header/Header.tsx");
/* harmony import */ var _Layout_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.styles */ "./components/Layout/Layout.styles.tsx");
var _jsxFileName = "/Users/bradtudor/Documents/interview_challenges/Frontend Challenge/frontend-challenge/src/components/Layout/Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children
}) => {
  return __jsx(_Layout_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Menu/Menu.styles.tsx":
/*!*****************************************!*\
  !*** ./components/Menu/Menu.styles.tsx ***!
  \*****************************************/
/*! exports provided: Container, VerticalBar, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalBar", function() { return VerticalBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Menustyles__Container",
  componentId: "vjvces-0"
})(["display:flex;justify-content:center;align-items:center;margin:0 1rem 0 auto;"]);
const VerticalBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Menustyles__VerticalBar",
  componentId: "vjvces-1"
})(["height:1.5rem;width:2px;background-color:#888888;margin:0 .5rem;"]);
const Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Menustyles__Link",
  componentId: "vjvces-2"
})(["color:#888888;font-weight:bold;height:100%;font-size:1rem;white-space:nowrap;background-color:transparent;border:none;"]);

/***/ }),

/***/ "./components/Menu/Menu.tsx":
/*!**********************************!*\
  !*** ./components/Menu/Menu.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Menu_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu.styles */ "./components/Menu/Menu.styles.tsx");
var _jsxFileName = "/Users/bradtudor/Documents/interview_challenges/Frontend Challenge/frontend-challenge/src/components/Menu/Menu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChevronDown"]);


const Menu = () => {
  return __jsx(_Menu_styles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_Menu_styles__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "John Doe"), __jsx(_Menu_styles__WEBPACK_IMPORTED_MODULE_4__["VerticalBar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(_Menu_styles__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "More ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    style: {
      color: '#888888'
    },
    icon: ['fas', "chevron-down"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), " "));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/ProgramRow/ProgramRow.styles.tsx":
/*!*****************************************************!*\
  !*** ./components/ProgramRow/ProgramRow.styles.tsx ***!
  \*****************************************************/
/*! exports provided: Container, Logo, TitleWrapper, ProgramName, CollegeName, FieldHeader, FieldValue, FieldWrapper, FieldContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleWrapper", function() { return TitleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramName", function() { return ProgramName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeName", function() { return CollegeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldHeader", function() { return FieldHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldValue", function() { return FieldValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldWrapper", function() { return FieldWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldContainer", function() { return FieldContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "ProgramRowstyles__Container",
  componentId: "s6m04p-0"
})(["display:grid;grid-template-columns:4.5rem 1fr 1fr;grid-template-rows:1fr;grid-column-gap:1rem;height:4rem;width:100%;border-radius:.5rem;box-shadow:2px 2px 2px 2px #888;padding:.5rem 1rem;margin:.5rem 0;cursor:pointer;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProgramRowstyles__Logo",
  componentId: "s6m04p-1"
})(["height:4rem;width:4rem;grid-row-start:1;grid-row-end:4;border-radius:.5rem;background-image:url(", ");background-size:contain;background-repeat:no-repeat;background-position:center;"], props => props.url);
const TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProgramRowstyles__TitleWrapper",
  componentId: "s6m04p-2"
})([""]);
const ProgramName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "ProgramRowstyles__ProgramName",
  componentId: "s6m04p-3"
})(["font-size:22px;grid-row-start:1;grid-row-end:2;"]);
const CollegeName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "ProgramRowstyles__CollegeName",
  componentId: "s6m04p-4"
})(["font-size:18px;grid-row-start:2;grid-row-end:3;"]);
const FieldHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h5.withConfig({
  displayName: "ProgramRowstyles__FieldHeader",
  componentId: "s6m04p-5"
})(["grid-row-start:1;grid-row-end:2;", ";justify-self:center;"], ({
  start,
  end
}) => `
        grid-column-start: ${start};
        grid-column-end: ${end};
    `);
const FieldValue = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "ProgramRowstyles__FieldValue",
  componentId: "s6m04p-6"
})(["grid-row-start:2;grid-row-end:3;", ";justify-self:center;"], ({
  start,
  end
}) => `
        grid-column-start: ${start};
        grid-column-end: ${end};
    `);
const FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProgramRowstyles__FieldWrapper",
  componentId: "s6m04p-7"
})(["display:grid;margin-left:auto;width:25rem;grid-template-columns:repeat(3,1fr);"]);
const FieldContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProgramRowstyles__FieldContainer",
  componentId: "s6m04p-8"
})(["display:flex;flex-direction:column;"]);

/***/ }),

/***/ "./components/ProgramRow/ProgramRow.tsx":
/*!**********************************************!*\
  !*** ./components/ProgramRow/ProgramRow.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgramRow.styles */ "./components/ProgramRow/ProgramRow.styles.tsx");
var _jsxFileName = "/Users/bradtudor/Documents/interview_challenges/Frontend Challenge/frontend-challenge/src/components/ProgramRow/ProgramRow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ProgramRow = ({
  program: {
    school,
    degreeType,
    deliveryMode,
    name,
    id,
    costPerCredit
  }
}) => {
  return __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/programDetail?id=${id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["Logo"], {
    url: school.schoolLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["TitleWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["ProgramName"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, name), __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["CollegeName"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, school.name)), __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["FieldWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["FieldContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["FieldHeader"], {
    start: 4,
    end: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Degree Type"), __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["FieldValue"], {
    start: 4,
    end: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, degreeType)), __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["FieldContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["FieldHeader"], {
    start: 5,
    end: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Delivery"), __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["FieldValue"], {
    start: 5,
    end: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, deliveryMode)), __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["FieldContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["FieldHeader"], {
    start: 6,
    end: 7,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Cost Per Credit"), __jsx(_ProgramRow_styles__WEBPACK_IMPORTED_MODULE_2__["FieldValue"], {
    start: 6,
    end: 7,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "$", costPerCredit || 100)))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgramRow);

/***/ }),

/***/ "./components/SearchBar/SearchBar.styles.tsx":
/*!***************************************************!*\
  !*** ./components/SearchBar/SearchBar.styles.tsx ***!
  \***************************************************/
/*! exports provided: Container, Input, SubmitButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButton", function() { return SubmitButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 //TODO: Style the searchbar components

/*
    The Input:
        * Should grow to the maximum size allowed.
        * Have .2rem horizontal padding 
        * Have 1 rem vertical padding
        * Have a font color of #888
        * The font should be bold
        * there should be no border or outline
        * The placeholder should be colored #ddd
*/

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SearchBarstyles__Container",
  componentId: "sc-1cdk0wo-0"
})(["display:flex;justify-content:center;flex-grow:.8;border:2px solid #bbb;border-radius:.2rem;overflow:hidden;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "SearchBarstyles__Input",
  componentId: "sc-1cdk0wo-1"
})(["display:flex;flex-grow:1;padding:.2rem 1rem;color:#888;font-weight:800;border:none;&,&:focus,&:active{outline:none;}&::placeholder{color:#ddd;}"]);
const SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "SearchBarstyles__SubmitButton",
  componentId: "sc-1cdk0wo-2"
})(["height:auto;width:1.5rem;border:none;background-color:#fa0;cursor:pointer;"]);

/***/ }),

/***/ "./components/SearchBar/SearchBar.tsx":
/*!********************************************!*\
  !*** ./components/SearchBar/SearchBar.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_Term_term_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/Term/term.actions */ "./redux/Term/term.actions.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SearchBar_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchBar.styles */ "./components/SearchBar/SearchBar.styles.tsx");
var _jsxFileName = "/Users/bradtudor/Documents/interview_challenges/Frontend Challenge/frontend-challenge/src/components/SearchBar/SearchBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //Import necissary items to use fontAwesome




_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"]); //import necissary items for updating redux store




 // TODO: Build and style the search bar

/*
    For this component use hooks to manage state, and update the redux store.

    Container:
        * Should house the Input and Button

    The Input:
        * Should be a controlled component
        * Placeholder should read "Search for Online Course"
        * Submit the term to the redux store if the user presses enter
    
    The Button:
        * Should contain the font awesome icon faSearch
        * The color of the icon should be #FFF
        * Submit the term to the redux store if clicked by the user
*/

const SearchBar = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  const submit = () => {
    dispatch(Object(_redux_Term_term_actions__WEBPACK_IMPORTED_MODULE_5__["updateTerm"])(text));
    router.back();
  };

  return __jsx(_SearchBar_styles__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_SearchBar_styles__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    value: text,
    onChange: e => {
      setText(e.target.value);
    },
    placeholder: "Search for Online Course",
    onKeyPress: e => {
      e.key === "Enter" && submit();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx(_SearchBar_styles__WEBPACK_IMPORTED_MODULE_7__["SubmitButton"], {
    onClick: () => {
      submit();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    style: {
      color: "#FFF"
    },
    icon: ["fas", "search"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./components/Spinner/Spinner.styles.tsx":
/*!***********************************************!*\
  !*** ./components/Spinner/Spinner.styles.tsx ***!
  \***********************************************/
/*! exports provided: Container, Inner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inner", function() { return Inner; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Spinnerstyles__Container",
  componentId: "vd50bw-0"
})(["display:flex;flex-grow:1;align-items:center;justify-content:center;"]);
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Spinnerstyles__Inner",
  componentId: "vd50bw-1"
})(["color:#a8a6ae;font-size:90px;text-indent:-9999em;overflow:hidden;width:1em;height:1em;border-radius:50%;margin:72px auto;position:relative;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:load6 1.7s infinite ease,round 1.7s infinite ease;animation:load6 1.7s infinite ease,round 1.7s infinite ease;}@-webkit-keyframes load6{0%{box-shadow:0 -0.83em 0 -0.4em,0 -0.83em 0 -0.42em,0 -0.83em 0 -0.44em,0 -0.83em 0 -0.46em,0 -0.83em 0 -0.477em;}5%,95%{box-shadow:0 -0.83em 0 -0.4em,0 -0.83em 0 -0.42em,0 -0.83em 0 -0.44em,0 -0.83em 0 -0.46em,0 -0.83em 0 -0.477em;}10%,59%{box-shadow:0 -0.83em 0 -0.4em,-0.087em -0.825em 0 -0.42em,-0.173em -0.812em 0 -0.44em,-0.256em -0.789em 0 -0.46em,-0.297em -0.775em 0 -0.477em;}20%{box-shadow:0 -0.83em 0 -0.4em,-0.338em -0.758em 0 -0.42em,-0.555em -0.617em 0 -0.44em,-0.671em -0.488em 0 -0.46em,-0.749em -0.34em 0 -0.477em;}38%{box-shadow:0 -0.83em 0 -0.4em,-0.377em -0.74em 0 -0.42em,-0.645em -0.522em 0 -0.44em,-0.775em -0.297em 0 -0.46em,-0.82em -0.09em 0 -0.477em;}100%{box-shadow:0 -0.83em 0 -0.4em,0 -0.83em 0 -0.42em,0 -0.83em 0 -0.44em,0 -0.83em 0 -0.46em,0 -0.83em 0 -0.477em;}}@keyframes load6{0%{box-shadow:0 -0.83em 0 -0.4em,0 -0.83em 0 -0.42em,0 -0.83em 0 -0.44em,0 -0.83em 0 -0.46em,0 -0.83em 0 -0.477em;}5%,95%{box-shadow:0 -0.83em 0 -0.4em,0 -0.83em 0 -0.42em,0 -0.83em 0 -0.44em,0 -0.83em 0 -0.46em,0 -0.83em 0 -0.477em;}10%,59%{box-shadow:0 -0.83em 0 -0.4em,-0.087em -0.825em 0 -0.42em,-0.173em -0.812em 0 -0.44em,-0.256em -0.789em 0 -0.46em,-0.297em -0.775em 0 -0.477em;}20%{box-shadow:0 -0.83em 0 -0.4em,-0.338em -0.758em 0 -0.42em,-0.555em -0.617em 0 -0.44em,-0.671em -0.488em 0 -0.46em,-0.749em -0.34em 0 -0.477em;}38%{box-shadow:0 -0.83em 0 -0.4em,-0.377em -0.74em 0 -0.42em,-0.645em -0.522em 0 -0.44em,-0.775em -0.297em 0 -0.46em,-0.82em -0.09em 0 -0.477em;}100%{box-shadow:0 -0.83em 0 -0.4em,0 -0.83em 0 -0.42em,0 -0.83em 0 -0.44em,0 -0.83em 0 -0.46em,0 -0.83em 0 -0.477em;}}@-webkit-keyframes round{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes round{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}"]);

/***/ }),

/***/ "./components/Spinner/Spinner.tsx":
/*!****************************************!*\
  !*** ./components/Spinner/Spinner.tsx ***!
  \****************************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spinner_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spinner.styles */ "./components/Spinner/Spinner.styles.tsx");
var _jsxFileName = "/Users/bradtudor/Documents/interview_challenges/Frontend Challenge/frontend-challenge/src/components/Spinner/Spinner.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Spinner = () => __jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_Spinner_styles__WEBPACK_IMPORTED_MODULE_1__["Inner"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}));

/***/ }),

/***/ "./graphQL/queries.ts":
/*!****************************!*\
  !*** ./graphQL/queries.ts ***!
  \****************************/
/*! exports provided: PROGRAM_SEARCH, GET_PROGRAM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRAM_SEARCH", function() { return PROGRAM_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROGRAM", function() { return GET_PROGRAM; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
 // TODO: Write GraphQL Queries

/*
    PROGRAM_SEARCH:
        Create a named export called PROGRAM_SEARCH.  
        this should contain a query called programSearch.
        the query should take in one parameter called data.
        data should have the type ProgramSearchTermInput

        this query should return the count, and a list of programs
        from the programs, it should retrieve id, name, degreeType, 
        deliveryMode, requiredCredits costPerCredit, and school.  
        From the school it should retrieve name, schoolLogo, 
        totalEnrollment, and schoolType.

    GET_PROGRAM:
        Create a named export called GET_PROGRAM.
        this should contain a query called program.
        the query should take in one parameter called data.
        data should have the type ProgramInput.

        this query should return the following fields: id, 
        name, costPerCredit, programUrl, programDescription,
        degreeType, requiredCredits, deliveryMode, and school.
        From the school, it should return the following fields:
        name, schoolLogo, backgroundColor, gradientColor, 
        schoolDescription, and schoolType
*/

const PROGRAM_SEARCH = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query programSearch($data: ProgramSearchTermInput) {
        programSearch(data: $data){
        count
        programs {
            id
            name
            degreeType
            deliveryMode
            requiredCredits
            costPerCredit
            school{
                name
                schoolLogo
                totalEnrollment
                schoolType
            }
        }
    }
}
`;
const GET_PROGRAM = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query program($data: ProgramInput){
        program(data: $data){
            id
            name
            costPerCredit
            programUrl
            programDescription
            degreeType
            requiredCredits
            deliveryMode
            school {
                name
                schoolLogo
                backgroundColor
                gradientColor
                schoolDescription
                schoolType
            }
        }
    }
`;

/***/ }),

/***/ "./pages/HomePage/HomePage.styles.tsx":
/*!********************************************!*\
  !*** ./pages/HomePage/HomePage.styles.tsx ***!
  \********************************************/
/*! exports provided: ProgramContainer, ResultsHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramContainer", function() { return ProgramContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsHeader", function() { return ResultsHeader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ProgramContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HomePagestyles__ProgramContainer",
  componentId: "sc-1lzbgv3-0"
})(["display:flex;flex-direction:column;flex-grow:1;padding:2rem 5rem;overflow-y:scroll;"]);
const ResultsHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "HomePagestyles__ResultsHeader",
  componentId: "sc-1lzbgv3-1"
})(["font-size:2rem;font-weight:600;text-transform:capitalize;color:#888;margin-bottom:1.5rem;"]);

/***/ }),

/***/ "./pages/HomePage/index.tsx":
/*!**********************************!*\
  !*** ./pages/HomePage/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout/Layout */ "./components/Layout/Layout.tsx");
/* harmony import */ var _components_FilterMenu_FilterMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FilterMenu/FilterMenu */ "./components/FilterMenu/FilterMenu.tsx");
/* harmony import */ var _components_BottomBar_BottomBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BottomBar/BottomBar */ "./components/BottomBar/BottomBar.tsx");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _graphQL_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../graphQL/queries */ "./graphQL/queries.ts");
/* harmony import */ var _components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Spinner/Spinner */ "./components/Spinner/Spinner.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _HomePage_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HomePage.styles */ "./pages/HomePage/HomePage.styles.tsx");
/* harmony import */ var _components_ProgramRow_ProgramRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ProgramRow/ProgramRow */ "./components/ProgramRow/ProgramRow.tsx");
var _jsxFileName = "/Users/bradtudor/Documents/interview_challenges/Frontend Challenge/frontend-challenge/src/pages/HomePage/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









 //TODO: Build the home page

/*
  renderProgramContainer:  
    *   Finish the function renderHeader.  If a search term is present, it should return
        "129 Items For Engineering!" where 129 is the number of items and engineering is the search term.
        If the term is not present, it should return "129 Items Found!" where 129 is the total number of items.

    *   Render the list of programs under the ResultsHeader

  HomePage:
    *  Use hooks when possible.

    *  When the home page compoent renders it should trigger the PROGRAM_SEARCH query.
       The graphQL query PROGRAM_SEARCH accepts the following variables:
       offset, limit, term, and filter.  It returns two items, count & programs.
       run the query and render out the HomePage.

    *  Pull the term and filter from the redux store

    *  Create a piece of state for the page vairable

    *  Inside of the layout component render the FilterMenu, ProgramContainer, and BottomBar

    *  If the query is loading, render the spinner.  Once is it done call the renderProgramContainer function.

    *  Pass page, count, a function to update the page, and the numberOfItemsPerPage to the BottomBar

    *  
*/

const renderProgramContainer = (programs, count, term = null) => {
  const renderPrograms = programs => programs.map((program, i) => __jsx(_components_ProgramRow_ProgramRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: program.id + program.name + i,
    program: program,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }));

  const renderHeader = (count, term) => term ? `${count} items found for ${term}!` : `${count} items found!`;

  return __jsx(_HomePage_styles__WEBPACK_IMPORTED_MODULE_8__["ProgramContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_HomePage_styles__WEBPACK_IMPORTED_MODULE_8__["ResultsHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, renderHeader(count, term)), renderPrograms(programs));
};

const HomePage = () => {
  let count = 0;
  let programs = [];
  const itemsPerPage = 10;
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1); // Pull the term and filter from the redux store

  const term = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.term, react_redux__WEBPACK_IMPORTED_MODULE_7__["shallowEqual"]);
  const filter = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.filter, react_redux__WEBPACK_IMPORTED_MODULE_7__["shallowEqual"]);
  let variables = {
    data: {
      offset: (page - 1) * itemsPerPage,
      limit: itemsPerPage,
      term,
      filter
    }
  }; // Use the PROGRAM_SEARCH QUERY to get the count and programs list

  const {
    loading,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(_graphQL_queries__WEBPACK_IMPORTED_MODULE_5__["PROGRAM_SEARCH"], {
    variables
  });

  if (!loading) {
    count = data.programSearch.count;
    programs = data.programSearch.programs;
  }

  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx(_components_FilterMenu_FilterMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }), loading ? __jsx(_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_6__["Spinner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }) : renderProgramContainer(programs, count, term), __jsx(_components_BottomBar_BottomBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    count: count,
    page: page,
    setPage: setPage,
    itemsPerPage: itemsPerPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePage_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage/index */ "./pages/HomePage/index.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_HomePage_index__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./redux/Filter/filter.actions.ts":
/*!****************************************!*\
  !*** ./redux/Filter/filter.actions.ts ***!
  \****************************************/
/*! exports provided: FilterActionTypes, updateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterActionTypes", function() { return FilterActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFilter", function() { return updateFilter; });
//TODO: Setup the filter actions

/*
    * Create an enumerated value called FilterActionTypes
        it should have one value called updateFilter

    * Create an action creator called updateFilter that updates the filter state.
*/
let FilterActionTypes;

(function (FilterActionTypes) {
  FilterActionTypes["updateFilter"] = "UPDATE_FILTER";
})(FilterActionTypes || (FilterActionTypes = {}));

const updateFilter = filter => {
  return {
    type: FilterActionTypes.updateFilter,
    payload: filter
  };
};

/***/ }),

/***/ "./redux/Term/term.actions.ts":
/*!************************************!*\
  !*** ./redux/Term/term.actions.ts ***!
  \************************************/
/*! exports provided: TermActionTypes, updateTerm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermActionTypes", function() { return TermActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTerm", function() { return updateTerm; });
//TODO: Setup the term actions

/*
    * Create an enumerated value called TermActionTypes
        it should have one value called updateTerm

    * Create an action creator called updateTerm.  It should update the term piece of state.
*/
let TermActionTypes;

(function (TermActionTypes) {
  TermActionTypes["updateTerm"] = "UPDATE_TERM";
})(TermActionTypes || (TermActionTypes = {}));

const updateTerm = searchTerm => {
  return {
    type: TermActionTypes.updateTerm,
    payload: searchTerm
  };
};

/***/ }),

/***/ "./redux/types.ts":
/*!************************!*\
  !*** ./redux/types.ts ***!
  \************************/
/*! exports provided: department, filterType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "department", function() { return department; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterType", function() { return filterType; });
let department;

(function (department) {
  department["engineering"] = "Engineering";
  department["business"] = "Business";
  department["accounting"] = "Accounting";
  department["artAndScience"] = "Art and science";
  department["law"] = "Law";
})(department || (department = {}));

let filterType;

(function (filterType) {
  filterType["certificate"] = "Cer";
  filterType["bachlores"] = "Bach";
  filterType["masters"] = "Mas";
  filterType["phd"] = "Doc";
  filterType["all"] = "";
})(filterType || (filterType = {}));

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bradtudor/Documents/interview_challenges/Frontend Challenge/frontend-challenge/src/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map