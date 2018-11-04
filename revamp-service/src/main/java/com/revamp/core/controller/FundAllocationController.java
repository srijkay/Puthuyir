package com.revamp.core.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revamp.core.model.FundAllocation;
import com.revamp.core.service.FundAllocationService;

/**
 * 
 * @author Puthyir Dev Team
 *
 */
@RestController
public class FundAllocationController {

	@Autowired
	FundAllocationService fundAllotService;
    /**
     * 
     * @return List
     */
	@GetMapping("/fundallocations")
	public List<FundAllocation> getFundAllocations() {
		return fundAllotService.getFundAllocations();
	}
    /**
     * 
     * @param fundAllocationId
     * @return
     */
	@GetMapping("/fundallocation/{id}")
	public FundAllocation getFundAllocation(@PathVariable("id") long fundAllocationId) {
		return fundAllotService.getFundAllocations(fundAllocationId);
	}
    /**
     * Save Fund
     * @param fundAllocation
     * @return
     */
	@PostMapping("/fundallocation")
	public ResponseEntity<FundAllocation> saveFundAllocation(@RequestBody FundAllocation fundAllocation) {
		long id = fundAllotService.save(fundAllocation);
		fundAllocation.setFundallotmentId(id);
		return ResponseEntity.ok().body(fundAllocation);
	}
    /**
     * Delete 
     * @param fundAllocationId
     * @return
     */
	@DeleteMapping("/fundallocation/{id}")
	public ResponseEntity<String> deleteFundAllocation(@PathVariable("id") long fundAllocationId) {
		fundAllotService.deleteFundAllocation(fundAllocationId);
		return new ResponseEntity<String>("DELETE Response", HttpStatus.OK);
	}
}
