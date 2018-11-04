package com.revamp.core.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revamp.core.dao.FundAllocationDAO;
import com.revamp.core.model.FundAllocation;

/**
 * 
 * @author Puthyir Dev Team
 *
 */
@Service
@Transactional
public class FundAllocationServiceImpl implements FundAllocationService {

	@Autowired
	private FundAllocationDAO fundAllotDAO;

	@Override
	public long save(FundAllocation fundAllocation) {
		return fundAllotDAO.save(fundAllocation);
	}

	@Override
	public FundAllocation getFundAllocations(long id) {
		return fundAllotDAO.getFundAllocations(id);
	}

	@Override
	public List<FundAllocation> getFundAllocations() {
		return fundAllotDAO.getFundAllocations();
	}

	@Override
	public void deleteFundAllocation(long id) {
		fundAllotDAO.delete(id);

	}

}
