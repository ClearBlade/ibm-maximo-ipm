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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 0;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// vim:ts=4:sts=4:sw=4:

/*!
 *
 * Copyright 2009-2017 Kris Kowal under the terms of the MIT
 * license found at https://github.com/kriskowal/q/blob/v1/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function (definition) {
  "use strict"; // This file will function properly as a <script> tag, or a module
  // using CommonJS and NodeJS or RequireJS module formats.  In
  // Common/Node/RequireJS, the module exports the Q API and when
  // executed as a simple <script>, it creates a Q global instead.
  // Montage Require

  if (typeof bootstrap === "function") {
    bootstrap("promise", definition); // CommonJS
  } else if (( false ? undefined : _typeof(exports)) === "object" && ( false ? undefined : _typeof(module)) === "object") {
    module.exports = definition(); // RequireJS
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // SES (Secure EcmaScript)
  } else { var previousQ, global; }
})(function () {
  "use strict";

  var hasStacks = false;

  try {
    throw new Error();
  } catch (e) {
    hasStacks = !!e.stack;
  } // All code after this point will be filtered from stack traces reported
  // by Q.


  var qStartingLine = captureLine();
  var qFileName; // shims
  // used for fallback in "allResolved"

  var noop = function noop() {}; // Use the fastest possible means to execute a task in a future turn
  // of the event loop.


  var nextTick = function () {
    // linked list of tasks (single, with head node)
    var head = {
      task: void 0,
      next: null
    };
    var tail = head;
    var flushing = false;
    var requestTick = void 0;
    var isNodeJS = false; // queue for late tasks, used by unhandled rejection tracking

    var laterQueue = [];

    function flush() {
      /* jshint loopfunc: true */
      var task, domain;

      while (head.next) {
        head = head.next;
        task = head.task;
        head.task = void 0;
        domain = head.domain;

        if (domain) {
          head.domain = void 0;
          domain.enter();
        }

        runSingle(task, domain);
      }

      while (laterQueue.length) {
        task = laterQueue.pop();
        runSingle(task);
      }

      flushing = false;
    } // runs a single function in the async queue


    function runSingle(task, domain) {
      try {
        task();
      } catch (e) {
        if (isNodeJS) {
          // In node, uncaught exceptions are considered fatal errors.
          // Re-throw them synchronously to interrupt flushing!
          // Ensure continuation if the uncaught exception is suppressed
          // listening "uncaughtException" events (as domains does).
          // Continue in next event to avoid tick recursion.
          if (domain) {
            domain.exit();
          }

          setTimeout(flush, 0);

          if (domain) {
            domain.enter();
          }

          throw e;
        } else {
          // In browsers, uncaught exceptions are not fatal.
          // Re-throw them asynchronously to avoid slow-downs.
          setTimeout(function () {
            throw e;
          }, 0);
        }
      }

      if (domain) {
        domain.exit();
      }
    }

    nextTick = function nextTick(task) {
      tail = tail.next = {
        task: task,
        domain: isNodeJS && process.domain,
        next: null
      };

      if (!flushing) {
        flushing = true;
        requestTick();
      }
    };

    if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.toString() === "[object process]" && process.nextTick) {
      // Ensure Q is in a real Node environment, with a `process.nextTick`.
      // To see through fake Node environments:
      // * Mocha test runner - exposes a `process` global without a `nextTick`
      // * Browserify - exposes a `process.nexTick` function that uses
      //   `setTimeout`. In this case `setImmediate` is preferred because
      //    it is faster. Browserify's `process.toString()` yields
      //   "[object Object]", while in a real Node environment
      //   `process.toString()` yields "[object process]".
      isNodeJS = true;

      requestTick = function requestTick() {
        process.nextTick(flush);
      };
    } else if (typeof setImmediate === "function") {
      // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
      if (typeof window !== "undefined") {
        requestTick = setImmediate.bind(window, flush);
      } else {
        requestTick = function requestTick() {
          setImmediate(flush);
        };
      }
    } else if (typeof MessageChannel !== "undefined") {
      // modern browsers
      // http://www.nonblocking.io/2011/06/windownexttick.html
      var channel = new MessageChannel(); // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
      // working message ports the first time a page loads.

      channel.port1.onmessage = function () {
        requestTick = requestPortTick;
        channel.port1.onmessage = flush;
        flush();
      };

      var requestPortTick = function requestPortTick() {
        // Opera requires us to provide a message payload, regardless of
        // whether we use it.
        channel.port2.postMessage(0);
      };

      requestTick = function requestTick() {
        setTimeout(flush, 0);
        requestPortTick();
      };
    } else {
      // old browsers
      requestTick = function requestTick() {
        setTimeout(flush, 0);
      };
    } // runs a task after all other tasks have been run
    // this is useful for unhandled rejection tracking that needs to happen
    // after all `then`d tasks have been run.


    nextTick.runAfter = function (task) {
      laterQueue.push(task);

      if (!flushing) {
        flushing = true;
        requestTick();
      }
    };

    return nextTick;
  }(); // Attempt to make generics safe in the face of downstream
  // modifications.
  // There is no situation where this is necessary.
  // If you need a security guarantee, these primordials need to be
  // deeply frozen anyway, and if you don’t need a security guarantee,
  // this is just plain paranoid.
  // However, this **might** have the nice side-effect of reducing the size of
  // the minified code by reducing x.call() to merely x()
  // See Mark Miller’s explanation of what this does.
  // http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming


  var call = Function.call;

  function uncurryThis(f) {
    return function () {
      return call.apply(f, arguments);
    };
  } // This is equivalent, but slower:
  // uncurryThis = Function_bind.bind(Function_bind.call);
  // http://jsperf.com/uncurrythis


  var array_slice = uncurryThis(Array.prototype.slice);
  var array_reduce = uncurryThis(Array.prototype.reduce || function (callback, basis) {
    var index = 0,
        length = this.length; // concerning the initial value, if one is not provided

    if (arguments.length === 1) {
      // seek to the first value in the array, accounting
      // for the possibility that is is a sparse array
      do {
        if (index in this) {
          basis = this[index++];
          break;
        }

        if (++index >= length) {
          throw new TypeError();
        }
      } while (1);
    } // reduce


    for (; index < length; index++) {
      // account for the possibility that the array is sparse
      if (index in this) {
        basis = callback(basis, this[index], index);
      }
    }

    return basis;
  });
  var array_indexOf = uncurryThis(Array.prototype.indexOf || function (value) {
    // not a very good shim, but good enough for our one use of it
    for (var i = 0; i < this.length; i++) {
      if (this[i] === value) {
        return i;
      }
    }

    return -1;
  });
  var array_map = uncurryThis(Array.prototype.map || function (callback, thisp) {
    var self = this;
    var collect = [];
    array_reduce(self, function (undefined, value, index) {
      collect.push(callback.call(thisp, value, index, self));
    }, void 0);
    return collect;
  });

  var object_create = Object.create || function (prototype) {
    function Type() {}

    Type.prototype = prototype;
    return new Type();
  };

  var object_defineProperty = Object.defineProperty || function (obj, prop, descriptor) {
    obj[prop] = descriptor.value;
    return obj;
  };

  var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

  var object_keys = Object.keys || function (object) {
    var keys = [];

    for (var key in object) {
      if (object_hasOwnProperty(object, key)) {
        keys.push(key);
      }
    }

    return keys;
  };

  var object_toString = uncurryThis(Object.prototype.toString);

  function isObject(value) {
    return value === Object(value);
  } // generator related shims
  // FIXME: Remove this function once ES6 generators are in SpiderMonkey.


  function isStopIteration(exception) {
    return object_toString(exception) === "[object StopIteration]" || exception instanceof QReturnValue;
  } // FIXME: Remove this helper and Q.return once ES6 generators are in
  // SpiderMonkey.


  var QReturnValue;

  if (typeof ReturnValue !== "undefined") {
    QReturnValue = ReturnValue;
  } else {
    QReturnValue = function QReturnValue(value) {
      this.value = value;
    };
  } // long stack traces


  var STACK_JUMP_SEPARATOR = "From previous event:";

  function makeStackTraceLong(error, promise) {
    // If possible, transform the error stack trace by removing Node and Q
    // cruft, then concatenating with the stack trace of `promise`. See #57.
    if (hasStacks && promise.stack && _typeof(error) === "object" && error !== null && error.stack) {
      var stacks = [];

      for (var p = promise; !!p; p = p.source) {
        if (p.stack && (!error.__minimumStackCounter__ || error.__minimumStackCounter__ > p.stackCounter)) {
          object_defineProperty(error, "__minimumStackCounter__", {
            value: p.stackCounter,
            configurable: true
          });
          stacks.unshift(p.stack);
        }
      }

      stacks.unshift(error.stack);
      var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
      var stack = filterStackString(concatedStacks);
      object_defineProperty(error, "stack", {
        value: stack,
        configurable: true
      });
    }
  }

  function filterStackString(stackString) {
    var lines = stackString.split("\n");
    var desiredLines = [];

    for (var i = 0; i < lines.length; ++i) {
      var line = lines[i];

      if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
        desiredLines.push(line);
      }
    }

    return desiredLines.join("\n");
  }

  function isNodeFrame(stackLine) {
    return stackLine.indexOf("(module.js:") !== -1 || stackLine.indexOf("(node.js:") !== -1;
  }

  function getFileNameAndLineNumber(stackLine) {
    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
    // In IE10 function name can have spaces ("Anonymous function") O_o
    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);

    if (attempt1) {
      return [attempt1[1], Number(attempt1[2])];
    } // Anonymous functions: "at filename:lineNumber:columnNumber"


    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);

    if (attempt2) {
      return [attempt2[1], Number(attempt2[2])];
    } // Firefox style: "function@filename:lineNumber or @filename:lineNumber"


    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);

    if (attempt3) {
      return [attempt3[1], Number(attempt3[2])];
    }
  }

  function isInternalFrame(stackLine) {
    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

    if (!fileNameAndLineNumber) {
      return false;
    }

    var fileName = fileNameAndLineNumber[0];
    var lineNumber = fileNameAndLineNumber[1];
    return fileName === qFileName && lineNumber >= qStartingLine && lineNumber <= qEndingLine;
  } // discover own file name and line number range for filtering stack
  // traces


  function captureLine() {
    if (!hasStacks) {
      return;
    }

    try {
      throw new Error();
    } catch (e) {
      var lines = e.stack.split("\n");
      var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
      var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);

      if (!fileNameAndLineNumber) {
        return;
      }

      qFileName = fileNameAndLineNumber[0];
      return fileNameAndLineNumber[1];
    }
  }

  function deprecate(callback, name, alternative) {
    return function () {
      if (typeof console !== "undefined" && typeof console.warn === "function") {
        console.warn(name + " is deprecated, use " + alternative + " instead.", new Error("").stack);
      }

      return callback.apply(callback, arguments);
    };
  } // end of shims
  // beginning of real work

  /**
   * Constructs a promise for an immediate reference, passes promises through, or
   * coerces promises from different systems.
   * @param value immediate reference or promise
   */


  function Q(value) {
    // If the object is already a Promise, return it directly.  This enables
    // the resolve function to both be used to created references from objects,
    // but to tolerably coerce non-promises to promises.
    if (value instanceof Promise) {
      return value;
    } // assimilate thenables


    if (isPromiseAlike(value)) {
      return coerce(value);
    } else {
      return fulfill(value);
    }
  }

  Q.resolve = Q;
  /**
   * Performs a task in a future turn of the event loop.
   * @param {Function} task
   */

  Q.nextTick = nextTick;
  /**
   * Controls whether or not long stack traces will be on
   */

  Q.longStackSupport = false;
  /**
   * The counter is used to determine the stopping point for building
   * long stack traces. In makeStackTraceLong we walk backwards through
   * the linked list of promises, only stacks which were created before
   * the rejection are concatenated.
   */

  var longStackCounter = 1; // enable long stacks if Q_DEBUG is set

  if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process && process.env && process.env.Q_DEBUG) {
    Q.longStackSupport = true;
  }
  /**
   * Constructs a {promise, resolve, reject} object.
   *
   * `resolve` is a callback to invoke with a more resolved value for the
   * promise. To fulfill the promise, invoke `resolve` with any value that is
   * not a thenable. To reject the promise, invoke `resolve` with a rejected
   * thenable, or invoke `reject` with the reason directly. To resolve the
   * promise to another thenable, thus putting it in the same state, invoke
   * `resolve` with that other thenable.
   */


  Q.defer = defer;

  function defer() {
    // if "messages" is an "Array", that indicates that the promise has not yet
    // been resolved.  If it is "undefined", it has been resolved.  Each
    // element of the messages array is itself an array of complete arguments to
    // forward to the resolved promise.  We coerce the resolution value to a
    // promise using the `resolve` function because it handles both fully
    // non-thenable values and other thenables gracefully.
    var messages = [],
        progressListeners = [],
        resolvedPromise;
    var deferred = object_create(defer.prototype);
    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, operands) {
      var args = array_slice(arguments);

      if (messages) {
        messages.push(args);

        if (op === "when" && operands[1]) {
          // progress operand
          progressListeners.push(operands[1]);
        }
      } else {
        Q.nextTick(function () {
          resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
        });
      }
    }; // XXX deprecated


    promise.valueOf = function () {
      if (messages) {
        return promise;
      }

      var nearerValue = nearer(resolvedPromise);

      if (isPromise(nearerValue)) {
        resolvedPromise = nearerValue; // shorten chain
      }

      return nearerValue;
    };

    promise.inspect = function () {
      if (!resolvedPromise) {
        return {
          state: "pending"
        };
      }

      return resolvedPromise.inspect();
    };

    if (Q.longStackSupport && hasStacks) {
      try {
        throw new Error();
      } catch (e) {
        // NOTE: don't try to use `Error.captureStackTrace` or transfer the
        // accessor around; that causes memory leaks as per GH-111. Just
        // reify the stack trace as a string ASAP.
        //
        // At the same time, cut off the first line; it's always just
        // "[object Promise]\n", as per the `toString`.
        promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
        promise.stackCounter = longStackCounter++;
      }
    } // NOTE: we do the checks for `resolvedPromise` in each method, instead of
    // consolidating them into `become`, since otherwise we'd create new
    // promises with the lines `become(whatever(value))`. See e.g. GH-252.


    function become(newPromise) {
      resolvedPromise = newPromise;

      if (Q.longStackSupport && hasStacks) {
        // Only hold a reference to the new promise if long stacks
        // are enabled to reduce memory usage
        promise.source = newPromise;
      }

      array_reduce(messages, function (undefined, message) {
        Q.nextTick(function () {
          newPromise.promiseDispatch.apply(newPromise, message);
        });
      }, void 0);
      messages = void 0;
      progressListeners = void 0;
    }

    deferred.promise = promise;

    deferred.resolve = function (value) {
      if (resolvedPromise) {
        return;
      }

      become(Q(value));
    };

    deferred.fulfill = function (value) {
      if (resolvedPromise) {
        return;
      }

      become(fulfill(value));
    };

    deferred.reject = function (reason) {
      if (resolvedPromise) {
        return;
      }

      become(reject(reason));
    };

    deferred.notify = function (progress) {
      if (resolvedPromise) {
        return;
      }

      array_reduce(progressListeners, function (undefined, progressListener) {
        Q.nextTick(function () {
          progressListener(progress);
        });
      }, void 0);
    };

    return deferred;
  }
  /**
   * Creates a Node-style callback that will resolve or reject the deferred
   * promise.
   * @returns a nodeback
   */


  defer.prototype.makeNodeResolver = function () {
    var self = this;
    return function (error, value) {
      if (error) {
        self.reject(error);
      } else if (arguments.length > 2) {
        self.resolve(array_slice(arguments, 1));
      } else {
        self.resolve(value);
      }
    };
  };
  /**
   * @param resolver {Function} a function that returns nothing and accepts
   * the resolve, reject, and notify functions for a deferred.
   * @returns a promise that may be resolved with the given resolve and reject
   * functions, or rejected by a thrown exception in resolver
   */


  Q.Promise = promise; // ES6

  Q.promise = promise;

  function promise(resolver) {
    if (typeof resolver !== "function") {
      throw new TypeError("resolver must be a function.");
    }

    var deferred = defer();

    try {
      resolver(deferred.resolve, deferred.reject, deferred.notify);
    } catch (reason) {
      deferred.reject(reason);
    }

    return deferred.promise;
  }

  promise.race = race; // ES6

  promise.all = all; // ES6

  promise.reject = reject; // ES6

  promise.resolve = Q; // ES6
  // XXX experimental.  This method is a way to denote that a local value is
  // serializable and should be immediately dispatched to a remote upon request,
  // instead of passing a reference.

  Q.passByCopy = function (object) {
    //freeze(object);
    //passByCopies.set(object, true);
    return object;
  };

  Promise.prototype.passByCopy = function () {
    //freeze(object);
    //passByCopies.set(object, true);
    return this;
  };
  /**
   * If two promises eventually fulfill to the same value, promises that value,
   * but otherwise rejects.
   * @param x {Any*}
   * @param y {Any*}
   * @returns {Any*} a promise for x and y if they are the same, but a rejection
   * otherwise.
   *
   */


  Q.join = function (x, y) {
    return Q(x).join(y);
  };

  Promise.prototype.join = function (that) {
    return Q([this, that]).spread(function (x, y) {
      if (x === y) {
        // TODO: "===" should be Object.is or equiv
        return x;
      } else {
        throw new Error("Q can't join: not the same: " + x + " " + y);
      }
    });
  };
  /**
   * Returns a promise for the first of an array of promises to become settled.
   * @param answers {Array[Any*]} promises to race
   * @returns {Any*} the first promise to be settled
   */


  Q.race = race;

  function race(answerPs) {
    return promise(function (resolve, reject) {
      // Switch to this once we can assume at least ES5
      // answerPs.forEach(function (answerP) {
      //     Q(answerP).then(resolve, reject);
      // });
      // Use this in the meantime
      for (var i = 0, len = answerPs.length; i < len; i++) {
        Q(answerPs[i]).then(resolve, reject);
      }
    });
  }

  Promise.prototype.race = function () {
    return this.then(Q.race);
  };
  /**
   * Constructs a Promise with a promise descriptor object and optional fallback
   * function.  The descriptor contains methods like when(rejected), get(name),
   * set(name, value), post(name, args), and delete(name), which all
   * return either a value, a promise for a value, or a rejection.  The fallback
   * accepts the operation name, a resolver, and any further arguments that would
   * have been forwarded to the appropriate method above had a method been
   * provided with the proper name.  The API makes no guarantees about the nature
   * of the returned object, apart from that it is usable whereever promises are
   * bought and sold.
   */


  Q.makePromise = Promise;

  function Promise(descriptor, fallback, inspect) {
    if (fallback === void 0) {
      fallback = function fallback(op) {
        return reject(new Error("Promise does not support operation: " + op));
      };
    }

    if (inspect === void 0) {
      inspect = function inspect() {
        return {
          state: "unknown"
        };
      };
    }

    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, args) {
      var result;

      try {
        if (descriptor[op]) {
          result = descriptor[op].apply(promise, args);
        } else {
          result = fallback.call(promise, op, args);
        }
      } catch (exception) {
        result = reject(exception);
      }

      if (resolve) {
        resolve(result);
      }
    };

    promise.inspect = inspect; // XXX deprecated `valueOf` and `exception` support

    if (inspect) {
      var inspected = inspect();

      if (inspected.state === "rejected") {
        promise.exception = inspected.reason;
      }

      promise.valueOf = function () {
        var inspected = inspect();

        if (inspected.state === "pending" || inspected.state === "rejected") {
          return promise;
        }

        return inspected.value;
      };
    }

    return promise;
  }

  Promise.prototype.toString = function () {
    return "[object Promise]";
  };

  Promise.prototype.then = function (fulfilled, rejected, progressed) {
    var self = this;
    var deferred = defer();
    var done = false; // ensure the untrusted promise makes at most a
    // single call to one of the callbacks

    function _fulfilled(value) {
      try {
        return typeof fulfilled === "function" ? fulfilled(value) : value;
      } catch (exception) {
        return reject(exception);
      }
    }

    function _rejected(exception) {
      if (typeof rejected === "function") {
        makeStackTraceLong(exception, self);

        try {
          return rejected(exception);
        } catch (newException) {
          return reject(newException);
        }
      }

      return reject(exception);
    }

    function _progressed(value) {
      return typeof progressed === "function" ? progressed(value) : value;
    }

    Q.nextTick(function () {
      self.promiseDispatch(function (value) {
        if (done) {
          return;
        }

        done = true;
        deferred.resolve(_fulfilled(value));
      }, "when", [function (exception) {
        if (done) {
          return;
        }

        done = true;
        deferred.resolve(_rejected(exception));
      }]);
    }); // Progress propagator need to be attached in the current tick.

    self.promiseDispatch(void 0, "when", [void 0, function (value) {
      var newValue;
      var threw = false;

      try {
        newValue = _progressed(value);
      } catch (e) {
        threw = true;

        if (Q.onerror) {
          Q.onerror(e);
        } else {
          throw e;
        }
      }

      if (!threw) {
        deferred.notify(newValue);
      }
    }]);
    return deferred.promise;
  };

  Q.tap = function (promise, callback) {
    return Q(promise).tap(callback);
  };
  /**
   * Works almost like "finally", but not called for rejections.
   * Original resolution value is passed through callback unaffected.
   * Callback may return a promise that will be awaited for.
   * @param {Function} callback
   * @returns {Q.Promise}
   * @example
   * doSomething()
   *   .then(...)
   *   .tap(console.log)
   *   .then(...);
   */


  Promise.prototype.tap = function (callback) {
    callback = Q(callback);
    return this.then(function (value) {
      return callback.fcall(value).thenResolve(value);
    });
  };
  /**
   * Registers an observer on a promise.
   *
   * Guarantees:
   *
   * 1. that fulfilled and rejected will be called only once.
   * 2. that either the fulfilled callback or the rejected callback will be
   *    called, but not both.
   * 3. that fulfilled and rejected will not be called in this turn.
   *
   * @param value      promise or immediate reference to observe
   * @param fulfilled  function to be called with the fulfilled value
   * @param rejected   function to be called with the rejection exception
   * @param progressed function to be called on any progress notifications
   * @return promise for the return value from the invoked callback
   */


  Q.when = when;

  function when(value, fulfilled, rejected, progressed) {
    return Q(value).then(fulfilled, rejected, progressed);
  }

  Promise.prototype.thenResolve = function (value) {
    return this.then(function () {
      return value;
    });
  };

  Q.thenResolve = function (promise, value) {
    return Q(promise).thenResolve(value);
  };

  Promise.prototype.thenReject = function (reason) {
    return this.then(function () {
      throw reason;
    });
  };

  Q.thenReject = function (promise, reason) {
    return Q(promise).thenReject(reason);
  };
  /**
   * If an object is not a promise, it is as "near" as possible.
   * If a promise is rejected, it is as "near" as possible too.
   * If it’s a fulfilled promise, the fulfillment value is nearer.
   * If it’s a deferred promise and the deferred has been resolved, the
   * resolution is "nearer".
   * @param object
   * @returns most resolved (nearest) form of the object
   */
  // XXX should we re-do this?


  Q.nearer = nearer;

  function nearer(value) {
    if (isPromise(value)) {
      var inspected = value.inspect();

      if (inspected.state === "fulfilled") {
        return inspected.value;
      }
    }

    return value;
  }
  /**
   * @returns whether the given object is a promise.
   * Otherwise it is a fulfilled value.
   */


  Q.isPromise = isPromise;

  function isPromise(object) {
    return object instanceof Promise;
  }

  Q.isPromiseAlike = isPromiseAlike;

  function isPromiseAlike(object) {
    return isObject(object) && typeof object.then === "function";
  }
  /**
   * @returns whether the given object is a pending promise, meaning not
   * fulfilled or rejected.
   */


  Q.isPending = isPending;

  function isPending(object) {
    return isPromise(object) && object.inspect().state === "pending";
  }

  Promise.prototype.isPending = function () {
    return this.inspect().state === "pending";
  };
  /**
   * @returns whether the given object is a value or fulfilled
   * promise.
   */


  Q.isFulfilled = isFulfilled;

  function isFulfilled(object) {
    return !isPromise(object) || object.inspect().state === "fulfilled";
  }

  Promise.prototype.isFulfilled = function () {
    return this.inspect().state === "fulfilled";
  };
  /**
   * @returns whether the given object is a rejected promise.
   */


  Q.isRejected = isRejected;

  function isRejected(object) {
    return isPromise(object) && object.inspect().state === "rejected";
  }

  Promise.prototype.isRejected = function () {
    return this.inspect().state === "rejected";
  }; //// BEGIN UNHANDLED REJECTION TRACKING
  // This promise library consumes exceptions thrown in handlers so they can be
  // handled by a subsequent promise.  The exceptions get added to this array when
  // they are created, and removed when they are handled.  Note that in ES6 or
  // shimmed environments, this would naturally be a `Set`.


  var unhandledReasons = [];
  var unhandledRejections = [];
  var reportedUnhandledRejections = [];
  var trackUnhandledRejections = true;

  function resetUnhandledRejections() {
    unhandledReasons.length = 0;
    unhandledRejections.length = 0;

    if (!trackUnhandledRejections) {
      trackUnhandledRejections = true;
    }
  }

  function trackRejection(promise, reason) {
    if (!trackUnhandledRejections) {
      return;
    }

    if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && typeof process.emit === "function") {
      Q.nextTick.runAfter(function () {
        if (array_indexOf(unhandledRejections, promise) !== -1) {
          process.emit("unhandledRejection", reason, promise);
          reportedUnhandledRejections.push(promise);
        }
      });
    }

    unhandledRejections.push(promise);

    if (reason && typeof reason.stack !== "undefined") {
      unhandledReasons.push(reason.stack);
    } else {
      unhandledReasons.push("(no stack) " + reason);
    }
  }

  function untrackRejection(promise) {
    if (!trackUnhandledRejections) {
      return;
    }

    var at = array_indexOf(unhandledRejections, promise);

    if (at !== -1) {
      if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && typeof process.emit === "function") {
        Q.nextTick.runAfter(function () {
          var atReport = array_indexOf(reportedUnhandledRejections, promise);

          if (atReport !== -1) {
            process.emit("rejectionHandled", unhandledReasons[at], promise);
            reportedUnhandledRejections.splice(atReport, 1);
          }
        });
      }

      unhandledRejections.splice(at, 1);
      unhandledReasons.splice(at, 1);
    }
  }

  Q.resetUnhandledRejections = resetUnhandledRejections;

  Q.getUnhandledReasons = function () {
    // Make a copy so that consumers can't interfere with our internal state.
    return unhandledReasons.slice();
  };

  Q.stopUnhandledRejectionTracking = function () {
    resetUnhandledRejections();
    trackUnhandledRejections = false;
  };

  resetUnhandledRejections(); //// END UNHANDLED REJECTION TRACKING

  /**
   * Constructs a rejected promise.
   * @param reason value describing the failure
   */

  Q.reject = reject;

  function reject(reason) {
    var rejection = Promise({
      "when": function when(rejected) {
        // note that the error has been handled
        if (rejected) {
          untrackRejection(this);
        }

        return rejected ? rejected(reason) : this;
      }
    }, function fallback() {
      return this;
    }, function inspect() {
      return {
        state: "rejected",
        reason: reason
      };
    }); // Note that the reason has not been handled.

    trackRejection(rejection, reason);
    return rejection;
  }
  /**
   * Constructs a fulfilled promise for an immediate reference.
   * @param value immediate reference
   */


  Q.fulfill = fulfill;

  function fulfill(value) {
    return Promise({
      "when": function when() {
        return value;
      },
      "get": function get(name) {
        return value[name];
      },
      "set": function set(name, rhs) {
        value[name] = rhs;
      },
      "delete": function _delete(name) {
        delete value[name];
      },
      "post": function post(name, args) {
        // Mark Miller proposes that post with no name should apply a
        // promised function.
        if (name === null || name === void 0) {
          return value.apply(void 0, args);
        } else {
          return value[name].apply(value, args);
        }
      },
      "apply": function apply(thisp, args) {
        return value.apply(thisp, args);
      },
      "keys": function keys() {
        return object_keys(value);
      }
    }, void 0, function inspect() {
      return {
        state: "fulfilled",
        value: value
      };
    });
  }
  /**
   * Converts thenables to Q promises.
   * @param promise thenable promise
   * @returns a Q promise
   */


  function coerce(promise) {
    var deferred = defer();
    Q.nextTick(function () {
      try {
        promise.then(deferred.resolve, deferred.reject, deferred.notify);
      } catch (exception) {
        deferred.reject(exception);
      }
    });
    return deferred.promise;
  }
  /**
   * Annotates an object such that it will never be
   * transferred away from this process over any promise
   * communication channel.
   * @param object
   * @returns promise a wrapping of that object that
   * additionally responds to the "isDef" message
   * without a rejection.
   */


  Q.master = master;

  function master(object) {
    return Promise({
      "isDef": function isDef() {}
    }, function fallback(op, args) {
      return dispatch(object, op, args);
    }, function () {
      return Q(object).inspect();
    });
  }
  /**
   * Spreads the values of a promised array of arguments into the
   * fulfillment callback.
   * @param fulfilled callback that receives variadic arguments from the
   * promised array
   * @param rejected callback that receives the exception if the promise
   * is rejected.
   * @returns a promise for the return value or thrown exception of
   * either callback.
   */


  Q.spread = spread;

  function spread(value, fulfilled, rejected) {
    return Q(value).spread(fulfilled, rejected);
  }

  Promise.prototype.spread = function (fulfilled, rejected) {
    return this.all().then(function (array) {
      return fulfilled.apply(void 0, array);
    }, rejected);
  };
  /**
   * The async function is a decorator for generator functions, turning
   * them into asynchronous generators.  Although generators are only part
   * of the newest ECMAScript 6 drafts, this code does not cause syntax
   * errors in older engines.  This code should continue to work and will
   * in fact improve over time as the language improves.
   *
   * ES6 generators are currently part of V8 version 3.19 with the
   * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
   * for longer, but under an older Python-inspired form.  This function
   * works on both kinds of generators.
   *
   * Decorates a generator function such that:
   *  - it may yield promises
   *  - execution will continue when that promise is fulfilled
   *  - the value of the yield expression will be the fulfilled value
   *  - it returns a promise for the return value (when the generator
   *    stops iterating)
   *  - the decorated function returns a promise for the return value
   *    of the generator or the first rejected promise among those
   *    yielded.
   *  - if an error is thrown in the generator, it propagates through
   *    every following yield until it is caught, or until it escapes
   *    the generator function altogether, and is translated into a
   *    rejection for the promise returned by the decorated generator.
   */


  Q.async = async;

  function async(makeGenerator) {
    return function () {
      // when verb is "send", arg is a value
      // when verb is "throw", arg is an exception
      function continuer(verb, arg) {
        var result; // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
        // engine that has a deployed base of browsers that support generators.
        // However, SM's generators use the Python-inspired semantics of
        // outdated ES6 drafts.  We would like to support ES6, but we'd also
        // like to make it possible to use generators in deployed browsers, so
        // we also support Python-style generators.  At some point we can remove
        // this block.

        if (typeof StopIteration === "undefined") {
          // ES6 Generators
          try {
            result = generator[verb](arg);
          } catch (exception) {
            return reject(exception);
          }

          if (result.done) {
            return Q(result.value);
          } else {
            return when(result.value, callback, errback);
          }
        } else {
          // SpiderMonkey Generators
          // FIXME: Remove this case when SM does ES6 generators.
          try {
            result = generator[verb](arg);
          } catch (exception) {
            if (isStopIteration(exception)) {
              return Q(exception.value);
            } else {
              return reject(exception);
            }
          }

          return when(result, callback, errback);
        }
      }

      var generator = makeGenerator.apply(this, arguments);
      var callback = continuer.bind(continuer, "next");
      var errback = continuer.bind(continuer, "throw");
      return callback();
    };
  }
  /**
   * The spawn function is a small wrapper around async that immediately
   * calls the generator and also ends the promise chain, so that any
   * unhandled errors are thrown instead of forwarded to the error
   * handler. This is useful because it's extremely common to run
   * generators at the top-level to work with libraries.
   */


  Q.spawn = spawn;

  function spawn(makeGenerator) {
    Q.done(Q.async(makeGenerator)());
  } // FIXME: Remove this interface once ES6 generators are in SpiderMonkey.

  /**
   * Throws a ReturnValue exception to stop an asynchronous generator.
   *
   * This interface is a stop-gap measure to support generator return
   * values in older Firefox/SpiderMonkey.  In browsers that support ES6
   * generators like Chromium 29, just use "return" in your generator
   * functions.
   *
   * @param value the return value for the surrounding generator
   * @throws ReturnValue exception with the value.
   * @example
   * // ES6 style
   * Q.async(function* () {
   *      var foo = yield getFooPromise();
   *      var bar = yield getBarPromise();
   *      return foo + bar;
   * })
   * // Older SpiderMonkey style
   * Q.async(function () {
   *      var foo = yield getFooPromise();
   *      var bar = yield getBarPromise();
   *      Q.return(foo + bar);
   * })
   */


  Q["return"] = _return;

  function _return(value) {
    throw new QReturnValue(value);
  }
  /**
   * The promised function decorator ensures that any promise arguments
   * are settled and passed as values (`this` is also settled and passed
   * as a value).  It will also ensure that the result of a function is
   * always a promise.
   *
   * @example
   * var add = Q.promised(function (a, b) {
   *     return a + b;
   * });
   * add(Q(a), Q(B));
   *
   * @param {function} callback The function to decorate
   * @returns {function} a function that has been decorated.
   */


  Q.promised = promised;

  function promised(callback) {
    return function () {
      return spread([this, all(arguments)], function (self, args) {
        return callback.apply(self, args);
      });
    };
  }
  /**
   * sends a message to a value in a future turn
   * @param object* the recipient
   * @param op the name of the message operation, e.g., "when",
   * @param args further arguments to be forwarded to the operation
   * @returns result {Promise} a promise for the result of the operation
   */


  Q.dispatch = dispatch;

  function dispatch(object, op, args) {
    return Q(object).dispatch(op, args);
  }

  Promise.prototype.dispatch = function (op, args) {
    var self = this;
    var deferred = defer();
    Q.nextTick(function () {
      self.promiseDispatch(deferred.resolve, op, args);
    });
    return deferred.promise;
  };
  /**
   * Gets the value of a property in a future turn.
   * @param object    promise or immediate reference for target object
   * @param name      name of property to get
   * @return promise for the property value
   */


  Q.get = function (object, key) {
    return Q(object).dispatch("get", [key]);
  };

  Promise.prototype.get = function (key) {
    return this.dispatch("get", [key]);
  };
  /**
   * Sets the value of a property in a future turn.
   * @param object    promise or immediate reference for object object
   * @param name      name of property to set
   * @param value     new value of property
   * @return promise for the return value
   */


  Q.set = function (object, key, value) {
    return Q(object).dispatch("set", [key, value]);
  };

  Promise.prototype.set = function (key, value) {
    return this.dispatch("set", [key, value]);
  };
  /**
   * Deletes a property in a future turn.
   * @param object    promise or immediate reference for target object
   * @param name      name of property to delete
   * @return promise for the return value
   */


  Q.del = // XXX legacy
  Q["delete"] = function (object, key) {
    return Q(object).dispatch("delete", [key]);
  };

  Promise.prototype.del = // XXX legacy
  Promise.prototype["delete"] = function (key) {
    return this.dispatch("delete", [key]);
  };
  /**
   * Invokes a method in a future turn.
   * @param object    promise or immediate reference for target object
   * @param name      name of method to invoke
   * @param value     a value to post, typically an array of
   *                  invocation arguments for promises that
   *                  are ultimately backed with `resolve` values,
   *                  as opposed to those backed with URLs
   *                  wherein the posted value can be any
   *                  JSON serializable object.
   * @return promise for the return value
   */
  // bound locally because it is used by other methods


  Q.mapply = // XXX As proposed by "Redsandro"
  Q.post = function (object, name, args) {
    return Q(object).dispatch("post", [name, args]);
  };

  Promise.prototype.mapply = // XXX As proposed by "Redsandro"
  Promise.prototype.post = function (name, args) {
    return this.dispatch("post", [name, args]);
  };
  /**
   * Invokes a method in a future turn.
   * @param object    promise or immediate reference for target object
   * @param name      name of method to invoke
   * @param ...args   array of invocation arguments
   * @return promise for the return value
   */


  Q.send = // XXX Mark Miller's proposed parlance
  Q.mcall = // XXX As proposed by "Redsandro"
  Q.invoke = function (object, name
  /*...args*/
  ) {
    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
  };

  Promise.prototype.send = // XXX Mark Miller's proposed parlance
  Promise.prototype.mcall = // XXX As proposed by "Redsandro"
  Promise.prototype.invoke = function (name
  /*...args*/
  ) {
    return this.dispatch("post", [name, array_slice(arguments, 1)]);
  };
  /**
   * Applies the promised function in a future turn.
   * @param object    promise or immediate reference for target function
   * @param args      array of application arguments
   */


  Q.fapply = function (object, args) {
    return Q(object).dispatch("apply", [void 0, args]);
  };

  Promise.prototype.fapply = function (args) {
    return this.dispatch("apply", [void 0, args]);
  };
  /**
   * Calls the promised function in a future turn.
   * @param object    promise or immediate reference for target function
   * @param ...args   array of application arguments
   */


  Q["try"] = Q.fcall = function (object
  /* ...args*/
  ) {
    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
  };

  Promise.prototype.fcall = function ()
  /*...args*/
  {
    return this.dispatch("apply", [void 0, array_slice(arguments)]);
  };
  /**
   * Binds the promised function, transforming return values into a fulfilled
   * promise and thrown errors into a rejected one.
   * @param object    promise or immediate reference for target function
   * @param ...args   array of application arguments
   */


  Q.fbind = function (object
  /*...args*/
  ) {
    var promise = Q(object);
    var args = array_slice(arguments, 1);
    return function fbound() {
      return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
    };
  };

  Promise.prototype.fbind = function ()
  /*...args*/
  {
    var promise = this;
    var args = array_slice(arguments);
    return function fbound() {
      return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
    };
  };
  /**
   * Requests the names of the owned properties of a promised
   * object in a future turn.
   * @param object    promise or immediate reference for target object
   * @return promise for the keys of the eventually settled object
   */


  Q.keys = function (object) {
    return Q(object).dispatch("keys", []);
  };

  Promise.prototype.keys = function () {
    return this.dispatch("keys", []);
  };
  /**
   * Turns an array of promises into a promise for an array.  If any of
   * the promises gets rejected, the whole array is rejected immediately.
   * @param {Array*} an array (or promise for an array) of values (or
   * promises for values)
   * @returns a promise for an array of the corresponding values
   */
  // By Mark Miller
  // http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled


  Q.all = all;

  function all(promises) {
    return when(promises, function (promises) {
      var pendingCount = 0;
      var deferred = defer();
      array_reduce(promises, function (undefined, promise, index) {
        var snapshot;

        if (isPromise(promise) && (snapshot = promise.inspect()).state === "fulfilled") {
          promises[index] = snapshot.value;
        } else {
          ++pendingCount;
          when(promise, function (value) {
            promises[index] = value;

            if (--pendingCount === 0) {
              deferred.resolve(promises);
            }
          }, deferred.reject, function (progress) {
            deferred.notify({
              index: index,
              value: progress
            });
          });
        }
      }, void 0);

      if (pendingCount === 0) {
        deferred.resolve(promises);
      }

      return deferred.promise;
    });
  }

  Promise.prototype.all = function () {
    return all(this);
  };
  /**
   * Returns the first resolved promise of an array. Prior rejected promises are
   * ignored.  Rejects only if all promises are rejected.
   * @param {Array*} an array containing values or promises for values
   * @returns a promise fulfilled with the value of the first resolved promise,
   * or a rejected promise if all promises are rejected.
   */


  Q.any = any;

  function any(promises) {
    if (promises.length === 0) {
      return Q.resolve();
    }

    var deferred = Q.defer();
    var pendingCount = 0;
    array_reduce(promises, function (prev, current, index) {
      var promise = promises[index];
      pendingCount++;
      when(promise, onFulfilled, onRejected, onProgress);

      function onFulfilled(result) {
        deferred.resolve(result);
      }

      function onRejected(err) {
        pendingCount--;

        if (pendingCount === 0) {
          var rejection = err || new Error("" + err);
          rejection.message = "Q can't get fulfillment value from any promise, all " + "promises were rejected. Last error message: " + rejection.message;
          deferred.reject(rejection);
        }
      }

      function onProgress(progress) {
        deferred.notify({
          index: index,
          value: progress
        });
      }
    }, undefined);
    return deferred.promise;
  }

  Promise.prototype.any = function () {
    return any(this);
  };
  /**
   * Waits for all promises to be settled, either fulfilled or
   * rejected.  This is distinct from `all` since that would stop
   * waiting at the first rejection.  The promise returned by
   * `allResolved` will never be rejected.
   * @param promises a promise for an array (or an array) of promises
   * (or values)
   * @return a promise for an array of promises
   */


  Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");

  function allResolved(promises) {
    return when(promises, function (promises) {
      promises = array_map(promises, Q);
      return when(all(array_map(promises, function (promise) {
        return when(promise, noop, noop);
      })), function () {
        return promises;
      });
    });
  }

  Promise.prototype.allResolved = function () {
    return allResolved(this);
  };
  /**
   * @see Promise#allSettled
   */


  Q.allSettled = allSettled;

  function allSettled(promises) {
    return Q(promises).allSettled();
  }
  /**
   * Turns an array of promises into a promise for an array of their states (as
   * returned by `inspect`) when they have all settled.
   * @param {Array[Any*]} values an array (or promise for an array) of values (or
   * promises for values)
   * @returns {Array[State]} an array of states for the respective values.
   */


  Promise.prototype.allSettled = function () {
    return this.then(function (promises) {
      return all(array_map(promises, function (promise) {
        promise = Q(promise);

        function regardless() {
          return promise.inspect();
        }

        return promise.then(regardless, regardless);
      }));
    });
  };
  /**
   * Captures the failure of a promise, giving an oportunity to recover
   * with a callback.  If the given promise is fulfilled, the returned
   * promise is fulfilled.
   * @param {Any*} promise for something
   * @param {Function} callback to fulfill the returned promise if the
   * given promise is rejected
   * @returns a promise for the return value of the callback
   */


  Q.fail = // XXX legacy
  Q["catch"] = function (object, rejected) {
    return Q(object).then(void 0, rejected);
  };

  Promise.prototype.fail = // XXX legacy
  Promise.prototype["catch"] = function (rejected) {
    return this.then(void 0, rejected);
  };
  /**
   * Attaches a listener that can respond to progress notifications from a
   * promise's originating deferred. This listener receives the exact arguments
   * passed to ``deferred.notify``.
   * @param {Any*} promise for something
   * @param {Function} callback to receive any progress notifications
   * @returns the given promise, unchanged
   */


  Q.progress = progress;

  function progress(object, progressed) {
    return Q(object).then(void 0, void 0, progressed);
  }

  Promise.prototype.progress = function (progressed) {
    return this.then(void 0, void 0, progressed);
  };
  /**
   * Provides an opportunity to observe the settling of a promise,
   * regardless of whether the promise is fulfilled or rejected.  Forwards
   * the resolution to the returned promise when the callback is done.
   * The callback can return a promise to defer completion.
   * @param {Any*} promise
   * @param {Function} callback to observe the resolution of the given
   * promise, takes no arguments.
   * @returns a promise for the resolution of the given promise when
   * ``fin`` is done.
   */


  Q.fin = // XXX legacy
  Q["finally"] = function (object, callback) {
    return Q(object)["finally"](callback);
  };

  Promise.prototype.fin = // XXX legacy
  Promise.prototype["finally"] = function (callback) {
    if (!callback || typeof callback.apply !== "function") {
      throw new Error("Q can't apply finally callback");
    }

    callback = Q(callback);
    return this.then(function (value) {
      return callback.fcall().then(function () {
        return value;
      });
    }, function (reason) {
      // TODO attempt to recycle the rejection with "this".
      return callback.fcall().then(function () {
        throw reason;
      });
    });
  };
  /**
   * Terminates a chain of promises, forcing rejections to be
   * thrown as exceptions.
   * @param {Any*} promise at the end of a chain of promises
   * @returns nothing
   */


  Q.done = function (object, fulfilled, rejected, progress) {
    return Q(object).done(fulfilled, rejected, progress);
  };

  Promise.prototype.done = function (fulfilled, rejected, progress) {
    var onUnhandledError = function onUnhandledError(error) {
      // forward to a future turn so that ``when``
      // does not catch it and turn it into a rejection.
      Q.nextTick(function () {
        makeStackTraceLong(error, promise);

        if (Q.onerror) {
          Q.onerror(error);
        } else {
          throw error;
        }
      });
    }; // Avoid unnecessary `nextTick`ing via an unnecessary `when`.


    var promise = fulfilled || rejected || progress ? this.then(fulfilled, rejected, progress) : this;

    if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process && process.domain) {
      onUnhandledError = process.domain.bind(onUnhandledError);
    }

    promise.then(void 0, onUnhandledError);
  };
  /**
   * Causes a promise to be rejected if it does not get fulfilled before
   * some milliseconds time out.
   * @param {Any*} promise
   * @param {Number} milliseconds timeout
   * @param {Any*} custom error message or Error object (optional)
   * @returns a promise for the resolution of the given promise if it is
   * fulfilled before the timeout, otherwise rejected.
   */


  Q.timeout = function (object, ms, error) {
    return Q(object).timeout(ms, error);
  };

  Promise.prototype.timeout = function (ms, error) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
      if (!error || "string" === typeof error) {
        error = new Error(error || "Timed out after " + ms + " ms");
        error.code = "ETIMEDOUT";
      }

      deferred.reject(error);
    }, ms);
    this.then(function (value) {
      clearTimeout(timeoutId);
      deferred.resolve(value);
    }, function (exception) {
      clearTimeout(timeoutId);
      deferred.reject(exception);
    }, deferred.notify);
    return deferred.promise;
  };
  /**
   * Returns a promise for the given value (or promised value), some
   * milliseconds after it resolved. Passes rejections immediately.
   * @param {Any*} promise
   * @param {Number} milliseconds
   * @returns a promise for the resolution of the given promise after milliseconds
   * time has elapsed since the resolution of the given promise.
   * If the given promise rejects, that is passed immediately.
   */


  Q.delay = function (object, timeout) {
    if (timeout === void 0) {
      timeout = object;
      object = void 0;
    }

    return Q(object).delay(timeout);
  };

  Promise.prototype.delay = function (timeout) {
    return this.then(function (value) {
      var deferred = defer();
      setTimeout(function () {
        deferred.resolve(value);
      }, timeout);
      return deferred.promise;
    });
  };
  /**
   * Passes a continuation to a Node function, which is called with the given
   * arguments provided as an array, and returns a promise.
   *
   *      Q.nfapply(FS.readFile, [__filename])
   *      .then(function (content) {
   *      })
   *
   */


  Q.nfapply = function (callback, args) {
    return Q(callback).nfapply(args);
  };

  Promise.prototype.nfapply = function (args) {
    var deferred = defer();
    var nodeArgs = array_slice(args);
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
  };
  /**
   * Passes a continuation to a Node function, which is called with the given
   * arguments provided individually, and returns a promise.
   * @example
   * Q.nfcall(FS.readFile, __filename)
   * .then(function (content) {
   * })
   *
   */


  Q.nfcall = function (callback
  /*...args*/
  ) {
    var args = array_slice(arguments, 1);
    return Q(callback).nfapply(args);
  };

  Promise.prototype.nfcall = function ()
  /*...args*/
  {
    var nodeArgs = array_slice(arguments);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
  };
  /**
   * Wraps a NodeJS continuation passing function and returns an equivalent
   * version that returns a promise.
   * @example
   * Q.nfbind(FS.readFile, __filename)("utf-8")
   * .then(console.log)
   * .done()
   */


  Q.nfbind = Q.denodeify = function (callback
  /*...args*/
  ) {
    if (callback === undefined) {
      throw new Error("Q can't wrap an undefined function");
    }

    var baseArgs = array_slice(arguments, 1);
    return function () {
      var nodeArgs = baseArgs.concat(array_slice(arguments));
      var deferred = defer();
      nodeArgs.push(deferred.makeNodeResolver());
      Q(callback).fapply(nodeArgs).fail(deferred.reject);
      return deferred.promise;
    };
  };

  Promise.prototype.nfbind = Promise.prototype.denodeify = function ()
  /*...args*/
  {
    var args = array_slice(arguments);
    args.unshift(this);
    return Q.denodeify.apply(void 0, args);
  };

  Q.nbind = function (callback, thisp
  /*...args*/
  ) {
    var baseArgs = array_slice(arguments, 2);
    return function () {
      var nodeArgs = baseArgs.concat(array_slice(arguments));
      var deferred = defer();
      nodeArgs.push(deferred.makeNodeResolver());

      function bound() {
        return callback.apply(thisp, arguments);
      }

      Q(bound).fapply(nodeArgs).fail(deferred.reject);
      return deferred.promise;
    };
  };

  Promise.prototype.nbind = function ()
  /*thisp, ...args*/
  {
    var args = array_slice(arguments, 0);
    args.unshift(this);
    return Q.nbind.apply(void 0, args);
  };
  /**
   * Calls a method of a Node-style object that accepts a Node-style
   * callback with a given array of arguments, plus a provided callback.
   * @param object an object that has the named method
   * @param {String} name name of the method of object
   * @param {Array} args arguments to pass to the method; the callback
   * will be provided by Q and appended to these arguments.
   * @returns a promise for the value or error
   */


  Q.nmapply = // XXX As proposed by "Redsandro"
  Q.npost = function (object, name, args) {
    return Q(object).npost(name, args);
  };

  Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
  Promise.prototype.npost = function (name, args) {
    var nodeArgs = array_slice(args || []);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
  };
  /**
   * Calls a method of a Node-style object that accepts a Node-style
   * callback, forwarding the given variadic arguments, plus a provided
   * callback argument.
   * @param object an object that has the named method
   * @param {String} name name of the method of object
   * @param ...args arguments to pass to the method; the callback will
   * be provided by Q and appended to these arguments.
   * @returns a promise for the value or error
   */


  Q.nsend = // XXX Based on Mark Miller's proposed "send"
  Q.nmcall = // XXX Based on "Redsandro's" proposal
  Q.ninvoke = function (object, name
  /*...args*/
  ) {
    var nodeArgs = array_slice(arguments, 2);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
  };

  Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
  Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
  Promise.prototype.ninvoke = function (name
  /*...args*/
  ) {
    var nodeArgs = array_slice(arguments, 1);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
  };
  /**
   * If a function would like to support both Node continuation-passing-style and
   * promise-returning-style, it can end its internal promise chain with
   * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
   * elects to use a nodeback, the result will be sent there.  If they do not
   * pass a nodeback, they will receive the result promise.
   * @param object a result (or a promise for a result)
   * @param {Function} nodeback a Node.js-style callback
   * @returns either the promise or nothing
   */


  Q.nodeify = nodeify;

  function nodeify(object, nodeback) {
    return Q(object).nodeify(nodeback);
  }

  Promise.prototype.nodeify = function (nodeback) {
    if (nodeback) {
      this.then(function (value) {
        Q.nextTick(function () {
          nodeback(null, value);
        });
      }, function (error) {
        Q.nextTick(function () {
          nodeback(error);
        });
      });
    } else {
      return this;
    }
  };

  Q.noConflict = function () {
    throw new Error("Q.noConflict only works when Q is used as a global");
  }; // All code before this point will be filtered from stack traces.


  var qEndingLine = captureLine();
  return Q;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ResourceSet;

