import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Task } from '../interfaces/Task';

@Component({
  selector: 'app-formulario-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-tarea.component.html',
  styleUrl: './formulario-tarea.component.css'
})
export class FormularioTareaComponent {
  @Output() clientRegistered = new EventEmitter<Task>(); 
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: '',
      description: '',
      done: false,
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.clientRegistered.emit(formData);
      this.myForm.reset();
    }
  }
}
