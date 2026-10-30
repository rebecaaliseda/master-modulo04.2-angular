import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-private-header',
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './private-header.html',
  styleUrl: './private-header.scss',
})
export class PrivateHeaderComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  get username(): string {
    return this.authService.getUsername();
  }
}
