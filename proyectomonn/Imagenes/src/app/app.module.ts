import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { LogInComponent } from './log-in/log-in.component';
import { TestComponent } from './test/test.component';
import { RecargasComponent } from './recargas/recargas.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { RegistroChoferComponent } from './registro-chofer/registro-chofer.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MonederoComponent } from './monedero/monedero.component';
import { InformacionAppComponent } from './informacion-app/informacion-app.component';
import { ChoferComponent } from './chofer/chofer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroAdministradorComponent } from './registro-administrador/registro-administrador.component';
import { RutasComponent } from './rutas/rutas.component';
import { app_routing } from './app.routes';
import { PagoComponent } from './pago/pago.component';
import { RutasAdminComponent } from './rutas-admin/rutas-admin.component';
import { RutaPasajeroComponent } from './ruta-pasajero/ruta-pasajero.component';
import { EliminarClientesComponent } from './eliminar-clientes/eliminar-clientes.component';
import { InfoChoferComponent } from './info-chofer/info-chofer.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    LogInComponent,
    TestComponent,
    RecargasComponent,
    AdministradorComponent,
    RegistroChoferComponent,
    PruebaComponent,
    MonederoComponent,
    InformacionAppComponent,
    ChoferComponent,
    RegistroAdministradorComponent,
    RutasComponent,
    PagoComponent,
    RutasAdminComponent,
    RutaPasajeroComponent,
    EliminarClientesComponent,
    InfoChoferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
