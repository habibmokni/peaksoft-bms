function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-routing-module"], {
  /***/
  "./node_modules/camel-case/dist.es2015/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/camel-case/dist.es2015/index.js ***!
    \******************************************************/

  /*! exports provided: camelCaseTransform, camelCaseTransformMerge, camelCase */

  /***/
  function node_modulesCamelCaseDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "camelCaseTransform", function () {
      return camelCaseTransform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "camelCaseTransformMerge", function () {
      return camelCaseTransformMerge;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "camelCase", function () {
      return camelCase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var pascal_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! pascal-case */
    "./node_modules/pascal-case/dist.es2015/index.js");

    function camelCaseTransform(input, index) {
      if (index === 0) return input.toLowerCase();
      return Object(pascal_case__WEBPACK_IMPORTED_MODULE_1__["pascalCaseTransform"])(input, index);
    }

    function camelCaseTransformMerge(input, index) {
      if (index === 0) return input.toLowerCase();
      return Object(pascal_case__WEBPACK_IMPORTED_MODULE_1__["pascalCaseTransformMerge"])(input);
    }

    function camelCase(input, options) {
      if (options === void 0) {
        options = {};
      }

      return Object(pascal_case__WEBPACK_IMPORTED_MODULE_1__["pascalCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        transform: camelCaseTransform
      }, options));
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/capital-case/dist.es2015/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/capital-case/dist.es2015/index.js ***!
    \********************************************************/

  /*! exports provided: capitalCaseTransform, capitalCase */

  /***/
  function node_modulesCapitalCaseDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "capitalCaseTransform", function () {
      return capitalCaseTransform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "capitalCase", function () {
      return capitalCase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! no-case */
    "./node_modules/no-case/dist.es2015/index.js");
    /* harmony import */


    var upper_case_first__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! upper-case-first */
    "./node_modules/upper-case-first/dist.es2015/index.js");

    function capitalCaseTransform(input) {
      return Object(upper_case_first__WEBPACK_IMPORTED_MODULE_2__["upperCaseFirst"])(input.toLowerCase());
    }

    function capitalCase(input, options) {
      if (options === void 0) {
        options = {};
      }

      return Object(no_case__WEBPACK_IMPORTED_MODULE_1__["noCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        delimiter: " ",
        transform: capitalCaseTransform
      }, options));
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/change-case/dist.es2015/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/change-case/dist.es2015/index.js ***!
    \*******************************************************/

  /*! exports provided: camelCaseTransform, camelCaseTransformMerge, camelCase, capitalCaseTransform, capitalCase, constantCase, dotCase, headerCase, noCase, paramCase, pascalCaseTransform, pascalCaseTransformMerge, pascalCase, pathCase, sentenceCaseTransform, sentenceCase, snakeCase */

  /***/
  function node_modulesChangeCaseDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var camel_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! camel-case */
    "./node_modules/camel-case/dist.es2015/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "camelCaseTransform", function () {
      return camel_case__WEBPACK_IMPORTED_MODULE_0__["camelCaseTransform"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "camelCaseTransformMerge", function () {
      return camel_case__WEBPACK_IMPORTED_MODULE_0__["camelCaseTransformMerge"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "camelCase", function () {
      return camel_case__WEBPACK_IMPORTED_MODULE_0__["camelCase"];
    });
    /* harmony import */


    var capital_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! capital-case */
    "./node_modules/capital-case/dist.es2015/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "capitalCaseTransform", function () {
      return capital_case__WEBPACK_IMPORTED_MODULE_1__["capitalCaseTransform"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "capitalCase", function () {
      return capital_case__WEBPACK_IMPORTED_MODULE_1__["capitalCase"];
    });
    /* harmony import */


    var constant_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! constant-case */
    "./node_modules/constant-case/dist.es2015/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "constantCase", function () {
      return constant_case__WEBPACK_IMPORTED_MODULE_2__["constantCase"];
    });
    /* harmony import */


    var dot_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dot-case */
    "./node_modules/dot-case/dist.es2015/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "dotCase", function () {
      return dot_case__WEBPACK_IMPORTED_MODULE_3__["dotCase"];
    });
    /* harmony import */


    var header_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! header-case */
    "./node_modules/header-case/dist.es2015/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "headerCase", function () {
      return header_case__WEBPACK_IMPORTED_MODULE_4__["headerCase"];
    });
    /* harmony import */


    var no_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! no-case */
    "./node_modules/no-case/dist.es2015/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "noCase", function () {
      return no_case__WEBPACK_IMPORTED_MODULE_5__["noCase"];
    });
    /* harmony import */


    var param_case__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! param-case */
    "./node_modules/param-case/dist.es2015/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "paramCase", function () {
      return param_case__WEBPACK_IMPORTED_MODULE_6__["paramCase"];
    });
    /* harmony import */


    var pascal_case__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! pascal-case */
    "./node_modules/pascal-case/dist.es2015/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "pascalCaseTransform", function () {
      return pascal_case__WEBPACK_IMPORTED_MODULE_7__["pascalCaseTransform"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "pascalCaseTransformMerge", function () {
      return pascal_case__WEBPACK_IMPORTED_MODULE_7__["pascalCaseTransformMerge"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "pascalCase", function () {
      return pascal_case__WEBPACK_IMPORTED_MODULE_7__["pascalCase"];
    });
    /* harmony import */


    var path_case__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! path-case */
    "./node_modules/path-case/dist.es2015/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "pathCase", function () {
      return path_case__WEBPACK_IMPORTED_MODULE_8__["pathCase"];
    });
    /* harmony import */


    var sentence_case__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! sentence-case */
    "./node_modules/sentence-case/dist.es2015/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sentenceCaseTransform", function () {
      return sentence_case__WEBPACK_IMPORTED_MODULE_9__["sentenceCaseTransform"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sentenceCase", function () {
      return sentence_case__WEBPACK_IMPORTED_MODULE_9__["sentenceCase"];
    });
    /* harmony import */


    var snake_case__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! snake-case */
    "./node_modules/snake-case/dist.es2015/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "snakeCase", function () {
      return snake_case__WEBPACK_IMPORTED_MODULE_10__["snakeCase"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/constant-case/dist.es2015/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/constant-case/dist.es2015/index.js ***!
    \*********************************************************/

  /*! exports provided: constantCase */

  /***/
  function node_modulesConstantCaseDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "constantCase", function () {
      return constantCase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! no-case */
    "./node_modules/no-case/dist.es2015/index.js");
    /* harmony import */


    var upper_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! upper-case */
    "./node_modules/upper-case/dist.es2015/index.js");

    function constantCase(input, options) {
      if (options === void 0) {
        options = {};
      }

      return Object(no_case__WEBPACK_IMPORTED_MODULE_1__["noCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        delimiter: "_",
        transform: upper_case__WEBPACK_IMPORTED_MODULE_2__["upperCase"]
      }, options));
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/dot-case/dist.es2015/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/dot-case/dist.es2015/index.js ***!
    \****************************************************/

  /*! exports provided: dotCase */

  /***/
  function node_modulesDotCaseDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dotCase", function () {
      return dotCase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! no-case */
    "./node_modules/no-case/dist.es2015/index.js");

    function dotCase(input, options) {
      if (options === void 0) {
        options = {};
      }

      return Object(no_case__WEBPACK_IMPORTED_MODULE_1__["noCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        delimiter: "."
      }, options));
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/header-case/dist.es2015/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/header-case/dist.es2015/index.js ***!
    \*******************************************************/

  /*! exports provided: headerCase */

  /***/
  function node_modulesHeaderCaseDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "headerCase", function () {
      return headerCase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var capital_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! capital-case */
    "./node_modules/capital-case/dist.es2015/index.js");

    function headerCase(input, options) {
      if (options === void 0) {
        options = {};
      }

      return Object(capital_case__WEBPACK_IMPORTED_MODULE_1__["capitalCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        delimiter: "-"
      }, options));
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/lower-case/dist.es2015/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/lower-case/dist.es2015/index.js ***!
    \******************************************************/

  /*! exports provided: localeLowerCase, lowerCase */

  /***/
  function node_modulesLowerCaseDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "localeLowerCase", function () {
      return localeLowerCase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lowerCase", function () {
      return lowerCase;
    });
    /**
     * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
     */


    var SUPPORTED_LOCALE = {
      tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
          İ: "i",
          I: "\u0131",
          İ: "i"
        }
      },
      az: {
        regexp: /\u0130/g,
        map: {
          İ: "i",
          I: "\u0131",
          İ: "i"
        }
      },
      lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
          I: "i\u0307",
          J: "j\u0307",
          Į: "\u012F\u0307",
          Ì: "i\u0307\u0300",
          Í: "i\u0307\u0301",
          Ĩ: "i\u0307\u0303"
        }
      }
    };
    /**
     * Localized lower case.
     */

    function localeLowerCase(str, locale) {
      var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
      if (lang) return lowerCase(str.replace(lang.regexp, function (m) {
        return lang.map[m];
      }));
      return lowerCase(str);
    }
    /**
     * Lower case as a function.
     */


    function lowerCase(str) {
      return str.toLowerCase();
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/no-case/dist.es2015/index.js":
  /*!***************************************************!*\
    !*** ./node_modules/no-case/dist.es2015/index.js ***!
    \***************************************************/

  /*! exports provided: noCase */

  /***/
  function node_modulesNoCaseDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "noCase", function () {
      return noCase;
    });
    /* harmony import */


    var lower_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! lower-case */
    "./node_modules/lower-case/dist.es2015/index.js"); // Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").


    var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g]; // Remove all non-word characters.

    var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
    /**
     * Normalize the string into something other libraries can manipulate easier.
     */

    function noCase(input, options) {
      if (options === void 0) {
        options = {};
      }

      var _a = options.splitRegexp,
          splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a,
          _b = options.stripRegexp,
          stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b,
          _c = options.transform,
          transform = _c === void 0 ? lower_case__WEBPACK_IMPORTED_MODULE_0__["lowerCase"] : _c,
          _d = options.delimiter,
          delimiter = _d === void 0 ? " " : _d;
      var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
      var start = 0;
      var end = result.length; // Trim the delimiter from around the output string.

      while (result.charAt(start) === "\0") {
        start++;
      }

      while (result.charAt(end - 1) === "\0") {
        end--;
      } // Transform each token independently.


      return result.slice(start, end).split("\0").map(transform).join(delimiter);
    }
    /**
     * Replace `re` in the input string with the replacement value.
     */


    function replace(input, re, value) {
      if (re instanceof RegExp) return input.replace(re, value);
      return re.reduce(function (input, re) {
        return input.replace(re, value);
      }, input);
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/param-case/dist.es2015/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/param-case/dist.es2015/index.js ***!
    \******************************************************/

  /*! exports provided: paramCase */

  /***/
  function node_modulesParamCaseDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "paramCase", function () {
      return paramCase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var dot_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dot-case */
    "./node_modules/dot-case/dist.es2015/index.js");

    function paramCase(input, options) {
      if (options === void 0) {
        options = {};
      }

      return Object(dot_case__WEBPACK_IMPORTED_MODULE_1__["dotCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        delimiter: "-"
      }, options));
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/pascal-case/dist.es2015/index.js":
  /*!*******************************************************!*\
    !*** ./node_modules/pascal-case/dist.es2015/index.js ***!
    \*******************************************************/

  /*! exports provided: pascalCaseTransform, pascalCaseTransformMerge, pascalCase */

  /***/
  function node_modulesPascalCaseDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pascalCaseTransform", function () {
      return pascalCaseTransform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pascalCaseTransformMerge", function () {
      return pascalCaseTransformMerge;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pascalCase", function () {
      return pascalCase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! no-case */
    "./node_modules/no-case/dist.es2015/index.js");

    function pascalCaseTransform(input, index) {
      var firstChar = input.charAt(0);
      var lowerChars = input.substr(1).toLowerCase();

      if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
      }

      return "" + firstChar.toUpperCase() + lowerChars;
    }

    function pascalCaseTransformMerge(input) {
      return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    }

    function pascalCase(input, options) {
      if (options === void 0) {
        options = {};
      }

      return Object(no_case__WEBPACK_IMPORTED_MODULE_1__["noCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        delimiter: "",
        transform: pascalCaseTransform
      }, options));
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/path-case/dist.es2015/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/path-case/dist.es2015/index.js ***!
    \*****************************************************/

  /*! exports provided: pathCase */

  /***/
  function node_modulesPathCaseDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pathCase", function () {
      return pathCase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var dot_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dot-case */
    "./node_modules/dot-case/dist.es2015/index.js");

    function pathCase(input, options) {
      if (options === void 0) {
        options = {};
      }

      return Object(dot_case__WEBPACK_IMPORTED_MODULE_1__["dotCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        delimiter: "/"
      }, options));
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/prismjs/components/prism-bash.js":
  /*!*******************************************************!*\
    !*** ./node_modules/prismjs/components/prism-bash.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismBashJs(module, exports) {
    (function (Prism) {
      // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
      // + LC_ALL, RANDOM, REPLY, SECONDS.
      // + make sure PS1..4 are here as they are not always set,
      // - some useless things.
      var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
      var insideString = {
        'environment': {
          pattern: RegExp("\\$" + envVars),
          alias: 'constant'
        },
        'variable': [// [0]: Arithmetic Environment
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: true,
          inside: {
            // If there is a $ sign at the beginning highlight $(( and )) as variable
            'variable': [{
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: true
            }, /^\$\(\(/],
            'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
            // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
            'operator': /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
            // If there is no $ sign at the beginning highlight (( and )) as punctuation
            'punctuation': /\(\(?|\)\)?|,|;/
          }
        }, // [1]: Command Substitution
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: true,
          inside: {
            'variable': /^\$\(|^`|\)$|`$/
          }
        }, // [2]: Brace expansion
        {
          pattern: /\$\{[^}]+\}/,
          greedy: true,
          inside: {
            'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            'punctuation': /[\[\]]/,
            'environment': {
              pattern: RegExp("(\\{)" + envVars),
              lookbehind: true,
              alias: 'constant'
            }
          }
        }, /\$(?:\w+|[#?*!@$])/],
        // Escape sequences from echo and printf's manuals, and escaped quotes.
        'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
      };
      Prism.languages.bash = {
        'shebang': {
          pattern: /^#!\s*\/.*/,
          alias: 'important'
        },
        'comment': {
          pattern: /(^|[^"{\\$])#.*/,
          lookbehind: true
        },
        'function-name': [// a) function foo {
        // b) foo() {
        // c) function foo() {
        // but not “foo {”
        {
          // a) and c)
          pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: true,
          alias: 'function'
        }, {
          // b)
          pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
          alias: 'function'
        }],
        // Highlight variable names as variables in for and select beginnings.
        'for-or-select': {
          pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
          alias: 'variable',
          lookbehind: true
        },
        // Highlight variable names as variables in the left-hand part
        // of assignments (“=” and “+=”).
        'assign-left': {
          pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
          inside: {
            'environment': {
              pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
              lookbehind: true,
              alias: 'constant'
            }
          },
          alias: 'variable',
          lookbehind: true
        },
        'string': [// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,
          lookbehind: true,
          greedy: true,
          inside: insideString
        }, // Here-document with quotes around the tag
        // → No expansion (so no “inside”).
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,
          lookbehind: true,
          greedy: true
        }, // “Normal” string
        {
          pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
          greedy: true,
          inside: insideString
        }],
        'environment': {
          pattern: RegExp("\\$?" + envVars),
          alias: 'constant'
        },
        'variable': insideString.variable,
        'function': {
          pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        'keyword': {
          pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        'builtin': {
          pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
          lookbehind: true,
          // Alias added to make those easier to distinguish from strings.
          alias: 'class-name'
        },
        'boolean': {
          pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        'file-descriptor': {
          pattern: /\B&\d\b/,
          alias: 'important'
        },
        'operator': {
          // Lots of redirections here, but not just that.
          pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
          inside: {
            'file-descriptor': {
              pattern: /^\d/,
              alias: 'important'
            }
          }
        },
        'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        'number': {
          pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
          lookbehind: true
        }
      };
      /* Patterns in command substitution. */

      var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
      var inside = insideString.variable[1].inside;

      for (var i = 0; i < toBeCopied.length; i++) {
        inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
      }

      Prism.languages.shell = Prism.languages.bash;
    })(Prism);
    /***/

  },

  /***/
  "./node_modules/prismjs/components/prism-css.js":
  /*!******************************************************!*\
    !*** ./node_modules/prismjs/components/prism-css.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismCssJs(module, exports) {
    (function (Prism) {
      var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
      Prism.languages.css = {
        'comment': /\/\*[\s\S]*?\*\//,
        'atrule': {
          pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
          inside: {
            'rule': /@[\w-]+/ // See rest below

          }
        },
        'url': {
          pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
          inside: {
            'function': /^url/i,
            'punctuation': /^\(|\)$/
          }
        },
        'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
        'string': {
          pattern: string,
          greedy: true
        },
        'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        'important': /!important\b/i,
        'function': /[-a-z0-9]+(?=\()/i,
        'punctuation': /[(){};:,]/
      };
      Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
      var markup = Prism.languages.markup;

      if (markup) {
        markup.tag.addInlined('style', 'css');
        Prism.languages.insertBefore('inside', 'attr-value', {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': {
                pattern: /^\s*style/i,
                inside: markup.tag.inside
              },
              'punctuation': /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': {
                pattern: /.+/i,
                inside: Prism.languages.css
              }
            },
            alias: 'language-css'
          }
        }, markup.tag);
      }
    })(Prism);
    /***/

  },

  /***/
  "./node_modules/prismjs/components/prism-javascript.js":
  /*!*************************************************************!*\
    !*** ./node_modules/prismjs/components/prism-javascript.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismJavascriptJs(module, exports) {
    Prism.languages.javascript = Prism.languages.extend('clike', {
      'class-name': [Prism.languages.clike['class-name'], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: true
      }],
      'keyword': [{
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: true
      }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }],
      'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
    });
    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    Prism.languages.insertBefore('javascript', 'keyword', {
      'regex': {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: true,
        greedy: true
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      'function-variable': {
        pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: 'function'
      },
      'parameter': [{
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
      }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }],
      'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism.languages.insertBefore('javascript', 'string', {
      'template-string': {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: true,
        inside: {
          'template-punctuation': {
            pattern: /^`|`$/,
            alias: 'string'
          },
          'interpolation': {
            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
            lookbehind: true,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\${|}$/,
                alias: 'punctuation'
              },
              rest: Prism.languages.javascript
            }
          },
          'string': /[\s\S]+/
        }
      }
    });

    if (Prism.languages.markup) {
      Prism.languages.markup.tag.addInlined('script', 'javascript');
    }

    Prism.languages.js = Prism.languages.javascript;
    /***/
  },

  /***/
  "./node_modules/prismjs/components/prism-json.js":
  /*!*******************************************************!*\
    !*** ./node_modules/prismjs/components/prism-json.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismJsonJs(module, exports) {
    Prism.languages.json = {
      'property': {
        pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        greedy: true
      },
      'string': {
        pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        greedy: true
      },
      'comment': /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      'number': /-?\d+\.?\d*(?:e[+-]?\d+)?/i,
      'punctuation': /[{}[\],]/,
      'operator': /:/,
      'boolean': /\b(?:true|false)\b/,
      'null': {
        pattern: /\bnull\b/,
        alias: 'keyword'
      }
    };
    /***/
  },

  /***/
  "./node_modules/prismjs/components/prism-markup.js":
  /*!*********************************************************!*\
    !*** ./node_modules/prismjs/components/prism-markup.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismMarkupJs(module, exports) {
    Prism.languages.markup = {
      'comment': /<!--[\s\S]*?-->/,
      'prolog': /<\?[\s\S]+?\?>/,
      'doctype': {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
        greedy: true
      },
      'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
      'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: true,
        inside: {
          'tag': {
            pattern: /^<\/?[^\s>\/]+/i,
            inside: {
              'punctuation': /^<\/?/,
              'namespace': /^[^\s>\/:]+:/
            }
          },
          'attr-value': {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
            inside: {
              'punctuation': [/^=/, {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }]
            }
          },
          'punctuation': /\/?>/,
          'attr-name': {
            pattern: /[^\s>\/]+/,
            inside: {
              'namespace': /^[^\s>\/:]+:/
            }
          }
        }
      },
      'entity': /&#?[\da-z]{1,8};/i
    };
    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

    Prism.hooks.add('wrap', function (env) {
      if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
      }
    });
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside['language-' + lang] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: Prism.languages[lang]
        };
        includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
          'included-cdata': {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: includedCdataInside
          }
        };
        inside['language-' + lang] = {
          pattern: /[\s\S]+/,
          inside: Prism.languages[lang]
        };
        var def = {};
        def[tagName] = {
          pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
          lookbehind: true,
          greedy: true,
          inside: inside
        };
        Prism.languages.insertBefore('markup', 'cdata', def);
      }
    });
    Prism.languages.xml = Prism.languages.extend('markup', {});
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    /***/
  },

  /***/
  "./node_modules/prismjs/components/prism-pug.js":
  /*!******************************************************!*\
    !*** ./node_modules/prismjs/components/prism-pug.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismPugJs(module, exports) {
    (function (Prism) {
      // TODO:
      // - Add CSS highlighting inside <style> tags
      // - Add support for multi-line code blocks
      // - Add support for interpolation #{} and !{}
      // - Add support for tag interpolation #[]
      // - Add explicit support for plain text using |
      // - Add support for markup embedded in plain text
      Prism.languages.pug = {
        // Multiline stuff should appear before the rest
        // This handles both single-line and multi-line comments
        'comment': {
          pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ]+.+)*/m,
          lookbehind: true
        },
        // All the tag-related part is in lookbehind
        // so that it can be highlighted by the "tag" pattern
        'multiline-script': {
          pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
          lookbehind: true,
          inside: Prism.languages.javascript
        },
        // See at the end of the file for known filters
        'filter': {
          pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
          lookbehind: true,
          inside: {
            'filter-name': {
              pattern: /^:[\w-]+/,
              alias: 'variable'
            }
          }
        },
        'multiline-plain-text': {
          pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
          lookbehind: true
        },
        'markup': {
          pattern: /(^[\t ]*)<.+/m,
          lookbehind: true,
          inside: Prism.languages.markup
        },
        'doctype': {
          pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
          lookbehind: true
        },
        // This handle all conditional and loop keywords
        'flow-control': {
          pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
          lookbehind: true,
          inside: {
            'each': {
              pattern: /^each .+? in\b/,
              inside: {
                'keyword': /\b(?:each|in)\b/,
                'punctuation': /,/
              }
            },
            'branch': {
              pattern: /^(?:if|unless|else|case|when|default|while)\b/,
              alias: 'keyword'
            },
            rest: Prism.languages.javascript
          }
        },
        'keyword': {
          pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
          lookbehind: true
        },
        'mixin': [// Declaration
        {
          pattern: /(^[\t ]*)mixin .+/m,
          lookbehind: true,
          inside: {
            'keyword': /^mixin/,
            'function': /\w+(?=\s*\(|\s*$)/,
            'punctuation': /[(),.]/
          }
        }, // Usage
        {
          pattern: /(^[\t ]*)\+.+/m,
          lookbehind: true,
          inside: {
            'name': {
              pattern: /^\+\w+/,
              alias: 'function'
            },
            rest: Prism.languages.javascript
          }
        }],
        'script': {
          pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
          lookbehind: true,
          inside: Prism.languages.javascript
        },
        'plain-text': {
          pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
          lookbehind: true
        },
        'tag': {
          pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
          lookbehind: true,
          inside: {
            'attributes': [{
              pattern: /&[^(]+\([^)]+\)/,
              inside: Prism.languages.javascript
            }, {
              pattern: /\([^)]+\)/,
              inside: {
                'attr-value': {
                  pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                  lookbehind: true,
                  inside: Prism.languages.javascript
                },
                'attr-name': /[\w-]+(?=\s*!?=|\s*[,)])/,
                'punctuation': /[!=(),]+/
              }
            }],
            'punctuation': /:/
          }
        },
        'code': [{
          pattern: /(^[\t ]*(?:-|!?=)).+/m,
          lookbehind: true,
          inside: Prism.languages.javascript
        }],
        'punctuation': /[.\-!=|]+/
      };
      var filter_pattern = /(^([\t ]*)):{{filter_name}}(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/.source; // Non exhaustive list of available filters and associated languages

      var filters = [{
        filter: 'atpl',
        language: 'twig'
      }, {
        filter: 'coffee',
        language: 'coffeescript'
      }, 'ejs', 'handlebars', 'less', 'livescript', 'markdown', {
        filter: 'sass',
        language: 'scss'
      }, 'stylus'];
      var all_filters = {};

      for (var i = 0, l = filters.length; i < l; i++) {
        var filter = filters[i];
        filter = typeof filter === 'string' ? {
          filter: filter,
          language: filter
        } : filter;

        if (Prism.languages[filter.language]) {
          all_filters['filter-' + filter.filter] = {
            pattern: RegExp(filter_pattern.replace('{{filter_name}}', filter.filter), 'm'),
            lookbehind: true,
            inside: {
              'filter-name': {
                pattern: /^:[\w-]+/,
                alias: 'variable'
              },
              rest: Prism.languages[filter.language]
            }
          };
        }
      }

      Prism.languages.insertBefore('pug', 'filter', all_filters);
    })(Prism);
    /***/

  },

  /***/
  "./node_modules/prismjs/components/prism-scss.js":
  /*!*******************************************************!*\
    !*** ./node_modules/prismjs/components/prism-scss.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismScssJs(module, exports) {
    Prism.languages.scss = Prism.languages.extend('css', {
      'comment': {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: true
      },
      'atrule': {
        pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
        inside: {
          'rule': /@[\w-]+/ // See rest below

        }
      },
      // url, compassified
      'url': /(?:[-a-z]+-)?url(?=\()/i,
      // CSS selector regex is not appropriate for Sass
      // since there can be lot more things (var, @ directive, nesting..)
      // a selector must start at the end of a property or after a brace (end of other rules or nesting)
      // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
      // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
      // can "pass" as a selector- e.g: proper#{$erty})
      // this one was hard to do, so please be careful if you edit this one :)
      'selector': {
        // Initial look-ahead is used to prevent matching of blank selectors
        pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
        inside: {
          'parent': {
            pattern: /&/,
            alias: 'important'
          },
          'placeholder': /%[-\w]+/,
          'variable': /\$[-\w]+|#\{\$[-\w]+\}/
        }
      },
      'property': {
        pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
        inside: {
          'variable': /\$[-\w]+|#\{\$[-\w]+\}/
        }
      }
    });
    Prism.languages.insertBefore('scss', 'atrule', {
      'keyword': [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
        pattern: /( +)(?:from|through)(?= )/,
        lookbehind: true
      }]
    });
    Prism.languages.insertBefore('scss', 'important', {
      // var and interpolated vars
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    });
    Prism.languages.insertBefore('scss', 'function', {
      'placeholder': {
        pattern: /%[-\w]+/,
        alias: 'selector'
      },
      'statement': {
        pattern: /\B!(?:default|optional)\b/i,
        alias: 'keyword'
      },
      'boolean': /\b(?:true|false)\b/,
      'null': {
        pattern: /\bnull\b/,
        alias: 'keyword'
      },
      'operator': {
        pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
        lookbehind: true
      }
    });
    Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss;
    /***/
  },

  /***/
  "./node_modules/prismjs/components/prism-typescript.js":
  /*!*************************************************************!*\
    !*** ./node_modules/prismjs/components/prism-typescript.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsComponentsPrismTypescriptJs(module, exports) {
    Prism.languages.typescript = Prism.languages.extend('javascript', {
      // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
      'keyword': /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
      'builtin': /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
    });
    Prism.languages.ts = Prism.languages.typescript;
    /***/
  },

  /***/
  "./node_modules/prismjs/prism.js":
  /*!***************************************!*\
    !*** ./node_modules/prismjs/prism.js ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function node_modulesPrismjsPrismJs(module, exports, __webpack_require__) {
    /* **********************************************
         Begin prism-core.js
    ********************************************** */
    var _self = typeof window !== 'undefined' ? window // if in browser
    : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
    : {} // if in node js
    ;
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     * MIT license http://www.opensource.org/licenses/mit-license.php/
     * @author Lea Verou http://lea.verou.me
     */


    var Prism = function (_self) {
      // Private helper vars
      var lang = /\blang(?:uage)?-([\w-]+)\b/i;
      var uniqueId = 0;
      var _ = {
        manual: _self.Prism && _self.Prism.manual,
        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
        util: {
          encode: function encode(tokens) {
            if (tokens instanceof Token) {
              return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
            } else if (Array.isArray(tokens)) {
              return tokens.map(_.util.encode);
            } else {
              return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
            }
          },
          type: function type(o) {
            return Object.prototype.toString.call(o).slice(8, -1);
          },
          objId: function objId(obj) {
            if (!obj['__id']) {
              Object.defineProperty(obj, '__id', {
                value: ++uniqueId
              });
            }

            return obj['__id'];
          },
          // Deep clone a language definition (e.g. to extend it)
          clone: function deepClone(o, visited) {
            var clone,
                id,
                type = _.util.type(o);

            visited = visited || {};

            switch (type) {
              case 'Object':
                id = _.util.objId(o);

                if (visited[id]) {
                  return visited[id];
                }

                clone = {};
                visited[id] = clone;

                for (var key in o) {
                  if (o.hasOwnProperty(key)) {
                    clone[key] = deepClone(o[key], visited);
                  }
                }

                return clone;

              case 'Array':
                id = _.util.objId(o);

                if (visited[id]) {
                  return visited[id];
                }

                clone = [];
                visited[id] = clone;
                o.forEach(function (v, i) {
                  clone[i] = deepClone(v, visited);
                });
                return clone;

              default:
                return o;
            }
          },

          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function getLanguage(element) {
            while (element && !lang.test(element.className)) {
              element = element.parentElement;
            }

            if (element) {
              return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
            }

            return 'none';
          },

          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function currentScript() {
            if (typeof document === 'undefined') {
              return null;
            }

            if ('currentScript' in document) {
              return document.currentScript;
            } // IE11 workaround
            // we'll get the src of the current script by parsing IE11's error stack trace
            // this will not work for inline scripts


            try {
              throw new Error();
            } catch (err) {
              // Get file src url from stack. Specifically works with the format of stack traces in IE.
              // A stack will look like this:
              //
              // Error
              //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
              //    at Global code (http://localhost/components/prism-core.js:606:1)
              var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];

              if (src) {
                var scripts = document.getElementsByTagName('script');

                for (var i in scripts) {
                  if (scripts[i].src == src) {
                    return scripts[i];
                  }
                }
              }

              return null;
            }
          }
        },
        languages: {
          extend: function extend(id, redef) {
            var lang = _.util.clone(_.languages[id]);

            for (var key in redef) {
              lang[key] = redef[key];
            }

            return lang;
          },

          /**
           * Insert a token before another token in a language literal
           * As this needs to recreate the object (we cannot actually insert before keys in object literals),
           * we cannot just provide an object, we need an object and a key.
           * @param inside The key (or language id) of the parent
           * @param before The key to insert before.
           * @param insert Object with the key/value pairs to insert
           * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
           */
          insertBefore: function insertBefore(inside, before, insert, root) {
            root = root || _.languages;
            var grammar = root[inside];
            var ret = {};

            for (var token in grammar) {
              if (grammar.hasOwnProperty(token)) {
                if (token == before) {
                  for (var newToken in insert) {
                    if (insert.hasOwnProperty(newToken)) {
                      ret[newToken] = insert[newToken];
                    }
                  }
                } // Do not insert token which also occur in insert. See #1525


                if (!insert.hasOwnProperty(token)) {
                  ret[token] = grammar[token];
                }
              }
            }

            var old = root[inside];
            root[inside] = ret; // Update references in other language definitions

            _.languages.DFS(_.languages, function (key, value) {
              if (value === old && key != inside) {
                this[key] = ret;
              }
            });

            return ret;
          },
          // Traverse a language definition with Depth First Search
          DFS: function DFS(o, callback, type, visited) {
            visited = visited || {};
            var objId = _.util.objId;

            for (var i in o) {
              if (o.hasOwnProperty(i)) {
                callback.call(o, i, o[i], type || i);

                var property = o[i],
                    propertyType = _.util.type(property);

                if (propertyType === 'Object' && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, null, visited);
                } else if (propertyType === 'Array' && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, i, visited);
                }
              }
            }
          }
        },
        plugins: {},
        highlightAll: function highlightAll(async, callback) {
          _.highlightAllUnder(document, async, callback);
        },
        highlightAllUnder: function highlightAllUnder(container, async, callback) {
          var env = {
            callback: callback,
            container: container,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };

          _.hooks.run('before-highlightall', env);

          env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

          _.hooks.run('before-all-elements-highlight', env);

          for (var i = 0, element; element = env.elements[i++];) {
            _.highlightElement(element, async === true, env.callback);
          }
        },
        highlightElement: function highlightElement(element, async, callback) {
          // Find language
          var language = _.util.getLanguage(element);

          var grammar = _.languages[language]; // Set language on the element, if not present

          element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language; // Set language on the parent, for styling

          var parent = element.parentNode;

          if (parent && parent.nodeName.toLowerCase() === 'pre') {
            parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
          }

          var code = element.textContent;
          var env = {
            element: element,
            language: language,
            grammar: grammar,
            code: code
          };

          function insertHighlightedCode(highlightedCode) {
            env.highlightedCode = highlightedCode;

            _.hooks.run('before-insert', env);

            env.element.innerHTML = env.highlightedCode;

            _.hooks.run('after-highlight', env);

            _.hooks.run('complete', env);

            callback && callback.call(env.element);
          }

          _.hooks.run('before-sanity-check', env);

          if (!env.code) {
            _.hooks.run('complete', env);

            callback && callback.call(env.element);
            return;
          }

          _.hooks.run('before-highlight', env);

          if (!env.grammar) {
            insertHighlightedCode(_.util.encode(env.code));
            return;
          }

          if (async && _self.Worker) {
            var worker = new Worker(_.filename);

            worker.onmessage = function (evt) {
              insertHighlightedCode(evt.data);
            };

            worker.postMessage(JSON.stringify({
              language: env.language,
              code: env.code,
              immediateClose: true
            }));
          } else {
            insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
          }
        },
        highlight: function highlight(text, grammar, language) {
          var env = {
            code: text,
            grammar: grammar,
            language: language
          };

          _.hooks.run('before-tokenize', env);

          env.tokens = _.tokenize(env.code, env.grammar);

          _.hooks.run('after-tokenize', env);

          return Token.stringify(_.util.encode(env.tokens), env.language);
        },
        matchGrammar: function matchGrammar(text, strarr, grammar, index, startPos, oneshot, target) {
          for (var token in grammar) {
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
              continue;
            }

            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [patterns];

            for (var j = 0; j < patterns.length; ++j) {
              if (target && target == token + ',' + j) {
                return;
              }

              var pattern = patterns[j],
                  inside = pattern.inside,
                  lookbehind = !!pattern.lookbehind,
                  greedy = !!pattern.greedy,
                  lookbehindLength = 0,
                  alias = pattern.alias;

              if (greedy && !pattern.pattern.global) {
                // Without the global flag, lastIndex won't work
                var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
                pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
              }

              pattern = pattern.pattern || pattern; // Don’t cache length as it changes during the loop

              for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
                var str = strarr[i];

                if (strarr.length > text.length) {
                  // Something went terribly wrong, ABORT, ABORT!
                  return;
                }

                if (str instanceof Token) {
                  continue;
                }

                if (greedy && i != strarr.length - 1) {
                  pattern.lastIndex = pos;
                  var match = pattern.exec(text);

                  if (!match) {
                    break;
                  }

                  var from = match.index + (lookbehind && match[1] ? match[1].length : 0),
                      to = match.index + match[0].length,
                      k = i,
                      p = pos;

                  for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                    p += strarr[k].length; // Move the index i to the element in strarr that is closest to from

                    if (from >= p) {
                      ++i;
                      pos = p;
                    }
                  } // If strarr[i] is a Token, then the match starts inside another Token, which is invalid


                  if (strarr[i] instanceof Token) {
                    continue;
                  } // Number of tokens to delete and replace with the new match


                  delNum = k - i;
                  str = text.slice(pos, p);
                  match.index -= pos;
                } else {
                  pattern.lastIndex = 0;
                  var match = pattern.exec(str),
                      delNum = 1;
                }

                if (!match) {
                  if (oneshot) {
                    break;
                  }

                  continue;
                }

                if (lookbehind) {
                  lookbehindLength = match[1] ? match[1].length : 0;
                }

                var from = match.index + lookbehindLength,
                    match = match[0].slice(lookbehindLength),
                    to = from + match.length,
                    before = str.slice(0, from),
                    after = str.slice(to);
                var args = [i, delNum];

                if (before) {
                  ++i;
                  pos += before.length;
                  args.push(before);
                }

                var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
                args.push(wrapped);

                if (after) {
                  args.push(after);
                }

                Array.prototype.splice.apply(strarr, args);
                if (delNum != 1) _.matchGrammar(text, strarr, grammar, i, pos, true, token + ',' + j);
                if (oneshot) break;
              }
            }
          }
        },
        tokenize: function tokenize(text, grammar) {
          var strarr = [text];
          var rest = grammar.rest;

          if (rest) {
            for (var token in rest) {
              grammar[token] = rest[token];
            }

            delete grammar.rest;
          }

          _.matchGrammar(text, strarr, grammar, 0, 0, false);

          return strarr;
        },
        hooks: {
          all: {},
          add: function add(name, callback) {
            var hooks = _.hooks.all;
            hooks[name] = hooks[name] || [];
            hooks[name].push(callback);
          },
          run: function run(name, env) {
            var callbacks = _.hooks.all[name];

            if (!callbacks || !callbacks.length) {
              return;
            }

            for (var i = 0, callback; callback = callbacks[i++];) {
              callback(env);
            }
          }
        },
        Token: Token
      };
      _self.Prism = _;

      function Token(type, content, alias, matchedStr, greedy) {
        this.type = type;
        this.content = content;
        this.alias = alias; // Copy of the full string this token was created from

        this.length = (matchedStr || '').length | 0;
        this.greedy = !!greedy;
      }

      Token.stringify = function (o, language) {
        if (typeof o == 'string') {
          return o;
        }

        if (Array.isArray(o)) {
          return o.map(function (element) {
            return Token.stringify(element, language);
          }).join('');
        }

        var env = {
          type: o.type,
          content: Token.stringify(o.content, language),
          tag: 'span',
          classes: ['token', o.type],
          attributes: {},
          language: language
        };

        if (o.alias) {
          var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
          Array.prototype.push.apply(env.classes, aliases);
        }

        _.hooks.run('wrap', env);

        var attributes = Object.keys(env.attributes).map(function (name) {
          return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
        }).join(' ');
        return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
      };

      if (!_self.document) {
        if (!_self.addEventListener) {
          // in Node.js
          return _;
        }

        if (!_.disableWorkerMessageHandler) {
          // In worker
          _self.addEventListener('message', function (evt) {
            var message = JSON.parse(evt.data),
                lang = message.language,
                code = message.code,
                immediateClose = message.immediateClose;

            _self.postMessage(_.highlight(code, _.languages[lang], lang));

            if (immediateClose) {
              _self.close();
            }
          }, false);
        }

        return _;
      } //Get current script and highlight


      var script = _.util.currentScript();

      if (script) {
        _.filename = script.src;

        if (script.hasAttribute('data-manual')) {
          _.manual = true;
        }
      }

      if (!_.manual) {
        var highlightAutomaticallyCallback = function highlightAutomaticallyCallback() {
          if (!_.manual) {
            _.highlightAll();
          }
        }; // If the document state is "loading", then we'll use DOMContentLoaded.
        // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
        // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
        // might take longer one animation frame to execute which can create a race condition where only some plugins have
        // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
        // See https://github.com/PrismJS/prism/issues/2102


        var readyState = document.readyState;

        if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
          document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
        } else {
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(highlightAutomaticallyCallback);
          } else {
            window.setTimeout(highlightAutomaticallyCallback, 16);
          }
        }
      }

      return _;
    }(_self);

    if (true && module.exports) {
      module.exports = Prism;
    } // hack for components to work correctly in node.js


    if (typeof global !== 'undefined') {
      global.Prism = Prism;
    }
    /* **********************************************
         Begin prism-markup.js
    ********************************************** */


    Prism.languages.markup = {
      'comment': /<!--[\s\S]*?-->/,
      'prolog': /<\?[\s\S]+?\?>/,
      'doctype': {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
        greedy: true
      },
      'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
      'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: true,
        inside: {
          'tag': {
            pattern: /^<\/?[^\s>\/]+/i,
            inside: {
              'punctuation': /^<\/?/,
              'namespace': /^[^\s>\/:]+:/
            }
          },
          'attr-value': {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
            inside: {
              'punctuation': [/^=/, {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }]
            }
          },
          'punctuation': /\/?>/,
          'attr-name': {
            pattern: /[^\s>\/]+/,
            inside: {
              'namespace': /^[^\s>\/:]+:/
            }
          }
        }
      },
      'entity': /&#?[\da-z]{1,8};/i
    };
    Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

    Prism.hooks.add('wrap', function (env) {
      if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
      }
    });
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside['language-' + lang] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: Prism.languages[lang]
        };
        includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
          'included-cdata': {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: includedCdataInside
          }
        };
        inside['language-' + lang] = {
          pattern: /[\s\S]+/,
          inside: Prism.languages[lang]
        };
        var def = {};
        def[tagName] = {
          pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
          lookbehind: true,
          greedy: true,
          inside: inside
        };
        Prism.languages.insertBefore('markup', 'cdata', def);
      }
    });
    Prism.languages.xml = Prism.languages.extend('markup', {});
    Prism.languages.html = Prism.languages.markup;
    Prism.languages.mathml = Prism.languages.markup;
    Prism.languages.svg = Prism.languages.markup;
    /* **********************************************
         Begin prism-css.js
    ********************************************** */

    (function (Prism) {
      var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
      Prism.languages.css = {
        'comment': /\/\*[\s\S]*?\*\//,
        'atrule': {
          pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
          inside: {
            'rule': /@[\w-]+/ // See rest below

          }
        },
        'url': {
          pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
          inside: {
            'function': /^url/i,
            'punctuation': /^\(|\)$/
          }
        },
        'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
        'string': {
          pattern: string,
          greedy: true
        },
        'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        'important': /!important\b/i,
        'function': /[-a-z0-9]+(?=\()/i,
        'punctuation': /[(){};:,]/
      };
      Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
      var markup = Prism.languages.markup;

      if (markup) {
        markup.tag.addInlined('style', 'css');
        Prism.languages.insertBefore('inside', 'attr-value', {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': {
                pattern: /^\s*style/i,
                inside: markup.tag.inside
              },
              'punctuation': /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': {
                pattern: /.+/i,
                inside: Prism.languages.css
              }
            },
            alias: 'language-css'
          }
        }, markup.tag);
      }
    })(Prism);
    /* **********************************************
         Begin prism-clike.js
    ********************************************** */


    Prism.languages.clike = {
      'comment': [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true
      }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }],
      'string': {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      'class-name': {
        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
          'punctuation': /[.\\]/
        }
      },
      'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
      'boolean': /\b(?:true|false)\b/,
      'function': /\w+(?=\()/,
      'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
      'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      'punctuation': /[{}[\];(),.:]/
    };
    /* **********************************************
         Begin prism-javascript.js
    ********************************************** */

    Prism.languages.javascript = Prism.languages.extend('clike', {
      'class-name': [Prism.languages.clike['class-name'], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: true
      }],
      'keyword': [{
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: true
      }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }],
      'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
    });
    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    Prism.languages.insertBefore('javascript', 'keyword', {
      'regex': {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: true,
        greedy: true
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      'function-variable': {
        pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: 'function'
      },
      'parameter': [{
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
      }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }],
      'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    });
    Prism.languages.insertBefore('javascript', 'string', {
      'template-string': {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: true,
        inside: {
          'template-punctuation': {
            pattern: /^`|`$/,
            alias: 'string'
          },
          'interpolation': {
            pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
            lookbehind: true,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\${|}$/,
                alias: 'punctuation'
              },
              rest: Prism.languages.javascript
            }
          },
          'string': /[\s\S]+/
        }
      }
    });

    if (Prism.languages.markup) {
      Prism.languages.markup.tag.addInlined('script', 'javascript');
    }

    Prism.languages.js = Prism.languages.javascript;
    /* **********************************************
         Begin prism-file-highlight.js
    ********************************************** */

    (function () {
      if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
        return;
      }
      /**
       * @param {Element} [container=document]
       */


      self.Prism.fileHighlight = function (container) {
        container = container || document;
        var Extensions = {
          'js': 'javascript',
          'py': 'python',
          'rb': 'ruby',
          'ps1': 'powershell',
          'psm1': 'powershell',
          'sh': 'bash',
          'bat': 'batch',
          'h': 'c',
          'tex': 'latex'
        };
        Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
          // ignore if already loaded
          if (pre.hasAttribute('data-src-loaded')) {
            return;
          } // load current


          var src = pre.getAttribute('data-src');
          var language,
              parent = pre;
          var lang = /\blang(?:uage)?-([\w-]+)\b/i;

          while (parent && !lang.test(parent.className)) {
            parent = parent.parentNode;
          }

          if (parent) {
            language = (pre.className.match(lang) || [, ''])[1];
          }

          if (!language) {
            var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
            language = Extensions[extension] || extension;
          }

          var code = document.createElement('code');
          code.className = 'language-' + language;
          pre.textContent = '';
          code.textContent = 'Loading…';
          pre.appendChild(code);
          var xhr = new XMLHttpRequest();
          xhr.open('GET', src, true);

          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status < 400 && xhr.responseText) {
                code.textContent = xhr.responseText;
                Prism.highlightElement(code); // mark as loaded

                pre.setAttribute('data-src-loaded', '');
              } else if (xhr.status >= 400) {
                code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
              } else {
                code.textContent = '✖ Error: File does not exist or is empty';
              }
            }
          };

          xhr.send(null);
        });
      };

      document.addEventListener('DOMContentLoaded', function () {
        // execute inside handler, for dropping Event as argument
        self.Prism.fileHighlight();
      });
    })();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsDashboardCardsDashboardCardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-3 col-md-6\">\n        <sbpro-card-view-details link=\"/dashboard\" background=\"bg-primary\"><div class=\"card-body\">Primary Card</div></sbpro-card-view-details>\n    </div>\n    <div class=\"col-xl-3 col-md-6\">\n        <sbpro-card-view-details link=\"/dashboard\" background=\"bg-warning\"><div class=\"card-body\">Warning Card</div></sbpro-card-view-details>\n    </div>\n    <div class=\"col-xl-3 col-md-6\">\n        <sbpro-card-view-details link=\"/dashboard\" background=\"bg-success\"><div class=\"card-body\">Success Card</div></sbpro-card-view-details>\n    </div>\n    <div class=\"col-xl-3 col-md-6\">\n        <sbpro-card-view-details link=\"/dashboard\" background=\"bg-danger\"><div class=\"card-body\">Danger Card</div></sbpro-card-view-details>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsDashboardChartsDashboardChartsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-6\">\n        <sbpro-card\n            ><div class=\"card-header\">Area Chart Example</div>\n            <div class=\"card-body\"><sb-charts-area></sb-charts-area></div\n        ></sbpro-card>\n    </div>\n    <div class=\"col-xl-6\">\n        <sbpro-card\n            ><div class=\"card-header\">Bar Chart Example</div>\n            <div class=\"card-body\"><sb-charts-bar></sb-charts-bar></div\n        ></sbpro-card>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsDashboardTablesDashboardTablesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">DataTable Example</div>\n    <div class=\"card-body\"><sb-ng-bootstrap-table [pageSize]=\"4\"></sb-ng-bootstrap-table></div\n></sbpro-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dark/dark.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dark/dark.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardContainersDarkDarkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-layout-dashboard [light]=\"false\"\n    ><sbpro-dashboard-head icon=\"layout\" title=\"Dark Sidenav\" description=\"An alternate option for the sidenav styling\"></sbpro-dashboard-head>\n    <div class=\"container-fluid mt-n10\">\n        <div class=\"card mb-4\">\n            <div class=\"card-header\">Dark Sidenav Option</div>\n            <div class=\"card-body\">\n                <p class=\"card-text\">\n                    Use the <code>[light]='false'</code> attribute with the <code>&lt;sbpro-layout-dashboard&gt;</code> element for a darker layout with the side navigation element.\n                    <br />\n                    The text, icons, and all of the elements within the side navigation will adapt to work well with darker backgrounds.\n                    <br />\n                    You can also use utility classes to modify the background color of the side navigation, or use a custom style!\n                </p>\n            </div>\n        </div>\n    </div></sbpro-layout-dashboard\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard-overview/dashboard-overview.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard-overview/dashboard-overview.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardContainersDashboardOverviewDashboardOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"activity\" title=\"Dashboard\" description=\"Example dashboard overview and content summary\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\"><sbpro-dashboard-charts></sbpro-dashboard-charts><sbpro-dashboard-cards></sbpro-dashboard-cards><sbpro-dashboard-tables></sbpro-dashboard-tables></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard/dashboard.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard/dashboard.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardContainersDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-layout-dashboard [light]=\"true\"><router-outlet></router-outlet></sbpro-layout-dashboard>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/rtl/rtl.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/rtl/rtl.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardContainersRtlRtlComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-layout-dashboard [light]=\"true\" [rtl]=\"true\"\n    ><sbpro-dashboard-head icon=\"layout\" title=\"Right to Left Layout\" description=\"An alternate layout going from left to right\"></sbpro-dashboard-head>\n    <div class=\"container-fluid mt-n10\">\n        <div class=\"card mb-4\">\n            <div class=\"card-header\">Enabling RTL site wide</div>\n            <div class=\"card-body\">\n                <p class=\"card-text\">To enable RTL site wide, simply add the <code>[rtl]='true'</code> attribute to the <code>&lt;sbpro-layout-dashboard&gt;</code> element in <code>src/modules/dashboard/containers/dashboard/dashboard.component.pug</code></p>\n            </div>\n        </div>\n    </div></sbpro-layout-dashboard\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/static/static.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/static/static.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardContainersStaticStaticComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-layout-dashboard [static]=\"true\" [light]=\"true\"\n    ><sbpro-dashboard-head icon=\"layout\" title=\"Static Navigation\" description=\"Remove the fixed layout class from the body element for a scrollable, static layout option\"></sbpro-dashboard-head>\n    <div class=\"container-fluid mt-n10\">\n        <div class=\"card mb-4\">\n            <div class=\"card-header\">Static Navigation Example</div>\n            <div class=\"card-body\">\n                <p class=\"mb-0\">\n                    This page is an example of using static navigation.\n                    <br />\n                    By adding the <code>[static]='true'</code> attribute to the <code>&lt;sbpro-layout-dashboard&gt;</code> element, the top navigation and side navigation will remain static in their positioning.\n                </p>\n            </div>\n        </div>\n        <div class=\"text-center text-muted font-italic small\">\n            Scroll down to see example...\n            <div class=\"mt-2\"><fa-icon class=\"fa-3x text-gray-400\" [icon]='[\"far\", \"arrow-alt-circle-down\"]'></fa-icon></div>\n        </div>\n        <div style=\"height: 100vh;\"></div></div\n></sbpro-layout-dashboard>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-content/alerts-content.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-content/alerts-content.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsAlertsContentAlertsContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Alert Content Styling</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <sbpro-alert classes=\"alert-primary\" heading=\"Alert Heading\" [dismissable]=\"true\">This alert example has an alert heading, an alert link, and is dismissible! <a class=\"alert-link\" href=\"javascript:void(0);\">Example alert link!</a></sbpro-alert>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Pass in a heading with the <code>heading</code> attribute. Make it dismissable with <code>[dismissable]='true'</code></div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-default/alerts-default.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-default/alerts-default.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsAlertsDefaultAlertsDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Default Bootstrap Alerts</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\"><sbpro-alert classes=\"alert-primary\">A primary alert—check it out!</sbpro-alert><sbpro-alert classes=\"alert-secondary\">A secondary alert—check it out!</sbpro-alert><sbpro-alert classes=\"alert-success\">A success alert—check it out!</sbpro-alert><sbpro-alert classes=\"alert-danger\">A danger alert—check it out!</sbpro-alert><sbpro-alert classes=\"alert-warning\">A warning alert—check it out!</sbpro-alert><sbpro-alert classes=\"alert-info\">A info alert—check it out!</sbpro-alert><sbpro-alert classes=\"alert-light\">A light alert—check it out!</sbpro-alert><sbpro-alert classes=\"alert-dark\">A dark alert—check it out!</sbpro-alert></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Bootstrap's default state-specific alert styles have been styled to fit the SB Admin Pro theme.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-extended/alerts-extended.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-extended/alerts-extended.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsAlertsExtendedAlertsExtendedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Extended Alert Colors</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Custom Colors with Default Alerts:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\">\n                <div class=\"row\">\n                    <div class=\"col-6\"><sbpro-alert classes=\"alert-red\" [dismissable]=\"false\">This is a red alert.</sbpro-alert><sbpro-alert classes=\"alert-orange\" [dismissable]=\"false\">This is a orange alert.</sbpro-alert><sbpro-alert classes=\"alert-yellow\" [dismissable]=\"false\">This is a yellow alert.</sbpro-alert><sbpro-alert classes=\"alert-green\" [dismissable]=\"false\">This is a green alert.</sbpro-alert><sbpro-alert classes=\"alert-teal\" [dismissable]=\"false\">This is a teal alert.</sbpro-alert></div>\n                    <div class=\"col-6\"><sbpro-alert classes=\"alert-cyan\" [dismissable]=\"false\">This is a cyan alert.</sbpro-alert><sbpro-alert classes=\"alert-blue\" [dismissable]=\"false\">This is a blue alert.</sbpro-alert><sbpro-alert classes=\"alert-indigo\" [dismissable]=\"false\">This is a indigo alert.</sbpro-alert><sbpro-alert classes=\"alert-purple\" [dismissable]=\"false\">This is a purple alert.</sbpro-alert><sbpro-alert classes=\"alert-pink\" [dismissable]=\"false\">This is a pink alert.</sbpro-alert></div>\n                </div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">\n                SB Admin Pro's expanded color system allows you to use the non-contextual colors in the same way as Bootstrap's colors.\n                <br />\n                Simply add the extended color into the <code>classes</code> attribute.\n            </div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Custom Colors with Solid Alerts:</h6>\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <div class=\"row\">\n                    <div class=\"col-6\"><sbpro-alert classes=\"alert-red sb-alert-solid\" [dismissable]=\"false\">This is a red alert.</sbpro-alert><sbpro-alert classes=\"alert-orange sb-alert-solid\" [dismissable]=\"false\">This is a orange alert.</sbpro-alert><sbpro-alert classes=\"alert-yellow sb-alert-solid\" [dismissable]=\"false\">This is a yellow alert.</sbpro-alert><sbpro-alert classes=\"alert-green sb-alert-solid\" [dismissable]=\"false\">This is a green alert.</sbpro-alert><sbpro-alert classes=\"alert-teal sb-alert-solid\" [dismissable]=\"false\">This is a teal alert.</sbpro-alert></div>\n                    <div class=\"col-6\"><sbpro-alert classes=\"alert-cyan sb-alert-solid\" [dismissable]=\"false\">This is a cyan alert.</sbpro-alert><sbpro-alert classes=\"alert-blue sb-alert-solid\" [dismissable]=\"false\">This is a blue alert.</sbpro-alert><sbpro-alert classes=\"alert-indigo sb-alert-solid\" [dismissable]=\"false\">This is a indigo alert.</sbpro-alert><sbpro-alert classes=\"alert-purple sb-alert-solid\" [dismissable]=\"false\">This is a purple alert.</sbpro-alert><sbpro-alert classes=\"alert-pink sb-alert-solid\" [dismissable]=\"false\">This is a pink alert.</sbpro-alert></div>\n                </div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesSolid\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Create a solid alert with the expanded color system by passing in <code>sb-alert-solid</code> with the <code>classes</code> attribute.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-icon/alerts-icon.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-icon/alerts-icon.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsAlertsIconAlertsIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Custom Icon Alerts</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <sbpro-alert [icon]=\"true\" classes=\"alert-primary\" heading=\"Primary Icon Alert\"\n                    ><div class=\"sb-alert-icon-aside\"><fa-icon [icon]='[\"far\", \"flag\"]'></fa-icon></div>\n                    This alert uses an icon from Font Awesome!</sbpro-alert\n                ><sbpro-alert [icon]=\"true\" classes=\"alert-secondary\" heading=\"Secondary Icon Alert\"\n                    ><div class=\"sb-alert-icon-aside\"><i-feather name=\"feather\"></i-feather></div>\n                    This alert uses an icon from Feather Icons!</sbpro-alert\n                >\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">\n                Custom icon alerts allow you to add an icon to the alert to provide more context, and more of a focal point to the alert itself. Use icons from Font Awesome, Feather Icons, or a custom SVG! <br /><br />\n                To learn more about how icons are used in SB Admin Pro Angular, visit the\n                <a href=\"https://docs.startbootstrap.com/sb-admin-pro-angular/deep-dive-icons\">Icons Deep Dive</a> Documentation\n            </div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-solid/alerts-solid.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-solid/alerts-solid.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsAlertsSolidAlertsSolidComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Custom Solid Alerts</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\"><sbpro-alert [icon]=\"true\" classes=\"alert-primary sb-alert-solid\">This is a solid, primary alert!</sbpro-alert><sbpro-alert [icon]=\"true\" classes=\"alert-secondary sb-alert-solid\">This is a solid, secondary alert!</sbpro-alert><sbpro-alert [icon]=\"true\" classes=\"alert-success sb-alert-solid\">This is a solid, success alert!</sbpro-alert><sbpro-alert [icon]=\"true\" classes=\"alert-danger sb-alert-solid\">This is a solid, danger alert!</sbpro-alert><sbpro-alert [icon]=\"true\" classes=\"alert-warning sb-alert-solid\">This is a solid, warning alert!</sbpro-alert><sbpro-alert [icon]=\"true\" classes=\"alert-info sb-alert-solid\">This is a solid, info alert!</sbpro-alert><sbpro-alert [icon]=\"true\" classes=\"alert-light sb-alert-solid\">This is a solid, light alert!</sbpro-alert><sbpro-alert [icon]=\"true\" classes=\"alert-dark sb-alert-solid\">This is a solid, dark alert!</sbpro-alert></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Create a solid alert by passing in <code>sb-alert-solid</code> with the <code>classes</code> attribute.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/animations-fade-in-up/animations-fade-in-up.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/animations-fade-in-up/animations-fade-in-up.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsAnimationsFadeInUpAnimationsFadeInUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Fade In Up Transition</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <sbpro-dropdown dropdownStyle=\"text\" background=\"btn-primary\" animation=\"animated--fade-in-up\"\n                    ><div class=\"dropdown-trigger\">Click Me!</div>\n                    <div class=\"dropdown-items\"><a class=\"dropdown-item\">Action</a><a class=\"dropdown-item\">Another action</a><a class=\"dropdown-item\">Something else here</a></div></sbpro-dropdown\n                >\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Add <code>animated--fade-in-up</code> to the <code>animation</code> attribute on <code>sbpro-dropdown</code></div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/animations-fade-in/animations-fade-in.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/animations-fade-in/animations-fade-in.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsAnimationsFadeInAnimationsFadeInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Fade In Transition</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <sbpro-dropdown dropdownStyle=\"text\" background=\"btn-primary\" animation=\"animated--fade-in\"\n                    ><div class=\"dropdown-trigger\">Click Me!</div>\n                    <div class=\"dropdown-items\"><a class=\"dropdown-item\">Action</a><a class=\"dropdown-item\">Another action</a><a class=\"dropdown-item\">Something else here</a></div></sbpro-dropdown\n                >\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Add <code>animated--fade-in</code> to the <code>animation</code> attribute on <code>sbpro-dropdown</code></div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/background-default/background-default.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/background-default/background-default.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsBackgroundDefaultBackgroundDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Bootstrap Defaults</div>\n    <div class=\"card-body\">\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"bg-primary text-white p-3\">.bg-primary</div>\n                <div class=\"bg-secondary text-white p-3\">.bg-secondary</div>\n                <div class=\"bg-success text-white p-3\">.bg-success</div>\n                <div class=\"bg-danger text-white p-3\">.bg-danger</div>\n                <div class=\"bg-warning text-white p-3\">.bg-warning</div>\n                <div class=\"bg-info text-white p-3\">.bg-info</div>\n                <div class=\"bg-light p-3\">.bg-light</div>\n                <div class=\"bg-dark text-white p-3\">.bg-dark</div>\n                <div class=\"bg-white p-3\">.bg-white</div>\n                <div class=\"bg-transparent p-3\">.bg-transparent</div>\n            </div>\n            <div class=\"bg-light p-4 small\">The default Bootstrap background utilities are contextual by nature, and pull from the color palette defined in the <code>src/styles/sb-admin-pro/variables/_colors.scss</code> file.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/background-expanded/background-expanded.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/background-expanded/background-expanded.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsBackgroundExpandedBackgroundExpandedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Expanded Color System</div>\n    <div class=\"card-body\">\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"bg-red text-white p-3\">.bg-red</div>\n                <div class=\"bg-orange text-white p-3\">.bg-orange</div>\n                <div class=\"bg-yellow text-white p-3\">.bg-yellow</div>\n                <div class=\"bg-green text-white p-3\">.bg-green</div>\n                <div class=\"bg-teal text-white p-3\">.bg-teal</div>\n                <div class=\"bg-cyan text-white p-3\">.bg-cyan</div>\n                <div class=\"bg-blue text-white p-3\">.bg-blue</div>\n                <div class=\"bg-indigo text-white p-3\">.bg-indigo</div>\n                <div class=\"bg-purple text-white p-3\">.bg-purple</div>\n                <div class=\"bg-pink text-white p-3\">.bg-pink</div>\n            </div>\n            <div class=\"bg-light p-4 small\">SB Admin Pro adds non-contextual colors to the color map so they can be used in the same way you would use Bootstrap colors. These colors are also defined in the color <code>src/styles/sb-admin-pro/variables/_colors.scss</code> file.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/background-gradient/background-gradient.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/background-gradient/background-gradient.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsBackgroundGradientBackgroundGradientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Custom Gradient Background</div>\n    <div class=\"card-body\">\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\"><div class=\"bg-gradient-primary-to-secondary text-white p-3 py-10\">.bg-gradient-primary-to-secondary</div></div>\n            <div class=\"bg-light p-4 small\">The custom gradient background is being used in the page headers, and can be applied anywhere you would use a normal background color utility.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/background-grayscale/background-grayscale.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/background-grayscale/background-grayscale.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsBackgroundGrayscaleBackgroundGrayscaleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Adaptive Grayscale</div>\n    <div class=\"card-body\">\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"bg-white p-3\">.bg-white</div>\n                <div class=\"bg-gray-100 p-3\">.bg-gray-100</div>\n                <div class=\"bg-gray-200 p-3\">.bg-gray-200</div>\n                <div class=\"bg-gray-300 p-3\">.bg-gray-300</div>\n                <div class=\"bg-gray-400 p-3\">.bg-gray-400</div>\n                <div class=\"bg-gray-500 text-white p-3\">.bg-gray-500</div>\n                <div class=\"bg-gray-600 text-white p-3\">.bg-gray-600</div>\n                <div class=\"bg-gray-700 text-white p-3\">.bg-gray-700</div>\n                <div class=\"bg-gray-800 text-white p-3\">.bg-gray-800</div>\n                <div class=\"bg-gray-900 text-white p-3\">.bg-gray-900</div>\n                <div class=\"bg-black text-white p-3\">.bg-black</div>\n            </div>\n            <div class=\"bg-light p-4 small\">\n                <p>The adaptive grayscale is a custom feature in SB Admin Pro. The grayscale is formed by setting a value to the <code>$grayscale-base-hue</code> variable in the <code>src/styles/sb-admin-pro/variables/_colors.scss</code> file. The base hue, set to blue by default, is then blended with a true black and white grayscale to make a slightly tinted grayscale that is used throughout the theme.</p>\n                <p class=\"mb-0\">You can use the above utilty classes as background colors for your elements, and you can modify the adaptive grayscale within the <code>src/styles/sb-admin-pro/variables/_colors.scss</code> file.</p>\n            </div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/badges-default/badges-default.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/badges-default/badges-default.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsBadgesDefaultBadgesDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Default Bootstrap Badges</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\"><span class=\"badge badge-primary mr-2\">Primary</span><span class=\"badge badge-secondary mr-2\">Secondary</span><span class=\"badge badge-success mr-2\">Success</span><span class=\"badge badge-danger mr-2\">Danger</span><span class=\"badge badge-warning mr-2\">Warning</span><span class=\"badge badge-info mr-2\">Info</span><span class=\"badge badge-light mr-2\">Light</span><span class=\"badge badge-dark mr-2\">Dark</span></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">By default, Bootstrap includes the above badges. The styling for these default badges has been modified to fit the SB Admin Pro theme.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/badges-extended/badges-extended.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/badges-extended/badges-extended.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsBadgesExtendedBadgesExtendedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Extended Badges</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\"><span class=\"badge badge-red mr-2\">Red</span><span class=\"badge badge-orange mr-2\">Orange</span><span class=\"badge badge-yellow mr-2\">Yellow</span><span class=\"badge badge-green mr-2\">Green</span><span class=\"badge badge-teal mr-2\">Teal</span><span class=\"badge badge-cyan mr-2\">Cyan</span><span class=\"badge badge-blue mr-2\">Blue</span><span class=\"badge badge-indigo mr-2\">Indigo</span><span class=\"badge badge-purple mr-2\">Purple</span><span class=\"badge badge-pink mr-2\">Pink</span></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">The above non-contextual badge styles are custom made for the SB Admin Pro theme!</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/badges-sizing/badges-sizing.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/badges-sizing/badges-sizing.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsBadgesSizingBadgesSizingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Badge Sizing</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <h1>Example Heading<span class=\"badge badge-primary ml-2\">New</span></h1>\n                <h2>Example Heading<span class=\"badge badge-primary ml-2\">New</span></h2>\n                <h3>Example Heading<span class=\"badge badge-primary ml-2\">New</span></h3>\n                <h4>Example Heading<span class=\"badge badge-primary ml-2\">New</span></h4>\n                <h5>Example Heading<span class=\"badge badge-primary ml-2\">New</span></h5>\n                <h6>Example Heading<span class=\"badge badge-primary ml-2\">New</span></h6>\n                <p>This is an example paragraph with a badge at the end!<span class=\"badge badge-primary ml-2\">New</span></p>\n                <button class=\"btn btn-primary mr-2\">Messages<span class=\"badge badge-white ml-2\">5</span></button><button class=\"btn btn-secondary mr-2\">Notifications<span class=\"badge badge-white ml-2\">3</span></button><button class=\"btn btn-warning\">Alerts<span class=\"badge badge-white ml-2\">7</span></button>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Badge sizing is set using <code>em</code> units, which means they will adapt to the font size of their immediate parent. The above examples show the badge size adapting to the parent, including the badge used within the button element.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-colors/borders-colors.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-colors/borders-colors.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsBordersColorsBordersColorsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Border Colors</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Bootstrap Default State Colors:</h6>\n        <div class=\"border sb-border-lg rounded mb-4\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <div class=\"bg-light border border-primary p-3 mb-3\">.border-primary</div>\n                        <div class=\"bg-light border border-secondary p-3 mb-3\">.border-secondary</div>\n                        <div class=\"bg-light border border-success p-3 mb-3\">.border-success</div>\n                        <div class=\"bg-light border border-danger p-3 mb-3\">.border-danger</div>\n                        <div class=\"bg-light border border-warning p-3\">.border-warning</div>\n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"bg-light border border-info p-3 mb-3\">.border-info</div>\n                        <div class=\"bg-light border border-light p-3 mb-3\">.border-light</div>\n                        <div class=\"bg-light border border-dark p-3 mb-3\">.border-dark</div>\n                        <div class=\"bg-light border border-white p-3\">.border-white</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bg-light p-4 small\">Bootstrap's state specific border colors can be used in unison with the additive or subtractive border utilities above.</div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Extended Border Colors:</h6>\n        <div class=\"border sb-border-lg rounded mb-4\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <div class=\"bg-light border border-red p-3 mb-3\">.border-red</div>\n                        <div class=\"bg-light border border-orange p-3 mb-3\">.border-orange</div>\n                        <div class=\"bg-light border border-yellow p-3 mb-3\">.border-yellow</div>\n                        <div class=\"bg-light border border-green p-3 mb-3\">.border-green</div>\n                        <div class=\"bg-light border border-teal p-3\">.border-teal</div>\n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"bg-light border border-cyan p-3 mb-3\">.border-cyan</div>\n                        <div class=\"bg-light border border-blue p-3 mb-3\">.border-blue</div>\n                        <div class=\"bg-light border border-indigo p-3 mb-3\">.border-indigo</div>\n                        <div class=\"bg-light border border-purple p-3 mb-3\">.border-purple</div>\n                        <div class=\"bg-light border border-pink p-3\">.border-pink</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bg-light p-4 small\">SB Admin Pro's expanded color system allows you to use non-contextual border colors instead of state specific ones.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-default/borders-default.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-default/borders-default.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsBordersDefaultBordersDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Default Bootstrap Borders</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Additive:</h6>\n        <div class=\"border sb-border-lg rounded mb-4\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <div class=\"bg-light border p-3 mb-3\">.border</div>\n                        <div class=\"bg-light border-top p-3 mb-3\">.border-top</div>\n                        <div class=\"bg-light border-right p-3\">.border-right</div>\n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"bg-light border-bottom p-3 mb-3\">.border-bottom</div>\n                        <div class=\"bg-light border-left p-3\">.border-left</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bg-light p-4 small\">The above border utilities will <em>add</em> borders to any element.</div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Subtractive:</h6>\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <div class=\"bg-light border border-0 p-3 mb-3\">.border-0</div>\n                        <div class=\"bg-light border border-top-0 p-3 mb-3\">.border-top-0</div>\n                        <div class=\"bg-light border border-right-0 p-3\">.border-right-0</div>\n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"bg-light border border-bottom-0 p-3 mb-3\">.border-bottom-0</div>\n                        <div class=\"bg-light border border-left-0 p-3\">.border-left-0</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bg-light p-4 small\">The above border utilities will <em>subtract</em> borders from any element that already has them.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-radius-size/borders-radius-size.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-radius-size/borders-radius-size.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsBordersRadiusSizeBordersRadiusSizeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Default Bootstrap Border Radius Sizes</div>\n    <div class=\"card-body\">\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"bg-primary text-white rounded-sm p-3 mb-3\">.rounded-sm</div>\n                <div class=\"bg-primary text-white rounded p-3 mb-3\">.rounded</div>\n                <div class=\"bg-primary text-white rounded-lg p-3\">.rounded-lg</div>\n            </div>\n            <div class=\"bg-light p-4 small\">You can set the border radius sizes in by changes their respective SCSS variables in the <code>src/styles/sb-admin-pro/variables/_colors.scss</code> file.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-radius/borders-radius.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-radius/borders-radius.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsBordersRadiusBordersRadiusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Default Bootstrap Border Radius</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Rounded Corners:</h6>\n        <div class=\"border sb-border-lg rounded mb-4\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <div class=\"bg-primary text-white rounded p-3 mb-3\">.rounded</div>\n                        <div class=\"bg-primary text-white rounded-top p-3\">.rounded-top</div>\n                    </div>\n                    <div class=\"col-4\">\n                        <div class=\"bg-primary text-white rounded-right p-3 mb-3\">.rounded-right</div>\n                        <div class=\"bg-primary text-white rounded-bottom p-3\">.rounded-bottom</div>\n                    </div>\n                    <div class=\"col-4\">\n                        <div class=\"bg-primary text-white rounded-left p-3 mb-3\">.rounded-left</div>\n                        <div class=\"bg-primary text-white rounded-0 p-3\">.rounded-0</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bg-light p-4 small\">The above border utilities will round the corners of your element based on which utility you specify. You can use them together as well!</div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Other Utilities:</h6>\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"bg-primary text-white rounded-circle p-3 mr-2 d-inline-flex align-items-center justify-content-center\" style=\"height: 10rem; width: 10rem;\">.rounded-circle</div>\n                <div class=\"bg-primary text-white rounded-pill p-3 mr-2 d-inline-flex align-items-center justify-content-center\" style=\"height: 5rem; width: 10rem;\">.rounded-pill</div>\n            </div>\n            <div class=\"bg-light p-4 small\">It is recommended that you only use the <code>.rounded-circle</code> utility on square elements and the <code>.rounded-pill</code> utility on elements with a width that is larger than it's height.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-thickness/borders-thickness.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-thickness/borders-thickness.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsBordersThicknessBordersThicknessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Custom Border Thickness</div>\n    <div class=\"card-body\">\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"bg-light border p-3 mb-3\">.border</div>\n                <div class=\"bg-light border sb-border-lg p-3 mb-3\">.border .sb-border-lg</div>\n                <div class=\"bg-light border-top sb-border-lg p-3 mb-3\">.border-top .sb-border-lg</div>\n                <div class=\"bg-light border-right sb-border-lg p-3 mb-3\">.border-right .sb-border-lg</div>\n                <div class=\"bg-light border-bottom sb-border-lg p-3 mb-3\">.border-bottom .sb-border-lg</div>\n                <div class=\"bg-light border-left sb-border-lg p-3\">.border-left .sb-border-lg</div>\n            </div>\n            <div class=\"bg-light p-4 small\">You can change to a thicker border radius using the <code>.sb-border-lg</code> utility classes, which extends the default Bootstrap functionalilty.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-usage-examples/borders-usage-examples.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-usage-examples/borders-usage-examples.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsBordersUsageExamplesBordersUsageExamplesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Combining Border Utilities</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Basic Combinations:</h6>\n        <div class=\"border sb-border-lg rounded mb-4\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <div class=\"bg-light border-left sb-border-lg rounded border-primary p-3 mb-3\">Combine border position, radius, color, and thickness utilities!</div>\n                        <div class=\"bg-light border-top sb-border-lg rounded border-warning p-3\">Combine border position, radius, color, and thickness utilities!</div>\n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"bg-light border-right sb-border-lg rounded border-secondary p-3 mb-3\">Combine border position, radius, color, and thickness utilities!</div>\n                        <div class=\"bg-light border-bottom sb-border-lg rounded border-danger p-3\">Combine border position, radius, color, and thickness utilities!</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bg-light p-4 small\">By combining utility classes, you can avoid creating your own custom components, saving time and decresing CSS bloat throughout your project!</div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Modified Cards:</h6>\n        <div class=\"border sb-border-lg rounded mb-4\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <sbpro-card [classes]='[\"sb-border-left-lg\", \"border-primary\"]'><div class=\"card-body\">This is a custom card with a thick, colored border.</div></sbpro-card><sbpro-card [classes]='[\"sb-border-top-lg\", \"border-warning\"]'><div class=\"card-body\">This is a custom card with a thick, colored border.</div></sbpro-card>\n                    </div>\n                    <div class=\"col-6\">\n                        <sbpro-card [classes]='[\"sb-border-right-lg\", \"border-secondary\"]'><div class=\"card-body\">This is a custom card with a thick, colored border.</div></sbpro-card><sbpro-card [classes]='[\"sb-border-bottom-lg\", \"border-danger\"]'><div class=\"card-body\">This is a custom card with a thick, colored border.</div></sbpro-card>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bg-light p-4 small\">Use utility classes to modify the style of components on the fly! You don't need to use the default border utility classes if the component already has a border by default.</div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Modified Alerts:</h6>\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\">\n                <sbpro-alert [icon]=\"true\" [classes]='[\"alert-primary\", \"sb-border-left-lg\"]' heading=\"Primary Icon Alert\"\n                    ><div class=\"sb-alert-icon-aside\"><fa-icon [icon]='[\"far\", \"bell\"]'></fa-icon></div>\n                    This alert has a thick left border!</sbpro-alert\n                ><sbpro-alert [icon]=\"true\" [classes]='[\"alert-secondary\", \"sb-border-top-lg\", \"mb-0\"]' heading=\"Primary Icon Alert\"\n                    ><div class=\"sb-alert-icon-aside\"><fa-icon [icon]='[\"far\", \"bell\"]'></fa-icon></div>\n                    This alert has a thick left border!</sbpro-alert\n                >\n            </div>\n            <div class=\"bg-light p-4 small\">Any element that already has a border defined by default doesn't need to use the Bootstrap border utilities!</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-custom/buttons-custom.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-custom/buttons-custom.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsButtonsCustomButtonsCustomComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Custom Button Colors</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-btn-example mb-4\">\n            <h6 class=\"small text-muted font-weight-500\">Non-Contextual Button Colors:</h6>\n            <div class=\"sbp-preview mb-4\">\n                <div class=\"sbp-preview-content\"><button class=\"my-1 mr-2 btn btn-red\" type=\"button\">Red</button><button class=\"my-1 mr-2 btn btn-orange\" type=\"button\">Orange</button><button class=\"my-1 mr-2 btn btn-yellow\" type=\"button\">Yellow</button><button class=\"my-1 mr-2 btn btn-green\" type=\"button\">Green</button><button class=\"my-1 mr-2 btn btn-teal\" type=\"button\">Teal</button><button class=\"my-1 mr-2 btn btn-cyan\" type=\"button\">Cyan</button><button class=\"my-1 mr-2 btn btn-blue\" type=\"button\">Blue</button><button class=\"my-1 mr-2 btn btn-indigo\" type=\"button\">Indigo</button><button class=\"my-1 mr-2 btn btn-purple\" type=\"button\">Purple</button><button class=\"my-1 mr-2 btn btn-pink\" type=\"button\">Pink</button></div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">By default, Bootstrap's buttons are semantically named. We've extended the Bootstrap framework to include non-contextual colors.</div>\n            </div>\n        </div>\n        <div class=\"sbp-btn-example\">\n            <h6 class=\"small text-muted font-weight-500\">Non-Contextual Outline Button Colors:</h6>\n            <div class=\"sbp-preview mb-4\">\n                <div class=\"sbp-preview-content\"><button class=\"my-1 mr-2 btn btn-outline-red\" type=\"button\">Red</button><button class=\"my-1 mr-2 btn btn-outline-orange\" type=\"button\">Orange</button><button class=\"my-1 mr-2 btn btn-outline-yellow\" type=\"button\">Yellow</button><button class=\"my-1 mr-2 btn btn-outline-green\" type=\"button\">Green</button><button class=\"my-1 mr-2 btn btn-outline-teal\" type=\"button\">Teal</button><button class=\"my-1 mr-2 btn btn-outline-cyan\" type=\"button\">Cyan</button><button class=\"my-1 mr-2 btn btn-outline-blue\" type=\"button\">Blue</button><button class=\"my-1 mr-2 btn btn-outline-indigo\" type=\"button\">Indigo</button><button class=\"my-1 mr-2 btn btn-outline-purple\" type=\"button\">Purple</button><button class=\"my-1 mr-2 btn btn-outline-pink\" type=\"button\">Pink</button></div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesOutline\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">SB Admin Pro's non-contextual color classes work with outline buttons as well!</div>\n            </div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-default/buttons-default.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-default/buttons-default.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsButtonsDefaultButtonsDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Default Bootstrap Buttons</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-btn-example mb-4\">\n            <h6 class=\"small text-muted font-weight-500\">Bootstrap Buttons:</h6>\n            <div class=\"sbp-preview mb-4\">\n                <div class=\"sbp-preview-content\"><button class=\"my-1 mr-2 btn btn-primary\" type=\"button\">Primary</button><button class=\"my-1 mr-2 btn btn-secondary\" type=\"button\">Secondary</button><button class=\"my-1 mr-2 btn btn-success\" type=\"button\">Success</button><button class=\"my-1 mr-2 btn btn-danger\" type=\"button\">Danger</button><button class=\"my-1 mr-2 btn btn-warning\" type=\"button\">Warning</button><button class=\"my-1 mr-2 btn btn-info\" type=\"button\">Info</button><button class=\"my-1 mr-2 btn btn-light\" type=\"button\">Light</button><button class=\"my-1 mr-2 btn btn-dark\" type=\"button\">Dark</button><button class=\"my-1 mr-2 btn btn-link\" type=\"button\">Link</button></div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">Bootstrap's default state-specific button styles have been styled to fit the SB Admin Pro theme.</div>\n            </div>\n        </div>\n        <div class=\"sbp-btn-example\">\n            <h6 class=\"small text-muted font-weight-500\">Bootstrap Outline Buttons:</h6>\n            <div class=\"sbp-preview mb-4\">\n                <div class=\"sbp-preview-content\"><button class=\"my-1 mr-2 btn btn-outline-primary\" type=\"button\">Primary</button><button class=\"my-1 mr-2 btn btn-outline-secondary\" type=\"button\">Secondary</button><button class=\"my-1 mr-2 btn btn-outline-success\" type=\"button\">Success</button><button class=\"my-1 mr-2 btn btn-outline-danger\" type=\"button\">Danger</button><button class=\"my-1 mr-2 btn btn-outline-warning\" type=\"button\">Warning</button><button class=\"my-1 mr-2 btn btn-outline-info\" type=\"button\">Info</button><button class=\"my-1 mr-2 btn btn-outline-light\" type=\"button\">Light</button><button class=\"my-1 mr-2 btn btn-outline-dark\" type=\"button\">Dark</button></div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesOutline\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">Outline button styles are also available by default from Bootstrap.</div>\n            </div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-extending/buttons-extending.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-extending/buttons-extending.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsButtonsExtendingButtonsExtendingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Extending Buttons</div>\n    <div class=\"card-body\">\n        <sbpro-card-icon\n            ><div class=\"card-icon\"><i-feather class=\"text-white-50\" name=\"alert-triangle\"></i-feather></div>\n            <div class=\"card-body\">\n                <h6 class=\"card-title\">Using Utility Classes vs. Overriding SCSS Variables</h6>\n                <p class=\"card-text small\">Utility classes are a quick and powerful way to extend the styling the button component. Specifically, border, shadow, text, and spacing utilities work well to customize a button.</p>\n                <p class=\"card-text small\">Use utility classes to transform the style of a single button, or a small group of buttons. The best way to globally restyle the button component is by overriding button specific SCSS variables.</p>\n            </div></sbpro-card-icon\n        >\n        <div class=\"sbp-btn-example mb-4\">\n            <h6 class=\"small text-muted font-weight-500\">Square Buttons:</h6>\n            <div class=\"sbp-preview mb-4\">\n                <div class=\"sbp-preview-content\">\n                    <button class=\"my-1 mr-2 btn btn-primary rounded-0\">Primary</button><button class=\"my-1 mr-2 btn btn-secondary rounded-0\">Secondary</button><button class=\"my-1 mr-2 btn btn-outline-primary rounded-0\">Primary</button><button class=\"my-1 mr-2 btn btn-outline-secondary rounded-0\">Secondary</button><button class=\"my-1 mr-2 btn btn-primary sb-btn-icon rounded-0\"><i-feather name=\"feather\"></i-feather></button><button class=\"my-1 mr-2 btn btn-secondary sb-btn-icon rounded-0\"><i-feather name=\"feather\"></i-feather></button><button class=\"my-1 mr-2 btn btn-outline-primary sb-btn-icon rounded-0\"><i-feather name=\"feather\"></i-feather></button><button class=\"my-1 mr-2 btn btn-outline-secondary sb-btn-icon rounded-0\"><i-feather name=\"feather\"></i-feather></button>\n                </div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesSquare\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">Append the <code>.rounded-0</code> helper utility class onto any button and it will square the edges, resulting in a squared button.</div>\n            </div>\n        </div>\n        <div class=\"sbp-btn-example mb-4\">\n            <h6 class=\"small text-muted font-weight-500\">Shadowed Buttons:</h6>\n            <div class=\"sbp-preview mb-4\">\n                <div class=\"sbp-preview-content\">\n                    <button class=\"my-1 mr-2 btn btn-primary shadow-sm\">Primary</button><button class=\"my-1 mr-2 btn btn-secondary shadow-sm\">Secondary</button><button class=\"my-1 mr-2 btn btn-outline-primary shadow-sm\">Primary</button><button class=\"my-1 mr-2 btn btn-outline-secondary shadow-sm\">Secondary</button><button class=\"my-1 mr-2 btn btn-primary sb-btn-icon shadow-sm\"><i-feather name=\"feather\"></i-feather></button><button class=\"my-1 mr-2 btn btn-secondary sb-btn-icon shadow-sm\"><i-feather name=\"feather\"></i-feather></button><button class=\"my-1 mr-2 btn btn-outline-primary sb-btn-icon shadow-sm\"><i-feather name=\"feather\"></i-feather></button><button class=\"my-1 mr-2 btn btn-outline-secondary sb-btn-icon shadow-sm\"><i-feather name=\"feather\"></i-feather></button>\n                </div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesShadowed\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">Append the <code>.shadow-sm</code> helper utility class onto any button and it will give the button a subtle shadow effect. You can use the <code>.shadow</code> and <code>.shadow-lg</code> utilities to add more shadow depth.</div>\n            </div>\n        </div>\n        <div class=\"sbp-btn-example mb-4\">\n            <h6 class=\"small text-muted font-weight-500\">Pill Buttons:</h6>\n            <div class=\"sbp-preview mb-4\">\n                <div class=\"sbp-preview-content\"><button class=\"my-1 mr-2 btn btn-primary rounded-pill\">Primary</button><button class=\"my-1 mr-2 btn btn-secondary rounded-pill\">Secondary</button><button class=\"my-1 mr-2 btn btn-outline-primary rounded-pill\">Primary</button><button class=\"my-1 mr-2 btn btn-outline-secondary rounded-pill\">Secondary</button></div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesPill\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">Append the <code>.rounded-pill</code> helper utility class onto any button and it will give the button a pill effect. Note, this will have no effect on icon buttons which are already circular.</div>\n            </div>\n        </div>\n        <div class=\"sbp-btn-example\">\n            <h6 class=\"small text-muted font-weight-500\">Deeper Customization:</h6>\n            <div class=\"sbp-preview mb-4\">\n                <div class=\"sbp-preview-content\"><button class=\"my-1 mr-2 btn btn-primary rounded-pill px-4\">Primary</button><button class=\"my-1 mr-2 btn btn-secondary rounded-pill px-4\">Secondary</button><button class=\"my-1 mr-2 btn btn-outline-primary rounded-pill px-4\">Primary</button><button class=\"my-1 mr-2 btn btn-outline-secondary rounded-pill px-4\">Secondary</button></div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesDeeper\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">Spacing utilities are especially useful when trying to acheive a certain look and feel for a specific button. In the above example, the <code>.px-4</code> helper utility was added to the button component in order to create more negative space to the left and right sides of the button.</div>\n                <div class=\"p-4 border-bottom\"><button class=\"my-1 mr-2 btn btn-primary btn-sm rounded-0 shadow-sm px-4 py-3 text-uppercase font-weight-800\">Primary</button><button class=\"my-1 mr-2 btn btn-secondary btn-sm rounded-0 shadow-sm px-4 py-3 text-uppercase font-weight-800\">Secondary</button><button class=\"my-1 mr-2 btn btn-outline-primary btn-sm rounded-0 shadow-sm px-4 py-3 text-uppercase font-weight-800\">Primary</button><button class=\"my-1 mr-2 btn btn-outline-secondary btn-sm rounded-0 shadow-sm px-4 py-3 text-uppercase font-weight-800\">Secondary</button></div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesDeeperSquare\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">Multiple utility classes used together can drastically change the styling of a button. This should only be done in cases where only a single button, or a small group of buttons need to have a specific style. To modify buttons globally, it is best to override button SCSS variables.</div>\n            </div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-icon/buttons-icon.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-icon/buttons-icon.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsButtonsIconButtonsIconComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Custom Icon Buttons</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-btn-example mb-4\">\n            <h6 class=\"small text-muted font-weight-500\">Icon Buttons (Feather Icons):</h6>\n            <div class=\"sbp-preview mb-4\">\n                <div class=\"sbp-preview-content\">\n                    <button class=\"my-1 mr-2 btn btn-red sb-btn-icon\" type=\"button\"><i-feather name=\"feather\"></i-feather></button><button class=\"my-1 mr-2 btn btn-orange sb-btn-icon\" type=\"button\"><i-feather name=\"feather\"></i-feather></button><button class=\"my-1 mr-2 btn btn-yellow sb-btn-icon\" type=\"button\"><i-feather name=\"feather\"></i-feather></button><button class=\"my-1 mr-2 btn btn-green sb-btn-icon\" type=\"button\"><i-feather name=\"feather\"></i-feather></button><button class=\"my-1 mr-2 btn btn-teal sb-btn-icon\" type=\"button\"><i-feather name=\"feather\"></i-feather></button><button class=\"my-1 mr-2 btn btn-cyan sb-btn-icon\" type=\"button\"><i-feather name=\"feather\"></i-feather></button><button class=\"my-1 mr-2 btn btn-blue sb-btn-icon\" type=\"button\"><i-feather name=\"feather\"></i-feather></button><button class=\"my-1 mr-2 btn btn-indigo sb-btn-icon\" type=\"button\"><i-feather name=\"feather\"></i-feather></button\n                    ><button class=\"my-1 mr-2 btn btn-purple sb-btn-icon\" type=\"button\"><i-feather name=\"feather\"></i-feather></button><button class=\"my-1 mr-2 btn btn-pink sb-btn-icon\" type=\"button\"><i-feather name=\"feather\"></i-feather></button>\n                </div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesFeather\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">Our custom icon button component is circular by default, and looks great when used with Feather Icons, which are included with this theme.</div>\n            </div>\n        </div>\n        <div class=\"sbp-btn-example mb-4\">\n            <h6 class=\"small text-muted font-weight-500\">Icon Buttons (Font Awesome Icons):</h6>\n            <div class=\"sbp-preview mb-4\">\n                <div class=\"sbp-preview-content\">\n                    <button class=\"my-1 mr-2 btn btn-red sb-btn-icon\" type=\"button\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button><button class=\"my-1 mr-2 btn btn-orange sb-btn-icon\" type=\"button\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button><button class=\"my-1 mr-2 btn btn-yellow sb-btn-icon\" type=\"button\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button><button class=\"my-1 mr-2 btn btn-green sb-btn-icon\" type=\"button\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button><button class=\"my-1 mr-2 btn btn-teal sb-btn-icon\" type=\"button\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button><button class=\"my-1 mr-2 btn btn-cyan sb-btn-icon\" type=\"button\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button><button class=\"my-1 mr-2 btn btn-blue sb-btn-icon\" type=\"button\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button><button class=\"my-1 mr-2 btn btn-indigo sb-btn-icon\" type=\"button\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button\n                    ><button class=\"my-1 mr-2 btn btn-purple sb-btn-icon\" type=\"button\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button><button class=\"my-1 mr-2 btn btn-pink sb-btn-icon\" type=\"button\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button>\n                </div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesFontAwesome\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">Use our icon buttons with Font Awesome as well!</div>\n            </div>\n        </div>\n        <div class=\"sbp-btn-example mb-4\">\n            <h6 class=\"small text-muted font-weight-500\">Icon Buttons (Text):</h6>\n            <div class=\"sbp-preview mb-4\">\n                <div class=\"sbp-preview-content\"><button class=\"my-1 mr-2 btn btn-red sb-btn-icon\" type=\"button\">S</button><button class=\"my-1 mr-2 btn btn-orange sb-btn-icon\" type=\"button\">B</button><button class=\"my-1 mr-2 btn btn-yellow sb-btn-icon\" type=\"button\">A</button><button class=\"my-1 mr-2 btn btn-green sb-btn-icon\" type=\"button\">D</button><button class=\"my-1 mr-2 btn btn-teal sb-btn-icon\" type=\"button\">M</button><button class=\"my-1 mr-2 btn btn-cyan sb-btn-icon\" type=\"button\">I</button><button class=\"my-1 mr-2 btn btn-blue sb-btn-icon\" type=\"button\">N</button><button class=\"my-1 mr-2 btn btn-indigo sb-btn-icon\" type=\"button\">P</button><button class=\"my-1 mr-2 btn btn-purple sb-btn-icon\" type=\"button\">R</button><button class=\"my-1 mr-2 btn btn-pink sb-btn-icon\" type=\"button\">O</button></div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesText\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">Icon buttons use a fixed height and width, so you can use them with short strings of text, one or two characters long.</div>\n            </div>\n        </div>\n        <div class=\"sbp-btn-example\">\n            <h6 class=\"small text-muted font-weight-500\">Icon Buttons (Outline Styling):</h6>\n            <div class=\"sbp-preview mb-4\">\n                <div class=\"sbp-preview-content\">\n                    <button class=\"my-1 mr-2 btn btn-outline-red sb-btn-icon\" type=\"button\"><i-feather name=\"zap\"></i-feather></button><button class=\"my-1 mr-2 btn btn-outline-orange sb-btn-icon\" type=\"button\"><i-feather name=\"archive\"></i-feather></button><button class=\"my-1 mr-2 btn btn-outline-yellow sb-btn-icon\" type=\"button\"><i-feather name=\"alert-triangle\"></i-feather></button><button class=\"my-1 mr-2 btn btn-outline-green sb-btn-icon\" type=\"button\"><i-feather name=\"check\"></i-feather></button><button class=\"my-1 mr-2 btn btn-outline-teal sb-btn-icon\" type=\"button\"><i-feather name=\"award\"></i-feather></button><button class=\"my-1 mr-2 btn btn-outline-cyan sb-btn-icon\" type=\"button\"><i-feather name=\"info\"></i-feather></button><button class=\"my-1 mr-2 btn btn-outline-blue sb-btn-icon\" type=\"button\"><i-feather name=\"cloud-rain\"></i-feather></button><button class=\"my-1 mr-2 btn btn-outline-indigo sb-btn-icon\" type=\"button\"><i-feather name=\"activity\"></i-feather></button\n                    ><button class=\"my-1 mr-2 btn btn-outline-purple sb-btn-icon\" type=\"button\"><i-feather name=\"user\"></i-feather></button><button class=\"my-1 mr-2 btn btn-outline-pink sb-btn-icon\" type=\"button\"><i-feather name=\"droplet\"></i-feather></button>\n                </div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesOutline\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">Icon buttons also support the outline button styling!</div>\n            </div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-sizing/buttons-sizing.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-sizing/buttons-sizing.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsButtonsSizingButtonsSizingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Button Sizing</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-btn-example mb-4\">\n            <h6 class=\"small text-muted font-weight-500\">Extended Button Sizing:</h6>\n            <div class=\"sbp-preview mb-4\">\n                <div class=\"sbp-preview-content\"><button class=\"my-1 mr-2 btn btn-primary sb-btn-xs\">Extra Small</button><button class=\"my-1 mr-2 btn btn-primary btn-sm\">Small</button><button class=\"my-1 mr-2 btn btn-primary\">Default</button><button class=\"my-1 mr-2 btn btn-primary btn-lg\">Large</button><button class=\"my-1 mr-2 btn btn-primary sb-btn-xl\">Extra Large</button></div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">Button sizes have been extended from Bootstrap defaults to include extra small and extra large buttons.</div>\n            </div>\n        </div>\n        <div class=\"sbp-btn-example\">\n            <h6 class=\"small text-muted font-weight-500\">Usage with Icon Buttons:</h6>\n            <div class=\"sbp-preview mb-4\">\n                <div class=\"sbp-preview-content\">\n                    <button class=\"my-1 mr-2 btn btn-primary sb-btn-xs sb-btn-icon\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button><button class=\"my-1 mr-2 btn btn-primary btn-sm sb-btn-icon\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button><button class=\"my-1 mr-2 btn btn-primary sb-btn-icon\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button><button class=\"my-1 mr-2 btn btn-primary btn-lg sb-btn-icon\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button><button class=\"my-1 mr-2 btn btn-primary sb-btn-xl sb-btn-icon\"><fa-icon [icon]='[\"fas\", \"flag\"]'></fa-icon></button>\n                </div>\n                <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesIcon\"></sbpro-code-sample></div>\n                <div class=\"sbp-preview-text\">The custom icon button component is compatible with all of the button sizing options available.</div>\n            </div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-social/buttons-social.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-social/buttons-social.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsButtonsSocialButtonsSocialComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Social Buttons</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <button class=\"my-1 mr-2 btn sb-btn-facebook\"><fa-icon class=\"mr-2\" [icon]='[\"fab\", \"facebook\"]'></fa-icon>Facebook</button><button class=\"my-1 mr-2 btn sb-btn-github\"><fa-icon class=\"mr-2\" [icon]='[\"fab\", \"github\"]'></fa-icon>GitHub</button><button class=\"my-1 mr-2 btn sb-btn-google\"><fa-icon class=\"mr-2\" [icon]='[\"fab\", \"google\"]'></fa-icon>Google</button><button class=\"my-1 mr-2 btn sb-btn-twitter\"><fa-icon class=\"mr-2\" [icon]='[\"fab\", \"twitter\"]'></fa-icon>Twitter</button>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">A select group of popular brands have had custom buttons styles added. The example above uses the Font Awesome brand icons in unison with the custom brand button styling.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-transparent/buttons-transparent.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-transparent/buttons-transparent.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsButtonsTransparentButtonsTransparentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Custom Transparent Buttons</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content p-0\">\n                <div class=\"p-4 border-bottom\">\n                    <button class=\"my-1 mr-2 btn sb-btn-transparent-dark mr-2\" type=\"button\">Hover Me!</button><button class=\"my-1 mr-2 btn sb-btn-transparent-dark sb-btn-icon\" type=\"button\"><i-feather name=\"feather\"></i-feather></button>\n                </div>\n                <div class=\"bg-dark p-4 border-bottom\">\n                    <button class=\"my-1 mr-2 btn sb-btn-transparent-light mr-2\" type=\"button\">Hover Me!</button><button class=\"my-1 mr-2 btn sb-btn-transparent-light sb-btn-icon\" type=\"button\"><i-feather name=\"feather\"></i-feather></button>\n                </div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Our transparent button component is available to use in place of a button color. This color styling works with all of the other customization options available, including icon buttons.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-advanced/cards-advanced.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-advanced/cards-advanced.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsCardsAdvancedCardsAdvancedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card class=\"mb-4\"\n    ><div class=\"card-header\">Custom Icon</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Card with Dropdown in Header:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\">\n                <sbpro-card class=\"mx-auto\" sbproTocItem=\"Header Dropdown\" [headerActions]=\"true\" style=\"width: 60%;\"\n                    ><div class=\"card-header\">\n                        Header Dropdown<sbpro-dropdown placement=\"bottom-right\" animation=\"animated--fade-in-up\" [classes]='[\"no-caret\"]'\n                            ><div class=\"dropdown-trigger\"><i-feather class=\"text-primary\" name=\"more-vertical\"></i-feather></div>\n                            <div class=\"dropdown-items\"><a class=\"dropdown-item\" routerLink=\"/dashboard\">Dashboard</a><a class=\"dropdown-item\" (click)=\"action()\">Action</a><a class=\"dropdown-item\" (click)=\"anotherAction()\">Another Action</a></div></sbpro-dropdown\n                        >\n                    </div>\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is an example of a custom card with a dropdown action inside of the card header.</p>\n                        <p class=\"card-text\">Add the <code>[headerActions]='true'</code> attribute to your <code>sbpro-card</code> in order to change the header styling.</p>\n                    </div></sbpro-card\n                >\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesDropdown\"></sbpro-code-sample></div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Card with Icons in Header:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content bg-light\">\n                <sbpro-card class=\"mx-auto\" sbproTocItem=\"Header Icons\" [headerActions]=\"true\" style=\"width: 60%;\"\n                    ><div class=\"card-header\">\n                        Header Icons\n                        <div>\n                            <button class=\"btn btn-pink sb-btn-icon mr-2\"><i-feather name=\"heart\"></i-feather></button><button class=\"btn btn-teal sb-btn-icon mr-2\"><i-feather name=\"bookmark\"></i-feather></button><button class=\"btn btn-blue sb-btn-icon\"><i-feather name=\"share\"></i-feather></button>\n                        </div>\n                    </div>\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is an example of a custom card with a dropdown action inside of the card header.</p>\n                        <p class=\"card-text\">Add the <code>[headerActions]='true'</code> attribute to your <code>sbpro-card</code> in order to change the header styling.</p>\n                    </div></sbpro-card\n                >\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesIcons\"></sbpro-code-sample></div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Card with Button in Header:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content bg-light\">\n                <sbpro-card class=\"mx-auto\" sbproTocItem=\"Header Button\" [headerActions]=\"true\" style=\"width: 60%;\"\n                    ><div class=\"card-header\">Header Button<button class=\"btn btn-primary btn-sm\">Action</button></div>\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is an example of a custom card with a dropdown action inside of the card header.</p>\n                        <p class=\"card-text\">Add the <code>[headerActions]='true'</code> attribute to your <code>sbpro-card</code> in order to change the header styling.</p>\n                    </div></sbpro-card\n                >\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesButton\"></sbpro-code-sample></div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Card with Input in Header:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content bg-light\">\n                <sbpro-card class=\"mx-auto\" sbproTocItem=\"Header Input\" [headerActions]=\"true\" style=\"width: 60%;\"\n                    ><div class=\"card-header\">\n                        Header Input\n                        <div class=\"form\"><input class=\"form-control\" placeholder=\"Search\" /></div>\n                    </div>\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is an example of a custom card with a dropdown action inside of the card header.</p>\n                        <p class=\"card-text\">Add the <code>[headerActions]='true'</code> attribute to your <code>sbpro-card</code> in order to change the header styling.</p>\n                    </div></sbpro-card\n                >\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesInput\"></sbpro-code-sample></div>\n        </div></div></sbpro-card\n><sbpro-card-icon\n    ><div class=\"card-icon\"><i-feather class=\"text-white-50\" name=\"alert-triangle\"></i-feather></div>\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Extending Advanced Cards</h5>\n        <p class=\"card-text\">The <code>[headerActions]='true'</code> attribute allows you to extend the content of the hard header significantly. The above examples are just a few of many ways you can add more actionable items to your card headers.</p>\n    </div></sbpro-card-icon\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-basic/cards-basic.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-basic/cards-basic.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsCardsBasicCardsBasicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Basic Card</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content bg-light\">\n                <sbpro-card class=\"mx-auto\" style=\"width: 60%;\"\n                    ><div class=\"card-header\">Basic Card Example</div>\n                    <div class=\"card-body\">This is an example of a basic card.</div></sbpro-card\n                >\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">\n                The example above is a basic card with a card header and a card body. You can extend the card using any of the features included with Bootstrap.\n                <br />\n                <span class=\"font-weight-bold\">Note:</span> The card styling in SB Admin Pro looks best with a light background color due to the background color of the card header, card body, and box shadow.\n            </div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-collapsable/cards-collapsable.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-collapsable/cards-collapsable.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsCardsCollapsableCardsCollapsableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Collapsable Card</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content bg-light\">\n                <sbpro-card-collapsable class=\"mx-auto\" headerText=\"Collapsable Card Example\" style=\"width: 60%;\"\n                    ><div class=\"card-body\">\n                        <p class=\"card-text\">\n                            This is a collapsable card example using custom collapse functionality with some added custom styling. <br /><strong>Click on the card header</strong>\n                            to see the card body collapse and expand!\n                        </p>\n                    </div></sbpro-card-collapsable\n                >\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n        </div></div\n></sbpro-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-colors/cards-colors.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-colors/cards-colors.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsCardsColorsCardsColorsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card class=\"mb-4\"\n    ><div class=\"card-header\">Card Colors</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Default Card Colors:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <sbpro-card class=\"mb-4\" background=\"bg-primary\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Primary Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        ><sbpro-card class=\"mb-4\" background=\"bg-secondary\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Secondary Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        ><sbpro-card class=\"mb-4\" background=\"bg-success\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Success Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        ><sbpro-card class=\"mb-4\" background=\"bg-danger\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Danger Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        >\n                    </div>\n                    <div class=\"col-6\">\n                        <sbpro-card class=\"mb-4\" background=\"bg-warning\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Warning Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        ><sbpro-card class=\"mb-4\" background=\"bg-light\"\n                            ><div class=\"card-header text-dark\">Light Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        ><sbpro-card class=\"mb-4\" background=\"bg-dark\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Dark Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        >\n                    </div>\n                </div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Extended Card Colors:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content bg-light\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <sbpro-card class=\"mb-4\" background=\"bg-red\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Red Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        ><sbpro-card class=\"mb-4\" background=\"bg-orange\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Orange Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        ><sbpro-card class=\"mb-4\" background=\"bg-yellow\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Yellow Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        ><sbpro-card class=\"mb-4\" background=\"bg-green\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Green Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        ><sbpro-card class=\"mb-4\" background=\"bg-teal\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Teal Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        >\n                    </div>\n                    <div class=\"col-6\">\n                        <sbpro-card class=\"mb-4\" background=\"bg-cyan\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Cyan Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        ><sbpro-card class=\"mb-4\" background=\"bg-blue\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Blue Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        ><sbpro-card class=\"mb-4\" background=\"bg-indigo\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Indigo Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        ><sbpro-card class=\"mb-4\" background=\"bg-purple\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Purple Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        ><sbpro-card class=\"mb-4\" background=\"bg-pink\" color=\"text-white\"\n                            ><div class=\"card-header text-white\">Pink Card</div>\n                            <div class=\"card-body\"><p class=\"card-text\">Here is some example text within the card body.</p></div>\n                            <div class=\"card-footer\">Card Footer</div></sbpro-card\n                        >\n                    </div>\n                </div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesExtended\"></sbpro-code-sample></div>\n        </div></div\n></sbpro-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-icons/cards-icons.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-icons/cards-icons.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsCardsIconsCardsIconsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Icon Card</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content bg-light\">\n                <sbpro-card-icon\n                    ><div class=\"card-icon\"><i-feather class=\"text-white-50\" name=\"layers\"></i-feather></div>\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Custom Icon Card</h5>\n                        <p class=\"card-text\">The icon card is an extension of the Bootstrap card component that uses Bootstrap layout classes in unison with custom styling to create a new card layout that you can use to add emphasis to certain content.</p>\n                    </div></sbpro-card-icon\n                >\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Feather Icons, Font Awesome icons, or a custom SVG can be used for the icon.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-images/cards-images.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-images/cards-images.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsCardsImagesCardsImagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card class=\"mb-4\"\n    ><div class=\"card-header\">Image Cards</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Card Image Caps:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <sbpro-card-image src=\"https://source.unsplash.com/tz87qQK9n58/900x500\" alt=\"...\" placement=\"top\"\n                            ><div class=\"card-body\">\n                                <h5 class=\"card-title\">Card Image Cap (Top)</h5>\n                                <p class=\"card-text\">This is am example of a default Bootstrap image card with an image above the card body content.</p>\n                            </div></sbpro-card-image\n                        >\n                    </div>\n                    <div class=\"col-6\">\n                        <sbpro-card-image src=\"https://source.unsplash.com/9fMmgBEd2bw/900x500\" alt=\"...\" placement=\"bottom\"\n                            ><div class=\"card-body\">\n                                <h5 class=\"card-title\">Card Image Cap (Bottom)</h5>\n                                <p class=\"card-text\">This is am example of a default Bootstrap image card with an image below the card body content.</p>\n                            </div></sbpro-card-image\n                        >\n                    </div>\n                </div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesCaps\"></sbpro-code-sample></div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Card Image Overlay:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content bg-light\">\n                <sbpro-card-image src=\"https://source.unsplash.com/wSb8d-ke5-4/900x500\" alt=\"...\" placement=\"overlay\" background=\"bg-light\" color=\"text-dark\"\n                    ><div class=\"card-img-overlay\">\n                        <h5 class=\"card-title\">Card Image (Overlay)</h5>\n                        <p class=\"card-text\">This card variant uses a background image as the card image with a text overlay. You can use text utility classes to style the text color.</p>\n                    </div></sbpro-card-image\n                >\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesOverlay\"></sbpro-code-sample></div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Card Image Sides:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content bg-light\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <sbpro-card-image src=\"https://source.unsplash.com/Il-ErBsaH4c/300x450\" alt=\"...\" placement=\"left\"\n                            ><div class=\"card-body\">\n                                <h5 class=\"card-title\">Card Image (Left)</h5>\n                                <p class=\"card-text\">Use the Bootstrap grid with utility classes to create this card variant.</p>\n                            </div></sbpro-card-image\n                        >\n                    </div>\n                    <div class=\"col-6\">\n                        <sbpro-card-image src=\"https://source.unsplash.com/_vWY1UKRvNk/300x450\" alt=\"...\" placement=\"right\"\n                            ><div class=\"card-body\">\n                                <h5 class=\"card-title\">Card Image (Right)</h5>\n                                <p class=\"card-text\">Use the Bootstrap grid with utility classes to create this card variant.</p>\n                            </div></sbpro-card-image\n                        >\n                    </div>\n                </div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesSides\"></sbpro-code-sample></div>\n        </div></div\n></sbpro-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-navigation/cards-navigation.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-navigation/cards-navigation.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsCardsNavigationCardsNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card class=\"mb-4\"\n    ><div class=\"card-header\">Navigation Cards</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Card with Tabbed Navigation:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\">\n                <sbpro-card-navigation sbproTocItem=\"Tabs\" [navNames]='[\"Overview\", \"Example\"]' [templates]=\"[overviewTabbed, exampleTabbed]\"\n                    ><ng-template #overviewTabbed\n                        ><h5 class=\"card-title\">Tabbed Navigation Card</h5>\n                        <p class=\"card-text\">The is a custom tab navigation component.</p>\n                        <sbpro-lorem-ipsum class=\"card-text\"></sbpro-lorem-ipsum></ng-template\n                    ><ng-template #exampleTabbed\n                        ><h5 class=\"card-title\">Example Pane</h5>\n                        <p class=\"card-text\">This is an example of another tab pane that you could use within a card with navigation in the header.</p>\n                        <sbpro-lorem-ipsum class=\"card-text\"></sbpro-lorem-ipsum></ng-template\n                ></sbpro-card-navigation>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesTabs\"></sbpro-code-sample></div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Card with Pill Navigation:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content bg-light\">\n                <sbpro-card-navigation sbproTocItem=\"Pills\" [navNames]='[\"Overview\", \"Example\"]' [templates]=\"[overviewPill, examplePill]\" navType=\"pill\"\n                    ><ng-template #overviewPill\n                        ><h5 class=\"card-title\">Pill Navigation Card</h5>\n                        <p class=\"card-text\">The is a custom pill navigation component.</p>\n                        <sbpro-lorem-ipsum class=\"card-text\"></sbpro-lorem-ipsum></ng-template\n                    ><ng-template #examplePill\n                        ><h5 class=\"card-title\">Example Pane</h5>\n                        <p class=\"card-text\">This is an example of another tab pane that you could use within a card with navigation in the header.</p>\n                        <sbpro-lorem-ipsum class=\"card-text\"></sbpro-lorem-ipsum></ng-template\n                ></sbpro-card-navigation>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesPills\"></sbpro-code-sample></div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Card with Vertically Stacked Pill Navigation::</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content bg-light\">\n                <sbpro-card-navigation sbproTocItem=\"Pills (Vertical)\" [navNames]='[\"Overview\", \"Example\"]' [templates]=\"[overviewVerticalPill, exampleVerticalPill]\" navType=\"vertical\"\n                    ><div class=\"card-header\">Vertical Pill Navigation</div>\n                    <ng-template #overviewVerticalPill\n                        ><h5 class=\"card-title\">Vertical Pill Navigation Card</h5>\n                        <p class=\"card-text\">The is a custom vertical pill navigation component.</p>\n                        <sbpro-lorem-ipsum class=\"card-text\"></sbpro-lorem-ipsum></ng-template\n                    ><ng-template #exampleVerticalPill\n                        ><h5 class=\"card-title\">Example Pane</h5>\n                        <p class=\"card-text\">This is an example of another tab pane that you could use within a card with navigation in the header.</p>\n                        <sbpro-lorem-ipsum class=\"card-text\"></sbpro-lorem-ipsum></ng-template\n                ></sbpro-card-navigation>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesPillsVertical\"></sbpro-code-sample></div>\n        </div></div\n></sbpro-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-scrollable/cards-scrollable.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-scrollable/cards-scrollable.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsCardsScrollableCardsScrollableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Scrollable Card</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content bg-light\">\n                <sbpro-card [scrollable]=\"true\"\n                    ><div class=\"card-header\">Scrollable Card Example</div>\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">The custom scrollable card allows you to set a maximum height to the <code>.card-body</code> element, and scroll the contents of the card body when the height is fixed. You can set the max height of the card body by changing the <code>$card-scrollable-max-height</code> SCSS variable, which is set to <code>15rem</code> by default. You can also set the max height of the card body using inline CSS, or CSS overrides for different cards.</p>\n                        <sbpro-lorem-ipsum class=\"card-text\"></sbpro-lorem-ipsum><sbpro-lorem-ipsum class=\"card-text\"></sbpro-lorem-ipsum>\n                    </div>\n                    <div class=\"card-footer small text-muted\">Place cursor over card body and scroll!</div></sbpro-card\n                >\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n        </div></div\n></sbpro-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/code-sample/code-sample.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/code-sample/code-sample.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsCodeSampleCodeSampleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"pointer nav-item\" *ngFor=\"let codeSample of codeSamples; let i = index\">\n        <a class=\"nav-link mr-1\" [ngClass]=\"{active: selectedIndex === i}\" (click)=\"setSelectedIndex(i)\" data-toggle=\"tab\" role=\"tab\" [attr.aria-selected]=\"selectedIndex === i\"\n            ><ng-container *ngIf='codeSample.language === \"ts\"'>TS</ng-container><ng-container *ngIf='codeSample.language === \"pug\"'><img class=\"img-pug mr-1\" src=\"assets/img/pug.svg\" />PUG</ng-container><ng-container *ngIf='codeSample.language === \"html\"'><fa-icon class=\"text-orange mr-1\" [icon]='[\"fab\", \"html5\"]'></fa-icon>HTML</ng-container></a\n        >\n    </li>\n</ul>\n<div class=\"tab-content\">\n    <div class=\"tab-pane show active\" role=\"tabpanel\" aria-labelledby=\"overview-tab\">\n        <ng-container *ngFor=\"let codeSample of codeSamples; let i = index\"\n            ><div class=\"position-relative\" *ngIf=\"selectedIndex === i\">\n                <pre [ngClass]='\"language-\" + codeSample.language'><code [ngClass]=\"&quot;language-&quot; + codeSample.language\" [innerHTML]=\"codeSample.code\"></code></pre>\n                <i-feather class=\"copy-to-clipboard pointer\" name=\"copy\" ngbTooltip=\"Copy\" (click)=\"copyToClipboard(i)\"></i-feather></div\n        ></ng-container>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/dropdowns-animated/dropdowns-animated.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/dropdowns-animated/dropdowns-animated.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsDropdownsAnimatedDropdownsAnimatedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Animated Dropdown Menu</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <div class=\"d-flex flex-column flex-sm-row\">\n                    <sbpro-dropdown [classes]='[\"mr-2\", \"mb-4\", \"mb-sm-0\"]' dropdownStyle=\"text\" background=\"btn-primary\"\n                        ><div class=\"dropdown-trigger\">No Animation</div>\n                        <div class=\"dropdown-items\"><a class=\"dropdown-item\">Action</a><a class=\"dropdown-item\">Another action</a><a class=\"dropdown-item\">Something else here</a></div></sbpro-dropdown\n                    ><sbpro-dropdown [classes]='[\"mr-2\", \"mb-4\", \"mb-sm-0\"]' dropdownStyle=\"text\" background=\"btn-secondary\" animation=\"animated--fade-in\"\n                        ><div class=\"dropdown-trigger\">Fade In</div>\n                        <div class=\"dropdown-items\"><a class=\"dropdown-item\">Action</a><a class=\"dropdown-item\">Another action</a><a class=\"dropdown-item\">Something else here</a></div></sbpro-dropdown\n                    ><sbpro-dropdown dropdownStyle=\"text\" background=\"btn-teal\" animation=\"animated--fade-in-up\"\n                        ><div class=\"dropdown-trigger\">Fade In Up</div>\n                        <div class=\"dropdown-items\"><a class=\"dropdown-item\">Action</a><a class=\"dropdown-item\">Another action</a><a class=\"dropdown-item\">Something else here</a></div></sbpro-dropdown\n                    >\n                </div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">You can animate any <code>sbpro-dropdown</code> by adding either <code>animated--fade-in</code> and <code>animated--fade-in-up</code> to the <code>animation</code> attribute</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/dropdowns-default/dropdowns-default.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/dropdowns-default/dropdowns-default.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsDropdownsDefaultDropdownsDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Default Bootstrap Dropdown</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <sbpro-dropdown dropdownStyle=\"text\" background=\"btn-primary\"\n                    ><div class=\"dropdown-trigger\">Dropdown Button</div>\n                    <div class=\"dropdown-items\"><a class=\"dropdown-item\" routerLink=\"/dashboard\">Dashboard</a><a class=\"dropdown-item\" (click)=\"action()\">Action</a><a class=\"dropdown-item\" (click)=\"anotherAction()\">Another Action</a></div></sbpro-dropdown\n                >\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">The default Bootstrap dropdown has been extended and modified within the SB Admin Pro theme. Click on the dropdown button above to see a demo.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/dropdowns-icons/dropdowns-icons.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/dropdowns-icons/dropdowns-icons.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsDropdownsIconsDropdownsIconsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Menu Item Icons</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <div class=\"sbp-dropdown-example\">\n                    <div class=\"dropdown-menu\">\n                        <a class=\"dropdown-item\"\n                            ><div class=\"sb-dropdown-item-icon\"><i-feather name=\"user\"></i-feather></div>\n                            Profile</a\n                        ><a class=\"dropdown-item\"\n                            ><div class=\"sb-dropdown-item-icon\"><i-feather name=\"settings\"></i-feather></div>\n                            Settings</a\n                        >\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\"\n                            ><div class=\"sb-dropdown-item-icon\"><i-feather name=\"log-out\"></i-feather></div>\n                            Logout</a\n                        >\n                    </div>\n                </div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Use the <code>.sb-dropdown-item-icon</code> wrapper around any icon within any <code>.dropdown-item</code> to see a pre-styled icon to accompany the dropdown item content.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/dropdowns-notifications/dropdowns-notifications.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/dropdowns-notifications/dropdowns-notifications.component.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsDropdownsNotificationsDropdownsNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Custom Notification Dropdown</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <div class=\"sbp-dropdown-example\">\n                    <div class=\"sb-dropdown-notifications\">\n                        <div class=\"dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up\" aria-labelledby=\"navbarDropdownAlerts\">\n                            <h6 class=\"dropdown-header sb-dropdown-notifications-header\"><i-feather class=\"mr-2\" name=\"bell\"></i-feather>Dropdown Header</h6>\n                            <!-- Example Item 1--><a class=\"dropdown-item sb-dropdown-notifications-item\"\n                                ><div class=\"sb-dropdown-notifications-item-icon bg-warning\"><i-feather name=\"activity\"></i-feather></div>\n                                <div class=\"sb-dropdown-notifications-item-content\">\n                                    <div class=\"sb-dropdown-notifications-item-content-details\">Dropdown Item Details</div>\n                                    <div class=\"sb-dropdown-notifications-item-content-text\">This is the dropdown item text. It will truncate after a fixed width.</div>\n                                </div></a\n                            ><!-- Example Item 2--><a class=\"dropdown-item sb-dropdown-notifications-item\"\n                                ><div class=\"sb-dropdown-notifications-item-icon bg-info\"><i-feather name=\"bar-chart\"></i-feather></div>\n                                <div class=\"sb-dropdown-notifications-item-content\">\n                                    <div class=\"sb-dropdown-notifications-item-content-details\">Dropdown Item Details</div>\n                                    <div class=\"sb-dropdown-notifications-item-content-text\">This is the dropdown item text. It will truncate after a fixed width.</div>\n                                </div></a\n                            ><!-- Example Item 3--><a class=\"dropdown-item sb-dropdown-notifications-item\"\n                                ><div class=\"sb-dropdown-notifications-item-icon bg-danger\"><fa-icon [icon]='[\"fas\", \"exclamation-triangle\"]'></fa-icon></div>\n                                <div class=\"sb-dropdown-notifications-item-content\">\n                                    <div class=\"sb-dropdown-notifications-item-content-details\">Dropdown Item Details</div>\n                                    <div class=\"sb-dropdown-notifications-item-content-text\">This is the dropdown item text. It will truncate after a fixed width.</div>\n                                </div></a\n                            ><!-- Example Item 4--><a class=\"dropdown-item sb-dropdown-notifications-item\"\n                                ><div class=\"sb-dropdown-notifications-item-icon bg-success\"><i-feather name=\"user-plus\"></i-feather></div>\n                                <div class=\"sb-dropdown-notifications-item-content\">\n                                    <div class=\"sb-dropdown-notifications-item-content-details\">Dropdown Item Details</div>\n                                    <div class=\"sb-dropdown-notifications-item-content-text\">This is the dropdown item text. It will truncate after a fixed width.</div>\n                                </div></a\n                            ><a class=\"dropdown-item sb-dropdown-notifications-footer\">Dropdown Footer</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">\n                <p>The notifications dropdown is a custom component built into SB Admin Pro. You can see two examples of the component in action on the topnav when you click on the alerts and message center icons.</p>\n                <p>A max height is set to the dropdown itself, which enables a custom scrollbar if the content within the dropdown exceeds a certain height.</p>\n                <p class=\"mb-0\">This component is well suited for dropdowns that contain large amounts of content that you wish to display in a flush format. The icons are replacable with images, or you can remove them.</p>\n            </div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/forms-checkbox-custom/forms-checkbox-custom.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/forms-checkbox-custom/forms-checkbox-custom.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsFormsCheckboxCustomFormsCheckboxCustomComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Custom Checkboxes &amp; Radio</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Bootstrap Custom Checkboxes:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\">\n                <div class=\"custom-control custom-checkbox\"><input class=\"custom-control-input\" id=\"customCheck1\" type=\"checkbox\" /><label class=\"custom-control-label\" for=\"customCheck1\">Custom Checkbox 1</label></div>\n                <div class=\"custom-control custom-checkbox\"><input class=\"custom-control-input\" id=\"customCheck2\" type=\"checkbox\" /><label class=\"custom-control-label\" for=\"customCheck2\">Custom Checkbox 2</label></div>\n                <div class=\"custom-control custom-checkbox\"><input class=\"custom-control-input\" id=\"customCheck3\" type=\"checkbox\" disabled /><label class=\"custom-control-label\" for=\"customCheck3\">Custom Checkbox (Disabled)</label></div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Bootstrap's custom checkbox and radio styling have been modified for the SB Admin Pro theme.</div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Bootstrap Custom Radio:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\">\n                <div class=\"custom-control custom-radio\"><input class=\"custom-control-input\" id=\"customRadio1\" type=\"radio\" name=\"customRadio\" /><label class=\"custom-control-label\" for=\"customRadio1\">Toggle this custom radio</label></div>\n                <div class=\"custom-control custom-radio\"><input class=\"custom-control-input\" id=\"customRadio2\" type=\"radio\" name=\"customRadio\" /><label class=\"custom-control-label\" for=\"customRadio2\">Or toggle this other custom radio</label></div>\n                <div class=\"custom-control custom-radio\"><input class=\"custom-control-input\" id=\"customRadio3\" type=\"radio\" name=\"customRadio\" disabled /><label class=\"custom-control-label\" for=\"customRadio3\">This radio is disabled</label></div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesRadio\"></sbpro-code-sample></div>\n        </div></div\n></sbpro-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/forms-checkbox-solid/forms-checkbox-solid.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/forms-checkbox-solid/forms-checkbox-solid.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsFormsCheckboxSolidFormsCheckboxSolidComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Solid Checkboxes &amp; Radio</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Custom Solid Checkboxes:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\">\n                <div class=\"custom-control custom-checkbox sb-custom-control-solid\"><input class=\"custom-control-input\" id=\"customSolidCheck1\" type=\"checkbox\" /><label class=\"custom-control-label\" for=\"customSolidCheck1\">Custom Solid Checkbox 1</label></div>\n                <div class=\"custom-control custom-checkbox sb-custom-control-solid\"><input class=\"custom-control-input\" id=\"customSolidCheck2\" type=\"checkbox\" /><label class=\"custom-control-label\" for=\"customSolidCheck2\">Custom Solid Checkbox 2</label></div>\n                <div class=\"custom-control custom-checkbox sb-custom-control-solid\"><input class=\"custom-control-input\" id=\"customSolidCheck3\" type=\"checkbox\" disabled /><label class=\"custom-control-label\" for=\"customSolidCheck3\">Custom Solid Checkbox (Disabled)</label></div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Bootstrap's custom checkbox and radio styling have been modified for the SB Admin Pro theme.</div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Custom Solid Radio:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\">\n                <div class=\"custom-control custom-radio sb-custom-control-solid\"><input class=\"custom-control-input\" id=\"customSolidRadio1\" type=\"radio\" name=\"customSolidRadio\" /><label class=\"custom-control-label\" for=\"customSolidRadio1\">Toggle this custom radio</label></div>\n                <div class=\"custom-control custom-radio sb-custom-control-solid\"><input class=\"custom-control-input\" id=\"customSolidRadio2\" type=\"radio\" name=\"customSolidRadio\" /><label class=\"custom-control-label\" for=\"customSolidRadio2\">Or toggle this other custom radio</label></div>\n                <div class=\"custom-control custom-radio sb-custom-control-solid\"><input class=\"custom-control-input\" id=\"customSolidRadio3\" type=\"radio\" name=\"customSolidRadio\" disabled /><label class=\"custom-control-label\" for=\"customSolidRadio3\">This radio is disabled</label></div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesRadio\"></sbpro-code-sample></div>\n        </div></div\n></sbpro-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/forms-default/forms-default.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/forms-default/forms-default.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsFormsDefaultFormsDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Default Bootstrap Form Controls</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <form>\n                    <div class=\"form-group\"><label for=\"exampleFormControlInput1\">Email address</label><input class=\"form-control\" id=\"exampleFormControlInput1\" type=\"email\" placeholder=\"name@example.com\" /></div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlSelect1\">Example select</label\n                        ><select class=\"form-control\" id=\"exampleFormControlSelect1\"\n                            ><option>1</option\n                            ><option>2</option\n                            ><option>3</option\n                            ><option>4</option\n                            ><option>5</option></select\n                        >\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlSelect2\">Example multiple select</label\n                        ><select class=\"form-control\" id=\"exampleFormControlSelect2\" multiple=\"\"\n                            ><option>1</option\n                            ><option>2</option\n                            ><option>3</option\n                            ><option>4</option\n                            ><option>5</option></select\n                        >\n                    </div>\n                    <div class=\"form-group\"><label for=\"exampleFormControlTextarea1\">Example textarea</label><textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea></div>\n                </form>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">The default Bootstrap form control states have been restyled to fit the SB Admin Pro theme. The style has changed, but the markup is identical.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/forms-solid/forms-solid.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/forms-solid/forms-solid.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsFormsSolidFormsSolidComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Custom Solid Form Controls</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <form>\n                    <div class=\"form-group\"><label for=\"exampleSolidFormControlInput1\">Email address</label><input class=\"form-control sb-form-control-solid\" id=\"exampleSolidFormControlInput1\" type=\"email\" placeholder=\"name@example.com\" /></div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleSolidFormControlSelect1\">Example select</label\n                        ><select class=\"form-control sb-form-control-solid\" id=\"exampleSolidFormControlSelect1\"\n                            ><option>1</option\n                            ><option>2</option\n                            ><option>3</option\n                            ><option>4</option\n                            ><option>5</option></select\n                        >\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleSolidFormControlSelect2\">Example multiple select</label\n                        ><select class=\"form-control sb-form-control-solid\" id=\"exampleSolidFormControlSelect2\" multiple=\"\"\n                            ><option>1</option\n                            ><option>2</option\n                            ><option>3</option\n                            ><option>4</option\n                            ><option>5</option></select\n                        >\n                    </div>\n                    <div class=\"form-group\"><label for=\"exampleSolidFormControlTextarea1\">Example textarea</label><textarea class=\"form-control sb-form-control-solid\" id=\"exampleSolidFormControlTextarea1\" rows=\"3\"></textarea></div>\n                </form>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Custom solid form controls have been developed as an alternative to the default form styling. Use them by appending the <code>.sb-form-control-solid</code> to the normal <code>.form-control</code> class.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/modals-default/modals-default.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/modals-default/modals-default.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsModalsDefaultModalsDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Default Bootstrap Modal</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Modal Default:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\"><button class=\"btn btn-primary\" type=\"button\" (click)=\"open(modalDefault)\">Launch Demo Modal</button></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">The default Bootstrap modal has been restyled for the SB Admin Pro theme.</div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Static Backdrop:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\"><button class=\"btn btn-primary\" type=\"button\" (click)='open(modalDefaultStatic, {backdrop: \"static\"})'>Launch Static Backdrop Modal</button></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesStatic\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">The static backdrop modal option cannot be dismissed by clicking outside of the modal pane. Instead, the user must dismiss the modal by using the close button within the modal pane.</div>\n        </div>\n    </div></sbpro-card\n><ng-template #modalDefault let-modal\n    ><div class=\"modal-header\">\n        <h5 class=\"modal-title\">Default Bootstrap Modal</h5>\n        <button class=\"close\" type=\"button\" aria-label=\"Close\" (click)='modal.dismiss(\"Cross click\")'><span aria-hidden=\"true\">×</span></button>\n    </div>\n    <div class=\"modal-body\">This modal window is included with the Bootstrap framework. The styling has been changed for the SB Admin Pro theme.</div>\n    <div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" (click)='modal.close(\"Close Click\")'>Close</button><button class=\"btn btn-primary\" type=\"button\" (click)='modal.close(\"Save Click\")'>Save changes</button></div></ng-template\n><ng-template #modalDefaultStatic let-modal\n    ><div class=\"modal-header\">\n        <h5 class=\"modal-title\">Static Backdrop Modal</h5>\n        <button class=\"close\" type=\"button\" aria-label=\"Close\" (click)='modal.dismiss(\"Cross click\")'><span aria-hidden=\"true\">×</span></button>\n    </div>\n    <div class=\"modal-body\">When using the <code>&#123;backdrop: \"static\"&#125;</code> NgbModalOptions with a modal window, the user cannot dismiss the modal by clicking outside of the modal pane.</div>\n    <div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" (click)='modal.close(\"Close Click\")'>Close</button><button class=\"btn btn-primary\" type=\"button\" (click)='modal.close(\"Save Click\")'>Understood</button></div></ng-template\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/modals-scrollable/modals-scrollable.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/modals-scrollable/modals-scrollable.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsModalsScrollableModalsScrollableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Scrollable Bootstrap Modals</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Page Scrolling Long Modal:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\"><button class=\"btn btn-primary\" type=\"button\" (click)=\"open(modalScrollable)\">Launch Scrollable Modal</button></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">By default, the content within a modal will scroll independently of the page if the content is too long If you don't want the page to scroll, use the next option.</div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Modal Dialog Scrolling Long Modal:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\"><button class=\"btn btn-primary\" type=\"button\" (click)=\"open(modalScrollable, {scrollable: true})\">Launch Scrollable Modal</button></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesModalScroll\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Use the <code>&#123;scrollable: true&#125;</code> NgbModalOptions to make longer modal content scroll within the modal body if the contents is longer than the viewport height.</div>\n        </div>\n    </div></sbpro-card\n><ng-template #modalScrollable let-modal\n    ><div class=\"modal-header\">\n        <h5 class=\"modal-title\">Long Modal with Page Scrolling</h5>\n        <button class=\"close\" type=\"button\" aria-label=\"Close\" (click)='modal.dismiss(\"Cross click\")'><span aria-hidden=\"true\">×</span></button>\n    </div>\n    <div class=\"modal-body\"><sbpro-lorem-ipsum></sbpro-lorem-ipsum><sbpro-lorem-ipsum></sbpro-lorem-ipsum><sbpro-lorem-ipsum></sbpro-lorem-ipsum><sbpro-lorem-ipsum></sbpro-lorem-ipsum><sbpro-lorem-ipsum></sbpro-lorem-ipsum><sbpro-lorem-ipsum></sbpro-lorem-ipsum><sbpro-lorem-ipsum></sbpro-lorem-ipsum><sbpro-lorem-ipsum></sbpro-lorem-ipsum><sbpro-lorem-ipsum></sbpro-lorem-ipsum><sbpro-lorem-ipsum></sbpro-lorem-ipsum><sbpro-lorem-ipsum class=\"mb-0\"></sbpro-lorem-ipsum></div>\n    <div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" (click)='modal.close(\"Close Click\")'>Close</button><button class=\"btn btn-primary\" type=\"button\" (click)='modal.close(\"Save Click\")'>Save changes</button></div></ng-template\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/modals-sizing/modals-sizing.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/modals-sizing/modals-sizing.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsModalsSizingModalsSizingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Modal Sizing</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\"><button class=\"btn btn-primary mr-1\" type=\"button\" (click)='open(modalSizing, {size: \"xl\"})'>Extra Large</button><button class=\"btn btn-primary mr-1\" type=\"button\" (click)='open(modalSizing, {size: \"lg\"})'>Large</button><button class=\"btn btn-primary\" type=\"button\" (click)='open(modalSizing, {size: \"sm\"})'>Small</button></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">\n                Use the <code>&#123;size: \"xl\"&#125;</code> NgbModalOptions to adjust the sizing of your Bootstrap modals.\n                <br />\n                Size can be <code>\"xl\" | \"lg\" | \"sm\"</code>\n            </div>\n        </div>\n    </div></sbpro-card\n><ng-template #modalSizing let-modal\n    ><div class=\"modal-header\">\n        <h5 class=\"modal-title\">Extra Large Modal</h5>\n        <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n    </div>\n    <div class=\"modal-body\"><p>Sizing example modal</p></div>\n    <div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" (click)='modal.close(\"Close Click\")'>Close</button></div></ng-template\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/modals-vertically-centered/modals-vertically-centered.component.html":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/modals-vertically-centered/modals-vertically-centered.component.html ***!
    \***********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsModalsVerticallyCenteredModalsVerticallyCenteredComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Vertically Centered Bootstrap Modal</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\"><button class=\"btn btn-primary\" type=\"button\" (click)=\"open(modalVerticallyVentered, {centered: true})\">Launch Vertically Centered Modal</button></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Use the <code>&#123;centered: true&#125;</code> NgbModalOptions to vertically center the modal dilog when the modal window appears.</div>\n        </div>\n    </div></sbpro-card\n><ng-template #modalVerticallyVentered let-modal\n    ><div class=\"modal-header\">\n        <h5 class=\"modal-title\">Vertically Centered Modal</h5>\n        <button class=\"close\" type=\"button\" aria-label=\"Close\" (click)='modal.dismiss(\"Cross click\")'><span aria-hidden=\"true\">×</span></button>\n    </div>\n    <div class=\"modal-body\">The vertically centered modal centers the modal dialog in the center of the page.</div>\n    <div class=\"modal-footer\"><button class=\"btn btn-secondary\" type=\"button\" (click)='modal.close(\"Close Click\")'>Close</button><button class=\"btn btn-primary\" type=\"button\" (click)='modal.close(\"Save Click\")'>Save changes</button></div></ng-template\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/navigation-side/navigation-side.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/navigation-side/navigation-side.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsNavigationSideNavigationSideComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Custom Side Navigation Component</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <nav class=\"sb-sidenav sb-sidenav-light\">\n                    <div class=\"sb-sidenav-menu\">\n                        <div class=\"nav\">\n                            <div class=\"sb-sidenav-menu-heading\">Heading</div>\n                            <a class=\"nav-link\" href=\"javascript:void(0);\"\n                                ><div class=\"sb-nav-link-icon\"><i-feather name=\"feather\"></i-feather></div>\n                                Link</a\n                            ><a class=\"nav-link\" href=\"javascript:void(0);\"\n                                ><div class=\"sb-nav-link-icon\"><i-feather name=\"feather\"></i-feather></div>\n                                Another Link</a\n                            ><a class=\"nav-link disabled\" href=\"javascript:void(0);\"\n                                ><div class=\"sb-nav-link-icon\"><i-feather name=\"feather\"></i-feather></div>\n                                Another Link</a\n                            >\n                        </div>\n                    </div>\n                    <div class=\"sb-sidenav-footer\">SB Sidenav Footer</div>\n                </nav>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">\n                The <code>.sb-sidenav</code> component extends the default Bootstrap nav component. A working example of the custom sidenav can be seen on the dashboard layout of the SB Admin Pro theme. The sidenav being used in the dashboard layout has a container with certain responsive behaviors, but the component itself can be used on a standalone basis. <br /><br />\n                SB Admin Pro Angular takes this even further and implements a full layout and navigation system. Fore more details, see the\n                <a href=\"https://docs.startbootstrap.com/sb-admin-pro-angular/deep-dive-navigation#side-nav\">Navigation Deep Dive</a>\n                Documentation\n            </div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/navigation-sticky/navigation-sticky.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/navigation-sticky/navigation-sticky.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsNavigationStickyNavigationStickyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Custom Sticky Nav Component</div>\n    <div class=\"card-body\">\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\">The sticky menu on the side of this page is a demo of the sbpro-toc-nav component.</div>\n            <div class=\"bg-light p-4 small\">\n                The <code>sbpro-toc-nav</code> (Table of Contents) component is a custom component that simplifies scrollspy behavior. The right side menu of the style reference pages are all examples of sbpro-toc being used. <br /><br />\n                Fore more details, see the\n                <a href=\"https://docs.startbootstrap.com/sb-admin-pro-angular/deep-dive-navigation\"> Navigation Deep Dive</a>\n                Documentation\n            </div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-card/progress-card.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-card/progress-card.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsProgressCardProgressCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Progress Card</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\">\n                <sbpro-progress-card [value]=\"25\" progressBarColor=\"bg-danger\"\n                    ><div class=\"card-header text-danger\">25% Progress Card Example</div>\n                    <div class=\"card-body\">This is an example of a card with a 25% completed progress bar.</div></sbpro-progress-card\n                ><sbpro-progress-card [value]=\"50\" progressBarColor=\"bg-warning\"\n                    ><div class=\"card-header text-warning\">50% Progress Card Example</div>\n                    <div class=\"card-body\">This is an example of a card with a 50% completed progress bar.</div></sbpro-progress-card\n                ><sbpro-progress-card [value]=\"75\" progressBarColor=\"bg-primary\"\n                    ><div class=\"card-header text-primary\">75% Progress Card Example</div>\n                    <div class=\"card-body\">This is an example of a card with a 75% completed progress bar.</div></sbpro-progress-card\n                ><sbpro-progress-card [value]=\"100\" progressBarColor=\"bg-success\"\n                    ><div class=\"card-header text-success\">100% Progress Card Example</div>\n                    <div class=\"card-body\">This is an example of a card with a 100% completed progress bar.</div></sbpro-progress-card\n                >\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\"><code>sbpro-progress-card</code> combines cards, background utilities, and striped options.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-colors/progress-colors.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-colors/progress-colors.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsProgressColorsProgressColorsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Progress Indicator Colors</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Bootstrap Defaults:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\"><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-primary\">.bg-primary</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-secondary\">.bg-secondary</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-success\">.bg-success</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-info\">.bg-info</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-warning\">.bg-warning</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-danger\">.bg-danger</sbpro-progress-bar></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">\n                Use the <code>bgColor</code> attribute to pass a background color utility name to\n                <code>sbpro-progress-bar</code>\n            </div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Expanded Color System:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\"><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-red\">.bg-red</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-orange\">.bg-orange</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-yellow\">.bg-yellow</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-green\">.bg-green</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-teal\">.bg-teal</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-cyan\">.bg-cyan</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-blue\">.bg-blue</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-indigo\">.bg-indigo</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-purple\">.bg-purple</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" bgColor=\"bg-pink\">.bg-pink</sbpro-progress-bar></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesExpanded\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">You can use the expanded color system background utilities to style a progress bar non-contextually.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-default/progress-default.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-default/progress-default.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsProgressDefaultProgressDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Default Bootstrap Progress Indicators</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\"><sbpro-progress-bar class=\"mb-3\" [value]=\"0\"></sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"25\"></sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"50\"></sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\"></sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"100\"></sbpro-progress-bar></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">The width of the progress bar is set by the <code>[value]</code> attribute for <code>sbpro-progress-bar</code></div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-labels/progress-labels.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-labels/progress-labels.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsProgressLabelsProgressLabelsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Progress Labels</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\"><sbpro-progress-bar class=\"mb-3\" [value]=\"0\">0%</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"25\">25%</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"50\">50%</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\">75%</sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"100\">100%</sbpro-progress-bar></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Add text within <code>sbpro-progress-bar</code> to label the indicator bar.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-striped/progress-striped.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-striped/progress-striped.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsProgressStripedProgressStripedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Striped Progress Indicators</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Basic Striped Indicators:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\"><sbpro-progress-bar class=\"mb-3\" [value]=\"25\" [striped]=\"true\" bgColor=\"bg-success\"></sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"50\" [striped]=\"true\" bgColor=\"bg-info\"></sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" [striped]=\"true\" bgColor=\"bg-warning\"></sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"100\" [striped]=\"true\" bgColor=\"bg-danger\"></sbpro-progress-bar></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Use the <code>[striped]=true</code> attribute to use a striped style for your progress indicators.</div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Animated Striped Indicators:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\"><sbpro-progress-bar class=\"mb-3\" [value]=\"25\" [striped]=\"true\" [animated]=\"true\" bgColor=\"bg-success\"></sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"50\" [striped]=\"true\" [animated]=\"true\" bgColor=\"bg-info\"></sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\" bgColor=\"bg-warning\"></sbpro-progress-bar><sbpro-progress-bar class=\"mb-3\" [value]=\"100\" [striped]=\"true\" [animated]=\"true\" bgColor=\"bg-danger\"></sbpro-progress-bar></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesAnimated\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Use the <code>[striped]=true</code> along with the <code>[animated]=true</code> attribute to animate the striped style for your progress indicators.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/shadows-default/shadows-default.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/shadows-default/shadows-default.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsShadowsDefaultShadowsDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Default Bootstrap Shadows</div>\n    <div class=\"card-body\">\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"bg-light p-3 shadow-none mb-4\">No Shadow</div>\n                <div class=\"bg-white p-3 shadow-sm mb-4\">Small Shadow</div>\n                <div class=\"bg-white p-3 shadow mb-4\">Regular Shadow</div>\n                <div class=\"bg-white p-3 shadow-lg\">Large Shadow</div>\n            </div>\n            <div class=\"bg-light p-4 small\">The SCSS variables that define the intensity of the box shadow can be modified by overriding the values set in the <code>../variables/_components.scss</code> file.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/shadows-extended/shadows-extended.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/shadows-extended/shadows-extended.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsShadowsExtendedShadowsExtendedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Extended Shadow Utilities</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Left Shadows:</h6>\n        <div class=\"border sb-border-lg rounded mb-4\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"d-flex flex-row\">\n                    <div class=\"bg-white p-3 sb-shadow-left-sm m-4\">Small Shadow</div>\n                    <div class=\"bg-white p-3 sb-shadow-left m-4\">Regular Shadow</div>\n                    <div class=\"bg-white p-3 sb-shadow-left-lg m-4\">Large Shadow</div>\n                </div>\n            </div>\n            <div class=\"bg-light p-4 small\">The <code>.sb-shadow-left</code> utility has small and large variants.</div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Right Shadows:</h6>\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"d-flex flex-row\">\n                    <div class=\"bg-white p-3 sb-shadow-right-sm m-4\">Small Shadow</div>\n                    <div class=\"bg-white p-3 sb-shadow-right m-4\">Regular Shadow</div>\n                    <div class=\"bg-white p-3 sb-shadow-right-lg m-4\">Large Shadow</div>\n                </div>\n            </div>\n            <div class=\"bg-light p-4 small\">The <code>.sb-shadow-right</code> utility has small and large variants. The <code>$box-shadow-right</code> variable is used on the SB Admin Pro side navigation.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/toast-colors/toast-colors.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/toast-colors/toast-colors.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsToastColorsToastColorsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Toast Colors</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Text Color Modification:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\"><sbpro-toast [header]=\"toastTextPrimary\" body=\"This toast uses the primary text utility on the toast header.\" headerClasses=\"text-primary\"></sbpro-toast><sbpro-toast [header]=\"toastTextSecondary\" body=\"This toast uses the secondary text utility on the toast header.\" headerClasses=\"text-secondary\"></sbpro-toast><sbpro-toast [header]=\"toastTextSuccess\" body=\"This toast uses the success text utility on the toast header.\" headerClasses=\"text-success\"></sbpro-toast><sbpro-toast [header]=\"toastTextInfo\" body=\"This toast uses the info text utility on the toast header.\" headerClasses=\"text-info\"></sbpro-toast><sbpro-toast [header]=\"toastTextWarning\" body=\"This toast uses the warning text utility on the toast header.\" headerClasses=\"text-warning\"></sbpro-toast><sbpro-toast [header]=\"toastTextDanger\" body=\"This toast uses the danger text utility on the toast header.\" headerClasses=\"text-danger\"></sbpro-toast></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">The above examples use a different text color utility class on the toast header to add another level of context and emphasis to toast notifications. You can use any of the text color utilities available with Bootstrap or with the SB Admin Pro theme!</div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Background Color Modification:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\">\n                <sbpro-toast [header]=\"toastTextPrimaryWhite\" body=\"This toast uses the primary text utility on the toast header.\" headerClasses=\"bg-primary text-white\"></sbpro-toast><sbpro-toast [header]=\"toastTextSecondaryWhite\" body=\"This toast uses the secondary text utility on the toast header.\" headerClasses=\"bg-secondary text-white\"></sbpro-toast><sbpro-toast [header]=\"toastTextSuccessWhite\" body=\"This toast uses the success text utility on the toast header.\" headerClasses=\"bg-success text-white\"></sbpro-toast><sbpro-toast [header]=\"toastTextInfoWhite\" body=\"This toast uses the info text utility on the toast header.\" headerClasses=\"bg-info text-white\"></sbpro-toast><sbpro-toast [header]=\"toastTextWarningWhite\" body=\"This toast uses the warning text utility on the toast header.\" headerClasses=\"bg-warning text-white\"></sbpro-toast\n                ><sbpro-toast [header]=\"toastTextDangerWhite\" body=\"This toast uses the danger text utility on the toast header.\" headerClasses=\"bg-danger text-white\"></sbpro-toast>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesBackground\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">The above examples use a combination of background color utilities and text color utilities on the toast header to add another level of context and emphasis to toast notifications. You can use any combination of the background color or text color utilities available with Bootstrap or with the SB Admin Pro theme!</div>\n        </div>\n    </div></sbpro-card\n><!-- Header Text Templates--><ng-template #toastTextPrimary\n    ><i class=\"mr-2\" data-feather=\"alert-circle\"></i><strong class=\"mr-auto\">Primary Text Toast</strong><small class=\"text-muted ml-2\">just now</small><button class=\"ml-2 mb-1 close\" type=\"button\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></ng-template\n><ng-template #toastTextSecondary\n    ><i class=\"mr-2\" data-feather=\"alert-circle\"></i><strong class=\"mr-auto\">Secondary Text Toast</strong><small class=\"text-muted ml-2\">just now</small><button class=\"ml-2 mb-1 close\" type=\"button\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></ng-template\n><ng-template #toastTextSuccess\n    ><i class=\"mr-2\" data-feather=\"alert-circle\"></i><strong class=\"mr-auto\">Success Text Toast</strong><small class=\"text-muted ml-2\">just now</small><button class=\"ml-2 mb-1 close\" type=\"button\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></ng-template\n><ng-template #toastTextInfo\n    ><i class=\"mr-2\" data-feather=\"alert-circle\"></i><strong class=\"mr-auto\">Info Text Toast</strong><small class=\"text-muted ml-2\">just now</small><button class=\"ml-2 mb-1 close\" type=\"button\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></ng-template\n><ng-template #toastTextWarning\n    ><i class=\"mr-2\" data-feather=\"alert-circle\"></i><strong class=\"mr-auto\">Warning Text Toast</strong><small class=\"text-muted ml-2\">just now</small><button class=\"ml-2 mb-1 close\" type=\"button\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></ng-template\n><ng-template #toastTextDanger\n    ><i class=\"mr-2\" data-feather=\"alert-circle\"></i><strong class=\"mr-auto\">Danger Text Toast</strong><small class=\"text-muted ml-2\">just now</small><button class=\"ml-2 mb-1 close\" type=\"button\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></ng-template\n><!-- Header Background Templates--><ng-template #toastTextPrimaryWhite\n    ><i class=\"mr-2 text-white-50\" data-feather=\"alert-circle\"></i><strong class=\"mr-auto\">Primary Background Toast</strong><small class=\"text-muted ml-2 text-white-50\">just now</small><button class=\"ml-2 mb-1 close text-white\" type=\"button\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></ng-template\n><ng-template #toastTextSecondaryWhite\n    ><i class=\"mr-2 text-white-50\" data-feather=\"alert-circle\"></i><strong class=\"mr-auto\">Secondary Background Toast</strong><small class=\"text-muted ml-2 text-white-50\">just now</small><button class=\"ml-2 mb-1 close text-white\" type=\"button\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></ng-template\n><ng-template #toastTextSuccessWhite\n    ><i class=\"mr-2 text-white-50\" data-feather=\"alert-circle\"></i><strong class=\"mr-auto\">Success Background Toast</strong><small class=\"text-muted ml-2 text-white-50\">just now</small><button class=\"ml-2 mb-1 close text-white\" type=\"button\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></ng-template\n><ng-template #toastTextInfoWhite\n    ><i class=\"mr-2 text-white-50\" data-feather=\"alert-circle\"></i><strong class=\"mr-auto\">Info Background Toast</strong><small class=\"text-muted ml-2 text-white-50\">just now</small><button class=\"ml-2 mb-1 close text-white\" type=\"button\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></ng-template\n><ng-template #toastTextWarningWhite\n    ><i class=\"mr-2 text-white-50\" data-feather=\"alert-circle\"></i><strong class=\"mr-auto\">Warning Background Toast</strong><small class=\"text-muted ml-2 text-white-50\">just now</small><button class=\"ml-2 mb-1 close text-white\" type=\"button\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></ng-template\n><ng-template #toastTextDangerWhite\n    ><i class=\"mr-2 text-white-50\" data-feather=\"alert-circle\"></i><strong class=\"mr-auto\">Danger Background Toast</strong><small class=\"text-muted ml-2 text-white-50\">just now</small><button class=\"ml-2 mb-1 close text-white\" type=\"button\" data-dismiss=\"toast\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button></ng-template\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/toast-demo/toast-demo.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/toast-demo/toast-demo.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsToastDemoToastDemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Bootstrap Toasts Demo</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Basic Toast with Auto Hide:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\">\n                <button class=\"btn btn-primary mb-3\" (click)=\"showToast(toastHeader, toastBody)\">Toast Demo</button>\n                <div class=\"small\">The toast alert will appear in the top right of the screen when the above button is clicked.</div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Basic Toast with Manual Dismissal:</h6>\n        <div class=\"sbp-preview mb-4\">\n            <div class=\"sbp-preview-content\">\n                <button class=\"btn btn-primary mb-3\" (click)='showToast(toastHeaderManual, \"This is an example toast alert, you must close this toast alert manually.\", {autohide: false})'>Toast Demo</button>\n                <div class=\"small\">The toast alert will appear in the top right of the screen when the above button is clicked.</div>\n            </div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamplesManual\"></sbpro-code-sample></div>\n        </div></div></sbpro-card\n><!-- Templates for toast--><ng-template #toastHeader let-toastService=\"toastService\" let-toastID=\"toastID\"\n    ><i-feather class=\"mr-2\" name=\"bell\"></i-feather><strong class=\"mr-auto\">Toast with Autohide</strong><small class=\"text-muted ml-2\">just now</small><button class=\"ml-2 mb-1 close\" type=\"button\" aria-label=\"Close\" (click)=\"toastService.remove(toastID)\"><span aria-hidden=\"true\">×</span></button></ng-template\n><ng-template #toastBody>This is an example toast alert, it will dismiss automatically, or you can dismiss it manually. </ng-template\n><ng-template #toastHeaderManual let-toastService=\"toastService\" let-toastID=\"toastID\"\n    ><i-feather class=\"mr-2\" name=\"bell\"></i-feather><strong class=\"mr-auto\">Toast with Manual Dismissal</strong><small class=\"text-muted ml-2\">just now</small><button class=\"ml-2 mb-1 close\" type=\"button\" aria-label=\"Close\" (click)=\"toastService.remove(toastID)\"><span aria-hidden=\"true\">×</span></button></ng-template\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/tooltips-default/tooltips-default.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/tooltips-default/tooltips-default.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsTooltipsDefaultTooltipsDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Default Bootstrap Tooltips</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\"><button class=\"btn btn-primary mr-2 mb-2 mb-xl-0\" type=\"button\" placement=\"top\" ngbTooltip=\"Tooltip on top\">Tooltip on top</button><button class=\"btn btn-primary mr-2 mb-2 mb-xl-0\" type=\"button\" placement=\"right\" ngbTooltip=\"Tooltip on right\">Tooltip on right</button><button class=\"btn btn-primary mr-2 mb-2 mb-xl-0\" type=\"button\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">Tooltip on bottom</button><button class=\"btn btn-primary mr-2 mb-2 mb-xl-0\" type=\"button\" placement=\"left\" ngbTooltip=\"Tooltip on left\">Tooltip on left</button></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Tooltips are visible when an element is hovered over.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/tooltips-popovers/tooltips-popovers.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/tooltips-popovers/tooltips-popovers.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsTooltipsPopoversTooltipsPopoversComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Default Bootstrap Popovers</div>\n    <div class=\"card-body\">\n        <div class=\"sbp-preview\">\n            <div class=\"sbp-preview-content\"><button class=\"btn btn-primary mr-2 mb-2 mb-xl-0\" placement=\"top\" ngbPopover=\"This popover is on the top!\" popoverTitle=\"Popover Title\">Popover on top</button><button class=\"btn btn-primary mr-2 mb-2 mb-xl-0\" placement=\"right\" ngbPopover=\"This popover is on the right!\" popoverTitle=\"Popover Title\">Popover on right</button><button class=\"btn btn-primary mr-2 mb-2 mb-xl-0\" placement=\"bottom\" ngbPopover=\"This popover is on the bottom!\" popoverTitle=\"Popover Title\">Popover on bottom</button><button class=\"btn btn-primary mr-2 mb-2 mb-xl-0\" placement=\"left\" ngbPopover=\"This popover is on the left!\" popoverTitle=\"Popover Title\">Popover on left</button></div>\n            <div class=\"sbp-preview-code\"><sbpro-code-sample [codeSamples]=\"codeSamples\"></sbpro-code-sample></div>\n            <div class=\"sbp-preview-text\">Popovers are visible when an element is clicked, or focused.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/typography-color/typography-color.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/typography-color/typography-color.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsTypographyColorTypographyColorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Text Color Utilities</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Bootstrap Defaults:</h6>\n        <div class=\"border sb-border-lg rounded mb-4\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <div class=\"p-3 border mb-3 text-primary\">.text-primary</div>\n                        <div class=\"p-3 border mb-3 text-secondary\">.text-secondary</div>\n                        <div class=\"p-3 border mb-3 text-success\">.text-success</div>\n                        <div class=\"p-3 border mb-3 text-danger\">.text-danger</div>\n                        <div class=\"p-3 border mb-3 text-warning\">.text-warning</div>\n                        <div class=\"p-3 border mb-3 text-info\">.text-info</div>\n                        <div class=\"p-3 border text-light bg-dark\">.text-light</div>\n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"p-3 border mb-3 text-dark\">.text-dark</div>\n                        <div class=\"p-3 border mb-3 text-body\">.text-body</div>\n                        <div class=\"p-3 border mb-3 text-muted\">.text-muted</div>\n                        <div class=\"p-3 border mb-3 text-white bg-dark\">.text-white</div>\n                        <div class=\"p-3 border mb-3 text-black-50\">.text-black-50</div>\n                        <div class=\"p-3 border mb-3 text-white-50 bg-dark\">.text-white-50</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bg-light p-4 small\">By default, Bootstrap has a number of text utilities that you can use to change the text color. The default utilities are semantic by nature.</div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Extended Utilities:</h6>\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <div class=\"p-3 border mb-3 text-red\">.text-red</div>\n                        <div class=\"p-3 border mb-3 text-orange\">.text-orange</div>\n                        <div class=\"p-3 border mb-3 text-yellow\">.text-yellow</div>\n                        <div class=\"p-3 border mb-3 text-green\">.text-green</div>\n                        <div class=\"p-3 border text-teal\">.text-teal</div>\n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"p-3 border mb-3 text-cyan\">.text-cyan</div>\n                        <div class=\"p-3 border mb-3 text-blue\">.text-blue</div>\n                        <div class=\"p-3 border mb-3 text-indigo\">.text-indigo</div>\n                        <div class=\"p-3 border mb-3 text-purple\">.text-purple</div>\n                        <div class=\"p-3 border text-pink\">.text-pink</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bg-light p-4 small\">SB Admin Pro's non-contextual true colors that have been added to the color map are also available as text utilities.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/typography-grayscale/typography-grayscale.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/typography-grayscale/typography-grayscale.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsTypographyGrayscaleTypographyGrayscaleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Grayscale Text Utilities</div>\n    <div class=\"card-body\">\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <div class=\"p-3 border mb-3 text-gray-100 bg-dark\">.text-gray-100</div>\n                        <div class=\"p-3 border mb-3 text-gray-200 bg-dark\">.text-gray-200</div>\n                        <div class=\"p-3 border mb-3 text-gray-300 bg-dark\">.text-gray-300</div>\n                        <div class=\"p-3 border mb-3 text-gray-400\">.text-gray-400</div>\n                        <div class=\"p-3 border text-gray-500\">.text-gray-500</div>\n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"p-3 border mb-3 text-gray-600\">.text-gray-600</div>\n                        <div class=\"p-3 border mb-3 text-gray-700\">.text-gray-700</div>\n                        <div class=\"p-3 border mb-3 text-gray-800\">.text-gray-800</div>\n                        <div class=\"p-3 border text-gray-900\">.text-gray-900</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bg-light p-4 small\">SB Admin Pro's adaptive grayscale has been applied to text utilities.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/typography-weight/typography-weight.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/typography-weight/typography-weight.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceComponentsTypographyWeightTypographyWeightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-card\n    ><div class=\"card-header\">Font Weight Utilities</div>\n    <div class=\"card-body\">\n        <h6 class=\"small text-muted font-weight-500\">Bootstrap Defaults:</h6>\n        <div class=\"border sb-border-lg rounded mb-4\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"p-3 border mb-3 font-weight-bold\">Bold text.</div>\n                <div class=\"p-3 border mb-3 font-weight-bolder\">Bolder weight text (relative to the parent element).</div>\n                <div class=\"p-3 border mb-3 font-weight-normal\">Normal weight text.</div>\n                <div class=\"p-3 border mb-3 font-weight-light\">Light weight text.</div>\n                <div class=\"p-3 border font-weight-lighter\">Lighter weight text (relative to the parent element).</div>\n            </div>\n            <div class=\"bg-light p-4 small\">By default, Bootstrap has a number of text utilities that you can use to change the font weight.</div>\n        </div>\n        <h6 class=\"small text-muted font-weight-500\">Extended Utilities:</h6>\n        <div class=\"border sb-border-lg rounded\">\n            <div class=\"p-4 border-bottom\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <h6 class=\"p-3 border mb-3 font-weight-100\">.font-weight-100</h6>\n                        <h6 class=\"p-3 border mb-3 font-weight-200\">.font-weight-200</h6>\n                        <h6 class=\"p-3 border mb-3 font-weight-300\">.font-weight-300</h6>\n                        <h6 class=\"p-3 border mb-3 font-weight-400\">.font-weight-400</h6>\n                        <h6 class=\"p-3 border mb-0 font-weight-500\">.font-weight-500</h6>\n                    </div>\n                    <div class=\"col-6\">\n                        <h6 class=\"p-3 border mb-3 font-weight-600\">.font-weight-600</h6>\n                        <h6 class=\"p-3 border mb-3 font-weight-700\">.font-weight-700</h6>\n                        <h6 class=\"p-3 border mb-3 font-weight-800\">.font-weight-800</h6>\n                        <h6 class=\"p-3 border mb-0 font-weight-900\">.font-weight-900</h6>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bg-light p-4 small\">SB Admin Pro has extended font weight utilities to include specific font weights, for use wherever you want to show a specialized font weight. Note that the font weights are only supported if the font that you are using supports the specified font weight.</div>\n        </div>\n    </div></sbpro-card\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/alerts/alerts.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/alerts/alerts.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersAlertsAlertsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"alert-triangle\" title=\"Alerts\" description=\"Alert components to add special emphasis to select content\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\">\n            <sbpro-alerts-default sbproTocItem=\"Default\"></sbpro-alerts-default><sbpro-alerts-content sbproTocItem=\"Content\"></sbpro-alerts-content><sbpro-alerts-icon sbproTocItem=\"Icon\"></sbpro-alerts-icon><sbpro-alerts-solid sbproTocItem=\"Solid\"></sbpro-alerts-solid><sbpro-alerts-extended sbproTocItem=\"Extended\"></sbpro-alerts-extended\n            ><sbpro-card-icon iconBackground=\"bg-secondary\"\n                ><div class=\"card-icon\"><fa-icon class=\"text-white-50\" [icon]='[\"fab\", \"bootstrap\"]'></fa-icon></div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Bootstrap Documentation Available</h5>\n                    <p class=\"card-text\">Alerts are a default component included with the Bootstrap framework. For more information on implementing, modifying, and extending the usage of alerts within your project, visit the official Bootstrap alerts documentation page.</p>\n                    <a class=\"btn btn-secondary btn-sm\" href=\"https://getbootstrap.com/docs/4.4/components/alerts/\" target=\"_blank\"><i-feather class=\"mr-1\" name=\"external-link\"></i-feather>Visit Bootstrap Alerts Docs</a>\n                </div></sbpro-card-icon\n            >\n        </div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/animations/animations.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/animations/animations.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersAnimationsAnimationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"film\" title=\"Animations\" description=\"Custom animation utilities to add motion to your transitioning content\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\"><sbpro-animations-fade-in sbproTocItem=\"Fade In\"></sbpro-animations-fade-in><sbpro-animations-fade-in-up sbproTocItem=\"Fade In Up\"></sbpro-animations-fade-in-up></div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/background/background.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/background/background.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersBackgroundBackgroundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"droplet\" title=\"Background\" description=\"Add color and modify element backgrounds with built in, and extended background utilities\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\"><sbpro-background-default sbproTocItem=\"Default\"></sbpro-background-default><sbpro-background-expanded sbproTocItem=\"Expanded\"></sbpro-background-expanded><sbpro-background-gradient sbproTocItem=\"Gradient\"></sbpro-background-gradient><sbpro-background-grayscale sbproTocItem=\"Grayscale\"></sbpro-background-grayscale></div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/badges/badges.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/badges/badges.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersBadgesBadgesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"award\" title=\"Badges\" description=\"A small component to add labels to text within your project\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\">\n            <sbpro-badges-default sbproTocItem=\"Default\"></sbpro-badges-default><sbpro-badges-extended sbproTocItem=\"Extended\"></sbpro-badges-extended><sbpro-badges-sizing sbproTocItem=\"Sizing\"></sbpro-badges-sizing\n            ><sbpro-card-icon iconBackground=\"bg-secondary\"\n                ><div class=\"card-icon\"><fa-icon class=\"text-white-50\" [icon]='[\"fab\", \"bootstrap\"]'></fa-icon></div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Bootstrap Documentation Available</h5>\n                    <p class=\"card-text\">Badges are a default component included with the Bootstrap framework. For more information on implementing, modifying, and extending the usage of badges within your project, visit the official Bootstrap badges documentation page.</p>\n                    <a class=\"btn btn-secondary btn-sm\" href=\"https://getbootstrap.com/docs/4.4/components/badge/\" target=\"_blank\"><i-feather class=\"mr-1\" name=\"external-link\"></i-feather>Visit Bootstrap Badge Docs</a>\n                </div></sbpro-card-icon\n            >\n        </div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/blank/blank.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/blank/blank.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersBlankBlankComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"file\" title=\"Blank\" description=\"A blank page to get you started!\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <sbpro-card\n        ><div class=\"card-header\">Example Card</div>\n        <div class=\"card-body\">This is a blank page. You can use this page as a boilerplate for new pages!</div></sbpro-card\n    >\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/borders/borders.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/borders/borders.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersBordersBordersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"maximize\" title=\"Borders\" description=\"Border utilities allow you to modify the borders of your display elements\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\"><sbpro-borders-default sbproTocItem=\"Default\"></sbpro-borders-default><sbpro-borders-colors sbproTocItem=\"Colors\"></sbpro-borders-colors><sbpro-borders-radius sbproTocItem=\"Radius\"></sbpro-borders-radius><sbpro-borders-radius-size sbproTocItem=\"Radius Size\"></sbpro-borders-radius-size><sbpro-borders-thickness sbproTocItem=\"Thickness\"></sbpro-borders-thickness><sbpro-borders-usage-examples sbproTocItem=\"Usage Examples\"></sbpro-borders-usage-examples></div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/buttons/buttons.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/buttons/buttons.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersButtonsButtonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"mouse-pointer\" title=\"Buttons\" description=\"Restyled Bootstrap default buttons and custom developed button components\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\">\n            <sbpro-buttons-default sbproTocItem=\"Default Colors\"></sbpro-buttons-default><sbpro-buttons-custom sbproTocItem=\"Custom Colors\"></sbpro-buttons-custom><sbpro-buttons-icon sbproTocItem=\"Icon\"></sbpro-buttons-icon><sbpro-buttons-transparent sbproTocItem=\"Transparent\"></sbpro-buttons-transparent><sbpro-buttons-sizing sbproTocItem=\"Sizing\"></sbpro-buttons-sizing><sbpro-buttons-social sbproTocItem=\"Social\"></sbpro-buttons-social><sbpro-buttons-extending sbproTocItem=\"Extending\"></sbpro-buttons-extending\n            ><sbpro-card-icon iconBackground=\"bg-secondary\"\n                ><div class=\"card-icon\"><fa-icon class=\"text-white-50\" [icon]='[\"fab\", \"bootstrap\"]'></fa-icon></div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Bootstrap Documentation Available</h5>\n                    <p class=\"card-text\">Buttons are a default component included with the Bootstrap framework. For more information on implementing, modifying, and extending the usage of buttons within your project, visit the official Bootstrap buttons documentation page.</p>\n                    <a class=\"btn btn-secondary btn-sm\" href=\"https://getbootstrap.com/docs/4.4/components/buttons/\" target=\"_blank\"><i-feather class=\"mr-1\" name=\"external-link\"></i-feather>Visit Bootstrap Buttons Docs</a>\n                </div></sbpro-card-icon\n            >\n        </div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/cards/cards.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/cards/cards.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersCardsCardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"layers\" title=\"Cards\" description=\"Extended card components for displaying content within your application\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\"><sbpro-cards-basic sbproTocItem=\"Basic\"></sbpro-cards-basic><sbpro-cards-advanced sbproTocItem=\"Advanced\"></sbpro-cards-advanced><sbpro-cards-collapsable sbproTocItem=\"Collapsable\"></sbpro-cards-collapsable><sbpro-cards-navigation sbproTocItem=\"Navigation\"></sbpro-cards-navigation><sbpro-cards-scrollable sbproTocItem=\"Scrollable\"></sbpro-cards-scrollable><sbpro-cards-images sbproTocItem=\"Images\"></sbpro-cards-images><sbpro-cards-icons sbproTocItem=\"Icons\"></sbpro-cards-icons><sbpro-cards-colors sbproTocItem=\"Colors\"></sbpro-cards-colors></div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/dropdowns/dropdowns.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/dropdowns/dropdowns.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersDropdownsDropdownsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"corner-right-down\" title=\"Dropdowns\" description=\"Extended dropdown components for organizing your menus and content\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\"><sbpro-dropdowns-default sbproTocItem=\"Default\"></sbpro-dropdowns-default><sbpro-dropdowns-icons sbproTocItem=\"Icons\"></sbpro-dropdowns-icons><sbpro-dropdowns-animated sbproTocItem=\"Animated\"></sbpro-dropdowns-animated><sbpro-dropdowns-notifications sbproTocItem=\"Notifications\"></sbpro-dropdowns-notifications></div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/forms/forms.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/forms/forms.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersFormsFormsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"edit-3\" title=\"Forms\" description=\"Dynamic form components to give your users informative and intuitive inputs\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\"><sbpro-forms-default sbproTocItem=\"Default Form Controls\"></sbpro-forms-default><sbpro-forms-solid sbproTocItem=\"Solid Form Controls\"></sbpro-forms-solid><sbpro-forms-checkbox-custom sbproTocItem=\"Custom Checkboxes &amp; Radio\"></sbpro-forms-checkbox-custom><sbpro-forms-checkbox-solid sbproTocItem=\"Solid Checkboxes &amp; Radio\"></sbpro-forms-checkbox-solid></div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/headers-breadcrumbs/headers-breadcrumbs.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/headers-breadcrumbs/headers-breadcrumbs.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersHeadersBreadcrumbsHeadersBreadcrumbsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"layout\" title=\"Breadcrumbs Header\" description=\"The custom page header supports and styles Bootstrap breadcrumbs\" [breadcrumbs]=\"true\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <sbpro-card\n        ><div class=\"card-header\">Breadcrumbs Header</div>\n        <div class=\"card-body\"><p class=\"card-text\">The Bootstrap breadcrumbs component is supported within the page header for the SB Admin Pro theme. The page header on this page is an example of a page with breadcrumbs added!</p></div></sbpro-card\n    >\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/headers-light/headers-light.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/headers-light/headers-light.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersHeadersLightHeadersLightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"layout\" title=\"Light Header\" description=\"A light page header option is also available for a different page style\" [simplified]=\"true\" [light]=\"true\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-4\">\n    <sbpro-card\n        ><div class=\"card-header\">Light Header</div>\n        <div class=\"card-body\">\n            <p class=\"card-text\">For a light theme, just add <code>[light]='true'</code> to the <code>&lt;sbpro-dashboard-head&gt;</code> element</p>\n        </div></sbpro-card\n    >\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/headers-overlap/headers-overlap.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/headers-overlap/headers-overlap.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersHeadersOverlapHeadersOverlapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"layout\" title=\"Overlap Header\" description=\"The default page header layout with main content that overlaps the background of the page header\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <sbpro-card\n        ><div class=\"card-header\">Content Overlap</div>\n        <div class=\"card-body\">\n            <p class=\"card-text\">The <code>&lt;sbpro-dashboard-head&gt;</code> element template by default uses the <code>.pb-10</code> spacing utility classes to add paddig to the bottom. Then, the first container within the main element uses the <code>.mt-n10</code> spacing utility to give the container an equivilant, negative top margin to create the overlap effect.</p>\n        </div></sbpro-card\n    >\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/headers-simplified/headers-simplified.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/headers-simplified/headers-simplified.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersHeadersSimplifiedHeadersSimplifiedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"layout\" title=\"Simplified Header\" description=\"A simplified page header for use with the dashboard layout\" [simplified]=\"true\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-4\">\n    <sbpro-card\n        ><div class=\"card-header\">Simplified Page Header Option</div>\n        <div class=\"card-body\">\n            <p class=\"card-text\">The simplified page header options allows you to remove the negative offset of the default page header.</p>\n            <p class=\"card-text\">Just add <code>[simplified]='true'</code> to the <code>&lt;sbpro-dashboard-head&gt;</code> element and add a top margin to the initial container within the main element. This will result in a simplified page header, that still includes the option for an icon and breadcrumbs.</p>\n        </div></sbpro-card\n    >\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/modal/modal.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/modal/modal.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersModalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"external-link\" title=\"Modals\" description=\"Dialog boxes to display lightbox, notifications, or other custom content\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\">\n            <sbpro-modals-default sbproTocItem=\"Default\"></sbpro-modals-default><sbpro-modals-scrollable sbproTocItem=\"Scrollable\"></sbpro-modals-scrollable><sbpro-modals-vertically-centered sbproTocItem=\"Vertically Centered\"></sbpro-modals-vertically-centered><sbpro-modals-sizing sbproTocItem=\"Sizing\"></sbpro-modals-sizing\n            ><sbpro-card-icon iconBackground=\"bg-secondary\"\n                ><div class=\"card-icon\"><fa-icon class=\"text-white-50\" [icon]='[\"fab\", \"bootstrap\"]'></fa-icon></div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">NG Bootstrap Documentation Available</h5>\n                    <p class=\"card-text\">Modals are a default component included with NG Bootstrap. For more information on implementing, modifying, and extending the usage of modals within your project, visit the official NG Bootstrap modal documentation page.</p>\n                    <a class=\"btn btn-secondary btn-sm\" href=\"https://ng-bootstrap.github.io/#/components/modal/examples/\" target=\"_blank\"><i-feather class=\"mr-1\" name=\"external-link\"></i-feather>Visit NG Bootstrap Modal Docs</a>\n                </div></sbpro-card-icon\n            >\n        </div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/navigation/navigation.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/navigation/navigation.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"menu\" title=\"Navigation\" description=\"Navigation components to help your users find content within your application\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\"><sbpro-navigation-side sbproTocItem=\"Side Navigation\"></sbpro-navigation-side><sbpro-navigation-sticky sbproTocItem=\"Sticky Navigation\"></sbpro-navigation-sticky></div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/progress/progress.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/progress/progress.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersProgressProgressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"sliders\" title=\"Progress\" description=\"Progress indicators to display data within your application\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\">\n            <sbpro-progress-default sbproTocItem=\"Default\"></sbpro-progress-default><sbpro-progress-labels sbproTocItem=\"Labels\"></sbpro-progress-labels><sbpro-progress-colors sbproTocItem=\"Colors\"></sbpro-progress-colors><sbpro-progress-striped sbproTocItem=\"Striped\"></sbpro-progress-striped><sbpro-progress-card-guide sbproTocItem=\"Card\"></sbpro-progress-card-guide\n            ><sbpro-card-icon iconBackground=\"bg-secondary\"\n                ><div class=\"card-icon\"><fa-icon class=\"text-white-50\" [icon]='[\"fab\", \"bootstrap\"]'></fa-icon></div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Bootstrap Documentation Available</h5>\n                    <p class=\"card-text\">Progress indicators are a default component included with Bootstrap. For more information on implementing, modifying, and extending the usage of progress indicators within your project, visit the official Bootstrap progressbar documentation page.</p>\n                    <a class=\"btn btn-secondary btn-sm\" href=\"https://getbootstrap.com/docs/4.4/components/progress/\" target=\"_blank\"><i-feather class=\"mr-1\" name=\"external-link\"></i-feather>Visit Bootstrap Progressbar Docs</a>\n                </div></sbpro-card-icon\n            >\n        </div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/shadows/shadows.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/shadows/shadows.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersShadowsShadowsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"sunset\" title=\"Shadows\" description=\"Shadow utilities add depth and elevation to your content\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\"><sbpro-shadows-default sbproTocItem=\"Default\"></sbpro-shadows-default><sbpro-shadows-extended sbproTocItem=\"Extended\"></sbpro-shadows-extended></div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/toasts/toasts.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/toasts/toasts.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersToastsToastsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"bell\" title=\"Toasts\" description=\"Subtle push notifications to help deliver alerts to your users\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\"><sbpro-toast-demo sbproTocItem=\"Demo\"></sbpro-toast-demo><sbpro-toast-colors sbproTocItem=\"Colors\"></sbpro-toast-colors></div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/tooltips/tooltips.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/tooltips/tooltips.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersTooltipsTooltipsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"help-circle\" title=\"Tooltips\" description=\"Animted tooltips to provide annotation on content when hovered over\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\">\n            <sbpro-tooltips-default sbproTocItem=\"Tooltips\"></sbpro-tooltips-default><sbpro-tooltips-popovers sbproTocItem=\"Popovers\"></sbpro-tooltips-popovers\n            ><sbpro-card-icon iconBackground=\"bg-secondary\"\n                ><div class=\"card-icon\"><fa-icon class=\"text-white-50\" [icon]='[\"fab\", \"bootstrap\"]'></fa-icon></div>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">NG Bootstrap Documentation Available</h5>\n                    <p class=\"card-text\">Tooltips and popovers are default components included with NG Bootstrap. For more information on implementing, modifying, and extending the usage of tooltips and popovers within your project, visit the official NG Bootstrap modal documentation page.</p>\n                    <a class=\"btn btn-secondary btn-sm mr-2\" href=\"https://ng-bootstrap.github.io/#/components/tooltip/examples/\" target=\"_blank\"><i-feather class=\"mr-1\" name=\"external-link\"></i-feather>Visit NG Bootstrap Tooltip Docs</a><a class=\"btn btn-secondary btn-sm\" href=\"https://ng-bootstrap.github.io/#/components/popover/examples/\" target=\"_blank\"><i-feather class=\"mr-1\" name=\"external-link\"></i-feather>Visit NG Bootstrap Popover Docs</a>\n                </div></sbpro-card-icon\n            >\n        </div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/typography/typography.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/typography/typography.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesStyleReferenceContainersTypographyTypographyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sbpro-dashboard-head icon=\"type\" title=\"Typography\" description=\"Text utilities to help you add meaning and emphasis to your content\"></sbpro-dashboard-head>\n<div class=\"container-fluid mt-n10\">\n    <div class=\"row\">\n        <div class=\"col-lg-9\"><sbpro-typography-color sbproTocItem=\"Color\"></sbpro-typography-color><sbpro-typography-grayscale sbproTocItem=\"Grayscale\"></sbpro-typography-grayscale><sbpro-typography-weight sbproTocItem=\"Weight\"></sbpro-typography-weight></div>\n        <div class=\"col-lg-3\"><sbpro-toc-nav [tocIndex]=\"tocIndex\"></sbpro-toc-nav></div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/toc/components/toc-nav/toc-nav.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/toc/components/toc-nav/toc-nav.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesTocComponentsTocNavTocNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sb-nav-sticky\">\n    <div class=\"card\">\n        <div class=\"card-body\"><ng-container *ngTemplateOutlet=\"tocList; context: {items: items, initial: true}\"></ng-container></div>\n    </div>\n</div>\n<ng-template #tocList let-passedItems=\"items\" let-initial=\"initial\"\n    ><ul class=\"nav flex-column\" [ngClass]='{\"ml-3\": !initial}'>\n        <li class=\"nav-item\" *ngFor=\"let item of passedItems\">\n            <a class=\"nav-link\" [ngClass]='{\"active\": item.title === topInView || item.title === topInViewChild}' (click)=\"navigateToTitle(item)\" href=\"javascript:void(0);\">{{item.title}}</a><ng-container *ngIf=\"item.children\"><ng-container *ngTemplateOutlet=\"tocList; context: {items: item.children}\"></ng-container></ng-container>\n        </li></ul\n></ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/sentence-case/dist.es2015/index.js":
  /*!*********************************************************!*\
    !*** ./node_modules/sentence-case/dist.es2015/index.js ***!
    \*********************************************************/

  /*! exports provided: sentenceCaseTransform, sentenceCase */

  /***/
  function node_modulesSentenceCaseDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sentenceCaseTransform", function () {
      return sentenceCaseTransform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sentenceCase", function () {
      return sentenceCase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var no_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! no-case */
    "./node_modules/no-case/dist.es2015/index.js");
    /* harmony import */


    var upper_case_first__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! upper-case-first */
    "./node_modules/upper-case-first/dist.es2015/index.js");

    function sentenceCaseTransform(input, index) {
      var result = input.toLowerCase();
      if (index === 0) return Object(upper_case_first__WEBPACK_IMPORTED_MODULE_2__["upperCaseFirst"])(result);
      return result;
    }

    function sentenceCase(input, options) {
      if (options === void 0) {
        options = {};
      }

      return Object(no_case__WEBPACK_IMPORTED_MODULE_1__["noCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        delimiter: " ",
        transform: sentenceCaseTransform
      }, options));
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/snake-case/dist.es2015/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/snake-case/dist.es2015/index.js ***!
    \******************************************************/

  /*! exports provided: snakeCase */

  /***/
  function node_modulesSnakeCaseDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "snakeCase", function () {
      return snakeCase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var dot_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dot-case */
    "./node_modules/dot-case/dist.es2015/index.js");

    function snakeCase(input, options) {
      if (options === void 0) {
        options = {};
      }

      return Object(dot_case__WEBPACK_IMPORTED_MODULE_1__["dotCase"])(input, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        delimiter: "_"
      }, options));
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/upper-case-first/dist.es2015/index.js":
  /*!************************************************************!*\
    !*** ./node_modules/upper-case-first/dist.es2015/index.js ***!
    \************************************************************/

  /*! exports provided: upperCaseFirst */

  /***/
  function node_modulesUpperCaseFirstDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "upperCaseFirst", function () {
      return upperCaseFirst;
    });
    /**
     * Upper case the first character of an input string.
     */


    function upperCaseFirst(input) {
      return input.charAt(0).toUpperCase() + input.substr(1);
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/upper-case/dist.es2015/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/upper-case/dist.es2015/index.js ***!
    \******************************************************/

  /*! exports provided: localeUpperCase, upperCase */

  /***/
  function node_modulesUpperCaseDistEs2015IndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "localeUpperCase", function () {
      return localeUpperCase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "upperCase", function () {
      return upperCase;
    });
    /**
     * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
     */


    var SUPPORTED_LOCALE = {
      tr: {
        regexp: /[\u0069]/g,
        map: {
          i: "\u0130"
        }
      },
      az: {
        regexp: /[\u0069]/g,
        map: {
          i: "\u0130"
        }
      },
      lt: {
        regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
        map: {
          i̇: "I",
          j̇: "J",
          į̇: "\u012E",
          i̇̀: "\xCC",
          i̇́: "\xCD",
          i̇̃: "\u0128"
        }
      }
    };
    /**
     * Localized upper case.
     */

    function localeUpperCase(str, locale) {
      var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
      if (lang) return upperCase(str.replace(lang.regexp, function (m) {
        return lang.map[m];
      }));
      return upperCase(str);
    }
    /**
     * Upper case as a function.
     */


    function upperCase(str) {
      return str.toUpperCase();
    } //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsDashboardCardsDashboardCardsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtY2FyZHMvZGFzaGJvYXJkLWNhcmRzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: DashboardCardsComponent */

  /***/
  function srcModulesDashboardComponentsDashboardCardsDashboardCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardCardsComponent", function () {
      return DashboardCardsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardCardsComponent =
    /*#__PURE__*/
    function () {
      function DashboardCardsComponent() {
        _classCallCheck(this, DashboardCardsComponent);
      }

      _createClass(DashboardCardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardCardsComponent;
    }();

    DashboardCardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-dashboard-cards',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard-cards.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard-cards.component.scss */
      "./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardCardsComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsDashboardChartsDashboardChartsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtY2hhcnRzL2Rhc2hib2FyZC1jaGFydHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DashboardChartsComponent */

  /***/
  function srcModulesDashboardComponentsDashboardChartsDashboardChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardChartsComponent", function () {
      return DashboardChartsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardChartsComponent =
    /*#__PURE__*/
    function () {
      function DashboardChartsComponent() {
        _classCallCheck(this, DashboardChartsComponent);
      }

      _createClass(DashboardChartsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardChartsComponent;
    }();

    DashboardChartsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-dashboard-charts',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard-charts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard-charts.component.scss */
      "./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardChartsComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsDashboardTablesDashboardTablesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtdGFibGVzL2Rhc2hib2FyZC10YWJsZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DashboardTablesComponent */

  /***/
  function srcModulesDashboardComponentsDashboardTablesDashboardTablesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardTablesComponent", function () {
      return DashboardTablesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardTablesComponent =
    /*#__PURE__*/
    function () {
      function DashboardTablesComponent() {
        _classCallCheck(this, DashboardTablesComponent);
      }

      _createClass(DashboardTablesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardTablesComponent;
    }();

    DashboardTablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-dashboard-tables',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard-tables.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard-tables.component.scss */
      "./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardTablesComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/index.ts":
  /*!***************************************************!*\
    !*** ./src/modules/dashboard/components/index.ts ***!
    \***************************************************/

  /*! exports provided: components, DashboardCardsComponent, DashboardChartsComponent, DashboardTablesComponent */

  /***/
  function srcModulesDashboardComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard-cards/dashboard-cards.component */
    "./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.ts");
    /* harmony import */


    var _dashboard_charts_dashboard_charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard-charts/dashboard-charts.component */
    "./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.ts");
    /* harmony import */


    var _dashboard_tables_dashboard_tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-tables/dashboard-tables.component */
    "./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardCardsComponent", function () {
      return _dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_1__["DashboardCardsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardChartsComponent", function () {
      return _dashboard_charts_dashboard_charts_component__WEBPACK_IMPORTED_MODULE_2__["DashboardChartsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardTablesComponent", function () {
      return _dashboard_tables_dashboard_tables_component__WEBPACK_IMPORTED_MODULE_3__["DashboardTablesComponent"];
    });

    var components = [_dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_1__["DashboardCardsComponent"], _dashboard_charts_dashboard_charts_component__WEBPACK_IMPORTED_MODULE_2__["DashboardChartsComponent"], _dashboard_tables_dashboard_tables_component__WEBPACK_IMPORTED_MODULE_3__["DashboardTablesComponent"]];
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/dark/dark.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/modules/dashboard/containers/dark/dark.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardContainersDarkDarkComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29udGFpbmVycy9kYXJrL2RhcmsuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/dark/dark.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/modules/dashboard/containers/dark/dark.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DarkComponent */

  /***/
  function srcModulesDashboardContainersDarkDarkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DarkComponent", function () {
      return DarkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DarkComponent =
    /*#__PURE__*/
    function () {
      function DarkComponent() {
        _classCallCheck(this, DarkComponent);
      }

      _createClass(DarkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DarkComponent;
    }();

    DarkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-dark',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dark.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dark/dark.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dark.component.scss */
      "./src/modules/dashboard/containers/dark/dark.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DarkComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/dashboard-overview/dashboard-overview.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/dashboard/containers/dashboard-overview/dashboard-overview.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardContainersDashboardOverviewDashboardOverviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29udGFpbmVycy9kYXNoYm9hcmQtb3ZlcnZpZXcvZGFzaGJvYXJkLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/dashboard-overview/dashboard-overview.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/dashboard/containers/dashboard-overview/dashboard-overview.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: DashboardOverviewComponent */

  /***/
  function srcModulesDashboardContainersDashboardOverviewDashboardOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardOverviewComponent", function () {
      return DashboardOverviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardOverviewComponent =
    /*#__PURE__*/
    function () {
      function DashboardOverviewComponent() {
        _classCallCheck(this, DashboardOverviewComponent);
      }

      _createClass(DashboardOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardOverviewComponent;
    }();

    DashboardOverviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-dashboard-overview',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard-overview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard-overview/dashboard-overview.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard-overview.component.scss */
      "./src/modules/dashboard/containers/dashboard-overview/dashboard-overview.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardOverviewComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/dashboard/dashboard.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/modules/dashboard/containers/dashboard/dashboard.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardContainersDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29udGFpbmVycy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/dashboard/dashboard.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/modules/dashboard/containers/dashboard/dashboard.component.ts ***!
    \***************************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcModulesDashboardContainersDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-dashboard',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard/dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/modules/dashboard/containers/dashboard/dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/index.ts":
  /*!***************************************************!*\
    !*** ./src/modules/dashboard/containers/index.ts ***!
    \***************************************************/

  /*! exports provided: containers, DashboardComponent, StaticComponent, DashboardOverviewComponent, DarkComponent, RtlComponent */

  /***/
  function srcModulesDashboardContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "containers", function () {
      return containers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _dark_dark_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dark/dark.component */
    "./src/modules/dashboard/containers/dark/dark.component.ts");
    /* harmony import */


    var _dashboard_overview_dashboard_overview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard-overview/dashboard-overview.component */
    "./src/modules/dashboard/containers/dashboard-overview/dashboard-overview.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/modules/dashboard/containers/dashboard/dashboard.component.ts");
    /* harmony import */


    var _rtl_rtl_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./rtl/rtl.component */
    "./src/modules/dashboard/containers/rtl/rtl.component.ts");
    /* harmony import */


    var _static_static_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./static/static.component */
    "./src/modules/dashboard/containers/static/static.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StaticComponent", function () {
      return _static_static_component__WEBPACK_IMPORTED_MODULE_5__["StaticComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardOverviewComponent", function () {
      return _dashboard_overview_dashboard_overview_component__WEBPACK_IMPORTED_MODULE_2__["DashboardOverviewComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DarkComponent", function () {
      return _dark_dark_component__WEBPACK_IMPORTED_MODULE_1__["DarkComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RtlComponent", function () {
      return _rtl_rtl_component__WEBPACK_IMPORTED_MODULE_4__["RtlComponent"];
    });

    var containers = [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _static_static_component__WEBPACK_IMPORTED_MODULE_5__["StaticComponent"], _dashboard_overview_dashboard_overview_component__WEBPACK_IMPORTED_MODULE_2__["DashboardOverviewComponent"], _dark_dark_component__WEBPACK_IMPORTED_MODULE_1__["DarkComponent"], _rtl_rtl_component__WEBPACK_IMPORTED_MODULE_4__["RtlComponent"]];
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/rtl/rtl.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/modules/dashboard/containers/rtl/rtl.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardContainersRtlRtlComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29udGFpbmVycy9ydGwvcnRsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/rtl/rtl.component.ts":
  /*!***************************************************************!*\
    !*** ./src/modules/dashboard/containers/rtl/rtl.component.ts ***!
    \***************************************************************/

  /*! exports provided: RtlComponent */

  /***/
  function srcModulesDashboardContainersRtlRtlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RtlComponent", function () {
      return RtlComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RtlComponent =
    /*#__PURE__*/
    function () {
      function RtlComponent() {
        _classCallCheck(this, RtlComponent);
      }

      _createClass(RtlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RtlComponent;
    }();

    RtlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-rtl',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./rtl.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/rtl/rtl.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./rtl.component.scss */
      "./src/modules/dashboard/containers/rtl/rtl.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RtlComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/static/static.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/modules/dashboard/containers/static/static.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardContainersStaticStaticComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29udGFpbmVycy9zdGF0aWMvc3RhdGljLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/static/static.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/modules/dashboard/containers/static/static.component.ts ***!
    \*********************************************************************/

  /*! exports provided: StaticComponent */

  /***/
  function srcModulesDashboardContainersStaticStaticComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaticComponent", function () {
      return StaticComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StaticComponent =
    /*#__PURE__*/
    function () {
      function StaticComponent() {
        _classCallCheck(this, StaticComponent);
      }

      _createClass(StaticComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StaticComponent;
    }();

    StaticComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-static',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./static.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/static/static.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./static.component.scss */
      "./src/modules/dashboard/containers/static/static.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StaticComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/dashboard-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/modules/dashboard/dashboard-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ROUTES, DashboardRoutingModule */

  /***/
  function srcModulesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.module */
    "./src/modules/dashboard/dashboard.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/dashboard/containers/index.ts");
    /* harmony import */


    var _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @modules/style-reference/containers */
    "./src/modules/style-reference/containers/index.ts");
    /* harmony import */


    var _modules_style_reference_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @modules/style-reference/models */
    "./src/modules/style-reference/models/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Module */

    /* Containers */

    /* Routes */


    var ROUTES = [{
      path: '',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      children: [{
        path: '',
        data: {
          title: 'Dashboard - SB Admin Pro Angular',
          breadcrumbs: [{
            text: 'Dashboard',
            active: true
          }]
        },
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["DashboardOverviewComponent"]
      }, {
        path: 'components',
        children: [{
          path: '',
          pathMatch: 'full',
          redirectTo: 'alerts'
        }].concat(_toConsumableArray(_modules_style_reference_models__WEBPACK_IMPORTED_MODULE_6__["styleReferenceRouteVariables"].components.map(function (value) {
          return {
            path: value.name,
            data: {
              title: "".concat(value.title, " - SB Admin Pro Angular"),
              breadcrumbs: [{
                text: 'Dashboard',
                link: '/dashboard'
              }, {
                text: value.title,
                active: true
              }]
            },
            component: value.component
          };
        })))
      }, {
        path: 'utilities',
        children: [{
          path: '',
          pathMatch: 'full',
          redirectTo: 'animations'
        }].concat(_toConsumableArray(_modules_style_reference_models__WEBPACK_IMPORTED_MODULE_6__["styleReferenceRouteVariables"].utilities.map(function (value) {
          return {
            path: value.name,
            data: {
              title: "".concat(value.title, " - SB Admin Pro Angular"),
              breadcrumbs: [{
                text: 'Dashboard',
                link: '/dashboard'
              }, {
                text: value.title,
                active: true
              }]
            },
            component: value.component
          };
        })))
      }, {
        path: 'page-headers',
        children: [{
          path: '',
          pathMatch: 'full',
          redirectTo: 'simplified'
        }].concat(_toConsumableArray(_modules_style_reference_models__WEBPACK_IMPORTED_MODULE_6__["styleReferenceRouteVariables"].pageHeaders.map(function (value) {
          return {
            path: value.name,
            data: {
              title: "".concat(value.title, " - SB Admin Pro Angular"),
              breadcrumbs: [{
                text: 'Dashboard',
                link: '/dashboard'
              }, {
                text: value.title,
                active: true
              }]
            },
            component: value.component
          };
        })))
      }, {
        path: 'pages',
        children: [{
          path: 'blank',
          canActivate: [],
          component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_5__["BlankComponent"],
          data: {
            title: 'Pages Blank - SB Admin Pro Angular',
            breadcrumbs: [{
              text: 'Dashboard',
              link: '/dashboard'
            }, {
              text: 'Blank',
              active: true
            }]
          }
        }]
      }]
    }, {
      path: 'static',
      data: {
        title: 'Dashboard Static - SB Admin Pro Angular',
        breadcrumbs: [{
          text: 'Dashboard',
          link: '/dashboard'
        }, {
          text: 'Static',
          active: true
        }]
      },
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["StaticComponent"]
    }, {
      path: 'rtl',
      data: {
        title: 'Dashboard RTL - SB Admin Pro Angular',
        breadcrumbs: [{
          text: 'Dashboard',
          link: '/dashboard'
        }, {
          text: 'RTL',
          active: true
        }]
      },
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["RtlComponent"]
    }, {
      path: 'dark',
      data: {
        title: 'Dashboard Dark - SB Admin Pro Angular',
        breadcrumbs: [{
          text: 'Dashboard',
          link: '/dashboard'
        }, {
          text: 'Dark',
          active: true
        }]
      },
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["DarkComponent"]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_dashboard_module__WEBPACK_IMPORTED_MODULE_3__["DashboardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/modules/dashboard/dashboard.module.ts":
  /*!***************************************************!*\
    !*** ./src/modules/dashboard/dashboard.module.ts ***!
    \***************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcModulesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @common/app-common.module */
    "./src/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @modules/navigation/navigation.module */
    "./src/modules/navigation/navigation.module.ts");
    /* harmony import */


    var _modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @modules/charts/charts.module */
    "./src/modules/charts/charts.module.ts");
    /* harmony import */


    var _modules_tables_tables_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @modules/tables/tables.module */
    "./src/modules/tables/tables.module.ts");
    /* harmony import */


    var _modules_style_reference_style_reference_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @modules/style-reference/style-reference.module */
    "./src/modules/style-reference/style-reference.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components */
    "./src/modules/dashboard/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/dashboard/containers/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/dashboard/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services */
    "./src/modules/dashboard/services/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Modules */

    /* Components */

    /* Containers */

    /* Guards */

    /* Services */


    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_6__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__["NavigationModule"], _modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], _modules_tables_tables_module__WEBPACK_IMPORTED_MODULE_9__["TablesModule"], _modules_style_reference_style_reference_module__WEBPACK_IMPORTED_MODULE_10__["StyleReferenceModule"]],
      providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_14__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_13__["guards"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_12__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_11__["components"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_12__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_11__["components"]))
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/modules/dashboard/guards/dashboard.guard.ts":
  /*!*********************************************************!*\
    !*** ./src/modules/dashboard/guards/dashboard.guard.ts ***!
    \*********************************************************/

  /*! exports provided: DashboardGuard */

  /***/
  function srcModulesDashboardGuardsDashboardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardGuard", function () {
      return DashboardGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DashboardGuard =
    /*#__PURE__*/
    function () {
      function DashboardGuard() {
        _classCallCheck(this, DashboardGuard);
      }

      _createClass(DashboardGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
      }]);

      return DashboardGuard;
    }();

    DashboardGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DashboardGuard);
    /***/
  },

  /***/
  "./src/modules/dashboard/guards/index.ts":
  /*!***********************************************!*\
    !*** ./src/modules/dashboard/guards/index.ts ***!
    \***********************************************/

  /*! exports provided: guards, DashboardGuard */

  /***/
  function srcModulesDashboardGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "guards", function () {
      return guards;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _dashboard_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard.guard */
    "./src/modules/dashboard/guards/dashboard.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardGuard", function () {
      return _dashboard_guard__WEBPACK_IMPORTED_MODULE_1__["DashboardGuard"];
    });

    var guards = [_dashboard_guard__WEBPACK_IMPORTED_MODULE_1__["DashboardGuard"]];
    /***/
  },

  /***/
  "./src/modules/dashboard/services/dashboard.service.ts":
  /*!*************************************************************!*\
    !*** ./src/modules/dashboard/services/dashboard.service.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcModulesDashboardServicesDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DashboardService =
    /*#__PURE__*/
    function () {
      function DashboardService() {
        _classCallCheck(this, DashboardService);
      }

      _createClass(DashboardService, [{
        key: "getDashboard$",
        value: function getDashboard$() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
        }
      }]);

      return DashboardService;
    }();

    DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardService);
    /***/
  },

  /***/
  "./src/modules/dashboard/services/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/dashboard/services/index.ts ***!
    \*************************************************/

  /*! exports provided: services, DashboardService */

  /***/
  function srcModulesDashboardServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard.service */
    "./src/modules/dashboard/services/dashboard.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return _dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"];
    });

    var services = [_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]];
    /***/
  },

  /***/
  "./src/modules/style-reference/components/alerts-content/alerts-content.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/alerts-content/alerts-content.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsAlertsContentAlertsContentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9hbGVydHMtY29udGVudC9hbGVydHMtY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/alerts-content/alerts-content.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/components/alerts-content/alerts-content.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AlertsContentComponent */

  /***/
  function srcModulesStyleReferenceComponentsAlertsContentAlertsContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertsContentComponent", function () {
      return AlertsContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlertsContentComponent =
    /*#__PURE__*/
    function () {
      function AlertsContentComponent() {
        _classCallCheck(this, AlertsContentComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(AlertsContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlertsContentComponent;
    }();

    AlertsContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-alerts-content',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alerts-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-content/alerts-content.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alerts-content.component.scss */
      "./src/modules/style-reference/components/alerts-content/alerts-content.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AlertsContentComponent);
    var pugCode = "\nsbpro-alert(classes='alert-primary', heading='Alert Heading', [dismissable]='true')\n    | This alert example has an alert heading, an alert link, and is dismissible!\n    a.alert-link(href='javascript:void(0);') Example alert link!\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/alerts-default/alerts-default.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/alerts-default/alerts-default.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsAlertsDefaultAlertsDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9hbGVydHMtZGVmYXVsdC9hbGVydHMtZGVmYXVsdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/alerts-default/alerts-default.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/components/alerts-default/alerts-default.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AlertsDefaultComponent */

  /***/
  function srcModulesStyleReferenceComponentsAlertsDefaultAlertsDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertsDefaultComponent", function () {
      return AlertsDefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlertsDefaultComponent =
    /*#__PURE__*/
    function () {
      function AlertsDefaultComponent() {
        _classCallCheck(this, AlertsDefaultComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(AlertsDefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlertsDefaultComponent;
    }();

    AlertsDefaultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-alerts-default',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alerts-default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-default/alerts-default.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alerts-default.component.scss */
      "./src/modules/style-reference/components/alerts-default/alerts-default.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AlertsDefaultComponent);
    var pugCode = "\nsbpro-alert(classes='alert-primary')\n    | A primary alert\u2014check it out!\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/alerts-extended/alerts-extended.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/alerts-extended/alerts-extended.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsAlertsExtendedAlertsExtendedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9hbGVydHMtZXh0ZW5kZWQvYWxlcnRzLWV4dGVuZGVkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/alerts-extended/alerts-extended.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/alerts-extended/alerts-extended.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: AlertsExtendedComponent */

  /***/
  function srcModulesStyleReferenceComponentsAlertsExtendedAlertsExtendedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertsExtendedComponent", function () {
      return AlertsExtendedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlertsExtendedComponent =
    /*#__PURE__*/
    function () {
      function AlertsExtendedComponent() {
        _classCallCheck(this, AlertsExtendedComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
        this.codeSamplesSolid = [{
          language: 'pug',
          code: pugCodeSolid
        }];
      }

      _createClass(AlertsExtendedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlertsExtendedComponent;
    }();

    AlertsExtendedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-alerts-extended',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alerts-extended.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-extended/alerts-extended.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alerts-extended.component.scss */
      "./src/modules/style-reference/components/alerts-extended/alerts-extended.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AlertsExtendedComponent);
    var pugCode = "\nsbpro-alert(classes='alert-red', [dismissable]='false')\n    | This is a red alert.\n".trim();
    var pugCodeSolid = "\nsbpro-alert(classes='alert-red sb-alert-solid', [dismissable]='false')\n    | This is a red alert.\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/alerts-icon/alerts-icon.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/modules/style-reference/components/alerts-icon/alerts-icon.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsAlertsIconAlertsIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9hbGVydHMtaWNvbi9hbGVydHMtaWNvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/alerts-icon/alerts-icon.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/modules/style-reference/components/alerts-icon/alerts-icon.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: AlertsIconComponent */

  /***/
  function srcModulesStyleReferenceComponentsAlertsIconAlertsIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertsIconComponent", function () {
      return AlertsIconComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlertsIconComponent =
    /*#__PURE__*/
    function () {
      function AlertsIconComponent() {
        _classCallCheck(this, AlertsIconComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(AlertsIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlertsIconComponent;
    }();

    AlertsIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-alerts-icon',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alerts-icon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-icon/alerts-icon.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alerts-icon.component.scss */
      "./src/modules/style-reference/components/alerts-icon/alerts-icon.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AlertsIconComponent);
    var pugCode = "\nsbpro-alert([icon]='true', classes='alert-primary', heading='Primary Icon Alert')\n    .sb-alert-icon-aside\n        fa-icon([icon]='[\"far\", \"flag\"]')\n    | This alert uses an icon from Font Awesome!\n\nsbpro-alert([icon]='true', classes='alert-secondary', heading='Secondary Icon Alert')\n    .sb-alert-icon-aside\n        i-feather(name='feather')\n    | This alert uses an icon from Feather Icons!\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/alerts-solid/alerts-solid.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/style-reference/components/alerts-solid/alerts-solid.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsAlertsSolidAlertsSolidComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9hbGVydHMtc29saWQvYWxlcnRzLXNvbGlkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/alerts-solid/alerts-solid.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/modules/style-reference/components/alerts-solid/alerts-solid.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: AlertsSolidComponent */

  /***/
  function srcModulesStyleReferenceComponentsAlertsSolidAlertsSolidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertsSolidComponent", function () {
      return AlertsSolidComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlertsSolidComponent =
    /*#__PURE__*/
    function () {
      function AlertsSolidComponent() {
        _classCallCheck(this, AlertsSolidComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(AlertsSolidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlertsSolidComponent;
    }();

    AlertsSolidComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-alerts-solid',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alerts-solid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/alerts-solid/alerts-solid.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alerts-solid.component.scss */
      "./src/modules/style-reference/components/alerts-solid/alerts-solid.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AlertsSolidComponent);
    var pugCode = "\nsbpro-alert([icon]='true', classes='alert-primary sb-alert-solid')\n    | This is a solid, primary alert!\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/animations-fade-in-up/animations-fade-in-up.component.scss":
  /*!***********************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/animations-fade-in-up/animations-fade-in-up.component.scss ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsAnimationsFadeInUpAnimationsFadeInUpComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9hbmltYXRpb25zLWZhZGUtaW4tdXAvYW5pbWF0aW9ucy1mYWRlLWluLXVwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/animations-fade-in-up/animations-fade-in-up.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/animations-fade-in-up/animations-fade-in-up.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: AnimationsFadeInUpComponent */

  /***/
  function srcModulesStyleReferenceComponentsAnimationsFadeInUpAnimationsFadeInUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationsFadeInUpComponent", function () {
      return AnimationsFadeInUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AnimationsFadeInUpComponent =
    /*#__PURE__*/
    function () {
      function AnimationsFadeInUpComponent() {
        _classCallCheck(this, AnimationsFadeInUpComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(AnimationsFadeInUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnimationsFadeInUpComponent;
    }();

    AnimationsFadeInUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-animations-fade-in-up',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./animations-fade-in-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/animations-fade-in-up/animations-fade-in-up.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./animations-fade-in-up.component.scss */
      "./src/modules/style-reference/components/animations-fade-in-up/animations-fade-in-up.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AnimationsFadeInUpComponent);
    var pugCode = "\nsbpro-dropdown(\n    dropdownStyle='text',\n    background='btn-primary',\n    animation='animated--fade-in-up'\n)\n    .dropdown-trigger\n        | Click Me!\n    .dropdown-items\n        a.dropdown-item Action\n        a.dropdown-item Another action\n        a.dropdown-item Something else here\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/animations-fade-in/animations-fade-in.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/animations-fade-in/animations-fade-in.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsAnimationsFadeInAnimationsFadeInComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9hbmltYXRpb25zLWZhZGUtaW4vYW5pbWF0aW9ucy1mYWRlLWluLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/animations-fade-in/animations-fade-in.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/animations-fade-in/animations-fade-in.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: AnimationsFadeInComponent */

  /***/
  function srcModulesStyleReferenceComponentsAnimationsFadeInAnimationsFadeInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationsFadeInComponent", function () {
      return AnimationsFadeInComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AnimationsFadeInComponent =
    /*#__PURE__*/
    function () {
      function AnimationsFadeInComponent() {
        _classCallCheck(this, AnimationsFadeInComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(AnimationsFadeInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnimationsFadeInComponent;
    }();

    AnimationsFadeInComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-animations-fade-in',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./animations-fade-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/animations-fade-in/animations-fade-in.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./animations-fade-in.component.scss */
      "./src/modules/style-reference/components/animations-fade-in/animations-fade-in.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AnimationsFadeInComponent);
    var pugCode = "\nsbpro-dropdown(\n    dropdownStyle='text',\n    background='btn-primary',\n    animation='animated--fade-in'\n)\n    .dropdown-trigger\n        | Click Me!\n    .dropdown-items\n        a.dropdown-item Action\n        a.dropdown-item Another action\n        a.dropdown-item Something else here\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/background-default/background-default.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/background-default/background-default.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsBackgroundDefaultBackgroundDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9iYWNrZ3JvdW5kLWRlZmF1bHQvYmFja2dyb3VuZC1kZWZhdWx0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/background-default/background-default.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/background-default/background-default.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: BackgroundDefaultComponent */

  /***/
  function srcModulesStyleReferenceComponentsBackgroundDefaultBackgroundDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackgroundDefaultComponent", function () {
      return BackgroundDefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BackgroundDefaultComponent =
    /*#__PURE__*/
    function () {
      function BackgroundDefaultComponent() {
        _classCallCheck(this, BackgroundDefaultComponent);
      }

      _createClass(BackgroundDefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BackgroundDefaultComponent;
    }();

    BackgroundDefaultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-background-default',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./background-default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/background-default/background-default.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./background-default.component.scss */
      "./src/modules/style-reference/components/background-default/background-default.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BackgroundDefaultComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/background-expanded/background-expanded.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/background-expanded/background-expanded.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsBackgroundExpandedBackgroundExpandedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9iYWNrZ3JvdW5kLWV4cGFuZGVkL2JhY2tncm91bmQtZXhwYW5kZWQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/background-expanded/background-expanded.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/background-expanded/background-expanded.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: BackgroundExpandedComponent */

  /***/
  function srcModulesStyleReferenceComponentsBackgroundExpandedBackgroundExpandedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackgroundExpandedComponent", function () {
      return BackgroundExpandedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BackgroundExpandedComponent =
    /*#__PURE__*/
    function () {
      function BackgroundExpandedComponent() {
        _classCallCheck(this, BackgroundExpandedComponent);
      }

      _createClass(BackgroundExpandedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BackgroundExpandedComponent;
    }();

    BackgroundExpandedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-background-expanded',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./background-expanded.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/background-expanded/background-expanded.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./background-expanded.component.scss */
      "./src/modules/style-reference/components/background-expanded/background-expanded.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BackgroundExpandedComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/background-gradient/background-gradient.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/background-gradient/background-gradient.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsBackgroundGradientBackgroundGradientComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9iYWNrZ3JvdW5kLWdyYWRpZW50L2JhY2tncm91bmQtZ3JhZGllbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/background-gradient/background-gradient.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/background-gradient/background-gradient.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: BackgroundGradientComponent */

  /***/
  function srcModulesStyleReferenceComponentsBackgroundGradientBackgroundGradientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackgroundGradientComponent", function () {
      return BackgroundGradientComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BackgroundGradientComponent =
    /*#__PURE__*/
    function () {
      function BackgroundGradientComponent() {
        _classCallCheck(this, BackgroundGradientComponent);
      }

      _createClass(BackgroundGradientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BackgroundGradientComponent;
    }();

    BackgroundGradientComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-background-gradient',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./background-gradient.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/background-gradient/background-gradient.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./background-gradient.component.scss */
      "./src/modules/style-reference/components/background-gradient/background-gradient.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BackgroundGradientComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/background-grayscale/background-grayscale.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/background-grayscale/background-grayscale.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsBackgroundGrayscaleBackgroundGrayscaleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9iYWNrZ3JvdW5kLWdyYXlzY2FsZS9iYWNrZ3JvdW5kLWdyYXlzY2FsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/background-grayscale/background-grayscale.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/background-grayscale/background-grayscale.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: BackgroundGrayscaleComponent */

  /***/
  function srcModulesStyleReferenceComponentsBackgroundGrayscaleBackgroundGrayscaleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackgroundGrayscaleComponent", function () {
      return BackgroundGrayscaleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BackgroundGrayscaleComponent =
    /*#__PURE__*/
    function () {
      function BackgroundGrayscaleComponent() {
        _classCallCheck(this, BackgroundGrayscaleComponent);
      }

      _createClass(BackgroundGrayscaleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BackgroundGrayscaleComponent;
    }();

    BackgroundGrayscaleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-background-grayscale',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./background-grayscale.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/background-grayscale/background-grayscale.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./background-grayscale.component.scss */
      "./src/modules/style-reference/components/background-grayscale/background-grayscale.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BackgroundGrayscaleComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/badges-default/badges-default.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/badges-default/badges-default.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsBadgesDefaultBadgesDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9iYWRnZXMtZGVmYXVsdC9iYWRnZXMtZGVmYXVsdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/badges-default/badges-default.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/components/badges-default/badges-default.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: BadgesDefaultComponent */

  /***/
  function srcModulesStyleReferenceComponentsBadgesDefaultBadgesDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BadgesDefaultComponent", function () {
      return BadgesDefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BadgesDefaultComponent =
    /*#__PURE__*/
    function () {
      function BadgesDefaultComponent() {
        _classCallCheck(this, BadgesDefaultComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(BadgesDefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BadgesDefaultComponent;
    }();

    BadgesDefaultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-badges-default',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./badges-default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/badges-default/badges-default.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./badges-default.component.scss */
      "./src/modules/style-reference/components/badges-default/badges-default.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BadgesDefaultComponent);
    var pugCode = "\nspan.badge.badge-primary.mr-2 Primary\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/badges-extended/badges-extended.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/badges-extended/badges-extended.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsBadgesExtendedBadgesExtendedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9iYWRnZXMtZXh0ZW5kZWQvYmFkZ2VzLWV4dGVuZGVkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/badges-extended/badges-extended.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/badges-extended/badges-extended.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: BadgesExtendedComponent */

  /***/
  function srcModulesStyleReferenceComponentsBadgesExtendedBadgesExtendedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BadgesExtendedComponent", function () {
      return BadgesExtendedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BadgesExtendedComponent =
    /*#__PURE__*/
    function () {
      function BadgesExtendedComponent() {
        _classCallCheck(this, BadgesExtendedComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(BadgesExtendedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BadgesExtendedComponent;
    }();

    BadgesExtendedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-badges-extended',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./badges-extended.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/badges-extended/badges-extended.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./badges-extended.component.scss */
      "./src/modules/style-reference/components/badges-extended/badges-extended.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BadgesExtendedComponent);
    var pugCode = "\nspan.badge.badge-red.mr-2 Red\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/badges-sizing/badges-sizing.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/components/badges-sizing/badges-sizing.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsBadgesSizingBadgesSizingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9iYWRnZXMtc2l6aW5nL2JhZGdlcy1zaXppbmcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/badges-sizing/badges-sizing.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/style-reference/components/badges-sizing/badges-sizing.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: BadgesSizingComponent */

  /***/
  function srcModulesStyleReferenceComponentsBadgesSizingBadgesSizingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BadgesSizingComponent", function () {
      return BadgesSizingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BadgesSizingComponent =
    /*#__PURE__*/
    function () {
      function BadgesSizingComponent() {
        _classCallCheck(this, BadgesSizingComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(BadgesSizingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BadgesSizingComponent;
    }();

    BadgesSizingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-badges-sizing',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./badges-sizing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/badges-sizing/badges-sizing.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./badges-sizing.component.scss */
      "./src/modules/style-reference/components/badges-sizing/badges-sizing.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BadgesSizingComponent);
    var pugCode = "\nh1 Example Heading\n    span.badge.badge-primary.ml-2 New\n\np This is an example paragraph with a badge at the end!\n    span.badge.badge-primary.ml-2 New\n\nbutton.btn.btn-primary.mr-2 Messages\n    span.badge.badge-white.ml-2 5\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/borders-colors/borders-colors.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/borders-colors/borders-colors.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsBordersColorsBordersColorsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9ib3JkZXJzLWNvbG9ycy9ib3JkZXJzLWNvbG9ycy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/borders-colors/borders-colors.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/components/borders-colors/borders-colors.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: BordersColorsComponent */

  /***/
  function srcModulesStyleReferenceComponentsBordersColorsBordersColorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BordersColorsComponent", function () {
      return BordersColorsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BordersColorsComponent =
    /*#__PURE__*/
    function () {
      function BordersColorsComponent() {
        _classCallCheck(this, BordersColorsComponent);
      }

      _createClass(BordersColorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BordersColorsComponent;
    }();

    BordersColorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-borders-colors',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./borders-colors.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-colors/borders-colors.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./borders-colors.component.scss */
      "./src/modules/style-reference/components/borders-colors/borders-colors.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BordersColorsComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/borders-default/borders-default.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/borders-default/borders-default.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsBordersDefaultBordersDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9ib3JkZXJzLWRlZmF1bHQvYm9yZGVycy1kZWZhdWx0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/borders-default/borders-default.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/borders-default/borders-default.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: BordersDefaultComponent */

  /***/
  function srcModulesStyleReferenceComponentsBordersDefaultBordersDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BordersDefaultComponent", function () {
      return BordersDefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BordersDefaultComponent =
    /*#__PURE__*/
    function () {
      function BordersDefaultComponent() {
        _classCallCheck(this, BordersDefaultComponent);
      }

      _createClass(BordersDefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BordersDefaultComponent;
    }();

    BordersDefaultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-borders-default',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./borders-default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-default/borders-default.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./borders-default.component.scss */
      "./src/modules/style-reference/components/borders-default/borders-default.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BordersDefaultComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/borders-radius-size/borders-radius-size.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/borders-radius-size/borders-radius-size.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsBordersRadiusSizeBordersRadiusSizeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9ib3JkZXJzLXJhZGl1cy1zaXplL2JvcmRlcnMtcmFkaXVzLXNpemUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/borders-radius-size/borders-radius-size.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/borders-radius-size/borders-radius-size.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: BordersRadiusSizeComponent */

  /***/
  function srcModulesStyleReferenceComponentsBordersRadiusSizeBordersRadiusSizeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BordersRadiusSizeComponent", function () {
      return BordersRadiusSizeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BordersRadiusSizeComponent =
    /*#__PURE__*/
    function () {
      function BordersRadiusSizeComponent() {
        _classCallCheck(this, BordersRadiusSizeComponent);
      }

      _createClass(BordersRadiusSizeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BordersRadiusSizeComponent;
    }();

    BordersRadiusSizeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-borders-radius-size',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./borders-radius-size.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-radius-size/borders-radius-size.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./borders-radius-size.component.scss */
      "./src/modules/style-reference/components/borders-radius-size/borders-radius-size.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BordersRadiusSizeComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/borders-radius/borders-radius.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/borders-radius/borders-radius.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsBordersRadiusBordersRadiusComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9ib3JkZXJzLXJhZGl1cy9ib3JkZXJzLXJhZGl1cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/borders-radius/borders-radius.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/components/borders-radius/borders-radius.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: BordersRadiusComponent */

  /***/
  function srcModulesStyleReferenceComponentsBordersRadiusBordersRadiusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BordersRadiusComponent", function () {
      return BordersRadiusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BordersRadiusComponent =
    /*#__PURE__*/
    function () {
      function BordersRadiusComponent() {
        _classCallCheck(this, BordersRadiusComponent);
      }

      _createClass(BordersRadiusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BordersRadiusComponent;
    }();

    BordersRadiusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-borders-radius',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./borders-radius.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-radius/borders-radius.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./borders-radius.component.scss */
      "./src/modules/style-reference/components/borders-radius/borders-radius.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BordersRadiusComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/borders-thickness/borders-thickness.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/borders-thickness/borders-thickness.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsBordersThicknessBordersThicknessComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9ib3JkZXJzLXRoaWNrbmVzcy9ib3JkZXJzLXRoaWNrbmVzcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/borders-thickness/borders-thickness.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/borders-thickness/borders-thickness.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: BordersThicknessComponent */

  /***/
  function srcModulesStyleReferenceComponentsBordersThicknessBordersThicknessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BordersThicknessComponent", function () {
      return BordersThicknessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BordersThicknessComponent =
    /*#__PURE__*/
    function () {
      function BordersThicknessComponent() {
        _classCallCheck(this, BordersThicknessComponent);
      }

      _createClass(BordersThicknessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BordersThicknessComponent;
    }();

    BordersThicknessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-borders-thickness',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./borders-thickness.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-thickness/borders-thickness.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./borders-thickness.component.scss */
      "./src/modules/style-reference/components/borders-thickness/borders-thickness.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BordersThicknessComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/borders-usage-examples/borders-usage-examples.component.scss":
  /*!*************************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/borders-usage-examples/borders-usage-examples.component.scss ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsBordersUsageExamplesBordersUsageExamplesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9ib3JkZXJzLXVzYWdlLWV4YW1wbGVzL2JvcmRlcnMtdXNhZ2UtZXhhbXBsZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/borders-usage-examples/borders-usage-examples.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/borders-usage-examples/borders-usage-examples.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: BordersUsageExamplesComponent */

  /***/
  function srcModulesStyleReferenceComponentsBordersUsageExamplesBordersUsageExamplesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BordersUsageExamplesComponent", function () {
      return BordersUsageExamplesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BordersUsageExamplesComponent =
    /*#__PURE__*/
    function () {
      function BordersUsageExamplesComponent() {
        _classCallCheck(this, BordersUsageExamplesComponent);
      }

      _createClass(BordersUsageExamplesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BordersUsageExamplesComponent;
    }();

    BordersUsageExamplesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-borders-usage-examples',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./borders-usage-examples.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/borders-usage-examples/borders-usage-examples.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./borders-usage-examples.component.scss */
      "./src/modules/style-reference/components/borders-usage-examples/borders-usage-examples.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BordersUsageExamplesComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/buttons-custom/buttons-custom.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/buttons-custom/buttons-custom.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsButtonsCustomButtonsCustomComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9idXR0b25zLWN1c3RvbS9idXR0b25zLWN1c3RvbS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/buttons-custom/buttons-custom.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/components/buttons-custom/buttons-custom.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ButtonsCustomComponent */

  /***/
  function srcModulesStyleReferenceComponentsButtonsCustomButtonsCustomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonsCustomComponent", function () {
      return ButtonsCustomComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ButtonsCustomComponent =
    /*#__PURE__*/
    function () {
      function ButtonsCustomComponent() {
        _classCallCheck(this, ButtonsCustomComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
        this.codeSamplesOutline = [{
          language: 'pug',
          code: pugCodeOutline
        }];
      }

      _createClass(ButtonsCustomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonsCustomComponent;
    }();

    ButtonsCustomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-buttons-custom',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./buttons-custom.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-custom/buttons-custom.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./buttons-custom.component.scss */
      "./src/modules/style-reference/components/buttons-custom/buttons-custom.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ButtonsCustomComponent);
    var pugCode = "\nbutton.btn.btn-red(type='button') Red\n".trim();
    var pugCodeOutline = "\nbutton.btn.btn-outline-red(type='button') Red\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/buttons-default/buttons-default.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/buttons-default/buttons-default.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsButtonsDefaultButtonsDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9idXR0b25zLWRlZmF1bHQvYnV0dG9ucy1kZWZhdWx0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/buttons-default/buttons-default.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/buttons-default/buttons-default.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ButtonsDefaultComponent */

  /***/
  function srcModulesStyleReferenceComponentsButtonsDefaultButtonsDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonsDefaultComponent", function () {
      return ButtonsDefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ButtonsDefaultComponent =
    /*#__PURE__*/
    function () {
      function ButtonsDefaultComponent() {
        _classCallCheck(this, ButtonsDefaultComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
        this.codeSamplesOutline = [{
          language: 'pug',
          code: pugCodeOutline
        }];
      }

      _createClass(ButtonsDefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonsDefaultComponent;
    }();

    ButtonsDefaultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-buttons-default',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./buttons-default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-default/buttons-default.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./buttons-default.component.scss */
      "./src/modules/style-reference/components/buttons-default/buttons-default.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ButtonsDefaultComponent);
    var pugCode = "\nbutton.btn.btn-primary(type='button') Primary\n".trim();
    var pugCodeOutline = "\nbutton.btn.btn-outline-primary(type='button') Primary\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/buttons-extending/buttons-extending.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/buttons-extending/buttons-extending.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsButtonsExtendingButtonsExtendingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9idXR0b25zLWV4dGVuZGluZy9idXR0b25zLWV4dGVuZGluZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/buttons-extending/buttons-extending.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/buttons-extending/buttons-extending.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ButtonsExtendingComponent */

  /***/
  function srcModulesStyleReferenceComponentsButtonsExtendingButtonsExtendingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonsExtendingComponent", function () {
      return ButtonsExtendingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ButtonsExtendingComponent =
    /*#__PURE__*/
    function () {
      function ButtonsExtendingComponent() {
        _classCallCheck(this, ButtonsExtendingComponent);

        this.codeSamplesSquare = [{
          language: 'pug',
          code: pugCodeSquare
        }];
        this.codeSamplesShadowed = [{
          language: 'pug',
          code: pugCodeShadowed
        }];
        this.codeSamplesPill = [{
          language: 'pug',
          code: pugCodePill
        }];
        this.codeSamplesDeeper = [{
          language: 'pug',
          code: pugCodeDeeper
        }];
        this.codeSamplesDeeperSquare = [{
          language: 'pug',
          code: pugCodeDeeperSquare
        }];
      }

      _createClass(ButtonsExtendingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonsExtendingComponent;
    }();

    ButtonsExtendingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-buttons-extending',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./buttons-extending.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-extending/buttons-extending.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./buttons-extending.component.scss */
      "./src/modules/style-reference/components/buttons-extending/buttons-extending.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ButtonsExtendingComponent);
    var pugCodeSquare = "\nbutton.btn.btn-primary.rounded-0 Primary\n".trim();
    var pugCodeShadowed = "\nbutton.btn.btn-primary.shadow-sm Primary\n".trim();
    var pugCodePill = "\nbutton.btn.btn-primary.rounded-pill Primary\n".trim();
    var pugCodeDeeper = "\nbutton.btn.btn-primary.rounded-pill.px-4 Primary\n".trim();
    var pugCodeDeeperSquare = "\nbutton.btn.btn-primary.rounded-0.shadow-sm.px-4.py-3.text-uppercase.font-weight-800 Primary\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/buttons-icon/buttons-icon.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/style-reference/components/buttons-icon/buttons-icon.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsButtonsIconButtonsIconComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9idXR0b25zLWljb24vYnV0dG9ucy1pY29uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/buttons-icon/buttons-icon.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/modules/style-reference/components/buttons-icon/buttons-icon.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ButtonsIconComponent */

  /***/
  function srcModulesStyleReferenceComponentsButtonsIconButtonsIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonsIconComponent", function () {
      return ButtonsIconComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ButtonsIconComponent =
    /*#__PURE__*/
    function () {
      function ButtonsIconComponent() {
        _classCallCheck(this, ButtonsIconComponent);

        this.codeSamplesFeather = [{
          language: 'pug',
          code: pugCodeFeather
        }];
        this.codeSamplesFontAwesome = [{
          language: 'pug',
          code: pugCodeFontAwesome
        }];
        this.codeSamplesText = [{
          language: 'pug',
          code: pugCodeText
        }];
        this.codeSamplesOutline = [{
          language: 'pug',
          code: pugCodeOutline
        }];
      }

      _createClass(ButtonsIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonsIconComponent;
    }();

    ButtonsIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-buttons-icon',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./buttons-icon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-icon/buttons-icon.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./buttons-icon.component.scss */
      "./src/modules/style-reference/components/buttons-icon/buttons-icon.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ButtonsIconComponent);
    var pugCodeFeather = "\nbutton.btn.btn-red.sb-btn-icon(type='button')\n    i-feather(name='feather')\n".trim();
    var pugCodeFontAwesome = "\nbutton.btn.btn-red.sb-btn-icon(type='button')\n    fa-icon([icon]='[\"fas\", \"flag\"]')\n".trim();
    var pugCodeText = "\nbutton.btn.btn-red.sb-btn-icon(type='button') S\n".trim();
    var pugCodeOutline = "\nbutton.btn.btn-outline-red.sb-btn-icon(type='button')\n    i-feather(name='zap')\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/buttons-sizing/buttons-sizing.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/buttons-sizing/buttons-sizing.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsButtonsSizingButtonsSizingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9idXR0b25zLXNpemluZy9idXR0b25zLXNpemluZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/buttons-sizing/buttons-sizing.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/components/buttons-sizing/buttons-sizing.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ButtonsSizingComponent */

  /***/
  function srcModulesStyleReferenceComponentsButtonsSizingButtonsSizingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonsSizingComponent", function () {
      return ButtonsSizingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ButtonsSizingComponent =
    /*#__PURE__*/
    function () {
      function ButtonsSizingComponent() {
        _classCallCheck(this, ButtonsSizingComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
        this.codeSamplesIcon = [{
          language: 'pug',
          code: pugCodeIcon
        }];
      }

      _createClass(ButtonsSizingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonsSizingComponent;
    }();

    ButtonsSizingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-buttons-sizing',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./buttons-sizing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-sizing/buttons-sizing.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./buttons-sizing.component.scss */
      "./src/modules/style-reference/components/buttons-sizing/buttons-sizing.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ButtonsSizingComponent);
    var pugCode = "\nbutton.btn.btn-primary.sb-btn-xs Extra Small\n".trim();
    var pugCodeIcon = "\nbutton.btn.btn-primary.sb-btn-xs.sb-btn-icon\n    fa-icon([icon]='[\"fas\", \"flag\"]')\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/buttons-social/buttons-social.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/buttons-social/buttons-social.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsButtonsSocialButtonsSocialComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9idXR0b25zLXNvY2lhbC9idXR0b25zLXNvY2lhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/buttons-social/buttons-social.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/components/buttons-social/buttons-social.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ButtonsSocialComponent */

  /***/
  function srcModulesStyleReferenceComponentsButtonsSocialButtonsSocialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonsSocialComponent", function () {
      return ButtonsSocialComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ButtonsSocialComponent =
    /*#__PURE__*/
    function () {
      function ButtonsSocialComponent() {
        _classCallCheck(this, ButtonsSocialComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(ButtonsSocialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonsSocialComponent;
    }();

    ButtonsSocialComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-buttons-social',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./buttons-social.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-social/buttons-social.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./buttons-social.component.scss */
      "./src/modules/style-reference/components/buttons-social/buttons-social.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ButtonsSocialComponent);
    var pugCode = "\nbutton.my-1.mr-2.btn.sb-btn-facebook\n    fa-icon.mr-2([icon]='[\"fab\", \"facebook\"]')\n    | Facebook\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/buttons-transparent/buttons-transparent.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/buttons-transparent/buttons-transparent.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsButtonsTransparentButtonsTransparentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9idXR0b25zLXRyYW5zcGFyZW50L2J1dHRvbnMtdHJhbnNwYXJlbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/buttons-transparent/buttons-transparent.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/buttons-transparent/buttons-transparent.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: ButtonsTransparentComponent */

  /***/
  function srcModulesStyleReferenceComponentsButtonsTransparentButtonsTransparentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonsTransparentComponent", function () {
      return ButtonsTransparentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ButtonsTransparentComponent =
    /*#__PURE__*/
    function () {
      function ButtonsTransparentComponent() {
        _classCallCheck(this, ButtonsTransparentComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(ButtonsTransparentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonsTransparentComponent;
    }();

    ButtonsTransparentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-buttons-transparent',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./buttons-transparent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/buttons-transparent/buttons-transparent.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./buttons-transparent.component.scss */
      "./src/modules/style-reference/components/buttons-transparent/buttons-transparent.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ButtonsTransparentComponent);
    var pugCode = "\nbutton.my-1.mr-2.btn.sb-btn-transparent-dark.mr-2(type='button') Hover Me!\nbutton.my-1.mr-2.btn.sb-btn-transparent-dark.sb-btn-icon(type='button')\n    i-feather(name='feather')\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-advanced/cards-advanced.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-advanced/cards-advanced.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsCardsAdvancedCardsAdvancedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9jYXJkcy1hZHZhbmNlZC9jYXJkcy1hZHZhbmNlZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-advanced/cards-advanced.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-advanced/cards-advanced.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: CardsAdvancedComponent */

  /***/
  function srcModulesStyleReferenceComponentsCardsAdvancedCardsAdvancedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsAdvancedComponent", function () {
      return CardsAdvancedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardsAdvancedComponent =
    /*#__PURE__*/
    function () {
      function CardsAdvancedComponent() {
        _classCallCheck(this, CardsAdvancedComponent);

        this.codeSamplesDropdown = [{
          language: 'pug',
          code: pugCodeDropdown
        }];
        this.codeSamplesIcons = [{
          language: 'pug',
          code: pugCodeIcons
        }];
        this.codeSamplesButton = [{
          language: 'pug',
          code: pugCodeButton
        }];
        this.codeSamplesInput = [{
          language: 'pug',
          code: pugCodeInput
        }];
      }

      _createClass(CardsAdvancedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "action",
        value: function action() {
          alert('Action');
        }
      }, {
        key: "anotherAction",
        value: function anotherAction() {
          alert('Anbother Action');
        }
      }]);

      return CardsAdvancedComponent;
    }();

    CardsAdvancedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-cards-advanced',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cards-advanced.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-advanced/cards-advanced.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cards-advanced.component.scss */
      "./src/modules/style-reference/components/cards-advanced/cards-advanced.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardsAdvancedComponent);
    var pugCodeDropdown = "\nsbpro-card([headerActions]='true')\n    .card-header\n        | Header Dropdown\n        sbpro-dropdown(\n            placement='bottom-right',\n            animation='animated--fade-in-up',\n            [classes]='[\"no-caret\"]'\n        )\n            .dropdown-trigger\n                i-feather.text-primary(name='more-vertical')\n            .dropdown-items\n                a.dropdown-item(routerLink='/dashboard') Dashboard\n                a.dropdown-item((click)='action()') Action\n                a.dropdown-item((click)='anotherAction()') Another Action\n    .card-body\n        ...\n".trim();
    var pugCodeIcons = "\nsbpro-card([headerActions]='true')\n    .card-header\n        | Header Icons\n        div\n            button.btn.btn-pink.sb-btn-icon.mr-2\n                i-feather(name='heart')\n            button.btn.btn-teal.sb-btn-icon.mr-2\n                i-feather(name='bookmark')\n            button.btn.btn-blue.sb-btn-icon\n                i-feather(name='share')\n    .card-body\n        ...\n".trim();
    var pugCodeButton = "\nsbpro-card([headerActions]='true')\n    .card-header\n        | Header Button\n        button.btn.btn-primary.btn-sm Action\n    .card-body\n        ...\n".trim();
    var pugCodeInput = "\nsbpro-card([headerActions]='true')\n    .card-header\n        | Header Input\n        .form\n            input.form-control(placeholder='Search')\n\n    .card-body\n        ...\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-basic/cards-basic.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-basic/cards-basic.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsCardsBasicCardsBasicComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9jYXJkcy1iYXNpYy9jYXJkcy1iYXNpYy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-basic/cards-basic.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-basic/cards-basic.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: CardsBasicComponent */

  /***/
  function srcModulesStyleReferenceComponentsCardsBasicCardsBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsBasicComponent", function () {
      return CardsBasicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardsBasicComponent =
    /*#__PURE__*/
    function () {
      function CardsBasicComponent() {
        _classCallCheck(this, CardsBasicComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(CardsBasicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardsBasicComponent;
    }();

    CardsBasicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-cards-basic',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cards-basic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-basic/cards-basic.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cards-basic.component.scss */
      "./src/modules/style-reference/components/cards-basic/cards-basic.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardsBasicComponent);
    var pugCode = "\nsbpro-card\n    .card-header Basic Card Example\n    .card-body This is an example of a basic card.\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-collapsable/cards-collapsable.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-collapsable/cards-collapsable.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsCardsCollapsableCardsCollapsableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9jYXJkcy1jb2xsYXBzYWJsZS9jYXJkcy1jb2xsYXBzYWJsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-collapsable/cards-collapsable.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-collapsable/cards-collapsable.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: CardsCollapsableComponent */

  /***/
  function srcModulesStyleReferenceComponentsCardsCollapsableCardsCollapsableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsCollapsableComponent", function () {
      return CardsCollapsableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardsCollapsableComponent =
    /*#__PURE__*/
    function () {
      function CardsCollapsableComponent() {
        _classCallCheck(this, CardsCollapsableComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(CardsCollapsableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardsCollapsableComponent;
    }();

    CardsCollapsableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-cards-collapsable',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cards-collapsable.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-collapsable/cards-collapsable.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cards-collapsable.component.scss */
      "./src/modules/style-reference/components/cards-collapsable/cards-collapsable.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardsCollapsableComponent);
    var pugCode = "\nsbpro-card-collapsable(headerText='Collapsable Card Example')\n    .card-body\n        ...\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-colors/cards-colors.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-colors/cards-colors.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsCardsColorsCardsColorsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9jYXJkcy1jb2xvcnMvY2FyZHMtY29sb3JzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-colors/cards-colors.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-colors/cards-colors.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CardsColorsComponent */

  /***/
  function srcModulesStyleReferenceComponentsCardsColorsCardsColorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsColorsComponent", function () {
      return CardsColorsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardsColorsComponent =
    /*#__PURE__*/
    function () {
      function CardsColorsComponent() {
        _classCallCheck(this, CardsColorsComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
        this.codeSamplesExtended = [{
          language: 'pug',
          code: pugCodeExtended
        }];
      }

      _createClass(CardsColorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardsColorsComponent;
    }();

    CardsColorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-cards-colors',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cards-colors.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-colors/cards-colors.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cards-colors.component.scss */
      "./src/modules/style-reference/components/cards-colors/cards-colors.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardsColorsComponent);
    var pugCode = "\nsbpro-card.mb-4(background='bg-primary', color='text-white')\n    .card-header.text-white Primary Card\n    .card-body\n        ...\n    .card-footer Card Footer\n\nsbpro-card.mb-4(background='bg-light')\n    .card-header.text-dark Light Card\n    .card-body ...\n    .card-footer Card Footer\n".trim();
    var pugCodeExtended = "\nsbpro-card.mb-4(background='bg-red', color='text-white')\n    .card-header.text-white Red Card\n    .card-body\n        ...\n    .card-footer Card Footer\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-icons/cards-icons.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-icons/cards-icons.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsCardsIconsCardsIconsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9jYXJkcy1pY29ucy9jYXJkcy1pY29ucy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-icons/cards-icons.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-icons/cards-icons.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: CardsIconsComponent */

  /***/
  function srcModulesStyleReferenceComponentsCardsIconsCardsIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsIconsComponent", function () {
      return CardsIconsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardsIconsComponent =
    /*#__PURE__*/
    function () {
      function CardsIconsComponent() {
        _classCallCheck(this, CardsIconsComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(CardsIconsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardsIconsComponent;
    }();

    CardsIconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-cards-icons',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cards-icons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-icons/cards-icons.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cards-icons.component.scss */
      "./src/modules/style-reference/components/cards-icons/cards-icons.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardsIconsComponent);
    var pugCode = "\nsbpro-card-icon\n    .card-icon\n        i-feather.text-white-50(name='layers')\n    .card-body\n        h5.card-title Custom Icon Card\n        p.card-text ...\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-images/cards-images.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-images/cards-images.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsCardsImagesCardsImagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9jYXJkcy1pbWFnZXMvY2FyZHMtaW1hZ2VzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-images/cards-images.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-images/cards-images.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CardsImagesComponent */

  /***/
  function srcModulesStyleReferenceComponentsCardsImagesCardsImagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsImagesComponent", function () {
      return CardsImagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardsImagesComponent =
    /*#__PURE__*/
    function () {
      function CardsImagesComponent() {
        _classCallCheck(this, CardsImagesComponent);

        this.codeSamplesCaps = [{
          language: 'pug',
          code: pugCodeCaps
        }];
        this.codeSamplesOverlay = [{
          language: 'pug',
          code: pugCodeOverlay
        }];
        this.codeSamplesSides = [{
          language: 'pug',
          code: pugCodeSides
        }];
      }

      _createClass(CardsImagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardsImagesComponent;
    }();

    CardsImagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-cards-images',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cards-images.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-images/cards-images.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cards-images.component.scss */
      "./src/modules/style-reference/components/cards-images/cards-images.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardsImagesComponent);
    var pugCodeCaps = "\nsbpro-card-image(\n    src='url/to/image',\n    alt='...',\n    placement='top'\n)\n    .card-body\n        h5.card-title Card Image Cap (Top)\n        p.card-text ...\n\nsbpro-card-image(\n    src='url/to/image',\n    alt='...',\n    placement='bottom'\n)\n    .card-body\n        h5.card-title Card Image Cap (Bottom)\n        p.card-text ...\n".trim();
    var pugCodeOverlay = "\nsbpro-card-image(\n    src='url/to/image',\n    alt='...',\n    placement='overlay',\n    background='bg-light',\n    color='text-dark'\n)\n    .card-img-overlay\n        h5.card-title Card Image (Overlay)\n        p.card-text ...\n".trim();
    var pugCodeSides = "\nsbpro-card-image(\n    src='url/to/image',\n    alt='...',\n    placement='left'\n)\n    .card-body\n        h5.card-title Card Image (Left)\n        p.card-text ...\n\nsbpro-card-image(\n    src='url/to/image',\n    alt='...',\n    placement='right'\n)\n    .card-body\n        h5.card-title Card Image (Right)\n        p.card-text ...\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-navigation/cards-navigation.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-navigation/cards-navigation.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsCardsNavigationCardsNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9jYXJkcy1uYXZpZ2F0aW9uL2NhcmRzLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-navigation/cards-navigation.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-navigation/cards-navigation.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: CardsNavigationComponent */

  /***/
  function srcModulesStyleReferenceComponentsCardsNavigationCardsNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsNavigationComponent", function () {
      return CardsNavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardsNavigationComponent =
    /*#__PURE__*/
    function () {
      function CardsNavigationComponent() {
        _classCallCheck(this, CardsNavigationComponent);

        this.codeSamplesTabs = [{
          language: 'pug',
          code: pugCodeTabs
        }];
        this.codeSamplesPills = [{
          language: 'pug',
          code: pugCodeFontPills
        }];
        this.codeSamplesPillsVertical = [{
          language: 'pug',
          code: pugCodePillsVertical
        }];
      }

      _createClass(CardsNavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardsNavigationComponent;
    }();

    CardsNavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-cards-navigation',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cards-navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-navigation/cards-navigation.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cards-navigation.component.scss */
      "./src/modules/style-reference/components/cards-navigation/cards-navigation.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardsNavigationComponent);
    var pugCodeTabs = "\nsbpro-card-navigation(\n    sbproTocItem='Tabs',\n    [navNames]='[\"Overview\", \"Example\"]',\n    [templates]='[overviewTabbed, exampleTabbed]'\n)\n    ng-template(#overviewTabbed)\n        h5.card-title Tabbed Navigation Card\n        p.card-text.\n            The is a custom tab navigation component.\n    ng-template(#exampleTabbed)\n        h5.card-title Example Pane\n        p.card-text.\n            This is an example of another tab pane that you could use within a card with\n            navigation in the header.\n".trim();
    var pugCodeFontPills = "\nsbpro-card-navigation(\n    sbproTocItem='Pills',\n    [navNames]='[\"Overview\", \"Example\"]',\n    [templates]='[overviewPill, examplePill]',\n    navType='pill'\n)\n    ng-template(#overviewPill)\n        h5.card-title Pill Navigation Card\n        p.card-text.\n            The is a custom pill navigation component.\n    ng-template(#examplePill)\n        h5.card-title Example Pane\n        p.card-text.\n            This is an example of another tab pane that you could use within a card with\n            navigation in the header.\n".trim();
    var pugCodePillsVertical = "\nsbpro-card-navigation(\n    sbproTocItem='Pills (Vertical)',\n    [navNames]='[\"Overview\", \"Example\"]',\n    [templates]='[overviewVerticalPill, exampleVerticalPill]',\n    navType='vertical'\n)\n    .card-header Vertical Pill Navigation\n\n    ng-template(#overviewVerticalPill)\n        h5.card-title Vertical Pill Navigation Card\n        p.card-text.\n            The is a custom vertical pill navigation component.\n    ng-template(#exampleVerticalPill)\n        h5.card-title Example Pane\n        p.card-text.\n            This is an example of another tab pane that you could use within a card with\n            navigation in the header.\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-scrollable/cards-scrollable.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-scrollable/cards-scrollable.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsCardsScrollableCardsScrollableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9jYXJkcy1zY3JvbGxhYmxlL2NhcmRzLXNjcm9sbGFibGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/cards-scrollable/cards-scrollable.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/cards-scrollable/cards-scrollable.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: CardsScrollableComponent */

  /***/
  function srcModulesStyleReferenceComponentsCardsScrollableCardsScrollableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsScrollableComponent", function () {
      return CardsScrollableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardsScrollableComponent =
    /*#__PURE__*/
    function () {
      function CardsScrollableComponent() {
        _classCallCheck(this, CardsScrollableComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(CardsScrollableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardsScrollableComponent;
    }();

    CardsScrollableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-cards-scrollable',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cards-scrollable.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/cards-scrollable/cards-scrollable.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cards-scrollable.component.scss */
      "./src/modules/style-reference/components/cards-scrollable/cards-scrollable.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardsScrollableComponent);
    var pugCode = "\nsbpro-card([scrollable]='true')\n    .card-header Scrollable Card Example\n    .card-body\n        sbpro-lorem-ipsum.card-text\n        sbpro-lorem-ipsum.card-text\n        sbpro-lorem-ipsum.card-text\n    .card-footer.small.text-muted Place cursor over card body and scroll!\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/code-sample/code-sample.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/modules/style-reference/components/code-sample/code-sample.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsCodeSampleCodeSampleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9jb2RlLXNhbXBsZS9jb2RlLXNhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/code-sample/code-sample.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/modules/style-reference/components/code-sample/code-sample.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: CodeSampleComponent */

  /***/
  function srcModulesStyleReferenceComponentsCodeSampleCodeSampleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeSampleComponent", function () {
      return CodeSampleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @common/services */
    "./src/modules/app-common/services/index.ts");
    /* harmony import */


    var _modules_style_reference_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/style-reference/services */
    "./src/modules/style-reference/services/index.ts");

    var CodeSampleComponent =
    /*#__PURE__*/
    function () {
      function CodeSampleComponent(changeDetectorRef, prismService, utilityService) {
        _classCallCheck(this, CodeSampleComponent);

        this.changeDetectorRef = changeDetectorRef;
        this.prismService = prismService;
        this.utilityService = utilityService;
        this.selectedIndex = 0;
      }

      _createClass(CodeSampleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.prismService.highlightAll();
        }
      }, {
        key: "setSelectedIndex",
        value: function setSelectedIndex(index) {
          this.selectedIndex = index;
          this.changeDetectorRef.detectChanges();
          this.prismService.highlightAll();
        }
      }, {
        key: "copyToClipboard",
        value: function copyToClipboard(index) {
          this.utilityService.copyToClipboard(this.codeSamples[index].code);
        }
      }]);

      return CodeSampleComponent;
    }();

    CodeSampleComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _modules_style_reference_services__WEBPACK_IMPORTED_MODULE_3__["PrismService"]
      }, {
        type: _common_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CodeSampleComponent.prototype, "codeSamples", void 0);
    CodeSampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-code-sample',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./code-sample.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/code-sample/code-sample.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./code-sample.component.scss */
      "./src/modules/style-reference/components/code-sample/code-sample.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _modules_style_reference_services__WEBPACK_IMPORTED_MODULE_3__["PrismService"], _common_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]])], CodeSampleComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/dropdowns-animated/dropdowns-animated.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/dropdowns-animated/dropdowns-animated.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsDropdownsAnimatedDropdownsAnimatedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9kcm9wZG93bnMtYW5pbWF0ZWQvZHJvcGRvd25zLWFuaW1hdGVkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/dropdowns-animated/dropdowns-animated.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/dropdowns-animated/dropdowns-animated.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: DropdownsAnimatedComponent */

  /***/
  function srcModulesStyleReferenceComponentsDropdownsAnimatedDropdownsAnimatedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownsAnimatedComponent", function () {
      return DropdownsAnimatedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DropdownsAnimatedComponent =
    /*#__PURE__*/
    function () {
      function DropdownsAnimatedComponent() {
        _classCallCheck(this, DropdownsAnimatedComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(DropdownsAnimatedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DropdownsAnimatedComponent;
    }();

    DropdownsAnimatedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-dropdowns-animated',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dropdowns-animated.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/dropdowns-animated/dropdowns-animated.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dropdowns-animated.component.scss */
      "./src/modules/style-reference/components/dropdowns-animated/dropdowns-animated.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DropdownsAnimatedComponent);
    var pugCode = "\nsbpro-dropdown(\n    [classes]='[\"mr-2\", \"mb-4\", \"mb-sm-0\"]',\n    dropdownStyle='text',\n    background='btn-primary'\n)\n    .dropdown-trigger\n        | No Animation\n    .dropdown-items\n        a.dropdown-item Action\n        a.dropdown-item Another action\n        a.dropdown-item Something else here\n\nsbpro-dropdown(\n    [classes]='[\"mr-2\", \"mb-4\", \"mb-sm-0\"]',\n    dropdownStyle='text',\n    background='btn-secondary',\n    animation='animated--fade-in'\n)\n    .dropdown-trigger\n        | Fade In\n    .dropdown-items\n        a.dropdown-item Action\n        a.dropdown-item Another action\n        a.dropdown-item Something else here\n\nsbpro-dropdown(\n    dropdownStyle='text',\n    background='btn-teal',\n    animation='animated--fade-in-up'\n)\n    .dropdown-trigger\n        | Fade In Up\n    .dropdown-items\n        a.dropdown-item Action\n        a.dropdown-item Another action\n        a.dropdown-item Something else here\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/dropdowns-default/dropdowns-default.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/dropdowns-default/dropdowns-default.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsDropdownsDefaultDropdownsDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9kcm9wZG93bnMtZGVmYXVsdC9kcm9wZG93bnMtZGVmYXVsdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/dropdowns-default/dropdowns-default.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/dropdowns-default/dropdowns-default.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: DropdownsDefaultComponent */

  /***/
  function srcModulesStyleReferenceComponentsDropdownsDefaultDropdownsDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownsDefaultComponent", function () {
      return DropdownsDefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DropdownsDefaultComponent =
    /*#__PURE__*/
    function () {
      function DropdownsDefaultComponent() {
        _classCallCheck(this, DropdownsDefaultComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(DropdownsDefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "action",
        value: function action() {
          console.log('action');
        }
      }, {
        key: "anotherAction",
        value: function anotherAction() {
          console.log('anotherAction');
        }
      }]);

      return DropdownsDefaultComponent;
    }();

    DropdownsDefaultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-dropdowns-default',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dropdowns-default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/dropdowns-default/dropdowns-default.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dropdowns-default.component.scss */
      "./src/modules/style-reference/components/dropdowns-default/dropdowns-default.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DropdownsDefaultComponent);
    var pugCode = "\nsbpro-dropdown(\n    dropdownStyle='text',\n    background='btn-primary'\n)\n    .dropdown-trigger\n        | Dropdown Button\n    .dropdown-items\n        a.dropdown-item(routerLink='/dashboard') Dashboard\n        a.dropdown-item((click)='action()') Action\n        a.dropdown-item((click)='anotherAction()') Another Action\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/dropdowns-icons/dropdowns-icons.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/dropdowns-icons/dropdowns-icons.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsDropdownsIconsDropdownsIconsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9kcm9wZG93bnMtaWNvbnMvZHJvcGRvd25zLWljb25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/dropdowns-icons/dropdowns-icons.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/dropdowns-icons/dropdowns-icons.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: DropdownsIconsComponent */

  /***/
  function srcModulesStyleReferenceComponentsDropdownsIconsDropdownsIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownsIconsComponent", function () {
      return DropdownsIconsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DropdownsIconsComponent =
    /*#__PURE__*/
    function () {
      function DropdownsIconsComponent() {
        _classCallCheck(this, DropdownsIconsComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(DropdownsIconsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DropdownsIconsComponent;
    }();

    DropdownsIconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-dropdowns-icons',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dropdowns-icons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/dropdowns-icons/dropdowns-icons.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dropdowns-icons.component.scss */
      "./src/modules/style-reference/components/dropdowns-icons/dropdowns-icons.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DropdownsIconsComponent);
    var pugCode = "\na.dropdown-item\n    .sb-dropdown-item-icon\n        i-feather(name='user')\n    | Profile\na.dropdown-item\n    .sb-dropdown-item-icon\n        i-feather(name='settings')\n    | Settings\n.dropdown-divider\na.dropdown-item\n    .sb-dropdown-item-icon\n        i-feather(name='log-out')\n    | Logout\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/dropdowns-notifications/dropdowns-notifications.component.scss":
  /*!***************************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/dropdowns-notifications/dropdowns-notifications.component.scss ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsDropdownsNotificationsDropdownsNotificationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9kcm9wZG93bnMtbm90aWZpY2F0aW9ucy9kcm9wZG93bnMtbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/dropdowns-notifications/dropdowns-notifications.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/dropdowns-notifications/dropdowns-notifications.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: DropdownsNotificationsComponent */

  /***/
  function srcModulesStyleReferenceComponentsDropdownsNotificationsDropdownsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownsNotificationsComponent", function () {
      return DropdownsNotificationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DropdownsNotificationsComponent =
    /*#__PURE__*/
    function () {
      function DropdownsNotificationsComponent() {
        _classCallCheck(this, DropdownsNotificationsComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(DropdownsNotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DropdownsNotificationsComponent;
    }();

    DropdownsNotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-dropdowns-notifications',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dropdowns-notifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/dropdowns-notifications/dropdowns-notifications.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dropdowns-notifications.component.scss */
      "./src/modules/style-reference/components/dropdowns-notifications/dropdowns-notifications.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DropdownsNotificationsComponent);
    var pugCode = "\na.dropdown-item.sb-dropdown-notifications-item\n    .sb-dropdown-notifications-item-icon.bg-warning\n        i-feather(name='activity')\n    .sb-dropdown-notifications-item-content\n        .sb-dropdown-notifications-item-content-details\n            | Dropdown Item Details\n        .sb-dropdown-notifications-item-content-text\n            | This is the dropdown item text. It will truncate after a fixed width.\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/forms-checkbox-custom/forms-checkbox-custom.component.scss":
  /*!***********************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/forms-checkbox-custom/forms-checkbox-custom.component.scss ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsFormsCheckboxCustomFormsCheckboxCustomComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9mb3Jtcy1jaGVja2JveC1jdXN0b20vZm9ybXMtY2hlY2tib3gtY3VzdG9tLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/forms-checkbox-custom/forms-checkbox-custom.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/forms-checkbox-custom/forms-checkbox-custom.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: FormsCheckboxCustomComponent */

  /***/
  function srcModulesStyleReferenceComponentsFormsCheckboxCustomFormsCheckboxCustomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsCheckboxCustomComponent", function () {
      return FormsCheckboxCustomComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormsCheckboxCustomComponent =
    /*#__PURE__*/
    function () {
      function FormsCheckboxCustomComponent() {
        _classCallCheck(this, FormsCheckboxCustomComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
        this.codeSamplesRadio = [{
          language: 'pug',
          code: pugCodeRadio
        }];
      }

      _createClass(FormsCheckboxCustomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormsCheckboxCustomComponent;
    }();

    FormsCheckboxCustomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-forms-checkbox-custom',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forms-checkbox-custom.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/forms-checkbox-custom/forms-checkbox-custom.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forms-checkbox-custom.component.scss */
      "./src/modules/style-reference/components/forms-checkbox-custom/forms-checkbox-custom.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FormsCheckboxCustomComponent);
    var pugCode = "\n.custom-control.custom-checkbox\n    input#customCheck1.custom-control-input(type='checkbox')\n    label.custom-control-label(for='customCheck1') Custom Checkbox 1\n".trim();
    var pugCodeRadio = "\n.custom-control.custom-radio\n    input#customRadio1.custom-control-input(type='radio', name='customRadio')\n    label.custom-control-label(for='customRadio1') Toggle this custom radio\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/forms-checkbox-solid/forms-checkbox-solid.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/forms-checkbox-solid/forms-checkbox-solid.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsFormsCheckboxSolidFormsCheckboxSolidComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9mb3Jtcy1jaGVja2JveC1zb2xpZC9mb3Jtcy1jaGVja2JveC1zb2xpZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/forms-checkbox-solid/forms-checkbox-solid.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/forms-checkbox-solid/forms-checkbox-solid.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: FormsCheckboxSolidComponent */

  /***/
  function srcModulesStyleReferenceComponentsFormsCheckboxSolidFormsCheckboxSolidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsCheckboxSolidComponent", function () {
      return FormsCheckboxSolidComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormsCheckboxSolidComponent =
    /*#__PURE__*/
    function () {
      function FormsCheckboxSolidComponent() {
        _classCallCheck(this, FormsCheckboxSolidComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
        this.codeSamplesRadio = [{
          language: 'pug',
          code: pugCodeRadio
        }];
      }

      _createClass(FormsCheckboxSolidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormsCheckboxSolidComponent;
    }();

    FormsCheckboxSolidComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-forms-checkbox-solid',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forms-checkbox-solid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/forms-checkbox-solid/forms-checkbox-solid.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forms-checkbox-solid.component.scss */
      "./src/modules/style-reference/components/forms-checkbox-solid/forms-checkbox-solid.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FormsCheckboxSolidComponent);
    var pugCode = "\n.custom-control.custom-checkbox.sb-custom-control-solid\n    input#customSolidCheck1.custom-control-input(type='checkbox')\n    label.custom-control-label(for='customSolidCheck1') Custom Solid Checkbox 1\n".trim();
    var pugCodeRadio = "\n.custom-control.custom-radio.sb-custom-control-solid\n    input#customSolidRadio1.custom-control-input(type='radio', name='customSolidRadio')\n    label.custom-control-label(for='customSolidRadio1') Toggle this custom radio\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/forms-default/forms-default.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/components/forms-default/forms-default.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsFormsDefaultFormsDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9mb3Jtcy1kZWZhdWx0L2Zvcm1zLWRlZmF1bHQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/forms-default/forms-default.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/style-reference/components/forms-default/forms-default.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: FormsDefaultComponent */

  /***/
  function srcModulesStyleReferenceComponentsFormsDefaultFormsDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsDefaultComponent", function () {
      return FormsDefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormsDefaultComponent =
    /*#__PURE__*/
    function () {
      function FormsDefaultComponent() {
        _classCallCheck(this, FormsDefaultComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(FormsDefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormsDefaultComponent;
    }();

    FormsDefaultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-forms-default',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forms-default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/forms-default/forms-default.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forms-default.component.scss */
      "./src/modules/style-reference/components/forms-default/forms-default.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FormsDefaultComponent);
    var pugCode = "\nform\n    .form-group\n        label(for='exampleFormControlInput1') Email address\n        input#exampleFormControlInput1.form-control(type='email', placeholder='name@example.com')\n    .form-group\n        label(for='exampleFormControlSelect1') Example select\n        select#exampleFormControlSelect1.form-control\n            option 1\n            option 2\n            option 3\n            option 4\n            option 5\n    .form-group\n        label(for='exampleFormControlSelect2') Example multiple select\n        select#exampleFormControlSelect2.form-control(multiple='')\n            option 1\n            option 2\n            option 3\n            option 4\n            option 5\n    .form-group\n        label(for='exampleFormControlTextarea1') Example textarea\n        textarea#exampleFormControlTextarea1.form-control(rows='3')\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/forms-solid/forms-solid.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/modules/style-reference/components/forms-solid/forms-solid.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsFormsSolidFormsSolidComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9mb3Jtcy1zb2xpZC9mb3Jtcy1zb2xpZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/forms-solid/forms-solid.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/modules/style-reference/components/forms-solid/forms-solid.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: FormsSolidComponent */

  /***/
  function srcModulesStyleReferenceComponentsFormsSolidFormsSolidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsSolidComponent", function () {
      return FormsSolidComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormsSolidComponent =
    /*#__PURE__*/
    function () {
      function FormsSolidComponent() {
        _classCallCheck(this, FormsSolidComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(FormsSolidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormsSolidComponent;
    }();

    FormsSolidComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-forms-solid',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forms-solid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/forms-solid/forms-solid.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forms-solid.component.scss */
      "./src/modules/style-reference/components/forms-solid/forms-solid.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FormsSolidComponent);
    var pugCode = "\nform\n    .form-group\n        label(for='exampleSolidFormControlInput1') Email address\n        input#exampleSolidFormControlInput1.form-control.sb-form-control-solid(type='email', placeholder='name@example.com')\n    .form-group\n        label(for='exampleSolidFormControlSelect1') Example select\n        select#exampleSolidFormControlSelect1.form-control.sb-form-control-solid\n            option 1\n            option 2\n            option 3\n            option 4\n            option 5\n    .form-group\n        label(for='exampleSolidFormControlSelect2') Example multiple select\n        select#exampleSolidFormControlSelect2.form-control.sb-form-control-solid(multiple='')\n            option 1\n            option 2\n            option 3\n            option 4\n            option 5\n    .form-group\n        label(for='exampleSolidFormControlTextarea1') Example textarea\n        textarea#exampleSolidFormControlTextarea1.form-control.sb-form-control-solid(rows='3')\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/index.ts":
  /*!*********************************************************!*\
    !*** ./src/modules/style-reference/components/index.ts ***!
    \*********************************************************/

  /*! exports provided: components, AlertsDefaultComponent, AlertsExtendedComponent, AlertsIconComponent, AlertsSolidComponent, AnimationsFadeInUpComponent, AnimationsFadeInComponent, BackgroundDefaultComponent, BackgroundExpandedComponent, BackgroundGradientComponent, BackgroundGrayscaleComponent, BordersColorsComponent, BordersDefaultComponent, BordersRadiusSizeComponent, BordersRadiusComponent, BordersThicknessComponent, BordersUsageExamplesComponent, ButtonsCustomComponent, ButtonsDefaultComponent, ButtonsExtendingComponent, ButtonsIconComponent, ButtonsSizingComponent, ButtonsSocialComponent, ButtonsTransparentComponent, CardsAdvancedComponent, CardsBasicComponent, CardsCollapsableComponent, CardsColorsComponent, CardsIconsComponent, CardsImagesComponent, CardsNavigationComponent, CardsScrollableComponent, DropdownsAnimatedComponent, DropdownsDefaultComponent, DropdownsIconsComponent, DropdownsNotificationsComponent, FormsCheckboxCustomComponent, FormsCheckboxSolidComponent, FormsDefaultComponent, FormsSolidComponent, NavigationSideComponent, NavigationStickyComponent, ShadowsDefaultComponent, ShadowsExtendedComponent, TypographyColorComponent, TypographyGrayscaleComponent, TypographyWeightComponent, ModalsDefaultComponent, ModalsScrollableComponent, ModalsVerticallyCenteredComponent, ModalsSizingComponent, ProgressDefaultComponent, ProgressLabelsComponent, ProgressColorsComponent, ProgressStripedComponent, ProgressCardComponent, ToastDemoComponent, ToastColorsComponent, TooltipsDefaultComponent, TooltipsPopoversComponent, CodeSampleComponent, AlertsContentComponent, BadgesDefaultComponent, BadgesExtendedComponent, BadgesSizingComponent */

  /***/
  function srcModulesStyleReferenceComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _alerts_content_alerts_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alerts-content/alerts-content.component */
    "./src/modules/style-reference/components/alerts-content/alerts-content.component.ts");
    /* harmony import */


    var _alerts_default_alerts_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./alerts-default/alerts-default.component */
    "./src/modules/style-reference/components/alerts-default/alerts-default.component.ts");
    /* harmony import */


    var _alerts_extended_alerts_extended_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alerts-extended/alerts-extended.component */
    "./src/modules/style-reference/components/alerts-extended/alerts-extended.component.ts");
    /* harmony import */


    var _alerts_icon_alerts_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./alerts-icon/alerts-icon.component */
    "./src/modules/style-reference/components/alerts-icon/alerts-icon.component.ts");
    /* harmony import */


    var _alerts_solid_alerts_solid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./alerts-solid/alerts-solid.component */
    "./src/modules/style-reference/components/alerts-solid/alerts-solid.component.ts");
    /* harmony import */


    var _animations_fade_in_up_animations_fade_in_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./animations-fade-in-up/animations-fade-in-up.component */
    "./src/modules/style-reference/components/animations-fade-in-up/animations-fade-in-up.component.ts");
    /* harmony import */


    var _animations_fade_in_animations_fade_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./animations-fade-in/animations-fade-in.component */
    "./src/modules/style-reference/components/animations-fade-in/animations-fade-in.component.ts");
    /* harmony import */


    var _background_default_background_default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./background-default/background-default.component */
    "./src/modules/style-reference/components/background-default/background-default.component.ts");
    /* harmony import */


    var _background_expanded_background_expanded_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./background-expanded/background-expanded.component */
    "./src/modules/style-reference/components/background-expanded/background-expanded.component.ts");
    /* harmony import */


    var _background_gradient_background_gradient_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./background-gradient/background-gradient.component */
    "./src/modules/style-reference/components/background-gradient/background-gradient.component.ts");
    /* harmony import */


    var _background_grayscale_background_grayscale_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./background-grayscale/background-grayscale.component */
    "./src/modules/style-reference/components/background-grayscale/background-grayscale.component.ts");
    /* harmony import */


    var _badges_default_badges_default_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./badges-default/badges-default.component */
    "./src/modules/style-reference/components/badges-default/badges-default.component.ts");
    /* harmony import */


    var _badges_extended_badges_extended_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./badges-extended/badges-extended.component */
    "./src/modules/style-reference/components/badges-extended/badges-extended.component.ts");
    /* harmony import */


    var _badges_sizing_badges_sizing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./badges-sizing/badges-sizing.component */
    "./src/modules/style-reference/components/badges-sizing/badges-sizing.component.ts");
    /* harmony import */


    var _borders_colors_borders_colors_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./borders-colors/borders-colors.component */
    "./src/modules/style-reference/components/borders-colors/borders-colors.component.ts");
    /* harmony import */


    var _borders_default_borders_default_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./borders-default/borders-default.component */
    "./src/modules/style-reference/components/borders-default/borders-default.component.ts");
    /* harmony import */


    var _borders_radius_size_borders_radius_size_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./borders-radius-size/borders-radius-size.component */
    "./src/modules/style-reference/components/borders-radius-size/borders-radius-size.component.ts");
    /* harmony import */


    var _borders_radius_borders_radius_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./borders-radius/borders-radius.component */
    "./src/modules/style-reference/components/borders-radius/borders-radius.component.ts");
    /* harmony import */


    var _borders_thickness_borders_thickness_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./borders-thickness/borders-thickness.component */
    "./src/modules/style-reference/components/borders-thickness/borders-thickness.component.ts");
    /* harmony import */


    var _borders_usage_examples_borders_usage_examples_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./borders-usage-examples/borders-usage-examples.component */
    "./src/modules/style-reference/components/borders-usage-examples/borders-usage-examples.component.ts");
    /* harmony import */


    var _buttons_custom_buttons_custom_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./buttons-custom/buttons-custom.component */
    "./src/modules/style-reference/components/buttons-custom/buttons-custom.component.ts");
    /* harmony import */


    var _buttons_default_buttons_default_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./buttons-default/buttons-default.component */
    "./src/modules/style-reference/components/buttons-default/buttons-default.component.ts");
    /* harmony import */


    var _buttons_extending_buttons_extending_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./buttons-extending/buttons-extending.component */
    "./src/modules/style-reference/components/buttons-extending/buttons-extending.component.ts");
    /* harmony import */


    var _buttons_icon_buttons_icon_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./buttons-icon/buttons-icon.component */
    "./src/modules/style-reference/components/buttons-icon/buttons-icon.component.ts");
    /* harmony import */


    var _buttons_sizing_buttons_sizing_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./buttons-sizing/buttons-sizing.component */
    "./src/modules/style-reference/components/buttons-sizing/buttons-sizing.component.ts");
    /* harmony import */


    var _buttons_social_buttons_social_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./buttons-social/buttons-social.component */
    "./src/modules/style-reference/components/buttons-social/buttons-social.component.ts");
    /* harmony import */


    var _buttons_transparent_buttons_transparent_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./buttons-transparent/buttons-transparent.component */
    "./src/modules/style-reference/components/buttons-transparent/buttons-transparent.component.ts");
    /* harmony import */


    var _cards_advanced_cards_advanced_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./cards-advanced/cards-advanced.component */
    "./src/modules/style-reference/components/cards-advanced/cards-advanced.component.ts");
    /* harmony import */


    var _cards_basic_cards_basic_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./cards-basic/cards-basic.component */
    "./src/modules/style-reference/components/cards-basic/cards-basic.component.ts");
    /* harmony import */


    var _cards_collapsable_cards_collapsable_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./cards-collapsable/cards-collapsable.component */
    "./src/modules/style-reference/components/cards-collapsable/cards-collapsable.component.ts");
    /* harmony import */


    var _cards_colors_cards_colors_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./cards-colors/cards-colors.component */
    "./src/modules/style-reference/components/cards-colors/cards-colors.component.ts");
    /* harmony import */


    var _cards_icons_cards_icons_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./cards-icons/cards-icons.component */
    "./src/modules/style-reference/components/cards-icons/cards-icons.component.ts");
    /* harmony import */


    var _cards_images_cards_images_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./cards-images/cards-images.component */
    "./src/modules/style-reference/components/cards-images/cards-images.component.ts");
    /* harmony import */


    var _cards_navigation_cards_navigation_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./cards-navigation/cards-navigation.component */
    "./src/modules/style-reference/components/cards-navigation/cards-navigation.component.ts");
    /* harmony import */


    var _cards_scrollable_cards_scrollable_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./cards-scrollable/cards-scrollable.component */
    "./src/modules/style-reference/components/cards-scrollable/cards-scrollable.component.ts");
    /* harmony import */


    var _code_sample_code_sample_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./code-sample/code-sample.component */
    "./src/modules/style-reference/components/code-sample/code-sample.component.ts");
    /* harmony import */


    var _dropdowns_animated_dropdowns_animated_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./dropdowns-animated/dropdowns-animated.component */
    "./src/modules/style-reference/components/dropdowns-animated/dropdowns-animated.component.ts");
    /* harmony import */


    var _dropdowns_default_dropdowns_default_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./dropdowns-default/dropdowns-default.component */
    "./src/modules/style-reference/components/dropdowns-default/dropdowns-default.component.ts");
    /* harmony import */


    var _dropdowns_icons_dropdowns_icons_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./dropdowns-icons/dropdowns-icons.component */
    "./src/modules/style-reference/components/dropdowns-icons/dropdowns-icons.component.ts");
    /* harmony import */


    var _dropdowns_notifications_dropdowns_notifications_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./dropdowns-notifications/dropdowns-notifications.component */
    "./src/modules/style-reference/components/dropdowns-notifications/dropdowns-notifications.component.ts");
    /* harmony import */


    var _forms_checkbox_custom_forms_checkbox_custom_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./forms-checkbox-custom/forms-checkbox-custom.component */
    "./src/modules/style-reference/components/forms-checkbox-custom/forms-checkbox-custom.component.ts");
    /* harmony import */


    var _forms_checkbox_solid_forms_checkbox_solid_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./forms-checkbox-solid/forms-checkbox-solid.component */
    "./src/modules/style-reference/components/forms-checkbox-solid/forms-checkbox-solid.component.ts");
    /* harmony import */


    var _forms_default_forms_default_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./forms-default/forms-default.component */
    "./src/modules/style-reference/components/forms-default/forms-default.component.ts");
    /* harmony import */


    var _forms_solid_forms_solid_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./forms-solid/forms-solid.component */
    "./src/modules/style-reference/components/forms-solid/forms-solid.component.ts");
    /* harmony import */


    var _modals_default_modals_default_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./modals-default/modals-default.component */
    "./src/modules/style-reference/components/modals-default/modals-default.component.ts");
    /* harmony import */


    var _modals_scrollable_modals_scrollable_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./modals-scrollable/modals-scrollable.component */
    "./src/modules/style-reference/components/modals-scrollable/modals-scrollable.component.ts");
    /* harmony import */


    var _modals_sizing_modals_sizing_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./modals-sizing/modals-sizing.component */
    "./src/modules/style-reference/components/modals-sizing/modals-sizing.component.ts");
    /* harmony import */


    var _modals_vertically_centered_modals_vertically_centered_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./modals-vertically-centered/modals-vertically-centered.component */
    "./src/modules/style-reference/components/modals-vertically-centered/modals-vertically-centered.component.ts");
    /* harmony import */


    var _navigation_side_navigation_side_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./navigation-side/navigation-side.component */
    "./src/modules/style-reference/components/navigation-side/navigation-side.component.ts");
    /* harmony import */


    var _navigation_sticky_navigation_sticky_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./navigation-sticky/navigation-sticky.component */
    "./src/modules/style-reference/components/navigation-sticky/navigation-sticky.component.ts");
    /* harmony import */


    var _progress_card_progress_card_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./progress-card/progress-card.component */
    "./src/modules/style-reference/components/progress-card/progress-card.component.ts");
    /* harmony import */


    var _progress_colors_progress_colors_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./progress-colors/progress-colors.component */
    "./src/modules/style-reference/components/progress-colors/progress-colors.component.ts");
    /* harmony import */


    var _progress_default_progress_default_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./progress-default/progress-default.component */
    "./src/modules/style-reference/components/progress-default/progress-default.component.ts");
    /* harmony import */


    var _progress_labels_progress_labels_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./progress-labels/progress-labels.component */
    "./src/modules/style-reference/components/progress-labels/progress-labels.component.ts");
    /* harmony import */


    var _progress_striped_progress_striped_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./progress-striped/progress-striped.component */
    "./src/modules/style-reference/components/progress-striped/progress-striped.component.ts");
    /* harmony import */


    var _shadows_default_shadows_default_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./shadows-default/shadows-default.component */
    "./src/modules/style-reference/components/shadows-default/shadows-default.component.ts");
    /* harmony import */


    var _shadows_extended_shadows_extended_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./shadows-extended/shadows-extended.component */
    "./src/modules/style-reference/components/shadows-extended/shadows-extended.component.ts");
    /* harmony import */


    var _toast_colors_toast_colors_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./toast-colors/toast-colors.component */
    "./src/modules/style-reference/components/toast-colors/toast-colors.component.ts");
    /* harmony import */


    var _toast_demo_toast_demo_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./toast-demo/toast-demo.component */
    "./src/modules/style-reference/components/toast-demo/toast-demo.component.ts");
    /* harmony import */


    var _tooltips_default_tooltips_default_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./tooltips-default/tooltips-default.component */
    "./src/modules/style-reference/components/tooltips-default/tooltips-default.component.ts");
    /* harmony import */


    var _tooltips_popovers_tooltips_popovers_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./tooltips-popovers/tooltips-popovers.component */
    "./src/modules/style-reference/components/tooltips-popovers/tooltips-popovers.component.ts");
    /* harmony import */


    var _typography_color_typography_color_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! ./typography-color/typography-color.component */
    "./src/modules/style-reference/components/typography-color/typography-color.component.ts");
    /* harmony import */


    var _typography_grayscale_typography_grayscale_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! ./typography-grayscale/typography-grayscale.component */
    "./src/modules/style-reference/components/typography-grayscale/typography-grayscale.component.ts");
    /* harmony import */


    var _typography_weight_typography_weight_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! ./typography-weight/typography-weight.component */
    "./src/modules/style-reference/components/typography-weight/typography-weight.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertsDefaultComponent", function () {
      return _alerts_default_alerts_default_component__WEBPACK_IMPORTED_MODULE_2__["AlertsDefaultComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertsExtendedComponent", function () {
      return _alerts_extended_alerts_extended_component__WEBPACK_IMPORTED_MODULE_3__["AlertsExtendedComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertsIconComponent", function () {
      return _alerts_icon_alerts_icon_component__WEBPACK_IMPORTED_MODULE_4__["AlertsIconComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertsSolidComponent", function () {
      return _alerts_solid_alerts_solid_component__WEBPACK_IMPORTED_MODULE_5__["AlertsSolidComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AnimationsFadeInUpComponent", function () {
      return _animations_fade_in_up_animations_fade_in_up_component__WEBPACK_IMPORTED_MODULE_6__["AnimationsFadeInUpComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AnimationsFadeInComponent", function () {
      return _animations_fade_in_animations_fade_in_component__WEBPACK_IMPORTED_MODULE_7__["AnimationsFadeInComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundDefaultComponent", function () {
      return _background_default_background_default_component__WEBPACK_IMPORTED_MODULE_8__["BackgroundDefaultComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundExpandedComponent", function () {
      return _background_expanded_background_expanded_component__WEBPACK_IMPORTED_MODULE_9__["BackgroundExpandedComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundGradientComponent", function () {
      return _background_gradient_background_gradient_component__WEBPACK_IMPORTED_MODULE_10__["BackgroundGradientComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundGrayscaleComponent", function () {
      return _background_grayscale_background_grayscale_component__WEBPACK_IMPORTED_MODULE_11__["BackgroundGrayscaleComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BordersColorsComponent", function () {
      return _borders_colors_borders_colors_component__WEBPACK_IMPORTED_MODULE_15__["BordersColorsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BordersDefaultComponent", function () {
      return _borders_default_borders_default_component__WEBPACK_IMPORTED_MODULE_16__["BordersDefaultComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BordersRadiusSizeComponent", function () {
      return _borders_radius_size_borders_radius_size_component__WEBPACK_IMPORTED_MODULE_17__["BordersRadiusSizeComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BordersRadiusComponent", function () {
      return _borders_radius_borders_radius_component__WEBPACK_IMPORTED_MODULE_18__["BordersRadiusComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BordersThicknessComponent", function () {
      return _borders_thickness_borders_thickness_component__WEBPACK_IMPORTED_MODULE_19__["BordersThicknessComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BordersUsageExamplesComponent", function () {
      return _borders_usage_examples_borders_usage_examples_component__WEBPACK_IMPORTED_MODULE_20__["BordersUsageExamplesComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonsCustomComponent", function () {
      return _buttons_custom_buttons_custom_component__WEBPACK_IMPORTED_MODULE_21__["ButtonsCustomComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonsDefaultComponent", function () {
      return _buttons_default_buttons_default_component__WEBPACK_IMPORTED_MODULE_22__["ButtonsDefaultComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonsExtendingComponent", function () {
      return _buttons_extending_buttons_extending_component__WEBPACK_IMPORTED_MODULE_23__["ButtonsExtendingComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonsIconComponent", function () {
      return _buttons_icon_buttons_icon_component__WEBPACK_IMPORTED_MODULE_24__["ButtonsIconComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonsSizingComponent", function () {
      return _buttons_sizing_buttons_sizing_component__WEBPACK_IMPORTED_MODULE_25__["ButtonsSizingComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonsSocialComponent", function () {
      return _buttons_social_buttons_social_component__WEBPACK_IMPORTED_MODULE_26__["ButtonsSocialComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonsTransparentComponent", function () {
      return _buttons_transparent_buttons_transparent_component__WEBPACK_IMPORTED_MODULE_27__["ButtonsTransparentComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardsAdvancedComponent", function () {
      return _cards_advanced_cards_advanced_component__WEBPACK_IMPORTED_MODULE_28__["CardsAdvancedComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardsBasicComponent", function () {
      return _cards_basic_cards_basic_component__WEBPACK_IMPORTED_MODULE_29__["CardsBasicComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardsCollapsableComponent", function () {
      return _cards_collapsable_cards_collapsable_component__WEBPACK_IMPORTED_MODULE_30__["CardsCollapsableComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardsColorsComponent", function () {
      return _cards_colors_cards_colors_component__WEBPACK_IMPORTED_MODULE_31__["CardsColorsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardsIconsComponent", function () {
      return _cards_icons_cards_icons_component__WEBPACK_IMPORTED_MODULE_32__["CardsIconsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardsImagesComponent", function () {
      return _cards_images_cards_images_component__WEBPACK_IMPORTED_MODULE_33__["CardsImagesComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardsNavigationComponent", function () {
      return _cards_navigation_cards_navigation_component__WEBPACK_IMPORTED_MODULE_34__["CardsNavigationComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardsScrollableComponent", function () {
      return _cards_scrollable_cards_scrollable_component__WEBPACK_IMPORTED_MODULE_35__["CardsScrollableComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownsAnimatedComponent", function () {
      return _dropdowns_animated_dropdowns_animated_component__WEBPACK_IMPORTED_MODULE_37__["DropdownsAnimatedComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownsDefaultComponent", function () {
      return _dropdowns_default_dropdowns_default_component__WEBPACK_IMPORTED_MODULE_38__["DropdownsDefaultComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownsIconsComponent", function () {
      return _dropdowns_icons_dropdowns_icons_component__WEBPACK_IMPORTED_MODULE_39__["DropdownsIconsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownsNotificationsComponent", function () {
      return _dropdowns_notifications_dropdowns_notifications_component__WEBPACK_IMPORTED_MODULE_40__["DropdownsNotificationsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormsCheckboxCustomComponent", function () {
      return _forms_checkbox_custom_forms_checkbox_custom_component__WEBPACK_IMPORTED_MODULE_41__["FormsCheckboxCustomComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormsCheckboxSolidComponent", function () {
      return _forms_checkbox_solid_forms_checkbox_solid_component__WEBPACK_IMPORTED_MODULE_42__["FormsCheckboxSolidComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormsDefaultComponent", function () {
      return _forms_default_forms_default_component__WEBPACK_IMPORTED_MODULE_43__["FormsDefaultComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormsSolidComponent", function () {
      return _forms_solid_forms_solid_component__WEBPACK_IMPORTED_MODULE_44__["FormsSolidComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NavigationSideComponent", function () {
      return _navigation_side_navigation_side_component__WEBPACK_IMPORTED_MODULE_49__["NavigationSideComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NavigationStickyComponent", function () {
      return _navigation_sticky_navigation_sticky_component__WEBPACK_IMPORTED_MODULE_50__["NavigationStickyComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShadowsDefaultComponent", function () {
      return _shadows_default_shadows_default_component__WEBPACK_IMPORTED_MODULE_56__["ShadowsDefaultComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShadowsExtendedComponent", function () {
      return _shadows_extended_shadows_extended_component__WEBPACK_IMPORTED_MODULE_57__["ShadowsExtendedComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TypographyColorComponent", function () {
      return _typography_color_typography_color_component__WEBPACK_IMPORTED_MODULE_62__["TypographyColorComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TypographyGrayscaleComponent", function () {
      return _typography_grayscale_typography_grayscale_component__WEBPACK_IMPORTED_MODULE_63__["TypographyGrayscaleComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TypographyWeightComponent", function () {
      return _typography_weight_typography_weight_component__WEBPACK_IMPORTED_MODULE_64__["TypographyWeightComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalsDefaultComponent", function () {
      return _modals_default_modals_default_component__WEBPACK_IMPORTED_MODULE_45__["ModalsDefaultComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalsScrollableComponent", function () {
      return _modals_scrollable_modals_scrollable_component__WEBPACK_IMPORTED_MODULE_46__["ModalsScrollableComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalsVerticallyCenteredComponent", function () {
      return _modals_vertically_centered_modals_vertically_centered_component__WEBPACK_IMPORTED_MODULE_48__["ModalsVerticallyCenteredComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalsSizingComponent", function () {
      return _modals_sizing_modals_sizing_component__WEBPACK_IMPORTED_MODULE_47__["ModalsSizingComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgressDefaultComponent", function () {
      return _progress_default_progress_default_component__WEBPACK_IMPORTED_MODULE_53__["ProgressDefaultComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgressLabelsComponent", function () {
      return _progress_labels_progress_labels_component__WEBPACK_IMPORTED_MODULE_54__["ProgressLabelsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgressColorsComponent", function () {
      return _progress_colors_progress_colors_component__WEBPACK_IMPORTED_MODULE_52__["ProgressColorsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgressStripedComponent", function () {
      return _progress_striped_progress_striped_component__WEBPACK_IMPORTED_MODULE_55__["ProgressStripedComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgressCardComponent", function () {
      return _progress_card_progress_card_component__WEBPACK_IMPORTED_MODULE_51__["ProgressCardComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastDemoComponent", function () {
      return _toast_demo_toast_demo_component__WEBPACK_IMPORTED_MODULE_59__["ToastDemoComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastColorsComponent", function () {
      return _toast_colors_toast_colors_component__WEBPACK_IMPORTED_MODULE_58__["ToastColorsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipsDefaultComponent", function () {
      return _tooltips_default_tooltips_default_component__WEBPACK_IMPORTED_MODULE_60__["TooltipsDefaultComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipsPopoversComponent", function () {
      return _tooltips_popovers_tooltips_popovers_component__WEBPACK_IMPORTED_MODULE_61__["TooltipsPopoversComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CodeSampleComponent", function () {
      return _code_sample_code_sample_component__WEBPACK_IMPORTED_MODULE_36__["CodeSampleComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertsContentComponent", function () {
      return _alerts_content_alerts_content_component__WEBPACK_IMPORTED_MODULE_1__["AlertsContentComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BadgesDefaultComponent", function () {
      return _badges_default_badges_default_component__WEBPACK_IMPORTED_MODULE_12__["BadgesDefaultComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BadgesExtendedComponent", function () {
      return _badges_extended_badges_extended_component__WEBPACK_IMPORTED_MODULE_13__["BadgesExtendedComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BadgesSizingComponent", function () {
      return _badges_sizing_badges_sizing_component__WEBPACK_IMPORTED_MODULE_14__["BadgesSizingComponent"];
    });

    var components = [_alerts_default_alerts_default_component__WEBPACK_IMPORTED_MODULE_2__["AlertsDefaultComponent"], _alerts_extended_alerts_extended_component__WEBPACK_IMPORTED_MODULE_3__["AlertsExtendedComponent"], _alerts_icon_alerts_icon_component__WEBPACK_IMPORTED_MODULE_4__["AlertsIconComponent"], _alerts_solid_alerts_solid_component__WEBPACK_IMPORTED_MODULE_5__["AlertsSolidComponent"], _animations_fade_in_animations_fade_in_component__WEBPACK_IMPORTED_MODULE_7__["AnimationsFadeInComponent"], _animations_fade_in_up_animations_fade_in_up_component__WEBPACK_IMPORTED_MODULE_6__["AnimationsFadeInUpComponent"], _background_default_background_default_component__WEBPACK_IMPORTED_MODULE_8__["BackgroundDefaultComponent"], _background_expanded_background_expanded_component__WEBPACK_IMPORTED_MODULE_9__["BackgroundExpandedComponent"], _background_gradient_background_gradient_component__WEBPACK_IMPORTED_MODULE_10__["BackgroundGradientComponent"], _background_grayscale_background_grayscale_component__WEBPACK_IMPORTED_MODULE_11__["BackgroundGrayscaleComponent"], _borders_colors_borders_colors_component__WEBPACK_IMPORTED_MODULE_15__["BordersColorsComponent"], _borders_default_borders_default_component__WEBPACK_IMPORTED_MODULE_16__["BordersDefaultComponent"], _borders_radius_borders_radius_component__WEBPACK_IMPORTED_MODULE_18__["BordersRadiusComponent"], _borders_radius_size_borders_radius_size_component__WEBPACK_IMPORTED_MODULE_17__["BordersRadiusSizeComponent"], _borders_thickness_borders_thickness_component__WEBPACK_IMPORTED_MODULE_19__["BordersThicknessComponent"], _borders_usage_examples_borders_usage_examples_component__WEBPACK_IMPORTED_MODULE_20__["BordersUsageExamplesComponent"], _buttons_custom_buttons_custom_component__WEBPACK_IMPORTED_MODULE_21__["ButtonsCustomComponent"], _buttons_default_buttons_default_component__WEBPACK_IMPORTED_MODULE_22__["ButtonsDefaultComponent"], _buttons_extending_buttons_extending_component__WEBPACK_IMPORTED_MODULE_23__["ButtonsExtendingComponent"], _buttons_icon_buttons_icon_component__WEBPACK_IMPORTED_MODULE_24__["ButtonsIconComponent"], _buttons_sizing_buttons_sizing_component__WEBPACK_IMPORTED_MODULE_25__["ButtonsSizingComponent"], _buttons_social_buttons_social_component__WEBPACK_IMPORTED_MODULE_26__["ButtonsSocialComponent"], _buttons_transparent_buttons_transparent_component__WEBPACK_IMPORTED_MODULE_27__["ButtonsTransparentComponent"], _cards_advanced_cards_advanced_component__WEBPACK_IMPORTED_MODULE_28__["CardsAdvancedComponent"], _cards_basic_cards_basic_component__WEBPACK_IMPORTED_MODULE_29__["CardsBasicComponent"], _cards_collapsable_cards_collapsable_component__WEBPACK_IMPORTED_MODULE_30__["CardsCollapsableComponent"], _cards_colors_cards_colors_component__WEBPACK_IMPORTED_MODULE_31__["CardsColorsComponent"], _cards_icons_cards_icons_component__WEBPACK_IMPORTED_MODULE_32__["CardsIconsComponent"], _cards_images_cards_images_component__WEBPACK_IMPORTED_MODULE_33__["CardsImagesComponent"], _cards_navigation_cards_navigation_component__WEBPACK_IMPORTED_MODULE_34__["CardsNavigationComponent"], _cards_scrollable_cards_scrollable_component__WEBPACK_IMPORTED_MODULE_35__["CardsScrollableComponent"], _dropdowns_animated_dropdowns_animated_component__WEBPACK_IMPORTED_MODULE_37__["DropdownsAnimatedComponent"], _dropdowns_default_dropdowns_default_component__WEBPACK_IMPORTED_MODULE_38__["DropdownsDefaultComponent"], _dropdowns_icons_dropdowns_icons_component__WEBPACK_IMPORTED_MODULE_39__["DropdownsIconsComponent"], _dropdowns_notifications_dropdowns_notifications_component__WEBPACK_IMPORTED_MODULE_40__["DropdownsNotificationsComponent"], _forms_checkbox_custom_forms_checkbox_custom_component__WEBPACK_IMPORTED_MODULE_41__["FormsCheckboxCustomComponent"], _forms_checkbox_solid_forms_checkbox_solid_component__WEBPACK_IMPORTED_MODULE_42__["FormsCheckboxSolidComponent"], _forms_default_forms_default_component__WEBPACK_IMPORTED_MODULE_43__["FormsDefaultComponent"], _forms_solid_forms_solid_component__WEBPACK_IMPORTED_MODULE_44__["FormsSolidComponent"], _navigation_side_navigation_side_component__WEBPACK_IMPORTED_MODULE_49__["NavigationSideComponent"], _navigation_sticky_navigation_sticky_component__WEBPACK_IMPORTED_MODULE_50__["NavigationStickyComponent"], _shadows_default_shadows_default_component__WEBPACK_IMPORTED_MODULE_56__["ShadowsDefaultComponent"], _shadows_extended_shadows_extended_component__WEBPACK_IMPORTED_MODULE_57__["ShadowsExtendedComponent"], _typography_color_typography_color_component__WEBPACK_IMPORTED_MODULE_62__["TypographyColorComponent"], _typography_grayscale_typography_grayscale_component__WEBPACK_IMPORTED_MODULE_63__["TypographyGrayscaleComponent"], _typography_weight_typography_weight_component__WEBPACK_IMPORTED_MODULE_64__["TypographyWeightComponent"], _modals_default_modals_default_component__WEBPACK_IMPORTED_MODULE_45__["ModalsDefaultComponent"], _modals_scrollable_modals_scrollable_component__WEBPACK_IMPORTED_MODULE_46__["ModalsScrollableComponent"], _modals_vertically_centered_modals_vertically_centered_component__WEBPACK_IMPORTED_MODULE_48__["ModalsVerticallyCenteredComponent"], _modals_sizing_modals_sizing_component__WEBPACK_IMPORTED_MODULE_47__["ModalsSizingComponent"], _progress_default_progress_default_component__WEBPACK_IMPORTED_MODULE_53__["ProgressDefaultComponent"], _progress_labels_progress_labels_component__WEBPACK_IMPORTED_MODULE_54__["ProgressLabelsComponent"], _progress_colors_progress_colors_component__WEBPACK_IMPORTED_MODULE_52__["ProgressColorsComponent"], _progress_striped_progress_striped_component__WEBPACK_IMPORTED_MODULE_55__["ProgressStripedComponent"], _progress_card_progress_card_component__WEBPACK_IMPORTED_MODULE_51__["ProgressCardComponent"], _toast_demo_toast_demo_component__WEBPACK_IMPORTED_MODULE_59__["ToastDemoComponent"], _toast_colors_toast_colors_component__WEBPACK_IMPORTED_MODULE_58__["ToastColorsComponent"], _tooltips_default_tooltips_default_component__WEBPACK_IMPORTED_MODULE_60__["TooltipsDefaultComponent"], _tooltips_popovers_tooltips_popovers_component__WEBPACK_IMPORTED_MODULE_61__["TooltipsPopoversComponent"], _code_sample_code_sample_component__WEBPACK_IMPORTED_MODULE_36__["CodeSampleComponent"], _alerts_content_alerts_content_component__WEBPACK_IMPORTED_MODULE_1__["AlertsContentComponent"], _badges_default_badges_default_component__WEBPACK_IMPORTED_MODULE_12__["BadgesDefaultComponent"], _badges_extended_badges_extended_component__WEBPACK_IMPORTED_MODULE_13__["BadgesExtendedComponent"], _badges_sizing_badges_sizing_component__WEBPACK_IMPORTED_MODULE_14__["BadgesSizingComponent"]];
    /***/
  },

  /***/
  "./src/modules/style-reference/components/modals-default/modals-default.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/modals-default/modals-default.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsModalsDefaultModalsDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9tb2RhbHMtZGVmYXVsdC9tb2RhbHMtZGVmYXVsdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/modals-default/modals-default.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/components/modals-default/modals-default.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ModalsDefaultComponent */

  /***/
  function srcModulesStyleReferenceComponentsModalsDefaultModalsDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalsDefaultComponent", function () {
      return ModalsDefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var ModalsDefaultComponent =
    /*#__PURE__*/
    function () {
      function ModalsDefaultComponent(modalService) {
        _classCallCheck(this, ModalsDefaultComponent);

        this.modalService = modalService;
        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }, {
          language: 'ts',
          code: tsCode
        }];
        this.codeSamplesStatic = [{
          language: 'pug',
          code: pugCodeStatic
        }, {
          language: 'ts',
          code: tsCode
        }];
      }

      _createClass(ModalsDefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open(content) {
          var _this = this;

          var modalOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.modalService.open(content, modalOptions).result.then(function (result) {
            console.log("Closed with: ".concat(result));
          }, function (reason) {
            console.log("Dismissed ".concat(_this._getDismissReason(reason)));
          });
        }
      }, {
        key: "_getDismissReason",
        value: function _getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return ModalsDefaultComponent;
    }();

    ModalsDefaultComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    ModalsDefaultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-modals-default',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modals-default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/modals-default/modals-default.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modals-default.component.scss */
      "./src/modules/style-reference/components/modals-default/modals-default.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])], ModalsDefaultComponent);
    var pugCode = "\nbutton.btn.btn-primary(\n    type='button',\n    (click)='open(modalDefault)'\n) Launch Demo Modal\n\nng-template(#modalDefault, let-modal)\n    .modal-header\n        h5.modal-title Default Bootstrap Modal\n        button.close(\n            type='button',\n            aria-label='Close',\n            (click)='modal.dismiss(\"Cross click\")'\n        )\n            span(aria-hidden='true') \xD7\n    .modal-body.\n        This modal window is included with the Bootstrap framework.\n        The styling has been changed for the SB Admin Pro theme.\n    .modal-footer\n        button.btn.btn-secondary(\n            type='button',\n            (click)='modal.close(\"Close Click\")'\n        ) Close\n        button.btn.btn-primary(\n            type='button',\n            (click)='modal.close(\"Save Click\")'\n        ) Save changes\n".trim();
    var tsCode = "\nimport { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';\nimport { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';\n\n@Component({ ... })\n\nexport class ModalsExampleComponent implements OnInit {\n\n    constructor(private modalService: NgbModal) {}\n    ngOnInit() {}\n\n    open(content: TemplateRef<unknown>, modalOptions: NgbModalOptions = {}) {\n        this.modalService.open(content, modalOptions).result.then(\n            result => {\n                console.log(`Closed with: ${result}`);\n            },\n            reason => {\n                console.log(`Dismissed ${this._getDismissReason(reason)}`);\n            }\n        );\n    }\n\n    _getDismissReason(reason: unknown): string {\n        if (reason === ModalDismissReasons.ESC) {\n            return 'by pressing ESC';\n        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {\n            return 'by clicking on a backdrop';\n        } else {\n            return `with: ${reason}`;\n        }\n    }\n}\n".trim();
    var pugCodeStatic = "\nbutton.btn.btn-primary(\n    type='button',\n    (click)='open(modalDefaultStatic, {backdrop: \"static\"})'\n) Launch Static Backdrop Modal\n\nng-template(#modalDefaultStatic, let-modal)\n    .modal-header\n        h5.modal-title Static Backdrop Modal\n        button.close(\n            type='button',\n            aria-label='Close',\n            (click)='modal.dismiss(\"Cross click\")'\n        )\n            span(aria-hidden='true') \xD7\n    .modal-body.\n        When using the <code>&#123;backdrop: \"static\"&#125;</code> NgbModalOptions with a modal window,\n        the user cannot dismiss the modal by clicking outside of the modal pane.\n    .modal-footer\n        button.btn.btn-secondary(\n            type='button',\n            (click)='modal.close(\"Close Click\")'\n        ) Close\n        button.btn.btn-primary(\n            type='button',\n            (click)='modal.close(\"Save Click\")'\n        ) Understood\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/modals-scrollable/modals-scrollable.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/modals-scrollable/modals-scrollable.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsModalsScrollableModalsScrollableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9tb2RhbHMtc2Nyb2xsYWJsZS9tb2RhbHMtc2Nyb2xsYWJsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/modals-scrollable/modals-scrollable.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/modals-scrollable/modals-scrollable.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ModalsScrollableComponent */

  /***/
  function srcModulesStyleReferenceComponentsModalsScrollableModalsScrollableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalsScrollableComponent", function () {
      return ModalsScrollableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var ModalsScrollableComponent =
    /*#__PURE__*/
    function () {
      function ModalsScrollableComponent(modalService) {
        _classCallCheck(this, ModalsScrollableComponent);

        this.modalService = modalService;
        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }, {
          language: 'ts',
          code: tsCode
        }];
        this.codeSamplesModalScroll = [{
          language: 'pug',
          code: pugCodeStatic
        }, {
          language: 'ts',
          code: tsCode
        }];
      }

      _createClass(ModalsScrollableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open(content) {
          var _this2 = this;

          var modalOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.modalService.open(content, modalOptions).result.then(function (result) {
            console.log("Closed with: ".concat(result));
          }, function (reason) {
            console.log("Dismissed ".concat(_this2._getDismissReason(reason)));
          });
        }
      }, {
        key: "_getDismissReason",
        value: function _getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return ModalsScrollableComponent;
    }();

    ModalsScrollableComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    ModalsScrollableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-modals-scrollable',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modals-scrollable.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/modals-scrollable/modals-scrollable.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modals-scrollable.component.scss */
      "./src/modules/style-reference/components/modals-scrollable/modals-scrollable.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])], ModalsScrollableComponent);
    var pugCode = "\nbutton.btn.btn-primary(\n    type='button',\n    (click)='open(modalScrollable)'\n) Launch Scrollable Modal\n\nng-template(#modalScrollable, let-modal)\n    .modal-header\n        h5.modal-title Long Modal with Page Scrolling\n        button.close(\n            type='button',\n            aria-label='Close',\n            (click)='modal.dismiss(\"Cross click\")'\n        )\n            span(aria-hidden='true') \xD7\n    .modal-body\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum.mb-0\n    .modal-footer\n        button.btn.btn-secondary(\n            type='button',\n            (click)='modal.close(\"Close Click\")'\n        ) Close\n        button.btn.btn-primary(\n            type='button',\n            (click)='modal.close(\"Save Click\")'\n        ) Save changes\n\n".trim();
    var tsCode = "\nimport { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';\nimport { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';\n\n@Component({ ... })\n\nexport class ModalsExampleComponent implements OnInit {\n\n    constructor(private modalService: NgbModal) {}\n    ngOnInit() {}\n\n    open(content: TemplateRef<unknown>, modalOptions: NgbModalOptions = {}) {\n        this.modalService.open(content, modalOptions).result.then(\n            result => {\n                console.log(`Closed with: ${result}`);\n            },\n            reason => {\n                console.log(`Dismissed ${this._getDismissReason(reason)}`);\n            }\n        );\n    }\n\n    _getDismissReason(reason: unknown): string {\n        if (reason === ModalDismissReasons.ESC) {\n            return 'by pressing ESC';\n        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {\n            return 'by clicking on a backdrop';\n        } else {\n            return `with: ${reason}`;\n        }\n    }\n}\n".trim();
    var pugCodeStatic = "\nbutton.btn.btn-primary(\n    type='button',\n    (click)='open(modalScrollable, {scrollable: true})'\n) Launch Scrollable Modal\n\nng-template(#modalScrollable, let-modal)\n    .modal-header\n        h5.modal-title Long Modal with Page Scrolling\n        button.close(\n            type='button',\n            aria-label='Close',\n            (click)='modal.dismiss(\"Cross click\")'\n        )\n            span(aria-hidden='true') \xD7\n    .modal-body\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum\n        sbpro-lorem-ipsum.mb-0\n    .modal-footer\n        button.btn.btn-secondary(\n            type='button',\n            (click)='modal.close(\"Close Click\")'\n        ) Close\n        button.btn.btn-primary(\n            type='button',\n            (click)='modal.close(\"Save Click\")'\n        ) Save changes\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/modals-sizing/modals-sizing.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/components/modals-sizing/modals-sizing.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsModalsSizingModalsSizingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9tb2RhbHMtc2l6aW5nL21vZGFscy1zaXppbmcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/modals-sizing/modals-sizing.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/style-reference/components/modals-sizing/modals-sizing.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ModalsSizingComponent */

  /***/
  function srcModulesStyleReferenceComponentsModalsSizingModalsSizingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalsSizingComponent", function () {
      return ModalsSizingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var ModalsSizingComponent =
    /*#__PURE__*/
    function () {
      function ModalsSizingComponent(modalService) {
        _classCallCheck(this, ModalsSizingComponent);

        this.modalService = modalService;
        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }, {
          language: 'ts',
          code: tsCode
        }];
      }

      _createClass(ModalsSizingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open(content) {
          var _this3 = this;

          var modalOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.modalService.open(content, modalOptions).result.then(function (result) {
            console.log("Closed with: ".concat(result));
          }, function (reason) {
            console.log("Dismissed ".concat(_this3._getDismissReason(reason)));
          });
        }
      }, {
        key: "_getDismissReason",
        value: function _getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return ModalsSizingComponent;
    }();

    ModalsSizingComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    ModalsSizingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-modals-sizing',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modals-sizing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/modals-sizing/modals-sizing.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modals-sizing.component.scss */
      "./src/modules/style-reference/components/modals-sizing/modals-sizing.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])], ModalsSizingComponent);
    var pugCode = "\nbutton.btn.btn-primary.mr-1(\n    type='button',\n    (click)='open(modalSizing, {size: \"xl\"})'\n) Extra Large\n\nng-template(#modalSizing, let-modal)\n    .modal-header\n        h5.modal-title Extra Large Modal\n        button.close(type='button', data-dismiss='modal', aria-label='Close')\n            span(aria-hidden='true') \xD7\n    .modal-body\n        p This is an example of an extra large modal!\n    .modal-footer\n        button.btn.btn-secondary(\n            type='button',\n            (click)='modal.close(\"Close Click\")'\n        ) Close\n".trim();
    var tsCode = "\nimport { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';\nimport { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';\n\n@Component({ ... })\n\nexport class ModalsExampleComponent implements OnInit {\n\n    constructor(private modalService: NgbModal) {}\n    ngOnInit() {}\n\n    open(content: TemplateRef<unknown>, modalOptions: NgbModalOptions = {}) {\n        this.modalService.open(content, modalOptions).result.then(\n            result => {\n                console.log(`Closed with: ${result}`);\n            },\n            reason => {\n                console.log(`Dismissed ${this._getDismissReason(reason)}`);\n            }\n        );\n    }\n\n    _getDismissReason(reason: unknown): string {\n        if (reason === ModalDismissReasons.ESC) {\n            return 'by pressing ESC';\n        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {\n            return 'by clicking on a backdrop';\n        } else {\n            return `with: ${reason}`;\n        }\n    }\n}\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/modals-vertically-centered/modals-vertically-centered.component.scss":
  /*!*********************************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/modals-vertically-centered/modals-vertically-centered.component.scss ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsModalsVerticallyCenteredModalsVerticallyCenteredComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9tb2RhbHMtdmVydGljYWxseS1jZW50ZXJlZC9tb2RhbHMtdmVydGljYWxseS1jZW50ZXJlZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/modals-vertically-centered/modals-vertically-centered.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/modals-vertically-centered/modals-vertically-centered.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: ModalsVerticallyCenteredComponent */

  /***/
  function srcModulesStyleReferenceComponentsModalsVerticallyCenteredModalsVerticallyCenteredComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalsVerticallyCenteredComponent", function () {
      return ModalsVerticallyCenteredComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var ModalsVerticallyCenteredComponent =
    /*#__PURE__*/
    function () {
      function ModalsVerticallyCenteredComponent(modalService) {
        _classCallCheck(this, ModalsVerticallyCenteredComponent);

        this.modalService = modalService;
        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }, {
          language: 'ts',
          code: tsCode
        }];
      }

      _createClass(ModalsVerticallyCenteredComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open(content) {
          var _this4 = this;

          var modalOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.modalService.open(content, modalOptions).result.then(function (result) {
            console.log("Closed with: ".concat(result));
          }, function (reason) {
            console.log("Dismissed ".concat(_this4._getDismissReason(reason)));
          });
        }
      }, {
        key: "_getDismissReason",
        value: function _getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return ModalsVerticallyCenteredComponent;
    }();

    ModalsVerticallyCenteredComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    ModalsVerticallyCenteredComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-modals-vertically-centered',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modals-vertically-centered.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/modals-vertically-centered/modals-vertically-centered.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modals-vertically-centered.component.scss */
      "./src/modules/style-reference/components/modals-vertically-centered/modals-vertically-centered.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])], ModalsVerticallyCenteredComponent);
    var pugCode = "\nbutton.btn.btn-primary(\n    type='button',\n    (click)='open(modalVerticallyVentered, {centered: true})'\n) Launch Vertically Centered Modal\n\nng-template(#modalVerticallyVentered, let-modal)\n    .modal-header\n        h5.modal-title Vertically Centered Modal\n        button.close(\n            type='button',\n            aria-label='Close',\n            (click)='modal.dismiss(\"Cross click\")'\n        )\n            span(aria-hidden='true') \xD7\n    .modal-body\n        | The vertically centered modal centers the modal dialog in the center of the page.\n    .modal-footer\n        button.btn.btn-secondary(\n            type='button',\n            (click)='modal.close(\"Close Click\")'\n        ) Close\n        button.btn.btn-primary(\n            type='button',\n            (click)='modal.close(\"Save Click\")'\n        ) Save changes\n".trim();
    var tsCode = "\nimport { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';\nimport { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';\n\n@Component({ ... })\n\nexport class ModalsExampleComponent implements OnInit {\n\n    constructor(private modalService: NgbModal) {}\n    ngOnInit() {}\n\n    open(content: TemplateRef<unknown>, modalOptions: NgbModalOptions = {}) {\n        this.modalService.open(content, modalOptions).result.then(\n            result => {\n                console.log(`Closed with: ${result}`);\n            },\n            reason => {\n                console.log(`Dismissed ${this._getDismissReason(reason)}`);\n            }\n        );\n    }\n\n    _getDismissReason(reason: unknown): string {\n        if (reason === ModalDismissReasons.ESC) {\n            return 'by pressing ESC';\n        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {\n            return 'by clicking on a backdrop';\n        } else {\n            return `with: ${reason}`;\n        }\n    }\n}\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/navigation-side/navigation-side.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/navigation-side/navigation-side.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsNavigationSideNavigationSideComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9uYXZpZ2F0aW9uLXNpZGUvbmF2aWdhdGlvbi1zaWRlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/navigation-side/navigation-side.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/navigation-side/navigation-side.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: NavigationSideComponent */

  /***/
  function srcModulesStyleReferenceComponentsNavigationSideNavigationSideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationSideComponent", function () {
      return NavigationSideComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavigationSideComponent =
    /*#__PURE__*/
    function () {
      function NavigationSideComponent() {
        _classCallCheck(this, NavigationSideComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(NavigationSideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationSideComponent;
    }();

    NavigationSideComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-navigation-side',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navigation-side.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/navigation-side/navigation-side.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./navigation-side.component.scss */
      "./src/modules/style-reference/components/navigation-side/navigation-side.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NavigationSideComponent);
    var pugCode = "\nnav.sb-sidenav.sb-sidenav-light\n    .sb-sidenav-menu\n        .nav\n            .sb-sidenav-menu-heading Heading\n            a.nav-link(href='javascript:void(0);')\n                .sb-nav-link-icon\n                    i-feather(name='feather')\n                | Link\n            a.nav-link(href='javascript:void(0);')\n                .sb-nav-link-icon\n                    i-feather(name='feather')\n                | Another Link\n            a.nav-link.disabled(href='javascript:void(0);')\n                .sb-nav-link-icon\n                    i-feather(name='feather')\n                | Another Link\n    .sb-sidenav-footer\n        | SB Sidenav Footer\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/navigation-sticky/navigation-sticky.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/navigation-sticky/navigation-sticky.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsNavigationStickyNavigationStickyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9uYXZpZ2F0aW9uLXN0aWNreS9uYXZpZ2F0aW9uLXN0aWNreS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/navigation-sticky/navigation-sticky.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/navigation-sticky/navigation-sticky.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: NavigationStickyComponent */

  /***/
  function srcModulesStyleReferenceComponentsNavigationStickyNavigationStickyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationStickyComponent", function () {
      return NavigationStickyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavigationStickyComponent =
    /*#__PURE__*/
    function () {
      function NavigationStickyComponent() {
        _classCallCheck(this, NavigationStickyComponent);
      }

      _createClass(NavigationStickyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationStickyComponent;
    }();

    NavigationStickyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-navigation-sticky',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navigation-sticky.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/navigation-sticky/navigation-sticky.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./navigation-sticky.component.scss */
      "./src/modules/style-reference/components/navigation-sticky/navigation-sticky.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NavigationStickyComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/progress-card/progress-card.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/components/progress-card/progress-card.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsProgressCardProgressCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9wcm9ncmVzcy1jYXJkL3Byb2dyZXNzLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/progress-card/progress-card.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/style-reference/components/progress-card/progress-card.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ProgressCardComponent */

  /***/
  function srcModulesStyleReferenceComponentsProgressCardProgressCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressCardComponent", function () {
      return ProgressCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProgressCardComponent =
    /*#__PURE__*/
    function () {
      function ProgressCardComponent() {
        _classCallCheck(this, ProgressCardComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(ProgressCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressCardComponent;
    }();

    ProgressCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-progress-card-guide',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./progress-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-card/progress-card.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./progress-card.component.scss */
      "./src/modules/style-reference/components/progress-card/progress-card.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProgressCardComponent);
    var pugCode = "\nsbpro-progress-card([value]='25', progressBarColor='bg-danger')\n    .card-header.text-danger 25% Progress Card Example\n    .card-body This is an example of a card with a 25% completed progress bar.\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/progress-colors/progress-colors.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/progress-colors/progress-colors.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsProgressColorsProgressColorsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9wcm9ncmVzcy1jb2xvcnMvcHJvZ3Jlc3MtY29sb3JzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/progress-colors/progress-colors.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/progress-colors/progress-colors.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ProgressColorsComponent */

  /***/
  function srcModulesStyleReferenceComponentsProgressColorsProgressColorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressColorsComponent", function () {
      return ProgressColorsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProgressColorsComponent =
    /*#__PURE__*/
    function () {
      function ProgressColorsComponent() {
        _classCallCheck(this, ProgressColorsComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
        this.codeSamplesExpanded = [{
          language: 'pug',
          code: pugCodeExpanded
        }];
      }

      _createClass(ProgressColorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressColorsComponent;
    }();

    ProgressColorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-progress-colors',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./progress-colors.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-colors/progress-colors.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./progress-colors.component.scss */
      "./src/modules/style-reference/components/progress-colors/progress-colors.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProgressColorsComponent);
    var pugCode = "\nsbpro-progress-bar.mb-3([value]='75', bgColor='bg-primary') .bg-primary\n".trim();
    var pugCodeExpanded = "\nsbpro-progress-bar.mb-3([value]='75', bgColor='bg-red') .bg-red\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/progress-default/progress-default.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/progress-default/progress-default.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsProgressDefaultProgressDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9wcm9ncmVzcy1kZWZhdWx0L3Byb2dyZXNzLWRlZmF1bHQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/progress-default/progress-default.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/progress-default/progress-default.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ProgressDefaultComponent */

  /***/
  function srcModulesStyleReferenceComponentsProgressDefaultProgressDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressDefaultComponent", function () {
      return ProgressDefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProgressDefaultComponent =
    /*#__PURE__*/
    function () {
      function ProgressDefaultComponent() {
        _classCallCheck(this, ProgressDefaultComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(ProgressDefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressDefaultComponent;
    }();

    ProgressDefaultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-progress-default',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./progress-default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-default/progress-default.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./progress-default.component.scss */
      "./src/modules/style-reference/components/progress-default/progress-default.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProgressDefaultComponent);
    var pugCode = "\nsbpro-progress-bar.mb-3([value]='25')\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/progress-labels/progress-labels.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/progress-labels/progress-labels.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsProgressLabelsProgressLabelsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9wcm9ncmVzcy1sYWJlbHMvcHJvZ3Jlc3MtbGFiZWxzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/progress-labels/progress-labels.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/progress-labels/progress-labels.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ProgressLabelsComponent */

  /***/
  function srcModulesStyleReferenceComponentsProgressLabelsProgressLabelsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressLabelsComponent", function () {
      return ProgressLabelsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProgressLabelsComponent =
    /*#__PURE__*/
    function () {
      function ProgressLabelsComponent() {
        _classCallCheck(this, ProgressLabelsComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(ProgressLabelsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressLabelsComponent;
    }();

    ProgressLabelsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-progress-labels',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./progress-labels.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-labels/progress-labels.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./progress-labels.component.scss */
      "./src/modules/style-reference/components/progress-labels/progress-labels.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProgressLabelsComponent);
    var pugCode = "\nsbpro-progress-bar.mb-3([value]='25') 25%\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/progress-striped/progress-striped.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/progress-striped/progress-striped.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsProgressStripedProgressStripedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9wcm9ncmVzcy1zdHJpcGVkL3Byb2dyZXNzLXN0cmlwZWQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/progress-striped/progress-striped.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/progress-striped/progress-striped.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ProgressStripedComponent */

  /***/
  function srcModulesStyleReferenceComponentsProgressStripedProgressStripedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressStripedComponent", function () {
      return ProgressStripedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProgressStripedComponent =
    /*#__PURE__*/
    function () {
      function ProgressStripedComponent() {
        _classCallCheck(this, ProgressStripedComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
        this.codeSamplesAnimated = [{
          language: 'pug',
          code: pugCodeAnimated
        }];
      }

      _createClass(ProgressStripedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressStripedComponent;
    }();

    ProgressStripedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-progress-striped',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./progress-striped.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/progress-striped/progress-striped.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./progress-striped.component.scss */
      "./src/modules/style-reference/components/progress-striped/progress-striped.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProgressStripedComponent);
    var pugCode = "\nsbpro-progress-bar.mb-3([value]='25', [striped]='true', bgColor='bg-success')\n".trim();
    var pugCodeAnimated = "\nsbpro-progress-bar.mb-3([value]='25', [striped]='true', [animated]='true', bgColor='bg-success')\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/shadows-default/shadows-default.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/shadows-default/shadows-default.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsShadowsDefaultShadowsDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9zaGFkb3dzLWRlZmF1bHQvc2hhZG93cy1kZWZhdWx0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/shadows-default/shadows-default.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/shadows-default/shadows-default.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ShadowsDefaultComponent */

  /***/
  function srcModulesStyleReferenceComponentsShadowsDefaultShadowsDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShadowsDefaultComponent", function () {
      return ShadowsDefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShadowsDefaultComponent =
    /*#__PURE__*/
    function () {
      function ShadowsDefaultComponent() {
        _classCallCheck(this, ShadowsDefaultComponent);
      }

      _createClass(ShadowsDefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShadowsDefaultComponent;
    }();

    ShadowsDefaultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-shadows-default',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shadows-default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/shadows-default/shadows-default.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shadows-default.component.scss */
      "./src/modules/style-reference/components/shadows-default/shadows-default.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ShadowsDefaultComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/shadows-extended/shadows-extended.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/shadows-extended/shadows-extended.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsShadowsExtendedShadowsExtendedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy9zaGFkb3dzLWV4dGVuZGVkL3NoYWRvd3MtZXh0ZW5kZWQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/shadows-extended/shadows-extended.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/shadows-extended/shadows-extended.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ShadowsExtendedComponent */

  /***/
  function srcModulesStyleReferenceComponentsShadowsExtendedShadowsExtendedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShadowsExtendedComponent", function () {
      return ShadowsExtendedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShadowsExtendedComponent =
    /*#__PURE__*/
    function () {
      function ShadowsExtendedComponent() {
        _classCallCheck(this, ShadowsExtendedComponent);
      }

      _createClass(ShadowsExtendedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShadowsExtendedComponent;
    }();

    ShadowsExtendedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-shadows-extended',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shadows-extended.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/shadows-extended/shadows-extended.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shadows-extended.component.scss */
      "./src/modules/style-reference/components/shadows-extended/shadows-extended.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ShadowsExtendedComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/toast-colors/toast-colors.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/style-reference/components/toast-colors/toast-colors.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsToastColorsToastColorsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy90b2FzdC1jb2xvcnMvdG9hc3QtY29sb3JzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/toast-colors/toast-colors.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/modules/style-reference/components/toast-colors/toast-colors.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ToastColorsComponent */

  /***/
  function srcModulesStyleReferenceComponentsToastColorsToastColorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastColorsComponent", function () {
      return ToastColorsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ToastColorsComponent =
    /*#__PURE__*/
    function () {
      function ToastColorsComponent() {
        _classCallCheck(this, ToastColorsComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
        this.codeSamplesBackground = [{
          language: 'pug',
          code: pugCodeBackground
        }];
      }

      _createClass(ToastColorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToastColorsComponent;
    }();

    ToastColorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-toast-colors',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./toast-colors.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/toast-colors/toast-colors.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./toast-colors.component.scss */
      "./src/modules/style-reference/components/toast-colors/toast-colors.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ToastColorsComponent);
    var pugCode = "\nsbpro-toast(\n    [header]='toastTextPrimary',\n    body='This toast uses the primary text utility on the toast header.',\n    headerClasses='text-primary'\n)\n\nng-template(#toastTextPrimary)\n    i(data-feather='alert-circle').mr-2\n    strong.mr-auto Primary Text Toast\n    small.text-muted.ml-2 just now\n    button.ml-2.mb-1.close(type='button', data-dismiss='toast', aria-label='Close')\n        span(aria-hidden='true') \xD7\n".trim();
    var pugCodeBackground = "\nsbpro-toast(\n    [header]='toastTextPrimaryWhite',\n    body='This toast uses the primary text utility on the toast header.',\n    headerClasses='bg-primary text-white'\n)\n\nng-template(#toastTextPrimaryWhite)\n    i(data-feather='alert-circle').mr-2.text-white-50\n    strong.mr-auto Primary Background Toast\n    small.text-muted.ml-2.text-white-50 just now\n    button.ml-2.mb-1.close.text-white(type='button', data-dismiss='toast', aria-label='Close')\n        span(aria-hidden='true') \xD7\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/toast-demo/toast-demo.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/modules/style-reference/components/toast-demo/toast-demo.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsToastDemoToastDemoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy90b2FzdC1kZW1vL3RvYXN0LWRlbW8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/toast-demo/toast-demo.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/modules/style-reference/components/toast-demo/toast-demo.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ToastDemoComponent */

  /***/
  function srcModulesStyleReferenceComponentsToastDemoToastDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastDemoComponent", function () {
      return ToastDemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @common/services/toast.service */
    "./src/modules/app-common/services/toast.service.ts");

    var ToastDemoComponent =
    /*#__PURE__*/
    function () {
      function ToastDemoComponent(toastService) {
        _classCallCheck(this, ToastDemoComponent);

        this.toastService = toastService;
        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }, {
          language: 'ts',
          code: tsCode
        }];
        this.codeSamplesManual = [{
          language: 'pug',
          code: pugCodeManual
        }, {
          language: 'ts',
          code: tsCode
        }];
      }

      _createClass(ToastDemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showToast",
        value: function showToast(header, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var defaultOptions = {
            autohide: true,
            delay: 5000
          };
          this.toastService.show(header, body, Object.assign(Object.assign({}, defaultOptions), options));
        }
      }]);

      return ToastDemoComponent;
    }();

    ToastDemoComponent.ctorParameters = function () {
      return [{
        type: _common_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]
      }];
    };

    ToastDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-toast-demo',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./toast-demo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/toast-demo/toast-demo.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./toast-demo.component.scss */
      "./src/modules/style-reference/components/toast-demo/toast-demo.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]])], ToastDemoComponent);
    var pugCode = "\nbutton.btn.btn-primary.mb-3(\n    (click)='showToast(toastHeader, toastBody)'\n) Toast Demo\n\nng-template(#toastHeader, let-toastService='toastService', let-toastID='toastID')\n    i-feather(name='bell').mr-2\n    strong.mr-auto Toast with Autohide\n    small.text-muted.ml-2 just now\n    button.ml-2.mb-1.close(type='button', aria-label='Close', (click)='toastService.remove(toastID)')\n        span(aria-hidden='true') \xD7\n\nng-template(#toastBody).\n    This is an example toast alert, it will dismiss automatically, or you can dismiss it manually.\n".trim();
    var tsCode = "\nimport { Component, OnInit } from '@angular/core';\nimport { ToastMessageData, ToastMessageOptions } from '@common/models';\nimport { ToastService } from '@common/services/toast.service';\n\n@Component({...})\nexport class ToastDemoComponent implements OnInit {\n    constructor(private toastService: ToastService) {}\n    ngOnInit() {}\n    showToast(header: ToastMessageData, body: ToastMessageData, options: ToastMessageOptions = {}) {\n        const defaultOptions = {\n            autohide: true,\n            delay: 5000,\n        };\n        this.toastService.show(header, body, { ...defaultOptions, ...options });\n    }\n}\n".trim();
    var pugCodeManual = "\nbutton.btn.btn-primary.mb-3(\n    (click)='showToast(toastHeaderManual, \"Manual close. This body is a string, not a template\", {autohide: false})'\n) Toast Demo\n\nng-template(#toastHeaderManual, let-toastService='toastService', let-toastID='toastID')\n    i-feather(name='bell').mr-2\n    strong.mr-auto Toast with Manual Dismissal\n    small.text-muted.ml-2 just now\n    button.ml-2.mb-1.close(type='button', aria-label='Close', (click)='toastService.remove(toastID)')\n        span(aria-hidden='true') \xD7\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/tooltips-default/tooltips-default.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/tooltips-default/tooltips-default.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsTooltipsDefaultTooltipsDefaultComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy90b29sdGlwcy1kZWZhdWx0L3Rvb2x0aXBzLWRlZmF1bHQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/tooltips-default/tooltips-default.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/tooltips-default/tooltips-default.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: TooltipsDefaultComponent */

  /***/
  function srcModulesStyleReferenceComponentsTooltipsDefaultTooltipsDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipsDefaultComponent", function () {
      return TooltipsDefaultComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TooltipsDefaultComponent =
    /*#__PURE__*/
    function () {
      function TooltipsDefaultComponent() {
        _classCallCheck(this, TooltipsDefaultComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(TooltipsDefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TooltipsDefaultComponent;
    }();

    TooltipsDefaultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-tooltips-default',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tooltips-default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/tooltips-default/tooltips-default.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tooltips-default.component.scss */
      "./src/modules/style-reference/components/tooltips-default/tooltips-default.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TooltipsDefaultComponent);
    var pugCode = "\nbutton.btn.btn-primary(\n    type='button',\n    placement='top',\n    ngbTooltip='Tooltip on top'\n) Tooltip on top\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/tooltips-popovers/tooltips-popovers.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/tooltips-popovers/tooltips-popovers.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsTooltipsPopoversTooltipsPopoversComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy90b29sdGlwcy1wb3BvdmVycy90b29sdGlwcy1wb3BvdmVycy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/tooltips-popovers/tooltips-popovers.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/tooltips-popovers/tooltips-popovers.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: TooltipsPopoversComponent */

  /***/
  function srcModulesStyleReferenceComponentsTooltipsPopoversTooltipsPopoversComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipsPopoversComponent", function () {
      return TooltipsPopoversComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TooltipsPopoversComponent =
    /*#__PURE__*/
    function () {
      function TooltipsPopoversComponent() {
        _classCallCheck(this, TooltipsPopoversComponent);

        this.codeSamples = [{
          language: 'pug',
          code: pugCode
        }];
      }

      _createClass(TooltipsPopoversComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TooltipsPopoversComponent;
    }();

    TooltipsPopoversComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-tooltips-popovers',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tooltips-popovers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/tooltips-popovers/tooltips-popovers.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tooltips-popovers.component.scss */
      "./src/modules/style-reference/components/tooltips-popovers/tooltips-popovers.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TooltipsPopoversComponent);
    var pugCode = "\nbutton.btn.btn-primary(\n    placement='top',\n    ngbPopover='This popover is on the top!',\n    popoverTitle='Popover Title'\n) Popover on top\n".trim();
    /***/
  },

  /***/
  "./src/modules/style-reference/components/typography-color/typography-color.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/typography-color/typography-color.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsTypographyColorTypographyColorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy90eXBvZ3JhcGh5LWNvbG9yL3R5cG9ncmFwaHktY29sb3IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/typography-color/typography-color.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/components/typography-color/typography-color.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: TypographyColorComponent */

  /***/
  function srcModulesStyleReferenceComponentsTypographyColorTypographyColorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypographyColorComponent", function () {
      return TypographyColorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TypographyColorComponent =
    /*#__PURE__*/
    function () {
      function TypographyColorComponent() {
        _classCallCheck(this, TypographyColorComponent);
      }

      _createClass(TypographyColorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TypographyColorComponent;
    }();

    TypographyColorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-typography-color',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./typography-color.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/typography-color/typography-color.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./typography-color.component.scss */
      "./src/modules/style-reference/components/typography-color/typography-color.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TypographyColorComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/typography-grayscale/typography-grayscale.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/typography-grayscale/typography-grayscale.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsTypographyGrayscaleTypographyGrayscaleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy90eXBvZ3JhcGh5LWdyYXlzY2FsZS90eXBvZ3JhcGh5LWdyYXlzY2FsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/typography-grayscale/typography-grayscale.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/typography-grayscale/typography-grayscale.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: TypographyGrayscaleComponent */

  /***/
  function srcModulesStyleReferenceComponentsTypographyGrayscaleTypographyGrayscaleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypographyGrayscaleComponent", function () {
      return TypographyGrayscaleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TypographyGrayscaleComponent =
    /*#__PURE__*/
    function () {
      function TypographyGrayscaleComponent() {
        _classCallCheck(this, TypographyGrayscaleComponent);
      }

      _createClass(TypographyGrayscaleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TypographyGrayscaleComponent;
    }();

    TypographyGrayscaleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-typography-grayscale',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./typography-grayscale.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/typography-grayscale/typography-grayscale.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./typography-grayscale.component.scss */
      "./src/modules/style-reference/components/typography-grayscale/typography-grayscale.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TypographyGrayscaleComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/components/typography-weight/typography-weight.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/typography-weight/typography-weight.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceComponentsTypographyWeightTypographyWeightComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29tcG9uZW50cy90eXBvZ3JhcGh5LXdlaWdodC90eXBvZ3JhcGh5LXdlaWdodC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/components/typography-weight/typography-weight.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/modules/style-reference/components/typography-weight/typography-weight.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: TypographyWeightComponent */

  /***/
  function srcModulesStyleReferenceComponentsTypographyWeightTypographyWeightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypographyWeightComponent", function () {
      return TypographyWeightComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TypographyWeightComponent =
    /*#__PURE__*/
    function () {
      function TypographyWeightComponent() {
        _classCallCheck(this, TypographyWeightComponent);
      }

      _createClass(TypographyWeightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TypographyWeightComponent;
    }();

    TypographyWeightComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-typography-weight',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./typography-weight.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/components/typography-weight/typography-weight.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./typography-weight.component.scss */
      "./src/modules/style-reference/components/typography-weight/typography-weight.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TypographyWeightComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/alerts/alerts.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/modules/style-reference/containers/alerts/alerts.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersAlertsAlertsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9hbGVydHMvYWxlcnRzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/alerts/alerts.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/modules/style-reference/containers/alerts/alerts.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AlertsComponent */

  /***/
  function srcModulesStyleReferenceContainersAlertsAlertsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertsComponent", function () {
      return AlertsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlertsComponent =
    /*#__PURE__*/
    function () {
      function AlertsComponent() {
        _classCallCheck(this, AlertsComponent);

        this.tocIndex = [{
          title: 'Default'
        }, {
          title: 'Content'
        }, {
          title: 'Icon'
        }, {
          title: 'Solid'
        }, {
          title: 'Extended'
        }];
      }

      _createClass(AlertsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlertsComponent;
    }();

    AlertsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-alerts',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alerts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/alerts/alerts.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alerts.component.scss */
      "./src/modules/style-reference/containers/alerts/alerts.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AlertsComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/animations/animations.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/modules/style-reference/containers/animations/animations.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersAnimationsAnimationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9hbmltYXRpb25zL2FuaW1hdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/animations/animations.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/modules/style-reference/containers/animations/animations.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: AnimationsComponent */

  /***/
  function srcModulesStyleReferenceContainersAnimationsAnimationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationsComponent", function () {
      return AnimationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AnimationsComponent =
    /*#__PURE__*/
    function () {
      function AnimationsComponent() {
        _classCallCheck(this, AnimationsComponent);

        this.tocIndex = [{
          title: 'Fade In'
        }, {
          title: 'Fade In Up'
        }];
      }

      _createClass(AnimationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnimationsComponent;
    }();

    AnimationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-animations',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./animations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/animations/animations.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./animations.component.scss */
      "./src/modules/style-reference/containers/animations/animations.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AnimationsComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/background/background.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/modules/style-reference/containers/background/background.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersBackgroundBackgroundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/background/background.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/modules/style-reference/containers/background/background.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: BackgroundComponent */

  /***/
  function srcModulesStyleReferenceContainersBackgroundBackgroundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function () {
      return BackgroundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BackgroundComponent =
    /*#__PURE__*/
    function () {
      function BackgroundComponent() {
        _classCallCheck(this, BackgroundComponent);

        this.tocIndex = [{
          title: 'Default'
        }, {
          title: 'Expanded'
        }, {
          title: 'Gradient'
        }, {
          title: 'Grayscale'
        }];
      }

      _createClass(BackgroundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BackgroundComponent;
    }();

    BackgroundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-background',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./background.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/background/background.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./background.component.scss */
      "./src/modules/style-reference/containers/background/background.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BackgroundComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/badges/badges.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/modules/style-reference/containers/badges/badges.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersBadgesBadgesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9iYWRnZXMvYmFkZ2VzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/badges/badges.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/modules/style-reference/containers/badges/badges.component.ts ***!
    \***************************************************************************/

  /*! exports provided: BadgesComponent */

  /***/
  function srcModulesStyleReferenceContainersBadgesBadgesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BadgesComponent", function () {
      return BadgesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BadgesComponent =
    /*#__PURE__*/
    function () {
      function BadgesComponent() {
        _classCallCheck(this, BadgesComponent);

        this.tocIndex = [{
          title: 'Default'
        }, {
          title: 'Extended'
        }, {
          title: 'Sizing'
        }];
      }

      _createClass(BadgesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BadgesComponent;
    }();

    BadgesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-badges',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./badges.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/badges/badges.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./badges.component.scss */
      "./src/modules/style-reference/containers/badges/badges.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BadgesComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/blank/blank.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/modules/style-reference/containers/blank/blank.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersBlankBlankComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9ibGFuay9ibGFuay5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/blank/blank.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/modules/style-reference/containers/blank/blank.component.ts ***!
    \*************************************************************************/

  /*! exports provided: BlankComponent */

  /***/
  function srcModulesStyleReferenceContainersBlankBlankComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
      return BlankComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlankComponent =
    /*#__PURE__*/
    function () {
      function BlankComponent() {
        _classCallCheck(this, BlankComponent);
      }

      _createClass(BlankComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlankComponent;
    }();

    BlankComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-blank',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./blank.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/blank/blank.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./blank.component.scss */
      "./src/modules/style-reference/containers/blank/blank.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BlankComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/borders/borders.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/modules/style-reference/containers/borders/borders.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersBordersBordersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9ib3JkZXJzL2JvcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/borders/borders.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/modules/style-reference/containers/borders/borders.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: BordersComponent */

  /***/
  function srcModulesStyleReferenceContainersBordersBordersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BordersComponent", function () {
      return BordersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BordersComponent =
    /*#__PURE__*/
    function () {
      function BordersComponent() {
        _classCallCheck(this, BordersComponent);

        this.tocIndex = [{
          title: 'Default'
        }, {
          title: 'Colors'
        }, {
          title: 'Radius'
        }, {
          title: 'Radius Size'
        }, {
          title: 'Thickness'
        }, {
          title: 'Usage Examples'
        }];
      }

      _createClass(BordersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BordersComponent;
    }();

    BordersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-borders',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./borders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/borders/borders.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./borders.component.scss */
      "./src/modules/style-reference/containers/borders/borders.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BordersComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/buttons/buttons.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/modules/style-reference/containers/buttons/buttons.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersButtonsButtonsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/buttons/buttons.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/modules/style-reference/containers/buttons/buttons.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ButtonsComponent */

  /***/
  function srcModulesStyleReferenceContainersButtonsButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
      return ButtonsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ButtonsComponent =
    /*#__PURE__*/
    function () {
      function ButtonsComponent() {
        _classCallCheck(this, ButtonsComponent);

        this.tocIndex = [{
          title: 'Default Colors'
        }, {
          title: 'Custom Colors'
        }, {
          title: 'Icon'
        }, {
          title: 'Transparent'
        }, {
          title: 'Sizing'
        }, {
          title: 'Social'
        }, {
          title: 'Extending'
        }];
      }

      _createClass(ButtonsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonsComponent;
    }();

    ButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-buttons',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./buttons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/buttons/buttons.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./buttons.component.scss */
      "./src/modules/style-reference/containers/buttons/buttons.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ButtonsComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/cards/cards.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/modules/style-reference/containers/cards/cards.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersCardsCardsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9jYXJkcy9jYXJkcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/cards/cards.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/modules/style-reference/containers/cards/cards.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CardsComponent */

  /***/
  function srcModulesStyleReferenceContainersCardsCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsComponent", function () {
      return CardsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardsComponent =
    /*#__PURE__*/
    function () {
      function CardsComponent() {
        _classCallCheck(this, CardsComponent);

        this.tocIndex = [{
          title: 'Basic'
        }, {
          title: 'Advanced',
          children: [{
            title: 'Header Dropdown'
          }, {
            title: 'Header Icons'
          }, {
            title: 'Header Button'
          }, {
            title: 'Header Input'
          }]
        }, {
          title: 'Collapsable'
        }, {
          title: 'Navigation',
          children: [{
            title: 'Tabs'
          }, {
            title: 'Pills'
          }, {
            title: 'Pills (Vertical)'
          }]
        }, {
          title: 'Scrollable'
        }, {
          title: 'Images'
        }, {
          title: 'Icons'
        }, {
          title: 'Colors'
        }];
      }

      _createClass(CardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardsComponent;
    }();

    CardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-cards',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cards.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/cards/cards.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cards.component.scss */
      "./src/modules/style-reference/containers/cards/cards.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardsComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/dropdowns/dropdowns.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/modules/style-reference/containers/dropdowns/dropdowns.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersDropdownsDropdownsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9kcm9wZG93bnMvZHJvcGRvd25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/dropdowns/dropdowns.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/modules/style-reference/containers/dropdowns/dropdowns.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: DropdownsComponent */

  /***/
  function srcModulesStyleReferenceContainersDropdownsDropdownsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownsComponent", function () {
      return DropdownsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DropdownsComponent =
    /*#__PURE__*/
    function () {
      function DropdownsComponent() {
        _classCallCheck(this, DropdownsComponent);

        this.tocIndex = [{
          title: 'Default'
        }, {
          title: 'Icons'
        }, {
          title: 'Animated'
        }, {
          title: 'Notifications'
        }];
      }

      _createClass(DropdownsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DropdownsComponent;
    }();

    DropdownsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-dropdowns',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dropdowns.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/dropdowns/dropdowns.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dropdowns.component.scss */
      "./src/modules/style-reference/containers/dropdowns/dropdowns.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DropdownsComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/forms/forms.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/modules/style-reference/containers/forms/forms.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersFormsFormsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/forms/forms.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/modules/style-reference/containers/forms/forms.component.ts ***!
    \*************************************************************************/

  /*! exports provided: FormsComponent */

  /***/
  function srcModulesStyleReferenceContainersFormsFormsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
      return FormsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormsComponent =
    /*#__PURE__*/
    function () {
      function FormsComponent() {
        _classCallCheck(this, FormsComponent);

        this.tocIndex = [{
          title: 'Default Form Controls'
        }, {
          title: 'Solid Form Controls'
        }, {
          title: 'Custom Checkboxes & Radio'
        }, {
          title: 'Solid Checkboxes & Radio'
        }];
      }

      _createClass(FormsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FormsComponent;
    }();

    FormsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-forms',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/forms/forms.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forms.component.scss */
      "./src/modules/style-reference/containers/forms/forms.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FormsComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/headers-breadcrumbs/headers-breadcrumbs.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/modules/style-reference/containers/headers-breadcrumbs/headers-breadcrumbs.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersHeadersBreadcrumbsHeadersBreadcrumbsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9oZWFkZXJzLWJyZWFkY3J1bWJzL2hlYWRlcnMtYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/headers-breadcrumbs/headers-breadcrumbs.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/modules/style-reference/containers/headers-breadcrumbs/headers-breadcrumbs.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: HeadersBreadcrumbsComponent */

  /***/
  function srcModulesStyleReferenceContainersHeadersBreadcrumbsHeadersBreadcrumbsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadersBreadcrumbsComponent", function () {
      return HeadersBreadcrumbsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeadersBreadcrumbsComponent =
    /*#__PURE__*/
    function () {
      function HeadersBreadcrumbsComponent() {
        _classCallCheck(this, HeadersBreadcrumbsComponent);
      }

      _createClass(HeadersBreadcrumbsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeadersBreadcrumbsComponent;
    }();

    HeadersBreadcrumbsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-headers-breadcrumbs',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./headers-breadcrumbs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/headers-breadcrumbs/headers-breadcrumbs.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./headers-breadcrumbs.component.scss */
      "./src/modules/style-reference/containers/headers-breadcrumbs/headers-breadcrumbs.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HeadersBreadcrumbsComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/headers-light/headers-light.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/style-reference/containers/headers-light/headers-light.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersHeadersLightHeadersLightComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9oZWFkZXJzLWxpZ2h0L2hlYWRlcnMtbGlnaHQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/headers-light/headers-light.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/style-reference/containers/headers-light/headers-light.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: HeadersLightComponent */

  /***/
  function srcModulesStyleReferenceContainersHeadersLightHeadersLightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadersLightComponent", function () {
      return HeadersLightComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeadersLightComponent =
    /*#__PURE__*/
    function () {
      function HeadersLightComponent() {
        _classCallCheck(this, HeadersLightComponent);
      }

      _createClass(HeadersLightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeadersLightComponent;
    }();

    HeadersLightComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-headers-light',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./headers-light.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/headers-light/headers-light.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./headers-light.component.scss */
      "./src/modules/style-reference/containers/headers-light/headers-light.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HeadersLightComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/headers-overlap/headers-overlap.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/modules/style-reference/containers/headers-overlap/headers-overlap.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersHeadersOverlapHeadersOverlapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9oZWFkZXJzLW92ZXJsYXAvaGVhZGVycy1vdmVybGFwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/headers-overlap/headers-overlap.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/modules/style-reference/containers/headers-overlap/headers-overlap.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: HeadersOverlapComponent */

  /***/
  function srcModulesStyleReferenceContainersHeadersOverlapHeadersOverlapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadersOverlapComponent", function () {
      return HeadersOverlapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeadersOverlapComponent =
    /*#__PURE__*/
    function () {
      function HeadersOverlapComponent() {
        _classCallCheck(this, HeadersOverlapComponent);
      }

      _createClass(HeadersOverlapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeadersOverlapComponent;
    }();

    HeadersOverlapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-headers-overlap',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./headers-overlap.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/headers-overlap/headers-overlap.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./headers-overlap.component.scss */
      "./src/modules/style-reference/containers/headers-overlap/headers-overlap.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HeadersOverlapComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/headers-simplified/headers-simplified.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/modules/style-reference/containers/headers-simplified/headers-simplified.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersHeadersSimplifiedHeadersSimplifiedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9oZWFkZXJzLXNpbXBsaWZpZWQvaGVhZGVycy1zaW1wbGlmaWVkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/headers-simplified/headers-simplified.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/modules/style-reference/containers/headers-simplified/headers-simplified.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: HeadersSimplifiedComponent */

  /***/
  function srcModulesStyleReferenceContainersHeadersSimplifiedHeadersSimplifiedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadersSimplifiedComponent", function () {
      return HeadersSimplifiedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeadersSimplifiedComponent =
    /*#__PURE__*/
    function () {
      function HeadersSimplifiedComponent() {
        _classCallCheck(this, HeadersSimplifiedComponent);
      }

      _createClass(HeadersSimplifiedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeadersSimplifiedComponent;
    }();

    HeadersSimplifiedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-headers-simplified',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./headers-simplified.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/headers-simplified/headers-simplified.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./headers-simplified.component.scss */
      "./src/modules/style-reference/containers/headers-simplified/headers-simplified.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HeadersSimplifiedComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/index.ts":
  /*!*********************************************************!*\
    !*** ./src/modules/style-reference/containers/index.ts ***!
    \*********************************************************/

  /*! exports provided: containers, AlertsComponent, AnimationsComponent, BackgroundComponent, BordersComponent, ButtonsComponent, CardsComponent, DropdownsComponent, FormsComponent, ModalComponent, NavigationComponent, ProgressComponent, ShadowsComponent, ToastsComponent, TooltipsComponent, TypographyComponent, BlankComponent, HeadersSimplifiedComponent, HeadersOverlapComponent, HeadersBreadcrumbsComponent, HeadersLightComponent, BadgesComponent */

  /***/
  function srcModulesStyleReferenceContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "containers", function () {
      return containers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alerts/alerts.component */
    "./src/modules/style-reference/containers/alerts/alerts.component.ts");
    /* harmony import */


    var _animations_animations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./animations/animations.component */
    "./src/modules/style-reference/containers/animations/animations.component.ts");
    /* harmony import */


    var _background_background_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./background/background.component */
    "./src/modules/style-reference/containers/background/background.component.ts");
    /* harmony import */


    var _badges_badges_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./badges/badges.component */
    "./src/modules/style-reference/containers/badges/badges.component.ts");
    /* harmony import */


    var _blank_blank_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blank/blank.component */
    "./src/modules/style-reference/containers/blank/blank.component.ts");
    /* harmony import */


    var _borders_borders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./borders/borders.component */
    "./src/modules/style-reference/containers/borders/borders.component.ts");
    /* harmony import */


    var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./buttons/buttons.component */
    "./src/modules/style-reference/containers/buttons/buttons.component.ts");
    /* harmony import */


    var _cards_cards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cards/cards.component */
    "./src/modules/style-reference/containers/cards/cards.component.ts");
    /* harmony import */


    var _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dropdowns/dropdowns.component */
    "./src/modules/style-reference/containers/dropdowns/dropdowns.component.ts");
    /* harmony import */


    var _forms_forms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./forms/forms.component */
    "./src/modules/style-reference/containers/forms/forms.component.ts");
    /* harmony import */


    var _headers_breadcrumbs_headers_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./headers-breadcrumbs/headers-breadcrumbs.component */
    "./src/modules/style-reference/containers/headers-breadcrumbs/headers-breadcrumbs.component.ts");
    /* harmony import */


    var _headers_light_headers_light_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./headers-light/headers-light.component */
    "./src/modules/style-reference/containers/headers-light/headers-light.component.ts");
    /* harmony import */


    var _headers_overlap_headers_overlap_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./headers-overlap/headers-overlap.component */
    "./src/modules/style-reference/containers/headers-overlap/headers-overlap.component.ts");
    /* harmony import */


    var _headers_simplified_headers_simplified_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./headers-simplified/headers-simplified.component */
    "./src/modules/style-reference/containers/headers-simplified/headers-simplified.component.ts");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./modal/modal.component */
    "./src/modules/style-reference/containers/modal/modal.component.ts");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/modules/style-reference/containers/navigation/navigation.component.ts");
    /* harmony import */


    var _progress_progress_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./progress/progress.component */
    "./src/modules/style-reference/containers/progress/progress.component.ts");
    /* harmony import */


    var _shadows_shadows_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./shadows/shadows.component */
    "./src/modules/style-reference/containers/shadows/shadows.component.ts");
    /* harmony import */


    var _toasts_toasts_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./toasts/toasts.component */
    "./src/modules/style-reference/containers/toasts/toasts.component.ts");
    /* harmony import */


    var _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./tooltips/tooltips.component */
    "./src/modules/style-reference/containers/tooltips/tooltips.component.ts");
    /* harmony import */


    var _typography_typography_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./typography/typography.component */
    "./src/modules/style-reference/containers/typography/typography.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertsComponent", function () {
      return _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_1__["AlertsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AnimationsComponent", function () {
      return _animations_animations_component__WEBPACK_IMPORTED_MODULE_2__["AnimationsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function () {
      return _background_background_component__WEBPACK_IMPORTED_MODULE_3__["BackgroundComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BordersComponent", function () {
      return _borders_borders_component__WEBPACK_IMPORTED_MODULE_6__["BordersComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
      return _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__["ButtonsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardsComponent", function () {
      return _cards_cards_component__WEBPACK_IMPORTED_MODULE_8__["CardsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownsComponent", function () {
      return _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_9__["DropdownsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormsComponent", function () {
      return _forms_forms_component__WEBPACK_IMPORTED_MODULE_10__["FormsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return _modal_modal_component__WEBPACK_IMPORTED_MODULE_15__["ModalComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_16__["NavigationComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProgressComponent", function () {
      return _progress_progress_component__WEBPACK_IMPORTED_MODULE_17__["ProgressComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShadowsComponent", function () {
      return _shadows_shadows_component__WEBPACK_IMPORTED_MODULE_18__["ShadowsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastsComponent", function () {
      return _toasts_toasts_component__WEBPACK_IMPORTED_MODULE_19__["ToastsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function () {
      return _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_20__["TooltipsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TypographyComponent", function () {
      return _typography_typography_component__WEBPACK_IMPORTED_MODULE_21__["TypographyComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BlankComponent", function () {
      return _blank_blank_component__WEBPACK_IMPORTED_MODULE_5__["BlankComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeadersSimplifiedComponent", function () {
      return _headers_simplified_headers_simplified_component__WEBPACK_IMPORTED_MODULE_14__["HeadersSimplifiedComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeadersOverlapComponent", function () {
      return _headers_overlap_headers_overlap_component__WEBPACK_IMPORTED_MODULE_13__["HeadersOverlapComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeadersBreadcrumbsComponent", function () {
      return _headers_breadcrumbs_headers_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_11__["HeadersBreadcrumbsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeadersLightComponent", function () {
      return _headers_light_headers_light_component__WEBPACK_IMPORTED_MODULE_12__["HeadersLightComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BadgesComponent", function () {
      return _badges_badges_component__WEBPACK_IMPORTED_MODULE_4__["BadgesComponent"];
    });

    var containers = [_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_1__["AlertsComponent"], _animations_animations_component__WEBPACK_IMPORTED_MODULE_2__["AnimationsComponent"], _background_background_component__WEBPACK_IMPORTED_MODULE_3__["BackgroundComponent"], _borders_borders_component__WEBPACK_IMPORTED_MODULE_6__["BordersComponent"], _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_7__["ButtonsComponent"], _cards_cards_component__WEBPACK_IMPORTED_MODULE_8__["CardsComponent"], _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_9__["DropdownsComponent"], _forms_forms_component__WEBPACK_IMPORTED_MODULE_10__["FormsComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_15__["ModalComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_16__["NavigationComponent"], _progress_progress_component__WEBPACK_IMPORTED_MODULE_17__["ProgressComponent"], _shadows_shadows_component__WEBPACK_IMPORTED_MODULE_18__["ShadowsComponent"], _toasts_toasts_component__WEBPACK_IMPORTED_MODULE_19__["ToastsComponent"], _tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_20__["TooltipsComponent"], _typography_typography_component__WEBPACK_IMPORTED_MODULE_21__["TypographyComponent"], _blank_blank_component__WEBPACK_IMPORTED_MODULE_5__["BlankComponent"], _headers_simplified_headers_simplified_component__WEBPACK_IMPORTED_MODULE_14__["HeadersSimplifiedComponent"], _headers_overlap_headers_overlap_component__WEBPACK_IMPORTED_MODULE_13__["HeadersOverlapComponent"], _headers_breadcrumbs_headers_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_11__["HeadersBreadcrumbsComponent"], _headers_light_headers_light_component__WEBPACK_IMPORTED_MODULE_12__["HeadersLightComponent"], _badges_badges_component__WEBPACK_IMPORTED_MODULE_4__["BadgesComponent"]];
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/modal/modal.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/modules/style-reference/containers/modal/modal.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersModalModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/modal/modal.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/modules/style-reference/containers/modal/modal.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcModulesStyleReferenceContainersModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ModalComponent =
    /*#__PURE__*/
    function () {
      function ModalComponent() {
        _classCallCheck(this, ModalComponent);

        this.tocIndex = [{
          title: 'Default'
        }, {
          title: 'Scrollable'
        }, {
          title: 'Vertically Centered'
        }, {
          title: 'Sizing'
        }];
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ModalComponent;
    }();

    ModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-modal',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/modal/modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal.component.scss */
      "./src/modules/style-reference/containers/modal/modal.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ModalComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/navigation/navigation.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/modules/style-reference/containers/navigation/navigation.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/navigation/navigation.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/modules/style-reference/containers/navigation/navigation.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcModulesStyleReferenceContainersNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);

        this.tocIndex = [{
          title: 'Side Navigation'
        }, {
          title: 'Sticky Navigation'
        }];
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-navigation',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/navigation/navigation.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/modules/style-reference/containers/navigation/navigation.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NavigationComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/progress/progress.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/modules/style-reference/containers/progress/progress.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersProgressProgressComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/progress/progress.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/modules/style-reference/containers/progress/progress.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ProgressComponent */

  /***/
  function srcModulesStyleReferenceContainersProgressProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressComponent", function () {
      return ProgressComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProgressComponent =
    /*#__PURE__*/
    function () {
      function ProgressComponent() {
        _classCallCheck(this, ProgressComponent);

        this.tocIndex = [{
          title: 'Default'
        }, {
          title: 'Labels'
        }, {
          title: 'Colors'
        }, {
          title: 'Striped'
        }, {
          title: 'Card'
        }];
      }

      _createClass(ProgressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressComponent;
    }();

    ProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-progress',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./progress.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/progress/progress.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./progress.component.scss */
      "./src/modules/style-reference/containers/progress/progress.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProgressComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/shadows/shadows.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/modules/style-reference/containers/shadows/shadows.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersShadowsShadowsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy9zaGFkb3dzL3NoYWRvd3MuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/shadows/shadows.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/modules/style-reference/containers/shadows/shadows.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ShadowsComponent */

  /***/
  function srcModulesStyleReferenceContainersShadowsShadowsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShadowsComponent", function () {
      return ShadowsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShadowsComponent =
    /*#__PURE__*/
    function () {
      function ShadowsComponent() {
        _classCallCheck(this, ShadowsComponent);

        this.tocIndex = [{
          title: 'Default'
        }, {
          title: 'Extended'
        }];
      }

      _createClass(ShadowsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShadowsComponent;
    }();

    ShadowsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-shadows',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shadows.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/shadows/shadows.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shadows.component.scss */
      "./src/modules/style-reference/containers/shadows/shadows.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ShadowsComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/toasts/toasts.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/modules/style-reference/containers/toasts/toasts.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersToastsToastsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy90b2FzdHMvdG9hc3RzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/toasts/toasts.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/modules/style-reference/containers/toasts/toasts.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ToastsComponent */

  /***/
  function srcModulesStyleReferenceContainersToastsToastsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastsComponent", function () {
      return ToastsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ToastsComponent =
    /*#__PURE__*/
    function () {
      function ToastsComponent() {
        _classCallCheck(this, ToastsComponent);

        this.tocIndex = [{
          title: 'Demo'
        }, {
          title: 'Colors'
        }];
      }

      _createClass(ToastsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToastsComponent;
    }();

    ToastsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-toasts',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./toasts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/toasts/toasts.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./toasts.component.scss */
      "./src/modules/style-reference/containers/toasts/toasts.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ToastsComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/tooltips/tooltips.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/modules/style-reference/containers/tooltips/tooltips.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersTooltipsTooltipsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy90b29sdGlwcy90b29sdGlwcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/tooltips/tooltips.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/modules/style-reference/containers/tooltips/tooltips.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: TooltipsComponent */

  /***/
  function srcModulesStyleReferenceContainersTooltipsTooltipsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function () {
      return TooltipsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TooltipsComponent =
    /*#__PURE__*/
    function () {
      function TooltipsComponent() {
        _classCallCheck(this, TooltipsComponent);

        this.tocIndex = [{
          title: 'Tooltips'
        }, {
          title: 'Popovers'
        }];
      }

      _createClass(TooltipsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TooltipsComponent;
    }();

    TooltipsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-tooltips',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tooltips.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/tooltips/tooltips.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tooltips.component.scss */
      "./src/modules/style-reference/containers/tooltips/tooltips.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TooltipsComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/typography/typography.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/modules/style-reference/containers/typography/typography.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesStyleReferenceContainersTypographyTypographyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9zdHlsZS1yZWZlcmVuY2UvY29udGFpbmVycy90eXBvZ3JhcGh5L3R5cG9ncmFwaHkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/style-reference/containers/typography/typography.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/modules/style-reference/containers/typography/typography.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: TypographyComponent */

  /***/
  function srcModulesStyleReferenceContainersTypographyTypographyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypographyComponent", function () {
      return TypographyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TypographyComponent =
    /*#__PURE__*/
    function () {
      function TypographyComponent() {
        _classCallCheck(this, TypographyComponent);

        this.tocIndex = [{
          title: 'Color'
        }, {
          title: 'Grayscale'
        }, {
          title: 'Weight'
        }];
      }

      _createClass(TypographyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TypographyComponent;
    }();

    TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-typography',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./typography.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/style-reference/containers/typography/typography.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./typography.component.scss */
      "./src/modules/style-reference/containers/typography/typography.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TypographyComponent);
    /***/
  },

  /***/
  "./src/modules/style-reference/guards/index.ts":
  /*!*****************************************************!*\
    !*** ./src/modules/style-reference/guards/index.ts ***!
    \*****************************************************/

  /*! exports provided: guards, StyleReferenceGuard */

  /***/
  function srcModulesStyleReferenceGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "guards", function () {
      return guards;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _style_reference_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./style-reference.guard */
    "./src/modules/style-reference/guards/style-reference.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StyleReferenceGuard", function () {
      return _style_reference_guard__WEBPACK_IMPORTED_MODULE_1__["StyleReferenceGuard"];
    });

    var guards = [_style_reference_guard__WEBPACK_IMPORTED_MODULE_1__["StyleReferenceGuard"]];
    /***/
  },

  /***/
  "./src/modules/style-reference/guards/style-reference.guard.ts":
  /*!*********************************************************************!*\
    !*** ./src/modules/style-reference/guards/style-reference.guard.ts ***!
    \*********************************************************************/

  /*! exports provided: StyleReferenceGuard */

  /***/
  function srcModulesStyleReferenceGuardsStyleReferenceGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleReferenceGuard", function () {
      return StyleReferenceGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var StyleReferenceGuard =
    /*#__PURE__*/
    function () {
      function StyleReferenceGuard() {
        _classCallCheck(this, StyleReferenceGuard);
      }

      _createClass(StyleReferenceGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
      }]);

      return StyleReferenceGuard;
    }();

    StyleReferenceGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], StyleReferenceGuard);
    /***/
  },

  /***/
  "./src/modules/style-reference/models/index.ts":
  /*!*****************************************************!*\
    !*** ./src/modules/style-reference/models/index.ts ***!
    \*****************************************************/

  /*! exports provided: styleReferenceRouteVariables */

  /***/
  function srcModulesStyleReferenceModelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _style_reference_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./style-reference.model */
    "./src/modules/style-reference/models/style-reference.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "styleReferenceRouteVariables", function () {
      return _style_reference_model__WEBPACK_IMPORTED_MODULE_1__["styleReferenceRouteVariables"];
    });
    /***/

  },

  /***/
  "./src/modules/style-reference/models/style-reference.model.ts":
  /*!*********************************************************************!*\
    !*** ./src/modules/style-reference/models/style-reference.model.ts ***!
    \*********************************************************************/

  /*! exports provided: styleReferenceRouteVariables */

  /***/
  function srcModulesStyleReferenceModelsStyleReferenceModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styleReferenceRouteVariables", function () {
      return styleReferenceRouteVariables;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @modules/style-reference/containers */
    "./src/modules/style-reference/containers/index.ts");

    var styleReferenceRouteVariables = {
      components: [{
        name: 'alerts',
        title: 'Alerts',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["AlertsComponent"]
      }, {
        name: 'badges',
        title: 'Badges',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["BadgesComponent"]
      }, {
        name: 'buttons',
        title: 'Buttons',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["ButtonsComponent"]
      }, {
        name: 'cards',
        title: 'Cards',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["CardsComponent"]
      }, {
        name: 'dropdowns',
        title: 'Dropdowns',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["DropdownsComponent"]
      }, {
        name: 'forms',
        title: 'Forms',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["FormsComponent"]
      }, {
        name: 'modal',
        title: 'Modal',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]
      }, {
        name: 'navigation',
        title: 'Navigation',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"]
      }, {
        name: 'progress',
        title: 'Progress',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["ProgressComponent"]
      }, {
        name: 'toasts',
        title: 'Toasts',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["ToastsComponent"]
      }, {
        name: 'tooltips',
        title: 'Tooltips',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["TooltipsComponent"]
      }],
      utilities: [{
        name: 'animations',
        title: 'Animations',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["AnimationsComponent"]
      }, {
        name: 'background',
        title: 'Background',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["BackgroundComponent"]
      }, {
        name: 'borders',
        title: 'Borders',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["BordersComponent"]
      }, {
        name: 'shadows',
        title: 'Shadows',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["ShadowsComponent"]
      }, {
        name: 'typography',
        title: 'Typography',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["TypographyComponent"]
      }],
      pageHeaders: [{
        name: 'simplified',
        title: 'Simplified Headers',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["HeadersSimplifiedComponent"]
      }, {
        name: 'content-overlap',
        title: 'Content Overlap',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["HeadersOverlapComponent"]
      }, {
        name: 'breadcrumbs',
        title: 'Breadcrumbs',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["HeadersBreadcrumbsComponent"]
      }, {
        name: 'light',
        title: 'Light',
        component: _modules_style_reference_containers__WEBPACK_IMPORTED_MODULE_1__["HeadersLightComponent"]
      }]
    };
    /***/
  },

  /***/
  "./src/modules/style-reference/services/index.ts":
  /*!*******************************************************!*\
    !*** ./src/modules/style-reference/services/index.ts ***!
    \*******************************************************/

  /*! exports provided: services, PrismService, StyleReferenceService */

  /***/
  function srcModulesStyleReferenceServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _prism_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./prism.service */
    "./src/modules/style-reference/services/prism.service.ts");
    /* harmony import */


    var _style_reference_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./style-reference.service */
    "./src/modules/style-reference/services/style-reference.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PrismService", function () {
      return _prism_service__WEBPACK_IMPORTED_MODULE_1__["PrismService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StyleReferenceService", function () {
      return _style_reference_service__WEBPACK_IMPORTED_MODULE_2__["StyleReferenceService"];
    });

    var services = [_style_reference_service__WEBPACK_IMPORTED_MODULE_2__["StyleReferenceService"], _prism_service__WEBPACK_IMPORTED_MODULE_1__["PrismService"]];
    /***/
  },

  /***/
  "./src/modules/style-reference/services/prism.service.ts":
  /*!***************************************************************!*\
    !*** ./src/modules/style-reference/services/prism.service.ts ***!
    \***************************************************************/

  /*! exports provided: PrismService */

  /***/
  function srcModulesStyleReferenceServicesPrismServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrismService", function () {
      return PrismService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! prismjs */
    "./node_modules/prismjs/prism.js");
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! prismjs/components/prism-bash */
    "./node_modules/prismjs/components/prism-bash.js");
    /* harmony import */


    var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! prismjs/components/prism-css */
    "./node_modules/prismjs/components/prism-css.js");
    /* harmony import */


    var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! prismjs/components/prism-javascript */
    "./node_modules/prismjs/components/prism-javascript.js");
    /* harmony import */


    var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! prismjs/components/prism-json */
    "./node_modules/prismjs/components/prism-json.js");
    /* harmony import */


    var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! prismjs/components/prism-markup */
    "./node_modules/prismjs/components/prism-markup.js");
    /* harmony import */


    var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var prismjs_components_prism_pug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! prismjs/components/prism-pug */
    "./node_modules/prismjs/components/prism-pug.js");
    /* harmony import */


    var prismjs_components_prism_pug__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_pug__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! prismjs/components/prism-scss */
    "./node_modules/prismjs/components/prism-scss.js");
    /* harmony import */


    var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! prismjs/components/prism-typescript */
    "./node_modules/prismjs/components/prism-typescript.js");
    /* harmony import */


    var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__);

    var PrismService =
    /*#__PURE__*/
    function () {
      function PrismService() {
        _classCallCheck(this, PrismService);

        this.Prism = prismjs__WEBPACK_IMPORTED_MODULE_2___default.a;
      }

      _createClass(PrismService, [{
        key: "highlightAll",
        value: function highlightAll() {
          prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlightAll();
        }
      }]);

      return PrismService;
    }();

    PrismService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PrismService);
    /***/
  },

  /***/
  "./src/modules/style-reference/services/style-reference.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/modules/style-reference/services/style-reference.service.ts ***!
    \*************************************************************************/

  /*! exports provided: StyleReferenceService */

  /***/
  function srcModulesStyleReferenceServicesStyleReferenceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleReferenceService", function () {
      return StyleReferenceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var StyleReferenceService =
    /*#__PURE__*/
    function () {
      function StyleReferenceService() {
        _classCallCheck(this, StyleReferenceService);
      }

      _createClass(StyleReferenceService, [{
        key: "getStyleReference$",
        value: function getStyleReference$() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
        }
      }]);

      return StyleReferenceService;
    }();

    StyleReferenceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StyleReferenceService);
    /***/
  },

  /***/
  "./src/modules/style-reference/style-reference.module.ts":
  /*!***************************************************************!*\
    !*** ./src/modules/style-reference/style-reference.module.ts ***!
    \***************************************************************/

  /*! exports provided: StyleReferenceModule */

  /***/
  function srcModulesStyleReferenceStyleReferenceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleReferenceModule", function () {
      return StyleReferenceModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @common/app-common.module */
    "./src/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @modules/navigation/navigation.module */
    "./src/modules/navigation/navigation.module.ts");
    /* harmony import */


    var _modules_toc_toc_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @modules/toc/toc.module */
    "./src/modules/toc/toc.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components */
    "./src/modules/style-reference/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/style-reference/containers/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/style-reference/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services */
    "./src/modules/style-reference/services/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Modules */

    /* Components */

    /* Containers */

    /* Guards */

    /* Services */


    var StyleReferenceModule = function StyleReferenceModule() {
      _classCallCheck(this, StyleReferenceModule);
    };

    StyleReferenceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_6__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__["NavigationModule"], _modules_toc_toc_module__WEBPACK_IMPORTED_MODULE_8__["TocModule"]],
      providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_12__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_11__["guards"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_10__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_9__["components"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_10__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_9__["components"]))
    })], StyleReferenceModule);
    /***/
  },

  /***/
  "./src/modules/toc/components/index.ts":
  /*!*********************************************!*\
    !*** ./src/modules/toc/components/index.ts ***!
    \*********************************************/

  /*! exports provided: components, TocNavComponent */

  /***/
  function srcModulesTocComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _toc_nav_toc_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toc-nav/toc-nav.component */
    "./src/modules/toc/components/toc-nav/toc-nav.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TocNavComponent", function () {
      return _toc_nav_toc_nav_component__WEBPACK_IMPORTED_MODULE_1__["TocNavComponent"];
    });

    var components = [_toc_nav_toc_nav_component__WEBPACK_IMPORTED_MODULE_1__["TocNavComponent"]];
    /***/
  },

  /***/
  "./src/modules/toc/components/toc-nav/toc-nav.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/modules/toc/components/toc-nav/toc-nav.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesTocComponentsTocNavTocNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-link {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3RvYy9jb21wb25lbnRzL3RvYy1uYXYvQzpcXFVzZXJzXFxIYWJpYk1va25pXFxEb2N1bWVudHNcXEdpdEh1YlxccHMtYm1zL3NyY1xcbW9kdWxlc1xcdG9jXFxjb21wb25lbnRzXFx0b2MtbmF2XFx0b2MtbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL21vZHVsZXMvdG9jL2NvbXBvbmVudHMvdG9jLW5hdi90b2MtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9tb2R1bGVzL3RvYy9jb21wb25lbnRzL3RvYy1uYXYvdG9jLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLm5hdi1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/modules/toc/components/toc-nav/toc-nav.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/modules/toc/components/toc-nav/toc-nav.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TocNavComponent */

  /***/
  function srcModulesTocComponentsTocNavTocNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TocNavComponent", function () {
      return TocNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modules_toc_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/toc/services */
    "./src/modules/toc/services/index.ts");
    /* harmony import */


    var change_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! change-case */
    "./node_modules/change-case/dist.es2015/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TocNavComponent =
    /*#__PURE__*/
    function () {
      function TocNavComponent(changeDetectorRef, route, router, tocService) {
        _classCallCheck(this, TocNavComponent);

        this.changeDetectorRef = changeDetectorRef;
        this.route = route;
        this.router = router;
        this.tocService = tocService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.items = [];
        this.inited = false;
      }

      _createClass(TocNavComponent, [{
        key: "_mapToIndex",
        value: function _mapToIndex(item) {
          return {
            title: item.title,
            id: Object(change_case__WEBPACK_IMPORTED_MODULE_4__["paramCase"])(item.title),
            inView: false,
            children: item.children ? item.children.map(this._mapToIndex) : undefined
          };
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.items = this.tocIndex.map(function (item) {
            return _this5._mapToIndex(item);
          });
          this.subscription.add(this.tocService.tocListener$.subscribe(function (event) {
            var foundTitle = _this5.items.find(function (title) {
              return title.title === event.title;
            });

            var topInView;

            if (!foundTitle) {
              // May be a child
              _this5.items.forEach(function (item) {
                if (item.children) {
                  var foundChild = item.children.find(function (title) {
                    return title.title === event.title;
                  });

                  if (!foundChild) {
                    return;
                  }

                  foundChild.inView = event.inView;
                  var topInViewChild = item.children.find(function (title) {
                    return title.inView;
                  });

                  if (!topInViewChild) {
                    return;
                  }

                  _this5.topInViewChild = topInViewChild.title;

                  _this5.changeDetectorRef.detectChanges();
                }
              });

              return;
            }

            foundTitle.inView = event.inView;
            topInView = _this5.items.find(function (title) {
              return title.inView;
            });

            if (!topInView) {
              return;
            }

            _this5.topInView = topInView.title;

            _this5.changeDetectorRef.detectChanges();
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "navigateToTitle",
        value: function navigateToTitle(item) {
          if (this.currentFragment === item.id) {
            return this._scrollToFragment(this.currentFragment);
          }

          this.router.navigate([], {
            relativeTo: this.route,
            fragment: item.id
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this6 = this;

          this.changeDetectorRef.detectChanges();
          setTimeout(function () {
            _this6._scrollToFragment(_this6.route.snapshot.fragment);
          }, 500);
          this.route.fragment.subscribe(function (fragment) {
            _this6.currentFragment = fragment;

            _this6._scrollToFragment(fragment);
          });
        }
      }, {
        key: "_scrollToFragment",
        value: function _scrollToFragment(fragment) {
          var foundElement = document.getElementById(fragment);

          if (foundElement) {
            foundElement.scrollIntoView();
          }
        }
      }]);

      return TocNavComponent;
    }();

    TocNavComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _modules_toc_services__WEBPACK_IMPORTED_MODULE_3__["TocService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], TocNavComponent.prototype, "tocIndex", void 0);
    TocNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sbpro-toc-nav',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./toc-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/toc/components/toc-nav/toc-nav.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./toc-nav.component.scss */
      "./src/modules/toc/components/toc-nav/toc-nav.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _modules_toc_services__WEBPACK_IMPORTED_MODULE_3__["TocService"]])], TocNavComponent);
    /***/
  },

  /***/
  "./src/modules/toc/containers/index.ts":
  /*!*********************************************!*\
    !*** ./src/modules/toc/containers/index.ts ***!
    \*********************************************/

  /*! exports provided: containers */

  /***/
  function srcModulesTocContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "containers", function () {
      return containers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var containers = [];
    /***/
  },

  /***/
  "./src/modules/toc/directives/index.ts":
  /*!*********************************************!*\
    !*** ./src/modules/toc/directives/index.ts ***!
    \*********************************************/

  /*! exports provided: directives, SBProTocItemDirective */

  /***/
  function srcModulesTocDirectivesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "directives", function () {
      return directives;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _toc_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toc-item.directive */
    "./src/modules/toc/directives/toc-item.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SBProTocItemDirective", function () {
      return _toc_item_directive__WEBPACK_IMPORTED_MODULE_1__["SBProTocItemDirective"];
    });

    var directives = [_toc_item_directive__WEBPACK_IMPORTED_MODULE_1__["SBProTocItemDirective"]];
    /***/
  },

  /***/
  "./src/modules/toc/directives/toc-item.directive.ts":
  /*!**********************************************************!*\
    !*** ./src/modules/toc/directives/toc-item.directive.ts ***!
    \**********************************************************/

  /*! exports provided: SBProTocItemDirective */

  /***/
  function srcModulesTocDirectivesTocItemDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SBProTocItemDirective", function () {
      return SBProTocItemDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @common/services */
    "./src/modules/app-common/services/index.ts");
    /* harmony import */


    var _modules_toc_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @modules/toc/services */
    "./src/modules/toc/services/index.ts");
    /* harmony import */


    var change_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! change-case */
    "./node_modules/change-case/dist.es2015/index.js"); // Adapted in part from https://github.com/thisissoon/angular-inviewport


    var SBProTocItemDirective =
    /*#__PURE__*/
    function () {
      function SBProTocItemDirective(utilityService, _elRef, tocService) {
        _classCallCheck(this, SBProTocItemDirective);

        this.utilityService = utilityService;
        this._elRef = _elRef;
        this.tocService = tocService;
        this.inViewportOptions = {// rootMargin: '-1px 0px -1px 0px',
        };
        this._elRef.nativeElement.style.display = 'block';
        this.hasIntersectionObserver = this.intersectionObserverFeatureDetection();
      }

      _createClass(SBProTocItemDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.hasIntersectionObserver) {
            this.inViewport = true;
            console.log('### INFO: Unable to find IntersectionObserver');
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.hasIntersectionObserver) {
            var IntersectionObserver = this.utilityService.window.IntersectionObserver;
            this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), Object.assign(Object.assign({}, this.inViewportOptions), {
              root: this.utilityService.window.document.querySelector('#layoutSidenav_content')
            }));
            this.observer.observe(this._elRef.nativeElement);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.observer) {
            this.observer.unobserve(this._elRef.nativeElement);
          }
        }
      }, {
        key: "intersectionObserverCallback",
        value: function intersectionObserverCallback(entries) {
          var _this7 = this;

          entries.forEach(function (entry) {
            if (_this7.inViewport === entry.isIntersecting) {
              return;
            }

            _this7.inViewport = entry.isIntersecting;

            _this7.tocService.tocListener$.next({
              title: _this7.sbproTocItem,
              id: _this7._elRef.nativeElement.id,
              inView: _this7.inViewport
            });
          });
        }
      }, {
        key: "intersectionObserverFeatureDetection",
        value: function intersectionObserverFeatureDetection() {
          // Exits early if all IntersectionObserver and IntersectionObserverEntry
          // features are natively supported.
          if ('IntersectionObserver' in this.utilityService.window && 'IntersectionObserverEntry' in this.utilityService.window) {
            // Minimal polyfill for Edge 15's lack of `isIntersecting`
            // See: https://github.com/w3c/IntersectionObserver/issues/211
            if (!('isIntersecting' in this.utilityService.window.IntersectionObserverEntry.prototype)) {
              Object.defineProperty(this.utilityService.window.IntersectionObserverEntry.prototype, 'isIntersecting', {
                get: function get() {
                  return this.intersectionRatio > 0;
                }
              });
            }

            return true;
          }

          return false;
        }
      }, {
        key: "tocID",
        get: function get() {
          return Object(change_case__WEBPACK_IMPORTED_MODULE_4__["paramCase"])(this.sbproTocItem);
        }
      }]);

      return SBProTocItemDirective;
    }();

    SBProTocItemDirective.ctorParameters = function () {
      return [{
        type: _common_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _modules_toc_services__WEBPACK_IMPORTED_MODULE_3__["TocService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], SBProTocItemDirective.prototype, "sbproTocItem", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], SBProTocItemDirective.prototype, "inViewportOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.id'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SBProTocItemDirective.prototype, "tocID", null);
    SBProTocItemDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[sbproTocItem]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_services__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _modules_toc_services__WEBPACK_IMPORTED_MODULE_3__["TocService"]])], SBProTocItemDirective);
    /***/
  },

  /***/
  "./src/modules/toc/guards/index.ts":
  /*!*****************************************!*\
    !*** ./src/modules/toc/guards/index.ts ***!
    \*****************************************/

  /*! exports provided: guards, TocGuard */

  /***/
  function srcModulesTocGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "guards", function () {
      return guards;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _toc_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toc.guard */
    "./src/modules/toc/guards/toc.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TocGuard", function () {
      return _toc_guard__WEBPACK_IMPORTED_MODULE_1__["TocGuard"];
    });

    var guards = [_toc_guard__WEBPACK_IMPORTED_MODULE_1__["TocGuard"]];
    /***/
  },

  /***/
  "./src/modules/toc/guards/toc.guard.ts":
  /*!*********************************************!*\
    !*** ./src/modules/toc/guards/toc.guard.ts ***!
    \*********************************************/

  /*! exports provided: TocGuard */

  /***/
  function srcModulesTocGuardsTocGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TocGuard", function () {
      return TocGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TocGuard =
    /*#__PURE__*/
    function () {
      function TocGuard() {
        _classCallCheck(this, TocGuard);
      }

      _createClass(TocGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
      }]);

      return TocGuard;
    }();

    TocGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TocGuard);
    /***/
  },

  /***/
  "./src/modules/toc/services/index.ts":
  /*!*******************************************!*\
    !*** ./src/modules/toc/services/index.ts ***!
    \*******************************************/

  /*! exports provided: services, TocService */

  /***/
  function srcModulesTocServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _toc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toc.service */
    "./src/modules/toc/services/toc.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TocService", function () {
      return _toc_service__WEBPACK_IMPORTED_MODULE_1__["TocService"];
    });

    var services = [_toc_service__WEBPACK_IMPORTED_MODULE_1__["TocService"]];
    /***/
  },

  /***/
  "./src/modules/toc/services/toc.service.ts":
  /*!*************************************************!*\
    !*** ./src/modules/toc/services/toc.service.ts ***!
    \*************************************************/

  /*! exports provided: TocService */

  /***/
  function srcModulesTocServicesTocServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TocService", function () {
      return TocService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var _tocListener$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

    var TocService =
    /*#__PURE__*/
    function () {
      function TocService() {
        _classCallCheck(this, TocService);
      }

      _createClass(TocService, [{
        key: "tocListener$",
        get: function get() {
          return _tocListener$;
        }
      }]);

      return TocService;
    }();

    TocService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TocService);
    /***/
  },

  /***/
  "./src/modules/toc/toc.module.ts":
  /*!***************************************!*\
    !*** ./src/modules/toc/toc.module.ts ***!
    \***************************************/

  /*! exports provided: TocModule */

  /***/
  function srcModulesTocTocModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TocModule", function () {
      return TocModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @common/app-common.module */
    "./src/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @modules/navigation/navigation.module */
    "./src/modules/navigation/navigation.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components */
    "./src/modules/toc/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/toc/containers/index.ts");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./directives */
    "./src/modules/toc/directives/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/toc/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services */
    "./src/modules/toc/services/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Modules */

    /* Components */

    /* Containers */

    /* Directives */

    /* Guards */

    /* Services */


    var TocModule = function TocModule() {
      _classCallCheck(this, TocModule);
    };

    TocModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_6__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__["NavigationModule"]],
      providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_12__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_11__["guards"]), [_directives__WEBPACK_IMPORTED_MODULE_10__["directives"]]),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_9__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_8__["components"]), [_directives__WEBPACK_IMPORTED_MODULE_10__["directives"]]),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_9__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_8__["components"]), [_directives__WEBPACK_IMPORTED_MODULE_10__["directives"]])
    })], TocModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-dashboard-dashboard-routing-module-es5.js.map