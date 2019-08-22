import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {IEmployee} from '../employee';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employee-details',
  providers: [DataService],
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeId: number;
  public previousId: number;
  public nextId: number;
  public msgError;

  public showSpinner = false;

  public employee: IEmployee = {
    id: "0",
    name: '',
    last_name: '',
    age: 0,
    email: ''
  };

  observable = new Observable((observer) => {
    observer.next('Start doing things...');
    setTimeout(() => observer.next('Still doing things...'), 3000);
    setTimeout(() => observer.complete(), 5000);
  });

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => this.employeeId = params.id);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.showSpinner = false;
      let id = parseInt(params.get('id'));
      this.employeeId = id;
      this.previousId = this.employeeId === 1 ? 1 : this.employeeId - 1;
      this.nextId = this.employeeId + 1;
      this.dataService.getEmployee(id).subscribe((data) => {
        this.employee = <IEmployee>data;
        this.observable.subscribe(
          data => {console.log(data); this.showSpinner = true},
          error => console.log(error),
          () => {console.log('Finished'); this.showSpinner = false});
        //console.log(this.employee)
      }, error => this.msgError = error);
    });
  }

  goToEmployeeList() {
    let selectedId = this.employeeId ? this.employeeId : null;
    //this.router.navigate(['/employees', {id: selectedId, test: 'testvalue'}]).then(() => {console.log('done')})
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route}).then(() => {console.log('done')})

  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route}).then();
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route}).then();
  }

  update(employee) {
    this.employee = employee;
    console.log(this.employee);
    this.dataService.postEmployee(this.employee).subscribe();
  }

  loadDataSpinner() {
    this.showSpinner = true;
    setTimeout(() => this.showSpinner = false, 5000);
  }
}
