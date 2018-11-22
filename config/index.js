const url = {
	development: {
		targetUrl: '//dev-finance-bigdata.bnq.com.cn',
		apiUrl: '//localhost:8093',
		port: 8093,
		autoOpenBrowser: true,
		proxyFilter: '/report',
		//预览页面配置
        apiPreviewUrl: '//admin-dev.cms.bnq.com.cn',
        previewTargetUrl: '//admin-dev.cms.bnq.com.cn',
        previewFilterUrl: '/cms-admin',
	},
	productionDev:{
        apiUrl: '//dev-finance-bigdata.bnq.com.cn',
        apiPreviewUrl:'//admin-dev.cms.bnq.com.cn',
        previewFilterUrl:'/cms-admin'
	},
	productionUat:{
        apiUrl: '//dev-finance-bigdata.bnq.com.cn',
        apiPreviewUrl:'//admin-uat.cms.bnq.com.cn',
        previewFilterUrl:'/cms-admin'
	},
	production: {
		apiUrl: '//dev-finance-bigdata.bnq.com.cn',
        apiPreviewUrl:'//admin.cms.bnq.com.cn',
        previewFilterUrl:'/cms-admin'
	}
}

module.exports = url;
