'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Auto-generated file for mocha test of static async method
// You can safely delete this and the corresponding test in src/test/test.js


var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GitHubUser = function () {
  function GitHubUser() {
    _classCallCheck(this, GitHubUser);
  }

  _createClass(GitHubUser, null, [{
    key: 'fetchDetails',
    value: function fetchDetails(login) {
      var res;
      return regeneratorRuntime.async(function fetchDetails$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap((0, _nodeFetch2.default)('https://api.github.com/users/' + login));

            case 2:
              res = _context.sent;
              return _context.abrupt('return', res.json());

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, null, this);
    }
  }]);

  return GitHubUser;
}();

exports.default = GitHubUser;
//# sourceMappingURL=GitHubUser.js.map