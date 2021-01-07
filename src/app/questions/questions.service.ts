
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

 //buscar user por id
  getUser(id){
    return this.http.get(`${this.rootUrl}/${id}`)
  }

  //inserir user
  insertParticipant(name: string, email: string) {
    var body = {
      Name: name,
      Email: email
    }
    return this.http.post(this.rootUrl + '/Users', body);
  }
  //pegar questoes por Id
  getQuestionsId(id): Observable<Questions[]> {
    return this.http.get<Questions[]>(`${this.rootUrl}/Questions/${id}`)
  }

//pegar Questoes
  getQuestions(): Observable<Questions[]> {
    return this.http.get<Questions[]>(this.rootUrl + '/Questions');
  }




}