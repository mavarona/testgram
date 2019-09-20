import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TestgramComponent } from "./components/testgram/testgram.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { PostFormComponent } from "./components/testgram/post-form/post-form.component";
import { PageNotFoundComponent } from "./components/shared/page-not-found/page-not-found.component";

const routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/login"
  },
  {
    path: "home",
    component: TestgramComponent
  },
  {
    path: "post/add",
    component: PostFormComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
