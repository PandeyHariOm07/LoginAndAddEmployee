import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-addedemp',
  templateUrl: './addedemp.component.html',
  styleUrls: ['./addedemp.component.scss']
})
export class AddedempComponent {
@Input() value: any;
@Input() ee: number=0;

}
