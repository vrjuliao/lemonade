(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{193:function(a,e,o){"use strict";o.r(e);var t=o(0),r=Object(t.a)({},function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"mapa"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mapa","aria-hidden":"true"}},[a._v("#")]),a._v(" Mapa")]),a._v(" "),o("p",[a._v("Visualizações de mapa são úteis para a visualização de dados geográficos.")]),a._v(" "),o("h3",{attrs:{id:"conectores"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conectores","aria-hidden":"true"}},[a._v("#")]),a._v(" Conectores")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Entrada")]),a._v(" "),o("th",[a._v("Saída")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[a._v("Dados de entradas")]),a._v(" "),o("td",[a._v("Uma Visualização")])])])]),a._v(" "),o("h3",{attrs:{id:"tarefa"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tarefa","aria-hidden":"true"}},[a._v("#")]),a._v(" Tarefa")]),a._v(" "),o("p",[a._v("Nome da Tarefa")]),a._v(" "),o("h3",{attrs:{id:"aba-execucao"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#aba-execucao","aria-hidden":"true"}},[a._v("#")]),a._v(" Aba Execução")]),a._v(" "),o("table",[o("thead",[o("tr",[o("th",[a._v("Parâmetro")]),a._v(" "),o("th",[a._v("Detalhe")])])]),a._v(" "),o("tbody",[o("tr",[o("td",[o("strong",[a._v("Tipo de Mapa")])]),a._v(" "),o("td",[a._v("Tipo de será renderizado. Atualmente existem 3 opções: *"),o("strong",[a._v("pontos, heatmap (mapa de calor) e geojson")])])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Título")])]),a._v(" "),o("td",[a._v("Título da visualização. É apresentado no gráfico")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com Latitude")])]),a._v(" "),o("td",[a._v("Atributo que contém latitude")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo com Longitude")])]),a._v(" "),o("td",[a._v("Atributo que contém longitude")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo usado para valor")])]),a._v(" "),o("td",[a._v("Atributo que será usado como um indicador de uma região geográfica. Por exemplo, este atributo pode se referir ao número de habitantes de determinada região")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Atributo usado para rótulo")])]),a._v(" "),o("td",[a._v("Atributo que será usado como um rótulo, ou ID de uma região geográfica. Pode ser, por exemplo, a sigla de um estado")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Limites do polígono(s) (Geo JSON)")])]),a._v(" "),o("td",[a._v("Base de dados a ser desenhada. Atualmente o Lemonade suporta apenas um "),o("strong",[a._v("Mapa Mundi")]),a._v(" e um mapa dos "),o("strong",[a._v("Estados Brasileiros")]),a._v(".")])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Nome da propriedade no Geo JSON usada para relacionar os dados")])]),a._v(" "),o("td",[a._v("Propriedade que servirá como identificador dos dados. No caso do "),o("strong",[a._v("Mapa Mundi")]),a._v(" deve ser "),o("strong",[a._v('"iso_a2"')]),a._v('. No caso do mapa dos estados do Brasil, deve ser "id"')])]),a._v(" "),o("tr",[o("td",[o("strong",[a._v("Dados extras (Geo JSON)")])]),a._v(" "),o("td",[a._v("Atributos extras a serem inseridos ao geojson. Por exemplo, o nome da região desenhada.")])])])]),a._v(" "),o("p",[o("router-link",{attrs:{to:"/pt-br/"}},[a._v("Aba Aparência")])],1),a._v(" "),o("p",[o("router-link",{attrs:{to:"/pt-br/"}},[a._v("Aba Resultados")])],1),a._v(" "),o("h2",{attrs:{id:"exemplo-de-utilizacao"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#exemplo-de-utilizacao","aria-hidden":"true"}},[a._v("#")]),a._v(" Exemplo de Utilização")]),a._v(" "),o("p",[o("strong",[a._v("Objetivo:")]),a._v(" visualizar a localização dos aeroportos do Brasil.")]),a._v(" "),o("p",[o("strong",[a._v("Base de Dados:")]),a._v(" "),o("router-link",{attrs:{to:"/pt-br/"}},[a._v("Aeroportos do Brasil")])],1),a._v(" "),o("p",[o("img",{attrs:{src:"/vuepress/img/spark/visualizacao_de_dados/mapa/image1.png",alt:"Ler dados"}})]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Adicione uma base de dados por meio da operação "),o("router-link",{attrs:{to:"/pt-br/"}},[a._v("Ler dados")]),a._v(".")],1)]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("strong",[a._v("Mapa")]),a._v(", selecione o valor "),o("em",[a._v("“pontos”")]),a._v(" para o parâmetro "),o("strong",[a._v("Tipo de Mapa")]),a._v(". Preencha o campo Título e selecione os valores "),o("em",[a._v("“latitude_deg”")]),a._v(" para o campo "),o("strong",[a._v("Atributo com Latitude")]),a._v(" e "),o("em",[a._v("“longitude_deg”")]),a._v(" para o campo "),o("strong",[a._v("Atributo com Longitude")]),a._v(". "),o("br"),a._v(" "),o("img",{attrs:{src:"/vuepress/img/spark/visualizacao_de_dados/mapa/image3.png",alt:"Formulario"}})])]),a._v(" "),o("li",[o("p",[a._v("Execute o fluxo e visualize o resultado. "),o("br"),a._v(" "),o("img",{attrs:{src:"/vuepress/img/spark/visualizacao_de_dados/mapa/image2.png",alt:"Execução"}})])]),a._v(" "),o("li",[o("p",[a._v("Na operação "),o("strong",[a._v("Mapa")]),a._v(", altere o valor do parâmetro "),o("strong",[a._v("Tipo de Mapa")]),a._v(" para "),o("em",[a._v("“heatmap”")]),a._v(" e visualize o resultado. "),o("br"),a._v(" "),o("img",{attrs:{src:"/vuepress/img/spark/visualizacao_de_dados/mapa/image4.png",alt:"Execução"}})])])]),a._v(" "),o("hr"),a._v(" "),o("p",[a._v("Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br")])])},[],!1,null,null,null);e.default=r.exports}}]);