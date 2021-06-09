import { MainRoutingModule } from './../main/main.routing';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [
  TopNavComponent
]

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: components,
  exports: components
})
export class NavModule { }
