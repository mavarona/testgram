import { Component, OnInit } from "@angular/core";
import { PostService } from "src/app/services/post.service";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
