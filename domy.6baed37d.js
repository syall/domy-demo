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
})({"node_modules/domy-lang/bin/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scope = exports.printError = exports.isWord = exports.word = exports.isAlphabetic = exports.alphabet = exports.isEqual = exports.isComma = exports.isBracket = exports.isParenthesis = exports.isDoubleOperator = exports.isOperator = exports.isComment = exports.isIrrelevant = exports.ops = exports.order = exports.binaryOperators = exports.unaryOperators = exports.operators = exports.reserved = exports.words = exports.tokenTypes = exports.types = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Types
var types = {
  terop: 'ternary:operator',
  binop: 'binary:operator',
  unop: 'unary:operator',
  paren: 'parenthesis:',
  brack: 'parenthesis:',
  comma: 'comma',
  assign: 'assignment',
  saved: 'reserved',
  name: 'word'
};
exports.types = types;
var tokenTypes = {
  expr: 'expression',
  ternary: 'ternary-operation',
  inv: 'function-invocation',
  block: 'block',
  saved: 'reserved',
  loop: 'while-loop',
  func: 'function-declaration',
  term: 'terminal',
  paren: 'parenthesis',
  id: 'identifier',
  uno: 'unary-operation',
  and: 'and',
  xor: 'xor',
  or: 'or',
  test: 'test',
  varDec: 'variable-declaration',
  varAss: 'variable-assignment',
  std: 'std'
}; // Reserved Words

exports.tokenTypes = tokenTypes;
var words = ['true', 'false', 'my', 'do', 'while', 'return', 'break', 'continue'];
exports.words = words;
var reserved = new Set(words); // Operators

exports.reserved = reserved;
var operators = ['?', ':', '!=', '==', '|', '^', '&', '!'];
exports.operators = operators;
var unaryOperators = ['!'];
exports.unaryOperators = unaryOperators;
var binaryOperators = ['!=', '==', '|', '^', '&'];
exports.binaryOperators = binaryOperators;
var order = new Map([['?', 40], [':', 40], ['!=', 50], ['==', 50], ['|', 60], ['^', 70], ['&', 80], ['!', 90]]);
exports.order = order;
var ops = new Set(operators); // Utility Functions

exports.ops = ops;

var isIrrelevant = function isIrrelevant(c) {
  return c <= ' ' || c === ';';
};

exports.isIrrelevant = isIrrelevant;

var isComment = function isComment(c) {
  return c === '#';
};

exports.isComment = isComment;

var isOperator = function isOperator(c) {
  return ops.has(c);
};

exports.isOperator = isOperator;

var isDoubleOperator = function isDoubleOperator(c, n) {
  return (c === '!' || c === '=') && n === '=';
};

exports.isDoubleOperator = isDoubleOperator;

var isParenthesis = function isParenthesis(c) {
  return c === '(' || c === ')';
};

exports.isParenthesis = isParenthesis;

var isBracket = function isBracket(c) {
  return c === '{' || c === '}';
};

exports.isBracket = isBracket;

var isComma = function isComma(c) {
  return c === ',';
};

exports.isComma = isComma;

var isEqual = function isEqual(c) {
  return c === '=';
};

exports.isEqual = isEqual;
var alphabet = /^[a-zA-Z]$/;
exports.alphabet = alphabet;

var isAlphabetic = function isAlphabetic(c) {
  return c.match(alphabet);
};

exports.isAlphabetic = isAlphabetic;
var word = /^[-_a-zA-Z0-9]$/;
exports.word = word;

var isWord = function isWord(c) {
  return c && c.match(word);
}; // Error


exports.isWord = isWord;

var printError = function printError(fileContent, t, s, r, c, from, to) {
  console.error("".concat(t, " Error: ").concat(s, " at row ").concat(r, ", col ").concat(c, "."));
  var start, end;

  for (start = from; start >= 0; start--) {
    if (fileContent[start] === '\n') break;
  }

  for (end = to; end < fileContent.length; end++) {
    if (fileContent[end] === '\n') break;
  }

  var rightTrim = fileContent.slice(start + 1, end).trimRight();
  var trimmed = rightTrim.trimLeft();
  var offset = c - (rightTrim.length - trimmed.length);
  var line = "".concat(r, ": ");
  var blank = ' '.repeat(line.length + offset - 1);
  console.error("".concat(line).concat(trimmed, "..."));
  console.error("".concat(blank, "^"));
  console.error("".concat(blank).concat(c));
};

exports.printError = printError;

var Scope =
/*#__PURE__*/
function () {
  function Scope(parent) {
    _classCallCheck(this, Scope);

    this.parent = parent;
    this.vars = new Map();
  }

  _createClass(Scope, [{
    key: "find",
    value: function find(name) {
      var current = this;

      while (current !== null) {
        var value = current.vars.get(name);
        if (value !== undefined) return value;
        current = current.parent;
      }

      return undefined;
    }
  }, {
    key: "add",
    value: function add(name, value) {
      this.vars.set(name, value);
    }
  }, {
    key: "reassign",
    value: function reassign(name, value) {
      var current = this;

      while (current !== null) {
        var search = current.vars.get(name);
        if (search !== undefined) return current.vars.set(name, value);
        current = current.parent;
      }

      return undefined;
    }
  }]);

  return Scope;
}();

exports.Scope = Scope;
},{}],"node_modules/domy-lang/bin/lexer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DomyLexer =
/*#__PURE__*/
function () {
  function DomyLexer() {
    _classCallCheck(this, DomyLexer);

    // Record of all Lexes
    this.record = [];
  }

  _createClass(DomyLexer, [{
    key: "tokenize",
    value: function tokenize(text) {
      // State
      var i = 0;
      var row = 1;
      var col = 1; // Tokens

      var tokens = [];

      var addToken = function addToken(text, type, from, to, row, col) {
        return tokens.push({
          text: text,
          type: type,
          from: from,
          to: to,
          row: row,
          col: col
        });
      }; // Text Traversal


      while (i < text.length) {
        var c = text[i];

        if ((0, _utils.isIrrelevant)(c)) {
          // Ignore Whitespace and ;
          if (c === '\n') {
            row++;
            col = 0;
          }
        } else if ((0, _utils.isComment)(c)) {
          // Single Line Comment #
          var cur = text[i];

          while (cur !== '\n') {
            i++;
            cur = text[i];
          }

          i--;
          col = 0;
        } else if ((0, _utils.isDoubleOperator)(c, text[i + 1])) {
          // ==, !=
          addToken("".concat(c, "="), _utils.types.binop, i, i + 2, row, col);
          i++;
          col++;
        } else if ((0, _utils.isOperator)(c)) {
          // :, &, |, ^, ?, !
          var type = c === '?' || c === ':' ? _utils.types.terop : c === '!' ? _utils.types.unop : _utils.types.binop;
          addToken(c, type, i, i + 1, row, col);
        } else if ((0, _utils.isEqual)(c)) {
          // =
          addToken(c, _utils.types.assign, i, i + 1, row, col);
        } else if ((0, _utils.isParenthesis)(c)) {
          // (, )
          addToken(c, "".concat(_utils.types.paren).concat(c === '(' ? 'left' : 'right'), i, i + 1, row, col);
        } else if ((0, _utils.isBracket)(c)) {
          // {, }
          addToken(c, "".concat(_utils.types.brack).concat(c === '{' ? 'left' : 'right'), i, i + 1, row, col);
        } else if ((0, _utils.isComma)(c)) {
          // ,
          addToken(c, _utils.types.comma, i, i + 1, row, col);
        } else if ((0, _utils.isAlphabetic)(c)) {
          // Words
          var past = i;
          var str = '';
          var _cur = text[i];

          while ((0, _utils.isWord)(_cur)) {
            str += _cur;
            i++;
            _cur = text[i];
          }

          var _type = _utils.reserved.has(str) ? _utils.types.saved : _utils.types.name;

          addToken(str, _type, past, i--, row, col);
          col += i - past;
        } else {
          // No Match
          (0, _utils.printError)(text, 'Lexer', "Unable to lex ".concat(c), row, col, i, i);
          throw new Error();
        }

        i++;
        col++;
      } // Add End Token


      addToken('(end)', _utils.types.saved, -1, text.length, Infinity, Infinity); // Save to record

      this.record.push(tokens); // Return tokens

      return tokens;
    }
  }, {
    key: "toString",
    value: function toString() {
      var options = ['text', 'row', 'col'];
      console.table(this.record[this.record.length - 1], options);
    }
  }]);

  return DomyLexer;
}();

