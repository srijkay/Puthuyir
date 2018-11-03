package com.revamp.core.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revamp.core.model.User;

@Repository
public class UserDAOImpl implements UserDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	
	public long save(User user) {
		sessionFactory.getCurrentSession().save(user);
		return user.getUserid();
	}

	public User get(long id) {
		return sessionFactory.getCurrentSession().get(User.class,  id);
	}

	
	public User findByEmail(String email) {
		
		return (User) sessionFactory.getCurrentSession()
				.createQuery("FROM User s WHERE s.emailAddress = :pEmail")
				.setParameter("pEmail", email)
				.uniqueResult();
	
	}

	
	
}