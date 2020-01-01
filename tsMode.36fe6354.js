// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js":[function(require,module,exports) {
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkerManager = void 0;

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var WorkerManager =
/** @class */
function () {
  function WorkerManager(modeId, defaults) {
    var _this = this;

    this._modeId = modeId;
    this._defaults = defaults;
    this._worker = null;
    this._client = null;
    this._configChangeListener = this._defaults.onDidChange(function () {
      return _this._stopWorker();
    });
    this._updateExtraLibsToken = 0;
    this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(function () {
      return _this._updateExtraLibs();
    });
  }

  WorkerManager.prototype._stopWorker = function () {
    if (this._worker) {
      this._worker.dispose();

      this._worker = null;
    }

    this._client = null;
  };

  WorkerManager.prototype.dispose = function () {
    this._configChangeListener.dispose();

    this._extraLibsChangeListener.dispose();

    this._stopWorker();
  };

  WorkerManager.prototype._updateExtraLibs = function () {
    return __awaiter(this, void 0, void 0, function () {
      var myToken, proxy;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this._worker) {
              return [2
              /*return*/
              ];
            }

            myToken = ++this._updateExtraLibsToken;
            return [4
            /*yield*/
            , this._worker.getProxy()];

          case 1:
            proxy = _a.sent();

            if (this._updateExtraLibsToken !== myToken) {
              // avoid multiple calls
              return [2
              /*return*/
              ];
            }

            proxy.updateExtraLibs(this._defaults.getExtraLibs());
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  WorkerManager.prototype._getClient = function () {
    var _this = this;

    if (!this._client) {
      this._worker = monaco.editor.createWebWorker({
        // module that exports the create() method and returns a `TypeScriptWorker` instance
        moduleId: 'vs/language/typescript/tsWorker',
        label: this._modeId,
        keepIdleModels: true,
        // passed in to the create() method
        createData: {
          compilerOptions: this._defaults.getCompilerOptions(),
          extraLibs: this._defaults.getExtraLibs()
        }
      });

      var p = this._worker.getProxy();

      if (this._defaults.getEagerModelSync()) {
        p = p.then(function (worker) {
          if (_this._worker) {
            return _this._worker.withSyncedResources(monaco.editor.getModels().filter(function (model) {
              return model.getModeId() === _this._modeId;
            }).map(function (model) {
              return model.uri;
            }));
          }

          return worker;
        });
      }

      this._client = p;
    }

    return this._client;
  };

  WorkerManager.prototype.getLanguageServiceWorker = function () {
    var _this = this;

    var resources = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      resources[_i] = arguments[_i];
    }

    var _client;

    return this._getClient().then(function (client) {
      _client = client;
    }).then(function (_) {
      if (_this._worker) {
        return _this._worker.withSyncedResources(resources);
      }
    }).then(function (_) {
      return _client;
    });
  };

  return WorkerManager;
}();

exports.WorkerManager = WorkerManager;
},{}],"node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js":[function(require,module,exports) {
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenDiagnosticMessageText = flattenDiagnosticMessageText;
exports.RenameAdapter = exports.CodeActionAdaptor = exports.FormatOnTypeAdapter = exports.FormatAdapter = exports.FormatHelper = exports.Kind = exports.OutlineAdapter = exports.ReferenceAdapter = exports.DefinitionAdapter = exports.OccurrencesAdapter = exports.QuickInfoAdapter = exports.SignatureHelpAdapter = exports.SuggestAdapter = exports.DiagnosticsAdapter = exports.Adapter = void 0;

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var Uri = monaco.Uri;
var Range = monaco.Range; //#region utils copied from typescript to prevent loading the entire typescriptServices ---

var IndentStyle;

(function (IndentStyle) {
  IndentStyle[IndentStyle["None"] = 0] = "None";
  IndentStyle[IndentStyle["Block"] = 1] = "Block";
  IndentStyle[IndentStyle["Smart"] = 2] = "Smart";
})(IndentStyle || (IndentStyle = {}));

function flattenDiagnosticMessageText(diag, newLine, indent) {
  if (indent === void 0) {
    indent = 0;
  }

  if (typeof diag === "string") {
    return diag;
  } else if (diag === undefined) {
    return "";
  }

  var result = "";

  if (indent) {
    result += newLine;

    for (var i = 0; i < indent; i++) {
      result += "  ";
    }
  }

  result += diag.messageText;
  indent++;

  if (diag.next) {
    for (var _i = 0, _a = diag.next; _i < _a.length; _i++) {
      var kid = _a[_i];
      result += flattenDiagnosticMessageText(kid, newLine, indent);
    }
  }

  return result;
}

function displayPartsToString(displayParts) {
  if (displayParts) {
    return displayParts.map(function (displayPart) {
      return displayPart.text;
    }).join("");
  }

  return "";
} //#endregion


var Adapter =
/** @class */
function () {
  function Adapter(_worker) {
    this._worker = _worker;
  } // protected _positionToOffset(model: monaco.editor.ITextModel, position: monaco.IPosition): number {
  // 	return model.getOffsetAt(position);
  // }
  // protected _offsetToPosition(model: monaco.editor.ITextModel, offset: number): monaco.IPosition {
  // 	return model.getPositionAt(offset);
  // }


  Adapter.prototype._textSpanToRange = function (model, span) {
    var p1 = model.getPositionAt(span.start);
    var p2 = model.getPositionAt(span.start + span.length);
    var startLineNumber = p1.lineNumber,
        startColumn = p1.column;
    var endLineNumber = p2.lineNumber,
        endColumn = p2.column;
    return {
      startLineNumber: startLineNumber,
      startColumn: startColumn,
      endLineNumber: endLineNumber,
      endColumn: endColumn
    };
  };

  return Adapter;
}();

exports.Adapter = Adapter;
// --- diagnostics --- ---
var DiagnosticCategory;

(function (DiagnosticCategory) {
  DiagnosticCategory[DiagnosticCategory["Warning"] = 0] = "Warning";
  DiagnosticCategory[DiagnosticCategory["Error"] = 1] = "Error";
  DiagnosticCategory[DiagnosticCategory["Suggestion"] = 2] = "Suggestion";
  DiagnosticCategory[DiagnosticCategory["Message"] = 3] = "Message";
})(DiagnosticCategory || (DiagnosticCategory = {}));

var DiagnosticsAdapter =
/** @class */
function (_super) {
  __extends(DiagnosticsAdapter, _super);

  function DiagnosticsAdapter(_defaults, _selector, worker) {
    var _this = _super.call(this, worker) || this;

    _this._defaults = _defaults;
    _this._selector = _selector;
    _this._disposables = [];
    _this._listener = Object.create(null);

    var onModelAdd = function (model) {
      if (model.getModeId() !== _selector) {
        return;
      }

      var handle;
      var changeSubscription = model.onDidChangeContent(function () {
        clearTimeout(handle);
        handle = setTimeout(function () {
          return _this._doValidate(model);
        }, 500);
      });
      _this._listener[model.uri.toString()] = {
        dispose: function () {
          changeSubscription.dispose();
          clearTimeout(handle);
        }
      };

      _this._doValidate(model);
    };

    var onModelRemoved = function (model) {
      monaco.editor.setModelMarkers(model, _this._selector, []);
      var key = model.uri.toString();

      if (_this._listener[key]) {
        _this._listener[key].dispose();

        delete _this._listener[key];
      }
    };

    _this._disposables.push(monaco.editor.onDidCreateModel(onModelAdd));

    _this._disposables.push(monaco.editor.onWillDisposeModel(onModelRemoved));

    _this._disposables.push(monaco.editor.onDidChangeModelLanguage(function (event) {
      onModelRemoved(event.model);
      onModelAdd(event.model);
    }));

    _this._disposables.push({
      dispose: function () {
        for (var _i = 0, _a = monaco.editor.getModels(); _i < _a.length; _i++) {
          var model = _a[_i];
          onModelRemoved(model);
        }
      }
    });

    var recomputeDiagostics = function () {
      // redo diagnostics when options change
      for (var _i = 0, _a = monaco.editor.getModels(); _i < _a.length; _i++) {
        var model = _a[_i];
        onModelRemoved(model);
        onModelAdd(model);
      }
    };

    _this._disposables.push(_this._defaults.onDidChange(recomputeDiagostics));

    _this._disposables.push(_this._defaults.onDidExtraLibsChange(recomputeDiagostics));

    monaco.editor.getModels().forEach(onModelAdd);
    return _this;
  }

  DiagnosticsAdapter.prototype.dispose = function () {
    this._disposables.forEach(function (d) {
      return d && d.dispose();
    });

    this._disposables = [];
  };

  DiagnosticsAdapter.prototype._doValidate = function (model) {
    return __awaiter(this, void 0, void 0, function () {
      var worker, promises, _a, noSyntaxValidation, noSemanticValidation, noSuggestionDiagnostics, diagnostics, markers;

      var _this = this;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4
            /*yield*/
            , this._worker(model.uri)];

          case 1:
            worker = _b.sent();

            if (model.isDisposed()) {
              // model was disposed in the meantime
              return [2
              /*return*/
              ];
            }

            promises = [];
            _a = this._defaults.getDiagnosticsOptions(), noSyntaxValidation = _a.noSyntaxValidation, noSemanticValidation = _a.noSemanticValidation, noSuggestionDiagnostics = _a.noSuggestionDiagnostics;

            if (!noSyntaxValidation) {
              promises.push(worker.getSyntacticDiagnostics(model.uri.toString()));
            }

            if (!noSemanticValidation) {
              promises.push(worker.getSemanticDiagnostics(model.uri.toString()));
            }

            if (!noSuggestionDiagnostics) {
              promises.push(worker.getSuggestionDiagnostics(model.uri.toString()));
            }

            return [4
            /*yield*/
            , Promise.all(promises)];

          case 2:
            diagnostics = _b.sent();

            if (!diagnostics || model.isDisposed()) {
              // model was disposed in the meantime
              return [2
              /*return*/
              ];
            }

            markers = diagnostics.reduce(function (p, c) {
              return c.concat(p);
            }, []).filter(function (d) {
              return (_this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(d.code) === -1;
            }).map(function (d) {
              return _this._convertDiagnostics(model, d);
            });
            monaco.editor.setModelMarkers(model, this._selector, markers);
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  DiagnosticsAdapter.prototype._convertDiagnostics = function (model, diag) {
    var diagStart = diag.start || 0;
    var diagLength = diag.length || 1;

    var _a = model.getPositionAt(diagStart),
        startLineNumber = _a.lineNumber,
        startColumn = _a.column;

    var _b = model.getPositionAt(diagStart + diagLength),
        endLineNumber = _b.lineNumber,
        endColumn = _b.column;

    return {
      severity: this._tsDiagnosticCategoryToMarkerSeverity(diag.category),
      startLineNumber: startLineNumber,
      startColumn: startColumn,
      endLineNumber: endLineNumber,
      endColumn: endColumn,
      message: flattenDiagnosticMessageText(diag.messageText, '\n'),
      code: diag.code.toString(),
      tags: diag.reportsUnnecessary ? [monaco.MarkerTag.Unnecessary] : [],
      relatedInformation: this._convertRelatedInformation(model, diag.relatedInformation)
    };
  };

  DiagnosticsAdapter.prototype._convertRelatedInformation = function (model, relatedInformation) {
    if (!relatedInformation) {
      return;
    }

    var result = [];
    relatedInformation.forEach(function (info) {
      var relatedResource = model;

      if (info.file) {
        var relatedResourceUri = monaco.Uri.parse(info.file.fileName);
        relatedResource = monaco.editor.getModel(relatedResourceUri);
      }

      if (!relatedResource) {
        return;
      }

      var infoStart = info.start || 0;
      var infoLength = info.length || 1;

      var _a = relatedResource.getPositionAt(infoStart),
          startLineNumber = _a.lineNumber,
          startColumn = _a.column;

      var _b = relatedResource.getPositionAt(infoStart + infoLength),
          endLineNumber = _b.lineNumber,
          endColumn = _b.column;

      result.push({
        resource: relatedResource.uri,
        startLineNumber: startLineNumber,
        startColumn: startColumn,
        endLineNumber: endLineNumber,
        endColumn: endColumn,
        message: flattenDiagnosticMessageText(info.messageText, '\n')
      });
    });
    return result;
  };

  DiagnosticsAdapter.prototype._tsDiagnosticCategoryToMarkerSeverity = function (category) {
    switch (category) {
      case DiagnosticCategory.Error:
        return monaco.MarkerSeverity.Error;

      case DiagnosticCategory.Message:
        return monaco.MarkerSeverity.Info;

      case DiagnosticCategory.Warning:
        return monaco.MarkerSeverity.Warning;

      case DiagnosticCategory.Suggestion:
        return monaco.MarkerSeverity.Hint;
    }

    return monaco.MarkerSeverity.Info;
  };

  return DiagnosticsAdapter;
}(Adapter);

exports.DiagnosticsAdapter = DiagnosticsAdapter;

var SuggestAdapter =
/** @class */
function (_super) {
  __extends(SuggestAdapter, _super);

  function SuggestAdapter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(SuggestAdapter.prototype, "triggerCharacters", {
    get: function () {
      return ['.'];
    },
    enumerable: true,
    configurable: true
  });

  SuggestAdapter.prototype.provideCompletionItems = function (model, position, _context, token) {
    return __awaiter(this, void 0, void 0, function () {
      var wordInfo, wordRange, resource, offset, worker, info, suggestions;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            wordInfo = model.getWordUntilPosition(position);
            wordRange = new Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
            resource = model.uri;
            offset = model.getOffsetAt(position);
            return [4
            /*yield*/
            , this._worker(resource)];

          case 1:
            worker = _a.sent();
            return [4
            /*yield*/
            , worker.getCompletionsAtPosition(resource.toString(), offset)];

          case 2:
            info = _a.sent();

            if (!info || model.isDisposed()) {
              return [2
              /*return*/
              ];
            }

            suggestions = info.entries.map(function (entry) {
              var range = wordRange;

              if (entry.replacementSpan) {
                var p1 = model.getPositionAt(entry.replacementSpan.start);
                var p2 = model.getPositionAt(entry.replacementSpan.start + entry.replacementSpan.length);
                range = new Range(p1.lineNumber, p1.column, p2.lineNumber, p2.column);
              }

              return {
                uri: resource,
                position: position,
                range: range,
                label: entry.name,
                insertText: entry.name,
                sortText: entry.sortText,
                kind: SuggestAdapter.convertKind(entry.kind)
              };
            });
            return [2
            /*return*/
            , {
              suggestions: suggestions
            }];
        }
      });
    });
  };

  SuggestAdapter.prototype.resolveCompletionItem = function (model, _position, item, token) {
    return __awaiter(this, void 0, void 0, function () {
      var myItem, resource, position, offset, worker, details;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            myItem = item;
            resource = myItem.uri;
            position = myItem.position;
            offset = model.getOffsetAt(position);
            return [4
            /*yield*/
            , this._worker(resource)];

          case 1:
            worker = _a.sent();
            return [4
            /*yield*/
            , worker.getCompletionEntryDetails(resource.toString(), offset, myItem.label)];

          case 2:
            details = _a.sent();

            if (!details || model.isDisposed()) {
              return [2
              /*return*/
              , myItem];
            }

            return [2
            /*return*/
            , {
              uri: resource,
              position: position,
              label: details.name,
              kind: SuggestAdapter.convertKind(details.kind),
              detail: displayPartsToString(details.displayParts),
              documentation: {
                value: displayPartsToString(details.documentation)
              }
            }];
        }
      });
    });
  };

  SuggestAdapter.convertKind = function (kind) {
    switch (kind) {
      case Kind.primitiveType:
      case Kind.keyword:
        return monaco.languages.CompletionItemKind.Keyword;

      case Kind.variable:
      case Kind.localVariable:
        return monaco.languages.CompletionItemKind.Variable;

      case Kind.memberVariable:
      case Kind.memberGetAccessor:
      case Kind.memberSetAccessor:
        return monaco.languages.CompletionItemKind.Field;

      case Kind.function:
      case Kind.memberFunction:
      case Kind.constructSignature:
      case Kind.callSignature:
      case Kind.indexSignature:
        return monaco.languages.CompletionItemKind.Function;

      case Kind.enum:
        return monaco.languages.CompletionItemKind.Enum;

      case Kind.module:
        return monaco.languages.CompletionItemKind.Module;

      case Kind.class:
        return monaco.languages.CompletionItemKind.Class;

      case Kind.interface:
        return monaco.languages.CompletionItemKind.Interface;

      case Kind.warning:
        return monaco.languages.CompletionItemKind.File;
    }

    return monaco.languages.CompletionItemKind.Property;
  };

  return SuggestAdapter;
}(Adapter);

