package org.revamp.core.service;

import org.revamp.core.model.School;

public interface SchoolService {

	long save(School school);

	School get(long id);
	
}
