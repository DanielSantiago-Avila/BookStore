import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from '@angular/forms';
import { ConexionService } from 'src/app/service/conexion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioDeLogin:FormGroup;
  constructor(
    public formulario:FormBuilder,
    private conexionService:ConexionService,
    private ruteador:Router
  ) {
    
    this.formularioDeLogin=this.formulario.group({
      usuario:[''],
      contrasena:[''],
    });
   }

  ngOnInit(): void {
  }

  enviarDatos():any {

    console.log(this.formularioDeLogin.value);
      this.conexionService.Login(this.formularioDeLogin.value).subscribe(respuesta=>{
        console.log(respuesta);
        
        if (respuesta) {
           this.ruteador.navigateByUrl('/inventario');
        }else{
          console.log('No se puede');
          
          console.log(respuesta);
          
        }
      
    });
   
  }
}
