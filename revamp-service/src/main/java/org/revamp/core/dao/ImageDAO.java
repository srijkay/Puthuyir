package org.revamp.core.dao;

import org.revamp.core.model.SchoolImage;

public interface ImageDAO {

	long save(SchoolImage image);

	SchoolImage get(long id);
	
}
