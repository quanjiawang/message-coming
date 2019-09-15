function post(url,data,success,fail){
  wx.showToast({
    title: "加载中",
    mask: true,
    icon: 'loading',
    duration: (3000 <= 0) ? 30000 : 3000
  });
  wx.request({
    url: url,
    header: {
      'content-type': 'application/json'
    },
    method: 'POST',
    data: data,
    success: function (res) {
      wx.hideToast()
      if (res.data.code == 200 || res.data.code == 201 || res.data.code == '200' || res.data.code == 300 || res.data.code == 301 || res.data.code == 400) {
        success(res.data);
      } else {
        if (!fail) {
          if (typeof (res.data.message) == "undefined") {
            wx.showModal({
              title: '提示',
              showCancel: false,
              content: "错误：" + res.statusCode
            })
            fail(res.data);
          } else {
            wx.showModal({
              title: '提示',
              showCancel: false,
              content: res.data.message,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
          }
        } else {
          fail(res.data);
        }
      }
    },
    fail: function (res) {
      wx.hideToast()
      fail(res);
    }
  });
}

module.exports = {
  post
}