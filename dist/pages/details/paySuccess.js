'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    user: '卡卡西', //收件人信息
    orderNum: '3425352355552',
    address: '广东省广州市番禺区对话框按时发链接广告费的故事大概 大V搜索',
    pay: '280.00',
    discount: '52.00',
    time: '2019.03.24 12:35:10'
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