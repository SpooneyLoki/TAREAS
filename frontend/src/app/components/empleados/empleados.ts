import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.html',
  styleUrls: ['./empleados.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this.empleadoService.obtenerEmpleados().subscribe((res: any) => {
      this.empleadoService.empleados = res;
    });
  }

  agregarEmpleado(form: NgForm) {
    if (form.value._id) {
      this.empleadoService.actualizarEmpleado(form.value).subscribe((res: any) => {
        this.resetForm(form);
        this.obtenerEmpleados();
      });
    } else {
      this.empleadoService.crearEmpleado(form.value).subscribe((res: any) => {
        this.resetForm(form);
        this.obtenerEmpleados();
      });
    }
  }

  editarEmpleado(empleado: Empleado) {
    this.empleadoService.selectedEmpleado = { ...empleado };
  }

eliminarEmpleado(_id: string) {
    if (confirm('¿Estás seguro de querer eliminarlo?')) {
      this.empleadoService.eliminarEmpleado(_id).subscribe((res: any) => {
        this.obtenerEmpleados();
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }
}