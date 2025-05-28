import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.page.html',
  styleUrls: ['cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class CadastroPage {
  userData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'aluno'
  };
  errorMessage: string = '';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  async register() {
    if (this.userData.password !== this.userData.confirmPassword) {
      this.errorMessage = 'As senhas não coincidem';
      return;
    }

    try {
      await this.http.post('http://localhost:5000/api/auth/register', {
        name: this.userData.name,
        email: this.userData.email,
        password: this.userData.password,
        role: this.userData.role
      }).toPromise();
      
      this.router.navigate(['/home']);
    } catch (error) {
      this.errorMessage = 'Erro ao cadastrar. Tente novamente.';
      console.error(error);
    }
  }

  goToLogin() {
    this.router.navigate(['/home']);
  }
}