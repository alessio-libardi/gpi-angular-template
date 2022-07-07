import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PayCoreModule } from './core/pay-core.module';
import { PayRoutingModule } from './pay-routing.module';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, BrowserAnimationsModule, PayCoreModule, PayRoutingModule],
  bootstrap: [RootComponent],
})
export class PayModule { }
