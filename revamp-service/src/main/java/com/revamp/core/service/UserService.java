package com.revamp.core.service;

import java.util.Optional;

import com.revamp.core.model.User;

public interface UserService {

	long save(User user);

	Optional<User> get(long id);
	
	User findByEmail(String email);

}
