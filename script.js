const listaTarea = document.getElementById("lista-tareas");
const tareaInput = document.getElementById("tarea-input");

function agregarTarea() {
    const tareaTexto = tareaInput.value.trim();
    const tarea = {
        id: Date.now(),
        texto: tareaTexto,
        eliminar: "Eliminar"
    };

    const tareaItem = document.createElement("li");
    tareaItem.className = "tarea-item";
    tareaItem.id = tarea.id;

    const tareaButton = document.createElement("button");
    tareaButton.textContent = tarea.eliminar;

    const tareaSpan = document.createElement("span");
    tareaSpan.textContent = tarea.texto;

    tareaItem.appendChild(tareaSpan);

    listaTarea.appendChild(tareaItem);

    guardarTareas();
}

function guardarTareas() {
    const tareas = [];
    document.querySelectorAll(".tarea-item").forEach(
        item => {
            const tarea = {
                id: item.id,
                texto: item.querySelector("span").textContent,
                buttonText: "Eliminar"
            };
            tareas.push(tarea);
        }
    );

    localStorage.setItem("tareas", JSON.stringify(tareas));
    console.log(localStorage);
}

function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareas.forEach(tarea => {
        const tareaItem = document.createElement('li');
        tareaItem.className = "tarea-item";

        const tareaSpan = document.createElement("span");
        tareaSpan.textContent = tarea.texto;

        tareaItem.appendChild(tareaSpan);

        listaTarea.appendChild(tareaItem);
    });
}



document.addEventListener("DOMContentLoaded", cargarTareas);

function borrarTarea(tareaItem) {

}

localStorage.removeItem('tareas');