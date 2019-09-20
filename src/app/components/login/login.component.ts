import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { MessageService } from "../../services/message.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _messageService: MessageService
  ) {}

  ngOnInit() {}

  login() {
    if (this._authService.login(this.model)) {
      this._router.navigate(["/profile"]);
    } else {
      this._messageService.setMsg({
        msg: "Invalid credentials",
        type: "danger"
      });
    }
  }
}
