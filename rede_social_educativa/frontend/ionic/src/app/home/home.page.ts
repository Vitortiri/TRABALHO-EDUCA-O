import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class HomePage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  async login() {
    try {
      const response: any = await this.http.post('http://localhost:5000/api/auth/login', {
        email: this.email,
        password: this.password
      }).toPromise();

      localStorage.setItem('token', response.token);
      localStorage.setItem('role', response.role);

      switch(response.role) {
        case 'aluno':
          this.router.navigate(['/aluno']);
          break;
        case 'professor':
          this.router.navigate(['/professor']);
          break;
        case 'admin':
          this.router.navigate(['/admin']);
          break;
        default:
          this.router.navigate(['/home']);
      }
    } catch (error) {
      this.errorMessage = 'Falha no login. Verifique suas credenciais.';
      console.error(error);
    }
  }

  goToCadastro() {
    this.router.navigate(['/cadastro']);
  }
}