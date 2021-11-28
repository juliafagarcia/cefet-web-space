// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const botoes = document.querySelectorAll(".botao-expandir-retrair");

for (botaoEl of botoes) {
    botaoEl.addEventListener('click', erParagrafos);
}

function erParagrafos(e) {
    if (e.currentTarget.innerHTML == '+') {
        e.currentTarget.innerHTML = '-';

    } else {
        e.currentTarget.innerHTML = '+';

    }
    e.currentTarget.parentNode.classList.toggle('expandido');
}


