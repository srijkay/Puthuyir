package com.revamp.core.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * 
 * @author Puthyir Dev Team
 *
 */
@Entity
@Table(name = "fundallotment")
public class FundAllocation implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="fundallotment_id")
	private long fundallotmentId;
	@Column(name="user_id")
	private long userId;
	
	@Column(name="requirement_id")
	private long requirementId;
	
	@Column(name = "collected_date")
	@Basic
	@Temporal(TemporalType.TIMESTAMP)
	private Date collected_date;
	@Column(name="totalamount")
	private long totalamount;
	
	@Column(name="interest")
	private long interest;
	
	@Column(name = "allocated_date")
	@Basic
	@Temporal(TemporalType.TIMESTAMP)
	private Date allocated_date;
	
	@Column(name = "updated_date")
	@Basic
	@Temporal(TemporalType.TIMESTAMP)
	private Date updated_date;

	
	public long getFundallotmentId() {
		return fundallotmentId;
	}

	public void setFundallotmentId(long fundallotmentId) {
		this.fundallotmentId = fundallotmentId;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public long getRequirementId() {
		return requirementId;
	}

	public void setRequirementId(long requirementId) {
		this.requirementId = requirementId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public Date getCollected_date() {
		return collected_date;
	}

	public void setCollected_date(Date collected_date) {
		this.collected_date = collected_date;
	}

	public long getTotalamount() {
		return totalamount;
	}

	public void setTotalamount(long totalamount) {
		this.totalamount = totalamount;
	}

	public long getInterest() {
		return interest;
	}

	public void setInterest(long interest) {
		this.interest = interest;
	}

	public Date getAllocated_date() {
		return allocated_date;
	}

	public void setAllocated_date(Date allocated_date) {
		this.allocated_date = allocated_date;
	}

	public Date getUpdated_date() {
		return updated_date;
	}

	public void setUpdated_date(Date updated_date) {
		this.updated_date = updated_date;
	}
	
}
