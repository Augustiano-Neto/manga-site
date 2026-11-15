//[1] Dados do site
const mangas = [
    {
        id:1, 
        nome: 'Solo leveling', 
        categoria: 'Ação, fantasia',
        descricao: 'Um jovem considerado o pior após quase morrer evolui', 
        ano_lancamento: 2016, 
        nota: 9, 
        numeros_capitulos: 179, 
        finalizado: true, 
        favorito: true },
    {
        id: 2,
        nome: 'One Piece',
        categoria: 'Aventura, ação',
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
        categoria: 'Ação, fantasia sombria',
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
        categoria: 'Suspense, psicológico',
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
        categoria: 'Ação, aventura',
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
        categoria: 'Terror, ação',
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
        categoria: 'Ação, sobrenatural',
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
        categoria: 'Ação, histórico',
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
        categoria: 'Ação, fantasia',
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
        categoria: 'Ação, Aventura',
        descricao: 'Um menino de outro mundo cai na terra após seu planeta ser destruído',
        ano_lancamento: 1984,
        nota: 9.7,
        numeros_capitulos: 194,
        finalizado: true,
        favorito: true
    }
    
    {
        id: 11,
        nome: 'Nano Machine',
        categoria: 'Ação, Aventura, artes marciais',
        descricao: 'Veja a combinação de artes marciais com nanotecnologia',
        ano_lancamento: 2020,
        nota: 9.9,
        numeros_capitulos: 338,
        finalizado: true,
        favorito: true
    }
    
    {
        id: 12,
        nome: 'O Deus do caos',
        categoria: 'Ação, Aventura, artes marciais',
        descricao: 'O surgimento de monstro que futuramente recebera o titulo de Deus',
        ano_lancamento: 2024,
        nota: 9.9,
        numeros_capitulos: 124,
        finalizado: false,
        favorito: true
    }

        {
        id: 13,
        nome: 'O melhor homem no comando',
        categoria: 'Ação, Aventura, artes marciais, escolar',
        descricao: 'Um menino de outro mundo cai na terra após seu planeta ser destruído',
        ano_lancamento: 2021,
        nota: 9.8,
        numeros_capitulos: 209,
        finalizado: false,
        favorito: true
    }

    {
        id: 14,
        nome: 'Beskerville',
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

    filtrarFinalizado: function(){
        let resultado = [];
        for(let i = 0; i < this.itens.length; i++ ){
            console.log(this.itens[i].finalizado)
            if(this.itens[i].finalizado === true){
                resultado.push(this.itens[i])
            }
        }
        return resultado
    }
}

/* fucao para exibir na pagina */
function exibirMangas() {

    const lista = document.getElementById("Listar-Mangas");

    lista.innerHTML = "";

    catalogo.itens.forEach(item => {

        lista.innerHTML += `
            <div class="mangas">
                <h3>class="${item.favorito ? 'favorito': ''}">${item.nome}</h3> 
                <p><strong>Categoria: </strong>  ${item.categoria}</p>
                <p><strong>Descrição: </strong>  ${item.descricao}</p>
                <p><strong>Lançamento: </strong> ${item.ano_lancamento}</p>
                <p><strong>Avaliação: </strong>  ${item.nota}</p>
                <p><strong>Capitulos: </strong>  ${item.numeros_capitulos}</p>
                <p><strong>Finalizado:</strong>  <span class="${item.finalizado ? 'finalizado' : 'em-andamento'}">
        ${item.finalizado ? 'Sim' : 'Não'}
    </span></p> 
            </div>
        `;

    });
}


// Inicializando o catálogo
exibirMangas();

console.log("Nome:", catalogo.nome);

