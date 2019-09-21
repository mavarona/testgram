export class Post {
  _id: number;
  caption: string;
  description: string;
  imageUrl: string;
  active: boolean;
  date: Date;

  constructor(id: number, caption: string, imageUrl: string, description = "") {
    this._id = id;
    this.caption = caption;
    this.imageUrl = imageUrl;
    this.description = description;
    this.active = true;
    this.date = new Date();
  }
}