exports.SuggestAdapter = SuggestAdapter;

var SignatureHelpAdapter =
/** @class */
function (_super) {
  __extends(SignatureHelpAdapter, _super);

  function SignatureHelpAdapter() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.signatureHelpTriggerCharacters = ['(', ','];
    return _this;
  }

  SignatureHelpAdapter.prototype.provideSignatureHelp = function (model, position, token) {
    return __awaiter(this, void 0, void 0, function () {
      var resource, offset, worker, info, ret;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            resource = model.uri;
            offset = model.getOffsetAt(position);
            return [4
            /*yield*/
            , this._worker(resource)];

          case 1:
            worker = _a.sent();
            return [4
            /*yield*/
            , worker.getSignatureHelpItems(resource.toString(), offset)];

          case 2:
            info = _a.sent();

            if (!info || model.isDisposed()) {
              return [2
              /*return*/
              ];
            }

            ret = {
              activeSignature: info.selectedItemIndex,
              activeParameter: info.argumentIndex,
              signatures: []
            };
            info.items.forEach(function (item) {
              var signature = {
                label: '',
                parameters: []
              };
              signature.documentation = displayPartsToString(item.documentation);
              signature.label += displayPartsToString(item.prefixDisplayParts);
              item.parameters.forEach(function (p, i, a) {
                var label = displayPartsToString(p.displayParts);
                var parameter = {
                  label: label,
                  documentation: displayPartsToString(p.documentation)
                };
                signature.label += label;
                signature.parameters.push(parameter);

                if (i < a.length - 1) {
                  signature.label += displayPartsToString(item.separatorDisplayParts);
                }
              });
              signature.label += displayPartsToString(item.suffixDisplayParts);
              ret.signatures.push(signature);
            });
            return [2
            /*return*/
            , {
              value: ret,
              dispose: function () {}
            }];
        }
      });
    });
  };

  return SignatureHelpAdapter;
}(Adapter);

