Título del Proyecto: Lista de Tareas Interactiva

Descripción General:

El proyecto consiste en una aplicación web simple y funcional de una "Lista de Tareas" que permite a los usuarios agregar y eliminar tareas de una lista. La aplicación utiliza HTML, CSS y JavaScript, junto con bibliotecas externas como Bootstrap y SweetAlert2 para mejorar la experiencia del usuario y la interfaz gráfica.

Funcionalidades:

Agregar Tareas:

Los usuarios pueden ingresar una tarea en un campo de texto.

Al enviar el formulario, la tarea se añade a una lista de tareas visible en la interfaz.

Cada tarea añadida muestra un botón "Eliminar" junto a ella.

Eliminar Tareas:

Los usuarios pueden eliminar una tarea específica haciendo clic en el botón "Eliminar" correspondiente.

Al intentar eliminar una tarea, se muestra una alerta de confirmación usando SweetAlert2, solicitando al usuario confirmar su acción.

Si se confirma la eliminación, la tarea se elimina de la lista y se muestra una notificación de éxito.

Almacenamiento:

Las tareas se almacenan en localStorage, permitiendo que las tareas persistan incluso después de cerrar el navegador.

Las tareas se cargan desde localStorage cada vez que se recarga la página.


Detalles Técnicos:

HTML:

Utiliza una estructura básica con un formulario para añadir tareas y una lista (ul) para mostrar las tareas.

Incluye enlaces a Bootstrap y SweetAlert2 para estilizar y mostrar alertas.

JavaScript:

Gestión de eventos del formulario para añadir tareas.

Creación dinámica de elementos HTML para cada tarea.

Implementación de funciones para almacenar tareas en localStorage y para manejar la eliminación de tareas con confirmaciones de SweetAlert2.

Validación de entradas para evitar la adición de tareas vacías.


Bibliotecas Utilizadas:

Bootstrap: Para el diseño responsivo y estilizado de la aplicación.

SweetAlert2: Para mostrar alertas personalizadas y confirmaciones al usuario.

Objetivo del Proyecto:

El objetivo principal de este proyecto es demostrar la capacidad de utilizar JavaScript para manipular el DOM, gestionar eventos, interactuar con localStorage, y utilizar bibliotecas externas para mejorar la experiencia del usuario.