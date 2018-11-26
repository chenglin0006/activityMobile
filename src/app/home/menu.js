export let mockmenu = [
	{
		name: '报表中心',
		url: 'report',
		icon: 'appstore',
        children:[
            {
                name:'报表展示汇总',
                icon:'appstore',
                url:'/report-summary-list'
            }
        ]
	},{
        name: '配置中心',
        url: 'config',
        icon: 'appstore',
		children:[
            {
                name:'数据源配置汇总',
                icon:'appstore',
                url:'/config-dataSource-list'
            },
            {
                name:'资源配置汇总',
                icon:'appstore',
                url:'/config-resource-list'
            },
            {
                name:'报表配置汇总',
                icon:'appstore',
                url:'/config-summary-list'
            }
		]
	}
]
