import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  selectedEmpleado: Empleado;
  empleados: Empleado[];
  readonly URL_API = 'https://tareas-ten.vercel.app/api/empleados';

  constructor(private http: HttpClient) {
    this.selectedEmpleado = new Empleado();
    this.empleados = [];
  }

  obtenerEmpleados() {
    return this.http.get<Empleado[]>(this.URL_API);
  }

  crearEmpleado(empleado: Empleado) {
    return this.http.post(this.URL_API, empleado);
  }

  actualizarEmpleado(empleado: Empleado) {
    return this.http.put(this.URL_API + `/${empleado._id}`, empleado);
  }

  eliminarEmpleado(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}