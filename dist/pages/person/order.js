'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
    current2: 0,
    activeTabStyle: {
      'color': '#f87005'
    },
    inkBarStyle: {
      'border-bottom': '1px solid #f87005',
      'width': '35%',
      'color': '#f87005'
    },
    showReasonMask: false, //取消订单理由弹框状态
    flag: false, //点击mask不关闭遮罩
    showCancelMask: false, //已取消订单弹框状态
    customStyle: 'background-color:rgba(255, 255, 255, 0)' //已取消订单背景样式
  },
  // 导航返回
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  // 选项卡功能
  handleChange: function handleChange(e) {
    var index = e.detail.index;
    this.setData({
      current: index
    });
  },
  handleContentChange: function handleContentChange(e) {
    var current = e.detail.current;
    this.setData({
      current: current
    });
  },

  //取消订单
  cancel: function cancel() {

    this.setData({
      showReasonMask: true
    });
  },

  // 关闭订单理由弹框
  close: function close() {
    this.setData({
      showReasonMask: false
    });
  },

  // 确认选择的理由
  confirm: function confirm() {
    this.setData({
      showReasonMask: false,
      showCancelMask: true
    });
  },

  //提醒发货
  remind: function remind() {
    wx.showModal({
      title: '',
      content: '已提醒卖家发货',
      cancelText: '去逛逛',
      cancelColor: 'rgb(186,186,186)',
      confirmColor: '#f87005',
      success: function success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
        } else if (res.cancel) {
          console.log('用户点击去逛逛');
        }
      }
    });
  },
  confirmOrder: function confirmOrder() {
    wx.showModal({
      title: '确认收货',
      content: '未收到货时确认可能会钱货两空喔~',
      cancelColor: 'rgb(186,186,186)',
      confirmColor: '#f87005',
      success: function success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  }
});