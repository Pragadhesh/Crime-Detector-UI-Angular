import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadHomeComponent } from './upload-home/upload-home.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    UploadHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UploadRoutingModule
  ]
})
export class UploadModule { }
