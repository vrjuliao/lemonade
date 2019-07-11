module.exports = {
	base: '/vuepress/',
	head: [
		['link', { rel: 'icon', type: 'image/png', sizes:'96x96', href: '/assets/img/bomb.png' }]
	],
	// title: 'Hello VuePress',
	// description: 'VuePress test on github project page',

	locales: {
		'/': {
			lang: 'en-US',
			title: 'VuePress Test',
			description: 'Testing VuePress'
		},
		'/pt-br/': {
			lang: 'pt-br',
			title: 'Teste do VuePress',
			description: 'Testando VuePress'
		}
	},

	themeConfig: {
		logo: '/assets/img/bomb.png',
		searchMaxSuggestions: 10,
		locales: {
			'/' : {
				selectText: 'Languages',
				label: 'English',
				nav: [
					{
						//text: '<label on navbar>', link: '<link to redirect>'
						text: 'Home', link: '/'
					}
				],
				sidebar: [
					{
						title: 'One',
						collapsable: true,
						children: [
							//['<route>', '<label to show on sidebar>']
							['/', 'Home'],
							['/teste2/', 'Two'],
							['/teste2/1.md', 'Two dot one']
						]
					}
				]
			},
			'/pt-br/' : {
				selectText: 'Idiomas',
				label: 'Português',
				nav: [
					{
						//text: '<label on navbar>', link: '<link to redirect>'
						text: 'Início', link: '/pt-br/'
					}
				],
				sidebar: [
					{
						title: 'Um',
						collapsable: true,
						children: [
							//['<route>', '<label to show on sidebar>']
							['/pt-br/', 'Início'],
							['/pt-br/teste2/', 'Dois'],
							['/pt-br/teste2/1.md', 'Dois ponto um']
						]
					}
				]
			}

		}
	}
}
