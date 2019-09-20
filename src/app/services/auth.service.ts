import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}

  login(creds) {
    const { username, password } = creds;
    if (username === "admin" && password === "admin") {
      localStorage.setItem("user", username);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem("user");
  }

  checkUser() {
    return localStorage.getItem("user");
  }
}
