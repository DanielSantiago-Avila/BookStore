import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import{FormGroup,FormBuilder} from '@angular/forms';
import { ConexionService } from 'src/app/service/conexion.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addclientes',
  templateUrl: './addclientes.component.html',
  styleUrls: ['./addclientes.component.css']
})
export class AddclientesComponent implements OnInit {
  formularioDeClientes:FormGroup;
  constructor(
    private _location: Location,
    public formulario:FormBuilder,
    private conexionService:ConexionService,
    private ruteador:Router
    ) {
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

  enviarDatos():any {

    console.log(this.formularioDeClientes.value);
    this.conexionService.AgregarCliente(this.formularioDeClientes.value).subscribe(respuesta=>{
       this.ruteador.navigateByUrl('/cliente');
    });
   
  }

}
