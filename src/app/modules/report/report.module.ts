import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ReportHomeComponent } from './report-home/report-home.component';


@NgModule({
  declarations: [
    ReportHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
