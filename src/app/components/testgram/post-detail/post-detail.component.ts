import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "src/app/services/post.service";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  post: Post = null;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _postService: PostService
  ) {}

  ngOnInit() {
    const id = this._activatedRoute.snapshot.params.id;
    this._postService.getSinglePost(id).subscribe(post => (this.post = post));
  }
}
