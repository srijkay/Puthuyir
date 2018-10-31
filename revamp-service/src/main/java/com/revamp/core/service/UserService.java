package com.revamp.core.service;

import com.revamp.core.model.User;

public interface UserService {

	long save(User user);

	User get(long id);
	
	User findByEmail(String email);

}
