import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUtilSharedModule } from '@gpi/admin/util/shared';

import { WrapperComponent } from './wrapper/wrapper.component';

const pages = [WrapperComponent];

const components = [];

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
  },
];

@NgModule({
  declarations: [...pages, ...components],
  imports: [AdminUtilSharedModule, RouterModule.forChild(routes)],
})
export class AdminFeatureHomeRoutingModule { }
