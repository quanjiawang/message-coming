// pages/game/gameIndex/gameIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
// 开始游戏
  goStartGame(){
    wx.navigateTo({
      url: '../gameRules/gameRules',
    })
  },
  // 我的成就
  
  goMyAchievent(){
    wx.navigateTo({
      url: '../myAchievent/myAchievent',
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})