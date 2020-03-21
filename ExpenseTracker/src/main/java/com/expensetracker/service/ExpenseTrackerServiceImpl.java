package com.expensetracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expensetracker.dao.ExpenseTrackerDAO;
import com.expensetracker.entity.User;
import com.expensetracker.entity.UserDTO;

@Service
public class ExpenseTrackerServiceImpl implements ExpenseTrackerService {

	@Autowired
	ExpenseTrackerDAO expenseTrackerDAO;

	@Override
	public User signUp(UserDTO userDTO) throws Exception {

		User user = new User();
		user.setEmail(userDTO.getEmail());
		user.setPassword(userDTO.getPassword());
		user.setUserName(userDTO.getUserName());
		user = expenseTrackerDAO.signUp(user);
		return user;
	}

	@Override
	public User signIn(UserDTO userDTO) throws Exception {
		// String password = "";
		return expenseTrackerDAO.signIn(userDTO.getEmail());
		// return password;
	}

}
