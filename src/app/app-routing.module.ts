import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/homepage/homepage/homepage.component';
import { ReportHomeComponent } from './modules/report/report-home/report-home.component';
import { UploadHomeComponent } from './modules/upload/upload-home/upload-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'upload',
    component: UploadHomeComponent
  },
  {
    path: 'reports',
    component: ReportHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
