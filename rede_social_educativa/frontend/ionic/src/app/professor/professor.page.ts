import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professor',
  templateUrl: 'professor.page.html',
  styleUrls: ['professor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ProfessorPage implements OnInit {
  userName: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = 'Professor';
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/home']);
  }
}