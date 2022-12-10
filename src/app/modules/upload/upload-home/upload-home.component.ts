import { HttpEvent } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { TranscriptService } from 'src/app/services/transcript.service';

@Component({
  selector: 'app-upload-home',
  templateUrl: './upload-home.component.html',
  styleUrls: ['./upload-home.component.scss']
})
export class UploadHomeComponent implements OnInit {

  file: any
  progress: number = 0;
  @ViewChild('myInput', { static: true })
  myInputVariable!: ElementRef;
  isLoading = false
  isSuccess = false
  
  constructor(private fileUploadService: FileUploadService, private transcriptService: TranscriptService) {}

  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  uploadFile(){
    this.isLoading = true
    this.fileUploadService.upload(this.file)
    .subscribe(
      Response => {
        let response_data = JSON.parse(JSON.stringify(Response));
        console.log(response_data)
        let body = {
          "filename": this.file.name,
          "uploadurl": response_data["upload_url"]
        }
        this.transcriptService.registerTranscript(body)
        .subscribe(
          Response => {
            let response_data = JSON.parse(JSON.stringify(Response));
            console.log(response_data)
            this.isSuccess = true
            this.isLoading = false
          },
          err => {
            console.log(err)
            this.isLoading = false
          }
        )

      },
      err => {
        console.log(err)
        this.isLoading = false
      }
    )
  }

  fileIsUploaded()
  {
    let result = false;
    if(this.file && this.file != null )
    {
      result = true;
    }
    return result;
  }

  resetFile()
  {
    this.myInputVariable.nativeElement.value = "";
    this.file = null;
    this.progress = 0;
  }

  ngOnInit() {}
}