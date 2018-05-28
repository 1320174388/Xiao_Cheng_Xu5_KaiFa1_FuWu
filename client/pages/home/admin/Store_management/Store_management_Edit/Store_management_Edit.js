// pages/home/admin/Store_management/Store_management_Edit/Store_management_Edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:"",
    name:"",
    name2: ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var  that= this;
    var img = options.img;
    var name = options.name;
    var name2 = options.name2;
    console.log(options)
    
    console.log(img)
    console.log(name)
    console.log(name)
   
    that.setData({ img: img })
    that.setData({ name: name })
    that.setData({ name2: name2 } )
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