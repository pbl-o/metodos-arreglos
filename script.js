//Presentación, de esta vez usé un alert(). Posteriormente se cambiará por un modal u otro tipo de componente.

let startMsg = `Bienvenid@ a TO DO LIST, para usar la lista de tareas, debes ingresar una tarea en la barra indicada, haz click en el botón "${btnTask.innerText}" y visualiza tu tarea en la lista de tareas. 

Adicionalmente puedes marcar tu tarea como realizada o eliminarla al hacer el click  en los botones al lado de tu tarea.`; 

alert(startMsg);


//Elementos del DOM

const btnTask = document.getElementById('btn-add-task'); // botón => agregar tarea
const renderList = document.getElementById('lista-tareas'); // espacio de renderizado
const inputAdd = document.getElementById('task-input'); // input de texto (para agregar tareas)
const taskAmount = document.getElementById('task-amount'); // contador de tareas (DOM)
const taskDone = document.getElementById('task-done'); // contador de trabajos realizados (DOMs)


//LISTAS

const listOfTasks = [];
const dummyTasks = ["Comer pan", "Hacer ejercicio", "Tomar jugo"]; //tareas predeterminadas


// LISTENERS


//Inyección de primeras 3 tareas al cargar el documento:
document.addEventListener('DOMContentLoaded', ()=>{
    //Adicionar 3 elementos de la lista tareasPrevias
})


//Agregar tarea cada vez que se haga click en el botón
btnTask.addEventListener('click', ()=>{


    //agregar elemento tarea {tarea} dentro de un array 
    let newTask = inputAdd.value; 
    listOfTasks.push({id: Date.now(), name: newTask, done: false});
    renderTask(listOfTasks); //renderizar tarea como un elemento de la lista

    //modificar contador del DOM utilizando valor de extensión del array:
    taskAmount.innerText = `Total: ${listOfTasks.length}`;

    //Reinicializar valor del input
    inputAdd.value = "";


})


//FUNCIONES

//Render: Generación de tarea en DOM:

const renderTask = (lista) =>{
let html = '';
for(item of lista){
    html+= 
    `
    <li>
    
        <div class="task-render">
        
                <div class="id-render-area">

                    <div class="id-div">
                        ${item.id}
                    </div>

                    <div class="name-div">
                        ${item.name}
                    </div>

                </div>

                <div class="check-render-area">
                    <input type="checkbox" class="task-state" id="${item.id} onclick="boxChecker(${item.id})" ${item.done ? 'checked' : ''}>
                </div>

                <div class="button-render-area">
                    <button class="close-button onlcick="borrarTarea(${item.id}">
                    <i class="fa-solid fa-xmark"></i>
                    </buton>
                </div>
        
        </div>
        

    </li>`;
    
}
renderList.innerHTML = html;
}

//Eliminar Tarea
const borrarTarea = (id) =>{

    const index = listOfTasks.findIndex((item) => item.id == id);
    listOfTasks.splice(index,1);
    renderTask(listOfTasks);

    //modificar contador del DOM utilizando valor de extensión del array:
    taskAmount.innerText = `Total: ${listOfTasks.length}`;
    
    filtroTareasRealizadas(listOfTasks);

}
//modificar estado de checkbox / condición: realizada 
const boxChecker = (id) => {
    //buscar index y revisar y el estado realizado si es aplicable:
    //filtrar
    //renderizar
}

//filtrar las tares realizadas dentro del lista de tareas
const filtroTareasRealizadas = (lista) => {
    //filtrar tareas basandose en la llave realizado (se buscan tareas realizadas (true))
    // se modifica el contador en el DOM.
}