import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { PublicHeaderComponent } from './layout/public-header/public-header';
import { PrivateHeaderComponent } from './layout/private-header/private-header';
import { PublicMenuComponent } from './layout/public-menu/public-menu';
import { PrivateMenuComponent } from './layout/private-menu/private-menu';
import { FooterComponent } from './layout/footer/footer';

import { AuthService } from './services/auth';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    MatListModule,
    MatToolbarModule,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    PublicMenuComponent,
    PrivateMenuComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  constructor(public auth: AuthService) {}
}