var url = __webpack_require__(1);

var buffer = __webpack_require__(2);

var http = __webpack_require__(3);

var Q = __webpack_require__(4);

var querystring = __webpack_require__(5);

var REST_PATH = '/maximo/oslc/os/';
var X_PUB_PATH = '/maximo/oslc/';
var REST_PATH = '/maximo/oslc/os/';

var Resource = __webpack_require__(7);

var FetchConnector = __webpack_require__(16);

var CRUDConnector = __webpack_require__(9);

var ExternalConnector = __webpack_require__(17);

var SchemaConnector = __webpack_require__(19);
/**
 * Business object for Maximo OSLC API
 *
 * @constructor
 * @param {Object} Maximo Rest URL - e.g. http://maxadmin:maxadmin@localhost:7001
 */


function ResourceSet(resourcemboset, cookie, maxfactory, mbo, actype) {
  this.cookie = cookie; // Since JavaScript does not support method/constructor overloading we have
  // to handle multiple constructors by sniffing them out manually.
  // Constructor 1

  if (resourcemboset != null && cookie !== null) {
    //console.log("Instanciating Zombie Mbo Set - Constructor 1 ");
    this.resourcemboset = resourcemboset;
    return this;
  } // Constructor 2


  if (maxfactory != "undefined" && mbo != "undefined") {
    X_PUB_PATH = maxfactory.auth_scheme + '/oslc/';
    REST_PATH = X_PUB_PATH + actype + '/';
    this.maximoRestUrl = maxfactory.resturl;
    this.password = maxfactory.password;
    this.mbo = mbo;
    this.islean = maxfactory.islean;
    console.log("this.islean ****** " + this.islean);
    this.namespace = this.islean == 1 ? "" : "spi:";
    this.tenantcode = maxfactory.tenantcode;
    this.maximopath = REST_PATH + this.mbo + "?lean=" + this.islean;
    this.maximopath = this.tenantcode ? this.maximopath + "&_tenantcode=" + this.tenantcode : this.maximopath;
    this.schemapath = X_PUB_PATH + 'jsonschemas/';
    this.nextpageurl = "";
    this.authType = maxfactory.authType;

    if (this.authType == "form") {
      this.fconnect = new FetchConnector(this.maximoRestUrl, this.maximopath);
      this.fconnect.authType = this.authType;
      this.fconnect.authenticate(this.fconnect);
    }

    return this;
  }
}

