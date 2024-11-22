import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from '@angular/forms';
import { ConexionService } from 'src/app/service/conexion.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-addinventario',
  templateUrl: './addinventario.component.html',
  styleUrls: ['./addinventario.component.css']
})
export class AddinventarioComponent implements OnInit {
  formularioDeLibro:FormGroup;
  constructor(
    private _location: Location,
    public formulario:FormBuilder,
    private conexionService:ConexionService,
    private ruteador:Router
  ) { 
    this.formularioDeLibro=this.formulario.group({
      nombre:[''],
      autor:[''],
      tipo:[''],
    });
  }

  goBack(){
    this._location.back();
  }

  ngOnInit(): void {
  }

  enviarDatos():any {

    console.log(this.formularioDeLibro.value);
      this.conexionService.AgregarLibro(this.formularioDeLibro.value).subscribe(respuesta=>{
       this.ruteador.navigateByUrl('/inventario');
    });
   
  }

}
