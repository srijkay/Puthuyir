package org.revamp.core.service;

import org.revamp.core.dao.UserDAO;
import org.revamp.core.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO userDAO;

	@Transactional
	public long save(User user) {
		return userDAO.save(user);
	}

	public User get(long id) {
		return userDAO.get(id);
	}

}
