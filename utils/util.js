/* 我们在这里写一些功能性函数 */
  const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/* api接口promise 柯里化 并不知道什么是柯里化 */
var Promise = require('../lib/es6-promise.min.js');
function wxPromisify(fn, scope) {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        resolve(res);
      }
      obj.fail = function (res) {
        reject(res);
      }
      if (scope) {
        //改变this指向
        var newFn = fn.bind(scope);
        newFn(obj);
      } else {
        fn(obj);
      }
    })
  }
}

module.exports = {
  formatTime: formatTime,
  wxPromisify: wxPromisify
}
export {}