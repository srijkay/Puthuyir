/*package com.revamp.core.controller;

import java.util.Date;

import com.revamp.core.model.Donation;
import com.revamp.core.service.DonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
*//**
 * 
 * @author PuthirDevTeam
 *
 *//*
@RestController
public class DonationController {

	@Autowired
	private DonationService donationService;

   *//**
    * 
    * @param donation
    * @return
    *//*
	@PostMapping("/donate")
	public ResponseEntity<Donation> save(@RequestBody Donation donation) {
		Date today = new Date();
		donation.setCreateDate(today);
		donation.getDonor().setDateCreated(today);
		donation = donationService.donate(donation);
		return ResponseEntity.ok().body(donation);
	}

}*/