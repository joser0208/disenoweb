import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.component.html',
  styleUrls: ['./recargas.component.css']
})
export class RecargasComponent implements OnInit {
  FormRecTarjeta= this.formBuilder.group({
    ID_Cuenta: '',
    Monto_Recarga: '',
    Id_usuario : localStorage.getItem('Id_usuario')
    

  });
  Tarjetas: any[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { 
    this.RecuperarTarjeta();
  }

  ngOnInit(): void {
  }

  RecuperarTarjeta(){
    console.log("http://localhost:8080/Tarjeta_Banco/" + localStorage.getItem('Id_usuario'))
    this.http.get<any>("http://localhost:8080/Tarjeta_Banco/" + localStorage.getItem('Id_usuario')).subscribe(data=>{
      this.Tarjetas = data
      console.log(data)
    })

  }
  Recargar(){
    console.log(this.FormRecTarjeta.value)
    this.http.post("http://localhost:8080/Recarga_Tarjeta",this.FormRecTarjeta.value).subscribe()
    this.FormRecTarjeta.reset();
    alert("Se ha realizado su recarga");
  }

}
