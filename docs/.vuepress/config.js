const path = require("path");

module.exports = {
	base: '/vuepress/',

	configureWebpack: {
		resolve: {
			alias: {
				'@alias': 'assets'
			}
		}
	},

	//html header
	head: [
		['link', { rel: 'icon', type: 'image/png', sizes:'96x96', href: '/img/bomb.png' }]
	],

	//support languages
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
		//Header page logo
		logo: '/img/bomb.png',
		
		//searchBox feature
		searchMaxSuggestions: 10,
		
		//support languages
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
					},
					{
						title: 'Visualização de Dados',
						collapsable: true,
						children: [
							//['<route>', '<label to show on sidebar>']
							['/pt-br/visualizacao_de_dados/tabela.md', 'Tabela']
						]
					}
				]
			}

		}
	}
}
