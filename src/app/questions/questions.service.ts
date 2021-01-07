
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
 
  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:3000';
  questions: [] = [];
  
  id: number;

//---------------- Http Methods---------------
  constructor(private http: HttpClient) { }
 
  getUser(id) {
    return this.http.get(`${this.rootUrl}/${id}`)
  }

  
  insertParticipant(name: string, email: string) {
    var body = {
      Name: name,
      Email: email
    }
    return this.http.post(this.rootUrl + '/api/InsertParticipant', body);
  }
  
  get(id) {
    return this.http.get(`${this.rootUrl}/${id}`)
  }


  getQuestions() {
    return this.http.get(this.rootUrl + '/Questions');
  }


}