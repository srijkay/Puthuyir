package com.revamp.core.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.revamp.core.dao.InvoiceRepository;
import com.revamp.core.model.Invoice;
@Service
@Transactional(readOnly = true)
public class InvoiceServiceImpl implements InvoiceService {

	@Autowired
	public InvoiceRepository repository;

	@Transactional
	public Invoice uploadInvoice(MultipartFile[] files ,Invoice invoice) {
		List<String> fileNames = new ArrayList<String>();
		try {

			List<Invoice> storedFile = new ArrayList<Invoice>();

		for (MultipartFile multiFile : files) {
				System.out.println("FileName" +multiFile.getOriginalFilename());
				
				Invoice pinvoice = repository.findByName(multiFile.getOriginalFilename());

				if (invoice != null) {
					invoice.setFile(multiFile.getBytes());
				} else {
					invoice = new Invoice(multiFile.getOriginalFilename(), multiFile.getContentType(),
							multiFile.getBytes());

				}
				fileNames.add(multiFile.getOriginalFilename());

				storedFile.add(invoice);

		
			}

	
		
			// Save to database

			repository.save(invoice);

		} catch (Exception ex) {
			ex.getMessage();

		}
		return null;
	}

	

}
