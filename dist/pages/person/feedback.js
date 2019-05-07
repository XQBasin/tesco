'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tagStyle = 'background: #ececec;\ncolor: rgb(102,102,102);\npadding: 0 20rpx;\nborder-radius: 25rpx;\ntext-align: center;\nheight: 50rpx;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nline-height: 50rpx;\nfont-size:24rpx;\nmargin-bottom:20rpx;\n';
var selectStyle = 'background: #fdd6b6;\ncolor: rgb(248,112,5);\npadding: 0 20rpx;\nborder-radius: 25rpx;\ntext-align: center;\nheight: 50rpx;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nline-height: 50rpx;\nfont-size:24rpx;\nmargin-bottom:20rpx;\n';

exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    typeList: [{
      text: '登录注册',
      tagStyle: tagStyle,
      tagSelectedStyle: selectStyle,
      checked: true
    }, {
      text: '物流速度',
      tagStyle: tagStyle,
      tagSelectedStyle: selectStyle,
      checked: false
    }, {
      text: '产品质量',
      tagStyle: tagStyle,
      tagSelectedStyle: selectStyle,
      checked: false
    }, {
      text: '付款流程',
      tagStyle: tagStyle,
      tagSelectedStyle: selectStyle,
      checked: false
    }, {
      text: '用户体验',
      tagStyle: tagStyle,
      tagSelectedStyle: selectStyle,
      checked: false
    }, {
      text: '其它',
      tagStyle: tagStyle,
      tagSelectedStyle: selectStyle,
      checked: false
    }],
    type: '', //已选择的反馈类型
    number: 0, //字数统计
    showAdd: true, //是否显示添加
    imageSrc: [], //图片路径
    imageNum: 0 //图片数量
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  // 反馈类型选择
  singleTap: function singleTap(e) {
    var opt = e.detail.index;
    wx.showToast({
      title: this.data.typeList[opt].text,
      icon: 'none'
    });
    this.data.typeList.forEach(function (item, index) {
      item.checked = index === opt;
    });
    this.setData({
      typeList: this.data.typeList,
      type: this.data.typeList[opt].text
    });
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
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        if (res.tempFilePaths.length >= 3) {
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