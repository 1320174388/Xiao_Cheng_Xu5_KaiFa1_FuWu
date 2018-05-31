// pages/Admin/manage/index.js

Page({
  data: {
    select: false,
    selected: true,
    checked:false,
    icon_show:true
  },
  reserve_checked:function(){
    this.setData({
      checked:!this.data.checked,
      icon_show:!this.data.icon_show
    })
  },
  select: function (e) {
    if ('w' == e.currentTarget.dataset.w) {
      this.setData({
        select: false,
        selected: true
      })
    } else if ('y' == e.currentTarget.dataset.y) {
      this.setData({
        select: true,
        selected: false
      })
    }
  },
})