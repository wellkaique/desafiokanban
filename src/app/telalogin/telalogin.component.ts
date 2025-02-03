import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-telalogin',
  standalone: false,

  templateUrl: './telalogin.component.html',
  styleUrl: './telalogin.component.css'
})
export class TelaloginComponent {
  //=============== gambiarra do login kkkkkk ===================
  loginFormulario: FormGroup;

  constructor(
      private fb: FormBuilder,
      private http: HttpClient,
      private router: Router
  ) {
    this.loginFormulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    }); //armazenando o email
  }

  //quando concluir o formulario 👌
  onSubmit(): void {
    if (this.loginFormulario.valid) {
      const email = this.loginFormulario.value.email;   //VAI PEGAR SÓ O EMAIL DIGITADO

      this.http.get<any[]>('http://localhost:8000/api/users/').subscribe({ //GET PRA PEGAR OS EMAILS
        next: (users) => {
          const userExists = users.some(user => user.email === email); //some = ELE ITERA E VÊ SE UMA DAS ARRAYS PASSA NO TESTE |

          if (userExists) {
            console.log('Email válido!');
            this.router.navigate(['/quadro']); // Redireciona pra tela de quadro
          } else {
            console.error('Email não encontrado'); // debugzinho de leve
          }
        },
      });
    }
  }
}
