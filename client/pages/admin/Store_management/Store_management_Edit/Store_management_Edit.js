// pages/home/admin/product_management/product_management_Edit/product_management_Edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "",
    name1: "",
    name2: "",
    ab: '',
    v1: '',
    v2: '',

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log(e)





    this.setData({ ab: e.index })


    var key4 = wx.getStorageSync('key0')


    console.log(key4)

    var that = this


    that.setData({ img: key4[e.index].img })
    that.setData({ name1: key4[e.index].name1 })
    that.setData({ name2: key4[e.index].name2 })




  },
  cms1: function (a) {

    var that = this
    if (that.data.v2 == '') {
      that.setData({ v2: that.data.name2 })
    }

    that.setData({ v1: a.detail.value })


  },
  cms2: function (b) {
    var that = this
    if (that.data.v1 == '') {
      that.setData({ v1: that.data.name1 })
    }



    that.setData({ v2: b.detail.value })


  },
  check: function (w) {



    var that = this





    var huoqu = wx.getStorageSync('key0')


    var option = {
      'img': that.data.img,
      'name1': that.data.v1,
      'name2': that.data.v2
    }

    var f_arr = wx.getStorageSync('key0')


    f_arr.splice(that.data.ab, 1, option);

    wx.setStorageSync('key0', f_arr)


    wx.navigateBack({
      delta: 1
    })




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


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {

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