import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Emp } from '../Model/emp';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
    employee: Emp[] = [];
    constructor(private employeeSer : EmployeeService ){
        console.log("rrr")
    }
    ngOnInit(): void{
      this.employeeSer.getAllEmployee().subscribe(
        value => {this.employee = value},
        error =>{console.log("Error"),
        ()=>console.info('Completed')
      })
    }
}
