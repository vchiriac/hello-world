import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-employee-list',
  providers: [DataService],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMsg;
  public selectedId;
  public activeRoute;
  public food: string;

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
      this.activeRoute = this.route;
      console.log('selected id: ', this.selectedId, ' route: ', this.route);
    });
     this.dataService.getEmployees()
       .subscribe(data => this.employees = data, error => this.errorMsg = error);
  }

  isSelected(employee) {
    return employee.id === this.selectedId;
  }

  onSelectionChange(event) {
    console.log(event.value);
    this.snackBar.open('You selected: ' + event.value, null, {
      duration: 1000,
    });
  }

  displayFood(value) {
    console.log(value);
  }
}
