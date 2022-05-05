import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  url: string ="";
  getUsers(pageno:number){
    return this.http.get<Users[]>(`http://localhost:3000/Users?_page=${pageno}&_limit=4`);
  }
}
