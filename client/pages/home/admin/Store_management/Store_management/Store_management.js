// pages/home/admin/Store_management/Store_management/Store_management.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:"../../../image/a/a1.png",
    name:"门店名称",
    name2:"门店详情"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // bianji:function(){
  //   wx.navigateTo({
  //     url: '../Store_management_Edit/Store_management_Edit'
  //   })
  // },
    del:function(){
   console.log("删除成功！")

  },
    add: function () {
      wx.navigateTo({
        url: '../Store_management_Add/Store_management_Add'
      })
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