import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Output() add = new EventEmitter();

  caption: string = "";
  description: string = "";
  imageUrl: string = "";

  constructor() {}

  ngOnInit() {}

  addPost(): void {
    const post = {
      caption: this.caption,
      description: this.description,
      imageUrl: this.imageUrl
    };
    this.add.emit(post);
  }
}
