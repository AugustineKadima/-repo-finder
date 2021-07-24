import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from '../classes/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

 user = new User(0,"")
 
 @Output() requiredUser = new EventEmitter<User>()

  submitUserName(){
    this.requiredUser.emit(this.user)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
