import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-administrador',
  templateUrl: './registro-administrador.component.html',
  styleUrls: ['./registro-administrador.component.css']
})
export class RegistroAdministradorComponent implements OnInit {
  FormRegistroAdmin= this.formBuilder.group({
    Correo : '',
    Contrasenna : ''

  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
   
    //Este método se ejecuta cuando se abre la página
   // this.GetUsuarios()
  }

  RegistroAdmin(){
    console.log(this.FormRegistroAdmin.value)// PAra saber que tiene el form, los imprime.

    this.http.post("http://localhost:8080/Admin",this.FormRegistroAdmin.value).subscribe()
    this.FormRegistroAdmin.reset();
    alert("Nuevo administrador ha sido creado");
  }
}