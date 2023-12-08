import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../interfaces/Task';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
    @Input() tasks: Task[] = [];
    @Output() taskCompleted = new EventEmitter<number>();
    @Output() taskDeleted = new EventEmitter<number>();
      
    completeTask(taskCode: number) {
      const taskIndex = this.tasks.findIndex(task => task.code === taskCode);
      if (taskIndex !== -1) {
        this.tasks[taskIndex].done = true;
        this.taskCompleted.emit(taskCode);
      }
    }

    deleteTask(taskCode: number) {
      this.tasks = this.tasks.filter(task => task.code !== taskCode);
      this.taskDeleted.emit(taskCode);
    }

    
}
