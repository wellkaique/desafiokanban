import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-telacadastro',
  standalone: false,

  templateUrl: './telacadastro.component.html',
  styleUrl: './telacadastro.component.css'
})
export class TelacadastroComponent implements OnInit{
  cadastroFormulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient, // Injete o HttpClient
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cadastroFormulario = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(150), Validators.pattern(/^[\w.@+-]+$/)]],
      password: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(128)]],
      firstName: ['', [Validators.maxLength(150)]],
      lastName: ['', [Validators.maxLength(150)]],
      email: ['', [Validators.email, Validators.maxLength(254)]]
    });
  }

  onSubmit(): void {
    if (this.cadastroFormulario.valid) {
      const userData = this.cadastroFormulario.value;

      // Envia os dados para o backend
      this.http.post('http://localhost:8000/api/users/', userData).subscribe({
        next: (response) => {
          console.log('Usuário cadastrado!', response);
          this.router.navigate(['']);
        },
        error: (erro) => {
          console.error('Erro no cadastro:', erro);
        }
      });
    }
  }

}
