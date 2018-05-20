package org.revamp.core.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.revamp.core.model.City;
import org.revamp.core.model.District;
import org.revamp.core.model.Role;
import org.revamp.core.model.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class LookupDAOImpl implements LookupDAO {

	@Autowired
	private SessionFactory sessionFactory;


	@SuppressWarnings("unchecked")
	@Override
	public List<State> getStates() {
		return sessionFactory.getCurrentSession().createQuery("FROM State").list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<District> getDistricts(String stateId) {
		return sessionFactory.getCurrentSession()
				.createQuery("FROM District where state_id = :stateId")
				.setParameter("stateId", stateId).list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<City> getCities(String districtId) {
		return sessionFactory.getCurrentSession()
				.createQuery("FROM City where district_id = :districtId")
				.setParameter("districtId", districtId).list();
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Role> getRoles() {
		return sessionFactory.getCurrentSession().createQuery("FROM Role").list();
	}

}