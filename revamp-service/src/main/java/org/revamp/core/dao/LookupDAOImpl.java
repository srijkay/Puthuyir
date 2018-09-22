package org.revamp.core.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.revamp.core.model.Lookup;
import org.revamp.core.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class LookupDAOImpl implements LookupDAO {

	@Autowired
	private SessionFactory sessionFactory;


	@SuppressWarnings("unchecked")
	@Override
	public List<Role> getRoles() {
		return sessionFactory.getCurrentSession().createQuery("FROM Role").list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Lookup> lookup(String field) {
		return sessionFactory.getCurrentSession()
				.createQuery("FROM Lookup where field = :field")
				.setParameter("field", field).list();
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Lookup> lookupByParent(String field, String parentField, String parentKey) {
		return sessionFactory.getCurrentSession()
				.createQuery("FROM Lookup where field = :field and parent_field = :parentField and parent_key = :parentKey")
				.setParameter("field", field)
				.setParameter("parentField", parentField)
				.setParameter("parentKey", parentKey)
				.list();
	}
}