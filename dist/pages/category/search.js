'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    selectId: 0, //选择条件
    list: [{ 'src': '../../static/image/index/test/hufu.png' }, { 'src': '../../static/image/index/test/hufu.png' }, { 'src': '../../static/image/index/test/hufu.png' }, { 'src': '../../static/image/index/test/hufu.png' }] //商品列表
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  // 选择选择查询条件
  select: function select(e) {
    this.setData({
      selectId: e.currentTarget.dataset.id
    });
  }
});