exports.SignatureHelpAdapter = SignatureHelpAdapter;

// --- hover ------
var QuickInfoAdapter =
/** @class */
function (_super) {
  __extends(QuickInfoAdapter, _super);

  function QuickInfoAdapter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  QuickInfoAdapter.prototype.provideHover = function (model, position, token) {
    return __awaiter(this, void 0, void 0, function () {
      var resource, offset, worker, info, documentation, tags, contents;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            resource = model.uri;
            offset = model.getOffsetAt(position);
            return [4
            /*yield*/
            , this._worker(resource)];

          case 1:
            worker = _a.sent();
            return [4
            /*yield*/
            , worker.getQuickInfoAtPosition(resource.toString(), offset)];

          case 2:
            info = _a.sent();

            if (!info || model.isDisposed()) {
              return [2
              /*return*/
              ];
            }

            documentation = displayPartsToString(info.documentation);
            tags = info.tags ? info.tags.map(function (tag) {
              var label = "*@" + tag.name + "*";

              if (!tag.text) {
                return label;
              }

              return label + (tag.text.match(/\r\n|\n/g) ? ' \n' + tag.text : " - " + tag.text);
            }).join('  \n\n') : '';
            contents = displayPartsToString(info.displayParts);
            return [2
            /*return*/
            , {
              range: this._textSpanToRange(model, info.textSpan),
              contents: [{
                value: '```js\n' + contents + '\n```\n'
              }, {
                value: documentation + (tags ? '\n\n' + tags : '')
              }]
            }];
        }
      });
    });
  };

  return QuickInfoAdapter;
}(Adapter);

