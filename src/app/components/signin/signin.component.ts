import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SigninModel } from '../../models/signin.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user = new SigninModel();
  loginError = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSignIn() {
    this.authService.signIn(this.user).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('token', data.token);
      this.router.navigate(['/wallets']);
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
        this.loginError = true;
      });
  }

  onChange() {
    this.loginError = false;
  }
}
