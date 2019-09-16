import { Component, OnInit } from "@angular/core";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  caption: string = "";
  description: string = "";
  imageUrl: string = "";

  constructor(private postService: PostService) {}

  ngOnInit() {}

  addPost(): void {
    const post = {
      caption: this.caption,
      description: this.description,
      imageUrl: this.imageUrl
    };
    this.postService.addPost(post);
    this.clearForm();
  }

  clearForm() {
    this.caption = "";
    this.description = "";
    this.imageUrl = "";
  }
}
