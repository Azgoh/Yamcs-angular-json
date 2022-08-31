import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListParametersResponse } from '../Parameters';
//import { ListParametersResponse } from '/home/jason/Yamcs-angular-json/ParameterInteface';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private urlYamcs =
    'http://home2:8090/api/mdb/myproject/parameters?system=/pus-verification';
  private urlJason = 'http://localhost:8090/api/mdb/myproject/parameters'; //url from which you take the parameters
  private urlJson = 'http://localhost:5000/parameters';
  constructor(private http: HttpClient) {}

  //how to make the http request in order to acquire the correct data

  getParameters(): Observable<ListParametersResponse> {
    return this.http.get<ListParametersResponse>(this.urlJason);
  }

  //will check that later
  //your interface was not wrong but it wasnt in the correct folder. Check where Paramters.ts is and try to implement it by yourself in this function
  getParametersNikos(): Observable<ListParametersResponse> {
    return this.http.get<ListParametersResponse>(this.urlJason);
  }
  /* in .ts files when you write a func a variable etc its a good implementation to write what you expect 
  a variable to be or a function to return 
  this is why we write in the get requests the type that we expect so there wont be an error
  if its not the same type angular will log an error  */
}
