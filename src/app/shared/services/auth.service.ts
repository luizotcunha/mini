import { Injectable } from '@angular/core';
import { Registro } from '../models/registro';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }
  efetuarLogin(login: Login) {
    console.log(this.login);
    const usuario = <Login>JSON.parse(localStorage.getItem(login.email));
      if (usuario){
        alert
      }
  }

  efetuarCadastro(registro: Registro) {
    console.log(this.registro);
    localStorage.setItem(registro.email, JSON.stringify(registro));
  }

}
