import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Task } from './interfaces/Task';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { FormularioTareaComponent } from './formulario-tarea/formulario-tarea.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListaTareasComponent, FormularioTareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UD38-EJ04';
  tasks: Task[] = [];

  handleTaskRegistered(task: Task) {
    this.tasks.push(task);
  }
  
  handleTaskCompleted(taskCode: number) {
    const taskIndex = this.tasks.findIndex(task => task.code === taskCode);
      if (taskIndex !== -1) {
        this.tasks[taskIndex].done = true;
      }
  }


  handleTaskDeleted(taskCode: number) {
    this.tasks = this.tasks.filter(task => task.code !== taskCode);
  }
}
