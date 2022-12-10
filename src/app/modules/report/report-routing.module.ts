import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportHomeComponent } from './report-home/report-home.component';

const routes: Routes = [
  {
    path: '',
    component: ReportHomeComponent
  },
  {
    path: 'reports/:transcriptid',
    component: ReportDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
