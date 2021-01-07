
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './signin/signin.component';
import { SignOutComponent } from './signout/signout.component';


@NgModule({
    declarations: [ SignInComponent, SignOutComponent ],
                 
    imports: [ CommonModule,
               ReactiveFormsModule]
})
export class HomeModule { 
    loginForm: FormGroup;
}