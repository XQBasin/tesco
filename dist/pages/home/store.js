'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    item: ['首页', '推荐', '商品', '新品'], //选项卡选项
    itemId: 0, //选项卡选项序号
    followFlag: false, //关注状态
    list: [{ 'src': '../../static/image/index/test/hufu.png' }, { 'src': '../../static/image/index/test/hufu.png' }, { 'src': '../../static/image/index/test/hufu.png' }, { 'src': '../../static/image/index/test/hufu.png' }]
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  // 顶部选项卡选择
  bindItem: function bindItem(e) {
    this.setData({
      itemId: e.currentTarget.dataset.id
    });
  },

  // 是否关注
  bindFollow: function bindFollow() {
    this.setData({
      followFlag: !this.data.followFlag
    });
  }
});