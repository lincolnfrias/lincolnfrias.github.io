Title: python
<br>

Você gostaria de analisar as pesquisas que o IBGE faz com milhares de pessoas e construir gráficos e mapas a partir delas? Então, bem vindo ao curso de análise de dados em python.

Bonito é melhor que feio. Simples é melhor que complexo. Facilidade é importante. Praticidade é melhor que pureza. Por causa dessas ideias, a linguagem python é conhecida por tornar a programação algo prazeroso. Ela também é famosa por ser muito usada (por exemplo, em lugares como Google, YouTube, Netflix, Spotify, Nasa, Cern e Dropbox), muito poderosa, muito flexível e fácil de aprender.

A riqueza das linguagens de programação está nos pacotes (ou bibliotecas) que são criados a partir delas. Há mais de 100 mil pacotes de python. Cada um deles é um conjunto de funções para facilitar certas tarefas. Há pacotes para controlar seu sistema operacional (pacote os), para baixar e enviar coisas para internet (requests e youtube-dl), criar aplicativos para a web (django e flask), construir sites (pelican), desenvolver inteligência artificial (scikit-learn e tensorflow), criar jogos (pygame), analisar textos e redes sociais (nltk) e para [muitas outras coisas](https://awesome-python.com/) (veja o vídeo 2 abaixo).

E, claro, há muitos pacotes para análises de dados e criação de gráficos complexos. Eles são o tema deste curso. Na última década a python vem tomando rapidamente o espaço dos programas usados em matemática, biologia, física, astronomia e estatística porque ela:  

- é um _software livre_, tanto no sentido de gratuito quanto no sentido de que os usuários podem modificá-lo à vontade;  
- é uma linguagem de _uso geral_, o que significa que o que você aprendeu durante a análise de dados serve também para baixar vídeos do youtube, editar suas músicas e construir seu site;  
- é simples e divertida de usar.   

O objetivo deste curso é aprender a usar a python para analisar dados socioeconômicos (principalmente do IBGE) e criar gráficos e mapas.

### A primeira coisa que você deve fazer  

Inscreva-se [nesta lista de emails](https://groups.google.com/d/forum/python_nupis) para acompanhar o curso, fazer perguntas e participar das conversas. É preciso ter um conta do gmail. Qualquer dúvida, escreva para [lincolnfrias@gmail.com](lincolnfrias@gmail.com)  

O próximo passo é assistir os dois vídeos de apresentação, listados abaixo. Em seguida, faça a instalação (vídeo 3), treine a interface (vídeo 4) e baixe os três arquivos indicados abaixo para fazer sua primeira análise, acompanhando o vídeo 5.

### Apresentação

- vídeo 1: [exemplo de análise de dados no python](https://youtu.be/XNmZzZQsSW0)  (17 min.)   
(o vídeo 5 explica cada passo em detalhe)

- vídeo 2: [um panorama do universo python](https://www.youtube.com/watch?v=zSLvr3TwhEA&feature=youtu.be) (6 min.)


### Instalação e primeiros passos

Para usar a python basta instalar a distribuição anaconda (vídeo 3) e executar o jupyter notebook (vídeo 4). A anaconda inclui a python e diversos pacotes, inclusive o jupyter.

- vídeo 3: [instalando o python com a distribuição anaconda](https://www.youtube.com/watch?v=cQefasnfoF4)
- vídeo 4: [usando o python com o jupyter notebook](https://www.youtube.com/watch?v=xuahp9g3Dic) (9 min.)

Para acompanhar o vídeo 5, baixe os três arquivos abaixo. Atenção: eles devem estar na mesma pasta e o notebook deve ser aberto usando o jupyter notebook, como mostrado no vídeo 4.  
- baixe os dados do [atlas brasil aqui](https://www.dropbox.com/s/suux3q1122juzvu/atlas.csv?dl=1)  
- baixe o [notebook da análise aqui](https://www.dropbox.com/s/rlhbqe4j5canveh/exemplo_analise_de_dados.ipynb?dl=1)  
- baixe a [planilha com as siglas das variáveis do conjunto de dados](https://www.dropbox.com/s/i1hds6t7mljgvld/atlas_siglas.xlsx?dl=1)  
- vídeo 5: [passo a passo da análise de dados no python](https://youtu.be/3t89zsd6At8) (26 min.)    

Se acostume com os nomes:  
- python: a linguagem  
- anaconda: uma *distribuição* da python voltada para a análise de dados, isto é, uma seleção dos principais pacotes usados para esse tipo de tarefa.  
- jupyter notebook: a interface em que usaremos o python.  

Para entender o jupyter notebook:  
- Dois modos de edição  
    1. modo edição: escreve em uma célula  
    2. modo comando: movimenta as células  
- Dois tipos de células  
    1. código (esc, depois y)  
    2. markdown (esc, depois m)  

### Tarefa para a seleção de bolsistas

- enviar um jupyter notebook (arquivo ipynb) com uma análise do atlas até 10/07.  
- a análise deve investigar alguma variável diferente daquelas usadas no vídeo, utilizando os comandos `query`,`groupby`,`sort_values` e incluindo ao menos um gráfico.  



### Principais pacotes para análise de dados

- [pandas](http://pandas.pydata.org/): para lidar com dataframes
- [statsmodels](http://statsmodels.sourceforge.net/): diversos tipos de modelos de regressão.
- [matplotlib](http://matplotlib.org/gallery.html): a biblioteca básica apra fazer gráficos
- [seaborn](https://stanford.edu/~mwaskom/software/seaborn/examples/index.html): faz com que a matploblib seja mais bonita e mais próxima da estatística.
- [altair](https://github.com/ellisonbg/altair): lindos gráficos javascript criados de maneira simples. Por ser um pacote recente, algumas coisas ainda não estão implementadas.
- [bokeh](http://bokeh.pydata.org/): gráficos javascript interativos.
- [scipy.stats](http://docs.scipy.org/doc/scipy/reference/tutorial/stats.html): ferramentas estatísticas
- [scikit-learn](http://scikit-learn.org): machine learning


## Para aprender mais
- [awesome python, uma lista de aplicações de python em várias áreas](https://awesome-python.com/)
- [python software foundation](https://www.python.org/)
- [uma introdução ao mundo de Python](https://gabrielacavalcante.gitbooks.io/python/content/abrindo_o_apetite.html)
- [a gallery of python notebooks](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)
- [whirlwind tour of python](https://github.com/jakevdp/WhirlwindTourOfPython)
- [python data science handbook](https://github.com/jakevdp/PythonDataScienceHandbook)
- [pyvideo](http://pyvideo.org/)
- [tutorial oficial, em inglês](https://docs.python.org/3/tutorial/index.html)
