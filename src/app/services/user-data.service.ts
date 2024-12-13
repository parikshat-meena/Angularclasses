import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}

  private data: any[] = [
    { id: 1, fname: 'vaisnavi', role: 'mean developer' },
    { id: 2, fname: 'prathamesh', role: 'react developer' },
    { id: 3, fname: 'parikshat', role: 'native developer' },
  ];

  private URL = 'http://localhost:3000/user';

  getStaticData(): any[] {
    return this.data;
  }
  fetchUserData(): Observable<any> {
    return this.http.get(this.URL);
  }

  insertData(user: any): Observable<any> {
    return this.http.post(this.URL, user);
  }

  deleteUserData(id: any): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

  updateUserData(user: any, id: string): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, user);
  }
}

// CRUD operation
// get -> fetching the data from the server
// post -> inserting the data
// put -> updating the data
// delete -> deleting the data

// Assignment
// create a web app on your favourite topic
// we will need a list to show
// create a form
// update the data
// delete
