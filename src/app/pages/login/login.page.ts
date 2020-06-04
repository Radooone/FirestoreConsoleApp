import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginResponse } from 'src/app/shared/models/LoginReponse';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  public loginData: LoginResponse = {email: '', password: ''};

  constructor(
    public auth: AuthService
  ) {}

  ngOnInit() {
  }

  public login() {
    const email = this.loginData.email;
    const password = this.loginData.password;
    const nickname = this.loginData.nickname;
    this.auth.firebaseSignUp(email, password, nickname);
    // Shorthand version
    console.log(`Email is: ${email} and password is:  ${password}`);

  }

  public fakeLogin() {
    this.loginData = {email: 'radovanlaucik@gmail.com', password: 'Simira'};
  }

  public signOut() {
    this.auth.signOut();
  }

}
