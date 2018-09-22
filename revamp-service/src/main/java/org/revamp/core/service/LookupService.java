package org.revamp.core.service;

import java.util.List;

import org.revamp.core.model.Lookup;
import org.revamp.core.model.Role;

public interface LookupService {

	List<Role> getRoles();

	List<Lookup> lookup(String field);

	List<Lookup> lookupByParent(String field, String parentField,
			String parentKey);

}
