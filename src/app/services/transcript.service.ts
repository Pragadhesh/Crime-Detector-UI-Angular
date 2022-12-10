import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API,BASE_URL } from '../constants/api-constants';
import { API_KEY } from '../constants/authorization';

@Injectable({
  providedIn: 'root'
})
export class TranscriptService {

    constructor(private http: HttpClient) { }

    registerTranscript(body:any)
    {
        return this.http.post(`${BASE_URL}${API.ADD_TRANSCRIPT}`,body)
    }

    getTranscripts()
    {
        return this.http.get(`${BASE_URL}${API.GET_TRANSCRIPTS}`)
    }

}