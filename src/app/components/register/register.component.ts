import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { passwordMatch, mustContainSymbol } from "./register.validators";
import { AuthService } from "src/app/services/auth.service";
import { MessageService } from "src/app/services/message.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private _router: Router,
    private _builder: FormBuilder,
    private _authService: AuthService,
    private _messageService: MessageService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this._builder.group(
      {
        name: ["", { validators: Validators.required }],
        email: ["", { validators: [Validators.required, Validators.email] }],
        username: ["", { validators: Validators.required }],
        password: [
          "",
          {
            validators: [Validators.required, Validators.minLength(6)]
          }
        ],
        confirmPassword: ""
      },
      {
        validators: passwordMatch
      }
    );
  }

  register() {
    this._authService.register(this.registerForm.value).subscribe(
      () => {
        this._messageService.setMsg({
          msg: "Registration Successful! Please Login",
          type: "success"
        });
        this._router.navigate(["/login"]);
      },
      () => {}
    );
  }
}
