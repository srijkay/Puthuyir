package com.revamp.core.service;

import org.springframework.web.multipart.MultipartFile;

import com.revamp.core.model.Invoice;

public interface InvoiceService {
	
	public Invoice uploadInvoice(MultipartFile[] files,Invoice invoice);
}
