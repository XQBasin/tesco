'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    itemId: 0 //选项卡序号id
  },
  // 点击选项卡
  bindItem: function bindItem(e) {
    this.setData({
      itemId: e.currentTarget.dataset.id
    });
  }
});