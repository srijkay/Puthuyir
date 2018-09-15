package org.revamp.core.service;

import org.revamp.core.dao.DonationDAO;
import org.revamp.core.dao.ProjectDAO;
import org.revamp.core.dao.UserDAO;
import org.revamp.core.model.Donation;
import org.revamp.core.model.Project;
import org.revamp.core.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class DonationServiceImpl implements DonationService {

	@Autowired
	private DonationDAO donationDAO;
	
	@Autowired
	private ProjectDAO projectDAO;
	
	@Autowired
	private UserDAO userDAO;


	@Transactional
	@Override
	public Donation donate(Donation donation) {
		System.out.println("1");
		System.out.println(donation);
		User donor = donation.getDonor();
		long userId = donor.getUserid();
		
		if(userId == 0) {
			System.out.println("user id 0");
			userDAO.save(donor);
		} else {
			System.out.println("user id not 0");
			donor = userDAO.get(userId);
			System.out.println(donor);
			donation.setDonor(donor);
			System.out.println(donation);
			
		}
		
		long donationId = donationDAO.donate(donation);
		
		System.out.println("2");
		System.out.println(donationId);
		
		if(donationId != 0) {
			Project project = donation.getProject();
			if(project != null) {
				project = projectDAO.get(project.getProjectId());
				
				System.out.println("3");
				System.out.println(project);
				
				int collectedAmount = project.getCollectedAmount() + donation.getAmount();
				if(collectedAmount > project.getEstimate()) {
				}
				project.setCollectedAmount(collectedAmount);
				projectDAO.saveOrUpdate(project);
				
				donation = donationDAO.get(donationId);
				
				donation.setProject(project);
				
				System.out.println("4");
				System.out.println(donation);
				
				
			}
		}
		
		
		
		return donation;
	}

	@Override
	public Donation get(long id) {
		return donationDAO.get(id);
	}

}
