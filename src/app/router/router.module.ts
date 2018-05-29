import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ListaclientesComponent } from '../listaclientes/listaclientes.component';

const appModule: Routes=[
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'clientes',
    component: ListaclientesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appModule,{})
  ],
  exports:[RouterModule],
  providers: [],
  declarations: []
})
export class AppRouterModule { }
