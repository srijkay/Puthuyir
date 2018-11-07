package com.revamp.core.dao;

import java.util.List;

import com.revamp.core.model.FundAllotment;

public interface FundAllotmentDAO {

long save(FundAllotment fundAllocation);
	
FundAllotment getFundAllocations(long id);
	
	List<FundAllotment> getFundAllocations();
	
	void delete(long id);

}
