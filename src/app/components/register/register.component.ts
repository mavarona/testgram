import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { passwordMatch, mustContainSymbol } from "./register.validators";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private _builder: FormBuilder) {}

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
            validators: [
              Validators.required,
              Validators.minLength(6),
              mustContainSymbol
            ]
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
    console.log(this.registerForm.value);
  }
}
