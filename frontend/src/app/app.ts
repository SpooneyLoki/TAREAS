import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './components/empleados/empleados';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EmpleadosComponent],
  template: `<app-empleados></app-empleados>`,
  styleUrl: './app.css'
})
export class App {
  title = 'frontend';
}