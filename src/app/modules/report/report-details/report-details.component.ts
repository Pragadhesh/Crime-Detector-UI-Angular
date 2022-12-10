import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TranscriptDetails } from 'src/app/interfaces/transcript.interface';
import { TranscriptService } from 'src/app/services/transcript.service';

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
  constructor(private route: ActivatedRoute,private transcript: TranscriptService) { }

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

