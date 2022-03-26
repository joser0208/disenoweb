import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  Clientes:any[]=[];

  constructor(private http: HttpClient, private router: Router) { 
    this.Traer_Clientes();}

  ngOnInit(): void {
  }
  Traer_Clientes() {

    this.http.get<any>("http://localhost:8080/Usuario_Pasajero").subscribe(resultado => {
      this.Clientes = resultado
      console.log(this.Clientes)
    })    

  }
}
