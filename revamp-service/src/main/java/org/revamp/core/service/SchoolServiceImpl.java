package org.revamp.core.service;

import java.util.List;

import org.revamp.core.dao.SchoolDAO;
import org.revamp.core.model.School;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class SchoolServiceImpl implements SchoolService {

	@Autowired
	private SchoolDAO schoolDAO;

	@Transactional
	public long save(School school) {
		return schoolDAO.save(school);
	}

	public School get(long id) {
		return schoolDAO.get(id);
	}

	@Override
	public List<School> getAll() {
		return schoolDAO.getAll();
	}

	@Override
	public List<School> getAllByCity(String cityId) {
		return schoolDAO.getAllByCity(cityId);
	}

	@Override
	public List<School> getAllByDistrict(String districtId) {
		return schoolDAO.getAllByDistrict(districtId);
	}

	@Override
	public List<School> getAllByName(String contains) {
		return schoolDAO.getAllByName(contains);
	}

	@Override
	public List<School> getAllByLocality(String localityId) {
		return schoolDAO.getAllByLocality(localityId);
	}

}
