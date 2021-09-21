import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'

const httpOptions ={
  headers: new HttpHeaders({
   'Access-Control-Allow-Origin': '*',
   'Authorization': '563492ad6f91700001000001acabc9f13a564f05a35627896b1a1bfd'
  })


}

@Injectable({
  providedIn: 'root',
})
export class PexelPhotoService {
  constructor(private http: HttpClient) {}

  getData(search: String, per_page: Number): Observable<any> {

    console.log(search)
    console.log(per_page)

    const url = 'https://api.pexels.com/v1/search?query='+search+'&per_page='+per_page;

    return this.http.get<any>(url,httpOptions)
                    .pipe(catchError(this.handleError))
  }
  handleError(error: { message: any; }){
    return throwError (error.message || "server erreur")

  }
}
