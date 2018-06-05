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
      // 后台按钮动画
      animationData:"",
      
      // 后台按钮位置
      admin_left:"",
      admin_top:267,
      // 屏幕宽度
      window_width:'',
      // 后台按钮宽度
      admin_btn_width:'',
      // 后台按钮点击事件
      admin_btn_event:'admin_enter'
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setStorageSync("admin_left", that.data.admin_left);

    wx.setStorageSync("admin_top", that.data.admin_top);
    var e = wx.getSystemInfoSync();
    that.setData({
      window_width:e.windowWidth
    })
    var query = wx.createSelectorQuery().in(this);
    query.select('.admin_enter').boundingClientRect(function(res){
      that.setData({
        admin_btn_width: res.width
      })
      wx.setStorageSync("admin_left", that.data.window_width - that.data.admin_btn_width/2);
      that.setData({
        admin_left: wx.getStorageSync("admin_left")

      })
    }).exec()
    
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
    
      this.setData({
        admin_left: wx.getStorageSync("admin_left"),
        admin_top: wx.getStorageSync("admin_top")
      })
      
    
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
      phoneNumber: '010-86220269'
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
  },
  // 后台按钮点击效果
  admin_enter:function(res){
    
     if (this.data.admin_left == -this.data.admin_btn_width / 2){
        
      this.setData({
        admin_left:0
      })


      } else if (this.data.admin_left == this.data.window_width - this.data.admin_btn_width/2){
      this.setData({
        admin_left: this.data.window_width - this.data.admin_btn_width
        
      })

     } else if (this.data.admin_left == 0 || this.data.admin_left == this.data.window_width - this.data.admin_btn_width){
       this.setData({
         admin_btn_event: 'admin_btn_event2'
       })
     }
      
    
  },
  //后台按钮变化后的效果
  admin_btn_event2:function(){
    wx.navigateTo({
      url: '../../admin/index/index',
    })
  },
  // 后台按钮拖拽效果
  admin_move:function(res){
    this.setData({
      admin_left:res.touches[0].clientX-20,
      admin_top: res.touches[0].clientY-15
    })
  },
  admin_move_end:function(){
    clearTimeout(wx.getStorageSync("hide_btn"))
    wx.setStorageSync("admin_left", this.data.admin_left);
    wx.setStorageSync("admin_top", this.data.admin_top);
    var that = this;
    if (this.data.admin_left<=this.data.window_width/2){
      this.setData({
        admin_left: 0,
      })
      wx.setStorageSync("admin_left", this.data.admin_left);
      wx.setStorageSync("hide_btn", setTimeout(function () {
        that.setData({
          admin_left: -that.data.admin_btn_width / 2,
        });
        wx.setStorageSync("admin_left", that.data.admin_left);
        that.setData({
          admin_btn_event: 'admin_enter'
        })
      }, 2000));
      wx.getStorageSync("hide_btn");
    }else{
      that.setData({
        admin_left: this.data.window_width-this.data.admin_btn_width,
      })
      wx.setStorageSync("admin_left", this.data.admin_left)
      
      wx.setStorageSync("hide_btn", setTimeout(function () {
        that.setData({
          admin_left: that.data.window_width-that.data.admin_btn_width / 2,
        });
        wx.setStorageSync("admin_left", that.data.admin_left);
        that.setData({
          admin_btn_event: 'admin_enter'
        })
      }, 2000));
      wx.getStorageSync("hide_btn");
    }
  },
  // 地老天荒拨打电话事件
  phone_dlth:function(){
    wx.makePhoneCall({
      phoneNumber: '01086220269'
    })
  }
  
  

})