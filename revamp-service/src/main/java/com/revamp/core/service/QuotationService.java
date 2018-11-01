package com.revamp.core.service;

import java.util.List;

import com.revamp.core.model.Quotation;

public interface QuotationService {
	
	Quotation save(Quotation quotation);

	Quotation getQuotation(long id);

	List<Quotation> getQuotations();
}
