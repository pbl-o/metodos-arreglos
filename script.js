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


// LISTENERS


//Inyección de primeras 3 tareas al cargar el documento:
document.addEventListener('DOMContentLoaded', ()=>{
    //Adicionar 3 elementos de la lista tareasPrevias
})


//Agregar tarea cada vez que se haga click en el botón
btnTask.addEventListener('click', ()=>{
    // agregar tarea
})


//FUNCIONES

//Render: Generación de tarea en DOM
const renderTask = (lista) =>{
    // crear elemento html que conenga ID de tarea, nombre de tarea y botones de "realziado" y "eliminar tarea"
}

//Eliminar Tarea
const borrarTarea = () =>{
    // borrar tarea de la lista de tareas
    //renderizar lista actualizada
    // cambiar cuenta del dom
    //filtrar tareas marcadas como realizadas al borrar alguna(si es que aplica)
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