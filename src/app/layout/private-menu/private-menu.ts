import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-private-menu',
  standalone: true,
  templateUrl: './private-menu.html',
  styleUrls: ['./private-menu.scss'],
  imports: [CommonModule, MatListModule, RouterModule],
})
export class PrivateMenuComponent {}
