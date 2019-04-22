'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    disFlag: false, //优惠选项状态
    disSrc: [{ discount: '500', src: '../../static/image/details/02.png', fill: '1000', time: '2019.03.20-2019.03.28' }, { discount: '30', src: '../../static/image/details/01.png', fill: '1000', time: '2019.03.20-2019.03.28' }, { discount: '500', src: '../../static/image/details/02.png', fill: '1000', time: '2019.03.20-2019.03.28' }, { discount: '100', src: '../../static/image/details/02.png', fill: '1000', time: '2019.03.20-2019.03.28' }]
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  // 优惠
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
  }
});