import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //@Input() public parentData;

  @Input('parentData') public data;

  @Output() public childEvent = new EventEmitter();

  public name = '';
  public color = 'red';
  public colors = ['red', 'green', 'blue', 'yellow'];

  public person = {
    'firstName': 'John',
    'lastName': 'Doe'
  };

  public date = new Date();

  constructor() {
  }

  ngOnInit() {
  }

  public fireEvent() {
    this.childEvent.emit('Hey EventEmmiter');
  }

}
