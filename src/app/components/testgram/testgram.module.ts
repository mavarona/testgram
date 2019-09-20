import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TestgramRoutingModule } from "./testgram.routing.module";

import { TestgramComponent } from "./testgram.component";
import { ProfileComponent } from "./profile/profile.component";
import { SummaryComponent } from "./profile/summary/summary.component";
import { PostListComponent } from "./profile/post-list/post-list.component";
import { PostItemComponent } from "./profile/post-list/post-item/post-item.component";
import { PostFormComponent } from "./post-form/post-form.component";

@NgModule({
  declarations: [
    TestgramComponent,
    ProfileComponent,
    SummaryComponent,
    PostListComponent,
    PostItemComponent,
    PostFormComponent
  ],
  imports: [CommonModule, FormsModule, TestgramRoutingModule],
  exports: [TestgramComponent]
})
export class TestgramModule {}
