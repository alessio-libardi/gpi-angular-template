import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CareRoutingModule } from './care-routing.module';
import { CareCoreModule } from './core/care-core.module';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CareCoreModule, CareRoutingModule],
  bootstrap: [RootComponent],
})
export class CareModule { }
