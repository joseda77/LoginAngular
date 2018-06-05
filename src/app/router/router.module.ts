import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ListaclientesComponent } from '../listaclientes/listaclientes.component';
import { ClienteComponent } from '../cliente/cliente.component';

const appModule: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'listaclientes',
    component: ListaclientesComponent
  },
  {
    path: 'nuevoCliente',
    component: ClienteComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appModule, {})
  ],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class AppRouterModule { }
