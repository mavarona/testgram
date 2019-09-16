import { Injectable } from "@angular/core";
import { Post } from "src/app/models/post";

@Injectable({
  providedIn: "root"
})
export class PostService {
  posts: Array<Post> = [
    new Post(
      1,
      "Coding",
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    ),
    new Post(
      2,
      "Nature",
      "data:image/jpeg;base64,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"
    ),
    new Post(
      3,
      "Trail",
      "https://uecluster.blob.core.windows.net/images/correresdevalientes/1558521181_trail-principal.jpg"
    ),
    new Post(
      4,
      "Chess",
      "https://i1.wp.com/www.studioannecarltongames.com/wp-content/uploads/2017/10/Robin-Hood-Board.jpg?fit=600%2C450&ssl=1"
    ),
    new Post(
      5,
      "Movies",
      "https://cdn.pocket-lint.com/r/s/320x/assets/images/147514-tv-feature-mcu-timeline-image1-afwayzzuxb.jpg?v1"
    )
  ];

  constructor() {}

  getPost(): Array<Post> {
    return this.posts;
  }

  addPost(post: any): void {
    const newPost = new Post(
      this.posts.length + 1,
      post.caption,
      post.description,
      post.imageUrl
    );
    this.posts.push(newPost);
  }

  removePost(id: number): void {
    let index = -1;

    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id === id) {
        index = i;
        break;
      }
    }

    this.posts.splice(index, 1);
  }
}
