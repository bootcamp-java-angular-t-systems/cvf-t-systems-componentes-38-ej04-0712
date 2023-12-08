# Documentación de la Aplicación de TODO List en Angular

## Descripción General:

La aplicación de TODO List desarrollada en Angular consta de dos componentes principales: `ListaTareas` y `FormularioTarea`. La aplicación permite a los usuarios agregar nuevas tareas, marcar tareas como completadas y eliminar tareas de la lista.

## Componente `ListaTareas`:

El componente `ListaTareas` es responsable de mostrar la lista de tareas y manejar las acciones relacionadas con las tareas, como marcar como completada y eliminar. Cada tarea en la lista tiene un título, una descripción y un botón para eliminar. Además, la aplicación cambia visualmente las tareas completadas.

### Funcionalidades:
- Visualización de la lista de tareas.
- Marcado de tareas como completadas.
- Eliminación de tareas de la lista.

### Implementación:
- Uso de un array `tasks` para almacenar las tareas.
- Uso de `@for` para iterar sobre las tareas y mostrarlas en la interfaz de usuario.
- Uso de clases CSS condicionales con `ngClass` para cambiar el estilo visual de las tareas completadas.
- Uso del evento `taskDeleted` para notificar la eliminación de una tarea.

## Componente `FormularioTarea`:

El componente `FormularioTarea` contiene un formulario que permite a los usuarios agregar nuevas tareas a la lista. El formulario incluye campos para el título y la descripción de la tarea.

### Funcionalidades:
- Formulario para agregar nuevas tareas.

### Implementación:
- Uso de un formulario reactivo (`ReactiveForms`) con `FormBuilder`.
- Captura de eventos de envío (`ngSubmit`) para agregar nuevas tareas al array `tasks` en el componente `ListaTareas`.

## Comunicación entre Componentes:

La comunicación entre componentes se logra mediante el uso de eventos (`EventEmitter`). El componente `ListaTareas` emite el evento `taskDeleted` cuando una tarea es eliminada. El componente `FormularioTarea` recibe este evento y realiza la lógica necesaria para eliminar la tarea de la lista.

## Documentación del Código:

- Comentarios descriptivos en el código para explicar la funcionalidad de cada método y componente.
- Uso de nombres de variables y métodos significativos para mejorar la legibilidad del código.
- Documentación sobre el uso de `ReactiveForms` y `@for` para mejorar la comprensión del código.

La aplicación de TODO List en Angular es una solución eficaz y bien estructurada que proporciona una experiencia de usuario intuitiva y funcionalidad completa para la gestión de tareas.
