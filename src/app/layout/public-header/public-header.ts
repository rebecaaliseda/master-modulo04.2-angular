import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-public-header',
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './public-header.html',
  styleUrl: './public-header.scss',
})
export class PublicHeaderComponent {}
