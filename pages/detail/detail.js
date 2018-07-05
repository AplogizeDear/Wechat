import { DBPost } from '../../db/DBPost.js'
Page({
  data: {
    post:'',
    top:'',
    num:1,
    selectstatus:false,
    ticket_type:['早鸟票','三人vip票'],
    minusStatus: 'disabled',
    showModalStatus:false,
  },
  
  
  //显示对话框
  showModal: function () {
    var that = this
     // 获取当前滚动高度  一个小问题  稍后解决
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
         
        });
      }
    })
    //显示遮罩
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },


  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  //减
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },  
  // 加
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  }, 
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      num: num
    });
  },
  getid:function(e){
    var timeid = e.target.dataset.id;
    this.dbpost = new DBPost(timeid);
    this.postData = this.dbpost.gettimeId();
    this.setData({
      selectstatus:true
    })
  },
  onCollectTab:function(){
    var newData = this.dbpost.collect();
    this.setData ({
      'post.collectstatus': newData.collectstatus,
      'post.collectnum': newData.collectnum,

    }),
  wx.showToast({
    title: newData.collectstatus? '收藏成功':'取消收藏',
    duration:1000,
    icon:'success',
    mask:true,
  })
  },

  onUpTab: function () { 
    var newData = this.dbpost.up();
    console.log(newData);
    this.setData({
      'post.likenum': newData.likenum,
      'post.likestatus': newData.likestatus,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var postid = options.id;
      this.dbpost = new DBPost(postid);
      this.postData = this.dbpost.getPostItemById().data;
      this.setData({
        post: this.postData
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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