import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/models/login';
import { Registro } from 'src/app/shared/models/registro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login;
  registro: Registro;

  constructor() { }

  ngOnInit() {
      this.login = new Login();
      this.registro = new Registro();
  }

  efetuarLogin() {
    console.log(this.login);
  }

  efetuarCadastro() {
    console.log(this.registro);
  }

}
