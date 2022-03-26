import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  FormRegistro= this.formBuilder.group({
    Nombre: '',
    Apellido: '',
    Correo : '',
    Contrasenna : ''

  });

  FormLogin= this.formBuilder.group({
    Correo: '',
    Contrasenna : '',
    TipoUsuario:'',
    
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
   
    //Este método se ejecuta cuando se abre la página
   // this.GetUsuarios()
  }

  registrar(){
    let x = <HTMLFormElement>document.getElementById("login");
    let y = <HTMLFormElement>document.getElementById("registrar");
    let z = <HTMLDivElement>document.getElementById("btn");
  
      x.style.left="-400px";
      y.style.left="50px";
      z.style.left="100px";
  }
     login(){
    let x = <HTMLFormElement>document.getElementById("login");
    let y = <HTMLFormElement>document.getElementById("registrar");
    let z = <HTMLDivElement>document.getElementById("btn");
        x.style.left="50px";
      y.style.left="450px";
      z.style.left="0px";
  }

  Registro (){
    console.log(this.FormRegistro.value)// PAra saber que tiene el form, los imprime.

    this.http.post("http://localhost:8080/Usuario",this.FormRegistro.value).subscribe()
    this.FormRegistro.reset();
    alert("Se ha registrado como usuario");
  }
 
  Login (){ 

    if(this.FormLogin.value.TipoUsuario == 1){
      this.LoginAdmin();
    }

    else if (this.FormLogin.value.TipoUsuario == 2 ||this.FormLogin.value.TipoUsuario == 3){
      console.log(this.FormLogin.value)
      this.http.post("http://localhost:8080/LoginCliente",this.FormLogin.value).subscribe(resultado=>{ 
        console.log((resultado as Array<any>)[0].Id_usuario)

        localStorage.setItem('Id_usuario', (resultado as Array<any>)[0].Id_usuario);
  
        if ((resultado as Array<any>).length == 0){
          console.log("SORRY USUARIO O PASSWORD EQUIVOCADO")
        }

        else{
          console.log("Inicio sesión correctamente")
          if(this.FormLogin.value.TipoUsuario == 2){
            this.router.navigate(['/PaginaRegistro'])
          }
          else{
            this.router.navigate(['/PaginaChofer'])
          }
        }
        
      })
    }

  }
  LoginAdmin (){
    console.log(this.FormLogin.value)
    this.http.post("http://localhost:8080/LoginAdmin",this.FormLogin.value).subscribe(resultado=>{ 
      console.log(resultado)
     

      if ((resultado as Array<any>).length == 0){
        console.log("SORRY USUARIO O PASSWORD EQUIVOCADO")
      }

      else{
        console.log("Inicio sesión correctamente")
        this.router.navigate(['/PaginaAdministrador'])
      }
    })

  }

  

 /* GetUsuarios (){
    console.log(this.FormRegistro.value)// PAra saber que tiene el form, los imprime.

    // data : guarda lo que retorna el API (select en este caso)
    this.http.get("http://localhost:8080/Admin").subscribe(data=>{
      console.log(data)
    })
  }*/
 
  

}
