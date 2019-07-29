const path = require("path");

module.exports = {
	base: '/vuepress/',

	//html header
	head: [
		['link', { rel: 'icon', type: 'image/png', sizes:'96x96', href: '/img/logo.png' }]
	],

	//support languages
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Lemonade',
			description: 'Documentation of Lemenoade'
		},
		'/pt-br/': {
			lang: 'pt-br',
			title: 'Lemonade',
			description: 'Documentação do Lemonade'
		}
	},


	themeConfig: {
		displayAllHeaders: true,

		//Header page logo
		logo: '/img/logo.png',
		
		//searchBox feature ?
		searchMaxSuggestions: 6,
		search: true,
		
		//support languages
		locales: {
			'/' : {
				selectText: 'Languages',
				label: 'English',
				nav: [
					{
						//text: '<label on navbar>', link: '<link to redirect>'
						text: 'Home', link: '/'
					},
					{ 
						text: 'Platforms',
						items: [
							{ text: 'Keras', link: '/keras'},
							{ text: 'Spark', link: '/spark'}
						],
					}
				],
				/*sidebar: [
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
				]*/
				sidebar: {
					'/': [
						['', 'About'],
						['/instalation.md', 'Instalation'],
						['/architecture.md', 'Architecture']
					]
				}
			},
			'/pt-br/' : {
				selectText: 'Idiomas',
				label: 'Português',
				nav: [
					{
						//text: '<label on navbar>', link: '<link to redirect>'
						text: 'Início', link: '/pt-br/'
					},
					{ 
						text: 'Plataformas',
						items: [
							{ text: 'Keras', link: '/pt-br/keras'},
							{ text: 'Spark', link: '/pt-br/spark/visualizacao_de_dados/sumario_estatistico'}
						],
					}
				],
				sidebar: {
					// '/pt-br/spark/' : [
					// 'spark/' : [
					'/pt-br/spark/': [
						{
							title: 'Visualização de Dados',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['visualizacao_de_dados/tabela.md', 'Tabela'],
								['visualizacao_de_dados/sumario_estatistico.md', 'Sumário Estatístico'],
								['visualizacao_de_dados/publicar_como_dashboard.md', 'Publicar como Dashboard'],
								['visualizacao_de_dados/mapa.md', 'Mapa'],
								['visualizacao_de_dados/histograma.md', 'Histograma'],
								['visualizacao_de_dados/grafico_de_rosca.md', 'Gráfico de Rosca'],
								['visualizacao_de_dados/grafico_de_pizza.md', 'Gráfico de Pizza'],
								['visualizacao_de_dados/grafico_de_linha.md', 'Gráfico de Linha'],
								['visualizacao_de_dados/grafico_de_dispersao.md', 'Gráfico de Dispersão'],
								['visualizacao_de_dados/grafico_de_barra.md', 'Gráfico de Barra'],
								['visualizacao_de_dados/grafico_de_area.md', 'Gráfico de Área'],
								['visualizacao_de_dados/box_plot.md', 'Box Plot'],
							]
						},
						/*{
							title: 'Transformação de Dados',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								'transformacao_de_dados/'
							]
						},*/
						{
							title: 'Modelo e Avaliação',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['modelo_e_avaliacao/avaliar_modelo.md', 'Avaliar Modelo'],
								['modelo_e_avaliacao/aplicar_modelo.md', 'Aplicar Modelo'],
							]
						},
						{
							title: 'Manipulação de Dados',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['manipulacao_de_dados/tratar_dados_ausentes.md', 'Tratar Dados Ausentes'],
								['manipulacao_de_dados/selecionar_atributos.md', 'Selecionar Atributos'],
								['manipulacao_de_dados/juncao.md', 'Junção'],
								['manipulacao_de_dados/interseccao.md', 'Intersecção'],
								['manipulacao_de_dados/filtrar_por_funcao.md', 'Filtrar por Função'],
								['manipulacao_de_dados/coluna_substituir_valor.md', 'Coluna - Substituir Valor'],
								['manipulacao_de_dados/coluna_ordenar.md', 'Coluna - Ordenar'],
								['manipulacao_de_dados/coluna_adicionar_nova.md', 'Coluna - Adicionar Nova(s)'],
								['manipulacao_de_dados/coluna_diferenca.md', 'Coluna - Diferença'],
								['manipulacao_de_dados/linha_remover_duplicadas.md', 'Linha - Remover Duplicadas'],
								['manipulacao_de_dados/linha_agrupar_por_funcao.md', 'Linha - Agrupar por Função'],
								['manipulacao_de_dados/linha_adicionar_nova.md', 'Linha - Adicionar Nova(s)']
							]
						},
						{
							title: 'Entrada e Saída',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['entrada_e_saida/salvar_modelo.md', 'Salvar Modelo'],
								['entrada_e_saida/salvar_dados.md', 'Salvar Dados'],
								['entrada_e_saida/ler_dados.md', 'Ler Dados'],
								['entrada_e_saida/carregar_modelo.md', 'Carregar Modelo']
							]
						},
						{
							title: 'Documentação Geral',
							collapsable: true,
							sidebarDepth: 2,
							children: [
								//['<route>', '<label to show on sidebar>']
								['documentacao_geral/documentacao_geral.md', 'Documentação Geral'],
								['documentacao_geral/utilizacao_basica_da_plataforma_lemonade.md', 'Utilização Básica da Plataforma Lemonade']
							]
						},
						{
							title: 'Base de Dados',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['base_de_dados/', 'Base de Dados']
							]
						},
						{
							title: 'Avançado',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['avancado/executar_comandos_sql.md', 'Executar Commandos SQL'],
								['avancado/executar_codigo_python.md', 'Executar Código Python']
							]
						},
						{
							title: 'Aprendizado de Máquina',
							collapsable: true,
							sidebarDepth: 1,
							children: [
								//['<route>', '<label to show on sidebar>']
								['aprendizado_de_maquina/regressor_linear_generalizado.md', 'Regressão - Regressor Linear Generalizado'],
								['aprendizado_de_maquina/regressor_linear.md', 'Regressão - Regressor Linear']
							]
						}
					],
					'/': [
						['', 'About'],
						['/instalation.md', 'Instalation'],
						['/architecture.md', 'Architecture']
					]
				}
			}
		}
	}
}
