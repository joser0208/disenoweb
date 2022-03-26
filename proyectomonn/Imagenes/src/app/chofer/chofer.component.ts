import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.css']
})
export class ChoferComponent implements OnInit {
  Choferes: any[] = [];
  Paradas: any[] = [];

  constructor(private http: HttpClient,
    private router: Router) { 
      this.Chofer()
      this.ParadaChofer()
    }

  ngOnInit(): void {
  }
  Chofer() {
    this.http.get<any>("http://localhost:8080/SelectChoferes/"+ localStorage.getItem('Id_usuario')).subscribe(resultado => {
      this.Choferes = resultado
      console.log(this.Choferes)
    })
  }

  ConsultarChofer(Id_usuario: number){
    console.log(Id_usuario);
    this.router.navigate(['/PaginaInfChofer'])
    localStorage.setItem("Chofer", Id_usuario.toString());
  }

  ParadaChofer(){
    this.http.get<any>("http://localhost:8080/ParadasChofer/"+ localStorage.getItem('Id_usuario')).subscribe(resultado => {
      this.Paradas = resultado
      console.log(this.Paradas)
    })
  }
}

