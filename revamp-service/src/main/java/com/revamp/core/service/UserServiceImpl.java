package com.revamp.core.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revamp.core.dao.UserRepository;
import com.revamp.core.model.User;

@Service
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Transactional
	public long save(User school) {
	
		return userRepository.save(school).getUserid();
	}

	public Optional<User> get(long id) {
		return userRepository.findById(id);
	}

	
	public User findByEmail(String email) {	
		return userRepository.findByEmail(email);
	}
    
	

}
