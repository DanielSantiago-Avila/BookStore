import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/service/conexion.service';
import { cliente } from 'src/app/service/cliente';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],

})
export class ClientesComponent {
  Cliente:any;
  constructor(
    private conexionService:ConexionService
  ) { }

  ngOnInit(): void {
    this.conexionService.ObtenerCliente().subscribe(respuesta=>{
      console.log(respuesta);
      this.Cliente=respuesta;
    });
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if (window.confirm("¿Desea Borrar El Registro?")) {
      this.conexionService.BorrarCliente(id).subscribe((respuesta)=>{
      this.Cliente.splice(iControl,1);
    });
    }
    
    
    
  }
 
}
