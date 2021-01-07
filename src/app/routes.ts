import {Routes} from '@angular/router'
import { QuestionsComponent } from './questions/questions.component';


export const appRoutes : Routes =[
    
    {path:'questions',component:QuestionsComponent},
    {path:'',redirectTo:'/register',pathMatch:'full'}
];