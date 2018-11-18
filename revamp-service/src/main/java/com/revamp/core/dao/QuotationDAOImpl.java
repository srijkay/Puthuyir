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
		return sessionFactory.getCurrentSession().createQuery(" from Quotation where isQuotationActive = 'Y'").list();
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
		sessionFactory.getCurrentSession().createQuery("update Quotation set isQuotationActive = 'N' where id = :id")
				.setParameter("id", quotationId).executeUpdate();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Quotation> getQuotationByStatus(String quotationStatus) {
		return sessionFactory.getCurrentSession()
				.createQuery(" from Quotation where quotationStatus = :quotationStatus")
				.setParameter("quotationStatus", quotationStatus).list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Quotation> getQuotationsBySchool(long schoolId) {
		return sessionFactory.getCurrentSession().createQuery(" from Quotation where schoolId = :schoolId")
				.setParameter("schoolId", schoolId).list();
	}

}
