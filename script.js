let paginaAtual = 1;
const produtosPorPagina = 5; 

function showPage(page) {
    const products = document.querySelectorAll('.product');
    const start = (page - 1) * produtosPorPagina;
    const end = start + produtosPorPagina;

    products.forEach((product, index) => {
        if (index >= start && index < end) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function proximaPagina() {
    const products = document.querySelectorAll('.product');
    const totalPages = Math.ceil(products.length / produtosPorPagina);

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
