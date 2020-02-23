import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from 'src/app/services/employee.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee : Array<Employee> = [];

  constructor(private employeeservice: EmployeeService) { }

  ngOnInit(): void {
  }

  getDetails(): void {
    this.employeeservice.fetchDetails().subscribe(employee => {
      this.employee = employee;
    });
  }

}
