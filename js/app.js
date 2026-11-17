// [R1] QUESTAO 1  ===============================================================================================================================

const mangas = [
    {
        id:1, 
        nome: 'Solo leveling',
        imagem: 'imagens/solo-leveling.jpeg',  
        categoria: 'Ação, Fantasia',
        descricao: 'Um jovem considerado o pior após quase morrer evolui', 
        ano_lancamento: 2016, 
        nota: 9, 
        numeros_capitulos: 179, 
        finalizado: true, 
        favorito: true },
    {
        id: 2,
        nome: 'One Piece',
        imagem: 'imagens/one-piece.jpeg',
        categoria: 'Aventura, Ação',
        descricao: 'Um jovem pirata busca encontrar o lendário tesouro One Piece',
        ano_lancamento: 1997,
        nota: 9.5,
        numeros_capitulos: 1160,
        finalizado: false,
        favorito: true
    },
    {
        id: 3,
        nome: 'Berserk',
        imagem: 'imagens/berserk.jpeg',
        categoria: 'Ação, Fantasia',
        descricao: 'Um guerreiro enfrenta criaturas e desafios em um mundo sombrio',
        ano_lancamento: 1989,
        nota: 9.7,
        numeros_capitulos: 380,
        finalizado: false,
        favorito: true
    },
    {
        id: 4,
        nome: 'Death Note',
        imagem: 'imagens/death-note.jpeg',
        categoria: 'Suspense, Psicológico',
        descricao: 'Um estudante encontra um caderno capaz de matar pessoas',
        ano_lancamento: 2003,
        nota: 9.2,
        numeros_capitulos: 108,
        finalizado: true,
        favorito: false
    },
    {
        id: 5,
        nome: 'Naruto',
        imagem: 'imagens/naruto.jpeg',
        categoria: 'Ação, Aventura',
        descricao: 'Um jovem ninja busca reconhecimento e sonha em se tornar Hokage',
        ano_lancamento: 1999,
        nota: 9.6,
        numeros_capitulos: 700,
        finalizado: true,
        favorito: true
    },
    {
        id: 6,
        nome: 'Tokyo Ghoul',
        imagem: 'imagens/tokyo-ghol.jpeg',
        categoria: 'Terror, Ação',
        descricao: 'Um estudante passa a viver entre humanos e criaturas chamadas Ghouls',
        ano_lancamento: 2011,
        nota: 8.6,
        numeros_capitulos: 143,
        finalizado: true,
        favorito: false
    },
    {
        id: 7,
        nome: 'Jujutsu Kaisen',
        imagem: 'imagens/jujutsu-kaisen.jpeg',
        categoria: 'Ação, Sobrenatural',
        descricao: 'Um estudante entra no mundo da feitiçaria após ingerir um objeto amaldiçoado',
        ano_lancamento: 2018,
        nota: 9.1,
        numeros_capitulos: 271,
        finalizado: true,
        favorito: false
    },
    {
        id: 8,
        nome: 'Vagabond',
        imagem: 'imagens/vagabond.jpeg',
        categoria: 'Ação, Histórico',
        descricao: 'A jornada de um espadachim em busca de aperfeiçoamento pessoal',
        ano_lancamento: 1998,
        nota: 9.6,
        numeros_capitulos: 327,
        finalizado: false,
        favorito: true
    },
    {
        id: 9,
        nome: 'The Beginning After the End',
        imagem: 'imagens/beginner.jpeg',
        categoria: 'Ação, Fantasia',
        descricao: 'Um grande rei é morto envenenado e após reencarnar busca ter uma vida melhor',
        ano_lancamento: 2018,
        nota: 9.5,
        numeros_capitulos: 240,
        finalizado: false,
        favorito: true
    },
    {
        id: 10,
        nome: 'Dragon Ball',
        imagem: 'imagens/dragon-ball.jpeg',
        categoria: 'Ação, Aventura',
        descricao: 'Um menino de outro mundo cai na terra após seu planeta ser destruído',
        ano_lancamento: 1984,
        nota: 9.7,
        numeros_capitulos: 194,
        finalizado: true,
        favorito: true
    },
    {
        id: 11,
        nome: 'Nano Machine',
        imagem: 'imagens/nano-machine.jpeg',
        categoria: 'Ação, Aventura, Artes Marciais',
        descricao: 'Veja a combinação de artes marciais com nanotecnologia',
        ano_lancamento: 2020,
        nota: 9.9,
        numeros_capitulos: 338,
        finalizado: true,
        favorito: true
    },
    
    {
        id: 12,
        nome: 'O Deus do caos',
        imagem: 'imagens/deus-caos.jpeg',
        categoria: 'Ação, Aventura, Artes Marciais',
        descricao: 'O surgimento de monstro que futuramente recebera o titulo de Deus',
        ano_lancamento: 2024,
        nota: 9.9,
        numeros_capitulos: 124,
        finalizado: false,
        favorito: true
    },

    {
        id: 13,
        nome: 'O melhor homem no comando',
        imagem: 'imagens/melhor-comando.jpeg',
        categoria: 'Ação, Aventura, Artes Marciais, Escolar',
        descricao: 'Um menino de outro mundo cai na terra após seu planeta ser destruído',
        ano_lancamento: 2021,
        nota: 9.8,
        numeros_capitulos: 209,
        finalizado: false,
        favorito: true
    },

    {
        id: 14,
        nome: 'Beskerville',
        imagem: 'imagens/baskerviller.jpeg',
        categoria: 'Ação, Aventura, Fantasia, Mistério',
        descricao: 'A traição de sua familia o fez se tornar um monstro sedento por vingaça',
        ano_lancamento: 2023,
        nota: 9.7,
        numeros_capitulos: 198,
        finalizado: false,
        favorito: true
    }
    
];

