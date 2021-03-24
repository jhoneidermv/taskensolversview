import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task';

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
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlEndPointList);
  }

  create(task:Task) : Observable<any> {
    return this.http.post<Task>(this.urlEndPointCreate, task, {headers: this.httpHeaders});
  }

  getTask(id): Observable<any> {
    return this.http.get<Task>(`${this.urlEndPointGet}/${id}`);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<Task>(`${this.urlEndPointDelete}/${id}`, {headers: this.httpHeaders});
  }

  changeState(id: number): Observable<any> {
    return this.http.put<Task>(`${this.urlEndPointChangeState}/${id}`,id, {headers: this.httpHeaders});
  }
}
