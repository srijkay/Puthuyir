package com.revamp.core.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revamp.core.dao.FundAllotmentDAO;
import com.revamp.core.model.FundAllotment;

/**
 * 
 * @author Puthyir Dev Team
 *
 */
@Service
@Transactional
public class FundAllotmentServiceImpl implements FundAllotmentService {

	@Autowired
	private FundAllotmentDAO fundAllotDAO;

	@Override
	public long save(FundAllotment fundAllocation) {
		return fundAllotDAO.save(fundAllocation);
	}

	@Override
	public FundAllotment getFundAllocations(long id) {
		return fundAllotDAO.getFundAllocations(id);
	}

	@Override
	public List<FundAllotment> getFundAllocations() {
		return fundAllotDAO.getFundAllocations();
	}

	@Override
	public void deleteFundAllocation(long id) {
		fundAllotDAO.delete(id);

	}

}
