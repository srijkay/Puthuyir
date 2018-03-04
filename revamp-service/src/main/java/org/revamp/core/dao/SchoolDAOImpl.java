package org.revamp.core.dao;

import org.hibernate.SessionFactory;
import org.revamp.core.model.School;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class SchoolDAOImpl implements SchoolDAO {

	@Autowired
	private SessionFactory sessionFactory;

	public long save(School school) {
		sessionFactory.getCurrentSession().save(school);
		return school.getSchoolId();
	}

	public School get(long id) {
		return sessionFactory.getCurrentSession().get(School.class, id);
	}

}