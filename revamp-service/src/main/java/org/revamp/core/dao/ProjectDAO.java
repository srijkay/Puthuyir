package org.revamp.core.dao;

import org.revamp.core.model.Project;

public interface ProjectDAO {

	long saveOrUpdate(Project project);

	Project get(long id);

}
