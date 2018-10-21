package com.revamp.core.service;

import com.revamp.core.model.Project;

public interface ProjectService {

	long saveOrUpdate(Project project);

	Project get(long id);
	
}
