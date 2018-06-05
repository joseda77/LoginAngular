import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './router/router.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServicioService } from './Service/servicio.service';
import { ListaclientesComponent } from './listaclientes/listaclientes.component';
import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaclientesComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpModule
  ],
  providers: [ ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
