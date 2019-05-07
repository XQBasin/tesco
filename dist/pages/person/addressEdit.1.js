'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _WxValidate = require('../../static/utils/WxValidate.js');

var _WxValidate2 = _interopRequireDefault(_WxValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Page({
    data: {
        NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
        DEFAULT_HEADER_HEIGHT: wx.DEFAULT_HEADER_HEIGHT
    },
    // 导航返回
    navigateBack: function navigateBack() {
        wx.navigateBack();
    },
    onLoad: function onLoad(options) {
        this.initValidate();
    },

    // 初始化表单校验
    initValidate: function initValidate() {
        // 验证字段的规则
        var rules = {
            username: {
                required: true
            },
            phone: {
                required: true
            },
            area: {
                required: true
            },
            address: {
                required: true
            },
            code: {
                required: true
            }
            // 验证字段的提示信息，若不传则调用默认的信息
        };var messages = {
            username: {
                required: '请输入收货人姓名！'
            },
            phone: {
                required: '请输入收货人手机号码！'
            },
            area: {
                required: '请选择地区！'
            },
            address: {
                required: '请输入详细地址！'
            },
            code: {
                required: '请输入邮政编码！'
            }
            // 创建实例对象
        };this.validate = new _WxValidate2.default(rules, messages);
    },

    // 数据收集
    formSubmit: function formSubmit(e) {
        var data = e.detail.value;
        // 校验表单
        if (!this.validate.checkForm(data)) {
            var error = this.validate.errorList[0];
            wx.showToast({
                title: error.msg,
                icon: 'none'
            });
            return false;
        }
        console.log(e.detail.value);
    }
});