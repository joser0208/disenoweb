import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info-chofer',
  templateUrl: './info-chofer.component.html',
  styleUrls: ['./info-chofer.component.css']
})
export class InfoChoferComponent implements OnInit {
  FormChofer= this.formBuilder.group({
    Nombre: '',
    Apellido: '',
    Correo: '',
    Saldo: '',
    Id_usuario: ''
  });

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) {
      this.RutaID_Chofer();
     }

  ngOnInit(): void {
  }


  RutaID_Chofer(){
    this.http.get<any>("http://localhost:8080/RutaChofer/" + localStorage.getItem('Chofer')).subscribe(data=>{
      console.log(data[0])
      this.FormChofer.setValue(data[0])
      console.log(this.FormChofer.value)
    })
}


}
