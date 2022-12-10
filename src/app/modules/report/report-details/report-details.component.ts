import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {

  isLoading = false
  transcriptStatus = false
  transcriptid: string = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.transcriptid = this.route.snapshot.params['transcriptid']
    console.log(this.transcriptid)
  }

}
