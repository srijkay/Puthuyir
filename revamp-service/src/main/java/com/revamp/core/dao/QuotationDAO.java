package com.revamp.core.dao;

import java.util.List;

import com.revamp.core.model.Quotation;

public interface QuotationDAO {
	
	Quotation save(Quotation quotation);
	
	Quotation getQuotation(long id);
	
	List<Quotation> getQuotations();

}
