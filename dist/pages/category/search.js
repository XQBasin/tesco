'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    key: '', //搜索内容
    showType: false, //选择商品显示方式
    selectId: '0', //选择条件Id
    selectContent: 'time', //条件
    sort: '', //排序条件
    dataSort: '', //记录当前排序方式
    reqId: '', //请求商种类ID
    page: 1, // 当前页码
    list: [], // 初始显示论坛数据
    totalNum: 0, // 总记录数
    totalPage: 0, // 总页码
    isHideLoadMore: false //加载更多
  },
  onLoad: function onLoad(option) {
    var param = {
      id: option.id,
      selectContent: this.data.selectContent,
      page: this.data.page
    };
    this.getList(param);
    this.setData({
      reqId: option.id
    });
  },

  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  // 搜索
  search: function search(e) {
    this.setData({
      key: e.detail.value,
      list: [],
      page: 1,
      totalNum: 0,
      totalPage: 0,
      isHideLoadMore: false
    });
    var param = {
      reqId: this.data.reqId,
      sort: this.data.selectContent,
      page: 1,
      key: e.detail.value
    };
    this.getList(param);
  },

  // 选择商品显示方式
  bindShowType: function bindShowType() {
    this.setData({
      showType: !this.data.showType
    });
  },

  // 商品筛选
  select: function select(e) {
    var selId = e.currentTarget.dataset.id;
    var dataSort = e.currentTarget.dataset.sort;
    this.setData({
      list: [],
      isHideLoadMore: false
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
      selectContent: con
    });
    var param = {
      id: this.data.reqId,
      sort: this.data.selectContent
    };
    if (this.data.key != '') {
      param['key'] = this.data.key;
    }
    this.getList(param);
  },

  //加载更多
  onReachBottom: function onReachBottom() {
    this.setData({
      isHideLoadMore: false
    });
    switch (this.data.selectId) {
      case '0':
        this.getMore('time');
        break;
      case '1':
        this.getMore('sales');
        break;
      case '2':
        switch (this.data.sort) {
          case 'des':
            this.getMore('price');
            break;
          case 'asc':
            this.getMore('price2');
            break;
        }
        break;
      case '3':
        break;
    }
  },

  // 加载更多请求数据
  getMore: function getMore(sort) {
    var param = {
      id: this.data.reqId,
      sort: sort,
      page: parseInt(this.data.page) + 1
    };
    if (this.data.key != '') {
      param['key'] = this.data.key;
    }
    this.getList(param, true);
  },

  // 请求商品数据
  getList: function getList(param, concat) {
    var _this = this;

    if (param.key) {
      var url = 'https://wx.taoyuantoday.com/tesco.screen/search';
    } else {
      var url = 'https://wx.taoyuantoday.com/tesco.screen/category';
    }
    wx.request({
      url: url, //开发者服务器接口地址",
      data: param, //请求的参数",
      method: 'GET',
      dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function success(res) {
        if (res.data.code) {
          if (concat) {
            _this.setData({
              page: res.data.page,
              list: _this.data.list.concat(res.data.list),
              totalNum: res.data.totalNum,
              totalPage: res.data.total
            });
          } else {
            console.log(res);
            _this.setData({
              list: null
            });
            _this.setData({
              page: res.data.page,
              list: res.data.list,
              totalNum: res.data.totalNum,
              totalPage: res.data.total
            });
          }
        }
        if (_this.data.page >= _this.data.totalPage) {
          _this.setData({
            isHideLoadMore: true
          });
        }
      }
    });
  }
});