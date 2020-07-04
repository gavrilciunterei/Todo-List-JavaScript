const valoresLista = JSON.parse(localStorage.getItem('todos')) || [] ;
const formulario = document.getElementById('idFormulario');
cargarElementosLista();


formulario.onsubmit = (e) => {
    e.preventDefault(); // Evita que se actualize la página
    const cuadroFormularioValue = document.getElementById('cuadroFormulario');
    anadirItemsLista(cuadroFormularioValue.value);
}

const anadirItemsLista = (item) => {
    
    valoresLista.push(item);
    guardarElementosLocal();
    cargarElementosLista();
}

const guardarElementosLocal = () =>{
    const todosStrings = JSON.stringify(valoresLista);
    localStorage.setItem('todos', todosStrings);
}

function eliminarElementosLista(){

    const elementosLista = document.querySelectorAll('#lista li');
    elementosLista.forEach((elementoLista, i)=>{
        elementoLista.addEventListener('click', () => {
            elementoLista.parentNode.removeChild(elementoLista);
            valoresLista.splice(i,1);
            guardarElementosLocal();
            cargarElementosLista();
        } )
    });
} 

function cargarElementosLista (){

    const lista = document.getElementById('lista');
    const elementos = valoresLista.map (e => '<li>' + e +'</li>'); 
    lista.innerHTML = elementos.join('');
    eliminarElementosLista();
}

