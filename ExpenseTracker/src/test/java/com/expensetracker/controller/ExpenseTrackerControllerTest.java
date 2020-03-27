package com.expensetracker.controller;

import static org.mockito.Mockito.when;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.expensetracker.entity.User;
import com.expensetracker.entity.UserDTO;
import com.expensetracker.service.ExpenseTrackerService;

@RunWith(MockitoJUnitRunner.class)
public class ExpenseTrackerControllerTest {

	@InjectMocks
	ExpenseTrackerController expenseTrackerController;

	@Mock
	ExpenseTrackerService expenseTrackerService;

	@Test
	public void signUp() throws Exception {

		UserDTO userInput = new UserDTO();
		userInput.setEmail("acb@gmail.com");
		userInput.setPassword("123");
		userInput.setUsername("hello");

		User actualUser = new User();
		actualUser.setEmail("acb@gmail.com");
		actualUser.setPassword("123");
		actualUser.setUserName("hello");
		when(expenseTrackerService.signUp(userInput)).thenReturn(actualUser);

		ResponseEntity<?> responseEntity = expenseTrackerController.signUp(userInput);

		Assert.assertEquals(responseEntity.getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void signUpUserAlreadyExists() throws Exception {

		UserDTO userInput = new UserDTO();
		userInput.setEmail("acb@gmail.com");
		userInput.setPassword("123");
		userInput.setUsername("hello");

		when(expenseTrackerService.signUp(userInput)).thenThrow(new Exception());

		ResponseEntity<?> responseEntity = expenseTrackerController.signUp(userInput);

		Assert.assertEquals(responseEntity.getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void signUpNegative() throws Exception {

		UserDTO userInput = new UserDTO();
		userInput.setEmail("acb@gmail.com");
		userInput.setPassword("123");
		userInput.setUsername("hello");

		when(expenseTrackerService.signUp(userInput)).thenReturn(null);

		ResponseEntity<?> responseEntity = expenseTrackerController.signUp(userInput);

		Assert.assertEquals(responseEntity.getStatusCode(), HttpStatus.OK);
	}

	@Test
	public void signIn() throws Exception {
		UserDTO userInput = new UserDTO();
		userInput.setEmail("acb@gmail.com");
		userInput.setPassword("123");
		userInput.setUsername("hello");

		User actualUser = new User();
		actualUser.setEmail("acb@gmail.com");
		actualUser.setPassword("123");
		actualUser.setUserName("hello");

		when(expenseTrackerService.signIn(userInput)).thenReturn(actualUser);

		ResponseEntity<?> responseEntity = expenseTrackerController.signin(userInput);

		Assert.assertEquals(responseEntity.getStatusCode(), HttpStatus.OK);

	}

	@Test
	public void signInwrongPassword() throws Exception {
		UserDTO userInput = new UserDTO();
		userInput.setEmail("acb@gmail.com");
		userInput.setPassword("123");
		userInput.setUsername("hello");

		User actualUser = new User();
		actualUser.setEmail("acb@gmail.com");
		actualUser.setPassword("1234");
		actualUser.setUserName("hello");

		when(expenseTrackerService.signIn(userInput)).thenReturn(actualUser);

		ResponseEntity<?> responseEntity = expenseTrackerController.signin(userInput);

		Assert.assertEquals(responseEntity.getStatusCode(), HttpStatus.OK);

	}

	@Test
	public void signInNegative() throws Exception {
		UserDTO userInput = new UserDTO();
		userInput.setEmail("acb@gmail.com");
		userInput.setPassword("123");
		userInput.setUsername("hello");

		when(expenseTrackerService.signIn(userInput)).thenThrow(new Exception());

		ResponseEntity<?> responseEntity = expenseTrackerController.signin(userInput);

		Assert.assertEquals(responseEntity.getStatusCode(), HttpStatus.OK);

	}

}
