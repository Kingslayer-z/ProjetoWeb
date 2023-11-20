let paginaAtual = 1;
const produtosPorPagina = 5; 

function showPage(page) {
    const produtos = document.querySelectorAll('.produto');
    const inicio = (page - 1) * produtosPorPagina;
    const fim = inicio + produtosPorPagina;

    produtos.forEach((produto, index) => {
        if (index >= inicio && index < fim) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}

function proximaPagina() {
    const produtos = document.querySelectorAll('.produto');
    const totalPages = Math.ceil(produtos.length / produtosPorPagina);

    if (paginaAtual < totalPages) {
        paginaAtual++;
        showPage(paginaAtual);
    }
}

function paginaAnterior() {
    if (paginaAtual > 1) {
        paginaAtual--;
        showPage(paginaAtual);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    showPage(paginaAtual);
});

function enviarContato(event) {
    event.preventDefault();

   
    alert('Formulário enviado! Em breve você receberá uma resposta de nossa equipe.');
}
