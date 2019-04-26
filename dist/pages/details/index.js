'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    imgUrls: ['../../static/image/details/test/img2.png', '../../static/image/details/test/img2.png', '../../static/image/details/test/img2.png'],
    imgNum: 1, //当前张数
    totalNum: 3, //总张数
    disFlag: false, //优惠选项状态
    disSrc: [{ discount: '500', src: '../../static/image/details/02.png', fill: '1000', time: '2019.03.20-2019.03.28' }, { discount: '30', src: '../../static/image/details/01.png', fill: '1000', time: '2019.03.20-2019.03.28' }, { discount: '500', src: '../../static/image/details/02.png', fill: '1000', time: '2019.03.20-2019.03.28' }, { discount: '100', src: '../../static/image/details/02.png', fill: '1000', time: '2019.03.20-2019.03.28' }],
    specsFlag: false, //是否打开规格内容选择
    color: '红色',
    size: 'S',
    number: 1, //数量
    colorsId: 0,
    sizesId: 0,
    addressFlag: false,
    serviceFlag: false,
    navId: 0, //详情类别id
    buyFlag: false //立即购买状态
  },
  onLoad: function onLoad() {},

  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  // 商品滑块图
  imgChange: function imgChange(e) {
    // console.log(e.detail.current)
    this.setData({
      imgNum: ++e.detail.current
    });
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

  // 打开服务条款
  openService: function openService() {
    var flag = this.data.serviceFlag;
    this.setData({
      serviceFlag: !flag
    });
  },

  // 服务条款信息隐藏
  complete: function complete() {
    this.setData({
      serviceFlag: false
    });
  },

  // 跳转到商品评价页面
  torRating: function torRating() {
    wx.navigateTo({ url: '/pages/details/rating' });
  },

  // 选择详情类别
  selectNav: function selectNav(e) {
    this.setData({
      navId: e.target.dataset.id
    });
  },

  // 底部立即购买
  buy: function buy(e) {
    this.setData({
      buyFlag: e.target.dataset.show
    });
  },
  buyHide: function buyHide() {
    this.setData({
      buyFlag: false
    });
  },

  // 下一步操作
  next: function next() {
    wx.navigateTo({ url: '/pages/details/confirmOrder' });
  }
});