exports.QuickInfoAdapter = QuickInfoAdapter;

// --- occurrences ------
var OccurrencesAdapter =
/** @class */
function (_super) {
  __extends(OccurrencesAdapter, _super);

  function OccurrencesAdapter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  OccurrencesAdapter.prototype.provideDocumentHighlights = function (model, position, token) {
    return __awaiter(this, void 0, void 0, function () {
      var resource, offset, worker, entries;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            resource = model.uri;
            offset = model.getOffsetAt(position);
            return [4
            /*yield*/
            , this._worker(resource)];

          case 1:
            worker = _a.sent();
            return [4
            /*yield*/
            , worker.getOccurrencesAtPosition(resource.toString(), offset)];

          case 2:
            entries = _a.sent();

            if (!entries || model.isDisposed()) {
              return [2
              /*return*/
              ];
            }

            return [2
            /*return*/
            , entries.map(function (entry) {
              return {
                range: _this._textSpanToRange(model, entry.textSpan),
                kind: entry.isWriteAccess ? monaco.languages.DocumentHighlightKind.Write : monaco.languages.DocumentHighlightKind.Text
              };
            })];
        }
      });
    });
  };

  return OccurrencesAdapter;
}(Adapter);

exports.OccurrencesAdapter = OccurrencesAdapter;

