import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Observable, of } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { Questions } from './questions';

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

  next(): void{
    this.questaoAtual++;
    this.loadQuestion();
  }
  previous(): void{
    this.questaoAtual--;
    this.loadQuestion();
  }

    loadQuestion(){
    this.questionObs = this.questionsService.getQuestionsId(this.questaoAtual)
    .pipe(
      tap((response:any) =>{
        this.question = response;
      }),
      catchError(error => {
        console.log('Deu erro' + error)
        return of(error);
      })

    );
  }

  }


 
    
