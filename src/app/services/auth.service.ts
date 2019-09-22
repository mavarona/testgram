import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { baseUrl } from "../config/api";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  loginUrl = baseUrl + "/login";
  registerUrl = baseUrl + "/register";

  constructor(private _http: HttpClient) {}

  register(userData) {
    return this._http.post(this.registerUrl, userData);
  }

  login(creds) {
    return this._http.post(this.loginUrl, creds).pipe(
      map(data => {
        localStorage.setItem("user", JSON.stringify(data));
        return data;
      })
    );
  }

  logout() {
    localStorage.removeItem("user");
  }

  checkUser() {
    return localStorage.getItem("user");
  }
}
