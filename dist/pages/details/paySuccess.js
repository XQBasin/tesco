'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  //回到首页   
  toHome: function toHome() {
    wx.switchTab({ url: '/pages/home/index' });
  }
});