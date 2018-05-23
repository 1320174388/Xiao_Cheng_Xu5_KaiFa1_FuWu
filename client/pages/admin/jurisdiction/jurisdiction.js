// pages/admin/jurisdiction/jurisdiction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      jur_manager_arr:[
        "总经理","大堂经理"
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
  jur_remove:function(res){
    var idn = res.currentTarget.id;
    var man_arr=this.data.jur_manager_arr;
    man_arr.splice(idn, 1);
    this.setData({
      jur_manager_arr: man_arr
    });
    console.log(man_arr);
  },
  jump_add_job:function(){
    wx.navigateTo({
      url: './addJob/addJob',
    })
  },
  jump_modify_job:function(){
    wx.navigateTo({
      url: './modifyJob/modifyJob',
    })
  }
})