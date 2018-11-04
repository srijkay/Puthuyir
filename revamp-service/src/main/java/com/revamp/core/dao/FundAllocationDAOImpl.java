package com.revamp.core.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revamp.core.model.FundAllocation;
/**
 * 
 * @author Puthyir Dev Team
 *
 */
@Repository
public class FundAllocationDAOImpl implements FundAllocationDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public long save(FundAllocation fundAllocation) {
		sessionFactory.getCurrentSession().save(fundAllocation);
		return fundAllocation.getFundallotmentId();
	}

	@Override
	public FundAllocation getFundAllocations(long fundAllocateId) {
		return sessionFactory.getCurrentSession().get(FundAllocation.class,fundAllocateId);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<FundAllocation> getFundAllocations() {
	
		return sessionFactory.getCurrentSession().createQuery("from FundAllocation").list();
	}

	@Override
	public void delete(long fundallotmentId) {
		sessionFactory.getCurrentSession().createQuery("delete from FundAllocation where id = :id")
		.setParameter("id", fundallotmentId)
		.executeUpdate();
}

}
