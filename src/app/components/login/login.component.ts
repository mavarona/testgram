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
    this._authService.login(this.model).subscribe(
      () => {
        this._router.navigate(["/profile"]);
      },
      err => {
        this._messageService.setMsg({
          msg: "Invalid Credentials.",
          type: "danger"
        });
      }
    );
  }
}
