import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

loginModel = new User();

mensagem = ""

usuarioLogado = ""

enviar () {
  alert("Verificando Login")
}

onSubmit() {
  console.log(this.loginModel)

  this.loginService.login(this.loginModel).subscribe((response) => {
    console.log("Logado com sucesso!")
    this.router.navigateByUrl("perfil")
  },
  (respostaErro) => {
    this.mensagem = respostaErro.error
  }
  )
}
}
