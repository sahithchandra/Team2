package com.expensetracker.controller;

import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.expensetracker.entity.Response;
import com.expensetracker.entity.User;
import com.expensetracker.entity.UserDTO;
import com.expensetracker.service.ExpenseTrackerService;

@RestController
@EnableJpaRepositories(basePackages = "com.expensetracker.dao")

public class ExpenseTrackerController {

	@Autowired
	ExpenseTrackerService expenseTrackerService;

	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody UserDTO userDTO) {

		Response response = new Response();

		User user = null;
		try {
			user = expenseTrackerService.signUp(userDTO);
		} catch (Exception e) {
			// 1-> Email_Id Already exists.Please choose a different one !!
			response.setIndicator(false);
			response.setMessage("1");
			return new ResponseEntity<Response>(response, HttpStatus.OK);
		}
		if (user != null) {
			// 0- success
			response.setIndicator(true);
			response.setMessage("0");

		}
		return new ResponseEntity<Response>(response, HttpStatus.OK);
	}

	@PostMapping("/signin")
	public ResponseEntity<?> signin(@RequestBody UserDTO userDTO) {

		User user = null;
		Response response = new Response();
		try {
			user = expenseTrackerService.signIn(userDTO);
			Predicate<String> p = s -> s.equalsIgnoreCase(userDTO.getPassword());

			if (p.test(user.getPassword())) {
				response.setIndicator(true);
				response.setMessage("0");
			} else {
				// 2- Password doesn't match!!
				response.setIndicator(false);
				response.setMessage("2");
			}

		} catch (Exception e) {
			// 3- email not found.Please Signup before signing in
			response.setIndicator(false);
			response.setMessage("3");
			return new ResponseEntity<Response>(response, HttpStatus.OK);
		}

		return new ResponseEntity<Response>(response, HttpStatus.OK);
	}

}
