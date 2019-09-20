import { Component, OnInit, Input } from "@angular/core";
import { PostService } from "src/app/services/post.service";
import { MessageService } from "src/app/services/message.service";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit {
  posts: Array<Post> = new Array<Post>();
  query = "";

  constructor(
    private postService: PostService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.getPost();
    this.messageService.getMsg().subscribe(() => this.getPost());
  }

  getPost() {
    this.postService.getPost().subscribe((posts: Array<Post>) => {
      this.posts = posts;
    });
  }
}
