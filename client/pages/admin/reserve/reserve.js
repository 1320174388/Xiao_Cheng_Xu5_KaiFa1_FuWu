// pages/Admin/manage/index.js

Page({
  data: {
    select: false,
    selected: true,
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