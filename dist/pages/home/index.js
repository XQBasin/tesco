'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Page({
    data: {
        NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
        DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT,
        banner: [{ src: 'http://file.taoyuantoday.com/213/20190118/696af11d6687092383174fddfb463137.jpg_0x0.jpg' }, { src: 'http://file.taoyuantoday.com/213/20190109/cd0bd4b383fb190dbafddc93edcc562d.jpg' }, { src: 'http://file.taoyuantoday.com/213/20190111/f7e9684f2a50926daa2361c19173e582.png' }, { src: 'http://file.taoyuantoday.com/213/20190114/29224e27cb98ee82ac2486bbc303bd53.jpg' }],
        style: 1,
        swiperCurrent: 0,
        current: 0,
        showBadge: true,
        isHideLoadMore: false,
        socials: [], // 社交消息列表
        activities: [], // 最新活动列表
        uid: '', // 桃园用户标识
        rmList: [//热卖数据
        { 'name': 1 }, { 'name': 2 }],
        list: [{ 'name': 1 }, { 'name': 2 }, { 'name': 3 }, { 'name': 4 }]
    },
    onLoad: function onLoad(options) {
        var that = this;
        // 获取社交数据
        that.getSocials(1);
        // 获取活动数据
        that.getActivities(1);
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
        wx.showShareMenu({
            withShareTicket: true
        });
    },

    //下拉刷新
    onPullDownRefresh: function onPullDownRefresh() {
        wx.showNavigationBarLoading(); //在标题栏中显示加载
        //模拟加载
        this.getSocials(1);
        this.getActivities(1);
        setTimeout(function () {
            // complete
            wx.hideNavigationBarLoading(); //完成停止加载
            wx.stopPullDownRefresh(); //停止下拉刷新
        }, 1500);
    },
    //加载更多
    onReachBottom: function onReachBottom() {
        var _this = this;

        setTimeout(function () {
            _this.setData({
                isHideLoadMore: true
            });
        }, 2000);
    },
    // 监听用户滑动页面事件。
    onPageScroll: function onPageScroll(option) {
        if (option.scrollTop >= 150) {
            this.setData({
                style: 2
            });
        } else {
            this.setData({
                style: 1
            });
        }
    },
    swiperChange: function swiperChange(option) {
        this.setData({
            swiperCurrent: option.detail.current
        });
    },
    // 获取用户基本信息
    bindGetUserInfo: function bindGetUserInfo(e) {
        var that = this;
        var route = e.currentTarget.dataset.route;
        // 判断是否同意授权
        if (e.detail.userInfo == undefined) {
            wx.showModal({
                title: '温馨提示',
                content: '请先允许授权再继续！',
                showCancel: false,
                confirmColor: '#ffd100',
                confirmText: '我知道啦',
                success: function success(res) {
                    if (res.confirm) {
                        console.log('用户已确认看到提示！');
                    }
                }
            });
        } else {
            that.updateUser(e.detail.userInfo, that.data.uid, route);
        }
    },

    // 更新用户信息
    updateUser: function updateUser(userInfo, uid, route) {
        var that = this;
        wx.request({
            url: 'https://wx.taoyuantoday.com/mini.Index/updateUser.html',
            data: {
                userInfo: userInfo,
                uid: uid
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function success(res) {
                that.navigateTo(route);
            }
        });
    },
    // 获取路由页面
    navigateTo: function navigateTo(route) {
        wx.navigateTo({
            url: '../' + route
        });
    },
    // 查看社交信息详情
    getSocInfo: function getSocInfo(option) {
        var socialid = option.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../social/comments?socialid=' + socialid
        });
    },
    // 查看活动详情
    getActInfo: function getActInfo(option) {
        var activityid = option.currentTarget.dataset.id;
        wx.navigateTo({
            url: '../activity/info?activityid=' + activityid
        });
    },
    // 获取路由页面
    navigateToShow: function navigateToShow(e) {
        var route = e.currentTarget.dataset.route;
        var param = e.currentTarget.dataset.param;
        wx.navigateTo({
            url: '../' + route + '?' + param
        });
    },
    // 监听Tab切换
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

    // 活动列表
    getActivities: function getActivities(status) {
        var that = this;
        wx.request({
            url: 'https://wx.taoyuantoday.com/mini.Index/getActivities.html',
            data: {
                status: status
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function success(res) {
                if (res.data != "") {
                    that.setData({
                        activities: res.data
                    });
                }
            }
        });
    },
    // 社交列表
    getSocials: function getSocials(status) {
        var that = this;
        wx.request({
            url: 'https://wx.taoyuantoday.com/mini.Index/getSocials.html',
            data: {
                status: status
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function success(res) {
                if (res.data != "") {
                    that.setData({
                        socials: res.data
                    });
                }
            }
        });
    },
    previewImage: function previewImage(e) {
        var urls = e.currentTarget.dataset.urls;
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: urls // 需要预览的图片http链接列表
        });
    },
    // 客服消息
    handleContact: function handleContact(e) {
        console.log(e.path);
        console.log(e.query);
    }
});