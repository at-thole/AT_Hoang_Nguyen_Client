import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from "app/layouts/header/header.component";
import { FooterComponent } from "app/layouts/footer/footer.component";
import { HomeComponent } from "app/pages/home/home.component";
import { LoginComponent } from "app/pages/login/login.component";
import { RegisterComponent } from "app/pages/register/register.component";
import { routing } from "app/app.routes";
import { DetailsComponent } from "app/pages/art-detail/detail.component";
import { SidebarComponent } from "app/layouts/sidebar/sidebar.component";
import { ProfileComponent } from "app/pages/profile/profile.component";
import { SettingComponent } from "app/pages/setting/setting.component";
import { NewArticleComponent } from "app/pages/art-detail/newArticle.component";
import { HomeService } from "app/pages/home/home.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    SidebarComponent,
    NewArticleComponent,
    ProfileComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
