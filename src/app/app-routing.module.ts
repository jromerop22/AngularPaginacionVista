import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './componentes/login/login.component';
import { VistaClientesComponent } from './componentes/vista-clientes/vista-clientes.component';
const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'login', component: LoginComponent },
  { path:'vista', component: VistaClientesComponent },
  { path:'**', component: LoginComponent },
];

export const AppRoutingProviders: any[] = [];
export const Routing : ModuleWithProviders = RouterModule.forRoot(routes);

