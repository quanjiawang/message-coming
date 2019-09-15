// pages/game/gameRules/gameRules.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  goStart() {
    wx.navigateTo({
      url: `../startGame/startGame?sex=${this.data.sex}`,
    })
  },
  goBackIndex() {
    wx.navigateBack({
      delate: 1
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 用户点击选择性别
   */
  changeSex(e){
    var sex=e.currentTarget.dataset.sex;
    this.setData({
      sex
    });
  }
})