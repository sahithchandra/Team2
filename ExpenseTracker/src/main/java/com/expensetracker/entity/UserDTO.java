package com.expensetracker.entity;

import lombok.Data;

@Data
public class UserDTO {

	private Integer userId;
	private String userName;
	private String email;
	private String password;
	private String confirmPassword;

}
