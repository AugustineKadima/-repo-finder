import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  gitUser:any
  gitHubRepos:any 
  userName!:string 


  constructor(private userService: UserService){
    
  }

  findUser(user:User){
    this.userName = user.userName
    console.log(this.userName)

    this.userService.getGitHubUsers(this.userName).subscribe(data => {this.gitUser = data
      console.log(data)})

    this.userService.getGitHubRepos(this.userName).subscribe(data => {
      this.gitHubRepos = data
      console.log(data)
    })
  }

  ngOnInit(){


  }


}
