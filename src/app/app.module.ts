import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { VistaClientesComponent } from './componentes/vista-clientes/vista-clientes.component';

import { Routing , AppRoutingProviders } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VistaClientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Routing,
    NgbModule    
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }
