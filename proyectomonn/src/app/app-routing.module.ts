import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionAppComponent } from './informacion-app/informacion-app.component';
import { LogInComponent } from './log-in/log-in.component';
import { MonederoComponent } from './monedero/monedero.component';
import { PruebaComponent } from './prueba/prueba.component';
import { RegistrarComponent } from './registrar/registrar.component';


const routes: Routes =
[
{path:'PaginaRegistro', component:RegistrarComponent},
{path:'PaginaLogin', component:LogInComponent},
{path:'PaginaPrueba', component:PruebaComponent},
{path:'PaginaMonedero', component:MonederoComponent},
{path:'PaginaSobreNosotros', component:InformacionAppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
