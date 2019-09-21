import { Injectable } from "@angular/core";
import { Post } from "src/app/models/post";
import { baseUrl } from "src/app/config/api";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostService {
  apiUrl = baseUrl + "/posts";

  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  getSinglePost(id): Observable<Post> {
    return this.http.get<Post>(this.apiUrl + "/" + id);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl).pipe(
      map(posts => {
        return posts.map(post => {
          post.id = post._id;
          delete post._id;
          return post;
        });
      })
    ); /*.pipe(
      filter((posts, index) => posts.filter(post => post.active))
    )*/
  }

  addPost(data): Observable<Post> {
    data.active = true;
    data.date = new Date();

    return this.http.post<Post>(this.apiUrl, data);
  }

  removePost(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + "/" + id);
  }
}
