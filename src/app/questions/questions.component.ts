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
  [x: string]: any;
  
  questionObs: Observable<any>;
  question: Questions;
  choice: any;
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
  prev(): void{
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
      catchError(error => {
        alert('Acabaram as questões');
        this.prev();
        return of(error);
      }),

    );
  }
   //button Responder
   answer(){
     if(this.choice === this.questions.answer){
       alert('Parabéns Você acertou');
     } else {
       alert('Errou');
     }
    this.questionService.answer(this.question.id,this.choice)
    .subscribe( (response: any) => {
      alert('Resposta Enviada');
      this.next();
    })


  }


}
    
