import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emp } from '../Model/emp';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee: Emp[] = [];
  constructor(private http: HttpClient) {
      console.log("Hii")
     }
     getAllEmployee(): Observable<Emp[]>{
      return this.http.get<Emp[]>("../../dataSource/employee.json");
     }
}
