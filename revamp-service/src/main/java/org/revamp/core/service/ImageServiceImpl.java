package org.revamp.core.service;

import org.revamp.core.dao.ImageDAO;
import org.revamp.core.model.SchoolImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class ImageServiceImpl implements ImageService {

	@Autowired
	private ImageDAO imageDAO;

	@Transactional
	public long save(SchoolImage image) {
		return imageDAO.save(image);
	}

	public SchoolImage get(long id) {
		return imageDAO.get(id);
	}

}
