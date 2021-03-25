import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task';
import { ToastrService } from 'ngx-toastr';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private urlEndPointList: string = "http://localhost:8084/api/list";
  private urlEndPointCreate: string = "http://localhost:8084/api/create";
  private urlEndPointEdit: string = "http://localhost:8084/api/edit";
  private urlEndPointGet: string = "http://localhost:8084/api/gettask";
  private urlEndPointDelete: string = "http://localhost:8084/api/delete";
  private urlEndPointChangeState: string = "http://localhost:8084/api/updatestate";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient,
  private toastr: ToastrService) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlEndPointList).pipe(
      catchError(e => {
        this.toastr.info('', e.error);
        return throwError(e);
      })
    );
  }

  create(task:Task) : Observable<any> {
    return this.http.post<Task>(this.urlEndPointCreate, task, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.resultado);
        this.toastr.error('', e.error);
        return throwError(e);
      })
    );
  }

  getTask(id): Observable<any> {
    return this.http.get<Task>(`${this.urlEndPointGet}/${id}`).pipe(
      catchError(e => {
        console.error(e.error.resultado);
        this.toastr.error('', e.error);
        return throwError(e);
      })
    );;
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<Task>(`${this.urlEndPointDelete}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.resultado);
        this.toastr.error('', e.error);
        return throwError(e);
      })
    );;
  }

  changeState(id: number): Observable<any> {
    return this.http.put<Task>(`${this.urlEndPointChangeState}/${id}`,id, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.resultado);
        this.toastr.error('', e.error);
        return throwError(e);
      })
    );;
  }
}
