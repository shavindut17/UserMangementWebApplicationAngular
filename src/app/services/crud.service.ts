import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { HttpParams } from '@angular/common/http/src/params';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(protected http: HttpClient, protected url: string) {
  }

  public get<T>(params?: HttpParams): Observable<T> {
    return this.http.get<T>(this.url, { params }).pipe(take(1));
  }

  public getOne<T>(id: any, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`, { params });
  }

  public post<T>(body: any, params?: HttpParams): Observable<T> {
    delete body._id;
    return this.http.post<T>(this.url, body, { params });
  }

  public patch<T>(body: any, params?: HttpParams): Observable<T> {
    const id = body._id;
    delete body._id;
    return this.http.patch<T>(`${this.url}/${id}`, body, { params });
  }

  public delete<T>(id: string, params?: HttpParams): Observable<T> {
    return this.http.delete<T>(`${this.url}/${id}`, { params });
  }

  public put<T>(id: string, body: any, params?: HttpParams): Observable<T> {
    return this.http.put<T>(`${this.url}/${id}`, body, { params });
  }
}
