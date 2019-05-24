'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    showType: false,
    selectId: '0', //选择条件Id
    selectContent: 'time', //选择条件
    sort: '', //排序
    dataSort: '', //记录当前排序方式
    reqId: '', //请求商品ID
    list: [],
    page: 1 //页码数
  },
  onLoad: function onLoad(option) {
    this.getList(option.id, this.data.selectContent, this.data.page);
    this.setData({
      reqId: option.id
    });
  },

  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  // 选择商品显示方式
  bindShowType: function bindShowType() {
    this.setData({
      showType: !this.data.showType
    });
  },

  // 选择选择查询条件
  select: function select(e) {
    var selId = e.currentTarget.dataset.id;
    var dataSort = e.currentTarget.dataset.sort;
    this.setData({
      list: []
    });
    switch (selId) {
      case '0':
        this.dataSelect(selId, 'time');
        break;
      case '1':
        this.dataSelect(selId, 'sales');
        break;
      case '2':
        switch (dataSort) {
          case 'des':
            this.setData({
              sort: 'asc'
            });
            this.dataSelect(selId, 'price2');
            break;
          default:
            this.setData({
              sort: 'des'
            });
            this.dataSelect(selId, 'price');
            break;
        }
        break;
      case '3':
        break;
    }
  },

  // 商品筛选请求数据
  dataSelect: function dataSelect(selId, con) {
    this.setData({
      selectId: selId,
      selectContent: con,
      page: 1
    });
    this.getList(this.data.reqId, this.data.selectContent, this.data.page);
  },

  //加载更多
  onReachBottom: function onReachBottom() {
    // setTimeout(() => {
    //     this.setData({
    //         isHideLoadMore: true,
    //     })
    // }, 2000)
    var reqId = this.data.reqId;
    var page = this.data.page;
    switch (this.data.selectId) {
      case '0':
        this.setData({
          page: ++this.data.page
        });
        this.getList(reqId, 'time', page);
        break;
      case '1':
        this.setData({
          page: ++this.data.page
        });
        this.getList(reqId, 'sales', page);
        break;
      case '2':
        this.setData({
          page: ++this.data.page
        });
        switch (this.data.sort) {
          case 'des':
            this.getList(reqId, 'price', page);
            break;
          case 'asc':
            this.getList(reqId, 'price2', page);
            break;
        }
        break;
      case '3':
        break;
    }
  },

  // 请求数据
  getList: function getList(id, sort, page) {
    var _this = this;

    wx.request({
      url: 'https://wx.taoyuantoday.com/test/category', //开发者服务器接口地址",
      data: { id: id, sort: sort, page: page }, //请求的参数",
      method: 'GET',
      dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
      success: function success(res) {
        // console.log(res.data.list);
        var data = res.data.list;
        if (_this.data.list.length <= 0) {
          _this.setData({
            list: data
          });
        } else {
          if (data != undefined) {
            for (var i = 0; i < data.length; i++) {
              _this.data.list.push(data[i]);
            }
            _this.setData({
              list: _this.data.list
            });
          }
        }
      }
    });
  }
});