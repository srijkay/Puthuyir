package org.revamp.core.service;

import java.util.List;

import org.revamp.core.model.City;
import org.revamp.core.model.District;
import org.revamp.core.model.Role;
import org.revamp.core.model.State;

public interface LookupService {

	List<State> getStates();

	List<District> getDistricts(String stateId);

	List<City> getCities(String districtId);
	
	List<Role> getRoles();

}
