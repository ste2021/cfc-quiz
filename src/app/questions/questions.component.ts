import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Observable, of } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { Questions } from '../models/questions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  
  [x: string]: any;
  questionObs: Observable<any>;
  question: Questions;
  answer: any;
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
  //button Responder
  async buttonAnswer(){
    if(this.answer === undefined){
      alert('Marque uma alternativa');
    } 
    if(this.answer === this.question.answer){
    await Swal.fire({
        title: 'Parabéns!',
        text: 'Resposta correta!',
        icon: 'success'
    });
    } else {
      await Swal.fire({
        title: 'Ops!',
        text: 'Resposta incorreta!',
        icon: 'error'
    });
    }
   this.questionsService.getAnswer(this.question.id,this.answer)
   .subscribe((response: any) => {
      Swal.fire({
        title: 'OK!',
        text: 'Resposta enviada!',
        icon: 'info'
    });
     this.next();
   })
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
 
}
    
