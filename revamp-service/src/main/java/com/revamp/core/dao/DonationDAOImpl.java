package com.revamp.core.dao;

import org.hibernate.SessionFactory;
import com.revamp.core.model.Donation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DonationDAOImpl implements DonationDAO {

	@Autowired
	private SessionFactory sessionFactory;

	public long donate(Donation donation) {
		sessionFactory.getCurrentSession().save(donation);
		return donation.getDonationId();
	}

	public Donation get(long id) {
		return sessionFactory.getCurrentSession().get(Donation.class, id);
	}

}