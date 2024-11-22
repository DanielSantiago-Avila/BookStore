import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from './material.module';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import {HttpClientModule} from'@angular/common/http';
import { AddclientesComponent } from './components/addclientes/addclientes.component'
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { EditarusuarioComponent } from './components/editarusuario/editarusuario.component';
import { AddinventarioComponent } from './components/addinventario/addinventario.component';
import { RentarlibroComponent } from './components/rentarlibro/rentarlibro.component';
import { EditarlibroComponent } from './components/editarlibro/editarlibro.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
    declarations: [
        AppComponent,
        InventarioComponent,
        ClientesComponent,
        AddclientesComponent,
        EditarusuarioComponent,
        AddinventarioComponent,
        RentarlibroComponent,
        EditarlibroComponent,
        LoginComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MaterialModule,
        MatIconModule,
        HttpClientModule
    ]
})
export class AppModule {
 }
