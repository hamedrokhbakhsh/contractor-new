import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Ip} from '../models/ip';
import {HttpClient} from '@angular/common/http';
import {appconfig} from '../app-config';
import {ResponseModel} from '../models/response-model';
import {FilterData} from '../models/filter-data';


@Injectable({
  providedIn: 'root'
})
export class AppService {



  constructor(private http: HttpClient) { }


  getIp(): Observable<Ip>{
    return this.http.get<Ip>(`${appconfig.api}`);
  }

  authUser(data: any): Observable<any> {

     const url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url-address');
    return this.http.post<ResponseModel>(`${url}/login`, data);
  }
  firstPage(data: FilterData): Observable<any> {
    const url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url-address');
    return this.http.post<ResponseModel>(`${url}/contractor/first-page`, data);
  }

  register(data: FilterData): Observable<any> {
     const url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url-address');
    return this.http.post<ResponseModel>(`${url}/contractor/register`, data);
  }

  single(data: FilterData): Observable<any> {
     const url = 'https://cors-anywhere.herokuapp.com/' + localStorage.getItem('url-address');
    return this.http.post<ResponseModel>(`${url}/contractor/single`, data);
  }






  storeUserId(token , name){
    localStorage.setItem('token', token) ;
    localStorage.setItem('name' , name);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('url-address');
    localStorage.removeItem('name');
    return true ;
  }


  isLogin(){
    return localStorage.getItem('token') != null ;
  }
  isHasUrl(): boolean {
    return localStorage.getItem('url-address') != null;
  }
}
