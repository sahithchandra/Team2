import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

let serviceUrl: string = 'http://localhost:8585';

export interface Employee {
  employeeId: number;
  firstName: String;
  lastName: String;
  email: String
}


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  fetchEmployeeDetails: string = serviceUrl + "/demo/getEmployees";
  saveEmployeeDetails: string=   serviceUrl+"/demo/saveEmployees";

  console.log("hahaha");
  constructor(private http: HttpClient) { }

  fetchDetails() : Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>(this.fetchEmployeeDetails);
  }

  //saveDetails() : Observable<Employee>{
    //return this.http.post<Employee>(this.saveEmployeeDetails);
  //}

}
