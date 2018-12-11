package com.revamp.core.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

/**
 * The persistent class for the quotation database table.
 * 
 */
@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "quotation")
public class Quotation extends AuditableEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "quotation_id")
	private long quotationId;

	@Column(name = "collected_by")
	private String collectedBy;

	@Column(name = "image_id")
	private long imageId;

	@Column(name = "is_quotation_active")
	private String isQuotationActive;

	private String phone;

	@Column(name = "quotated_amount")
	private long quotatedAmount;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "quotation_date")
	private Date quotationDate;

	@Column(name = "quotation_status")
	private String quotationStatus;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "quotation_validity_date")
	private Date quotationValidityDate;

	private String reviewer;

	@Column(name = "trader_name")
	private String traderName;

	@Column(name = "verified_by")
	private String verifiedBy;

	private String warranty;

	@Column(name = "address_id")
	private long addressId;

	@Column(name = "requirement_id")
	private long requirementId;

	@Column(name = "school_id")
	private long schoolId;

	public Quotation() {
	}

	public long getQuotationId() {
		return this.quotationId;
	}

	public void setQuotationId(long quotationId) {
		this.quotationId = quotationId;
	}

	public String getCollectedBy() {
		return this.collectedBy;
	}

	public void setCollectedBy(String collectedBy) {
		this.collectedBy = collectedBy;
	}

	public long getImageId() {
		return this.imageId;
	}

	public void setImageId(long imageId) {
		this.imageId = imageId;
	}

	public String getIsQuotationActive() {
		return this.isQuotationActive;
	}

	public void setIsQuotationActive(String isQuotationActive) {
		this.isQuotationActive = isQuotationActive;
	}

	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public long getQuotatedAmount() {
		return this.quotatedAmount;
	}

	public void setQuotatedAmount(long quotatedAmount) {
		this.quotatedAmount = quotatedAmount;
	}

	public Date getQuotationDate() {
		return this.quotationDate;
	}

	public void setQuotationDate(Date quotationDate) {
		this.quotationDate = quotationDate;
	}

	public String getQuotationStatus() {
		return this.quotationStatus;
	}

	public void setQuotationStatus(String quotationStatus) {
		this.quotationStatus = quotationStatus;
	}

	public Date getQuotationValidityDate() {
		return this.quotationValidityDate;
	}

	public void setQuotationValidityDate(Date quotationValidityDate) {
		this.quotationValidityDate = quotationValidityDate;
	}

	public String getReviewer() {
		return this.reviewer;
	}

	public void setReviewer(String reviewer) {
		this.reviewer = reviewer;
	}

	public String getTraderName() {
		return this.traderName;
	}

	public void setTraderName(String traderName) {
		this.traderName = traderName;
	}

	public String getVerifiedBy() {
		return this.verifiedBy;
	}

	public void setVerifiedBy(String verifiedBy) {
		this.verifiedBy = verifiedBy;
	}

	public String getWarranty() {
		return this.warranty;
	}

	public void setWarranty(String warranty) {
		this.warranty = warranty;
	}

	public long getSchoolId() {
		return schoolId;
	}

	public long getAddressId() {
		return addressId;
	}

	public void setAddressId(long addressId) {
		this.addressId = addressId;
	}

	public long getRequirementId() {
		return requirementId;
	}

	public void setRequirementId(long requirementId) {
		this.requirementId = requirementId;
	}

	public void setSchoolId(long schoolId) {
		this.schoolId = schoolId;
	}

}