package org.revamp.core.service;

import org.revamp.core.dao.SchoolDAO;
import org.revamp.core.model.School;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class SchoolServiceImpl implements SchoolService {

	@Autowired
	private SchoolDAO schoolDAO;

	@Transactional
	public long save(School school) {
		return schoolDAO.save(school);
	}

	public School get(long id) {
		return schoolDAO.get(id);
	}

}
