import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  user:string='';
  pwd :string='';
  login=false;
  constructor(private autenticacion: AutenticacionService, private router: Router){}

  Logearse(){
    //Ejecucion de una api para obtener credenciales

    if(this.user=='admin' && this.pwd=='admin'){
      this.login=true;
    } else {
      this.login=false;
    }

  }


  // habilitar(){
  //   if(this.userName==''||this.password==''){
  //       this.habilitado=true;
  //   }else{
  //       this.habilitado = false;
  //   }
  // }
}
