import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-chofer',
  templateUrl: './registro-chofer.component.html',
  styleUrls: ['./registro-chofer.component.css']
})
export class RegistroChoferComponent implements OnInit {
  FormRegistroChofer = this.formBuilder.group({
    Nombre: '',
    Apellido: '',
    Correo: '',
    Contrasenna: ''

  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    //Este método se ejecuta cuando se abre la página
    // this.GetUsuarios()
  }

  RegistroChofer() {
    console.log(this.FormRegistroChofer.value)// PAra saber que tiene el form, los imprime.

    this.http.post("http://localhost:8080/UsuarioChofer", this.FormRegistroChofer.value).subscribe()
    this.FormRegistroChofer.reset();
    alert("Nuevo chofer creado");
  }
}
