import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IctCoreModule } from './core/ict-core.module';
import { IctRoutingModule } from './ict-routing.module';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, BrowserAnimationsModule, IctCoreModule, IctRoutingModule],
  bootstrap: [RootComponent],
})
export class IctModule { }
