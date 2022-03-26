import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-monedero',
  templateUrl: './monedero.component.html',
  styleUrls: ['./monedero.component.css']
})
export class MonederoComponent implements OnInit {
  FormMonedero= this.formBuilder.group({
    Numero_Tarjeta: '',
    Mes: '',
    Ano : '',
    Codigo : '',
    Id_usuario: localStorage.getItem('Id_usuario')

  });


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
   
    //Este método se ejecuta cuando se abre la página
   // this.GetUsuarios()
  }

  Monedero(){
    console.log(this.FormMonedero.value)// PAra saber que tiene el form, los imprime.

    this.http.post("http://localhost:8080/Tarjeta_Banco",this.FormMonedero.value).subscribe()
    this.FormMonedero.reset();
    alert("Se ha creado su monedero");
  }
}