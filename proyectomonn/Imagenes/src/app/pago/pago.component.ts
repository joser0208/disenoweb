import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  FormPago = this.formBuilder.group({
    Monto_Pago: '',
    Nombre: '',
    Id_Chofer: '',
    Id_usuario: localStorage.getItem('Id_usuario')
  });
  Choferes: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.RutaID_SelecChofer()
  }

  ngOnInit(): void {
  }
  SelecChofer() {
    this.http.get<any>("http://localhost:8080/Usuario_Chofer").subscribe(data => {
      this.Choferes = data
      console.log(data)
    })


  }

  RutaID_SelecChofer(){
    console.log("http://localhost:8080/Usuario_Chofer/" + localStorage.getItem('Parada'))
    this.http.get<any>("http://localhost:8080/Usuario_Chofer/" + localStorage.getItem('Parada')).subscribe(data=>{
      data[0]['Id_usuario']=localStorage.getItem('Id_usuario')
      console.log(data[0])
      this.FormPago.setValue(data[0])
      console.log(this.FormPago.value)
    })
  }

  Pagar() {
    console.log(this.FormPago.value)
    this.http.post("http://localhost:8080/Pago_Chofer", this.FormPago.value).subscribe()
    this.FormPago.reset();
    alert("Se ha realizado su pago");
    this.router.navigate(['/PaginaRegistro'])
  }
}
