import { Component, OnInit } from '@angular/core';
import { SignupModel } from '../../models/signup.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new SignupModel();
  confirmPassword = "";
  differentPasswords = false;
  registrationError = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSignUp(): void {
    if (this.user.password != this.confirmPassword) {
      this.differentPasswords = true;
      return;
    }
  
    this.authService.signUp(this.user).subscribe((data: any) => {
      console.log("data");
      this.router.navigate(['']);
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
        this.registrationError = true;
      });
  }

  onPasswordChange() {
    this.differentPasswords = false;
    this.registrationError = false;
    console.log("Password: " + this.differentPasswords);
    console.log("Model: " + this.registrationError);
  }

  onChange() {
    this.registrationError = false;
    console.log("Password: " + this.differentPasswords);
    console.log("Model: " + this.registrationError);
  }
}
