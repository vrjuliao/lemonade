
# Gráfico de Dispersão

Um Gráfico de Dispersão é um gráfico de pontos, utilizando coordenadas cartesianas.

### Conectores
| Entrada | Saída |
| --- | --- |
| Dados de entradas | Uma Visualização |

### Tarefa
Nome da Tarefa

### Aba Execução

| Parâmetro | Detalhe |
| --- | --- |
| **Atributos para o eixo X** | Atributo com os dados do eixo X |
| **Atributos para o eixo Y** | Atributo com os dados do eixo Y |
| **Título** | Título da visualização. É apresentado no gráfico |
| **Atributo usado para séries** | Atributo pelo qual os dados devem ser agrupados, de modo a serem representados por cores diferentes. Por exemplo, em casos de classificação, é desejável que classes distintas possuem cores diferentes. Por padrão, todos os pontos serão agrupados sob um mesmo grupo, tendo todos a mesma cor |
| **Título para o eixo X** |  |
| **Título para o eixo Y** |  |
| **Prefixo para o eixo X** | Prefixos são palavras que aparecem na frente de cada rótulo. Por exemplo, se no eixo X estiver um número para cada dia do mês (i.e., 1 – 30), o prefixo poderia ser a palavra “Dia”. |
| **Prefixo para o eixo Y** |  |
| **Sufixo para o eixo X** | Sufixos são palavras que aparecem após cada rótulo. Por exemplo, se no eixo X estiver temperaturas, o sufixo poderia ser a palavra “Graus”. |
| **Sufixo para o eixo Y** |  |

[Aba Aparência][1]

[Aba Resultados][2]


## Exemplo de Utilização
**Objetivo:** analisar a organização e os agrupamentos de diferentes espécies de Íris de acordo com o tamanho de suas pétalas/sépalas.

**Base de Dados:** [Íris][3]
	
![Ler dados](/vuepress/img/spark/visualizacao_de_dados/grafico_de_dispersao/image5.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].
	
2.  Ordene de forma crescente o atributo que será utilizado no **eixo X**, neste caso, o *“sepallength”* por meio da operação [Ordenar][5].
	
3. Selecione *“sepallength”* no campo **Atributos para o eixo X**. Selecione *“sepalwidth”* no campo **Atributos para o eixo Y**. Como **atributo de série**, escolha o *“class”*. \
	![Formulario agrupar](/vuepress/img/spark/visualizacao_de_dados/grafico_de_dispersao/image1.png)

4. Execute o fluxo e visualize o resultado. 
	![Gráfico de linhas gerado](/vuepress/img/spark/visualizacao_de_dados/grafico_de_dispersao/image2.png)\
		Gráfico de dispersão gerado pelo fluxo acima.

----- 
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/
[5]: /pt-br/