;
ResourceSet.prototype.cookie;
ResourceSet.prototype.fconnect; //* Returns the rdfs member only

ResourceSet.prototype.thisResourceSet = function () {
  return this.resourcemboset["member"];
}; //* Returns the complete JSON i.e all top level OR sets this set and returns the new set.


ResourceSet.prototype.JSON = function (resourcemboset) {
  if (resourcemboset != null) {
    this.resourcemboset = resourcemboset;
  }

  return this.resourcemboset;
};

ResourceSet.prototype.fetch = function (datacallback) {
  return getFetchConnector(this).__fetch(this.fconnect); // Pass this.fconnect so the it's state is updated.
};

ResourceSet.prototype.schema = function (datacallback) {
  return getSchemaConnector(this).__fetch(this.sconnect); // Pass this.sconnect so the it's state is updated.
};

ResourceSet.prototype.schemarelated = function (datacallback) {
  return getSchemaRelatedConnector(this).__fetch(this.sconnect); // Pass this.sconnect so the it's state is updated.
};

ResourceSet.prototype.nextpage = function (np, datacallback) {
  return getFetchConnector(this).__fetchnext(np, this.fconnect); // Pass this.fconnect so the it's state is updated.
};

ResourceSet.prototype.resource = function (i) {
  //console.log("Index type "+typeof(i));
  var connex = this.cookie ? this.cookie : this.maximoRestUrl;

  if (typeof i === "number") //Strictly a number type and we assume this set contains members
    {
      return new Resource(this.resourcemboset["rdfs:member"][i], this.cookie);
    } //console.log("THIS COOKIE "+this.maximoRestUrl);
  //console.log("THIS COOKIE "+i);
  //console.log("CONNEX: "+connex);
  //console.log("CONNEX: "+typeof(connex));
  // Most likely a URL so we will have to fetch/update/delete/invoke


  var res = new Resource(i, connex);

  if (this.cookie) {
    res.setcookie(this.cookie);
  }

  return res;
};

