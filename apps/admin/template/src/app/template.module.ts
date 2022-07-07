import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TemplateCoreModule } from './core/template-core.module';
import { RootComponent } from './root/root.component';
import { TemplateRoutingModule } from './template-routing.module';

@NgModule({
  declarations: [RootComponent],
  imports: [BrowserModule, BrowserAnimationsModule, TemplateCoreModule, TemplateRoutingModule],
  bootstrap: [RootComponent],
})
export class TemplateModule { }
