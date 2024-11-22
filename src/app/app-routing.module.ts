import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AddclientesComponent } from './components/addclientes/addclientes.component';
import { EditarusuarioComponent } from './components/editarusuario/editarusuario.component';
import { AddinventarioComponent } from './components/addinventario/addinventario.component';
import { RentarlibroComponent } from './components/rentarlibro/rentarlibro.component';
import { EditarlibroComponent } from './components/editarlibro/editarlibro.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'editar-libro/:id',component:EditarlibroComponent},
  {path:'rentar-libro/:id',component:RentarlibroComponent},
  {path:'addinventario',component:AddinventarioComponent},
  {path:'inventario',component:InventarioComponent},
  {path:'cliente',component:ClientesComponent},
  {path:'addcliente',component:AddclientesComponent},
  {path:'editar-cliente/:id',component:EditarusuarioComponent},
  {path: '',pathMatch:'full',redirectTo:'login'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
