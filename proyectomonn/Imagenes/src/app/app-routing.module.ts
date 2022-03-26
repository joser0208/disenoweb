import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { ChoferComponent } from './chofer/chofer.component';
import { InformacionAppComponent } from './informacion-app/informacion-app.component';
import { LogInComponent } from './log-in/log-in.component';
import { MonederoComponent } from './monedero/monedero.component';
import { PagoComponent } from './pago/pago.component';
import { PruebaComponent } from './prueba/prueba.component';
import { RecargasComponent } from './recargas/recargas.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RegistroAdministradorComponent } from './registro-administrador/registro-administrador.component';
import { RegistroChoferComponent } from './registro-chofer/registro-chofer.component';
import { RutasAdminComponent } from './rutas-admin/rutas-admin.component';
import { RutasComponent } from './rutas/rutas.component';
import { RutaPasajeroComponent } from './ruta-pasajero/ruta-pasajero.component';
import { EliminarClientesComponent } from './eliminar-clientes/eliminar-clientes.component';
import { InfoChoferComponent } from './info-chofer/info-chofer.component';

const routes: Routes =
[
{path:'PaginaRegistro', component:RegistrarComponent},
{path:'PaginaLogin', component:LogInComponent},
{path:'PaginaRegistroChofer', component:RegistroChoferComponent},
{path:'PaginaPrueba', component:PruebaComponent},
{path:'PaginaAdministrador', component:AdministradorComponent},
{path:'PaginaMonedero', component:MonederoComponent},
{path:'PaginaChofer', component:ChoferComponent},
{path:'PaginaRegistroAdmin', component:RegistroAdministradorComponent},
{path:'PaginaSobreNosotros', component:InformacionAppComponent},
{path:'PaginaRutas', component:RutasComponent},
{path:'PaginaRecargas', component:RecargasComponent},
{path:'PaginaPago', component:PagoComponent},
{path:'PaginaRutasAdmin', component:RutasAdminComponent},
{path:'PaginaRutaPasajero',component:RutaPasajeroComponent},
{path:'PaginaEliminarClientes',component:EliminarClientesComponent},
{path:'PaginaInfChofer',component:InfoChoferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
