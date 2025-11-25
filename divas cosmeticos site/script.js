// ======== CONTADOR DO CARRINHO ========
let contadorCarrinho = 0;
const botoes = document.querySelectorAll('button');
const carrinho = document.querySelector('.cart');

const contador = document.createElement('span');
contador.classList.add('contador');
contador.textContent = contadorCarrinho;
carrinho.appendChild(contador);

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        contadorCarrinho++;
        contador.textContent = contadorCarrinho;
        alert('💄 Produto adicionado ao carrinho!');
    });
});


