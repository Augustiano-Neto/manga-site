# Catálogo de Mangás — MANGACON

=====================================================================================================================================================================

1. Integrantes e tema

Integrantes:
- Augustiano Souza Arraes Neto — RA: 2840482613037
- Cauã Yuri Gomes de Farias — RA: 2840482613013

Tema: Desenvolvimento de um catálogo de mangás

=====================================================================================================================================================================

2. Onde cada questão foi atendida

R1 - Estrutura de dados: Foi feita no arquivo app.js, utilizando o array mangas para guardar as informações 
das obras e o objeto catalogo, que possui as funções adicionarManga(), listarManga() e removerManga().

R2 - Exibição dos mangás: Foi feita no arquivo app.js, utilizando a função renderizar(lista), 
que cria os cards dos mangás automaticamente. No HTML, o elemento Listar-Mangas recebe os cards, e no CSS são definidos seus estilos e organização.

R3 - Pesquisa e filtros: Foi feita nos arquivos index.html e app.js. No HTML, foram 
criados o campo de pesquisa e o filtro de categorias. No JavaScript, a função pesquisarMangas() realiza as buscas. 
Também foram utilizados eventos para pesquisar enquanto digita, filtrar por categoria e limpar a pesquisa com a tecla ESC.

R4 - Cadastro de mangás: Foi feito nos arquivos index.html, app.js e style.css. 
No HTML, foi criado o formulário de cadastro. 
No JavaScript, a função validarCadastro() verifica se os dados estão corretos e o evento submit realiza o cadastro. 
No CSS, a classe campo-invalido destaca os campos com erros.

R5 - Sistema de favoritos: Foi feito nos arquivos app.js e style.css. Foi criado um botão 
para adicionar ou remover um mangá dos favoritos. Ao clicar, o botão muda de texto, o título recebe ou perde a classe favorito e os favoritos são salvos no localStorage.

R6 - Painel de estatísticas: Foi feito nos arquivos index.html e app.js. No HTML, 
foi criado o painel para mostrar as estatísticas. No JavaScript, 
a função atualizar_painel(lista) calcula o total de mangás, a quantidade de favoritos, a média das notas e o mangá com a maior nota.

R7 - Organização do código: Foi feita nos três arquivos do projeto. 
O HTML foi dividido em partes, como cabeçalho, catálogo, 
cadastro e painel de estatísticas. O CSS foi separado por elementos e classes. 
Já o JavaScript foi organizado em blocos com comentários, separando cada questão para facilitar a leitura do código.

=====================================================================================================================================================================

3. Divisão de tarefas da dupla

Augustiano Souza Arraes Neto:
- Responsável pelos questões 2, 3 e 6, além da criação inicial do HTML e CSS e sua adequação

Cauã Yuri Gomes de Farias:
- Responsável pelos questões 1, 4 e 5, além da criação do README e pequenas alterações no HTML e CSS

Dessa forma conseguimos concluir a atividade sem sobrecarregar os integrantes da equipe

=====================================================================================================================================================================

4. Dificuldades encontradas e soluções

4.1. Compreender a estrutura necessária para a [R2]
Inicialmente o conceito e entendimento do que era pedido na questão e do que deveria ser realizado demonstrou obstáculos, porém com auxílio dos materiais da aula 
e da IA, as dúvidas foram sanadas e dado continuidade ao projeto.

4.2. Criação do formulário de cadastro e seus parâmetros [R4]
Não possuía domínio sobre conceito e comandos necessários para criação do formulário, além de não conseguir pensar em todos os parâmetros e suas possíveis falhas, porém com auxílio dos materiais da aula e da IA, as dúvidas foram sanadas e dado continuidade ao projeto.

4.3. Implementação do CSS
Por falta de conhecimento e prática com a linguagem e seus comandos, tivemos certa dificuldade em criar e implementar o CSS, mas assim como as demais dúvidas, com auxílio dos materiais da aula e da IA, as dúvidas foram sanadas e dado continuidade ao projeto.

=====================================================================================================================================================================

5. Declaração de uso de Inteligência Artificial

Foi utilizada a ferramenta ChatGPT como auxílio durante o desenvolvimento do projeto, principalmente para pesquisar comandos, compreender o funcionamento de funções e identificar possíveis erros no código.
A ferramenta também foi utilizada para esclarecer dúvidas sobre a implementação das funcionalidades, servindo como apoio ao aprendizado durante a realização das questões.
Dentro do uso foi esclarecido e configurado que ele não gerasse o código completo, apenas desse dicas de como cria-lo, possuindo uma dinâmica mais acadêmica do que de resposta.

=====================================================================================================================================================================
