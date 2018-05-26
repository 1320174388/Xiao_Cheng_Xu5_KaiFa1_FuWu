// pages/admin/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      btn_arr:[
        {
          "name":"权限管理",
          "url":"../jurisdiction/jurisdiction"
        },
        {
          "name": "管理列表",
          "url": "../administrators/administrators"
        },
        {
          "name": "门店管理",
          "url": ""
        },
        {
          "name": "查看预约",
          "url": ""
        },
        {
          "name": "信息管理",
          "url": "../informationManager/infoManager"
        },
        {
          "name": "产品管理",
          "url": ""
        }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync("jur_manager_arr", [
      "总经理", "大堂经理"
    ]);
    wx.setStorageSync("manager_arr", [
      {
        jur: "一级管理员",
        name: "于帅"
      },
      {
        jur: "二级管理员",
        name: "豪美"
      }
    ]);
    wx.setStorageSync("jur_arr",["一级管理员","二级管理员","三级管理员"]);

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
  web_jump:function(res){
      var idn = res.currentTarget.id;
      var url = this.data.btn_arr[idn].url;
      wx.navigateTo({
        url: url,
      })
  }
})