import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  user: any = null;

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit() {
    this.user = this._authService.checkUser();
  }

  logout() {
    this._authService.logout();
    this._router.navigate(["/"]);
  }
}
