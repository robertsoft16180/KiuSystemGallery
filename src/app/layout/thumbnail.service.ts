import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, takeUntil, take } from 'rxjs/operators';
import { ConfigHttpService } from './config-http.service';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThumbnailService {

  private apiURL: string;

  constructor(private http: HttpClient, private configHttp: ConfigHttpService) {
    this.apiURL = 'https://jsonplaceholder.typicode.com/photos?albumId=1';
  }

  public getAllPhotos(): Observable<Photo[]> {
    return this.http
               .get<Photo[]>(`${this.apiURL}`, this.configHttp.requestHeaders())
               .pipe(take(10), map( data => data));
  }


}