const catalogo = {
    nome: 'Catálogo de mangas',
    itens: mangas,
    adicionarManga: function(item){
        this.itens.push(item)
    },

    listarManga: function(){
        return this.itens
    },

    removerManga: function(id){
        for(let i = 0; i < this.itens.length; i++ ){
            console.log(this.itens[i].id)
            if(this.itens[i].id === id){
                this.itens.splice(i, 1)
                return true
            }
        }
        return false
    }
}
// [R1] QUESTAO 1  ===============================================================================================================================




// [R2] QUESTAO 2 ===============================================================================================================================

// funcao para criar o conteiner dinamicamente apartir de uma lista

function renderizar(lista) {

    const container = document.getElementById("Listar-Mangas");


    //limpando o conteiner 
    container.innerHTML = "";

    // verifica se a lista esta vazia
    if (lista.length === 0) {

        const mensagem_vazia = document.createElement("p");

        mensagem_vazia.textContent = "Nenhum item encontrado";

        container.appendChild(mensagem_vazia);

        atualizar_painel(lista);

        return;

    }

    // colocando as info no conteiner dinamicamente 
    lista.forEach(item => {

        const card = document.createElement("div");     // criando o carsd 
        card.classList.add("mangas");

        const imagem = document.createElement("img"); // imagem
        imagem.src = item.imagem;
        imagem.alt = item.nome;

        const titulo = document.createElement("h3"); // inserindo o nome do manga
        titulo.textContent = item.nome;

        if (item.favorito) {
            titulo.classList.add("favorito"); //verificando se o item é favorito e adicionando a classe favorito
        }

        const categoria = document.createElement("p"); // criando paragrafos
        const tipo_categoria = item.categoria.toLowerCase(); // criando espaço de cotegoria no card 

        // verificando as categorias para inserir
        switch (true) {

            case tipo_categoria.includes("escolar"):  
                categoria.textContent = "Escolar";
                break;
            
            case tipo_categoria.includes("artes marciais"):  
                categoria.textContent = "Artes Marciais";
                break;

            case tipo_categoria.includes("aventura"):
                categoria.textContent = "Aventura";
                break;    

            case tipo_categoria.includes("ação"):
                categoria.textContent = "Ação";
                break;

            default:
                categoria.textContent = "Outros";
        }

        
        const descricao = document.createElement("p");

        let texto_descricao = item.descricao;

        // colocando o tamanho maximo na descrição 
        if (texto_descricao.length > 60) {
            texto_descricao = texto_descricao.slice(0, 60) + "…";
        }

        descricao.textContent = "Descrição: " + texto_descricao;

        const ano = document.createElement("p");                    
        ano.textContent = "Lançamento: " + item.ano_lancamento;     //lancamento

        const avaliacao = document.createElement("p");
        avaliacao.textContent = "Avaliação: " + item.nota.toFixed(1);   //avalicao do manga 

        const capitulos = document.createElement("p");
        capitulos.textContent = "Capítulos: " + item.numeros_capitulos; //total de capitulos

        const finalizado = document.createElement("p");
        const status = document.createElement("span"); // destacando o status 

        // [R5] QUESTAO 5 (PARTE 1) ========================================================================================================================

        const botaofavorito = document.createElement('button')

            //  exibindo texto de botão dinâmico
        if (item.favorito === true){
            botaofavorito.textContent = 'Remover Favorito';
        }
        else{
            botaofavorito.textContent = 'Adicionar Favorito';
        }


        // [R5] QUESTAO 5 (PARTE 1) ========================================================================================================================
    
            //  verificando se a obra esta finalizada
        if (item.finalizado) {
            status.textContent = "Sim";
            status.classList.add("finalizado");
        } else {
            status.textContent = "Não";
            status.classList.add("em-andamento");
        }

        finalizado.textContent = "Finalizado: ";
        finalizado.appendChild(status);            

        //colocando os dados no card
        card.appendChild(imagem);
        card.appendChild(titulo);
        card.appendChild(categoria);
        card.appendChild(descricao);
        card.appendChild(ano);
        card.appendChild(avaliacao);
        card.appendChild(capitulos);
        card.appendChild(finalizado);
        // item da [R5]
        card.appendChild(botaofavorito);

        // [R5] QUESTAO 5 (PARTE 2) ========================================================================================================================

       botaofavorito.addEventListener('click', function(){     

            // Alterando o estado do favorito
            item.favorito = !item.favorito;

            if (item.favorito === true){
                botaofavorito.textContent = 'Remover Favorito';
            }
            else{
                botaofavorito.textContent = 'Adicionar Favorito';
            }

            // Atualizando a aparência do título
            titulo.classList.toggle("favorito");

            // Salvando os favoritos
            const favoritos = mangas.filter(function(manga) {
                
                    return manga.favorito === true;
                }).map(function(manga) {
                    return manga.id;
                });

                localStorage.setItem('mangasFavoritos', JSON.stringify(favoritos));

                // Atualizando o painel
                atualizar_painel(lista);

             });
    
            container.appendChild(card);

    });
    

//[R6] atualiza as estatisticas ========================================================================================================================
         atualizar_painel(lista);
//[R6] atualiza as estatisticas ========================================================================================================================

}

