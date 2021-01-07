import { Component, OnInit, Input } from '@angular/core';
import { Questions } from './questions';
import { QuestionsService } from './questions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  userName: string = '';
  questions: Questions[] = [];
  id: number = 0;
  

  @Input()  Question: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionsService: QuestionsService
  ) { }

  ngOnInit(): void {
   
    this.questions = this.activatedRoute.snapshot.data['questions'];
  }

  load() {
    this.questionsService
      ;
      
  }
}

