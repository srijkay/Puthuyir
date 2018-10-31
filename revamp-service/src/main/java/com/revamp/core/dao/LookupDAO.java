package com.revamp.core.dao;

import java.util.List;

import com.revamp.core.model.Lookup;
import com.revamp.core.model.Role;

public interface LookupDAO {

	List<Role> getRoles();
	
	List<Lookup> lookup(String field);
	
	List<Lookup> lookupByParent(String field, String parentField, String parentKey);
}
