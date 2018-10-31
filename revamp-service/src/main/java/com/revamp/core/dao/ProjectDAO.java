package com.revamp.core.dao;

import com.revamp.core.model.Project;

public interface ProjectDAO {

	long saveOrUpdate(Project project);

	Project get(long id);

}
