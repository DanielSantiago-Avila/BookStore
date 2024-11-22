import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/service/conexion.service';
import { Router ,ActivatedRoute} from '@angular/router';
import{FormGroup,FormBuilder} from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-rentarlibro',
  templateUrl: './rentarlibro.component.html',
  styleUrls: ['./rentarlibro.component.css']
})
export class RentarlibroComponent implements OnInit {
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
        disponibilidad:respuesta[0]['disponibilidad'],
        id_cliente:respuesta[0]['id_cliente']
      });
    });
    this.formularioDeLibro=this.formulario.group({
      disponibilidad:[''],
      id_cliente:['']
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
    this.conexionService.rentarLibro(this.elID,this.formularioDeLibro.value).subscribe(()=>{});
    this.ruteador.navigateByUrl('/inventario');
  }

}
