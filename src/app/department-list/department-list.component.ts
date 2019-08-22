import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-department-list',
  providers: [DataService],
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments = [];
  public errorMsg;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getDepartments()
      .subscribe(data => this.departments = data, error => this.errorMsg = error);
  }

}
