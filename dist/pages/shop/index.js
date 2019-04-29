'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    emptyFlag: false, //缺省页状态值
    flag: false //商品编辑状态
  },
  // 商品编辑
  clickEdit: function clickEdit() {
    this.setData({
      flag: !this.data.flag
    });
  }
});