'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {},
  //回到首页   
  toHome: function toHome() {
    wx.switchTab({ url: '/pages/home/index' });
  }
});