'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    detailsFlag: false,
    showMask: false,
    customStyle: 'background-color:rgba(255, 255, 255, 0)'
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  // 转账说明
  show: function show() {
    this.setData({
      detailsFlag: !this.data.detailsFlag
    });
  },
  hide: function hide() {
    this.setData({
      detailsFlag: false
    });
  },

  // 确认转账功能
  confirm: function confirm() {
    var that = this;
    wx.showModal({
      title: '',
      content: '确定转出全部寸金？',
      cancelColor: 'rgb(186,186,186)',
      confirmColor: '#f87005',
      success: function success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
          that.setData({
            showMask: true
          });
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  }
});