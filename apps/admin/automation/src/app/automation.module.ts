import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AutomationRoutingModule } from './automation-routing.module';
import { AutomationCoreModule } from './core/automation-core.module';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AutomationCoreModule, AutomationRoutingModule],
  bootstrap: [RootComponent],
})
export class AutomationModule { }