// --- definition ------
var DefinitionAdapter =
/** @class */
function (_super) {
  __extends(DefinitionAdapter, _super);

  function DefinitionAdapter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DefinitionAdapter.prototype.provideDefinition = function (model, position, token) {
    return __awaiter(this, void 0, void 0, function () {
      var resource, offset, worker, entries, result, _i, entries_1, entry, uri, refModel;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            resource = model.uri;
            offset = model.getOffsetAt(position);
            return [4
            /*yield*/
            , this._worker(resource)];

          case 1:
            worker = _a.sent();
            return [4
            /*yield*/
            , worker.getDefinitionAtPosition(resource.toString(), offset)];

          case 2:
            entries = _a.sent();

            if (!entries || model.isDisposed()) {
              return [2
              /*return*/
              ];
            }

            result = [];

            for (_i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
              entry = entries_1[_i];
              uri = Uri.parse(entry.fileName);
              refModel = monaco.editor.getModel(uri);

              if (refModel) {
                result.push({
                  uri: uri,
                  range: this._textSpanToRange(refModel, entry.textSpan)
                });
              }
            }

            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  return DefinitionAdapter;
}(Adapter);

exports.DefinitionAdapter = DefinitionAdapter;

// --- references ------
var ReferenceAdapter =
/** @class */
function (_super) {
  __extends(ReferenceAdapter, _super);

  function ReferenceAdapter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ReferenceAdapter.prototype.provideReferences = function (model, position, context, token) {
    return __awaiter(this, void 0, void 0, function () {
      var resource, offset, worker, entries, result, _i, entries_2, entry, uri, refModel;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            resource = model.uri;
            offset = model.getOffsetAt(position);
            return [4
            /*yield*/
            , this._worker(resource)];

          case 1:
            worker = _a.sent();
            return [4
            /*yield*/
            , worker.getReferencesAtPosition(resource.toString(), offset)];

          case 2:
            entries = _a.sent();

            if (!entries || model.isDisposed()) {
              return [2
              /*return*/
              ];
            }

            result = [];

            for (_i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
              entry = entries_2[_i];
              uri = Uri.parse(entry.fileName);
              refModel = monaco.editor.getModel(uri);

              if (refModel) {
                result.push({
                  uri: uri,
                  range: this._textSpanToRange(refModel, entry.textSpan)
                });
              }
            }

            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  return ReferenceAdapter;
}(Adapter);

exports.ReferenceAdapter = ReferenceAdapter;

// --- outline ------
var OutlineAdapter =
/** @class */
function (_super) {
  __extends(OutlineAdapter, _super);

  function OutlineAdapter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  OutlineAdapter.prototype.provideDocumentSymbols = function (model, token) {
    return __awaiter(this, void 0, void 0, function () {
      var resource, worker, items, convert, result;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            resource = model.uri;
            return [4
            /*yield*/
            , this._worker(resource)];

          case 1:
            worker = _a.sent();
            return [4
            /*yield*/
            , worker.getNavigationBarItems(resource.toString())];

          case 2:
            items = _a.sent();

            if (!items || model.isDisposed()) {
              return [2
              /*return*/
              ];
            }

            convert = function (bucket, item, containerLabel) {
              var result = {
                name: item.text,
                detail: '',
                kind: outlineTypeTable[item.kind] || monaco.languages.SymbolKind.Variable,
                range: _this._textSpanToRange(model, item.spans[0]),
                selectionRange: _this._textSpanToRange(model, item.spans[0]),
                tags: [],
                containerName: containerLabel
              };

              if (item.childItems && item.childItems.length > 0) {
                for (var _i = 0, _a = item.childItems; _i < _a.length; _i++) {
                  var child = _a[_i];
                  convert(bucket, child, result.name);
                }
              }

              bucket.push(result);
            };

            result = [];
            items.forEach(function (item) {
              return convert(result, item);
            });
            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  return OutlineAdapter;
}(Adapter);

exports.OutlineAdapter = OutlineAdapter;

var Kind =
/** @class */
function () {
  function Kind() {}

  Kind.unknown = '';
  Kind.keyword = 'keyword';
  Kind.script = 'script';
  Kind.module = 'module';
  Kind.class = 'class';
  Kind.interface = 'interface';
  Kind.type = 'type';
  Kind.enum = 'enum';
  Kind.variable = 'var';
  Kind.localVariable = 'local var';
  Kind.function = 'function';
  Kind.localFunction = 'local function';
  Kind.memberFunction = 'method';
  Kind.memberGetAccessor = 'getter';
  Kind.memberSetAccessor = 'setter';
  Kind.memberVariable = 'property';
  Kind.constructorImplementation = 'constructor';
  Kind.callSignature = 'call';
  Kind.indexSignature = 'index';
  Kind.constructSignature = 'construct';
  Kind.parameter = 'parameter';
  Kind.typeParameter = 'type parameter';
  Kind.primitiveType = 'primitive type';
  Kind.label = 'label';
  Kind.alias = 'alias';
  Kind.const = 'const';
  Kind.let = 'let';
  Kind.warning = 'warning';
  return Kind;
}();

exports.Kind = Kind;
var outlineTypeTable = Object.create(null);
outlineTypeTable[Kind.module] = monaco.languages.SymbolKind.Module;
outlineTypeTable[Kind.class] = monaco.languages.SymbolKind.Class;
outlineTypeTable[Kind.enum] = monaco.languages.SymbolKind.Enum;
outlineTypeTable[Kind.interface] = monaco.languages.SymbolKind.Interface;
outlineTypeTable[Kind.memberFunction] = monaco.languages.SymbolKind.Method;
outlineTypeTable[Kind.memberVariable] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.memberGetAccessor] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.memberSetAccessor] = monaco.languages.SymbolKind.Property;
outlineTypeTable[Kind.variable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.const] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.localVariable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.variable] = monaco.languages.SymbolKind.Variable;
outlineTypeTable[Kind.function] = monaco.languages.SymbolKind.Function;
outlineTypeTable[Kind.localFunction] = monaco.languages.SymbolKind.Function; // --- formatting ----

var FormatHelper =
/** @class */
function (_super) {
  __extends(FormatHelper, _super);

  function FormatHelper() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FormatHelper._convertOptions = function (options) {
    return {
      ConvertTabsToSpaces: options.insertSpaces,
      TabSize: options.tabSize,
      IndentSize: options.tabSize,
      IndentStyle: IndentStyle.Smart,
      NewLineCharacter: '\n',
      InsertSpaceAfterCommaDelimiter: true,
      InsertSpaceAfterSemicolonInForStatements: true,
      InsertSpaceBeforeAndAfterBinaryOperators: true,
      InsertSpaceAfterKeywordsInControlFlowStatements: true,
      InsertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
      InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
      InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
      InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
      PlaceOpenBraceOnNewLineForControlBlocks: false,
      PlaceOpenBraceOnNewLineForFunctions: false
    };
  };

  FormatHelper.prototype._convertTextChanges = function (model, change) {
    return {
      text: change.newText,
      range: this._textSpanToRange(model, change.span)
    };
  };

  return FormatHelper;
}(Adapter);

exports.FormatHelper = FormatHelper;

var FormatAdapter =
/** @class */
function (_super) {
  __extends(FormatAdapter, _super);

  function FormatAdapter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FormatAdapter.prototype.provideDocumentRangeFormattingEdits = function (model, range, options, token) {
    return __awaiter(this, void 0, void 0, function () {
      var resource, startOffset, endOffset, worker, edits;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            resource = model.uri;
            startOffset = model.getOffsetAt({
              lineNumber: range.startLineNumber,
              column: range.startColumn
            });
            endOffset = model.getOffsetAt({
              lineNumber: range.endLineNumber,
              column: range.endColumn
            });
            return [4
            /*yield*/
            , this._worker(resource)];

          case 1:
            worker = _a.sent();
            return [4
            /*yield*/
            , worker.getFormattingEditsForRange(resource.toString(), startOffset, endOffset, FormatHelper._convertOptions(options))];

          case 2:
            edits = _a.sent();

            if (!edits || model.isDisposed()) {
              return [2
              /*return*/
              ];
            }

            return [2
            /*return*/
            , edits.map(function (edit) {
              return _this._convertTextChanges(model, edit);
            })];
        }
      });
    });
  };

  return FormatAdapter;
}(FormatHelper);

exports.FormatAdapter = FormatAdapter;

var FormatOnTypeAdapter =
/** @class */
function (_super) {
  __extends(FormatOnTypeAdapter, _super);

  function FormatOnTypeAdapter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(FormatOnTypeAdapter.prototype, "autoFormatTriggerCharacters", {
    get: function () {
      return [';', '}', '\n'];
    },
    enumerable: true,
    configurable: true
  });

  FormatOnTypeAdapter.prototype.provideOnTypeFormattingEdits = function (model, position, ch, options, token) {
    return __awaiter(this, void 0, void 0, function () {
      var resource, offset, worker, edits;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            resource = model.uri;
            offset = model.getOffsetAt(position);
            return [4
            /*yield*/
            , this._worker(resource)];

          case 1:
            worker = _a.sent();
            return [4
            /*yield*/
            , worker.getFormattingEditsAfterKeystroke(resource.toString(), offset, ch, FormatHelper._convertOptions(options))];

          case 2:
            edits = _a.sent();

            if (!edits || model.isDisposed()) {
              return [2
              /*return*/
              ];
            }

            return [2
            /*return*/
            , edits.map(function (edit) {
              return _this._convertTextChanges(model, edit);
            })];
        }
      });
    });
  };

  return FormatOnTypeAdapter;
}(FormatHelper);