exports.default = DomyLexer;
},{"./utils.js":"node_modules/domy-lang/bin/utils.js"}],"node_modules/domy-lang/bin/parser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DomyParser =
/*#__PURE__*/
function () {
  function DomyParser() {
    _classCallCheck(this, DomyParser);

    // Record of all Parses
    this.record = [];
  }

  _createClass(DomyParser, [{
    key: "parse",
    value: function parse(tokens, text) {
      // State
      var i = 0;
      var results = []; // Utility Functions

      var parseError = function parseError(s) {
        var _peek = peek(),
            from = _peek.from,
            to = _peek.to,
            row = _peek.row,
            col = _peek.col;

        (0, _utils.printError)(text, 'Parser', s, row, col, from, to);
        throw new Error();
      };

      var advance = function advance(c, t) {
        var _tokens$i = tokens[i],
            text = _tokens$i.text,
            type = _tokens$i.type;
        if (c && c !== text) parseError("Expected '".concat(c, "' but got '").concat(text, "'"));
        if (t && t !== type) parseError("Expected '".concat(t, "' but got '").concat(type, "'"));
        return tokens[i++];
      };

      var peek = function peek() {
        var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        return tokens[i + offset] ? tokens[i + offset] : {
          text: ''
        };
      }; // EBNF Grammar Functions


      var term = function term() {
        var _peek2 = peek(),
            text = _peek2.text,
            type = _peek2.type;

        if (text === 'true') {
          advance('true');
          return {
            type: _utils.tokenTypes.term,
            value: true
          };
        } else if (text === 'false') {
          advance('false');
          return {
            type: _utils.tokenTypes.term,
            value: false
          };
        } else if (text === '(') {
          advance('(');
          var value = statement();
          advance(')');

          if (peek().text !== '?') {
            return {
              type: _utils.tokenTypes.paren,
              value: value
            };
          }

          advance('?');
          var left;

          if (peek().text === '{') {
            left = block();
          } else {
            left = statement();
          }

          advance(':');
          var right;

          if (peek().text === '{') {
            right = block();
          } else {
            right = statement();
          }

          return {
            type: _utils.tokenTypes.ternary,
            cond: value,
            left: left,
            right: right
          };
        } else if (text === 'return') {
          advance('return');
          if (peek().text !== '}') return {
            type: _utils.tokenTypes.saved,
            text: text,
            value: statement()
          };else return {
            type: _utils.tokenTypes.saved,
            text: text
          };
        } else if (text === 'continue') {
          advance('continue');
          return {
            type: _utils.tokenTypes.saved,
            text: text
          };
        } else if (text === 'break') {
          advance('break');
          return {
            type: _utils.tokenTypes.saved,
            text: text
          };
        } else if (text === 'while') {
          advance('while');
          var cond = statement();

          var _value = block();

          return {
            type: _utils.tokenTypes.loop,
            cond: cond,
            value: _value
          };
        } else if (text === 'do') {
          advance('do');
          var args = arg_list();

          var _value2 = block();

          return {
            type: _utils.tokenTypes.func,
            args: args,
            value: _value2
          };
        } else if (text === '{') {
          return block();
        } else if (type === _utils.types.name) {
          var name = advance(null, _utils.types.name);

          if (peek().text === '(') {
            var _args = inv_list();

            return {
              type: _utils.tokenTypes.inv,
              name: name.text,
              args: _args
            };
          }

          return {
            type: _utils.tokenTypes.id,
            name: name.text
          };
        } else if (text === '(end)') {
          parseError('Reached end of input');
        } else parseError('Term could not be parsed');
      };

      var not = function not() {
        if (peek().text === '!') {
          advance('!');
          var value = term();
          return {
            type: _utils.tokenTypes.uno,
            value: value
          };
        } else return term();
      };

      var and = function and() {
        var left = not();

        if (peek().text === '&') {
          advance('&');
          var right = and();
          return {
            type: _utils.tokenTypes.and,
            left: left,
            right: right
          };
        } else return left;
      };

      var xor = function xor() {
        var left = and();

        if (peek().text === '^') {
          advance('^');
          var right = xor();
          return {
            type: _utils.tokenTypes.xor,
            left: left,
            right: right
          };
        } else return left;
      };

      var or = function or() {
        var left = xor();

        if (peek().text === '|') {
          advance('|');
          var right = or();
          return {
            type: _utils.tokenTypes.or,
            left: left,
            right: right
          };
        } else return left;
      };

      var expression = function expression() {
        var left = or();

        if (peek().text === '==') {
          advance('==');
          var right = expression();
          return {
            type: _utils.tokenTypes.test,
            value: '==',
            left: left,
            right: right
          };
        } else if (peek().text === '!=') {
          advance('!=');

          var _right = expression();

          return {
            type: _utils.tokenTypes.test,
            value: '!=',
            left: left,
            right: _right
          };
        } else return left;
      };

      var inv = function inv() {
        return statement();
      };

      var inv_list = function inv_list() {
        var args = [];
        advance('(');

        while (peek().text !== ')') {
          args.push(inv());
          if (peek().text === ',') advance(',');
        }

        advance(')');
        return args;
      };

      var arg_list = function arg_list() {
        var args = [];
        advance('(');

        while (peek().text !== ')') {
          args.push(advance(null, _utils.types.name));
          if (peek().text === ',') advance(',');
        }

        advance(')');
        return args;
      };

      var block = function block() {
        var value = [];
        advance('{');

        while (peek().text !== '}') {
          value.push(statement());
        }

        advance('}');
        return {
          type: _utils.tokenTypes.block,
          value: value
        };
      };

      var statement = function statement() {
        if (peek().text === 'my') {
          advance('my');
          var name = advance(null, _utils.types.name);
          advance('=');
          var value = statement();
          return {
            type: _utils.tokenTypes.varDec,
            name: name.text,
            value: value
          };
        } else if (peek(1).text === '=') {
          var _name = advance(null, _utils.types.name);

          advance('=');

          var _value3 = statement();

          return {
            type: _utils.tokenTypes.varAss,
            name: _name.text,
            value: _value3
          };
        } else return expression();
      };

      var parseProgram = function parseProgram() {
        while (peek().text !== '(end)') {
          results.push(statement());
        }
      }; // Parse Program


      parseProgram(); // Save to Record

      this.record.push(results); // Return Statements

      return results;
    }
  }, {
    key: "toString",
    value: function toString() {
      var options = ['type', 'name', 'text', 'args', 'cond', 'left', 'right', 'result', 'value'];
      console.log(JSON.stringify(this.record[this.record.length - 1], options, '  |'));
    }
  }]);

  return DomyParser;
}();

