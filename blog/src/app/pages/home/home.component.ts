import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  listArticle: any[];
  listCategory: any[];
  constructor() {
    this.listArticle = [
      {
        "id": 1,
        "title": "novel 1",
        "content": "this is first novel",
        "created_at": "09/05/2017 01:02:00",
        "updated_at": "09/05/2017 01:02:00",
        "picture": "abc123.png",
        "category":
            {
              "id": 1,
              "name": "novel"
            },
        "user":
          {
            "id": 1,
            "email": "lvtho129@gmail.com",
            "avatar": "abc123.png",
          }
      }
    ]
  this.listCategory = [
      {
        "id": 1,
        "name": "Novel"
      },
      {
        "id": 2,
        "name": "Love"
      },
      {
        "id": 3,
        "name": "Life"
      }
  ]
  }
}
