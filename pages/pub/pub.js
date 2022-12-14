// pages/pub/pub.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    topicText: "请选择话题",
    topiId: null,
    progress: 20,
    imageList: [
      { id: 1, title: "图片1", percent: 20 },
      { id: 2, title: "图片2", percent: 30 },
      { id: 3, title: "图片3", percent: 50 },
    ],
  },
  changePercent() {
    //data局部修改
    this.setData({
      ["imageList[0].percent"]: 80,
      ["imageList[0].title"]: "taudas",
    });
  },
  getTopic: function () {
    wx.navigateTo({
      url: "/pages/topic/topic",
    });
  },
  setTopicData(res) {
    this.setData({
      topicText: res.title,
      topiId: res.id,
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
