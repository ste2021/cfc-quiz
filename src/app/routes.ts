import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router'
import { QuestionsComponent } from './questions/questions.component';


export const appRoutes : Routes =[
    
    {path:'questions',component:QuestionsComponent},
    // {path:'',redirectTo:'/register',pathMatch:'full'}
];

@NgModule({
    imports: [ CommonModule,  
               BrowserModule, 
               RouterModule.forRoot(appRoutes, { useHash: true}),
             ]
})

export class AppRoutingModule{}