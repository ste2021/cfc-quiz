
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from './questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
 
  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:3000';
  // questions: [] = [];
  
  id: number = 0;

//---------------- Http Methods---------------
  constructor(private http: HttpClient) { }
 
  getUser(id){
    return this.http.get(`${this.rootUrl}/${id}`)
  }

  
  insertParticipant(name: string, email: string) {
    var body = {
      Name: name,
      Email: email
    }
    return this.http.post(this.rootUrl + '/Users', body);
  }
  
  getQuestionsId(id): Observable<Questions[]> {
    return this.http.get<Questions[]>(`${this.rootUrl}/Questions/${id}`)
  }


  getQuestions() {
    return this.http.get(this.rootUrl + '/Questions');
  }


}