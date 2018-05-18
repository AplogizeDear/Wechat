App({
  onLaunch: function () {
    var storageData =wx.getStorageSync('postList');
    if(!storageData){
      var dataObj = require("data/data.js");
      wx.clearStorageSync();
      wx.setStorageSync('postList', dataObj.postList);
    }
      wx.login({
        success: function (res) {
          var code = res.code;
          if (code) {
            console.log('获取用户登录凭证：' + code);
          } else {
            console.log('获取用户登录态失败：' + res.errMsg);
          }
        }
      });
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})