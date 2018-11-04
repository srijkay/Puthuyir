package com.revamp.core.dao;

import java.util.List;

import com.revamp.core.model.FundAllocation;

public interface FundAllocationDAO {

long save(FundAllocation fundAllocation);
	
FundAllocation getFundAllocations(long id);
	
	List<FundAllocation> getFundAllocations();
	
	void delete(long id);

}
