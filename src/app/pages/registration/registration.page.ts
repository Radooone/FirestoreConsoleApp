import { Component, OnInit } from '@angular/core';
import { LoginResponse } from 'src/app/shared/models/LoginReponse';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public loginData: LoginResponse = {email: '', password: ''};

  constructor(
    public auth: AuthService
  ) {}

  ngOnInit() {
  }


  public signUp() {
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
