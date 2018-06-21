package org.revamp.core.dao;

import org.hibernate.SessionFactory;
import org.revamp.core.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAOImpl implements UserDAO {

	@Autowired
	private SessionFactory sessionFactory;

	public long save(User user) {
		sessionFactory.getCurrentSession().save(user);
		return user.getUserid();
	}

	public User get(long id) {
		return sessionFactory.getCurrentSession().get(User.class, id);
	}

}