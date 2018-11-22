const url = {
	development: {
		targetUrl: '//dev-finance-bigdata.bnq.com.cn',
		apiUrl: '//localhost:8093',
		port: 8093,
		autoOpenBrowser: true,
		proxyFilter: '/report',
	},
	productionDev:{
        apiUrl: '//dev-finance-bigdata.bnq.com.cn',
	},
	productionUat:{
        apiUrl: '//dev-finance-bigdata.bnq.com.cn',
	},
	production: {
		apiUrl: '//dev-finance-bigdata.bnq.com.cn',
	}
}

module.exports = url;