exports.FormatOnTypeAdapter = FormatOnTypeAdapter;

// --- code actions ------
var CodeActionAdaptor =
/** @class */
function (_super) {
  __extends(CodeActionAdaptor, _super);

  function CodeActionAdaptor() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  CodeActionAdaptor.prototype.provideCodeActions = function (model, range, context, token) {
    return __awaiter(this, void 0, void 0, function () {
      var resource, start, end, formatOptions, errorCodes, worker, codeFixes, actions;

      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            resource = model.uri;
            start = model.getOffsetAt({
              lineNumber: range.startLineNumber,
              column: range.startColumn
            });
            end = model.getOffsetAt({
              lineNumber: range.endLineNumber,
              column: range.endColumn
            });
            formatOptions = FormatHelper._convertOptions(model.getOptions());
            errorCodes = context.markers.filter(function (m) {
              return m.code;
            }).map(function (m) {
              return m.code;
            }).map(Number);
            return [4
            /*yield*/
            , this._worker(resource)];

          case 1:
            worker = _a.sent();
            return [4
            /*yield*/
            , worker.getCodeFixesAtPosition(resource.toString(), start, end, errorCodes, formatOptions)];

          case 2:
            codeFixes = _a.sent();

            if (!codeFixes || model.isDisposed()) {
              return [2
              /*return*/
              ];
            }

            actions = codeFixes.filter(function (fix) {
              // Removes any 'make a new file'-type code fix
              return fix.changes.filter(function (change) {
                return change.isNewFile;
              }).length === 0;
            }).map(function (fix) {
              return _this._tsCodeFixActionToMonacoCodeAction(model, context, fix);
            });
            return [2
            /*return*/
            , {
              actions: actions,
              dispose: function () {}
            }];
        }
      });
    });
  };

  CodeActionAdaptor.prototype._tsCodeFixActionToMonacoCodeAction = function (model, context, codeFix) {
    var _this = this;

    var edits = codeFix.changes.map(function (edit) {
      return {
        resource: model.uri,
        edits: edit.textChanges.map(function (tc) {
          return {
            range: _this._textSpanToRange(model, tc.span),
            text: tc.newText
          };
        })
      };
    });
    var action = {
      title: codeFix.description,
      edit: {
        edits: edits
      },
      diagnostics: context.markers,
      kind: "quickfix"
    };
    return action;
  };

  return CodeActionAdaptor;
}(FormatHelper);

