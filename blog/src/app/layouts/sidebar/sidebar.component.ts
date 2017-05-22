import { Component } from '@angular/core';
import { HomeService } from "app/pages/home/home.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
listCategory: any[];
  constructor(private _articleService: HomeService) {
  }
  ngOnInit(): void {
      this.listCategory = [];

      this._articleService.getCategory()
        .subscribe((data: any) => { this.listCategory = data.categories })
      console.log(this.listCategory);
  }
}
