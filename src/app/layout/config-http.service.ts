import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigHttpService {

  constructor() { }

  public requestHeaders(): { headers: HttpHeaders } {
    return { headers: new HttpHeaders({
                        // 'Authorization': 'Bearer ' + this.authService.getAccessToken,
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                        'Access-Control-Allow-Methods': 'GET, POST',
                        'Content-Type': 'application/json',
                        Accept: 'application/json, text/plain, */*'
                      })
    };
  }

}
