import { Routes } from '@angular/router';

import { NotfoundComponent } from './404/not-found.component';
import { changepasswordComponent } from './lock/changepassword.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotfoundComponent
      },
      {
        path: 'changepassword',
        component: changepasswordComponent
      },
      {
        path: 'login2',
        component: LoginComponent
      },
      {
        path: 'login',
        component: Login2Component
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'signup2',
        component: Signup2Component
      }
    ]
  }
];
