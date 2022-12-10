import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ReportHomeComponent } from './report-home/report-home.component';
import { ReportDetailsComponent } from './report-details/report-details.component';


@NgModule({
  declarations: [
    ReportHomeComponent,
    ReportDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
