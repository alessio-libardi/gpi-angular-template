import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUtilSharedModule } from '@gpi/admin/util/shared';

import { LoginComponent } from './pages/login/login.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const pages = [WrapperComponent, LoginComponent];

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];

@NgModule({
  declarations: [...pages],
  imports: [AdminUtilSharedModule, RouterModule.forChild(routes)],
})
export class AdminFeaturePublicRoutingModule { }
