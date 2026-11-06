import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css'
})
export class EmpleadosComponent implements OnInit {

  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  agregarEmpleado(form: any) {
    if (form.value._id) {
      this.empleadoService.putEmpleado(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getEmpleados();
        });
    } else {
      this.empleadoService.postEmpleado(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getEmpleados();
        });
    }
  }

  getEmpleados() {
    this.empleadoService.getEmpleados()
      .subscribe(res => {
        this.empleadoService.empleados = res as Empleado[];
      });
  }

  editarEmpleado(empleado: Empleado) {
    this.empleadoService.selectedEmpleado = empleado;
  }

  eliminarEmpleado(_id: string, form: any) {
    if(confirm('¿Estás seguro de querer eliminar este registro?')) {
      this.empleadoService.deleteEmpleado(_id)
        .subscribe(res => {
          this.getEmpleados();
          this.resetForm(form);
        });
    }
  }

  resetForm(form?: any) {
    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }
}