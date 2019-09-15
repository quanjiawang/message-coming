function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatTime2(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatTimeNoHour(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}

function formatTimeToyyyyMMdd(date){
  var year = date.getFullYear().toString()
  var month = (date.getMonth() + 1).toString();
  var day = date.getDate().toString();
  return [year, month, day].map(formatNumber).join('')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getNowFormatDate(date) {
  // var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (hours >= 0 && hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
    " " + hours + seperator2 + minutes +
    seperator2 + date.getSeconds();
  return currentdate;
}

//获取Token
function getToken(time) {
  var token = time + getPswId();
  console.log(token);
  return md5.hex_md5(token);
}

function getKo() {
  return '0000';
}

function getTime(date) {
  return getNowFormatDate(date);
}

function getPswId() {
  return '0010000app';
}


function tokenAndKo(map) {
  let time = getTime();
  map.set('ko', getKo());
  map.set('time', time);
  map.set('token', getToken(time));
  return map;
}

function isInputContent(flag, message) {
  if (flag === '0' || flag === 0 || flag === "0.00") {
    return true
  }
  if (typeof(flag) != 'number') {

    if (flag == '' || isNullObject(flag) == false || flag.length == 0 || flag == false) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: message,
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      return false
    }
    return true
  }
}

function isNullObject(obj) {
  for (var pro in obj) {
    return true
  }
  return false
}


function ToUnicode(str) {
  return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
}

function ToGB2312(str) {
  return unescape(str.replace(/\\u/gi, '%u'));
}

//HUD 
//成功提示
function showSuccess(title = "成功", duration = 3000) {
  wx.showToast({
    title: title,
    icon: 'success',
    duration: (duration <= 0) ? 1500 : duration
  });
}
//loading提示
function showLoading(title = "加载中", duration = 300000) {
  wx.showToast({
    title: title,
    mask: true,
    icon: 'loading',
    duration: (duration <= 0) ? 30000 : duration
  });
}

function showToast(content) {
  wx.showToast({
    title: content,
    icon: 'none'
  })
}

//显示带取消按钮的消息提示框
function alertViewWithCancel(content = "网络异常", confirm = function() {}, title = "提示", showCancel = false, cancel = function() {}) {
  wx.showModal({
    title: title,
    content: content,
    showCancel: showCancel,
    success: function(res) {
      if (res.confirm) {
        confirm();
      } else if (res.cancel) {
        cancel();
      }
    }
  })
}
//显示不取消按钮的消息提示框
function alertView(content = "网络异常", confirm = function() {}, title = "提示") {
  alertViewWithCancel(content, confirm, title, false);
}

function decimal(e) {
  var value = e.detail.value;
  var re = /([0-9]+.[0-9]{2})[0-9]*/;
  var temp = value.split(".");
  if (temp.length >= 3) {
    var val = value.substr(0, value.length - 1);
    return val
  } else {
    value = value
  }
  value = value.replace(re, "$1");
  return value;
}

function clone(obj) {
  var o;
  if (typeof obj == "object") {
    if (obj === null) {
      o = null;
    } else {
      if (obj instanceof Array) {
        o = [];
        for (var i = 0, len = obj.length; i < len; i++) {
          o.push(clone(obj[i]));
        }
      } else {
        o = {};
        for (var j in obj) {
          o[j] = clone(obj[j]);
        }
      }
    }
  } else {
    o = obj;
  }
  return o;
}

//是否obj在arr中
function contains(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) {
      return true;
    }
  }
  return false;
}
//判断是否是整数
function isInteger(obj) {
  return Math.floor(obj) === obj
}

//数字小数点限制
function amountInputCheck(event) {
  var value = event.detail.value;
  value = value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符  
  value = value.replace(/^\./g, ""); //验证第一个字符是数字而不是  
  value = value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的  
  value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数  
  try {
    var max = event.currentTarget.dataset.max;
    if (max) {
      if (Number(value) > Number(max)) {
        value = max;
      }
    }
  } catch (ex) {

  }
  return value;
}
//整数限制
function numberInputCheck(event) {
  var value = event.detail.value;
  value = value.replace(/[^\d]/g, '')
  return value;
}

function urlEncode(param, key, encode) {
  if (param == null) return '';
  var paramStr = '';
  var t = typeof(param);
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param) + '&';
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
      paramStr += urlEncode(param[i], k, encode);
    }
  }
  return paramStr;
};
//一键复制
function copyText(event) {
  var that=this;
  wx.setClipboardData({
    data: event.currentTarget.dataset.text,
    success: function(res) {
      wx.getClipboardData({
        success: function(res) {
          that.showToast("已复制")
          console.log(res.data)
        }
      })
    }
  })
}

//页面操作成功提示并延迟返回
function showSuccessAndBack(title = "操作成功"){
  this.showSuccess(title);
  setTimeout(function () {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
    })
  }, 1000);
}

// 禁止输入空格换行
function noSpaceInput(event) {
  var value = event.detail.value;
  value = value.replace(/\s+/g, '')
  return value;
}

// 输入变大写
function bindInputToUpper(e){
  var val = e.detail.value.toUpperCase();
  return val;
}

//JSON对象转url参数
function convertJSONObjToUrlPara(obj){
  var para = "?";
  var arr = [];
  for(var item in obj){
    arr.push(item +"="+obj[item])
  }
  para += arr.join("&")
  return para;
}

module.exports = {
  formatTime: formatTime,
  formatTime2: formatTime2,
  getToken: getToken,
  getKo: getKo,
  getTime: getTime,
  getPswId: getPswId,
  tokenAndKo: tokenAndKo,
  isInputContent: isInputContent,
  isNullObject: isNullObject,
  formatTimeNoHour: formatTimeNoHour,
  formatTimeToyyyyMMdd: formatTimeToyyyyMMdd,
  ToUnicode: ToUnicode,
  ToGB2312: ToGB2312,
  showSuccess: showSuccess,
  showLoading: showLoading,
  alertViewWithCancel: alertViewWithCancel,
  alertView: alertView,
  decimal: decimal,
  clone: clone,
  contains: contains,
  isInteger: isInteger,
  amountInputCheck: amountInputCheck,
  numberInputCheck: numberInputCheck,
  showToast: showToast,
  urlEncode: urlEncode,
  copyText: copyText,
  showSuccessAndBack: showSuccessAndBack,
  noSpaceInput: noSpaceInput,
  bindInputToUpper: bindInputToUpper,
  convertJSONObjToUrlPara: convertJSONObjToUrlPara
}