import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private http: HttpClient) {

  }

  getLogin(email: string, pwd: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const body = {
      "email": email,
      "pwd": pwd
    };

    return this.http.post<JSON>(`http://127.0.0.1:8000/user/login`, body, httpOptions);
  }

}
