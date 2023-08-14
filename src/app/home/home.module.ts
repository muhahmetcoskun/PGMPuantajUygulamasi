import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from '../template/template.module';
import { SidebarComponent } from '../sidebar/sidebar.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TemplateModule,
    SidebarComponent
  ]
})
export class HomeModule { }
