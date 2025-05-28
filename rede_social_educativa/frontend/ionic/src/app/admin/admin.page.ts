import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AdminPage implements OnInit {
  userName: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = 'Administrador';
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/home']);
  }
}