package com.revamp.core.service;

import java.util.List;

import com.revamp.core.model.FundAllocation;

public interface FundAllocationService {
	
	long save(FundAllocation fundAllocation);

	FundAllocation getFundAllocations(long id);

	List<FundAllocation> getFundAllocations();
	
	void deleteFundAllocation(long id);

}
