package org.revamp.core.service;

import org.revamp.core.model.SchoolImage;

public interface ImageService {

	long save(SchoolImage image);

	SchoolImage get(long id);
	
}
