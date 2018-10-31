package com.revamp.core.dao;

import com.revamp.core.model.Donation;

public interface DonationDAO {

	long donate(Donation donation);

	Donation get(long id);
	
	/*List<Donation> getAllByProject(long projectId);
	List<Donation> getAllBySchool(long schoolId);*/

}
