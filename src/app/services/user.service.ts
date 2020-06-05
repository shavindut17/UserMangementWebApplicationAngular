import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


export const userUrl = environment.apiURL + '/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService {


  constructor(protected http: HttpClient) {
    super(http , userUrl);
  }

  // User Register
  register(body: any, params?: HttpParams): Observable<any> {
    delete body._id;
    return this.http.post<User>(this.url + '/register' , body, { params });
  }

  login(body: any, params?: HttpParams): Observable<any> {
    delete body._id;
    return this.http.post<User>(this.url + '/login' , body , {responseType: 'text' as 'json'}); // Token having conversion issues
  }

  getCurrentUser(): Observable<any> {
    const token = window.localStorage.getItem('currentUser') as any;
    const httpOptions = {
      headers: new HttpHeaders({
        'auth-token': token
      })
    };
    return this.http.get<User>(this.url + '/getCurrentUser', httpOptions);
  }




}
