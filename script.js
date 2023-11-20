let paginaAtual = 1;
const produtosPorPagina = 5; 

function showPage(page) {
    const produtos = document.querySelectorAll('.product');
    const inicio = (page - 1) * produtosPorPagina;
    const fim = inicio + produtosPorPagina;

    produtos.forEach((product, index) => {
        if (index >= inicio && index < fim) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function proximaPagina() {
    const produtos = document.querySelectorAll('.product');
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
