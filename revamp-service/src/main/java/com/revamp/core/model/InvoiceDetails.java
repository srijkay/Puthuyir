package com.revamp.core.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Proxy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "invoice_details")
@EntityListeners(AuditingEntityListener.class)
@Proxy(lazy = false)
public class InvoiceDetails extends AuditableEntity implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "invoice_details_id")
	private long invoice_details_id;
	
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "invoice_details")
   private Set<InvoiceRequirements> requirements;


	public Set<InvoiceRequirements> getRequirements() {
		return requirements;
	}

	public void setRequirements(Set<InvoiceRequirements> requirements) {
		this.requirements = requirements;
	}

	@Column(name = "from_address")
	private String fromAddress;
	
	@Column(name = "to_address")
	private String toAddress;

	@Column(name = "invoice_number")
	private String invoice_Number;
	
	
	@Column(name = "accountNumber")
	private String accountNumber;
	
	@Column(name = "invoice_date")
	private String invoice_date;
	
	@Column(name = "invoice_duedate")
	private String invoice_dueDate;
	
	@Column(name = "bankname")
	private String bankName;
	
	@Column(name = "phoneNumber")
	private String phoneNumber;
	
	@Column(name = "email_Id")
	private String emailId;

	public long getInvoice_details_id() {
		return invoice_details_id;
	}

	public void setInvoice_details_id(long invoice_details_id) {
		this.invoice_details_id = invoice_details_id;
	}

	public String getFromAddress() {
		return fromAddress;
	}

	public void setFromAddress(String fromAddress) {
		this.fromAddress = fromAddress;
	}

	public String getToAddress() {
		return toAddress;
	}

	public void setToAddress(String toAddress) {
		this.toAddress = toAddress;
	}

	public String getInvoice_Number() {
		return invoice_Number;
	}

	public void setInvoice_Number(String invoice_Number) {
		this.invoice_Number = invoice_Number;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getInvoice_date() {
		return invoice_date;
	}

	public void setInvoice_date(String invoice_date) {
		this.invoice_date = invoice_date;
	}

	

	public String getInvoice_dueDate() {
		return invoice_dueDate;
	}

	public void setInvoice_dueDate(String invoice_dueDate) {
		this.invoice_dueDate = invoice_dueDate;
	}

	

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
}
