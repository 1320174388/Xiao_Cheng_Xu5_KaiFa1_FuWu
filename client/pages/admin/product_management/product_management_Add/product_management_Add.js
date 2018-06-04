// pages/home/admin/product_management/product_management_Add/product_management_Add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "https://lg-14y7j4wa-1256666116.cos.ap-shanghai.myqcloud.com/timg.jpg",
    name1: "",
    name2: "",
    v1: '',
    v2: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  //选择图片
  choose: function (ch) {

    var that = this
    wx.chooseImage({

      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {

        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({ img: res.tempFilePaths })
      }
    })
  },
  //获取数据
  cms1: function (a) {

    var that = this
    that.setData({ v1: a.detail.value })
    
  },
  cms2: function (b) {
    var that = this
    that.setData({ v2: b.detail.value })
  },
  //确定保存
  check: function (w) {

    var option = {
      'img': this.data.img,
      'name1': this.data.v1,
      'name2': this.data.v2
    }
    var f_arr = wx.getStorageSync('key0')
f_arr.push(option)

    wx.setStorageSync('key0', f_arr)
    wx.navigateTo({
      url: '../product_management/product_management'
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