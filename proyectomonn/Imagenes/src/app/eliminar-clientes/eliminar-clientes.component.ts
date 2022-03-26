import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-clientes',
  templateUrl: './eliminar-clientes.component.html',
  styleUrls: ['./eliminar-clientes.component.css']
})
export class EliminarClientesComponent implements OnInit {
  Eliminar_Clientes:any[]=[];

  constructor(private http: HttpClient, private router: Router) { 
    this.Eliminar_Cliente();
    }

  ngOnInit(): void {
  }
  Eliminar_Cliente() {

    this.http.get<any>("http://localhost:8080/Usuario_Pasajero").subscribe(resultado => {
      this.Eliminar_Clientes = resultado
      console.log(this.Eliminar_Clientes)

    })    

  }
  BorrarCliente (Id_usuario:number){
    console.log(Id_usuario);
    this.http.get<any>("http://localhost:8080/Elimina_Clientes"+ Id_usuario).subscribe()

    for(var i = 0; i < this.Eliminar_Clientes.length; i ++){
      if(this.Eliminar_Clientes[i].Id_usuario == Id_usuario){
        this.Eliminar_Clientes.splice(i, 1);
        alert("Se ha eliminado un cliente");
        break;
      }
    }
  }
}
