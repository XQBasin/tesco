'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    checked: true, //优惠券勾选状态
    disFlag: false, //优惠选项状态
    disId: 0, //优惠券选项序号
    disChecked: false //优惠券勾选状态
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
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
  },

  // 打开优惠卷内容区
  openDis: function openDis(e) {
    var show = e.currentTarget.dataset.show;
    console.log(show);
    this.setData({
      disFlag: show
    });
  },
  disHide: function disHide() {
    this.setData({
      disFlag: false
    });
  },

  // 选择优惠券选项序号(可用和不可用优惠券)
  select: function select(e) {
    this.setData({
      disId: e.currentTarget.dataset.id
    });
  },

  // 选择优惠券
  bindDis: function bindDis(e) {
    this.setData({
      disPrice: e.currentTarget.dataset.price,
      disChecked: !this.data.disChecked
    });
  }
});