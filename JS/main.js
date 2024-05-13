


// const VariableName = prompt ("Ingrese el nombre del usuario");
// const VariableLastName = prompt ("Ingrese el apellido del usuario");

// let VariableConfirmacion = confirm ("Bienbenido/a " +VariableName+ " "+VariableLastName+ " a la web para hacer una lista de todas tus tareas. ¿deseas continuar con la web?");
// console.log(VariableConfirmacion);

// if (VariableConfirmacion === true){
//     Opciones();
// } else{
//     alert ("Estas saliendo de la pagina.")
//     console.log(VariableName+" "+VariableLastName+ " Muchas Gracias por usar la pagina.")
// };


// function Opciones (){
//    let opcion;
//     do { 
//     alert(VariableName+ " Elige una entre estas opciones. 0. Para agregar nuevas tareas 1. Para ver la lista de tareas 2. Salir ");
//     console.log("Elige una entre estas opciones. 0. Para agregar nuevas tareas 1. Para ver la lista de tareas 2. Salir");
//     opcion = Number(prompt(VariableName+" "+ "Ingrese la opcion que quiera: "))
//     console.log (VariableName+ " El numero selecionado es: "+ opcion);

//     switch (opcion) {

//         case 0 : addList()
//         break;
//         case 1 : ViewList()
//         break;
//         case 2 : console.log("Estas cerrando la lista. Espero que vuelvas pronto.... "+VariableName+ " "+VariableLastName )
//         break;
//         default :  alert("El numero que ingresaste no es valido. Por favor seleccione un numero entre 0, 1 o 2. Muchas gracias.");
//                     console.log("El numero no es valido.")
//         break;
//     }

   
// }while(opcion !==2);
// }

// function addList () {
// let Newtask = prompt("Ingrese la nueva tarea a la lista: ")
// TaskList.push(Newtask);
// console.log("Se agrego "+Newtask+" a la lista");
// }

// function ViewList () {

// if (TaskList.length ===0){
//     console.log("La lista actualmente se encuentra vacia.");
// }else {
//     for (let i = 0 ; i<TaskList.length; i++){
//         // console.log(i + "--"+TaskList[i]+". ");
//         console.table(TaskList[i]);
//         alert(TaskList.join("---"));
//         }
//     }
// }






const TaskList = [];
const taskCont = document.getElementById('container'); 
const form = document.getElementById('registrationForm');
const addTaskForm = document.getElementById('addtask'); 

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const lastname = document.getElementById('lastname').value;

  if (!name || !lastname) {
    alert('complete todos los campos'); 
    return;
  }
form.innerHTML = `hola ${name} ${lastname}, bienvenid@ a la web, comienza a agregar tus tareas.`;

})

addTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nameTask = document.getElementById('NameTask').value;
  const newTask = document.getElementById('newtask').value; 
  
  class Task {
    constructor(nameTask, newTask) { 
      this.nameTask = nameTask;
      this.newTask = newTask; 
    }
  }

  const saveValueTask = new Task(nameTask, newTask); 

//   const saveValueTask = {
//     nameTask: nameTask.value,
//     newtask: newTask.value
//   };


  if (!nameTask || !newTask) {
    alert('complete todos los campos'); 
    return;
  }

  const card = cardGenerator(saveValueTask);
  taskCont.appendChild(card);
  
  TaskList.push(saveValueTask);
  console.log(TaskList);
  addTaskForm.reset(); 
});

function cardGenerator (saveValueTask) {
    const div = document.createElement('div'); 
    div.classList.add('task-card'); 
    div.innerHTML = `
    <h3>${saveValueTask.nameTask}</h3>
    <p>${saveValueTask.newTask}</p>
    `;
    return div;
}

ordenar.addEventListener('click', (event) => {
  event.preventDefault();
  taskCont.innerHTML = '';
  TaskList.sort((a, b) => a.nameTask - (b.nameTask));
  TaskList.forEach((task) => {
    const card = cardGenerator(task);
    taskCont.appendChild(card);
  });
})