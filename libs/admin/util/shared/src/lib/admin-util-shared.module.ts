import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedUiMaterialModule } from '@gpi/shared/ui/material';
import { TranslocoModule } from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    SharedUiMaterialModule,
    TranslocoModule,
    TranslocoLocaleModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    SharedUiMaterialModule,
    TranslocoModule,
    TranslocoLocaleModule,
  ],
})
export class AdminUtilSharedModule {
  static forRoot(): ModuleWithProviders<AdminUtilSharedModule> {
    return {
      ngModule: AdminUtilSharedModule,
      providers: [],
    };
  }
}
