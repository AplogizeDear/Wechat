import {DBPost} from '../../db/DBPost.js'
// pages/home/home.js
// 引入功能性函数
var util = require('../../utils/util.js');
var ports =require('../../utils/ports.js');
// 引入promise
var Promise = require('../../lib/es6-promise.min.js');
// 引入灯箱组件
var Slider = require('../../template/slider/slider.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'storeAnnouncement':[
     '1.欢迎新老客户前来购买，你的光顾使我们最大的动力',
     '2.来吧兄弟们快购购买吧，购买越多，优惠越多'
    ],
    // 设置首页信息
    idxData: [
       
    ],
    'postList':"",
    storeData:{
      'store_name':'杭州正新店',
      'store_sta':'1',
      'store_sta_format':'营业中',
      'store_activity_format':{
          'backgroundColor':'#ff6700',
          'tag':'减',
          'tagStr':'满58减5元'
      },
      'store_address':'杭州市新城美哉美城',
      'store_activity_list':[
        {
          'backgroundColor':'#ff6700',
          'tag':'减',
          'tagStr':'满50减10'
        },
        {
          'backgroundColor': '#05e3a6',
          'tag': '减',
          'tagStr': '满300减100'
        },
        {
          'backgroundColor': '#9b65dd',
          'tag': '减',
          'tagStr': '满30减10'
        },
        {
          'backgroundColor': '#ff247e',
          'tag': '减',
          'tagStr': '满30减10'
        }
      ]
      
    },
    showProCate: true,
    showStoreDetail:false,

    
  },
  setStoreData:function(){

  },
  onTabtoDetail:function(e){
    var postid = e.currentTarget.dataset.postId;
    console.log(console.log(postid));
    wx.navigateTo({
      url: '../detail/detail?id='+postid,
    })
  },
  changeShowStoreDetail: function () {
    var _self = this;
    this.setData({
      showStoreDetail: !_self.data.showStoreDetail
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dbpost = new DBPost();
    this.setData({
      postList: dbpost.getAllPostData()
    });
    this.slider = new Slider(this);
    this.slider.initData([
    'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2912068972,2492597525&fm=27&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2724276004,2647045133&fm=27&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1986502447,3366348195&fm=27&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2066922924,824614004&fm=27&gp=0.jpg'
    ]);
    
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