package com.revamp.core.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.revamp.core.model.Quotation;

@Repository
public interface QuotationRepository extends CrudRepository<Quotation, Long> {

	@Query("from Quotation q where q.quotationStatus = :quotationStatus")
	public List<Quotation> getQuotationByStatus(@Param("quotationStatus") String quotationStatus);

	@Query("from Quotation q where q.schoolId = :schoolId")
	public List<Quotation> getQuotationsBySchool(@Param("schoolId") long schoolId);

}
