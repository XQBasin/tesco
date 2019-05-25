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

  // 退出登录
  loginOut: function loginOut() {
    wx.showModal({
      title: '',
      content: '你确定要退出登录吗',
      confirmText: '退出',
      cancelColor: '#f87005',
      confirmColor: 'rgb(186,186,186)',
      success: function success(res) {
        if (res.confirm) {
          console.log('用户点击退出');
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  }
});