ResourceSet.prototype.size = function () {
  return this.resourcemboset["rdfs:member"].length;
};

ResourceSet.prototype.select = function (selects) {
  if (selects && selects.constructor === Array) {
    var arrayLength = selects.length;
    var selectStr = '';
    var relationships = {};

    for (var i = 0; i < arrayLength; i++) {
      var wh = selects[i];
      wh = wh.indexOf(":") < 1 ? this.namespace + wh : wh; //prepend the name spaces

      /*if(wh.indexOf(".") > 1) // check if this attribute is a relationship and construct expression
      {
      	var wharray = wh.split(".");
      	//wh = wharray[0]+"{"+this.namespace+wharray[1]+"}";
      			relatedset(wharray[0],this.namespace+wharray[1],relationships);
      }*/

      selectStr = arrayLength - i > 1 ? selectStr + wh + "," : selectStr + wh;
    }
  }

  this.select = selectStr + relationshipString(relationships);

  if (this.select != null && this.select != "") {
    this.maximopath = getMaximoPath(this.maximopath) + "oslc.select=" + encodeURIComponent(this.select);
  }

  return this;
};

ResourceSet.prototype.where = function (prop) {
  this.where = prop.indexOf(":") < 1 ? this.namespace + prop : prop; //this.where = prop;

  if (this.where != null && this.where != "") {
    this.maximopath = this.maximopath.indexOf("oslc.where=") > -1 ? getMaximoPath(this.maximopath) + "and" + encodeURIComponent(this.where) : getMaximoPath(this.maximopath) + "oslc.where=" + encodeURIComponent(this.where);
  }

  return this;
};

