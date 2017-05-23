import { Component, OnInit }              from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthenticationService } from "app/services/authentication.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _authenticationService: AuthenticationService) { // <--- inject FormBuilder
  }

  ngOnInit() {
    this.createForm();

  }
  createForm() {
    this.loginForm = this._fb.group({
      email: this.email,
      password: this.password // <--- the FormControl called "name"
    });
  }

  login() {
    this._authenticationService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this._router.navigate(['/']);
                }
            });
  }

}
