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

  // 跳转到的店铺页面
  toStroe: function toStroe() {
    wx.navigateTo({ url: '/pages/store/index' });
  }
});