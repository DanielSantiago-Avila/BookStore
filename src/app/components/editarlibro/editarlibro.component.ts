import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/service/conexion.service';
import { Router ,ActivatedRoute} from '@angular/router';
import{FormGroup,FormBuilder} from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editarlibro',
  templateUrl: './editarlibro.component.html',
  styleUrls: ['./editarlibro.component.css']
})
export class EditarlibroComponent implements OnInit {
  formularioDeLibro:FormGroup;
  elID:any;
  constructor(
    private _location: Location,
    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private conexionService:ConexionService,
    private ruteador:Router
  ) {
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.conexionService.buscarLibro(this.elID).subscribe(respuesta=>{
      console.log(respuesta);
      this.formularioDeLibro.setValue({
        nombre_libro:respuesta[0]['nombre_libro'],
        autor:respuesta[0]['autor'],
        tipo:respuesta[0]['tipo']
      });
    });
    this.formularioDeLibro=this.formulario.group({
      nombre_libro:[''],
      autor:[''],
      tipo:['']
    });
   }

   goBack(){
    this._location.back();
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeLibro.value);
    this.conexionService.editarLibro(this.elID,this.formularioDeLibro.value).subscribe(()=>{});
    this.ruteador.navigateByUrl('/inventario');
  }
}
