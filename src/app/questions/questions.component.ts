import { Component, OnInit, Input } from '@angular/core';
import { Questions } from './questions';
import { QuestionsService } from './questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  userName: string = '';
  questions: Questions[] = [];
  id: number = 0;
  answer: number;
  

  @Input()  Question: string = '';

  constructor( private router: Router, private questionsService: QuestionsService ) { }

  ngOnInit(): void {

          this.questionsService.getQuestions().subscribe(
            (data: any) => {
              this.questions = data;
            }   
        )
  }

  Answer(choice) {
    this.questionsService.id[this.questionsService.id].answer = choice;
    localStorage.setItem('id', JSON.stringify(this.questionsService.id));
    this.questionsService.id++;
    
      }
  }
    
