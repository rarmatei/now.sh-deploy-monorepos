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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./pages/index.scss
var pages = __webpack_require__("kxKB");

// CONCATENATED MODULE: ./assets/nx-logo-white.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/external_react_default.a.createElement("g", {
  id: "Styles-&-Quick-Wins",
  stroke: "none",
  strokeWidth: 1,
  fill: "none",
  fillRule: "evenodd"
}, external_react_default.a.createElement("g", {
  id: "Nx---Quick-Wins",
  transform: "translate(-476.000000, -1284.000000)",
  fillRule: "nonzero"
}, external_react_default.a.createElement("g", {
  id: "Logos",
  transform: "translate(-11.000000, 782.000000)"
}, external_react_default.a.createElement("g", {
  id: "Nx_Flat_White",
  transform: "translate(487.000000, 502.000000)"
}, external_react_default.a.createElement("polygon", {
  id: "Path",
  fill: "#FFFFFF",
  points: "130.68 104.59 97.49 52.71 97.44 96.3 40.24 0 0 0 0 162.57 39.79 162.57 39.92 66.39 96.53 158.26"
}), external_react_default.a.createElement("polygon", {
  id: "Path",
  fill: "#FFFFFF",
  points: "97.5 41.79 137.24 41.79 137.33 41.33 137.33 0 97.54 0 97.49 41.33"
}), external_react_default.a.createElement("path", {
  d: "M198.66,86.86 C189.139872,86.6795216 180.538723,92.516445 177.19,101.43 C182.764789,93.0931021 193.379673,89.7432211 202.73,93.37 C207.05,95.13 212.73,97.97 217.23,96.45 C212.950306,90.4438814 206.034895,86.8725952 198.66,86.86 L198.66,86.86 Z",
  id: "Path",
  fill: "#96D8E9"
}), external_react_default.a.createElement("path", {
  d: "M243.75,106.42 C243.75,101.55 241.1,100.42 235.6,98.42 C231.52,97 226.89,95.4 223.52,91 C222.86,90.13 222.25,89.15 221.6,88.11 C220.14382,85.4164099 218.169266,83.037429 215.79,81.11 C212.58,78.75 208.37,77.6 202.91,77.6 C191.954261,77.6076705 182.084192,84.2206169 177.91,94.35 C183.186964,87.0278244 191.956716,83.0605026 200.940147,83.9314609 C209.923578,84.8024193 217.767888,90.3805017 221.54,98.58 C223.424615,101.689762 227.141337,103.174819 230.65,102.22 C236.02,101.07 235.65,106.15 243.76,107.87 L243.75,106.42 Z",
  id: "Path",
  fill: "#48C4E5"
}), external_react_default.a.createElement("path", {
  d: "M261.46,105.38 L261.46,105.27 C261.34,73.03 235.17,45.45 202.91,45.45 C183.207085,45.4363165 164.821777,55.3450614 154,71.81 L153.79,71.45 L137.23,45.45 L97.5,45.4499858 L135.25,104.57 L98.41,162.57 L137,162.57 L153.79,136.78 L170.88,162.57 L209.48,162.57 L174.48,107.49 C173.899005,106.416838 173.583536,105.220114 173.56,104 C173.557346,96.2203871 176.64661,88.7586448 182.147627,83.2576275 C187.648645,77.7566101 195.110387,74.6673462 202.89,74.67 C219.11,74.67 221.82,84.37 225.32,88.93 C232.23,97.93 246.03,93.99 246.03,105.73 L246.03,105.73 C246.071086,108.480945 247.576662,111.001004 249.979593,112.340896 C252.382524,113.680787 255.317747,113.636949 257.679593,112.225896 C260.041438,110.814842 261.471086,108.250945 261.43,105.5 L261.43,105.5 L261.43,105.38 L261.46,105.38 Z",
  id: "Path",
  fill: "#FFFFFF"
}), external_react_default.a.createElement("path", {
  d: "M261.5,113.68 C261.892278,116.421801 261.504116,119.218653 260.38,121.75 C258.18,126.84 254.51,125.14 254.51,125.14 C254.51,125.14 251.35,123.6 253.27,120.65 C255.4,117.36 259.61,117.74 261.5,113.68 Z",
  id: "Path",
  fill: "#FFFFFF"
})))));

var nx_logo_white_SvgNxLogoWhite = function SvgNxLogoWhite(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return external_react_default.a.createElement("svg", _extends({
    width: "262px",
    height: "163px",
    viewBox: "0 0 262 163"
  }, props), title ? external_react_default.a.createElement("title", null, title) : null, _ref2);
};

