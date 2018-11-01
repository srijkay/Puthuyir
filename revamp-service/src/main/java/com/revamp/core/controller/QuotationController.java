package com.revamp.core.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revamp.core.model.Quotation;
import com.revamp.core.service.QuotationService;


@RestController
public class QuotationController {
	
	@Autowired QuotationService quotationService;
	
	@GetMapping("/quotations")
	public List<Quotation> getQuotations(){
		return quotationService.getQuotations();		
	}
	
	@GetMapping("/quotation/{id}")
	public Quotation getQuotation(@PathVariable("id") long quotationId){
		return quotationService.getQuotation(quotationId);		
	}	
	
	@PostMapping("/quotation")
	public ResponseEntity<Quotation> setQuotation(@RequestBody Quotation quotation){
		return ResponseEntity.ok().body(quotationService.save(quotation));		
	}	

}
