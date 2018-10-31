package com.revamp.core.dao;

import org.hibernate.SessionFactory;
<<<<<<< HEAD:revamp-service/src/main/java/org/revamp/core/dao/ImageDAOImpl.java
import org.revamp.core.model.SchoolImage;
=======
>>>>>>> feature_Kamalkanth:revamp-service/src/main/java/com/revamp/core/dao/ImageDAOImpl.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revamp.core.model.SchoolImage;

@Repository
public class ImageDAOImpl implements ImageDAO {

	@Autowired
	private SessionFactory sessionFactory;

	public long save(SchoolImage image) {
		sessionFactory.getCurrentSession().save(image);
		return image.getImageId();
	}

	public SchoolImage get(long id) {
		return sessionFactory.getCurrentSession().get(SchoolImage.class, id);
	}
}