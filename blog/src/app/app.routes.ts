import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/pages/home/home.component";
import { LoginComponent } from "app/pages/login/login.component";
import { RegisterComponent } from "app/pages/register/register.component";

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
];

export const routing = RouterModule.forRoot(routes);