// pages/game/startGame/startGame.js

const core = require("../../../utils/core.js");
var time = 0;
var touchDot = 0;//触摸时的原点
var interval = "";
var mainErrCount=0;
var descErrCount=0;
var noticeErrCount=0;
var gameTime=0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    delBtnWidth:180,
    setInter: '',
    startGameInter:'',
    ruleArray: [
      {
        "id": 1,
        "dictionCode": "20081001",
        "startTime": 0,
        "endTime": 2,
        "count": null,
        "time": 2000,
        "messageType": null
      },
      {
        "id": 2,
        "dictionCode": "20081001",
        "startTime": 3,
        "endTime": 5,
        "count": null,
        "time": 1600,
        "messageType": null
      },
      {
        "id": 3,
        "dictionCode": "20081001",
        "startTime": 6,
        "endTime": 8,
        "count": null,
        "time": 1200,
        "messageType": null
      },
      {
        "id": 4,
        "dictionCode": "20081001",
        "startTime": 9,
        "endTime": 15,
        "count": null,
        "time": 800,
        "messageType": null
      },
      {
        "id": 5,
        "dictionCode": "20081001",
        "startTime": 16,
        "endTime": 20,
        "count": null,
        "time": 500,
        "messageType": null
      },
      {
        "id": 6,
        "dictionCode": "20081001",
        "startTime": 21,
        "endTime": 29,
        "count": null,
        "time": 250,
        "messageType": null
      },
      {
        "id": 7,
        "dictionCode": "20081001",
        "startTime": 30,
        "endTime": 44,
        "count": null,
        "time": 200,
        "messageType": null
      },
      {
        "id": 8,
        "dictionCode": "20081001",
        "startTime": 45,
        "endTime": null,
        "count": null,
        "time": 150,
        "messageType": null
      },
      {
        "id": 9,
        "dictionCode": "20081002",
        "startTime": null,
        "endTime": null,
        "count": 1,
        "time": null,
        "messageType": 0
      },
      {
        "id": 10,
        "dictionCode": "20081002",
        "startTime": null,
        "endTime": null,
        "count": 1,
        "time": null,
        "messageType": 1
      },
      {
        "id": 11,
        "dictionCode": "20081002",
        "startTime": null,
        "endTime": null,
        "count": 5,
        "time": null,
        "messageType": 2
      }
    ],
    messageArray: [],
    messageBackArray: [
      {
        "id": 1,
        "content": "这周末回来吃饭吗？",
        "type": 0,
        "name": "老妈",
      },
      {
        "id": 2,
        "content": "上海移动提醒服务：恭喜你获得上海移动赠送的200M流量。",
        "type": 2,
        "name": "10086"
      },
      {
        "id": 3,
        "content": "老公，下班记得卖瓶酱油[爱心]。",
        "type": 0,
        "name": "老婆大人"
      },
      {
        "id": 4,
        "content": "你好，我们最近INSPIRE打骨折优惠哦,你有兴趣来看看吗？",
        "type": 1,
        "name": "+8615755180514"
      },
      {
        "id": 5,
        "content": "老婆，早上上班记得吃早餐哦，爱你，么么哒！",
        "type": 0,
        "name": "老公"
      },
      {
        "id": 6,
        "content": "爱情不只是秋月春花，还需柴米油盐酱醋茶",
        "type": 2,
        "name": "10086"
      },
      {
        "id": 7,
        "content": "你好，我们最近凯迪拉克打骨折优惠哦,你有兴趣来看看吗？",
        "type": 1,
        "name": "销售小王"
      },
      {
        "id": 8,
        "content": "儿子，晚上回来路上注意安全。",
        "type": 0,
        "name": "老爸",
      },
      {
        "id": 9,
        "content": "爸爸，晚上我想吃肯德基！",
        "type": 0,
        "name": "儿子"
      },
      {
        "id": 10,
        "content": "妈妈，周末可以回来陪陪我吗？",
        "type": 0,
        "name": "宝宝"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    core.post("https://messagecome.com/message/rule/list", {
      "start": 2,
      "length": 30,
      "sex": 0
    },res=>{
      console.log(res)
    },error=>{
      console.log(error)
    })

    this.pullMessageToMessageArray(this.data.messageArray);
    // 开始计时
    // this.startSetInter();
  },
  goNewRecord() {
    console.log(45666)
    wx.navigateTo({
      url: '../newRecord/newRecord',
    })
  },
  /**
* 触摸开始事件
*/
  touchStart: function (e) {
    　　touchDot = e.touches[0].pageX; // 获取触摸时的原点
    　　// 使用js计时器记录时间 
    　　interval = setInterval(function () {
      　　time++;
    　　}, 100);
    　　console.log("touchStart")
  },
  touchMove(e){
    let { index, message } = e.currentTarget.dataset;
    if (e.touches.length == 1) {
      //手指移动时水平方向位置
      var moveX = e.touches[0].clientX;
      //手指起始点位置与移动期间的差值
      var disX = touchDot - moveX;
      var delBtnWidth = this.data.delBtnWidth;
      var txtStyle = "";
      if (disX < 0) {//如果移动距离小于等于0，说明向右滑动，文本层位置不变
        txtStyle = "left:" + Math.abs(disX) + "px;";
        txtStyle += `opacity: ${1 - Math.abs(disX) / delBtnWidth}`
        if (Math.abs(disX) >= delBtnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "left:" + delBtnWidth + "px;";
          txtStyle += `opacity: 0`
        }
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
        txtStyle = "left:-" + disX + "px;";
        txtStyle += `opacity: ${1 - Math.abs(disX) / delBtnWidth}`
        if (disX >= delBtnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "left:-" + delBtnWidth + "px;";
          txtStyle += `opacity: 0`
        }
      }
    }
    var messageArray = this.data.messageArray;
    messageArray[index].txtStyle = txtStyle;
    //更新列表的状态
    this.setData({
      messageArray
    });
  },
  touchEnd: function (e) {
    　　console.log("touchEnd")
    　　var that = this;
    　　var touchMove = e.changedTouches[0].pageX;
        var index = e.currentTarget.dataset.index;
        var messageType = e.currentTarget.dataset.message;
    　　// 向左滑动 
    　　if (touchMove - touchDot <= -100) {
      　　　　 console.log("向左滑动");
              this.ani(index, false, false)
              var newArray = this.data.messageArray.splice(index, 1);
              this.setData({
                messageArray: this.data.messageArray
              })
             var that=this;
              setTimeout(function () {
                that.ani(index, true, true)
              },100);
              // 规格校验
              if (!this.checkGame(1, messageType)){
                  // 停止定时器
                  this.endSetInter();
                  // 游戏结束
                  wx.showToast({
                    title: '游戏结束',
                    mask:true
                  })
                  setTimeout(()=>{
                    wx.showLoading({
                      title: '正在计算成绩...',
                      mask: true,
                      complete(){
                        setTimeout(()=>{
                          wx.hideLoading()
                          wx.reLaunch({
                            url: '/pages/game/newRecord/newRecord',
                          })
                        },1500)
                      }
                    })
                  },1500)
                  
              }
              // 添加新的短信信息
              this.pullMessageToMessageArray(this.data.messageArray);
    　　}
    　　// 向右滑动 
    　　if (touchMove - touchDot >= 100) {
      　　　　 console.log("向右滑动");
              this.ani(index,true,false)
              var newArray = this.data.messageArray.splice(index, 1);
              this.setData({
                messageArray: this.data.messageArray
              })
              var that = this;
              setTimeout(function(){
                that.ani(index, true, true)
              },100);
            // 规格校验
            if (!this.checkGame(0, messageType)) {
              // 停止定时器
              this.endSetInter();
              // 游戏结束
              wx.showToast({
                title: '游戏结束',
                mask: true
              })
              setTimeout(() => {
                wx.showLoading({
                  title: '正在计算成绩...',
                  mask: true,
                  complete() {
                    setTimeout(() => {
                      wx.hideLoading()
                      wx.reLaunch({
                        url: '/pages/game/newRecord/newRecord',
                      })
                    }, 1500)
                  }
                })
              }, 1500)
            }
            //添加新的短信信息
            this.pullMessageToMessageArray(this.data.messageArray);
        }
        var messageArray = this.data.messageArray;
        messageArray[index].txtStyle = null;
        //更新列表的状态
        this.setData({
          messageArray
        });
    // 　　}else{
    //         var newArray = this.data.messageArray.splice(index, 1);
    //         this.setData({
    //           messageArray: this.data.messageArray
    //         })
    //         // 规格校验
    //         if (!this.checkGame(2, messageType)) {
    //           // 停止定时器
    //           this.endSetInter();
    //           // 游戏结束
    //           wx.showToast({
    //             title: '游戏结束',
    //           })
    //         }
    //         //添加新的短信信息
    //         this.pullMessageToMessageArray(this.data.messageArray);
    // }
    　　clearInterval(interval); // 清除setInterval
    　　time = 0;
  },
  /**
   * moveType: 用户实际操作 0（右滑） 1（左滑） 2（未采取操作）
   * messageType：短信类型
   */
  checkGame:function(moveType,messageType){
    console.log("滑动方式："+moveType+";短信类型："+messageType)
    var dictionCode ='20081002';
    // 获取规则数据
    var count = this.getMessageRule(dictionCode, messageType);
    switch (messageType){
      // 重要信息
      case 0:
        // 未右滑
        if(moveType!=0){
          mainErrCount++;
          if (mainErrCount>=count){
            console.log("重要信息失败：错误总数："+mainErrCount+";条件中允许最大失败次数:"+count)
            return false;
          }
        }
        break;
      // 不可描述信息
      case 1:
        // 未左滑
        if(moveType!=1){
          descErrCount++;
          if(descErrCount>=count){
            console.log("不可描述信息失败：错误总数：" + descErrCount + ";条件中允许最大失败次数:" + count)
            return false;
          }
        }
        break;
      // 通知类信息
      case 2:
        if(moveType!=2){
          noticeErrCount++;
          if(noticeErrCount>=count){
            console.log("通知类信息失败：错误总数：" + noticeErrCount + ";条件中允许最大失败次数:" + count)
            return false;
          }
        }
        break;
      }
      return true;
  },
  ani:function(index,isRight,isBack){
    var animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease',
      delay: 0
    });
    // 右滑收回
    if(isRight&&isBack){
      console.log("右滑收回");
      animation.duration=0;
      animation.opacity(1).translate(0, 0).step();
    }else if(isRight&&!isBack){
      // 右滑特效
      console.log("右滑特效");
      animation.opacity(0).translate(200, 0).step();
    }else if(!isRight&&isBack){
      // 左滑收回
      console.log("左滑收回");
      animation.duration = 0;
      animation.opacity(1).translate(0, 0).step();
    }else if(!isRight&&!isBack){
      // 左滑特效
      console.log("左滑特效");
      animation.opacity(0).translate(-200, 0).step();
    }
    this.setData({
      ['ani[' + index + ']']: animation.export()
    })
  },

