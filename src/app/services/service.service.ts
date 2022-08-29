import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParameterInfo } from 'ParameterInteface';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private urlYamcs = 'http://home2:8090/api/mdb/myproject/parameters?system=/pus-verification';
  private urlJson = 'http://localhost:5000/parameters';
  constructor(private http: HttpClient) { }

  getParameters(): Observable<ParameterInfo[]>{
   return this.http.get<ParameterInfo[]>(this.urlYamcs);
  }

}
