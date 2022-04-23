import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { LogInComponent } from './log-in/log-in.component';
import { TestComponent } from './test/test.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MonederoComponent } from './monedero/monedero.component';
import { InformacionAppComponent } from './informacion-app/informacion-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { app_routing } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    LogInComponent,
    TestComponent,
    PruebaComponent,
    MonederoComponent,
    InformacionAppComponent,
   
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
