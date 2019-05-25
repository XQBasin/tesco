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
    imageNum: 0 //图片数量
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
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

  // 提交，数据收集
  formSubmit: function formSubmit(e) {
    console.log(e.detail.value);
  }
});