exports.CodeActionAdaptor = CodeActionAdaptor;

// --- rename ----
var RenameAdapter =
/** @class */
function (_super) {
  __extends(RenameAdapter, _super);

  function RenameAdapter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  RenameAdapter.prototype.provideRenameEdits = function (model, position, newName, token) {
    return __awaiter(this, void 0, void 0, function () {
      var resource, fileName, offset, worker, renameInfo, renameLocations, fileNameToResourceTextEditMap, edits, _i, renameLocations_1, renameLocation, resourceTextEdit;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            resource = model.uri;
            fileName = resource.toString();
            offset = model.getOffsetAt(position);
            return [4
            /*yield*/
            , this._worker(resource)];

          case 1:
            worker = _a.sent();
            return [4
            /*yield*/
            , worker.getRenameInfo(fileName, offset, {
              allowRenameOfImportPath: false
            })];

          case 2:
            renameInfo = _a.sent();

            if (renameInfo.canRename === false) {
              // use explicit comparison so that the discriminated union gets resolved properly
              return [2
              /*return*/
              , {
                edits: [],
                rejectReason: renameInfo.localizedErrorMessage
              }];
            }

            if (renameInfo.fileToRename !== undefined) {
              throw new Error("Renaming files is not supported.");
            }

            return [4
            /*yield*/
            , worker.findRenameLocations(fileName, offset,
            /*strings*/
            false,
            /*comments*/
            false,
            /*prefixAndSuffix*/
            false)];

          case 3:
            renameLocations = _a.sent();

            if (!renameLocations || model.isDisposed()) {
              return [2
              /*return*/
              ];
            }

            fileNameToResourceTextEditMap = {};
            edits = [];

            for (_i = 0, renameLocations_1 = renameLocations; _i < renameLocations_1.length; _i++) {
              renameLocation = renameLocations_1[_i];

              if (!(renameLocation.fileName in fileNameToResourceTextEditMap)) {
                resourceTextEdit = {
                  edits: [],
                  resource: monaco.Uri.parse(renameLocation.fileName)
                };
                fileNameToResourceTextEditMap[renameLocation.fileName] = resourceTextEdit;
                edits.push(resourceTextEdit);
              }

              fileNameToResourceTextEditMap[renameLocation.fileName].edits.push({
                range: this._textSpanToRange(model, renameLocation.textSpan),
                text: newName
              });
            }

            return [2
            /*return*/
            , {
              edits: edits
            }];
        }
      });
    });
  };

  return RenameAdapter;
}(Adapter);

