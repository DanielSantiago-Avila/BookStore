import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/service/conexion.service';
import { Router ,ActivatedRoute} from '@angular/router';
import{FormGroup,FormBuilder} from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {
  formularioDeClientes:FormGroup;
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
    this.conexionService.buscarCliente(this.elID).subscribe(respuesta=>{
      console.log(respuesta);
      this.formularioDeClientes.setValue({
        nombre:respuesta[0]['nombre'],
        apellido:respuesta[0]['apellido'],
        dpi:respuesta[0]['dpi'],
        telefono:respuesta[0]['telefono'],
        correo:respuesta[0]['gmail']
      });
    });
    this.formularioDeClientes=this.formulario.group({
      nombre:[''],
      apellido:[''],
      dpi:[''],
      telefono:[''],
      correo:['']
    });
   }

   goBack(){
    this._location.back();
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeClientes.value);
    this.conexionService.editarCliente(this.elID,this.formularioDeClientes.value).subscribe(()=>{});
    this.ruteador.navigateByUrl('/cliente');
  }

}