/**
 * 获取短信规则数据
 */
  getMessageRule: function (dictionCode, messageType){
      var ruleArray = this.data.ruleArray;
      for(var i=0;i<=ruleArray.length;i++){
        var rule = ruleArray[i];
        if (rule.dictionCode == dictionCode && messageType == rule.messageType){
          return rule.count;
        }
      }
  },

  pullMessageToMessageArray: function (mesArray){
    if (mesArray.length<=8){
      var backLength = this.data.messageBackArray.length;
      var index = Math.ceil(Math.random() * (backLength-1));
      var newMessage = this.data.messageBackArray[index];
      newMessage.startTime=null;
      newMessage.txtStyle = null;
      var isHave=false;
      for (var i = 0; i < mesArray.length;i++){
        var old = mesArray[i];
        if (i == 0) {
          mesArray[i].startTime = new Date().getTime();
        }
        if(old&&old.id==newMessage.id){
          isHave=true;
          break;
        }
      }
      if(isHave){
        this.pullMessageToMessageArray(mesArray);
      }else{
        mesArray.push(newMessage);
        if(this.data.messageArray.length<8){
          this.pullMessageToMessageArray(mesArray);
        }else{
          this.setData({
            messageArray: mesArray
          });
        }
      }
    } else {
      this.setData({
        messageArray: mesArray
      });
    }
  }, 
  startSetInter: function () {
    var that = this;
    //计算时间
    that.data.setInter = setInterval(
      function () {
        gameTime++;
      }
      , 1000);
    // 定时移除顶部失效数据
    that.data.startGameInter=setInterval(function(){
      console.log("计时器200秒处理数组中的首位数据")
      var newMessageArray = that.data.messageArray;
      if(newMessageArray.length>0){
        var time = new Date().getTime() - newMessageArray[0].startTime;
        // 获取游戏时长
        var minute = gameTime/60;
        // 获取游戏时间
        var gameItemTime = that.getGameTimeRule(minute);
        if(time>=gameItemTime){
            // 规则校验
          if (!that.checkGame(2, newMessageArray[0].type)){
            // 停止定时器
            that.endSetInter();
            // 游戏结束
            wx.showToast({
              title: '游戏结束',
            })
          }
            newMessageArray.splice(0,1);
            that.setData({
              messageArray:newMessageArray
            })
            // 新增一个
            that.pullMessageToMessageArray(newMessageArray);
        }
      }
    },300)

  },
  endSetInter: function () {
    var that = this;
    //清除计时器  即清除setInter
    clearInterval(that.data.setInter);
    clearInterval(that.data.startGameInter);
  },
  /**
   * 获取游戏时间
   */
  getGameTimeRule: function (minute){
    var dictionCode ='20081001';
    var ruleArray = this.data.ruleArray;
    for(var i=0;i<ruleArray.length;i++){
      var rule = ruleArray[i];
      if (minute >= rule.startTime && minute <= rule.endTime){
        return rule.time;
      }
    }
  },
  onUnload:function(){
    this.endSetInter();
  },
  fn(){
    return false;
  }
})