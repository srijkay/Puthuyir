package com.revamp.core.model;

import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.Proxy;

@Entity
@Table(name = "donation")
@Proxy(lazy = false)
public class Donation implements java.io.Serializable {

	private static final long serialVersionUID = -1748436992625970292L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "donation_id", nullable = false)
	private long donationId;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "project_id")
	private Project project;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "donor_id")
	private User donor;

	@Column(name = "payment_mode")
	private String paymentMode;

	@Column(name = "amount")
	private int amount;

	@Column(name = "payment_status")
	private String paymentStatus = "PENDING";

	@Column(name = "createdate")
	@Basic
	@Temporal(TemporalType.TIMESTAMP)
	private Date createDate;

	public long getDonationId() {
		return donationId;
	}

	public void setDonationId(long donationId) {
		this.donationId = donationId;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public User getDonor() {
		return donor;
	}

	public void setDonor(User donor) {
		this.donor = donor;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	@Override
	public String toString() {
		return "Donation [donationId=" + donationId + ", project=" + project
				+ ", donor=" + donor + ", paymentMode=" + paymentMode
				+ ", amount=" + amount + ", paymentStatus=" + paymentStatus
				+ ", createDate=" + createDate + "]";
	}

}
