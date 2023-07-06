import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//const AUTH_API = 'http://192.168.40.15:82/KEFAPI/api/';
const AUTH_API = 'https://sap.kefalos.co.zw/KEFAPI/api/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(userName: string, password: string, companyDB: string): Observable<any> {

    return this.http.post(AUTH_API + 'Login/B1Login', {
      userName,
      password,
      companyDB
    }, httpOptions);
  }
}
