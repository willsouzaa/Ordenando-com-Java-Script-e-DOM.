// funçao para trocar dois valores de uma posiçao
const swap = (array, pos1, pos2) => {
    const temp = array[pos1]
    array[pos1] = array[pos2]
    array[pos2] = temp
}

// funçao para embaralhar os elementos de um vetor
const shuffle = (array, troca) => {
    for (let i = 0; i < troca; i++) {
        const pos1 = Math.floor(Math.random() * array.length)
        const pos2 = Math.floor(Math.random() * array.length)
        swap(array, pos1, pos2)
    }
}

// funçao para ordenar um array de inteiros com bubble sort
const bubble_sort = (array) => {
    const n = array.length
    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - 1; j++){
            if (array[j] > array[j + 1]){
                swap(array, j, j +1)
            }
        }
    }
}
// funçao para ordenar um array de inteiros com selection_sort
const selection_sort = (array) => {
    const n = array.length
    for (let i = 0; i < n -1; i++){
        let min_index = i
        for (let j = i + 1; j < n; j++){
            min_index = j
            if (array[j] < array[min_index]){
                min_index = j
            }
        }
        swap(array, i, min_index)
    }
}
// funçao para ordenar um array de inteiros com quick_sort
const quick_sort = (array, inicio, fim) => {
    if (inicio < fim){
        const pivotIndex = particionamento(array, inicio, fim)
        quick_sort(array, inicio, pivotIndex - 1)
        quick_sort(array, pivotIndex + 1, fim)
    }
}

// funçao particionamento
const particionamento = (array, inicio, fim) => {
    const pivot = array[fim]
    let i = inicio - 1

    for (let j = inicio; j < fim; j++){
        if (array[j] < pivot){
            i++
            swap(array, i, j)
        }
    }
    swap(array, i+ 1, fim)
    return i + 1
}

// Adiciona um valor à lista de valores
function add() {
    const inputValor = document.getElementById('valor');
    const listaValores = document.getElementById('valores');
    const node = document.createElement('li');
    const textNode = document.createTextNode(inputValor.value);
    node.appendChild(textNode);
    listaValores.appendChild(node);
  }

function ordenar() {
    const listaValores = document.getElementById('valores');
    const listaSelecao = document.getElementById('algoritmo');
    const valores = Array.from(listaValores.children).map(item => eval(item.innerHTML));
  
    const selectedIndex = listaSelecao.selectedIndex;
    switch (selectedIndex) {
        case 0: // Bubble Sort
            bubble_sort(valores);
            break;
        case 1: // Selection Sort
            selection_sort(valores);
            break;
        case 2: // Quick Sort
            quick_sort(valores, 0, valores.length - 1);
            break;
    }
  
    listaValores.innerHTML = valores.map(item => `<li>${item}</li>`).reduce((acc, val) => acc + val, '');
  }
  
  // Embaralha os valores da lista
  function misturar() {
    const listaValores = document.getElementById('valores');
    const valores = Array.from(listaValores.children).map(item => parseFloat(item.innerHTML));
    shuffle(valores, 100);
  
    listaValores.innerHTML = valores.map(item => `<li>${item}</li>`).reduce((acc, val) => acc + val, '');
  }
  