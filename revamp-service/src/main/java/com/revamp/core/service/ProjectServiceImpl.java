package com.revamp.core.service;

import com.revamp.core.dao.ProjectDAO;
import com.revamp.core.model.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	private ProjectDAO projectDAO;

	@Transactional
	public long saveOrUpdate(Project project) {
		if(project.getSchool() == null) {
			Project projectBeforeUpdate =  projectDAO.get(project.getProjectId());
			projectBeforeUpdate.setEstimate(project.getEstimate());
			projectBeforeUpdate.setStatus(project.getStatus());
			projectBeforeUpdate.setCollectedAmount(project.getCollectedAmount());
			project = projectBeforeUpdate;
		}
		return projectDAO.saveOrUpdate(project);
	}

	public Project get(long id) {
		return projectDAO.get(id);
	}

}
