package com.expensetracker.service;

import com.expensetracker.entity.User;
import com.expensetracker.entity.UserDTO;

public interface ExpenseTrackerService {

	public User signUp(UserDTO userDTO) throws Exception;

	public User signIn(UserDTO userDTO) throws Exception;

}
