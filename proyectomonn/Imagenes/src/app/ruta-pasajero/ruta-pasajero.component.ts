import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-pasajero',
  templateUrl: './ruta-pasajero.component.html',
  styleUrls: ['./ruta-pasajero.component.css']
})
export class RutaPasajeroComponent implements OnInit {
  Rutas:any[]=[];

  constructor(private http: HttpClient, private router: Router) { 
    this.Ruta();
    
  }

  ngOnInit(): void {
  }

  Ruta() {

    this.http.get<any>("http://localhost:8080/Ubicacion").subscribe(resultado => {
      this.Rutas = resultado
      console.log(this.Rutas)
     
    })    

  }
  IrPago(Id_Parada: number){
    console.log(Id_Parada);
    this.router.navigate(['/PaginaPago'])
    localStorage.setItem("Parada", Id_Parada.toString());
  }
}