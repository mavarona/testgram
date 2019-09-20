import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { PostFormComponent } from "./post-form/post-form.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";

const routes: Routes = [
  { path: "", component: ProfileComponent },
  { path: "post/add", component: PostFormComponent },
  { path: "post/detail/:id", component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestgramRoutingModule {}
