import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const query = args[0].toUpperCase();
    if (typeof query === "undefined") return value;
    return value.filter(post => {
      return post.caption.toUpperCase().indexOf(query) > -1;
    });
  }
}
