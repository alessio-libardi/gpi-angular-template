import { NgModule } from '@angular/core';
import { AdminUtilSharedModule } from '@gpi/admin/util/shared';

import { AdminFeatureShellRoutingModule } from './admin-feature-shell-routing.module';

@NgModule({
  imports: [AdminUtilSharedModule, AdminFeatureShellRoutingModule],
})
export class AdminFeatureShellModule { }