exports.RenameAdapter = RenameAdapter;
},{}],"node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js":[function(require,module,exports) {
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupTypeScript = setupTypeScript;
exports.setupJavaScript = setupJavaScript;
exports.getJavaScriptWorker = getJavaScriptWorker;
exports.getTypeScriptWorker = getTypeScriptWorker;

var _workerManager = require("./workerManager.js");

var languageFeatures = _interopRequireWildcard(require("./languageFeatures.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var javaScriptWorker;
var typeScriptWorker;

function setupTypeScript(defaults) {
  typeScriptWorker = setupMode(defaults, 'typescript');
}

function setupJavaScript(defaults) {
  javaScriptWorker = setupMode(defaults, 'javascript');
}

function getJavaScriptWorker() {
  return new Promise(function (resolve, reject) {
    if (!javaScriptWorker) {
      return reject("JavaScript not registered!");
    }

    resolve(javaScriptWorker);
  });
}

function getTypeScriptWorker() {
  return new Promise(function (resolve, reject) {
    if (!typeScriptWorker) {
      return reject("TypeScript not registered!");
    }

    resolve(typeScriptWorker);
  });
}

function setupMode(defaults, modeId) {
  var client = new _workerManager.WorkerManager(modeId, defaults);

  var worker = function (first) {
    var more = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      more[_i - 1] = arguments[_i];
    }

    return client.getLanguageServiceWorker.apply(client, [first].concat(more));
  };

  monaco.languages.registerCompletionItemProvider(modeId, new languageFeatures.SuggestAdapter(worker));
  monaco.languages.registerSignatureHelpProvider(modeId, new languageFeatures.SignatureHelpAdapter(worker));
  monaco.languages.registerHoverProvider(modeId, new languageFeatures.QuickInfoAdapter(worker));
  monaco.languages.registerDocumentHighlightProvider(modeId, new languageFeatures.OccurrencesAdapter(worker));
  monaco.languages.registerDefinitionProvider(modeId, new languageFeatures.DefinitionAdapter(worker));
  monaco.languages.registerReferenceProvider(modeId, new languageFeatures.ReferenceAdapter(worker));
  monaco.languages.registerDocumentSymbolProvider(modeId, new languageFeatures.OutlineAdapter(worker));
  monaco.languages.registerDocumentRangeFormattingEditProvider(modeId, new languageFeatures.FormatAdapter(worker));
  monaco.languages.registerOnTypeFormattingEditProvider(modeId, new languageFeatures.FormatOnTypeAdapter(worker));
  monaco.languages.registerCodeActionProvider(modeId, new languageFeatures.CodeActionAdaptor(worker));
  monaco.languages.registerRenameProvider(modeId, new languageFeatures.RenameAdapter(worker));
  new languageFeatures.DiagnosticsAdapter(defaults, modeId, worker);
  return worker;
}
},{"./workerManager.js":"node_modules/monaco-editor/esm/vs/language/typescript/workerManager.js","./languageFeatures.js":"node_modules/monaco-editor/esm/vs/language/typescript/languageFeatures.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50735" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js"], null)
//# sourceMappingURL=/tsMode.36fe6354.js.map