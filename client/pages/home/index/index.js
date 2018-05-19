// pages/home/index/index.js
var config = require('../../../config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      host_image_Url:config.service.host_image_Url,
      // 轮播图img的地址
      swiper_imgUrl:[
        config.service.host_image_Url + "/swiper_banner.png",
        config.service.host_image_Url + "/swiper_banner.png",
        config.service.host_image_Url + "/swiper_banner.png",
        config.service.host_image_Url + "/swiper_banner.png"
      ],
      // icon图标的img和文字的地址
      icon:[
        {
          imgUrl: config.service.host_image_Url + "/ChanPin_icon.png",
          text:"产品",
          bindtap:'tiaozhuan',
          url:"/pages/home/product/product"
        },{
          imgUrl: config.service.host_image_Url + "/ZhanShi_icon.png",
          text: "展示",
          bindtap: 'tiaozhuan2',
          url: "/pages/home/product/show/show"
        },{
          imgUrl: config.service.host_image_Url + "/MenDian_icon.png",
          text: "门店",
          bindtap: 'tiaozhuan',
          url:"/pages/home/store/store"
        },{
          imgUrl: config.service.host_image_Url + "/YuYue_icon.png",
          text: "预约",
          bindtap: 'tiaozhuan',
          url:"/pages/home/reservation/Subscribe/Subscribe"

        }
      ],
      // 企业视频的地址
      
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
  // 拨打电话
  phoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: '123456789'
    })

  },
  //页面跳转
  tiaozhuan:function(res){
    var idn = res.currentTarget.id;
    var icon_url = this.data.icon;
    wx.switchTab({
      url: icon_url[idn].url,
    })
    // console.log(icon_url[idn].url);
  },
  tiaozhuan2:function(res){
    var idn = res.currentTarget.id;
    var icon_url = this.data.icon;
    wx.navigateTo({
      url: icon_url[idn].url,
    })
    // console.log(icon_url[idn].url);

  },
  tiaozhuan_productdetails:function(){
    wx.navigateTo({
      url:'../product/productdetails/productdetails'
    })
  }
  
  

})