import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { cliente} from './cliente';
import { Libro } from './libro';
import {empleado} from './empleado'
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  API:string='http://localhost/bookstore/server.php'
  constructor(private clienteHttp:HttpClient) { }

  //---------------------LOGIN---------------------------
  Login(datosEmpleado:empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?consultarempleado",datosEmpleado);
  }

  // ------------------ Consultas Clientes ---------
  ObtenerCliente(){
    return this.clienteHttp.get(this.API+"?allclientes");
  }

  AgregarCliente(datosCliente:cliente):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertarcliente=1",datosCliente);
  }

  editarCliente(id:any,datosCliente:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizarcliente="+id,datosCliente);
  }
  buscarCliente(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultarcliente="+id);
  }
  BorrarCliente(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrarcliente="+id);
  }

  //--------------------------------------
  //---------------Inventario--------------
  ObtenerLibros(){
    return this.clienteHttp.get(this.API+"?alllibros");
  }
  AgregarLibro(datosLibro:Libro):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertarlibro=1",datosLibro);
  }
  BorrarLibro(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrarlibro="+id);
  }
  rentarLibro(id:any,datosLibro:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?rentarlibro="+id,datosLibro);
  }
  buscarLibro(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultarlibro="+id);
  }
  editarLibro(id:any,datosLibro:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizarlibro="+id,datosLibro);
  }
  //--------------------------------------
  BorrarEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }
  ObtenerEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }
  editarEmpleado(id:any,datosEmpleado:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosEmpleado);
  }
  

}
