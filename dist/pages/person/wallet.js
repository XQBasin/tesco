'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    current2: 0,
    activeTabStyle: {
      'color': '#f87005'
    },
    inkBarStyle: {
      'border-bottom': '1px solid #f87005',
      'width': '60%',
      'color': '#f87005'
    }
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },
  handleChange2: function handleChange2(e) {
    var index = e.detail.index;
    this.setData({
      current2: index
    });
  },
  handleContentChange2: function handleContentChange2(e) {
    var current = e.detail.current;
    this.setData({
      current2: current
    });
  }
});