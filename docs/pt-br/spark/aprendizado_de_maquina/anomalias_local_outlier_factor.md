# Local Outlier Factor (LOF)

Detecta anomalias utilizando o algoritmo Local Outlier Factor (LOF) e retorna o grau de anomalia para cada instância da base de dados. Quanto maior o grau, maior é a chance da instância ser uma anomalia.


### Conectores
| Entrada | Saída |
| --- | --- |
| Dados a serem tratados | Dados tratados |

### Tarefa
Nome da Tarefa

### Aba Execução
| Parâmetro | Detalhe |
| --- | --- |
| **Atributos com as características (features)** | Atributos que serão utilizados pelo detector de anomalias |
| **Nome do novo atributo** | Nome do atributo que receberá os graus de anomalia |
| **Número mínimo de pontos** | Parâmetro utilizado para determinar a vizinhança a ser considerada pelo algoritmo |

**O Detector de anomalias deve ser executado em uma base de dados que tenha apenas atributos numéricos.** 

[Aba Aparência][1]

[Aba Resultados][2]

## Exemplo de Utilização
**Objetivo:** detectar anomalias na base de dados Iris\
**Base de Dados:** [Íris][3]

![Fluxo de trabalho - ler dados](/vuepress/img/spark/aprendizado_de_maquina/anomalias_local_outlier_factor/image5.png)

1. Adicione uma base de dados por meio da operação [Ler dados][4].\
![Formulário ler dados](/vuepress/img/spark/aprendizado_de_maquina/anomalias_local_outlier_factor/image1.png)

2. Adicione a operação **Local Outlier Factor (LOF)**, selecione *“Sepallength”*, *“Sepalwidth”*, *“Petallength”* e *“Petalwidth”*, como **Atributo(s) usados como feature(s)**. Preencha *“outlier”* no campo **Nome para o novo atributo** e *5* para o campo **Número mínimo de pontos**.\
![Formulário Local Outlier Factor](/vuepress/img/spark/aprendizado_de_maquina/anomalias_local_outlier_factor/image3.png)

3. Adicione a operação [Ordenar][5]. Abra o editor do campo **Atributo(s)**, selecione *“outlier”* como **Atributos** e “Decreasing” como **Função** para que as instâncias mais anômalas (maior grau de anomalia) sejam apresentadas primeiro.\
![Operação Ordenar](/vuepress/img/spark/aprendizado_de_maquina/anomalias_local_outlier_factor/image2.png)

4.  Execute o fluxo e visualize o resultado. O resultado possui o atributo “outlier”, que representa o grau de anomalia para cada instância.
![Resultado](/vuepress/img/spark/aprendizado_de_maquina/anomalias_local_outlier_factor/image4.png)\
Os resultados indicam que a primeira instância retornada diverge amplamente do comportamento dos seus vizinhos. Ou seja, considerando uma vizinhança de 5 instâncias (parâmetro utilizado), a primeira setosa retornada com valor \~5.46 de outlier possui uma densidade diferente dos seus vizinhos, onde seus vizinhos são calculados através de uma distância Euclidiana. Por isso, esta instância possui o maior grau de anomalia e, o mesmo procedimento pode ser interpretado para as instâncias seguintes do resultado. Como os resultados são apresentados para todas as instâncias, normalmente as primeiras são de maior interesse, pois, serão aquelas com o maior grau de anomalia.

---
Dúvidas e/ou sugestões envie um e-mail para suporte@lemonade.org.br

[1]: /pt-br/
[2]: /pt-br/
[3]: /pt-br/
[4]: /pt-br/
[5]: /pt-br/