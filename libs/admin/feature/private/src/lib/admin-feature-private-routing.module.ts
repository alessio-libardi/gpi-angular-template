import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from '@gpi/admin/util/auth';
import { AdminUtilSharedModule } from '@gpi/admin/util/shared';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const pages = [WrapperComponent];

const components = [HeaderComponent, FooterComponent, SidenavComponent];

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('@gpi/admin/feature/home').then((m) => m.AdminFeatureHomeModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('@gpi/admin/feature/profile').then((m) => m.AdminFeatureProfileModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('@gpi/admin/feature/settings').then((m) => m.AdminFeatureSettingsModule),
      },
      {
        path: 'logout',
        redirectTo: '/public/login',
      },
      {
        path: 'users',
        loadChildren: () => import('@gpi/admin/feature/users').then((m) => m.AdminFeatureUsersModule),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  declarations: [...pages, ...components],
  imports: [AdminUtilSharedModule, RouterModule.forChild(routes)],
})
export class AdminFeaturePrivateRoutingModule { }
