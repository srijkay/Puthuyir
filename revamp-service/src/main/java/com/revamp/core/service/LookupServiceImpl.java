package com.revamp.core.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revamp.core.dao.LookupDAO;
import com.revamp.core.model.Lookup;
import com.revamp.core.model.Role;

/*@Service
@Transactional(readOnly = true)*/
public class LookupServiceImpl implements LookupService {

	@Autowired
	private LookupDAO lookupDAO;

	@Override
	public List<Role> getRoles() {
		return lookupDAO.getRoles();
	}

	@Override
	public List<Lookup> lookup(String field) {
		return lookupDAO.lookup(field);
	}

	@Override
	public List<Lookup> lookupByParent(String field, String parentField,
			String parentKey) {
		return lookupDAO.lookupByParent(field, parentField, parentKey);
	}

}
