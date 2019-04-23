'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    disFlag: false, //优惠选项状态
    disSrc: [{ discount: '500', src: '../../static/image/details/02.png', fill: '1000', time: '2019.03.20-2019.03.28' }, { discount: '30', src: '../../static/image/details/01.png', fill: '1000', time: '2019.03.20-2019.03.28' }, { discount: '500', src: '../../static/image/details/02.png', fill: '1000', time: '2019.03.20-2019.03.28' }, { discount: '100', src: '../../static/image/details/02.png', fill: '1000', time: '2019.03.20-2019.03.28' }],
    specsFlag: false, //是否打开规格内容选择
    color: '红色',
    size: 'S',
    number: 1, //数量
    colorsId: 0,
    sizesId: 0,
    addressFlag: false,
    navId: 0 //详情类别id
  },
  onLoad: function onLoad() {},

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
  },

  // 选择规格
  // 是否打开规格选择内容区
  openSpecs: function openSpecs() {
    var flag = this.data.specsFlag;
    this.setData({
      specsFlag: !flag
    });
  },

  // 选择颜色
  selectColors: function selectColors(e) {
    this.setData({
      colorsId: e.target.dataset.id,
      color: e.target.dataset.color
    });
  },

  // 选择尺寸
  selectSize: function selectSize(e) {
    this.setData({
      sizesId: e.target.dataset.id,
      size: e.target.dataset.size
    });
  },

  // 减少
  reduce: function reduce() {
    var number = --this.data.number;
    if (number <= 1) {
      number = 1;
    }
    this.setData({
      number: number
    });
  },

  // 增加
  add: function add() {
    var number = ++this.data.number;
    this.setData({
      number: number
    });
  },

  // 打开地址选择
  openAddress: function openAddress() {
    var flag = this.data.addressFlag;
    this.setData({
      addressFlag: !flag
    });
  },

  // 地址信息隐藏
  addressHide: function addressHide() {
    this.setData({
      addressFlag: false
    });
  },

  // 选择详情类别
  selectNav: function selectNav(e) {
    this.setData({
      navId: e.target.dataset.id
    });
  }
});