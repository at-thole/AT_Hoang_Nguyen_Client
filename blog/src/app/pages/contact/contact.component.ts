import { Component, OnInit } from '@angular/core';
import { HomeService } from "app/pages/home/home.service";

import { IArticle } from "app/pages/home/article";
import { ICategory } from "app/pages/home/category";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  constructor() {
  }

  ngOnInit(): void {

  }
}
