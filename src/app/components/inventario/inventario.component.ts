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
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  Libro:any;
  constructor(
    private conexionService:ConexionService
  ) { }

  ngOnInit(): void {
    this.conexionService.ObtenerLibros().subscribe(respuesta=>{
      console.log(respuesta);
      this.Libro=respuesta;
    });
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if (window.confirm("¿Desea Borrar El Registro?")) {
      this.conexionService.BorrarLibro(id).subscribe((respuesta)=>{
      this.Libro.splice(iControl,1);
    });
    }
    
    
    
  }

}
