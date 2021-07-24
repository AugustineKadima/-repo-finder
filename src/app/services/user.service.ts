import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    apiKey:string = environment.githubAPIKey
   _url:string = "https://api.github.com/users?" + this.apiKey

  getGitHubUsers():Observable<any>{
    return this.http.get<any>(this._url)
  }

  constructor(private http:HttpClient) { }
}

// PERSONAL ACCESS TOKEN
// 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
