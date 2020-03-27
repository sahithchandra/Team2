package com.expensetracker.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.expensetracker.entity.User;

@Component
public class ExpenseTrackerDAO {

	@Autowired
	ExpenseTrackerRepository expenseTrackerRepository;

	public User signUp(User user) throws Exception {

		return expenseTrackerRepository.save(user);

	}

	public User signIn(String email) throws Exception {
		return expenseTrackerRepository.signIn(email);

	}

}
