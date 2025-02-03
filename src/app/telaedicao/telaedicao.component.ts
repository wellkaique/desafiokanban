import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-telaedicao',
  standalone: false,

  templateUrl: './telaedicao.component.html',
  styleUrl: './telaedicao.component.css'
})
export class TelaedicaoComponent implements OnInit{
  formulario: FormGroup;
  idDaTask!: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private taskService: ServiceService
  ) {
    this.formulario = this.formBuilder.group({
      name: [''],
      description: [''],
      planned_hours: [''],
      status: [''],
      owner: ['']
    });
  }

  ngOnInit() {
    this.idDaTask = +this.route.snapshot.paramMap.get('id')!;

    // Carrega os dados da task
    this.taskService.getTaskById(this.idDaTask).subscribe({
      next: (task) => {
        this.formulario.patchValue(task); // preenche o formulário
      },
    });
  }

  salvar() {
    const taskAtualizada = this.formulario.value;
    this.taskService.updateTask(this.idDaTask, taskAtualizada).subscribe({
      next: () => {
        this.router.navigate(['/quadro']); // volta para o quadro após salvar
      },
    });
  }

  cancelar() {
    this.router.navigate(['/quadro']); // volta sem salvar
  }
}
