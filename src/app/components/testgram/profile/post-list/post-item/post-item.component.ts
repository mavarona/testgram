import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/models/post";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.css"]
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;

  constructor(private postService: PostService) {}

  ngOnInit() {}

  remove() {
    this.postService.removePost(this.post.id);
  }
}
