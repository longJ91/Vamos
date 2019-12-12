import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private http: HttpClient) { }

  getLogin(email: string, pwd: string) {
    console.log(`127.0.0.1:8000/login?email=${email}&pwd=${pwd}`);
    return this.http.get<JSON>(`http://127.0.0.1:8000/login?email=${email}&pwd=${pwd}`);
  }

}
