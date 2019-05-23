'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    windowHeight: '',
    Clickflag: '-1',
    current: 0,
    tabStyle: {
      'color': '#333',
      'width:': '80px'
    },
    activeTabStyle: {
      'color': '#ff2a00',
      'border-right': '1px solid #ff2a00'
    },
    tabItems: [{ name: '美妆' }, { name: '配饰' }, { name: '鞋靴' }],
    tabs: [],
    list: [],
    listContent: ''
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },
  onLoad: function onLoad() {
    var _this = this;

    // 请求分类
    this.getCategory();
    // 请求分类详细内容
    // this.getList(-1);
    this.getList(44);
    // 设置内容区高度
    wx.getSystemInfo({
      success: function success(res) {
        var SH = res.windowHeight - wx.STATUS_BAR_HEIGHT - wx.DEFAULT_HEADER_HEIGHT;
        _this.setData({
          windowHeight: SH + 'px'
        });
      }
    });
  },

  // 商品类别
  getCategory: function getCategory() {
    var _this2 = this;

    wx.request({
      url: 'https://wx.taoyuantoday.com/test/category', //开发者服务器接口地址
      method: 'POST',
      dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: function success(res) {
        _this2.setData({
          tabs: res.data
        });
      }
    });
  },
  select: function select(e) {
    var cid = e.currentTarget.dataset.cid;
    this.getList(cid);
    this.setData({
      Clickflag: cid
    });
  },

  // 商品列表
  getList: function getList(cid) {
    var _this3 = this;

    wx.request({
      url: 'https://wx.taoyuantoday.com/test/category', //开发者服务器接口地址
      data: { cid: cid },
      method: 'POST',
      dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: function success(res) {
        var data = [];
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].son.length > 0) {
            data.push(res.data[i]);
          }
        }
        _this3.data.list[cid] = data;
        _this3.setData({
          list: _this3.data.list,
          listContent: _this3.data.list[cid]
        });
        console.log(res);
      }
    });
  }
});