exports.default = DomyParser;
},{"./utils.js":"node_modules/domy-lang/bin/utils.js"}],"node_modules/domy-lang/bin/interpreter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DomyInterpreter =
/*#__PURE__*/
function () {
  function DomyInterpreter() {
    _classCallCheck(this, DomyInterpreter);

    this.global = new _utils.Scope(null);
    this.global.add('print', {
      type: _utils.tokenTypes.std,
      args: ['toPrint'],
      value: function value(arg) {
        console.log(JSON.stringify(arg.type === _utils.tokenTypes.func ? arg : arg.value, ['name', 'text', 'type', 'args', 'value', 'cond', 'left', 'right'], 2));
        return {
          value: true
        };
      }
    });
  }

  _createClass(DomyInterpreter, [{
    key: "run",
    value: function run(tree) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = tree[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var statement = _step.value;
          this.evaluate(statement, this.global);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "evaluate",
    value: function evaluate(node, scope) {
      switch (node.type) {
        case _utils.tokenTypes.term:
          return this.terminal(node, scope);

        case _utils.tokenTypes.id:
          return this.identifier(node, scope);

        case _utils.tokenTypes.ternary:
          return this.ternaryOperation(node, scope);

        case _utils.tokenTypes.uno:
          return this.unaryOperation(node, scope);

        case _utils.tokenTypes.and:
          return this.andExpression(node, scope);

        case _utils.tokenTypes.xor:
          return this.xorExpression(node, scope);

        case _utils.tokenTypes.or:
          return this.orExpression(node, scope);

        case _utils.tokenTypes.test:
          return this.comparison(node, scope);

        case _utils.tokenTypes.varDec:
          return this.variableDeclaration(node, scope);

        case _utils.tokenTypes.varAss:
          return this.variableAssignment(node, scope);

        case _utils.tokenTypes.paren:
          return this.parenthesisGroup(node, scope);

        case _utils.tokenTypes.inv:
          return this.functionInvocation(node, scope);

        case _utils.tokenTypes.block:
          return this.blockGroup(node, scope);

        case _utils.tokenTypes.saved:
          return this.reservedWord(node, scope);

        case _utils.tokenTypes.loop:
          return this.loopGroup(node, scope);

        case _utils.tokenTypes.func:
          return this.functionDeclaration(node, scope);

        default:
          throw new Error('Invalid Token Type.');
      }
    }
  }, {
    key: "terminal",
    value: function terminal(node, scope) {
      return {
        value: node.value
      };
    }
  }, {
    key: "identifier",
    value: function identifier(node, scope) {
      return scope.find(node.name);
    }
  }, {
    key: "ternaryOperation",
    value: function ternaryOperation(node, scope) {
      if (node.left.type === _utils.tokenTypes.saved) throw new Error('Reserved words not allowed in condition');
      var cond = this.evaluate(node.cond, scope);

      var _this$evaluate = this.evaluate(cond.value ? node.left : node.right, scope),
          value = _this$evaluate.value,
          type = _this$evaluate.type,
          ret = _this$evaluate.ret;

      return {
        value: ret || value,
        type: type
      };
    }
  }, {
    key: "unaryOperation",
    value: function unaryOperation(node, scope) {
      if (node.value.type === _utils.tokenTypes.saved) throw new Error('Reserved words only allowed in blocks');
      return {
        value: !(node.value.type === _utils.tokenTypes.block ? this.validate(this.evaluate(node.value, scope)).value : this.evaluate(node.value, scope).value)
      };
    }
  }, {
    key: "andExpression",
    value: function andExpression(node, scope) {
      var left = this.evaluate(node.left, scope);
      if (!left.value) return {
        value: left.value,
        type: left.type,
        ret: left.ret
      };
      var right = this.evaluate(node.right, scope);
      var value = right.ret === undefined ? left.value && right.value : left.value && right.ret;
      return {
        value: value,
        type: right.type
      };
    }
  }, {
    key: "xorExpression",
    value: function xorExpression(node, scope) {
      var left = this.evaluate(node.left, scope);
      if (left.type) return {
        value: left.value,
        type: left.type,
        ret: left.ret
      };
      var right = this.evaluate(node.right, scope);
      var value = right.ret === undefined ? left.value && !right.value || !left.value && right.value : left.value && !right.ret || !left.value && right.ret;
      return {
        value: value,
        type: right.type
      };
    }
  }, {
    key: "orExpression",
    value: function orExpression(node, scope) {
      var left = this.evaluate(node.left, scope);
      if (left.value || left.type) return {
        value: left.value,
        type: left.type,
        ret: left.ret
      };
      var right = this.evaluate(node.right, scope);
      return {
        value: right.ret || right.value,
        type: right.type
      };
    }
  }, {
    key: "comparison",
    value: function comparison(node, scope) {
      if (node.left.type === _utils.tokenTypes.saved || node.right.type === _utils.tokenTypes.saved) throw new Error('Reserved words only allowed in blocks');
      if (node.value === '==') return {
        value: (node.left.type === _utils.tokenTypes.block ? this.validate(this.evaluate(node.left, scope)).value : this.evaluate(node.left, scope).value) === (node.right.type === _utils.tokenTypes.block ? this.validate(this.evaluate(node.right, scope)).value : this.evaluate(node.right, scope).value)
      };else return {
        value: (node.left.type === _utils.tokenTypes.block ? this.validate(this.evaluate(node.left, scope)).value : this.evaluate(node.left, scope).value) !== (node.right.type === _utils.tokenTypes.block ? this.validate(this.evaluate(node.right, scope)).value : this.evaluate(node.right, scope).value)
      };
    }
  }, {
    key: "variableDeclaration",
    value: function variableDeclaration(node, scope) {
      if (node.value.type === _utils.tokenTypes.saved) throw new Error('Reserved words only allowed in blocks');
      var declaration = scope.find(node.name);
      if (declaration !== undefined) throw new Error("".concat(node.name, " is already defined."));
      scope.add(node.name, node.value.type === _utils.tokenTypes.block ? this.validate(this.evaluate(node.value, scope)) : this.evaluate(node.value, scope));
      return {
        value: true
      };
    }
  }, {
    key: "variableAssignment",
    value: function variableAssignment(node, scope) {
      if (node.value.type === _utils.tokenTypes.saved) throw new Error('Reserved words only allowed in blocks');
      var assignment = scope.find(node.name);
      if (assignment === undefined) throw new Error("".concat(node.name, " is undefined."));
      scope.reassign(node.name, node.value.type === _utils.tokenTypes.block ? this.validate(this.evaluate(node.value, scope)) : this.evaluate(node.value, scope));
      return {
        value: true
      };
    }
  }, {
    key: "validate",
    value: function validate(v) {
      var value = v.value,
          type = v.type,
          ret = v.ret;
      if (type === 'return' && ret !== undefined) return ret;else if (type !== undefined) throw new Error("Invalid type: ".concat(type, "."));else return {
        value: value
      };
    }
  }, {
    key: "parenthesisGroup",
    value: function parenthesisGroup(node, scope) {
      if (node.value.type === _utils.tokenTypes.saved) throw new Error('Reserved words only allowed in blocks');
      return this.evaluate(node.value, scope);
    }
  }, {
    key: "functionInvocation",
    value: function functionInvocation(node, scope) {
      var func = scope.find(node.name);
      if (func === undefined) throw new Error("Function ".concat(node.name, " is not defined."));
      if (func.args.length !== node.args.length) throw new Error("Argument Length does not match.");

      if (func.type === _utils.tokenTypes.std) {
        var values = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = node.args[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var arg = _step2.value;
            values.push(arg.type === _utils.tokenTypes.id ? scope.find(arg.name) : arg.type === _utils.tokenTypes.block ? this.validate(this.evaluate(arg.value, scope)) : this.evaluate(arg.value !== undefined ? arg.value : arg, scope));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return this.validate(func.value.apply(func, values));
      } else {
        var next = new _utils.Scope(scope);

        for (var i = 0; i < func.args.length; i++) {
          next.add(func.args[i].text, node.args[i].type === _utils.tokenTypes.id ? scope.find(node.args[i].text) : node.args[i].type === _utils.tokenTypes.block ? this.validate(this.evaluate(node.args[i], scope)) : this.evaluate(node.args[i], scope));
        }

        return this.validate(this.evaluate(func.value, next));
      }
    }
  }, {
    key: "blockGroup",
    value: function blockGroup(node, scope) {
      var next = new _utils.Scope(scope);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = node.value[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var statement = _step3.value;

          var _this$evaluate2 = this.evaluate(statement, next),
              value = _this$evaluate2.value,
              type = _this$evaluate2.type,
              ret = _this$evaluate2.ret;

          if (type !== undefined) return {
            value: value,
            type: type,
            ret: ret
          };
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return {
        value: true
      };
    }
  }, {
    key: "reservedWord",
    value: function reservedWord(node, scope) {
      if (node.text === 'return') return {
        value: true,
        type: 'return',
        ret: node.value !== undefined ? node.value.type === _utils.tokenTypes.block ? this.validate(this.evaluate(node.value, scope)) : this.evaluate(node.value, scope) : undefined
      };
      if (node.text === 'continue') return {
        value: true,
        type: 'continue'
      };
      if (node.text === 'break') return {
        value: true,
        type: 'break'
      };
    }
  }, {
    key: "loopGroup",
    value: function loopGroup(node, scope) {
      if (node.cond.type === _utils.tokenTypes.saved) throw new Error('Reserved words only allowed in blocks');

      while (true) {
        var cond = node.cond.type === _utils.tokenTypes.block ? this.validate(this.evaluate(node.cond, scope)) : this.evaluate(node.cond, scope);
        if (!cond.value) break;
        var next = new _utils.Scope(scope);

        var _this$evaluate3 = this.evaluate(node.value, next),
            value = _this$evaluate3.value,
            type = _this$evaluate3.type,
            ret = _this$evaluate3.ret;

        if (type === 'return') return {
          value: ret !== undefined ? ret : value
        };
        if (type === 'break') break;
        if (type === 'continue') continue;
      }

      return {
        value: true
      };
    }
  }, {
    key: "functionDeclaration",
    value: function functionDeclaration(node, scope) {
      return node;
    }
  }]);

  return DomyInterpreter;
}();

exports.default = DomyInterpreter;
},{"./utils.js":"node_modules/domy-lang/bin/utils.js"}],"domy.js":[function(require,module,exports) {
"use strict";

var _lexer = _interopRequireDefault(require("/node_modules/domy-lang/bin/lexer.js"));

var _parser = _interopRequireDefault(require("/node_modules/domy-lang/bin/parser.js"));

var _interpreter = _interopRequireDefault(require("/node_modules/domy-lang/bin/interpreter.js"));

var _utils = require("/node_modules/domy-lang/bin/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.runCode = function runCode() {
  // Code
  var text = editor.getValue(); // Lexer

  var lexer = new _lexer.default();
  lexer.tokenize(text); // Parser

  var parser = new _parser.default();
  parser.parse(lexer.record.pop(), text); // Output

  var replace = document.createElement('code');
  replace.id = 'terminal';
  document.getElementById('terminal').replaceWith(replace); // Interpreter

  var runner = new _interpreter.default();
  runner.global.reassign('print', {
    type: _utils.tokenTypes.std,
    args: ['toPrint'],
    value: function value(arg) {
      var out = JSON.stringify(arg.type === _utils.tokenTypes.func ? arg : arg.value, ['name', 'text', 'type', 'args', 'value', 'cond', 'left', 'right'], 2);
      var node = document.createElement('div');
      node.innerHTML = out;
      replace.appendChild(node);
      return {
        value: true
      };
    }
  });
  runner.run(parser.record.pop());
};
},{"/node_modules/domy-lang/bin/lexer.js":"node_modules/domy-lang/bin/lexer.js","/node_modules/domy-lang/bin/parser.js":"node_modules/domy-lang/bin/parser.js","/node_modules/domy-lang/bin/interpreter.js":"node_modules/domy-lang/bin/interpreter.js","/node_modules/domy-lang/bin/utils.js":"node_modules/domy-lang/bin/utils.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59777" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","domy.js"], null)
//# sourceMappingURL=/domy.6baed37d.js.map