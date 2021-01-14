import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router'

import { SignInComponent } from './home/login/signin.component';


import { QuestionsComponent } from './questions/questions.component';


const appRoutes : Routes =[
    
    {path:'questions',component:QuestionsComponent},
    {path: '', component: SignInComponent}
    // {path:'',redirectTo:'/register',pathMatch:'full'}
];

@NgModule({
    imports: [ CommonModule,  
               BrowserModule, 
               RouterModule.forRoot(appRoutes, { useHash: true}),
             ]
})

export class AppRoutingModule{}