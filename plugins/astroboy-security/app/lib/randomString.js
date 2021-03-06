var assert = require('assert');

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const length = Buffer.byteLength(chars)

/**
 * 生成一个长度为 len 的字符串
 * @param {Number} len 字符串长度
 */
function randomString(len = 10) {
  assert(typeof len === 'number' && len >= 0, 'the length of the random string must be a number!')

  var str = ''
  for (var i = 0; i < len; i++) {
    str += chars[Math.floor(length * Math.random())];
  }
  return str
}

module.exports = randomString;