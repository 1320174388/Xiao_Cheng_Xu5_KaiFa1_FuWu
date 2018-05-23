Page({

  /**
   * 页面的初始数据
   */
  data: {
    quanxuan_arr: [
      {
        "name": "门店管理",
        "icon_color": "gray",
        "checked": false
      },
      {
        "name": "查看预约",
        "icon_color": "gray",
        "checked": false
      },
      {
        "name": "产品管理",
        "icon_color": "gray",
        "checked": false
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
    var icon_color = this.data.quanxuan_arr[idn].icon_color;
    var color_gai = "quanxuan_arr[" + idn + "].icon_color";
    var check_gai = "quanxuan_arr[" + idn + "].checked";
    if (icon_color == "gray") {
      this.setData({
        [color_gai]: "green",
        [check_gai]: "true"
      });

    } else {
      this.setData({
        [color_gai]: "gray",
        [check_gai]: "false"
      });

    }
  },
  jump_jur: function () {
    wx.navigateBack({
      delta:1
    })
  }
})