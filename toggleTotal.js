function toggleTotal() {
    const linkTotal = document.querySelector('#linkTotal');
    
    //toggle => alterna
    if (linkTotal.hasAttribute('disabled')) {
        linkTotal.removeAttribute('disabled');
        botao.innerHTML = 'Total a pagar';
    } else {
        linkTotal.setAttribute('disabled', '');
        botao.innerHTML = 'R$ , ';
    }

}

const botao = document.querySelector('#botao');
botao.addEventListener('click', toggleTotal)