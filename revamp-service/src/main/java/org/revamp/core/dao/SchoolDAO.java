package org.revamp.core.dao;

import org.revamp.core.model.School;

public interface SchoolDAO {

	long save(School school);

	School get(long id);
	
}
