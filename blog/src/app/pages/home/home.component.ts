import { Component, OnInit } from '@angular/core';
import { HomeService } from "app/pages/home/home.service";

import { IArticle } from "app/pages/home/article";
import { ICategory } from "app/pages/home/category";
import { UserService } from "app/services/user.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  users: {};
  errorMessage: string;

  listArticle: any[];
  listCategory: ICategory[];

  constructor(private _articleService: HomeService,
              private _userService: UserService) {
  }

  ngOnInit(): void {
    this.listArticle = [];
    this.listCategory = [];

    this._articleService.getArticle()
      .subscribe((data: any) => { this.listArticle = data.articles 
      console.log(data)});

    this._articleService.getArticle()
      .subscribe((data: any) => { this.listCategory = data.categories });

    this._userService.getUsers()
          .subscribe(users => { this.users = users;});
  }
}
