const tabelaItens = document.querySelectorAll('.tab-item');
const tabelaContentItens = document.querySelectorAll('.tab-content-item');

function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    const tabelaContentItens = document.querySelector(`#${this.id}-content`);
    tabelaContentItens.classList.add('show');
}

function removeBorder(){
    tabelaItens.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabelaContentItens.forEach(item => item.classList.remove('show'));
}

tabelaItens.forEach(item => item.addEventListener('click', selectItem));