package com.revamp.core.service;

import com.revamp.core.model.Donation;

public interface DonationService {

	Donation donate(Donation donation);

	Donation get(long id);
	

}
