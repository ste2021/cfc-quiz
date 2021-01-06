
import { NgModule } from '@angular/core';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './signin/signin.component';

@NgModule({
    declarations: [ SignInComponent ],
    imports: [ ReactiveFormsModule]
})
export class HomeModule { 
    loginForm: FormGroup;
}