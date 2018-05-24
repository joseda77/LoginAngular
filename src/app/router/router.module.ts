import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

const appModule: Routes=[
  {
    path:'',
    component: LoginComponent
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
