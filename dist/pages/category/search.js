'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    showType: false,
    selectId: 0, //选择条件
    // list:[        
    //   {'src':'../../static/image/index/test/hufu.png'},
    //   {'src':'../../static/image/index/test/hufu.png'},
    //   {'src':'../../static/image/index/test/hufu.png'},
    //   {'src':'../../static/image/index/test/hufu.png'}
    // ]                //商品列表\
    list: ''
  },
  onLoad: function onLoad() {
    var _this = this;

    wx.request({
      url: 'https://wx.taoyuantoday.com/test/category', //开发者服务器接口地址",
      data: { id: 44, sort: 'time', pagesize: 1 }, //请求的参数",
      method: 'GET',
      dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: function success(res) {
        console.log(res.data.list);
        _this.setData({
          list: res.data.list
        });
      }
    });
  },

  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  // 选择选择查询条件
  select: function select(e) {
    this.setData({
      selectId: e.currentTarget.dataset.id
    });
  },

  // 选择商品显示方式
  bindShowType: function bindShowType() {
    this.setData({
      showType: !this.data.showType
    });
  }
});