ResourceSet.prototype.and = function (str) {
  str = str.indexOf(":") < 1 ? this.namespace + str : str;
  this.maximopath = this.maximopath + encodeURIComponent(" and ") + encodeURIComponent(str);
  return this;
};

ResourceSet.prototype["in"] = function (inarr, isint) {
  if (inarr && inarr.constructor === Array) {
    var arrayLength = inarr.length;
    var inarrStr = '';

    for (var i = 0; i < arrayLength; i++) {
      var inElement = inarr[i]; //inarrStr = ((arrayLength - i) > 1) ? inarrStr+'"'+inElement+'",' : inarrStr+'"'+inElement+'"';

      inarrStr = isint ? arrayLength - i > 1 ? inarrStr + inElement + ',' : inarrStr + inElement : arrayLength - i > 1 ? inarrStr + '"' + inElement + '",' : inarrStr + '"' + inElement + '"';
    }
  }

  this.maximopath = this.maximopath + encodeURIComponent(" in[" + inarrStr + "]");
  return this;
};

ResourceSet.prototype.equal = function (eq) {
  if (this.where != null && this.where != "") {
    //.where("spi:status").equal('"APPR"')
    eq = typeof eq === "string" ? '"' + eq + '"' : eq;
    this.maximopath = this.maximopath + "=" + encodeURIComponent(eq);
  }

  return this;
};

ResourceSet.prototype.notequal = function (eq) {
  if (this.where != null && this.where != "") {
    //.where("spi:status").equal('"APPR"')
    eq = typeof eq === "string" ? '"' + eq + '"' : eq;
    this.maximopath = this.maximopath + "!=" + encodeURIComponent(eq);
  }

  return this;
};

ResourceSet.prototype.notnull = function (eq) {
  if (this.where != null && this.where != "") {
    var eq = '*';
    eq = typeof eq === "string" ? '"' + eq + '"' : eq;
    this.maximopath = this.maximopath + "=" + encodeURIComponent(eq);
  }

  return this;
};

ResourceSet.prototype.orderby = function (oby, direction) {
  if (this.where != null && this.where != "") {
    oby = oby.indexOf(":") < 1 ? this.namespace + oby : oby;
    var ascending = direction == 'desc' ? 0 : 1;
    oby = ascending ? "+" + oby : "-" + oby;
    this.maximopath = this.maximopath + "&oslc.orderBy=" + encodeURIComponent(oby);
  }

  return this;
};

ResourceSet.prototype.urlparam = function (field, value) {
  if (field != null && value != "") {
    this.maximopath = this.maximopath + "&" + field + "=" + value;
  }

  return this;
};

ResourceSet.prototype.pagesize = function (pagesize) {
  this.pagesize = pagesize;

  if (this.pagesize != null && this.pagesize != "") {
    this.maximopath = getMaximoPath(this.maximopath) + "oslc.pageSize=" + encodeURIComponent(this.pagesize);
  }

  return this;
};

ResourceSet.prototype.action = function (action) {
  this.action = action;
  return this;
}; // TODO: Refactor invoke to Resource


ResourceSet.prototype.invoke = function (resource, datacallback) {
  var myurl = resource["url"];
  var status = resource["status"];
  var memo = resource["memo"];
  var action = resource["action"];
  myurl = myurl + "?action=wsmethod:" + this.action;
  var purl = url.parse(myurl);
  console.log("URL: " + purl.hostname);
  console.log("URL: " + purl.port);
  console.log("URL: " + purl.path);
  var deferred = Q.defer();
  var returndata = '';

  var client = __webpack_require__(8)(this.maximoRestUrl.protocol.split(':')[0]);

  var statusCode = "";
  var resourceset = "";
  var xpublicuri = this.maximoRestUrl.protocol + "//" + this.maximoRestUrl.hostname + ":" + this.maximoRestUrl.port + X_PUB_PATH;
  var options = {
    hostname: purl.hostname,
    port: purl.port,
    headers: {
      'MAXAUTH': new Buffer(this.maximoRestUrl.auth).toString('base64'),
      'x-public-uri': xpublicuri.toString(),
      'x-method-override': 'PATCH',
      'content-type': 'application/json'
    },
    path: purl.path,
    method: 'POST'
  };
  var req = client.request(options, function (res) {
    res.setEncoding('utf8');
    var resdata = '';
    res.on('data', function (chunk) {
      resdata += chunk;
    });
    res.on('error', function (err) {
      console.log('Error retrieving data... ' + err.message);
      deferred.reject("Error retrieving data...." + err.message);
    });
    res.on('end', function () {
      console.log("RESDATA " + resdata); //var data = JSON.parse(resdata);

      statusCode = res.statusCode;

      if (datacallback) {
        deferred.promise.nodeify(datacallback(statusCode, resdata, this));
      } else {
        deferred.resolve(resdata);
      } //datacallback(response.statusCode,resourceset,this);  //Invoke the callback and pass the data back.

    });
  });
  req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
  });
  req.write(JSON.stringify(resource));
  req.end(); //return this;*/

  return deferred.promise;
};

ResourceSet.prototype.externalConnector = function (ops) {
  return new ExternalConnector(ops, this.resourcemboset["member"]);
}; // CRUD starts here ...


ResourceSet.prototype.create = function (jsonbody, props, attachments, datacallback) {
  return getCRUDConnector(this).__create(jsonbody, props, attachments, datacallback); // Pass this.fconnect so the it's state is updated.
}; //Private Methods
// Populates the JSON (relationships) with relationships and attributes


function relatedset(relname, attribute, relationships) {
  var length = Object.keys(relationships).length;
  var attrs = null;

  if (length > 0) // the json is not empty
    {
      attrs = relationships[relname];
    }

  if (attrs == null) // the json is empty so pop in the first one.
    {
      relationships[relname] = [attribute];
    } else {
    attrs.push(attribute);
    relationships[relname] = attrs;
  } //console.log("******* "+JSON.stringify(relationships));

} // Creates the relationship string


function relationshipString(relationships) {
  var length = Object.keys(relationships).length; //spi:temeda{spi:event_description,spi:enginerpm,spi:idle_time_count}

  var relstr = "";

  for (var attribute in relationships) {
    relstr = relstr + "," + attribute + "{" + relationships[attribute] + "}";
  }

  return relstr;
}

function getCRUDprops(props) {
  return props.toString();
}

function getCRUDheaders(props, jsonbody, me, xmethod) {
  var hdrs = null;
  var propsStr = getCRUDprops(props);

  if (propsStr) {
    return {
      'MAXAUTH': new Buffer(me.maximoRestUrl.auth).toString('base64'),
      'content-type': 'application/json',
      'x-method-override': xmethod,
      'properties': propsStr,
      'body': JSON.stringify(jsonbody)
    };
  }

  return {
    'MAXAUTH': new Buffer(me.maximoRestUrl.auth).toString('base64'),
    'content-type': 'application/json',
    'x-method-override': xmethod,
    'body': JSON.stringify(jsonbody)
  };
}

function getMaximoPath(maxpath) {
  return maxpath.indexOf("?") < 1 ? maxpath + "?" : maxpath + "&";
}

function getFetchConnector(me) // Singleton
{
  if (me.fconnect == null) {
    me.fconnect = new FetchConnector(me.maximoRestUrl, me.maximopath);
    me.fconnect.authType = me.authType;
    me.fconnect.cookie = me.cookie;
    me.fconnect.isCookieSet = me.cookie == null ? false : true;
  }

  return me.fconnect;
}

function getSchemaConnector(me) // Singleton
{
  if (me.sconnect == null) {
    me.sconnect = new SchemaConnector(me.maximoRestUrl, me.schemapath + me.mbo);
    me.sconnect.authType = me.authType;
    me.sconnect.cookie = me.cookie;
    me.sconnect.isCookieSet = me.cookie == null ? false : true;
  }

  return me.sconnect;
}

function getSchemaRelatedConnector(me) // Singleton
{
  if (me.sconnect == null) {
    me.sconnect = new SchemaConnector(me.maximoRestUrl, me.schemapath + me.mbo + "?oslc.select=*");
    me.sconnect.authType = me.authType;
    me.sconnect.cookie = me.cookie;
    me.sconnect.isCookieSet = me.cookie == null ? false : true;
  }

  return me.sconnect;
}

