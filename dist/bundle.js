/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\n\n\n\nconst contentDiv = document.querySelector(\"#content\");\nconst header = document.createElement(\"header\");\nconst nav = document.createElement(\"nav\");\nconst ul = document.createElement(\"ul\");\n\nconst menuBtn = document.createElement(\"li\");\nmenuBtn.setAttribute(\"id\", \"menu-tab\");\nmenuBtn.setAttribute(\"class\", \"clickable\");\nmenuBtn.textContent = \"Menu\";\n\nconst homeBtn = document.createElement(\"div\")\nhomeBtn.setAttribute(\"id\", \"logo-nav\");\nhomeBtn.setAttribute(\"class\", \"clickable\");\nconst logoImg = document.createElement(\"img\");\nlogoImg.setAttribute(\"src\", \"images/logo.png\");\nlogoImg.setAttribute(\"alt\", \"lynettes logo\");\nhomeBtn.appendChild(logoImg);\n\nconst contactBtn = document.createElement(\"li\")\ncontactBtn.setAttribute(\"id\", \"contact-tab\");\ncontactBtn.setAttribute(\"class\", \"clickable\");\ncontactBtn.textContent = \"Contact\";\n\nul.appendChild(menuBtn);\nul.appendChild(homeBtn)\nul.appendChild(contactBtn);\nnav.appendChild(ul);\nheader.appendChild(nav);\n\nconst main = document.createElement(\"main\");\n\ncontentDiv.appendChild(header);\ncontentDiv.appendChild(main);\n\nObject(_modules_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(main);\n\n\nhomeBtn.addEventListener(\"click\", function() {\n  Object(_modules_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(main);\n})\n\nmenuBtn.addEventListener(\"click\", function() {\n  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(main);\n})\n\ncontactBtn.addEventListener(\"click\", function() {\n  Object(_modules_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(main);\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addContactElements; });\nfunction addContactElements(parent) {\n  const contactDetails = document.createElement(\"h1\");\n  contactDetails.setAttribute(\"class\", \"contact-detail\");\n  contactDetails.textContent = \"Contact Us\";\n\n  const contact = document.createElement(\"div\");\n  contact.setAttribute(\"id\", \"contact\");\n\n  const contactP = document.createElement(\"p\");\n  contactP.textContent = \"Contact us at: +254701803444\"\n  contact.appendChild(contactP);\n\n  parent.innerHTML = \"\";\n  parent.appendChild(contactDetails);\n  parent.appendChild(contact);\n}\n\n//# sourceURL=webpack:///./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addHomeElement; });\nfunction addHomeElement(parent) {\n  const home = document.createElement(\"div\");\n  home.setAttribute(\"id\", \"home\");\n\n  const homeImg = document.createElement(\"div\");\n  homeImg.setAttribute(\"id\", \"homeImg\");\n  const img = document.createElement(\"img\");\n  img.setAttribute(\"src\", \"images/pic4.jpg\");\n  img.setAttribute(\"alt\", \"eggs, salad, waffles and an avocado\");\n  homeImg.appendChild(img);\n\n  const homeDescription = document.createElement(\"div\");\n  homeDescription.setAttribute(\"id\", \"home-description\");\n  const h1Description = document.createElement(\"h1\");\n  h1Description.textContent = \"We offer the best foods in town\";\n  const pDescription = document.createElement(\"p\");\n  pDescription.textContent = \"We offer the best services in a cool environment with very friendly staff members\";\n\n  homeDescription.appendChild(h1Description);\n  homeDescription.appendChild(pDescription);\n\n  home.appendChild(homeImg);\n  home.appendChild(homeDescription);\n\n  parent.innerHTML = \"\";\n  parent.appendChild(home);\n}\n\n//# sourceURL=webpack:///./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addMenuElements; });\nfunction addMenuElements(parent) {\n  const menu = document.createElement(\"div\");\n  menu.setAttribute(\"id\", \"menu\");\n\n  const menuList = [\n    {\n      imgUrl: \"images/pic1.jpg\",\n      name: \"Rice\",\n      price: \"Ksh200\"\n    },\n    {\n      imgUrl: \"images/pic2.jpg\",\n      name: \"Chapati\",\n      price: \"Ksh250\"\n    },\n    {\n      imgUrl: \"images/pic3.jpg\",\n      name: \"Biryani\",\n      price: \"Ksh350\"\n    }\n  ]\n\n  const menuElements = menuList.map((item) =>{\n    const menuItem = document.createElement(\"div\");\n    menuItem.setAttribute(\"class\", \"menu-item\");\n\n    const itemImg = document.createElement(\"img\");\n    itemImg.setAttribute(\"src\", item.imgUrl);\n    itemImg.setAttribute(\"alt\", item.name);\n    menuItem.appendChild(itemImg);\n\n    const itemName = document.createElement(\"h2\");\n    itemName.textContent = item.name;\n    menuItem.appendChild(itemName);\n\n    const itemPrice = document.createElement(\"p\");\n    itemPrice.textContent = item.price;\n    menuItem.appendChild(itemPrice);\n\n    return menuItem\n  })\n\n  const pageTitle = document.createElement(\"h1\");\n  pageTitle.setAttribute(\"class\", \"page-title\");\n  pageTitle.textContent = \"menu\";\n\n  menuElements.forEach((el) => {\n    menu.appendChild(el);\n  })\n\n  parent.innerHTML = \"\";\n  parent.appendChild(pageTitle);\n  parent.appendChild(menu);\n}\n\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ })

/******/ });