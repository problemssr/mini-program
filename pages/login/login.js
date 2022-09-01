// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: "牛牛",
    path: "/static/default.png",
    localPath: "loc",
    list: ["牛马", "大赛", "化身", "sjij"],
    userInfo: {
      name: "aka",
      age: 18,
    },
    imageList: ["/static/hg.jpg", "/static/default.png"],
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
  getLocalPath() {
    let that = this;
    wx.chooseLocation({
      success: (res) => {
        that.setData({ localPath: res.address });
      },
      fail: (err) => {},
    });
  },
  uploadImage() {
    let that = this;
    wx.chooseMedia({
      mediaType: ["image", "video"],
      sourceType: ["album", "camera"],
      success: (res) => {
        let arr = [];
        for (let pic of res.tempFiles) {
          arr.push(pic.tempFilePath);
        }
        that.setData({
          imageList: that.data.imageList.concat(arr),
        });
      },
      fail: (err) => {},
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
