let tareaInfo = document.getElementById("tarea")
let tareasLista = document.getElementById("listaTareas")
let btnAgregar = document.getElementById("botonAgregar")

//Array
let conjuntoTareas = []

function agregarTarea(){
    let nuevaTarea = tareaInfo.value

//Esto no devolveria nada si el campo de texto está vacio
    if(nuevaTarea === ""){
        return
    }

//Asegurandose que el estado del objeto sea false
    const tarea = {
        texto: nuevaTarea,
        completada: false
    }

    conjuntoTareas.push(tarea)
    

    tareaInfo.value = ""

    refrescarLista()
}

function refrescarLista(){
    //El campo de texto queda vacion una vez agregada la tarea
    tareasLista.innerHTML = ""
   //Con esto se haria una lista de cada array agregado
    conjuntoTareas.forEach((tarea, index) => {
        let li = document.createElement("li")
        li.classList.add("list-group-item")
    //Esto agrega texto de la tarea al li
        li.innerText = tarea.texto

     //Aqui se puede agregar el boton de eliminar una tarea (Ver de encontrar una forma para que el boton esté centrado en dispositivos chicos)
        let btnEliminar = document.createElement("button")
        btnEliminar.classList.add("btn", "btn-warning", "mx-3")
        btnEliminar.innerText = "Eliminar"
        btnEliminar.addEventListener("click", () => {eliminarTarea(index)})

        li.appendChild(btnEliminar)
     //Esto agregaria la lista al array
        tareasLista.appendChild(li)
    })
}
//Esta es la funcion para eliminar la tarea
function eliminarTarea(index){
    conjuntoTareas.splice(index, 1)

    refrescarLista()
}

btnAgregar.addEventListener("click", agregarTarea)