/* harmony default export */ var nx_logo_white = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjYycHgiIGhlaWdodD0iMTYzcHgiIHZpZXdCb3g9IjAgMCAyNjIgMTYzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGcgaWQ9IlN0eWxlcy0mYW1wOy1RdWljay1XaW5zIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTngtLS1RdWljay1XaW5zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDc2LjAwMDAwMCwgLTEyODQuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9IkxvZ29zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEuMDAwMDAwLCA3ODIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iTnhfRmxhdF9XaGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDg3LjAwMDAwMCwgNTAyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEzMC42OCAxMDQuNTkgOTcuNDkgNTIuNzEgOTcuNDQgOTYuMyA0MC4yNCAwIDAgMCAwIDE2Mi41NyAzOS43OSAxNjIuNTcgMzkuOTIgNjYuMzkgOTYuNTMgMTU4LjI2Ii8+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iOTcuNSA0MS43OSAxMzcuMjQgNDEuNzkgMTM3LjMzIDQxLjMzIDEzNy4zMyAwIDk3LjU0IDAgOTcuNDkgNDEuMzMiLz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTk4LjY2LDg2Ljg2IEMxODkuMTM5ODcyLDg2LjY3OTUyMTYgMTgwLjUzODcyMyw5Mi41MTY0NDUgMTc3LjE5LDEwMS40MyBDMTgyLjc2NDc4OSw5My4wOTMxMDIxIDE5My4zNzk2NzMsODkuNzQzMjIxMSAyMDIuNzMsOTMuMzcgQzIwNy4wNSw5NS4xMyAyMTIuNzMsOTcuOTcgMjE3LjIzLDk2LjQ1IEMyMTIuOTUwMzA2LDkwLjQ0Mzg4MTQgMjA2LjAzNDg5NSw4Ni44NzI1OTUyIDE5OC42Niw4Ni44NiBMMTk4LjY2LDg2Ljg2IFoiIGlkPSJQYXRoIiBmaWxsPSIjOTZEOEU5Ii8+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0My43NSwxMDYuNDIgQzI0My43NSwxMDEuNTUgMjQxLjEsMTAwLjQyIDIzNS42LDk4LjQyIEMyMzEuNTIsOTcgMjI2Ljg5LDk1LjQgMjIzLjUyLDkxIEMyMjIuODYsOTAuMTMgMjIyLjI1LDg5LjE1IDIyMS42LDg4LjExIEMyMjAuMTQzODIsODUuNDE2NDA5OSAyMTguMTY5MjY2LDgzLjAzNzQyOSAyMTUuNzksODEuMTEgQzIxMi41OCw3OC43NSAyMDguMzcsNzcuNiAyMDIuOTEsNzcuNiBDMTkxLjk1NDI2MSw3Ny42MDc2NzA1IDE4Mi4wODQxOTIsODQuMjIwNjE2OSAxNzcuOTEsOTQuMzUgQzE4My4xODY5NjQsODcuMDI3ODI0NCAxOTEuOTU2NzE2LDgzLjA2MDUwMjYgMjAwLjk0MDE0Nyw4My45MzE0NjA5IEMyMDkuOTIzNTc4LDg0LjgwMjQxOTMgMjE3Ljc2Nzg4OCw5MC4zODA1MDE3IDIyMS41NCw5OC41OCBDMjIzLjQyNDYxNSwxMDEuNjg5NzYyIDIyNy4xNDEzMzcsMTAzLjE3NDgxOSAyMzAuNjUsMTAyLjIyIEMyMzYuMDIsMTAxLjA3IDIzNS42NSwxMDYuMTUgMjQzLjc2LDEwNy44NyBMMjQzLjc1LDEwNi40MiBaIiBpZD0iUGF0aCIgZmlsbD0iIzQ4QzRFNSIvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNjEuNDYsMTA1LjM4IEwyNjEuNDYsMTA1LjI3IEMyNjEuMzQsNzMuMDMgMjM1LjE3LDQ1LjQ1IDIwMi45MSw0NS40NSBDMTgzLjIwNzA4NSw0NS40MzYzMTY1IDE2NC44MjE3NzcsNTUuMzQ1MDYxNCAxNTQsNzEuODEgTDE1My43OSw3MS40NSBMMTM3LjIzLDQ1LjQ1IEw5Ny41LDQ1LjQ0OTk4NTggTDEzNS4yNSwxMDQuNTcgTDk4LjQxLDE2Mi41NyBMMTM3LDE2Mi41NyBMMTUzLjc5LDEzNi43OCBMMTcwLjg4LDE2Mi41NyBMMjA5LjQ4LDE2Mi41NyBMMTc0LjQ4LDEwNy40OSBDMTczLjg5OTAwNSwxMDYuNDE2ODM4IDE3My41ODM1MzYsMTA1LjIyMDExNCAxNzMuNTYsMTA0IEMxNzMuNTU3MzQ2LDk2LjIyMDM4NzEgMTc2LjY0NjYxLDg4Ljc1ODY0NDggMTgyLjE0NzYyNyw4My4yNTc2Mjc1IEMxODcuNjQ4NjQ1LDc3Ljc1NjYxMDEgMTk1LjExMDM4Nyw3NC42NjczNDYyIDIwMi44OSw3NC42NyBDMjE5LjExLDc0LjY3IDIyMS44Miw4NC4zNyAyMjUuMzIsODguOTMgQzIzMi4yMyw5Ny45MyAyNDYuMDMsOTMuOTkgMjQ2LjAzLDEwNS43MyBMMjQ2LjAzLDEwNS43MyBDMjQ2LjA3MTA4NiwxMDguNDgwOTQ1IDI0Ny41NzY2NjIsMTExLjAwMTAwNCAyNDkuOTc5NTkzLDExMi4zNDA4OTYgQzI1Mi4zODI1MjQsMTEzLjY4MDc4NyAyNTUuMzE3NzQ3LDExMy42MzY5NDkgMjU3LjY3OTU5MywxMTIuMjI1ODk2IEMyNjAuMDQxNDM4LDExMC44MTQ4NDIgMjYxLjQ3MTA4NiwxMDguMjUwOTQ1IDI2MS40MywxMDUuNSBMMjYxLjQzLDEwNS41IEwyNjEuNDMsMTA1LjM4IEwyNjEuNDYsMTA1LjM4IFoiIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIi8+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2MS41LDExMy42OCBDMjYxLjg5MjI3OCwxMTYuNDIxODAxIDI2MS41MDQxMTYsMTE5LjIxODY1MyAyNjAuMzgsMTIxLjc1IEMyNTguMTgsMTI2Ljg0IDI1NC41MSwxMjUuMTQgMjU0LjUxLDEyNS4xNCBDMjU0LjUxLDEyNS4xNCAyNTEuMzUsMTIzLjYgMjUzLjI3LDEyMC42NSBDMjU1LjQsMTE3LjM2IDI1OS42MSwxMTcuNzQgMjYxLjUsMTEzLjY4IFoiIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIi8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

