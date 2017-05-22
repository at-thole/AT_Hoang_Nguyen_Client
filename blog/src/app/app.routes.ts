import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/pages/home/home.component";
import { LoginComponent } from "app/pages/login/login.component";
import { RegisterComponent } from "app/pages/register/register.component";
import { DetailsComponent } from "app/pages/art-detail/detail.component";
import { ProfileComponent } from "app/pages/profile/profile.component";
import { SettingComponent } from "app/pages/setting/setting.component";
import { NewArticleComponent } from "app/pages/art-detail/newArticle.component";

const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'home',
    component: HomeComponent,
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'detail',
    component: DetailsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'setting',
    component: SettingComponent,
  },
    {
    path: 'newArticle',
    component: NewArticleComponent,
  },
];

export const routing = RouterModule.forRoot(routes);