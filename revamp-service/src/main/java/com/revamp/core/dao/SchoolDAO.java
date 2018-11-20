package com.revamp.core.dao;

import java.util.List;

import com.revamp.core.model.School;

public interface SchoolDAO {

	long save(School school);

	School get(long id);
	
	List<School> getAll();
	
	List<School> getAllByName(String contains);
	
	List<School> getAllByCity(String cityId);
	
	List<School> getAllByDistrict(String districtId);
	
	List<School> getAllByLocality(String localityId);
	
	List<School> getByUserId(long userId);
}
