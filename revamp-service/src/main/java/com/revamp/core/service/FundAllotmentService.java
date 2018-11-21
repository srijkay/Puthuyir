package com.revamp.core.service;

import java.util.List;

import com.revamp.core.model.FundAllotment;

public interface FundAllotmentService {
	
	long save(FundAllotment fundAllocation);

	FundAllotment getFundAllocations(long id);

	List<FundAllotment> getFundAllocations();
	
	void deleteFundAllocation(long id);

}
