import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../service.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-add-task',
  standalone: false,

  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  cardFormulario: FormGroup;

  @Output() taskCriada = new EventEmitter<Task>();

  statusOptions = [
    { value: 1, label: 'A fazer' },
    { value: 2, label: 'Em andamento' },
    { value: 3, label: 'Concluído' }
  ];

  constructor(
    private fb: FormBuilder,
    private service: ServiceService
  ) {
    this.cardFormulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      descricao: ['', [Validators.required, Validators.minLength(1)]],
      horasPlanejadas: ['', [Validators.required, Validators.min(0)]],
      status: [null, Validators.required],
      proprietario: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.cardFormulario.valid) {
      const formValue = this.cardFormulario.value;

      const task: Task = {
        name: formValue.nome,
        description: formValue.descricao,
        planned_hours: formValue.horasPlanejadas,
        status: formValue.status,
        owner: +formValue.proprietario
      };

      this.service.criarTasks(task).subscribe({
        next: (response) => {
          console.log('Task criada com sucesso:', response);
          this.taskCriada.emit(response);
          this.cardFormulario.reset();
        },
        error: (error) => {
          console.error('Erro ao criar task:', error);
        }
      });
    }
  }
}


