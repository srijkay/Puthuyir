package org.revamp.core.dao;

import java.util.List;

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

	@SuppressWarnings("unchecked")
	@Override
	public List<School> getAll() {
		return sessionFactory.getCurrentSession().createQuery("FROM School").list();
	}
	
	public School get(long id) {
		return sessionFactory.getCurrentSession().get(School.class, id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<School> getAllByCity(String cityId) {
		return sessionFactory.getCurrentSession()
				.createQuery("FROM School s where s.address.city = :cityId")
				.setParameter("cityId", cityId).list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<School> getAllByDistrict(String districtId) {
		return sessionFactory.getCurrentSession()
				.createQuery("FROM School s where s.address.city.district = :districtId")
				.setParameter("districtId", districtId).list();
	}


}