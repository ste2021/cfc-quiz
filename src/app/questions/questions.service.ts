
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Questions } from '../models/questions';

// import { User} from '../User';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
 
  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:3000';
   
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

  
  //pegar Questoes
  getQuestions(): Observable<Questions> {
    return this.http.get<Questions>(this.rootUrl + '/Questions');
  }

  //pegar questoes por Id
  getQuestionsId(id): Observable<Questions[]> {
    return this.http.get<Questions[]>(`${this.rootUrl}/Questions/${id}`)
  }

  //pegar respostas por id de user e answers por id de questoes
   getAnswer(questionId: number, answer: string) {
     var body = {
       questionId: questionId,
       answer: answer
     }
      
    return this.http.post(this.rootUrl + '/Answer', body)

   }
}
// return this.http.post(`${this.rootUrl}/Answer/`)




// //inserir user
//   insertUser (userName: string, password: string) {
//     var body = {
//       userName: userName,
//       Password: password
//     }
//     return this.http.post(this.rootUrl + '/Users', body);
//   }

//   //pegar user por Id
//   getUserId(id): Observable<User[]> {
//     return this.http.get<User[]>(`${this.rootUrl}/Users/${id}`)
//   }