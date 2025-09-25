import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {}