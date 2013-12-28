/**
 * Format the date as you want.
 *
 * @param {Date} date
 * @param {String} format
 * @return {String}
 */

module.exports = function (date, format) {
  if('string' === typeof date){
    format = date;
    date = new Date;
  }
  var regExp = /[^yYmMdDhHsSwW]/i;
  if("" === format || regExp.test(format)) throw new Error("invalid formation.");
  var formatStr = format;
  var week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
  formatStr = formatStr.replace(/yyyy|YYYY/, date.getFullYear().toString());
  formatStr = formatStr.replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date.getYear() % 100).toString() : '0' + (date.getYear() % 100));
  formatStr = formatStr.replace(/MM/, (date.getMonth() + 1) > 9 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1));
  formatStr = formatStr.replace(/M/g, (date.getMonth() + 1).toString());
  formatStr = formatStr.replace(/dd|DD/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate());
  formatStr = formatStr.replace(/d|D/g, date.getDate().toString());
  formatStr = formatStr.replace(/hh|HH/, date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours());
  formatStr = formatStr.replace(/h|H/g, date.getHours().toString());
  formatStr = formatStr.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes());
  formatStr = formatStr.replace(/m/g, date.getMinutes().toString());
  formatStr = formatStr.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds());
  formatStr = formatStr.replace(/s|S/g, date.getSeconds().toString());
  formatStr = formatStr.replace(/w|W/g, week[date.getDay()]);
  return formatStr;
};
