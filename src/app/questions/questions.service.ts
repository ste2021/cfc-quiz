
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionsService {
  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:3000';
  questions: [] = [];
  correctAnswerCount: number = 0;
  id: number = 0;

  //---------------- Helper Methods---------------
  constructor(private http: HttpClient) { }
 
  getParticipantName() {
    var participant = JSON.parse(localStorage.getItem('participant'));
    return participant.Name;
  }

  //---------------- Http Methods---------------

  insertParticipant(name: string, email: string) {
    var body = {
      Name: name,
      Email: email
    }
    return this.http.post(this.rootUrl + '/api/InsertParticipant', body);
  }

  getQuestions() {
    return this.http.get(this.rootUrl + '/api/Questions');
  }


}