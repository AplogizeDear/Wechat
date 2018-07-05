// pages/center/center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'isLogin':false,
    'userImg':null,
    'userName':null
  },
  goDetail:function(){
    if (this.data.isLogin) {
      wx.navigateTo({
        url: '../user-detail/user-detail'
      });
    } else {
      wx.navigateTo({
        url: '../login/login'
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // 跳转门票页面
  ticket_href:function(){
    wx.navigateTo({
      url: '../../pages/ticket/ticket',
    })
  },
  // 跳转至订单页面
  order_href:function(){
    wx.navigateTo({
      url: '../../pages/order/order',
    })
  },
  // 跳转到优惠劵页面
  coupon_href:function(){
    wx.navigateTo({
     url:'../../pages/coupon/coupon',
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