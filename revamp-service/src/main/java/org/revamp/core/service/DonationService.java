package org.revamp.core.service;

import org.revamp.core.model.Donation;

public interface DonationService {

	Donation donate(Donation donation);

	Donation get(long id);
	

}
