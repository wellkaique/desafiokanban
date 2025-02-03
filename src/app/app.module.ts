import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatError, MatInputModule, MatLabel} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TelaloginComponent } from './telalogin/telalogin.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import { TelacadastroComponent } from './telacadastro/telacadastro.component';
import {AppRoutingModule} from './app-routing.module';
import { QuadrokabanComponent } from './quadrokaban/quadrokaban.component';
import { AddTaskComponent } from './add-task/add-task.component';
import {MatOption, MatSelect} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import {MatIcon} from '@angular/material/icon';
import {MatDivider} from '@angular/material/divider';
import { TelaedicaoComponent } from './telaedicao/telaedicao.component';


@NgModule({
  declarations: [AppComponent, TelaloginComponent, TelacadastroComponent, QuadrokabanComponent, AddTaskComponent, TelaedicaoComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterOutlet,
    RouterLink,
    MatSelect,
    MatOption,
    HttpClientModule,
    MatError,
    MatLabel,
    MatIcon,
    MatDivider

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
