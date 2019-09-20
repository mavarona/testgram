import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { TestgramComponent } from "./components/testgram/testgram.component";
import { ProfileComponent } from "./components/testgram/profile/profile.component";
import { SummaryComponent } from "./components/testgram/profile/summary/summary.component";
import { PostListComponent } from "./components/testgram/profile/post-list/post-list.component";
import { PostItemComponent } from "./components/testgram/profile/post-list/post-item/post-item.component";
import { PostFormComponent } from "./components/testgram/post-form/post-form.component";
import { GlobalAlertComponent } from "./components/shared/global-alert/global-alert.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    TestgramComponent,
    ProfileComponent,
    SummaryComponent,
    PostListComponent,
    PostItemComponent,
    PostFormComponent,
    GlobalAlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
