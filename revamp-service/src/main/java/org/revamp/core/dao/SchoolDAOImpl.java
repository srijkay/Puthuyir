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
		System.out.println(school);
		sessionFactory.getCurrentSession().save(school);
		
		/*for(Requirement requirement : school.getRequirements()) {
			requirement.setSchool(school);
			Date dateAdded = requirement.getDateAdded();
			if(dateAdded == null) {
				requirement.setDateAdded(new Date());
			}
			sessionFactory.getCurrentSession().save(requirement);
		}*/
		
		return school.getSchoolId();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<School> getAll() {
		List<School> list = sessionFactory.getCurrentSession().createQuery("FROM School").list();
		return list;
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
				.createQuery("FROM School s where s.address.district = :districtId")
				.setParameter("districtId", districtId).list();
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<School> getAllByLocality(String localityId) {
		return sessionFactory.getCurrentSession()
				.createQuery("FROM School s where s.address.locality = :localityId")
				.setParameter("localityId", localityId).list();
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<School> getAllByName(String contains) {
		return sessionFactory.getCurrentSession()
				.createQuery("FROM School s where lower(s.schoolName) like concat('%',:contains,'%')")
				.setParameter("contains",contains.toLowerCase()).list();
	}

}