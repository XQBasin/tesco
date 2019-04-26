'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    province: ['广东', '广西', '海南', '湖南'],
    provinceId: 0,
    cityId: 0,
    city: ['广州', '深圳', '佛山'],
    regionId: 0,
    region: ['番禺', '天河', '越秀'],
    townShipId: 0,
    townShip: ['城区', '郊外'],
    info: ['广东', '广州', '番禺', '市桥地铁口兴华']
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  //改变后的值
  changePro: function changePro(e) {
    this.data.info[0] = this.data.province[e.detail.value];
    var info;
    info = this.data.info;
    this.setData({
      provinceId: e.detail.value,
      info: info
    });
  },
  changeCity: function changeCity(e) {
    this.data.info[1] = this.data.city[e.detail.value];
    var info;
    info = this.data.info;
    this.setData({
      cityId: e.detail.value,
      info: info
    });
  },
  changeReg: function changeReg(e) {
    this.data.info[2] = this.data.region[e.detail.value];
    var info;
    info = this.data.info;
    this.setData({
      regionId: e.detail.value,
      info: info
    });
  },
  changeTown: function changeTown(e) {
    this.data.info[3] = this.data.townShip[e.detail.value];
    var info;
    info = this.data.info;
    this.setData({
      townShipId: e.detail.value,
      info: info
    });
  }
});