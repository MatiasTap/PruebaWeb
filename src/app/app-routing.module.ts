import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PanelComponent } from './panel/panel.component';



const routes: Routes = [
  {  path: '', component: PanelComponent, pathMatch: 'full'},
  {  path: 'clientes', component: ClientesComponent},
  {  path: 'empleados', component: EmpleadosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
