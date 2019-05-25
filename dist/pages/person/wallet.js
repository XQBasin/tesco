'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    current: 0,
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

  // 选项卡
  handleChange: function handleChange(e) {
    var index = e.detail.index;
    this.setData({
      current: index
    });
  },
  handleContentChange: function handleContentChange(e) {
    var current = e.detail.current;
    this.setData({
      current: current
    });
  }
});