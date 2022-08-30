// pages/bind/bind.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    msg: "随便111",
    name: "牛牛",
    path: "/static/default.png",
  },
  clickMe() {
    this.setData({ msg: "修改啦" });
  },
  getUserProfile() {
    let that = this;
    wx.getUserProfile({
      desc: "获取授权",
      success: (res) => {
        console.log(res);
        that.setData({
          name: res.userInfo.nickName,
        });
        that.setData({
          path: res.userInfo.avatarUrl,
        });
      },
      fail: (err) => {},
    });
    // wx.login({
    //   success(res) {
    //     console.log("login", res);
    //     that.setData({
    //       code: res.code,
    //     });
    //   },
    // });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
