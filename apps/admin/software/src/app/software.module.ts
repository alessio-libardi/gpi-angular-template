import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SoftwareCoreModule } from './core/software-core.module';
import { RootComponent } from './root/root.component';
import { SoftwareRoutingModule } from './software-routing.module';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SoftwareCoreModule, SoftwareRoutingModule],
  bootstrap: [RootComponent],
})
export class SoftwareModule { }
