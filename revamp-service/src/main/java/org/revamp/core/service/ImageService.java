package org.revamp.core.service;

import org.revamp.core.model.Image;

public interface ImageService {

	long save(Image image);

	Image get(long id);
	
}
