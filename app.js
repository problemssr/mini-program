// app.js
App({
  onLaunch() {
    // wx.removeStorageSync("userInfo");
    var userInfo = wx.getStorageSync("userInfo");
    if (userInfo) {
      this.globalData.userInfo = userInfo;
    }
  },
  globalData: {
    userInfo: null,
  },
  initUserInfo: function (res, localInfo) {
    var info = {
      token: res.token,
      phone: res.phone,
      nickName: localInfo.nickName,
      avatarUrl: localInfo.avatarUrl,
    };
    //1.公共app.js调用globalData并赋值
    // this.globalData.phone = res.phone;
    this.globalData.userInfo = info;
    //2.本地cookie赋值
    wx.setStorageSync("userInfo", info);

    // // 1.去公共的app.js中调用globalData，在里面赋值。(在全局变量赋值)
    // this.globalData.userInfo = info; //{phone:xxx,token:xxxx}

    // // 2.在本地“cookie”中赋值
    // wx.setStorageSync("userInfo", info);
  },
  delUserInfo: function () {
    this.globalData.userInfo = null;
    wx.removeStorageSync("userInfo");
  },
});
