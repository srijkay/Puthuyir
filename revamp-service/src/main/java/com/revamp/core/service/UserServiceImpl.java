package com.revamp.core.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revamp.core.dao.UserDAO;
import com.revamp.core.model.User;

/*@Service
@Transactional(readOnly = true)*/
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO userDAO;

	@Transactional
	public long save(User school) {
	
		return userDAO.save(school);
	}

	public User get(long id) {
		return userDAO.get(id);
	}

	
	public User findByEmail(String email) {	
		return userDAO.findByEmail(email);
	}
    
	

}
