import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {IEmployee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private employeeUrl: string = 'http://localhost:8080/helloworld/employees';
  private departmentUrl: string = 'http://localhost:8080/helloworld/departments';

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.employeeUrl)
      .pipe(retry(1), catchError(error => {
        return throwError(error.message || 'Server Error');
      }));
  }

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(this.departmentUrl)
      .pipe(retry(1), catchError(error => {
        return throwError(error.message || 'Server Error');
      }));
  }

  getEmployee(empId): Observable<any> {
    return this.http.get<any>(this.employeeUrl + '/' + empId);
  }

  getDepartment(deptId) {
    return this.http.get(this.departmentUrl + '/' + deptId);
  }

  postEmployee(employee: IEmployee) {
    return this.http.post(this.employeeUrl, employee).pipe(retry(1), catchError(error => {
      return throwError(error.message || 'Server Error');
    }))
  }
}
