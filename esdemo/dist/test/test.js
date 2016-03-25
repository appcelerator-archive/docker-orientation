'use strict';

require('babel-polyfill');

require('source-map-support/register');

var _GitHubUser = require('../lib/GitHubUser');

var _GitHubUser2 = _interopRequireDefault(_GitHubUser);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// WARNING: don't use arrow functions with mocha describe(), it(),
// and all the other standard mocha functions that take callbacks
// if you want to be able to use `this.timeout()`. Because of the way
// arrow functions work, the `this` context will be the module, not
// the mocha context in the callback. Even if you don't anticipate
// needing access to the mocha `this` context in the callbacks, it's
// best to use full `function()` syntax for the mocha functions.

// async mocha helper inspired by Jason Jarrett:
// http://staxmanade.com/2015/11/testing-asyncronous-code-with-mochajs-and-es7-async-await/
var mocha = function mocha(asyncFunc) {
  var timeout = arguments.length <= 1 || arguments[1] === undefined ? 2 * 1000 : arguments[1];

  // Returns a function that takes a `done` parameter as mocha expects.
  // It doesn't use arrow syntax so the `this` context will be set correctly
  return function _callee(done) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            this.timeout = timeout; // eslint-disable-line
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(asyncFunc());

          case 4:
            done();
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);

            done(_context.t0);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, null, this, [[1, 7]]);
  };
};

describe('tests', function () {
  var _this = this;

  // This is an auto-generated sample test to demo testing async functions
  it('should fetch GitHub user details for "subfuzion"', mocha(function _callee2() {
    var login, user;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            login = 'subfuzion';
            _context2.next = 3;
            return regeneratorRuntime.awrap(_GitHubUser2.default.fetchDetails(login));

          case 3:
            user = _context2.sent;

            (0, _assert2.default)(user);
            _assert2.default.equal(user.login, login);
            _assert2.default.equal(user.name, 'Tony Pujals');
            _assert2.default.equal(user.blog, 'https://twitter.com/subfuzion');

          case 8:
          case 'end':
            return _context2.stop();
        }
      }
    }, null, _this);
  }));
});
//# sourceMappingURL=test.js.map