import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  gitUsers:any[] = []

  constructor(private userService: UserService){
    
  }

  findUser(userName:any){
    this.userService.getGitHubUsers().subscribe(data => this.gitUsers = data)
  }

}
