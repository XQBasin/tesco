'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    list: ['零食小吃', '智能电器', '画册书籍', '美妆护肤', '零食小吃', '智能电器', '画册书籍', '美妆护肤'],
    listId: 0
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  // 为你推荐
  bindClick: function bindClick(e) {
    wx.showToast({
      title: e.currentTarget.dataset.info, //提示的内容,
      icon: 'none', //图标,
      success: function success(res) {}
    });
    this.setData({
      listId: e.currentTarget.dataset.id
    });
  },

  // 跳转到的店铺页面
  toStroe: function toStroe() {
    wx.navigateTo({ url: '/pages/home/store' });
  }
});