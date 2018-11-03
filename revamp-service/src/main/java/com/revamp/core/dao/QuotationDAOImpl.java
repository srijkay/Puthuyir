package com.revamp.core.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revamp.core.model.Quotation;

@Repository
public class QuotationDAOImpl implements QuotationDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@SuppressWarnings("unchecked")
	@Override
	public List<Quotation> getQuotations() {
		return sessionFactory.getCurrentSession().createQuery(" from Quotation ").list();
	}

	@Override
	public long save(Quotation quotation) {
		sessionFactory.getCurrentSession().save(quotation);
		return quotation.getQuotationId();
	}

	@Override
	public Quotation getQuotation(long quotationId) {
		return sessionFactory.getCurrentSession().get(Quotation.class, quotationId);
	}

	@Override
	public void delete(long quotationId) {
		sessionFactory.getCurrentSession().createQuery("delete from Quotation where id = :id").setParameter("id", quotationId)
				.executeUpdate();
	}

}
