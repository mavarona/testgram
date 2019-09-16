import { Component, OnInit, Input } from "@angular/core";
import { PostService } from "src/app/services/post.service";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  posts: Array<Post> = new Array<Post>();

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPost();
  }
}
