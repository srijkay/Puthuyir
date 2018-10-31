package com.revamp.core.dao;

import org.hibernate.SessionFactory;
import com.revamp.core.model.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProjectDAOImpl implements ProjectDAO {

	@Autowired
	private SessionFactory sessionFactory;

	public long saveOrUpdate(Project project) {
		sessionFactory.getCurrentSession().saveOrUpdate(project);
		return project.getProjectId();
	}

	public Project get(long id) {
		return sessionFactory.getCurrentSession().get(Project.class, id);
	}


}