function getCRUDConnector(me) // Singleton
{
  if (me.cconnect == null) {
    me.cconnect = new CRUDConnector(me.maximoRestUrl, me.maximopath);
    me.cconnect.authType = me.authType;
    me.cconnect.cookie = me.cookie;
    me.cconnect.isCookieSet = me.cookie == null ? false : true;
  }

  return me.cconnect;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = Resource;

var url = __webpack_require__(1);

var buffer = __webpack_require__(2);

var http = __webpack_require__(3);

var REST_PATH = '/maximo/oslc/os/';
var X_PUB_PATH = '/maximo/oslc/';

var Q = __webpack_require__(4);

var ResourceSet = __webpack_require__(6);

var Attachment = __webpack_require__(14);

var CRUDConnector = __webpack_require__(9);

var RelatedConnector = __webpack_require__(15);
/**
 * Business object for Maximo OSLC API
 *
 * @constructor
 * @param {Object} Maximo Rest URL - e.g. http://maxadmin:maxadmin@localhost:7001
 */


function Resource(member, connection) {
  this.member = member; //this.currentResourceSet = collection["rdfs:member"];

  this.resourceURI = _typeof(member) === "object" ? getMyResourceURI(this.member) : member; //this.currentResourceSet = (typeof(collection["rdfs:member"]) == "undefined") ? collection: collection["rdfs:member"];

  this.isCookieSet = false; //fyi... if this.isCookieSet = true (set by the client) then the connection will be a cookie
  //       otherwise it's a URL

  this.connection = connection;
  return this;
}

;
Resource.prototype.isCookieSet;

Resource.prototype.setcookie = function (cookie) {
  this.cookie = cookie;
  this.isCookieSet = true;
};

Resource.prototype.JSON = function () {
  //return this.idx < 0 ? this.currentResourceSet : this.currentResourceSet[this.idx];
  return this.member;
};

Resource.prototype.relatedResource = function (relation) {
  this.relation = relation;
  this.resourceURI = getMyResourceURI(this.member[relation]);
  return this;
};

Resource.prototype.properties = function (props) {
  this.resourceURI += "?oslc.properties=" + props.toString();
  return this;
};

Resource.prototype.attachment = function (meta, datacallback) {
  return new Attachment(this.member, meta, this.connection);
};

Resource.prototype.update = function (jsonbody, props, datacallback) {
  return getCRUDConnector(this).__crud(jsonbody, props, this, 'POST', 'PATCH', 'MERGE', datacallback); //return crud(jsonbody,props,this,'POST',null,datacallback);
};

Resource.prototype.fetch = function (datacallback) {
  return getRelatedConnector(this).__fetch(this, this.fconnect); // Pass this.fconnect so it's state is updated.
};

Resource.prototype.merge = function (jsonbody, props, datacallback) {
  var patchtype = "MERGE";
  return crud(jsonbody, props, this, 'POST', patchtype, datacallback);
};

Resource.prototype["delete"] = function (jsonbody, props, datacallback) {
  var patchtype = "MERGE";
  return getCRUDConnector(this).__crud(jsonbody, props, this, 'DELETE', null, null, datacallback); //return crud(jsonbody,props,this,'DELETE',null,datacallback);
}; // Private methods


function getMyResourceURI(member) {
  // if rdf:resource is not available use rdf:about or href - one of them should definitely be available.
  var urltype = _typeof(member["rdf:about"] != "undefined") && member["rdf:about"] != null ? "rdf:about" : _typeof(member["rdf:resource"] != "undefined") && member["rdf:resource"] != null ? "rdf:resource" : "href";
  return member[urltype];
}

function getCRUDConnector(me) // Singleton
{
  if (me.cconnect == null) {
    me.cconnect = new CRUDConnector(me.resourceURI, me.maximopath);
    me.cconnect.authType = me.authType;
    me.cconnect.cookie = me.cookie;
    me.cconnect.isCookieSet = me.cookie == null ? false : true;
  }

  return me.cconnect;
}

function getRelatedConnector(cur) // Singleton
{
  if (cur.fconnect == null) {
    cur.fconnect = new RelatedConnector(cur.resourceURI, cur.maximopath);
    cur.fconnect.authType = cur.authType;
    cur.fconnect.cookie = cur.cookie;
    cur.fconnect.isCookieSet = cur.cookie == null ? false : true;
  }

  return cur.fconnect;
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 8;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = CRUDConnector;

var url = __webpack_require__(1);

var buffer = __webpack_require__(2);

var http = __webpack_require__(3);

var Q = __webpack_require__(4);

var querystring = __webpack_require__(5);

var REST_PATH = '/maximo/oslc/os/';
var X_PUB_PATH = '/maximo/oslc/';
var REST_PATH = '/maximo/oslc/os/';
var AUTH_PATH = '/maximo/oslc/';

var Resource = __webpack_require__(7); //var ResourceSet = require('../resourceset');

/**
 * Asynchronous Http connector to service provider (Maximo etc.)
 *
 * @constructor
 * @param {Object}
 */


function CRUDConnector(maximoRestUrl, maximopath) {
  if (maximoRestUrl) {
    X_PUB_PATH = maximoRestUrl.auth_scheme + '/oslc/';
    this.maximoRestUrl = maximoRestUrl;

    if (typeof this.maximoRestUrl === "string") {
      var urlarray = this.maximoRestUrl.split(':');
      var port = urlarray[2].split("/")[0];
      this.client = __webpack_require__(0)(urlarray[0]);
      this.xpublicuri = urlarray[0] + ":" + urlarray[1] + ":" + port + X_PUB_PATH;
      console.log("***** this.xpublicuri " + this.xpublicuri);
    } else {
      this.client = __webpack_require__(0)(this.maximoRestUrl.protocol.split(':')[0]);
      this.xpublicuri = this.maximoRestUrl.protocol + "//" + this.maximoRestUrl.hostname + ":" + this.maximoRestUrl.port + X_PUB_PATH;
    }
  }

  this.maximopath = maximopath ? maximopath : null;
  this.connection = maximoRestUrl; // this.connection is exposed and may be overridden later.

  this.isCookieSet = "false";
}

; // Expose these properties

CRUDConnector.prototype.connection;
CRUDConnector.prototype.isCookieSet;

CRUDConnector.prototype.__create = function (jsonbody, props, attachments, datacallback) {
  var deferred = Q.defer();
  var returndata = '';

  var client = __webpack_require__(0)(this.maximoRestUrl.protocol.split(':')[0]);

  var statusCode = "";
  var resourceset = "";
  var propsStr = null;

  if (props && props.constructor === Array) {
    var arrayLength = props.length;

    for (var i = 0; i < arrayLength; i++) {
      var prop = props[i];
      propsStr += prop + ",";
      propsStr = arrayLength - i > 1 ? propsStr + prop + "," : propsStr + prop;
    }
  }

  var options = {
    hostname: this.maximoRestUrl.hostname,
    port: this.maximoRestUrl.port,
    headers: getAuthTypeHeader(props, jsonbody, this, null, null),
    path: this.maximopath,
    method: 'POST'
  };
  var req = client.request(options, function (res) {
    res.setEncoding('utf8');
    var resdata = '';
    res.on('data', function (chunk) {
      resdata += chunk;
    });
    res.on('error', function (err) {
      console.log('Error retrieving data... ' + err.message);
      deferred.reject("Error retrieving data...." + err.message);
    });
    res.on('end', function () {
      var data = null;

      if (res.statusCode == 201 && resdata == "") {
        data = {
          "error code": "201",
          "description": "Properties are required for Create API"
        };
      } else {
        console.log("***** RESPONSE " + res.statusCode);
        data = JSON.parse(resdata);
      }

      var resourcemem = new Resource(data, this.connection);
      statusCode = res.statusCode;

      if (datacallback) {
        deferred.promise.nodeify(datacallback(statusCode, resourcemem, this));
      } else {
        deferred.resolve(resourcemem);
      }
    });
  });
  req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
  });
  req.write(JSON.stringify(jsonbody));
  req.end(); //return this;*/

  return deferred.promise;
};

CRUDConnector.prototype.__crud = function (jsonbody, props, current, method, xmethod, patchtype, datacallback) {
  var deferred = Q.defer();
  var returndata = '';

  var client = __webpack_require__(0)(current.resourceURI.split(':')[0]);

  var host = current.resourceURI.split(':')[1].split("//")[1];
  var port = current.resourceURI.split(':')[2].split("/")[0];
  var path = current.resourceURI.split(host)[1].split(port)[1];

  if (!current.isCookieSet) {
    var xpublicuri = current.connection.protocol + "//" + current.connection.hostname + ":" + current.connection.port + X_PUB_PATH;
  } // If this.cookie type === object it means it's a URL so we need to login

  /*var hdr = (typeof(current.cookie) === "object")
  			?
  				{'MAXAUTH': new Buffer(current.cookie.auth).toString('base64'),
     			  			'x-public-uri':xpublicuri.toString()}
     			:
     				{'Cookie' : current.cookie};*/


  var statusCode = "";
  var resourceset = "";
  var options = {
    hostname: host,
    port: port,
    headers: getAuthTypeHeader(props, jsonbody, current, xmethod, patchtype),
    path: path,
    method: method
  };
  var req = client.request(options, function (res) {
    res.setEncoding('utf8');
    var resdata = '';
    res.on('data', function (chunk) {
      resdata += chunk;
    });
    res.on('error', function (err) {
      console.log('Error retrieving data... ' + err.message);
      deferred.reject("Error retrieving data...." + err.message);
    });
    res.on('end', function () {
      var data = null;

      if (res.statusCode == 201 && resdata == "") {
        data = {
          "error code": "201",
          "description": "Required headers may not be set e.g. properties"
        };
      } else {
        var scode = res.statusCode;
        data = method === 'DELETE' ? {
          "status code": scode,
          "description": "Delete successful"
        } : JSON.parse(resdata);
      }

      var resourcemem = new Resource(data, current.connection);
      statusCode = res.statusCode;

      if (datacallback) {
        deferred.promise.nodeify(datacallback(statusCode, resourcemem, current));
      } else {
        deferred.resolve(resourcemem);
      }
    });
  });
  req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
  });
  req.write(JSON.stringify(jsonbody));
  req.end(); //return this;

  return deferred.promise;
}; // Private Methods


function getCRUDprops(props) {
  return props.toString();
}

