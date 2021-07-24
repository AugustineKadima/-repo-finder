import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   _url:string = "https://api.github.com/users"

  getGitHubUsers():Observable<any>{
    return this.http.get<any>(this._url)
  }

  constructor(private http:HttpClient) { }
}
