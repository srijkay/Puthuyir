package org.revamp.core.dao;

import org.hibernate.SessionFactory;
import org.revamp.core.model.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ImageDAOImpl implements ImageDAO {

	@Autowired
	private SessionFactory sessionFactory;

	public long save(Image image) {
		sessionFactory.getCurrentSession().save(image);
		return image.getImageId();
	}

	public Image get(long id) {
		return sessionFactory.getCurrentSession().get(Image.class, id);
	}
}