const path = require("path");

module.exports = {
	base: '/vuepress/',

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
						type : 'group',
						title: '1',
						collapsable: true,
						children: [
							{
								type: 'group',
								title: '1.1',
								collapsable: true,
								children: [
									['/', '1.1.1'],
									// ['/teste2/', 'Two'],
									// ['/teste2/1.md', 'Two dot one']
								]
							}
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
						type: 'group',
						title: 'Spark',
						collapsable: true,
						sidebarDepth: 1,
						children:[
							{
								type: 'group',
								title: 'Visualização de Dados',
								collapsable: true,
								sidebarDepth: 1,
								children: [
									//['<route>', '<label to show on sidebar>']
									['/pt-br/visualizacao_de_dados/tabela.md', 'Tabela'],
									['/pt-br/visualizacao_de_dados/sumario_estatistico.md', 'Sumário Estatístico'],
									['/pt-br/visualizacao_de_dados/publicar_como_dashboard.md', 'Publicar como Dashboard'],
									['/pt-br/visualizacao_de_dados/mapa.md', 'Mapa'],
									['/pt-br/visualizacao_de_dados/histograma.md', 'Histograma'],
									['/pt-br/visualizacao_de_dados/grafico_de_rosca.md', 'Gráfico de Rosca'],
									['/pt-br/visualizacao_de_dados/grafico_de_pizza.md', 'Gráfico de Pizza'],
									['/pt-br/visualizacao_de_dados/grafico_de_linha.md', 'Gráfico de Linha'],
								]
							}
						]
					}
				]
			}
		}
	}
}
