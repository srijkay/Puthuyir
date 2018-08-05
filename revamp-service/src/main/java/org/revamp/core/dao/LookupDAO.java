package org.revamp.core.dao;

import java.util.List;

import org.revamp.core.model.Lookup;
import org.revamp.core.model.Role;

public interface LookupDAO {

	List<Role> getRoles();
	
	List<Lookup> lookup(String field);
	
	List<Lookup> lookupByParent(String field, String parentField, String parentKey);
}
