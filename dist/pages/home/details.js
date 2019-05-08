'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 选择颜色样式
var tagColorStyle = 'float: left;\n  width: 129rpx;\n  height: 44rpx;\n  text-align: center;\n  line-height: 44rpx;\n  border:1px solid rgb(204, 204, 204);\n  border-radius: 22rpx;\n  color: rgb(204, 204, 204);\n  margin: 0 9rpx;\n  margin-bottom: 20rpx;\n  font-size:28rpx;\n';
var selectColorStyle = 'float: left;\n  width: 129rpx;\n  height: 44rpx;\n  text-align: center;\n  line-height: 44rpx;\n  border-radius: 22rpx;\n  margin: 0 9rpx;\n  margin-bottom: 20rpx;\n  border:1px solid #f87005;\n  color: #f87005;\n  font-size:28rpx;\n';
// 选择尺寸样式
var tagSizeStyle = 'float: left;\n  width: 129rpx;\n  height: 44rpx;\n  text-align: center;\n  line-height: 44rpx;\n  border:1px solid rgb(204, 204, 204);\n  border-radius: 22rpx;\n  color: rgb(204, 204, 204);\n  margin: 0 9rpx;\n  margin-bottom: 20rpx;\n  font-size:28rpx;\n';
var selectSizeStyle = 'float: left;\n  width: 129rpx;\n  height: 44rpx;\n  text-align: center;\n  line-height: 44rpx;\n  border-radius: 22rpx;\n  margin: 0 9rpx;\n  margin-bottom: 20rpx;\n  border:1px solid #f87005;\n  color: #f87005;\n  font-size:28rpx;\n';
// 立即购买弹框样式
var tagStyle = 'background: #ececec;\n  color: rgb(102, 102, 102);\n  padding: 0 5px;\n  border-radius: 10rpx;\n  text-align: center;\n  height: 56rpx;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 20px;\n  margin: 0 20rpx 15rpx 0;\n  font-size:28rpx;\n';
var selectStyle = 'background: #f87005;\n  color: #fff;\n  padding: 0 5px;\n  border-radius: 10rpx;\n  text-align: center;\n  height: 56rpx;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 20px;\n  margin: 0 20rpx 15rpx 0;\n  font-size:28rpx;\n';

exports.default = Page({
  data: {
    colors: [{
      text: '红色',
      tagStyle: tagColorStyle,
      tagSelectedStyle: selectColorStyle,
      checked: true
    }, {
      text: '黑色',
      tagStyle: tagColorStyle,
      tagSelectedStyle: selectColorStyle,
      checked: false
    }, {
      text: '棕色',
      tagStyle: tagColorStyle,
      tagSelectedStyle: selectColorStyle,
      checked: false
    }, {
      text: '黄色',
      tagStyle: tagColorStyle,
      tagSelectedStyle: selectColorStyle,
      checked: false
    }, {
      text: '红色',
      tagStyle: tagColorStyle,
      tagSelectedStyle: selectColorStyle,
      checked: false
    }, {
      text: '红色',
      tagStyle: tagColorStyle,
      tagSelectedStyle: selectColorStyle,
      checked: false
    }],
    sizes: [{
      text: 'S',
      tagStyle: tagSizeStyle,
      tagSelectedStyle: selectSizeStyle,
      checked: true
    }, {
      text: 'M',
      tagStyle: tagSizeStyle,
      tagSelectedStyle: selectSizeStyle,
      checked: false
    }, {
      text: 'L',
      tagStyle: tagSizeStyle,
      tagSelectedStyle: selectSizeStyle,
      checked: false
    }, {
      text: 'XL',
      tagStyle: tagSizeStyle,
      tagSelectedStyle: selectSizeStyle,
      checked: false
    }],
    taste: [{
      text: '草莓味',
      tagStyle: tagStyle,
      tagSelectedStyle: selectStyle,
      checked: true
    }, {
      text: '草莓味',
      tagStyle: tagStyle,
      tagSelectedStyle: selectStyle,
      checked: false
    }, {
      text: '草莓味',
      tagStyle: tagStyle,
      tagSelectedStyle: selectStyle,
      checked: false
    }, {
      text: '草莓味',
      tagStyle: tagStyle,
      tagSelectedStyle: selectStyle,
      checked: false
    }, {
      text: '草莓味',
      tagStyle: tagStyle,
      tagSelectedStyle: selectStyle,
      checked: false
    }, {
      text: '草莓味',
      tagStyle: tagStyle,
      tagSelectedStyle: selectStyle,
      checked: false
    }],
    pack: [{
      text: '彩色包装',
      tagStyle: tagStyle,
      tagSelectedStyle: selectStyle,
      checked: true
    }, {
      text: '普通包装',
      tagStyle: tagStyle,
      tagSelectedStyle: selectStyle,
      checked: false
    }],

    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    emptyFlag: false, //缺省页状态值
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

  // 跳转到选择区域地址页面
  toSelectAddress: function toSelectAddress() {
    wx.navigateTo({ url: '/pages/home/selectAddress' });
  },

  // 跳转到商品评价页面
  torRating: function torRating() {
    wx.navigateTo({ url: '/pages/home/rating' });
  },

  // 下一步操作
  next: function next() {
    wx.navigateTo({ url: '/pages/home/confirmOrder' });
  },

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
  singleColor: function singleColor(e) {
    var opt = e.detail.index;
    this.data.colors.forEach(function (item, index) {
      item.checked = index === opt;
    });
    this.setData({
      colors: this.data.colors,
      color: this.data.colors[opt].text
    });
  },

  // 选择尺寸
  singleSize: function singleSize(e) {
    var opt = e.detail.index;
    this.data.sizes.forEach(function (item, index) {
      item.checked = index === opt;
    });
    this.setData({
      sizes: this.data.sizes,
      size: this.data.sizes[opt].text
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
  singleTaste: function singleTaste(e) {
    var opt = e.detail.index;
    wx.showToast({
      title: this.data.taste[opt].text,
      icon: 'none'
    });
    this.data.taste.forEach(function (item, index) {
      item.checked = index === opt;
    });
    this.setData({
      taste: this.data.taste
    });
  },
  singlePack: function singlePack(e) {
    var opt = e.detail.index;
    wx.showToast({
      title: this.data.pack[opt].text,
      icon: 'none'
    });
    this.data.pack.forEach(function (item, index) {
      item.checked = index === opt;
    });
    this.setData({
      pack: this.data.pack
    });
  }
});