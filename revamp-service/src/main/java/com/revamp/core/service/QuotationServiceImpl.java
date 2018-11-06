package com.revamp.core.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revamp.core.dao.QuotationDAO;
import com.revamp.core.model.Quotation;

@Service
@Transactional
public class QuotationServiceImpl implements QuotationService {

	@Autowired
	private QuotationDAO quotationDAO;

	QuotationServiceImpl(QuotationDAO quotationDAO) {
		this.quotationDAO = quotationDAO;
	}

	@Override
	public Quotation getQuotation(long id) {
		return quotationDAO.getQuotation(id);
	}

	@Override
	public List<Quotation> getQuotations() {
		return quotationDAO.getQuotations();
	}

	@Override
	public long save(Quotation quotation) {		
		 return quotationDAO.save(quotation);
	}

	@Override
	public void deleteQuotation(long id) {
		quotationDAO.delete(id);		
	}

	@Override
	public List<Quotation> getQuotationByStatus(String quotationStatus) {		
		return quotationDAO.getQuotationByStatus(quotationStatus);
	}

}
