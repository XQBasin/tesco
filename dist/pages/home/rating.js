'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    itemId: 0, //选项卡序号id
    item: [{ title: '全部', number: '2.6万+' }, { title: '好评', number: '2.6万+' }, { title: '中评', number: '2.6万+' }, { title: '差评', number: '2.6万+' }, { title: '晒单', number: '2.6万+' }]
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  // 点击选项卡
  bindItem: function bindItem(e) {
    this.setData({
      itemId: e.currentTarget.dataset.id
    });
  }
});