let inputAddProd = document.getElementById('prod-input');
let inputQtdProd = document.getElementById('qtd-input');
let lista = document.getElementById('lista-prod');

function adicionarProd(){
    let produto = {
        id: null,
        prod: null,
        qtd: null
    };
    produto.prod = inputAddProd.value;
    produto.qtd = inputQtdProd.value;

    if (produto.prod == null || produto.prod == '') {
        alert("Por favor, informe o nome do produto.");
        inputAddProd.focus();
        return;
    }

    let linha = createRow(produto);
    lista.appendChild(linha);

    limpar();
}

function createRow(produto){

    const items = document.getElementsByClassName('product-item');
    const id = items.length + 1;
    const tableRow = document.createElement('tr');
    tableRow.classList = ['product-item'];
    tableRow.id = `item-${id}`;

    const celId = document.createElement('td');
    celId.innerText = id;
    tableRow.appendChild(celId);

    const celProd = document.createElement('td');
    celProd.innerText = produto.prod;
    tableRow.appendChild(celProd);

    const celQtd = document.createElement('td');
    celQtd.innerText = produto.qtd;
    tableRow.appendChild(celQtd);

    const button = document.createElement('a');
    button.innerHTML = '<button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>';
    button.onclick = removerItem;
    button.id = `delete-item-${id}`;

    const celBtn = document.createElement('td');
    celBtn.appendChild(button);

    tableRow.appendChild(celBtn);
    
    return tableRow;

}

function limpar() {
    inputAddProd.value = '';
    inputQtdProd.value = 1;
    inputAddProd.focus();
}

function removerItem () {
    const target = this.id.replace('delete-', '');
    
    const elements = document.getElementsByClassName('product-item');

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].id == target){
            lista.removeChild(elements[i]);
            return;
        }
    }
}