// CONCATENATED MODULE: ./environments/environment.ts
// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.
const environment = {
  production: false
};
// CONCATENATED MODULE: ./pages/index.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
var __jsx = external_react_default.a.createElement;




const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return __jsx("div", {
    className: "app"
  }, __jsx("header", {
    className: "flex"
  }, __jsx(nx_logo_white_SvgNxLogoWhite, {
    alt: "",
    width: "75",
    height: "50"
  }), __jsx("h1", null, "Welcome to frontend! [", environment.production ? 'PROD' : 'DEV', "]")), __jsx("main", null, __jsx("h2", null, "Resources & Tools"), __jsx("p", null, "Thank you for using and showing some \u2665 for Nx."), __jsx("div", {
    className: "flex github-star-container"
  }, __jsx("a", {
    href: "https://github.com/nrwl/nx",
    target: "_blank",
    rel: "noopener noreferrer"
  }, ' ', "If you like Nx, please give it a star:", __jsx("div", {
    className: "github-star-badge"
  }, __jsx("svg", {
    className: "material-icons",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), __jsx("path", {
    d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
  })), "Star"))), __jsx("p", null, "Here are some links to help you get started."), __jsx("ul", {
    className: "resources"
  }, __jsx("li", {
    className: "col-span-2"
  }, __jsx("a", {
    className: "resource flex",
    href: "https://connect.nrwl.io/app/courses/nx-workspaces/intro"
  }, "Nx video course")), __jsx("li", {
    className: "col-span-2"
  }, __jsx("a", {
    className: "resource flex",
    href: "https://nx.dev/react/getting-started/what-is-nx"
  }, "Nx video tutorial")), __jsx("li", {
    className: "col-span-2"
  }, __jsx("a", {
    className: "resource flex",
    href: "https://nx.dev/react/tutorial/01-create-application"
  }, "Interactive tutorial")), __jsx("li", {
    className: "col-span-2"
  }, __jsx("a", {
    className: "resource flex",
    href: "https://connect.nrwl.io/"
  }, __jsx("img", {
    height: "36",
    alt: "Nrwl Connect",
    src: "https://connect.nrwl.io/assets/img/CONNECT_ColorIcon.png"
  }), __jsx("span", {
    className: "gutter-left"
  }, "Nrwl Connect")))), __jsx("h2", null, "Next Steps"), __jsx("p", null, "Here are some things you can do with Nx."), __jsx("details", {
    open: true
  }, __jsx("summary", null, "Add UI library"), __jsx("pre", null, `# Generate UI lib
nx g @nrwl/react:lib ui

# Add a component
nx g @nrwl/react:component xyz --project ui`)), __jsx("details", null, __jsx("summary", null, "View dependency graph"), __jsx("pre", null, `nx dep-graph`)), __jsx("details", null, __jsx("summary", null, "Run affected commands"), __jsx("pre", null, `# see what's been affected by changes
nx affected:dep-graph

# run tests for current changes
nx affected:test

# run e2e tests for current changes
nx affected:e2e
`))));
};
/* harmony default export */ var pages_0 = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kxKB":
/***/ (function(module, exports) {



/***/ })

/******/ });