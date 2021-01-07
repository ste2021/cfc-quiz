import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Observable, of } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { Questions } from './questions';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  
  questionObs: Observable<any>;
  question: Questions;
  questaoAtual = 1;
  

  @Input()  Question: string = '';

  constructor(
    private questionsService: QuestionsService 
  ) { }

  ngOnInit(): void {
    this.loadQuestion();
  }
//button next
  next(): void{
    this.questaoAtual++;
    this.loadQuestion();
  }
  //button previous
  previous(): void{
    this.questaoAtual--;
    this.loadQuestion();
  }
 //carregar Question
    loadQuestion(){
    this.questionObs = this.questionsService.getQuestionsId(this.questaoAtual)
    .pipe(
      tap((response:any) =>{
        this.question = response;
      }),
      catchError(this.handleError)

    );
  }
  //tratamento de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

  }


 
    
