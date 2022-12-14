// pages/bind/bind.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    msg: "随便111",
    name: "牛牛",
    path: "/static/default.png",
    inp: "",
    phone: "",
    code: "",
  },
  clickMe() {
    this.setData({ msg: "修改啦" });
  },
  getUserProfile() {
    let that = this;
    wx.getUserProfile({
      desc: "获取授权",
      success: (res) => {
        // console.log(res);
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
  bindTxt(e) {
    this.setData({
      inp: e.detail.value,
    });
  },
  bindPhone(e) {
    this.setData({ phone: e.detail.value });
  },
  bindCode(e) {
    this.setData({ code: e.detail.value });
  },
  /**
   * 发送短信验证码
   */
  messageCode() {
    if (this.data.phone.length != 11) {
      wx.showToast({
        title: "手机号长度错误",
        icon: "none",
      });
      return;
    }
    // 正则匹配手机格式
    var reg = /^(1[3|4|5|6|7|8|9])\d{9}$/;
    if (!reg.test(this.data.phone)) {
      wx.showToast({
        title: "手机号格式错误",
        icon: "none",
      });
      return;
    }
    wx.request({
      url: "http://127.0.0.1:8000/message/",
      data: { phone: this.data.phone },
      method: "GET",
      success: (result) => {
        console.log(result);
      },
      fail: (res) => {},
      complete: (res) => {},
    });
  },
  /**
   * 用户登录
   */
  login() {
    wx.request({
      url: "http://127.0.0.1:8000/login/",
      data: { phone: this.data.phone, code: this.data.code },
      method: "POST",
      success: (res) => {
        console.log(res);
      },
      fail: (res) => {},
      complete: (res) => {},
    });
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
