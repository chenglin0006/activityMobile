/*
* apiUrl:开发环境时本地代理，线上环境为服务器地址
* addressUrl：省市区服务器地址
* qiniuUrl：七牛云获取token服务器地址
* authUrl：登录，权限地址
* */
const url = {
    //本地开发环境
	development: {
        targetUrl:'http://report-dev.bnq.com.cn',
        apiUrl: 'http://web.futureshop.dev-zt.bnq.com.cn:8094',
        apiUrlFilter: '/report-web',
        proxyFilter: '/report-web',

        // targetUrl:'http://192.168.111.133:8089',
        // apiUrl: 'http://web.futureshop.dev-zt.bnq.com.cn:8090',
        // apiUrlFilter: '/dictionary',
        // proxyFilter: '/dictionary',

        authUrl: 'http://auth-dev.bnq.com.cn',
        authUrlFilter: '/auth',
        port: 8094,
        autoOpenBrowser: true,
        addressUrl:'https://customer-dev.bnq.com.cn/customerAdmin/district',
        qiniuUrl:'http://xres.bnq.com.cn/file',
	},
    //线上生产环境
	production: {
        apiUrl:'//report.bnq.com.cn',
        apiUrlFilter: '/report-web',
        addressUrl:'//admin.customer.bos.b-and-qchina.com/customerAdmin/district',//促销系统还没有相应的地址接口
        qiniuUrl:'//xres.bnq.com.cn/file',
        authUrl: '//auth.bnq.com.cn',
        authUrlFilter: '/auth',
    },
    //线上开发环境
    productionDev: {
        apiUrl:'//report-dev.bnq.com.cn',
        apiUrlFilter: '/report-web',
        addressUrl:'//customer-dev.bnq.com.cn/customerAdmin/district',
        qiniuUrl:'//xres.bnq.com.cn/file',
        authUrl: '//auth-dev.bnq.com.cn',
        authUrlFilter: '/auth',
    },
    //线上uat环境
    productionUat: {
        apiUrl:'//report-uat.bnq.com.cn',
        apiUrlFilter: '/report-web',
        addressUrl:'//dev-fb-member-center-bos.bnq.com.cn/areas/district',//还没有对应的uat接口
        qiniuUrl:'//xres.bnq.com.cn/file',
        authUrl: '//auth-dev.bnq.com.cn',//登录还没有对应的uat接口
        authUrlFilter: '/auth',
    }
}

module.exports = url;
