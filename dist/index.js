'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regex = exports.extend = exports.is = undefined;

var _extend = require('./extend.js');

var _is = require('./is');

var is = _interopRequireWildcard(_is);

var _regex = require('./regex');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.is = is;
exports.extend = _extend.extend;
exports.regex = _regex.regex;