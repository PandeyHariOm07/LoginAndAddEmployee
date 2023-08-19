import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  signUp!: FormGroup;
  submitted: boolean = false;
  ngOnInit(): void {
    this.signUp = new FormGroup({
     firstName: new FormControl(null,[Validators.required,Validators.minLength(3)]),
     secondName :new FormControl ( null , [Validators.required,Validators.minLength(3)]),
     password   : new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
     confirm   : new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),

    })
  }
onSubmit() {
  this.submitted = true; 
}
get f(): {[controlName: string]: AbstractControl}{
    return this.signUp.controls;
}


// getControl(key: string): AbstractControl{
//   return this.signUp.controls[key];
// }

}
