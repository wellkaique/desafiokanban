import {Component, OnInit} from '@angular/core';
import { Task } from '../../models/task';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-quadrokaban',
  standalone: false,

  templateUrl: './quadrokaban.component.html',
  styleUrl: './quadrokaban.component.css'
})
export class QuadrokabanComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.carregarTasks();
  }

  // get pra pegar as tarefas que criamos
  carregarTasks() {
    this.service.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
      },
    });
  }

  getTasksStatus(status: number): Task[] {
    return this.tasks.filter(task => task.status === status);
  }
}
