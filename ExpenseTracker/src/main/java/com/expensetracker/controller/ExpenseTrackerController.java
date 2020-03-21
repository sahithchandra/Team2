package com.expensetracker.controller;

import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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

		Predicate<UserDTO> p = u -> u.getPassword().equals(u.getConfirmPassword());
		if (p.test(userDTO)) {

			User user = null;
			try {
				user = expenseTrackerService.signUp(userDTO);
			} catch (Exception e) {
				return new ResponseEntity<String>("Email_Id Already exists.Please choose a different one !!",
						HttpStatus.OK);
			}

			return new ResponseEntity<String>(user.getUserName() + " succesfully Registered", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Password and Confirm Password doesn't match.Please Check !!",
					HttpStatus.OK);
		}

	}

	@PostMapping("/signin")
	public ResponseEntity<?> signin(@RequestBody UserDTO userDTO) {

		User user = null;
		String message = "";

		try {
			user = expenseTrackerService.signIn(userDTO);
			Predicate<String> p = s -> s.equalsIgnoreCase(userDTO.getPassword());

			if (p.test(user.getPassword())) {
				message = user.getUserName() + " Successfully signs in!!";
			} else {
				message = "Password doesn't match!!";
			}

		} catch (Exception e) {
			return new ResponseEntity<String>(userDTO.getEmail() + " not Found. Please Signup before signing in!!",
					HttpStatus.OK);
		}

		return new ResponseEntity<String>(message, HttpStatus.OK);
	}

}
