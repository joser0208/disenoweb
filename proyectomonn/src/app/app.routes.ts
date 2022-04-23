import {RouterModule, Routes } from '@angular/router';

import {MonederoComponent} from "./monedero/monedero.component";
import {LogInComponent} from "./log-in/log-in.component";
import {InformacionAppComponent} from "./informacion-app/informacion-app.component";


const app_routes: Routes =[
    {path:'Monedero', component: MonederoComponent},
    {path:'LogIn', component: LogInComponent},
    {path:'InformacionApp', component: InformacionAppComponent},
    {path:'**', pathMatch:'full', redirectTo:''}
];
export const app_routing = RouterModule.forRoot(app_routes);