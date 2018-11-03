package com.revamp.core.dao;

import com.revamp.core.model.User;

public interface UserDAO {

	long save(User user);

	User get(long id);
	
	User findByEmail(String  email);

}