function getAuthTypeHeader(props, jsonbody, my, xmethod, patchtype) {
  var hdr = null;
  var propsStr = getCRUDprops(props);

  if (!my.isCookieSet) {
    console.log("Auth header type = MaxAuth " + JSON.stringify(my.connection));
    hdr = propsStr ? {
      'MAXAUTH': new Buffer(my.connection.auth).toString('base64'),
      'content-type': 'application/json',
      'x-method-override': xmethod,
      'PATCHTYPE': patchtype,
      'properties': propsStr,
      'body': JSON.stringify(jsonbody)
    } : {
      'MAXAUTH': new Buffer(my.connection.auth).toString('base64'),
      'content-type': 'application/json',
      'x-method-override': xmethod,
      'PATCHTYPE': patchtype,
      'body': JSON.stringify(jsonbody)
    };
  } else {
    //console.log("Auth header type = cookie"+JSON.stringify(my.cookie));
    hdr = propsStr ? {
      'Cookie': my.cookie,
      'content-type': 'application/json',
      'x-method-override': xmethod,
      'PATCHTYPE': patchtype,
      'properties': propsStr,
      'body': JSON.stringify(jsonbody)
    } : {
      'Cookie': my.cookie,
      'content-type': 'application/json',
      'x-method-override': xmethod,
      'PATCHTYPE': patchtype,
      'body': JSON.stringify(jsonbody)
    };
  }

  return hdr;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

try {
  var maximo = __webpack_require__(11); // globalThis.maximo = () => {
  //     console.log('maximo!')
  // };


  globalThis.maximo = maximo;
} catch (e) {
  console.log('caughttt', e.stack);
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = MaximoFactory;

var ResourceObject = __webpack_require__(12);

var InvalidArgumentError = __webpack_require__(20);

var events = __webpack_require__(23);

var url = __webpack_require__(1);

var AuthConnector = __webpack_require__(24);
/**
 * Creates an object for exposing Maximo OSLC API
 *
 * @constructor
 * @param {Object} Maximo Rest URL - e.g. http://maxadmin:maxadmin@localhost:7001
 */


function MaximoFactory(options, cookie, callback) {
  this.protocol = options.protocol;
  this.hostname = options.hostname;
  this.port = options.port;
  this.user = options.user;
  this.password = options.password;
  this.islean = 0;
  this.tenantcode = options.tenantcode;
  this.auth_scheme = options.auth_scheme;
  this.authType = options.authtype;
  this.cookie = cookie;
  this.isCookieSet = this.cookie ? true : false;

  if (this.authType && this.authType == "form") {
    this.authPath = this.auth_scheme + "/j_security_check";
  }

  if (options.islean != null) {
    this.islean = options.islean;
  }

  console.log("### islean " + this.islean);
  this.resturl = url.parse(this.protocol + "://" + this.user + ":" + this.password + "@" + this.hostname + ":" + this.port);
  this.resturl.auth_scheme = this.auth_scheme;

  if (callback != null) {
    if (this.hostname === "" || this.user === "" || this.password === "") {
      callback(new Error("Invalid null arguments.", ""));
    }
  }

  return this;
}

MaximoFactory.prototype.authenticate = function () {
  this.authC = new AuthConnector(this.resturl);
  this.authC.authType = this.authType;
  return this.authC.authenticate(this.authC);
};

MaximoFactory.prototype.resourceobject = function (mbo, actype) {
  //return new ResourceSet(this.resturl,this.user,this.password,mbo);
  return new ResourceObject(this, mbo, actype);
};

MaximoFactory.prototype.publicuri = function () {
  return this.hostname;
};

MaximoFactory.prototype.user = function () {
  return this.user;
};

MaximoFactory.prototype.isCookieSet;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ResourceObject;

var ResourceSet = __webpack_require__(6);
/**
 * Business object for Maximo OSLC API
 *
 * @constructor
 * @param {Object} Maximo Rest URL - e.g. http://maxadmin:maxadmin@localhost:7001
 */


function ResourceObject(maxfactory, mbo, actype) {
  //Return a Zombie set.
  var cookie = maxfactory.isCookieSet ? maxfactory.cookie["set-cookie"] : null;
  return new ResourceSet(null, cookie, maxfactory, mbo, actype);
}

;

ResourceObject.prototype.name = function () {
  return this.mbo;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = Attachment;

var url = __webpack_require__(1);

var buffer = __webpack_require__(2);

var http = __webpack_require__(3);

var REST_PATH = '/maximo/oslc/os/';
var X_PUB_PATH = '/maximo/oslc/';

var Q = __webpack_require__(4);

var ResourceSet = __webpack_require__(6);

var Resource = __webpack_require__(7);
/**
 * Attachment (doclinks) object for Maximo OSLC API
 *
 * @constructor
 * @param {Object} Maximo Rest URL - e.g. http://maxadmin:maxadmin@localhost:7001
 */


function Attachment(member, meta, cookie) {
  this.member = member; //this.currentResourceSet = collection["rdfs:member"];

  this.resourceURI = _typeof(member) === "object" ? getMyResourceURI(this.member) : member;
  this.cookie = cookie;
  this.name = meta.name;
  this.description = meta.description;
  this.type = meta.type;
  this.contenttype = meta.contentype;
  this.storeas = meta.storeas;
  return this;
}

;

Attachment.prototype.JSON = function () {
  //return this.idx < 0 ? this.currentResourceSet : this.currentResourceSet[this.idx];
  return this.member;
};

Attachment.prototype.create = function (buffer, datacallback) {
  return createAttachment(buffer, this, datacallback);
}; // Private methods


function getMyResourceURI(member) {
  // if rdf:resource is not available use rdf:about or href - one of them should definitely be available.
  var urltype = _typeof(member["rdf:about"] != "undefined") && member["rdf:about"] != null ? "rdf:about" : _typeof(member["rdf:resource"] != "undefined") && member["rdf:resource"] != null ? "rdf:resource" : "href";
  return member[urltype];
}

function getHeaders(buffer, me) {
  console.log("Content_Type **** " + me.contenttype);
  console.log("cookie **** " + me.cookie);
  return {
    /*'MAXAUTH': new Buffer(me.resourceURI.auth).toString('base64')*/
    'Cookie': me.cookie,
    'content-type': me.contenttype,
    'slug': me.name,
    'x-method-override': 'PATCH',
    'x-document-description': me.description,
    'x-document-meta': me.type + "/" + me.storeas
  };
}

function createAttachment(buffer, current, datacallback) {
  var method = 'POST';
  var deferred = Q.defer();
  var returndata = '';

  var client = __webpack_require__(8)(current.resourceURI.split(':')[0]);

  var host = current.resourceURI.split(':')[1].split("//")[1];
  var port = current.resourceURI.split(':')[2].split("/")[0];
  var path = current.resourceURI.split(host)[1].split(port)[1]; // If this.cookie type === object it means it's a URL so we need to login

  /*var hdr = (typeof(current.cookie) === "object")
  			?
  				{'MAXAUTH': new Buffer(current.cookie.auth).toString('base64'),
     			  			'x-public-uri':xpublicuri.toString()}
     			:
     				{'Cookie' : current.cookie};*/

  var statusCode = "";
  var resourceset = "";
  var options = {
    hostname: host,
    port: port,
    headers: getHeaders(buffer, current),
    path: path,
    method: method
  };
  var req = client.request(options, function (res) {
    res.setEncoding('utf8');
    var resdata = '';
    res.on('data', function (chunk) {
      resdata += chunk;
    });
    res.on('error', function (err) {
      console.log('Error retrieving data... ' + err.message);
      deferred.reject("Error retrieving data...." + err.message);
    });
    res.on('end', function () {
      var data = null;
      data = {
        "error code": res.statusCode,
        "description": "Required headers may not be set e.g. properties"
      };
      console.log("STATUS CODE: " + res.statusCode);
      var resourcemem = new Resource(data, current.cookie);
      statusCode = res.statusCode;

      if (datacallback) {
        deferred.promise.nodeify(datacallback(statusCode, resourcemem, current));
      } else {
        deferred.resolve(resourcemem);
      }
    });
  });
  req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
  });
  req.write(buffer);
  req.end(); //return this;

  return deferred.promise;
}

;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = RelatedConnector;

var url = __webpack_require__(1);

var buffer = __webpack_require__(2);

var http = __webpack_require__(3);

var Q = __webpack_require__(4);

var querystring = __webpack_require__(5);

var REST_PATH = '/maximo/oslc/os/';
var X_PUB_PATH = '/maximo/oslc/';
var REST_PATH = '/maximo/oslc/os/';
var AUTH_PATH = '/maximo/oslc/';

var Resource = __webpack_require__(7);

var ResourceSet = __webpack_require__(6);
/**
 * Asynchronous Http connector to service provider (Maximo etc.)
 *
 * @constructor
 * @param {Object}
 */


function RelatedConnector(maximoRestUrl, maximopath) {
  if (maximoRestUrl) {
    X_PUB_PATH = maximoRestUrl.auth_scheme + '/oslc/';
    this.maximoRestUrl = maximoRestUrl;

    if (typeof this.maximoRestUrl === "string") {
      var urlarray = this.maximoRestUrl.split(':');
      var port = urlarray[2].split("/")[0];
      this.client = __webpack_require__(0)(urlarray[0]);
      this.xpublicuri = urlarray[0] + ":" + urlarray[1] + ":" + port + X_PUB_PATH;
      console.log("***** this.xpublicuri " + this.xpublicuri);
    } else {
      this.client = __webpack_require__(0)(this.maximoRestUrl.protocol.split(':')[0]);
      this.xpublicuri = this.maximoRestUrl.protocol + "//" + this.maximoRestUrl.hostname + ":" + this.maximoRestUrl.port + X_PUB_PATH;
    }
  }

  this.maximopath = maximopath ? maximopath : null;
  this.connection = maximoRestUrl; // this.connection is exposed and may be overridden later.

  this.isCookieSet = "false";
}

; // Expose these properties

RelatedConnector.prototype.cookie;
RelatedConnector.prototype.isCookieSet;

RelatedConnector.prototype.__fetch = function (current, myconnector, datacallback) {
  var deferred = Q.defer();
  var returndata = ''; //var client = require(this.maximoRestUrl.protocol.split(':')[0]);

  var statusCode = "";
  var resourceset = "";
  var host = current.resourceURI.split(':')[1].split("//")[1];
  var port = current.resourceURI.split(':')[2].split("/")[0];
  var path = current.resourceURI.split(host)[1].split(port)[1];
  this.connection = current.connection;
  var options = {
    hostname: host,
    port: port,
    headers: getAuthTypeHeader(this, myconnector),
    path: path
  };
  var ac = this.cookie; // make a local copy so it's in context for the callback

  var restcallback = function restcallback(response) {
    var resdata = '';
    response.on("data", function (chunked) {
      resdata += chunked;
    });
    response.on('error', function (err) {
      console.log('Error retrieving data... ' + err.message);
      deferred.reject("Error retrieving data...." + err.message);
    });
    response.on('end', function () {
      //console.log("***** AC ***"+ac);
      //If ac is null that means the user did not pass in an auth token.
      ac = ac === null ? response.headers['set-cookie'] : ac;
      var data = JSON.parse(resdata); //resourceset = new ResourceSet(data["rdfs:member"],this.cookie); // send back the data wrapped inside ResourceSet

      resourceset = new ResourceSet(data, ac); // send back the data wrapped inside ResourceSet

      statusCode = response.statusCode;

      if (datacallback) {
        deferred.promise.nodeify(datacallback(statusCode, resourceset, this));
      } else {
        deferred.resolve(resourceset);
      } //datacallback(response.statusCode,resourceset,this);  //Invoke the callback and pass the data back.

    });
  }; // Request the data (Asynch) from Maximo and handle the response in the callback above ... Ideally Maximo should give us a Promise so we don't
  // have to handle the Asynch in a callback.


  this.client.request(options, restcallback).end(); //return this;

  return deferred.promise;
};

RelatedConnector.prototype.__fetchnext = function (np, myconnector, datacallback) {
  var deferred = Q.defer(); // If the type is Object we assume this is the ResourceSet JSON so let's get the nextpage URI
  //var np_uri = (typeof(np) === 'object') ? np["oslc:responseInfo"]["oslc:nextPage"]["rdf:resource"]
  //									   : np;

  var np_uri = nextPage(np);

  if (np_uri) {
    var nextpath = np_uri.substr(np_uri.indexOf(this.maximoRestUrl.port) + this.maximoRestUrl.port.length);
    var returndata = '';

    var client = __webpack_require__(0)(this.maximoRestUrl.protocol.split(':')[0]);

    var statusCode = "";
    var resourceset = "";
    var xpublicuri = this.maximoRestUrl.protocol + "//" + this.maximoRestUrl.hostname + ":" + this.maximoRestUrl.port + X_PUB_PATH;
    var options = {
      hostname: this.maximoRestUrl.hostname,
      port: this.maximoRestUrl.port,
      headers: getAuthTypeHeader(this, myconnector),
      path: nextpath
    };

    var restcallback = function restcallback(response) {
      var resdata = '';
      response.on("data", function (chunked) {
        resdata += chunked;
      });
      response.on('error', function (err) {
        console.log('Error retrieving data... ' + err.message);
        deferred.reject("Error retrieving data...." + err.message);
      });
      response.on('end', function () {
        // Save the jsessionid for future use....
        this.cookie = response.headers['set-cookie'];

        if (this.cookie) {
          this.cookie = (this.cookie + '').split(";")[0];
        }

        var data = JSON.parse(resdata); //resourceset = new ResourceSet(data["rdfs:member"],this.cookie); // send back the data wrapped inside ResourceSet

        resourceset = new ResourceSet(data, this.cookie); // send back the data wrapped inside ResourceSet

        statusCode = response.statusCode;

        if (datacallback) {
          deferred.promise.nodeify(datacallback(statusCode, resourceset, this));
        } else {
          deferred.resolve(resourceset);
        } //datacallback(response.statusCode,resourceset,this);  //Invoke the callback and pass the data back.

      });
    }; // Request the data (Asynch) from Maximo and handle the response in the callback above ... Ideally Maximo should give us a Promise so we don't
    // have to handle the Asynch in a callback.


    client.request(options, restcallback).end(); //return this;

    return deferred.promise;
  }

  console.log("********* NOT Set ****    " + np); //deferred.resolve({"status":"End of Page"});

  return np;
}; // Private Methods


function getAuthTypeHeader(my, fconnect) {
  var hdr = "";

  if (my.connection == null) {
    console.log("Auth header type = " + fconnect.authType);

    switch (fconnect.authType) {
      case "basic":
        hdr = {
          'Authorization': 'Basic ' + new Buffer(fconnect.maximoRestUrl.auth).toString('base64'),
          'x-public-uri': fconnect.xpublicuri.toString()
        };

      case "form":
        hdr = {
          'Accept': 'text/html,application/xhtml+xml,application/xml',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Connection': 'keep-alive'
        };
        break;

      case "maxauth":
        hdr = {
          'maxauth': new Buffer(fconnect.maximoRestUrl.auth).toString('base64'),
          'x-public-uri': fconnect.xpublicuri.toString()
        };
        break;
      // Default it to MaxAuth for now.

      default:
        hdr = {
          'maxauth': new Buffer(fconnect.maximoRestUrl.auth).toString('base64'),
          'x-public-uri': fconnect.xpublicuri.toString()
        };
        break;
    }
  } else {
    console.log("Auth header type = cookie" + my.connection);
    hdr = {
      'Cookie': my.connection
    };
  }

  return hdr;
}

function nextPage(np) {
  if (_typeof(np) === 'object' && np["oslc:responseInfo"] && np["oslc:responseInfo"]["oslc:nextPage"]) {
    return np["oslc:responseInfo"]["oslc:nextPage"]["rdf:resource"];
  }

  return np["rdf:about"];
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = FetchConnector;

var url = __webpack_require__(1);

var buffer = __webpack_require__(2);

var http = __webpack_require__(3);

var Q = __webpack_require__(4);

var querystring = __webpack_require__(5);

var REST_PATH = '/maximo/oslc/os/';
var X_PUB_PATH = '/maximo/oslc/';
var REST_PATH = '/maximo/oslc/os/';
var AUTH_PATH = '/maximo/oslc/';

var Resource = __webpack_require__(7);

var ResourceSet = __webpack_require__(6);
/**
 * Asynchronous Http connector to service provider (Maximo etc.)
 *
 * @constructor
 * @param {Object}
 */


function FetchConnector(maximoRestUrl, maximopath) {
  X_PUB_PATH = maximoRestUrl.auth_scheme + '/oslc/';
  this.maximoRestUrl = maximoRestUrl;
  this.client = __webpack_require__(0)(this.maximoRestUrl.protocol.split(':')[0]);
  this.xpublicuri = this.maximoRestUrl.protocol + "//" + this.maximoRestUrl.hostname + ":" + this.maximoRestUrl.port + X_PUB_PATH;
  this.maximopath = maximopath;
  this.cookie = null;
  this.isCookieSet = "false";
}

; // Expose these properties

FetchConnector.prototype.cookie;
FetchConnector.prototype.isCookieSet;

FetchConnector.prototype.__fetch = function (myconnector, datacallback) {
  var deferred = Q.defer();
  var returndata = ''; //var client = require(this.maximoRestUrl.protocol.split(':')[0]);

  var statusCode = "";
  var resourceset = "";
  console.log(this.maximopath + "anjay");
  var options = {
    hostname: this.maximoRestUrl.hostname,
    port: this.maximoRestUrl.port,
    headers: getAuthTypeHeader(this, myconnector),
    path: this.maximopath,
    timeout: 20000
  };
  var ac = this.cookie; // make a local copy so it's in context for the callback

  var restcallback = function restcallback(response) {
    var resdata = '';
    response.on("data", function (chunked) {
      resdata += chunked;
    });
    response.on('error', function (err) {
      console.log('Error retrieving data... ' + err.message);
      deferred.reject("Error retrieving data...." + err.message);
    });
    response.on('end', function () {
      //console.log("***** AC ***"+ac);
      //If ac is null that means the user did not pass in an auth token.
      ac = ac === null ? response.headers['set-cookie'] : ac;
      var data = JSON.parse(resdata); //resourceset = new ResourceSet(data["rdfs:member"],this.cookie); // send back the data wrapped inside ResourceSet

      resourceset = new ResourceSet(data, ac); // send back the data wrapped inside ResourceSet

      statusCode = response.statusCode;

      if (datacallback) {
        deferred.promise.nodeify(datacallback(statusCode, resourceset, this));
      } else {
        deferred.resolve(resourceset);
      } //datacallback(response.statusCode,resourceset,this);  //Invoke the callback and pass the data back.

    });
  }; // Request the data (Asynch) from Maximo and handle the response in the callback above ... Ideally Maximo should give us a Promise so we don't
  // have to handle the Asynch in a callback.


  var reqs = this.client.request(options, restcallback).end();
  reqs.on('error', function (err) {
    deferred.reject("Error retrieving data...." + err);
  });
  reqs.on('timeout', function (err) {
    reqs.destroy();
    deferred.reject("Request Time Out....");
  }); //return this;

  return deferred.promise;
};

FetchConnector.prototype.__fetchnext = function (np, myconnector, datacallback) {
  var deferred = Q.defer(); // If the type is Object we assume this is the ResourceSet JSON so let's get the nextpage URI
  //var np_uri = (typeof(np) === 'object') ? np["oslc:responseInfo"]["oslc:nextPage"]["rdf:resource"]
  //									   : np;

  var np_uri = nextPage(np);

  if (np_uri) {
    var nextpath = np_uri.substr(np_uri.indexOf(this.maximoRestUrl.port) + this.maximoRestUrl.port.length);
    var returndata = '';

    var client = __webpack_require__(0)(this.maximoRestUrl.protocol.split(':')[0]);

    var statusCode = "";
    var resourceset = "";
    var xpublicuri = this.maximoRestUrl.protocol + "//" + this.maximoRestUrl.hostname + ":" + this.maximoRestUrl.port + X_PUB_PATH;
    var options = {
      hostname: this.maximoRestUrl.hostname,
      port: this.maximoRestUrl.port,
      headers: getAuthTypeHeader(this, myconnector),
      path: nextpath
    };

    var restcallback = function restcallback(response) {
      var resdata = '';
      response.on("data", function (chunked) {
        resdata += chunked;
      });
      response.on('error', function (err) {
        console.log('Error retrieving data... ' + err.message);
        deferred.reject("Error retrieving data...." + err.message);
      });
      response.on('end', function () {
        // Save the jsessionid for future use....
        this.cookie = response.headers['set-cookie'];

        if (this.cookie) {
          this.cookie = (this.cookie + '').split(";")[0];
        }

        var data = JSON.parse(resdata); //resourceset = new ResourceSet(data["rdfs:member"],this.cookie); // send back the data wrapped inside ResourceSet

        resourceset = new ResourceSet(data, this.cookie); // send back the data wrapped inside ResourceSet

        statusCode = response.statusCode;

        if (datacallback) {
          deferred.promise.nodeify(datacallback(statusCode, resourceset, this));
        } else {
          deferred.resolve(resourceset);
        } //datacallback(response.statusCode,resourceset,this);  //Invoke the callback and pass the data back.

      });
    }; // Request the data (Asynch) from Maximo and handle the response in the callback above ... Ideally Maximo should give us a Promise so we don't
    // have to handle the Asynch in a callback.


    client.request(options, restcallback).end(); //return this;

    return deferred.promise;
  }

  console.log("********* NOT Set ****    " + np); //deferred.resolve({"status":"End of Page"});

  return np;
}; // Private Methods


function getAuthTypeHeader(my, fconnect) {
  var hdr = "";

  if (my.cookie == null) {
    console.log("Auth header type = " + fconnect.authType);

    switch (fconnect.authType) {
      case "basic":
        hdr = {
          'Authorization': 'Basic ' + new Buffer(fconnect.maximoRestUrl.auth).toString('base64'),
          'x-public-uri': fconnect.xpublicuri.toString()
        };

      case "form":
        hdr = {
          'Accept': 'text/html,application/xhtml+xml,application/xml',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Connection': 'keep-alive'
        };
        break;

      case "maxauth":
        hdr = {
          'maxauth': new Buffer(fconnect.maximoRestUrl.auth).toString('base64'),
          'x-public-uri': fconnect.xpublicuri.toString()
        };
        break;
      // Default it to MaxAuth for now.

      default:
        hdr = {
          'maxauth': new Buffer(fconnect.maximoRestUrl.auth).toString('base64'),
          'x-public-uri': fconnect.xpublicuri.toString()
        };
        break;
    }
  } else {
    console.log("Auth header type = cookie" + my.cookie);
    hdr = {
      'Cookie': my.cookie
    };
  }

  return hdr;
}

function nextPage(np) {
  if (_typeof(np) === 'object' && np["oslc:responseInfo"] && np["oslc:responseInfo"]["oslc:nextPage"]) {
    return np["oslc:responseInfo"]["oslc:nextPage"]["rdf:resource"];
  }

  return np["rdf:about"];
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ExternalConnector;

var url = __webpack_require__(1);

var buffer = __webpack_require__(2);

var http = __webpack_require__(3);

var https = __webpack_require__(18);

var Q = __webpack_require__(4);

var querystring = __webpack_require__(5);
/**
 * Asynchronous Http connector to service provider (Maximo etc.)
 *
 * @constructor
 * @param {Object}
 */


function ExternalConnector(options, resourceset) {
  this.options = options;
  this.resourceset = resourceset;
  this.protocol = options.protocol == null ? "http" : options.protocol;
  this.client = __webpack_require__(0)(this.protocol);
  this.host = options.host;
  this.port = options.port;
  this.endpoint = options.endpoint;
  this.headers = options.headers;
  this.template = options.template;
  this.path = options.path;
  this.originalpath = options.path; //initialize some instance variables

  this.promises = [];
}

;

ExternalConnector.prototype.path = function (path) {
  this.path = path;
};

ExternalConnector.prototype.push = function (i) {
  if (this.template != null && this.template["prependtopath"] != null) {
    var substitute = this.template["prependtopath"]["substitute"];
    var text = this.template["prependtopath"]["text"];

    if (substitute != null) {
      var token = substitute.split(".");
      var related = this.resourceset[i][token[0]];

      if (related != null) {
        var value = related[0][token[1]];
        this.path = this.endpoint + value + text + this.originalpath;
        this.promises.push(asynch(this));
      }
    }
  }
};

ExternalConnector.prototype.resolve = function (datacallback) {
  var deferred = Q.defer();
  Q.all(this.promises).then(function (data) {
    if (datacallback) {
      deferred.promise.nodeify(datacallback(data));
    } else {
      deferred.resolve(data);
    }
  }).fail(function (error) {
    console.log('****** Error Code = ' + error);
  });
  return deferred.promise;
};

function asynch(my, datacallback) {
  var deferred = Q.defer();
  var returndata = ''; //var client = require(this.maximoRestUrl.protocol.split(':')[0]);

  var statusCode = "";
  var resourceset = "";
  console.log("***** " + my.host + " **** " + my.path);
  var options = {
    hostname: my.host,
    port: my.port,
    path: my.path //path: "v1/location/02375:4:US/forecast/daily/10day.json?apiKey=34b54a2413263374bdace07052e0fdf3"

  };

  var restcallback = function restcallback(response) {
    var resdata = '';
    response.on("data", function (chunked) {
      resdata += chunked;
    });
    response.on('error', function (err) {
      console.log('Error retrieving data... ' + err.message);
      deferred.reject("Error retrieving data...." + err.message);
    });
    response.on('end', function () {
      console.log("%%%%Status code " + response.statusCode);
      var data = JSON.parse(resdata);
      statusCode = response.statusCode;

      if (datacallback) {
        deferred.promise.nodeify(datacallback(statusCode, data, my));
      } else {
        deferred.resolve(data);
      } //datacallback(response.statusCode,resourceset,this);  //Invoke the callback and pass the data back.

    });
  }; // Request the data (Asynch) from Maximo and handle the response in the callback above ... Ideally Maximo should give us a Promise so we don't
  // have to handle the Asynch in a callback.


  my.client.request(options, restcallback).end(); //return this;

  return deferred.promise;
}

;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = SchemaConnector;

var url = __webpack_require__(1);

var buffer = __webpack_require__(2);

var http = __webpack_require__(3);

var Q = __webpack_require__(4);

var querystring = __webpack_require__(5);

var REST_PATH = '/maximo/oslc/os/';
var X_PUB_PATH = '/maximo/oslc/';
var REST_PATH = '/maximo/oslc/os/';
var AUTH_PATH = '/maximo/oslc/';

var Resource = __webpack_require__(7);

var ResourceSet = __webpack_require__(6);
/**
 * Asynchronous Http connector to service provider (Maximo etc.)
 *
 * @constructor
 * @param {Object}
 */


function SchemaConnector(maximoRestUrl, maximopath) {
  X_PUB_PATH = maximoRestUrl.auth_scheme + '/oslc/';
  this.maximoRestUrl = maximoRestUrl;
  this.client = __webpack_require__(0)(this.maximoRestUrl.protocol.split(':')[0]);
  this.xpublicuri = this.maximoRestUrl.protocol + "//" + this.maximoRestUrl.hostname + ":" + this.maximoRestUrl.port + X_PUB_PATH;
  this.maximopath = maximopath;
  this.cookie = null;
  this.isCookieSet = "false";
}

; // Expose these properties

SchemaConnector.prototype.cookie;
SchemaConnector.prototype.isCookieSet;

SchemaConnector.prototype.__fetch = function (myconnector, datacallback) {
  var deferred = Q.defer();
  var returndata = ''; //var client = require(this.maximoRestUrl.protocol.split(':')[0]);

  var statusCode = "";
  var resourceset = "";
  console.log(this.maximopath);
  var options = {
    hostname: this.maximoRestUrl.hostname,
    port: this.maximoRestUrl.port,
    headers: getAuthTypeHeader(this, myconnector),
    path: this.maximopath
  };
  var ac = this.cookie; // make a local copy so it's in context for the callback

  var restcallback = function restcallback(response) {
    var resdata = '';
    response.on("data", function (chunked) {
      resdata += chunked;
    });
    response.on('error', function (err) {
      console.log('Error retrieving data... ' + err.message);
      deferred.reject("Error retrieving data...." + err.message);
    });
    response.on('end', function () {
      //console.log("***** AC ***"+ac);
      //If ac is null that means the user did not pass in an auth token.
      ac = ac === null ? response.headers['set-cookie'] : ac;
      var data = JSON.parse(resdata);
      statusCode = response.statusCode;

      if (datacallback) {
        deferred.promise.nodeify(datacallback(statusCode, data, this));
      } else {
        deferred.resolve(data);
      } //datacallback(response.statusCode,resourceset,this);  //Invoke the callback and pass the data back.

    });
  }; // Request the data (Asynch) from Maximo and handle the response in the callback above ... Ideally Maximo should give us a Promise so we don't
  // have to handle the Asynch in a callback.


  this.client.request(options, restcallback).end(); //return this;

  return deferred.promise;
}; // Private Methods


function getAuthTypeHeader(my, fconnect) {
  var hdr = "";

  if (my.cookie == null) {
    console.log("Auth header type = " + fconnect.authType);

    switch (fconnect.authType) {
      case "basic":
        hdr = {
          'Authorization': 'Basic ' + new Buffer(fconnect.maximoRestUrl.auth).toString('base64'),
          'x-public-uri': fconnect.xpublicuri.toString()
        };

      case "form":
        hdr = {
          'Accept': 'text/html,application/xhtml+xml,application/xml',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Connection': 'keep-alive'
        };
        break;

      case "maxauth":
        hdr = {
          'maxauth': new Buffer(fconnect.maximoRestUrl.auth).toString('base64'),
          'x-public-uri': fconnect.xpublicuri.toString()
        };
        break;
      // Default it to MaxAuth for now.

      default:
        hdr = {
          'maxauth': new Buffer(fconnect.maximoRestUrl.auth).toString('base64'),
          'x-public-uri': fconnect.xpublicuri.toString()
        };
        break;
    }
  } else {
    console.log("Auth header type = cookie" + my.cookie);
    hdr = {
      'Cookie': my.cookie
    };
  }

  return hdr;
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(21);

var util = __webpack_require__(22); //var Error = require('error');


function InvalidArgumentError(message) {// Error.call(this);
  // this.message = message;
}

util.inherits(InvalidArgumentError, Error); //assert(error.message);
//assert(error instanceof InvalidArgumentError);
//assert(error instanceof Error);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = AuthConnector;

var url = __webpack_require__(1);

var buffer = __webpack_require__(2);

var http = __webpack_require__(3);

var Q = __webpack_require__(4);

var querystring = __webpack_require__(5);

var REST_PATH = '/maximo/oslc/os/';
var X_PUB_PATH = '/maximo/oslc/';
var REST_PATH = '/maximo/oslc/os/';
var AUTH_PATH = '/maximo/oslc/';
/**
 * Asynchronous Http connector to service provider (Maximo etc.)
 *
 * @constructor
 * @param {Object}
 */

function AuthConnector(maximoRestUrl, maximopath) {
  X_PUB_PATH = maximoRestUrl.auth_scheme + '/oslc/';
  AUTH_PATH = X_PUB_PATH;
  this.maximoRestUrl = maximoRestUrl;
  this.client = __webpack_require__(0)(this.maximoRestUrl.protocol.split(':')[0]);
  this.xpublicuri = this.maximoRestUrl.protocol + "//" + this.maximoRestUrl.hostname + ":" + this.maximoRestUrl.port + X_PUB_PATH;
  this.maximopath = maximopath;
  this.cookie = null;
  this.isCookieSet = "false";
}

; // Expose these properties

AuthConnector.prototype.cookie;
AuthConnector.prototype.isCookieSet;
AuthConnector.prototype.auth_scheme;
AuthConnector.prototype.authType;

AuthConnector.prototype.authenticate = function (myconnector, datacallback) {
  var deferred = Q.defer();
  var returndata = ''; //var client = require(this.maximoRestUrl.protocol.split(':')[0]);

  var statusCode = "";
  var resourceset = "";
  var options = {
    hostname: this.maximoRestUrl.hostname,
    port: this.maximoRestUrl.port,
    headers: getAuthTypeHeader(this, myconnector),
    path: AUTH_PATH,
    timeout: 5000
  };

  var restcallback = function restcallback(response) {
    var resdata = '';
    response.on("data", function (chunked) {
      resdata += chunked;
    });
    response.on('error', function (err) {
      console.log('Error retrieving data... ' + err.message);
      deferred.reject("Error retrieving data...." + err.message);
    });
    response.on('end', function () {
      // Save the cookie (jsessionid, ltpa token etc.. etc..) for future use so we can participate
      // in any authentication strategy the client provides.
      var setCookieValue = response.headers['set-cookie'];
      this.cookie = {
        "set-cookie": setCookieValue
      };
      this.isCookieSet = "true";
      myconnector.cookie = this.cookie; //response.headers['set-cookie'];

      myconnector.isCookieSet = "true";
      statusCode = response.statusCode;

      if (datacallback) {
        deferred.promise.nodeify(datacallback(statusCode, this.cookie, this));
      } else {
        deferred.resolve(this.cookie);
      } //datacallback(response.statusCode,resourceset,this);  //Invoke the callback and pass the data back.

    });
  }; // Request the data (Asynch) from Maximo and handle the response in the callback above ... Ideally Maximo should give us a Promise so we don't
  // have to handle the Asynch in a callback.


  var reqs = this.client.request(options, restcallback).end();
  reqs.on('error', function (err) {
    deferred.reject("Error retrieving data...." + err);
  });
  reqs.on('timeout', function (err) {
    reqs.destroy();
    deferred.reject("Request Time Out....");
  }); //return this;

  return deferred.promise;
};

AuthConnector.prototype.getAuthTypeHeader = function (my, fconnect) {
  return getAuthTypeHeader(my, fconnect);
}; // Private Methods


function getAuthTypeHeader(my, fconnect) {
  var hdr = "";

  if (my.cookie == null) {
    console.log("Auth header type = " + fconnect.authType);

    switch (fconnect.authType) {
      case "basic":
        hdr = {
          'Authorization': 'Basic ' + new Buffer(fconnect.maximoRestUrl.auth).toString('base64'),
          'x-public-uri': fconnect.xpublicuri.toString()
        };

      case "form":
        hdr = {
          'Accept': 'text/html,application/xhtml+xml,application/xml',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Connection': 'keep-alive'
        };
        break;

      case "maxauth":
        hdr = {
          'maxauth': new Buffer(fconnect.maximoRestUrl.auth).toString('base64'),
          'x-public-uri': fconnect.xpublicuri.toString()
        };
        break;
      // Default it to MaxAuth for now.

      default:
        hdr = {
          'maxauth': new Buffer(fconnect.maximoRestUrl.auth).toString('base64'),
          'x-public-uri': fconnect.xpublicuri.toString()
        };
        break;
    }
  } else {
    console.log("Auth header type = cookie");
    hdr = {
      'Cookie': my.cookie
    };
  }

  return hdr;
}

/***/ })
/******/ ]);