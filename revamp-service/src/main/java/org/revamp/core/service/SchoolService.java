package org.revamp.core.service;

import java.util.List;

import org.revamp.core.model.School;

public interface SchoolService {

	long save(School school);

	School get(long id);
	
	List<School> getAll();
	
	List<School> getAllByName(String contains);
	
	List<School> getAllByCity(String cityId);
	
	List<School> getAllByDistrict(String districtId);
	
	List<School> getAllByLocality(String localityId);

}
