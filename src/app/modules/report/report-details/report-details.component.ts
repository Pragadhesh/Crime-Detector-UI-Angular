import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TranscriptDetails } from 'src/app/interfaces/transcript.interface';
import { TranscriptService } from 'src/app/services/transcript.service';

import { ChartDataset, ChartOptions } from 'chart.js';

interface timestamp {
  start: number,
  end: number
}

interface highlight {
  count: number,
  rank: number,
  text: string
}

interface content_safety {
  label: string,
  confidence: number,
  severity: number
}

interface iab {
  label: string,
  relevance: number
}


@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {

  isLoading = false
  transcriptStatus = true
  transcriptid: string = ''

  summary?: string = ''
  audio_transcript?: string = ''
  iab_results: iab[] = []
  content_safety_results: content_safety[] = []
  highlighted_results: highlight[] = []


  transcript_details: TranscriptDetails | undefined

  safety_data: any
  highlights_data: any
  iab_results_data: any

  public chartoptions: ChartOptions = {
    plugins: {
      legend: {
        display: false
      }
    }
  }

  constructor(private route: ActivatedRoute,private transcript: TranscriptService) {
   }

  ngOnInit(): void {

    this.transcriptid = this.route.snapshot.params['transcriptid']
    console.log(this.transcriptid)

    this.isLoading = true
    this.transcript.getTranscriptDetails(this.transcriptid)
    .subscribe(
      Response => {
        this.transcript_details = JSON.parse(JSON.stringify(Response));
        console.log(this.transcript_details)
        console.log("after object")

        //console.log(this.transcript_details?.summary)
        this.summary = this.transcript_details?.summary
        console.log(this.summary)

        //console.log(this.transcript_details?.text)
        this.audio_transcript = this.transcript_details?.text
        console.log(this.audio_transcript)

        //console.log(this.transcript_details?.iab_categories_result.results[0].labels)
        this.iab_results = this.transcript_details?.iab_categories_result.results[0].labels!;
        console.log(this.iab_results)

        //console.log(this.transcript_details?.auto_highlights_result.results)
        this.highlighted_results = this.transcript_details?.auto_highlights_result.results!;
        console.log(this.highlighted_results)

        //console.log(this.transcript_details?.content_safety_labels.results[0].labels)
        this.content_safety_results = this.transcript_details?.content_safety_labels.results[0].labels!;
        console.log(this.content_safety_results)

        if(this.content_safety_results.length > 0)
        {
          let safety_labels = []
          let safety_data = []
          for (let i = 0; i < this.content_safety_results.length; i++) {
            safety_labels.push(this.content_safety_results[i].label)
            safety_data.push(this.content_safety_results[i].severity)
          }
          this.safety_data = {
            labels: safety_labels,
            datasets: [{
              label: 'Severity',
              data: safety_data,
              hoverOffset: 4
            }]
          };
        }

        if(this.highlighted_results.length > 0)
        {
          let highlight_labels = []
          let highlight_data = []
          for (let i = 0; i < this.highlighted_results.length; i++) {
            highlight_labels.push(this.highlighted_results[i].text)
            highlight_data.push(this.highlighted_results[i].count)
          }
          this.highlights_data = {
            labels: highlight_labels,
            datasets: [{
              label: 'Count',
              data: highlight_data,
              hoverOffset: 4
            }]
        }
        }

        if(this.iab_results.length > 0)
        {
          let iab_labels = []
          let iab_data = []
          for (let i = 0; i < this.iab_results.length; i++) {
            iab_labels.push(this.iab_results[i].label)
            iab_data.push(this.iab_results[i].relevance)
          }
          this.iab_results_data = {
            labels: iab_labels,
            datasets: [{
              label: 'Relevance',
              data: iab_data,
              hoverOffset: 4,
            }]
          };
        }

        this.isLoading = false
      },
      err => {
        console.log(err)
        this.transcriptStatus = false
        this.isLoading = false
      }
    )
  }



  }

