'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    number: 0, //字数统计
    showAdd: true, //是否显示添加
    imageSrc: [], //图片路径
    imageNum: 0, //图片数量
    anonymousFlag: false, //匿名发布勾选状态
    showFlag: false //发布到晒一晒勾选状态
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  // 评分星标
  handleStar: function handleStar(e) {
    var index = e.detail;
    if (index === 1) {
      this.setData({
        starResult: '非常差，不会再来'
      });
    } else if (index === 2) {
      this.setData({
        starResult: '感觉很一般'
      });
    } else if (index === 3) {
      this.setData({
        starResult: '满意，感觉不错'
      });
    } else if (index === 4) {
      this.setData({
        starResult: '很满意，下次还要来'
      });
    } else if (index === 5) {
      this.setData({
        starResult: '非常棒，值得推荐给朋友'
      });
    }
  },

  // 统计字数
  bindtext: function bindtext(e) {
    this.setData({
      number: e.detail.cursor
    });
  },

  // 添加图片
  addImage: function addImage() {
    var that = this;
    wx.chooseImage({
      count: 6,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        if (res.tempFilePaths.length >= 6) {
          that.setData({
            showAdd: false,
            imageSrc: res.tempFilePaths,
            imageNum: res.tempFilePaths.length
          });
        } else {
          that.setData({
            imageSrc: res.tempFilePaths,
            imageNum: res.tempFilePaths.length
          });
        }
      }
    });
  },

  // 匿名发布勾选
  bindAnonymous: function bindAnonymous() {
    this.setData({
      anonymousFlag: !this.data.anonymousFlag
    });
  },

  // 发布到晒一晒勾选
  bindShow: function bindShow() {
    this.setData({
      showFlag: !this.data.showFlag
    });
  },

  // 提交，数据收集
  formSubmit: function formSubmit(e) {
    console.log(e.detail.value);
  }
});