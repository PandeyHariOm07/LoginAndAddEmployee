import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  upload!: FormGroup;
  submitted: boolean = false;
  first: string="";
  last: string="";
  contact: number = 0;
  emp: any ;
  qw: number = 2;
  ngOnInit(): void {
    this.upload = new FormGroup({
      firstName: new FormControl(null,[Validators.required,Validators.minLength(3)]),
      secondName :new FormControl ( null , [Validators.required,Validators.minLength(3)]),
      contact :new FormControl ( null , [Validators.required,Validators.min(7000000000),Validators.max(9999999999)]),
    })
   }
   onSubmit() {
    this.submitted = true;
    this.emp = {
      firstName: this.first,lastName: this.last,contact: this.contact
   }
    console.log(this.emp.firstName);
    console.log(this.first+" "+this.last+" "+this.contact)
     
  }
  get f(): {[controlName: string]: AbstractControl}{
      return this.upload.controls;
  }
  //to add image
  url:string|null|ArrayBuffer  = "../../assets/uploadImage.png";
  onFileSelected(files: FileList | null) {
    if (files) {
        var reader = new FileReader()
        reader.readAsDataURL(files[0])
        reader.onload = (event:Event) => {
          let fileReader = event.target as FileReader
          this.url = fileReader.result;
        }
    }
  }
}
