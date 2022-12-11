import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ReportHomeComponent } from './report-home/report-home.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ReportHomeComponent,
    ReportDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgChartsModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
