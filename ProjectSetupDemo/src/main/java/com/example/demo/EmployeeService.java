package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;

	public List<Employee> getAllEmployees() {

		System.out.println("Employee Details");
		System.out.println("Updated Java Code");
		return employeeRepository.findAll();

	}

}
