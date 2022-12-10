import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API, ASSEMBLY_AI_URL } from '../constants/api-constants';
import { API_KEY } from '../constants/authorization';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  upload(file:any):Observable<any> {
  
    const formData = new FormData(); 
    formData.append("file", file, file.name);

    let upload_headers = new HttpHeaders();
    upload_headers = upload_headers.set('authorization', API_KEY.toString());

    return this.http.post(`${ASSEMBLY_AI_URL}${API.UPLOAD_AUDIO}`,file,{
      headers: upload_headers
    }
    )
}

}
