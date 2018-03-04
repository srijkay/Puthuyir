package org.revamp.core.dao;

import org.revamp.core.model.Image;

public interface ImageDAO {

	long save(Image image);

	Image get(long id);
	
}
