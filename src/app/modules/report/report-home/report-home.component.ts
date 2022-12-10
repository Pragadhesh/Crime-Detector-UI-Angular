import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/interfaces/report.interface';
import { TranscriptService } from 'src/app/services/transcript.service';

@Component({
  selector: 'app-report-home',
  templateUrl: './report-home.component.html',
  styleUrls: ['./report-home.component.scss']
})
export class ReportHomeComponent implements OnInit {

  isLoading = false
  reports: Report[] = []
  constructor(private transcript: TranscriptService) { }

  ngOnInit(): void {
      this.isLoading = true
      this.transcript.getTranscripts()
      .subscribe(
        Response => {
          this.reports = JSON.parse(JSON.stringify(Response));
        },
        err => {
          console.log(err)
          this.isLoading = false
        }
      )
      this.isLoading = false
    }

  }