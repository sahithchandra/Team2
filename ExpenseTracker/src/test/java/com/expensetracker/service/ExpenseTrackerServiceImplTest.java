package com.expensetracker.service;

import static org.mockito.Mockito.when;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import com.expensetracker.dao.ExpenseTrackerDAO;
import com.expensetracker.entity.User;
import com.expensetracker.entity.UserDTO;

@RunWith(MockitoJUnitRunner.class)
public class ExpenseTrackerServiceImplTest {

	@InjectMocks
	ExpenseTrackerServiceImpl expenseTrackerServiceImpl;

	@Mock
	ExpenseTrackerDAO expenseTrackerDAO;

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

		when(expenseTrackerDAO.signUp(actualUser)).thenReturn(actualUser);

		User expectedUser = expenseTrackerServiceImpl.signUp(userInput);

		Assert.assertEquals(expectedUser.getUserName(), actualUser.getUserName());

	}

	@Test
	public void signIn() throws Exception {

		UserDTO userDTO = new UserDTO();
		userDTO.setEmail("acb@gmail.com");
		User actualUser = new User();
		actualUser.setEmail("acb@gmail.com");
		actualUser.setPassword("123");
		actualUser.setUserName("hello");

		when(expenseTrackerDAO.signIn(userDTO.getEmail())).thenReturn(actualUser);
		User expectedUser = expenseTrackerServiceImpl.signIn(userDTO);
		Assert.assertEquals(expectedUser.getPassword(), actualUser.getPassword());

	}

}