package com.revamp.core.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revamp.core.dao.DonationRepository;
import com.revamp.core.dao.ProjectRepository;
import com.revamp.core.dao.UserRepository;
import com.revamp.core.model.Donation;
import com.revamp.core.model.Project;
import com.revamp.core.model.User;

@Service
@Transactional(readOnly = true)
public class DonationServiceImpl implements DonationService {

	@Autowired
	private DonationRepository donationRepository;

	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private UserRepository userRepository;

	@Transactional
	@Override
	public Donation donate(Donation donation) {
		System.out.println("1");
		System.out.println(donation);
		User donor = donation.getDonor();
		long userId = donor.getUserid();

		if (userId == 0) {
			System.out.println("user id 0");
			userRepository.save(donor);
		} else {
			System.out.println("user id not 0");
			donor = userRepository.findById(userId).orElse(null);
			System.out.println(donor);
			donation.setDonor(donor);
			System.out.println(donation);

		}

		Donation donation2 = ((DonationServiceImpl) donationRepository).donate(donation);
		long donationId = donation2.getDonationId();

		System.out.println("2");
		System.out.println(donationId);

		if (donationId != 0) {
			Project project = donation.getProject();
			if (project != null) {
				project = projectRepository.findById(project.getProjectId()).orElse(null);

				System.out.println("3");
				System.out.println(project);

				int collectedAmount = project.getCollectedAmount() + donation.getAmount();
				if (collectedAmount > project.getEstimate()) {
				}
				project.setCollectedAmount(collectedAmount);
				projectRepository.save(project);

				donation = donationRepository.findById(donationId).orElse(null);

				donation.setProject(project);

				System.out.println("4");
				System.out.println(donation);

			}
		}

		return donation;
	}

	@Override
	public Donation get(long id) {
		return donationRepository.findById(id).orElse(null);
	}

}
