
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './login/signin.component';



@NgModule({
    declarations: [ SignInComponent ],
                 
    imports: [ CommonModule,
               ReactiveFormsModule]
})
export class HomeModule { 
    loginForm: FormGroup;
}