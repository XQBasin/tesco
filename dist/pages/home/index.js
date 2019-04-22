'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Page({
    data: {
        NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
        DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
        banner: [{ src: 'http://file.taoyuantoday.com/213/20190118/696af11d6687092383174fddfb463137.jpg_0x0.jpg' }, { src: 'http://file.taoyuantoday.com/213/20190109/cd0bd4b383fb190dbafddc93edcc562d.jpg' }, { src: 'http://file.taoyuantoday.com/213/20190111/f7e9684f2a50926daa2361c19173e582.png' }, { src: 'http://file.taoyuantoday.com/213/20190114/29224e27cb98ee82ac2486bbc303bd53.jpg' }],
        swiperCurrent: 0,
        rmList: [//热卖数据
        { 'name': 1 }, { 'name': 2 }],
        list: [{ 'src': '../../static/image/index/test/car.png' }, { 'src': '../../static/image/index/test/cooker.png' }, { 'src': '../../static/image/index/test/cooker.png' }, { 'src': '../../static/image/index/test/car.png' }]
    },
    onLoad: function onLoad(options) {
        var that = this;
        wx.login({
            success: function success(res) {
                if (res.code) {
                    //发起网络请求
                    wx.request({
                        url: 'https://wx.taoyuantoday.com/mini.Index/wxQuickLogin.html',
                        data: {
                            code: res.code
                        },
                        header: {
                            'content-type': 'application/json' // 默认值
                        },
                        success: function success(res) {
                            if (res.data != "") {
                                that.setData({
                                    uid: res.data
                                });
                            }
                        }
                    });
                } else {
                    console.log('登录失败，请检查网络设置！' + res.errMsg);
                }
            }
        });
    },

    //下拉刷新
    onPullDownRefresh: function onPullDownRefresh() {
        wx.showNavigationBarLoading(); //在标题栏中显示加载
        //模拟加载
        setTimeout(function () {
            // complete
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
        }, 1500);
    },
    swiperChange: function swiperChange(option) {
        this.setData({
            swiperCurrent: option.detail.current
        });
    },
    // 获取路由页面
    navigateToShow: function navigateToShow(e) {
        var route = e.currentTarget.dataset.route;
        var param = e.currentTarget.dataset.param;
        wx.navigateTo({
            url: '../' + route + '?' + param
        });
    }
});