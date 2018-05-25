// pages/admin/administrators/administrators.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jur_manager_arr: [
      {
        jur:"一级管理员",
        name:"于帅"
      },
      {
        jur: "二级管理员",
        name:"豪美"
      }
    ],
    jur_arr:["一级管理员","二级管理员","三级管理员"],
    job_change: "",
    qx_idn: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.job_change == "none") {

    } else {
      var j_c_arr = this.data.jur_manager_arr;
      var jur_change = this.data.jur_arr[options.jur_idn];
      if (options.qx_idn == "none") {
        this.setData({
          job_change: {
            jur: jur_change,
            name:options.job_change
          }
        });
        j_c_arr.push(this.data.job_change);
        this.setData({
          jur_manager_arr: j_c_arr
        })
      } else {
        this.setData({
          job_change: {
            jur: jur_change,
            name:options.job_change
          },
          qx_idn: options.qx_idn
        });
        j_c_arr.splice(this.data.qx_idn, 1, this.data.job_change);
        this.setData({
          jur_manager_arr: j_c_arr
        })
      }

    }
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
  // 删除
  jur_remove: function (res) {
    var idn = res.currentTarget.id;
    var man_arr = this.data.jur_manager_arr;
    man_arr.splice(idn, 1);
    this.setData({
      jur_manager_arr: man_arr
    });
  },
  // 添加
  jump_add_job: function () {
    wx.navigateTo({
      url: './addManager/addManager',
    })
  },
  // 修改
  jump_modify_job: function (res) {
    var idn = res.currentTarget.id;
    var default_name = this.data.jur_manager_arr[idn].name;
    wx.navigateTo({
      url: './modifyManager/modifyManager?def_name=' + default_name + '&qx_idn=' + idn,
    })
  }
})