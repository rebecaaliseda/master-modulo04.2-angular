import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-public-menu',
  standalone: true,
  templateUrl: './public-menu.html',
  styleUrls: ['./public-menu.scss'],
  imports: [CommonModule, MatListModule, RouterModule],
})
export class PublicMenuComponent {}
