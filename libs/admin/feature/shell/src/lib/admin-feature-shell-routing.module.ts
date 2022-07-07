import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '@gpi/admin/util/auth';
import { AdminUtilSharedModule } from '@gpi/admin/util/shared';

import { RedirectGuard } from './guards/redirect.guard';
import { WrapperComponent } from './wrapper/wrapper.component';

const pages = [WrapperComponent];

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'public',
        loadChildren: () => import('@gpi/admin/feature/public').then((m) => m.AdminFeaturePublicModule),
        canLoad: [AuthenticationGuard],
        canActivate: [AuthenticationGuard],
        data: {
          authenticationGuardOptions: {
            authenticated: false,
            redirectTo: 'private',
          },
        },
      },
      {
        path: 'private',
        loadChildren: () => import('@gpi/admin/feature/private').then((m) => m.AdminFeaturePrivateModule),
        canLoad: [AuthenticationGuard],
        canActivate: [AuthenticationGuard],
        data: {
          authenticationGuardOptions: {
            authenticated: true,
            redirectTo: 'public',
          },
        },
      },
      {
        path: '**',
        canActivate: [AuthenticationGuard, RedirectGuard],
        data: {
          authenticationGuardOptions: {
            authenticated: true,
            redirectTo: 'public',
          },
        },
      },
    ],
  },
];

@NgModule({
  declarations: [...pages],
  imports: [AdminUtilSharedModule, RouterModule.forChild(routes)],
})
export class AdminFeatureShellRoutingModule { }
