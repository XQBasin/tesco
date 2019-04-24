'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {},
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  }
});