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

  //拨打电话
  call: function call() {
    wx.showModal({
      title: '',
      content: '13335555552',
      confirmText: '呼叫',
      cancelColor: 'rgb(186,186,186)',
      confirmColor: '#f87005',
      success: function success(res) {
        if (res.confirm) {
          console.log('用户点击呼叫');
          wx.makePhoneCall({
            phoneNumber: '13335555552' // 仅为示例，并非真实的电话号码
          });
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  }
});