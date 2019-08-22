import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "http://localhost:3000/employees";

  constructor(private _http : HttpClient) { }

  public getEmployees(): Observable<any[]>{
    return this._http.get<any[]>(this._url)
      .pipe(retry(1), catchError(error => {
        return throwError(error.message || 'Server Error')
      }));
  }
}
