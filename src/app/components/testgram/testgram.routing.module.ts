import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { PostFormComponent } from "./post-form/post-form.component";

const routes: Routes = [
  { path: "", component: ProfileComponent },
  { path: "posts/add", component: PostFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestgramRoutingModule {}
