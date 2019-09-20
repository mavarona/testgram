import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private _router: Router) {}

  ngOnInit() {}

  login() {
    const { username, password } = this.model;
    if (username === "admin" && password === "admin") {
      this._router.navigate(["/profile"]);
    }
  }
}
