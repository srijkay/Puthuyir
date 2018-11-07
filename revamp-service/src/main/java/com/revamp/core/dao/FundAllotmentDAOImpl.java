package com.revamp.core.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revamp.core.model.FundAllotment;
/**
 * 
 * @author Puthyir Dev Team
 *
 */
@Repository
public class FundAllotmentDAOImpl implements FundAllotmentDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public long save(FundAllotment fundAllocation) {
		sessionFactory.getCurrentSession().save(fundAllocation);
		return fundAllocation.getFundallotmentId();
	}

	@Override
	public FundAllotment getFundAllocations(long fundAllocateId) {
		return sessionFactory.getCurrentSession().get(FundAllotment.class,fundAllocateId);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<FundAllotment> getFundAllocations() {
	
		return sessionFactory.getCurrentSession().createQuery("from FundAllotment").list();
	}

	@Override
	public void delete(long fundallotmentId) {
		sessionFactory.getCurrentSession().createQuery("delete from FundAllotment where id = :id")
		.setParameter("id", fundallotmentId)
		.executeUpdate();
}

}