// [R2] QUESTAO 2 ===============================================================================================================================

// [R6] QUESTÃO 6 ===============================================================================================================================

//funcao que atualiza o painel de estatistica 
function atualizar_painel(lista) {

    // numero de mangás exibidos
    const total = lista.length;

    // contando os mangas favoritos
    const favoritos = lista.filter(function(item){ 
        return item.favorito === true;
    }).length;

    // vendo se a lista ta vazia
    if (lista.length === 0) {

        document.getElementById('painel_total').textContent = total;
        document.getElementById('painel_favoritos').textContent = favoritos;
        document.getElementById('painel_media').textContent = '—';
        document.getElementById('painel_maior').textContent = '—';

        return;
    }

    // media das notas
    let soma = 0;

    for (let i = 0; i < lista.length; i++) {
        soma += lista[i].nota;
    }

    const media = (soma / lista.length).toFixed(2).replace('.', ',');

    // pegando o manga com maior nota
    let maior = lista[0];

    for (let i = 1; i < lista.length; i++) {

        if (lista[i].nota > maior.nota) {
            maior = lista[i];
        }

    }


    document.getElementById('painel_total').textContent = total;
    document.getElementById('painel_favoritos').textContent = favoritos;
    document.getElementById('painel_media').textContent = media;
    document.getElementById('painel_maior').textContent = maior.nome;

}

// [R6] QUESTÃO 6 ===============================================================================================================================


// [R3] QUESTAO 3  ===============================================================================================================================

