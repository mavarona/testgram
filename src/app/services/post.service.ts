import { Injectable } from "@angular/core";
import { Post } from "src/app/models/post";
import { baseUrl } from "src/app/config/api";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostService {
  apiUrl = baseUrl + "/posts";

  posts: Array<Post> = new Array<Post>();

  constructor(private _http: HttpClient) {}

  getPost(): Observable<Array<Post>> {
    return this._http.get<Array<Post>>(this.apiUrl);
  }

  addPost(newPost: any): Observable<Post> {
    newPost.active = true;
    newPost.date = new Date();
    return this._http.post<Post>(this.apiUrl, newPost);
  }

  removePost(id: number): Observable<any> {
    return this._http.delete(this.apiUrl + "/" + id);
  }
}
