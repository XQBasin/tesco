'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    checked: true //优惠券勾选状态
  },
  // 链接到地址管理页面
  toAddressEdit: function toAddressEdit() {
    wx.navigateTo({ url: '/pages/details/addressEdit' });
  },

  // 微信支付功能
  wxPay: function wxPay() {
    wx.navigateTo({ url: '/pages/details/paySuccess' });
  },

  // 优惠券勾选
  checked: function checked() {
    this.setData({
      checked: !this.data.checked
    });
  }
});