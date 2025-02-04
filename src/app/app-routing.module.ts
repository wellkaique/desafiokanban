import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TelaloginComponent} from './telalogin/telalogin.component';
import {TelacadastroComponent} from './telacadastro/telacadastro.component';
import {QuadrokabanComponent} from './quadrokaban/quadrokaban.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {TelaedicaoComponent} from './telaedicao/telaedicao.component';

const routes: Routes = [
  { path: '', component: TelaloginComponent },
  { path: 'cadastro', component: TelacadastroComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'quadro', component: QuadrokabanComponent },
  { path: 'editar/:id', component: TelaedicaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
