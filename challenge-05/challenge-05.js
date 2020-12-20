/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myvar = [5, `odsson`, true, false, `veovato`];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arrays(arg){
    return arg;

}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log (arrays(myvar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arraysP(arg1,arg2){
    return arg1[arg2];


}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let myvar5 = [false , `odsson` , 21 , {name: `nome`, idade : 24} ,[1,2,3,4]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for (let index = 0; index <= 5; index++) {
    console.log(arraysP(myvar5,index));

    
}


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(Bname){
    var livros = { 
        'mar de monstros' : {
        quantidadePaginas: 304,
         autor:`Rick Riordan`,
         editora: `intriseca`
        },

     'tormenta de espadas':{
        quantidadePaginas: 884,
         autor:`George R. R. Martin`,
         editora: `intriseca`},

           'O conde de monte Cristo':{
        quantidadePaginas: 1300,
        autor:`Alexandre Dumas`,
          editora: `intriseca`}
        };
        return !Bname ? livros: livros[Bname];
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book(''));
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookname = 'tormenta de espadas';
console.log('o livro ' + bookname + ' tem '+ book('tormenta de espadas').quantidadePaginas + ' páginas');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + bookname + ' é '+ book('tormenta de espadas').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookname + ' foi publicado pela editora '+ book('tormenta de espadas').editora);
