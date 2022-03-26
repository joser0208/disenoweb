import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rutas-admin',
  templateUrl: './rutas-admin.component.html',
  styleUrls: ['./rutas-admin.component.css']
})
export class RutasAdminComponent implements OnInit {
  FormRutas= this.formBuilder.group({
    Tarifa_Parada: '',
    Localizacion: '',
    Id_usuario : localStorage.getItem('Id_usuario'),
    Id_Chofer: ''
  });
  Choferes: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient) { 
      this.SelecChofer();
    }

  ngOnInit(): void {
  }
  SelecChofer(){
    this.http.get<any>("http://localhost:8080/ChoferesRutas").subscribe(data=>{
    this.Choferes = data
    console.log(data)
    })
  }
  EncontrarRuta(){
    console.log(this.FormRutas.value)
    this.http.post("http://localhost:8080/Parada",this.FormRutas.value).subscribe()
    this.FormRutas.reset();
    alert("Se ha creado una nueva ruta");
}

}
