
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from './questions';
import { User} from '../User';

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

  // Headers
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

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


  //pegar user por Id
  getUserId(id): Observable<User[]> {
    return this.http.get<User[]>(`${this.rootUrl}/Users/${id}`)
  }
  //pegar Questoes
  getQuestions(): Observable<Questions> {
    return this.http.get<Questions>(this.rootUrl + '/Questions');
  }

  //pegar questoes por Id
  getQuestionsId(id): Observable<Questions[]> {
    return this.http.get<Questions[]>(`${this.rootUrl}/Questions/${id}`)
  }





}