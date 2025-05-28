import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aluno',
  templateUrl: 'aluno.page.html',
  styleUrls: ['aluno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AlunoPage implements OnInit {
  userName: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = 'Aluno';
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/home']);
  }
}