const campo_busca = document.getElementById('campo_busca'); //pegado o nome digitado 

const filtro_categoria = document.getElementById('categoria_escolhida'); // pegando a categoria selecionada

//função de pesquisa de magas

function pesquisarMangas() {

    let lista_Filtrada = [];

    const texto_busca = campo_busca.value.toLowerCase();
    const categoria_escolhida = filtro_categoria.value.toLowerCase();

    for (let i = 0; i < mangas.length; i++) {

        if (
            mangas[i].nome.toLowerCase().indexOf(texto_busca) !== -1 &&
            (categoria_escolhida === 'todas' ||
            mangas[i].categoria.toLowerCase().indexOf(categoria_escolhida) !== -1)
        ) {

            lista_Filtrada.push(mangas[i]);

        }

    }

    renderizar(lista_Filtrada);

}


campo_busca.addEventListener('input', pesquisarMangas);

// filtro por categoria
filtro_categoria.addEventListener('change', pesquisarMangas);

// limpar a busca com a tecla ESC
campo_busca.addEventListener('keydown', function(event) {

    if (event.key === 'Escape') {

        campo_busca.value = '';

        filtro_categoria.value = 'Todas';

        pesquisarMangas();

    }

});

// [R3] QUESTAO 3  ===============================================================================================================================

// [R4] QUESTAO 4  ===============================================================================================================================

const formulario = document.getElementById('formCadastro');

const mensagem = document.getElementById('mensagem');

function validarCadastro(nome, descricao, ano_lancamento, numero_capitulos, categoria){
    const campoNome = document.getElementById('nome');
    const campoDescricao = document.getElementById('descricao');
    const campoAno = document.getElementById('ano_lancamento');
    const campoCapitulos = document.getElementById('numero_capitulos');
    const campoCategoria = document.getElementById('cadastro_categoria');

    if (nome.length < 3) {
        campoNome.classList.add('campo-invalido');
        throw new Error('O nome precisa ter no mínimo 3 letras');
    } 
    else {
        campoNome.classList.remove('campo-invalido');
    }

    if (descricao.length < 35) {
        campoDescricao.classList.add('campo-invalido');
        throw new Error('A descrição precisa ter no mínimo 35 caracteres');
    } 
    else {
        campoDescricao.classList.remove('campo-invalido');
    }

    if (ano_lancamento < 1945 || ano_lancamento > new Date().getFullYear() || isNaN(ano_lancamento)) {
        campoAno.classList.add('campo-invalido');
        throw new Error('Escolha um ano válido');
    } 
    else {
        campoAno.classList.remove('campo-invalido');
    }

    if (numero_capitulos <= 0 || numero_capitulos > 1000 || isNaN(numero_capitulos)) {
        campoCapitulos.classList.add('campo-invalido');
        throw new Error('O número de capítulos precisa ser maior que zero');
    } 
    else {
        campoCapitulos.classList.remove('campo-invalido');
    }

    if (categoria === '') {
        campoCategoria.classList.add('campo-invalido');
        throw new Error('É necessário adicionar uma categoria');
    } 
    else {
        campoCategoria.classList.remove('campo-invalido');
    }
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const descricao = document.getElementById('descricao').value.trim();
    const ano_lancamento = Number( document.getElementById('ano_lancamento').value);
    const numero_capitulos = Number(document.getElementById('numero_capitulos').value);
    const categoria = document.getElementById('cadastro_categoria').value;

    try{
        validarCadastro(nome, descricao, ano_lancamento, numero_capitulos, categoria)

        const novoManga = {
            id: catalogo.itens.length+1,
            nome: nome,
            imagem: '',
            categoria: categoria,
            descricao: descricao,
            ano_lancamento: ano_lancamento,
            nota: 0,
            numeros_capitulos: numero_capitulos,
            finalizado: false,
            favorito: false
        }
        catalogo.adicionarManga(novoManga)
        pesquisarMangas();
        mensagem.textContent = 'Cadastro feito com sucesso';
        formulario.reset();
    }
    catch(erro){
        mensagem.textContent = erro.message;
    }
});

// [R4] QUESTAO 4  ===============================================================================================================================

renderizar(catalogo.itens);

console.log("Nome:", catalogo.nome);
