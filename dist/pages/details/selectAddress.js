'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    province: ['广东省', '广西省', '海南省', '湖南省'],
    provinceId: 0,
    cityId: 0,
    city: ['广州市', '深圳市', '佛山市'],
    regionId: 0,
    region: ['番禺区', '天河区', '越秀区'],
    detail: '',
    info: ['广东省', '广州市', '番禺区', '市桥地铁口兴华']
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  //改变后的值
  changePro: function changePro(e) {
    this.data.info[0] = this.data.province[e.detail.value];
    this.setData({
      provinceId: e.detail.value,
      info: this.data.info
    });
  },
  changeCity: function changeCity(e) {
    this.data.info[1] = this.data.city[e.detail.value];
    this.setData({
      cityId: e.detail.value,
      info: this.data.info
    });
  },
  changeReg: function changeReg(e) {
    this.data.info[2] = this.data.region[e.detail.value];
    this.setData({
      regionId: e.detail.value,
      info: this.data.info
    });
  },
  keyUp: function keyUp(e) {
    this.data.info[3] = e.detail.value;
    this.setData({
      info: this.data.info
    });
  },

  // 表单数据收集
  confirm: function confirm() {
    var info = this.data.info.join('');
    console.log(info);
  }
});