

const TaskList = [];

  const taskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  const Taskform = document.getElementById('task-form');
  Taskform.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = taskInput.value;


  if (taskInput.value.trim() !== "") {
      const li = document.createElement('li');
      li.textContent = taskInput.value;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.className = 'delete-btn';
deleteButton.onclick = function() {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarlo!'
  }).then((result) => {
    if (result.isConfirmed) {
      taskList.removeChild(li);

      Swal.fire(
        'Eliminado!',
        'La tarea ha sido eliminada.',
        'success'
      );
    }
  });
};

li.appendChild(deleteButton);
taskList.appendChild(li);

try {
  TaskList.push(task);
  localStorage.setItem("TaskList", JSON.stringify(TaskList));
  Swal.fire({
    icon: 'success',
    title: 'Tarea agregada',
    text: 'Tarea agregada exitosamente!',
    timer: 2000,
    showConfirmButton: false
  });
} catch (error) {
  console.error("Error al guardar la tarea:", error);

  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Algo salió mal al guardar la tarea!',
  });
}

Taskform.reset();
} else {

Swal.fire({
  icon: 'warning',
  title: 'Campo vacío',
  text: 'Por favor ingresa una tarea antes de agregarla.',
});
}
});