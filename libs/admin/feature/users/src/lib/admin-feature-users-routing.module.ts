import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUtilSharedModule } from '@gpi/admin/util/shared';

import { DetailContentComponent } from './components/detail/content/detail-content.component';
import { DetailHeaderComponent } from './components/detail/header/detail-header.component';
import { DetailNoContentComponent } from './components/detail/no-content/detail-no-content.component';
import { DialogCreateComponent } from './components/dialog/create/dialog-create.component';
import { FormUserComponent } from './components/form/user/form-user.component';
import { ListHeaderComponent } from './components/list/header/list-header.component';
import { ListNoResultsComponent } from './components/list/no-results/list-no-results.component';
import { ListResultsComponent } from './components/list/results/list-results.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const pages = [WrapperComponent, ListComponent, DetailComponent];

const components = [
  ListHeaderComponent,
  ListResultsComponent,
  ListNoResultsComponent,

  DetailContentComponent,
  DetailHeaderComponent,
  DetailNoContentComponent,

  DialogCreateComponent,
  FormUserComponent,
];

const entryComponents = [DialogCreateComponent];

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListComponent,
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: DetailComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [...pages, ...components],
  imports: [AdminUtilSharedModule, RouterModule.forChild(routes)],
  entryComponents: [...entryComponents],
})
export class AdminFeatureUsersRoutingModule { }
