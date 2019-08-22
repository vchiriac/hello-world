import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = 'Valentin';
  siteUrl = window.location.href;
  myId = 'testId';
  myId1 = 'testId1';
  myId2 = 'testId2';
  isDisabled = false;
  isDisabled2 = true;
  successClass = 'text-success';
  dangerClass = 'text-danger';
  hasError = false;
  isSpecial = true;
  public displaySiteUrl = false;

  public displayBlock = false;

  public highlightColor = this.hasError ? 'red' : 'blue';

  public messageClass = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  };

  public styleClass = {
    color: 'green',
    fontStyle: 'italic'
  };

  public greeting ='';
  constructor() { }

  ngOnInit() {
  }

  public greetUser() {
    return 'Hello' + this.name;
  }

  public onClick() {
    console.log('Greet pressed');
    this.greeting = 'Greeting pressed';
  }
  public onNewClick(event) {
    this.greeting = event.type;
  }

  public logMessage(value) {
    alert(value);
  }
}
