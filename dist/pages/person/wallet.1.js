'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Page;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = Page((_Page = {
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    current: 0,
    activeTabStyle: {
      'color': '#f87005'
    },
    inkBarStyle: {
      'border-bottom': '1px solid #f87005',
      'width': '60%',
      'color': '#f87005'
    }
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  // 选项卡
  handleChange: function handleChange(e) {
    var index = e.detail.index;
    this.setData({
      current: index
    });
  }
}, _defineProperty(_Page, 'handleChange', function handleChange(e) {
  var index = e.detail.index;
  this.setData({
    current: index
  });
}), _defineProperty(_Page, 'handleContentChange', function handleContentChange(e) {
  var current = e.detail.current;
  this.setData({
    current: current
  });
}), _Page));