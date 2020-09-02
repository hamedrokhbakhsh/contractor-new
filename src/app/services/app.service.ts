import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Ip} from '../models/ip';
import {HttpClient} from '@angular/common/http';
import {appconfig} from '../app-config';
import {ResponseModel} from '../models/response-model';


@Injectable({
  providedIn: 'root'
})
export class AppService {



  constructor(private http: HttpClient) { }


  getIp(): Observable<Ip>{
    return this.http.get<Ip>(`${appconfig.api}`);
  }

  authUser(data: ResponseModel): Observable<any> {

    // const url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url-address');
    return this.http.post<ResponseModel>('http://localhost:5001/contractor/login', data);
  }


  storeUserId(token , name){
    localStorage.setItem('token', token) ;
    localStorage.setItem('name' , name);
  }

}
