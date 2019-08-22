import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private _url = 'http://localhost:3020/departments';

  constructor(private _http: HttpClient) {
  }

  public getDepartments(): Observable<any[]> {
    return this._http.get<any[]>(this._url)
      .pipe(retry(1), catchError(error => {
        return throwError(error.message || 'Server Error');
      }));
  }
}
