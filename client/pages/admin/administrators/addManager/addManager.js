// pages/admin/administrators/addManager/addManager.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quanxuan_arr: [
      {
        "name": "一级管理员",
        "icon_color": "gray"
      },
      {
        "name": "二级管理员",
        "icon_color": "gray"
      },
      {
        "name": "三级管理员",
        "icon_color": "gray"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  jur_choose: function (res) {
    var idn = res.currentTarget.id;
    var color_gai = "quanxuan_arr[" + idn + "].icon_color";
    for (var i = 0; i < this.data.quanxuan_arr.length; i++) {
      var color_gai_arr = "quanxuan_arr[" + i + "].icon_color"
      this.setData({
        [color_gai_arr]: "gray",
        [color_gai]: "green"
      });

    }

  },
  jump_jur: function () {
    wx.navigateBack({
      delta: 1
    })
  }
})