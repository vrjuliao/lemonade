(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{216:function(a,s,e){"use strict";e.r(s);var o=e(0),r=Object(o.a)({},function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"adicionar-nova-s-coluna-s"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adicionar-nova-s-coluna-s","aria-hidden":"true"}},[a._v("#")]),a._v(" Adicionar Nova(s) Coluna(s)")]),a._v(" "),e("p",[a._v("A operação "),e("strong",[a._v("Adicionar Nova(s) Coluna(s)")]),a._v(" adiciona uma ou mais colunas a uma única saída de dados. Geralmente é utilizado quando é necessário agrupar em uma mesma saída de dados, diversos atributos de diferentes bases de dados. Um caso de uso comum para essa operação poderia ser o pareamento de um conjunto de atributos em duas bases de dados distintas. Supondo que fosse preciso parear o nome de pessoas em diferentes bases de dados, é possível reunir esses atributos em uma única base para facilitar o trabalho."),e("br"),a._v(" "),e("strong",[a._v("É importante que as duas bases de dados apresentem atributos de uma mesma natureza, isto é, que possam ser comparados.")])]),a._v(" "),e("h3",{attrs:{id:"conectores"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conectores","aria-hidden":"true"}},[a._v("#")]),a._v(" Conectores")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Entrada")]),a._v(" "),e("th",[a._v("Saída")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("Até duas fontes de dados.")]),a._v(" "),e("td",[a._v("Uma ou mais fontes com os dados modificados.")])])])]),a._v(" "),e("h3",{attrs:{id:"execucao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#execucao","aria-hidden":"true"}},[a._v("#")]),a._v(" Execução")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parâmetro")]),a._v(" "),e("th",[a._v("Detalhe")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[a._v("Prefixo para os atributos")])]),a._v(" "),e("td",[a._v("Os prefixos dos nomes das novas colunas na saída de dados da operação. (2 valores separados por vírgula)")])])])]),a._v(" "),e("h3",{attrs:{id:"tarefa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tarefa","aria-hidden":"true"}},[a._v("#")]),a._v(" Tarefa")]),a._v(" "),e("p",[a._v("Nome da Tarefa")]),a._v(" "),e("p",[e("router-link",{attrs:{to:"/pt-br/"}},[a._v("Aba Aparência")])],1),a._v(" "),e("p",[e("router-link",{attrs:{to:"/pt-br/"}},[a._v("Aba Resultados")])],1),a._v(" "),e("h2",{attrs:{id:"exemplo-de-utilizacao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exemplo-de-utilizacao","aria-hidden":"true"}},[a._v("#")]),a._v(" Exemplo de Utilização")]),a._v(" "),e("p",[e("strong",[a._v("Objetivo:")]),a._v(" Combinar (parear) duas bases de dados usando o nome das pessoas presentes nas duas bases. Como saída, os atributos das duas bases serão combinados em uma mesma base.")]),a._v(" "),e("p",[e("strong",[a._v("Base de Dados:")]),a._v(" "),e("router-link",{attrs:{to:"/pt-br/"}},[a._v("Titanic e US Baby Names")])],1),a._v(" "),e("p",[e("img",{attrs:{src:"/vuepress/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image2.png",alt:"Ler dados"}})]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Adicione ao fluxo sendo criado a base de dados Titanic por meio da operação "),e("router-link",{attrs:{to:"/pt-br/"}},[a._v("Ler dados")]),a._v("."),e("br"),a._v(" "),e("img",{attrs:{src:"/vuepress/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image3.png",alt:"Ler dados - Titanic"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Adicione a base de dados US Baby Names por meio da operação "),e("router-link",{attrs:{to:"/pt-br/"}},[a._v("Ler dados")]),a._v(". "),e("br"),a._v(" "),e("img",{attrs:{src:"/vuepress/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image1.png",alt:"Ler dados - US Baby Names"}}),e("br"),a._v("\nAntes de ser adicionada, a base foi reduzida para conter a mesma quantidade de instâncias (linhas) da base de dados Titanic.")],1)]),a._v(" "),e("li",[e("p",[a._v("Como as duas bases possuem muitos atributos além dos escolhidos, adicione a operação "),e("router-link",{attrs:{to:"/pt-br/"}},[a._v("Selecionar Atributos")]),a._v(" para separar uma única saída de dados com os atributos que serão utilizados."),e("br"),a._v(" "),e("img",{attrs:{src:"/vuepress/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image6.png",alt:"Selecionar Atributos"}})],1)]),a._v(" "),e("li",[e("p",[a._v("Para unir os atributos selecionados em cada uma das entradas de dados em uma única saída, adicione a operação "),e("strong",[a._v("Adicionar Nova(s) Coluna(s)")]),a._v(". No campo "),e("strong",[a._v("Prefixo para os atributos")]),a._v(" preencha base01 e base02, isto auxilia a diferenciar a qual fonte aquele atributo pertence."),e("br"),a._v(" "),e("img",{attrs:{src:"/vuepress/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image4.png",alt:"Operação Adicionar Coluna"}})])]),a._v(" "),e("li",[e("p",[a._v("Execute o fluxo e visualize o resultado."),e("br"),a._v(" "),e("img",{attrs:{src:"/vuepress/img/spark/manipulacao_de_dados/coluna_adicionar_nova/image5.png",alt:"Resultado"}})])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);s.default=r.exports}}]);