package com.revamp.core.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Proxy;

@Entity
@Table(name = "contacts")
@Proxy(lazy = false)
public class Contacts implements java.io.Serializable {

	private static final long serialVersionUID = 1769915147037089195L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "contacts_id", nullable = false)
	private long contactsId;

	@Column(name = "pri_name")
	private String priName;

	@Column(name = "pri_num")
	private String priNum;

	@Column(name = "pri_email")
	private String priEmail;

	@Column(name = "sec_name")
	private String secName;

	@Column(name = "sec_num")
	private String secNum;

	@Column(name = "sec_email")
	private String secEmail;


	public long getContactsId() {
		return contactsId;
	}

	public void setContactsId(long contactsId) {
		this.contactsId = contactsId;
	}

	public String getPriName() {
		return priName;
	}

	public void setPriName(String priName) {
		this.priName = priName;
	}

	public String getPriNum() {
		return priNum;
	}

	public void setPriNum(String priNum) {
		this.priNum = priNum;
	}

	public String getPriEmail() {
		return priEmail;
	}

	public void setPriEmail(String priEmail) {
		this.priEmail = priEmail;
	}

	public String getSecName() {
		return secName;
	}

	public void setSecName(String secName) {
		this.secName = secName;
	}

	public String getSecNum() {
		return secNum;
	}

	public void setSecNum(String secNum) {
		this.secNum = secNum;
	}

	public String getSecEmail() {
		return secEmail;
	}

	public void setSecEmail(String secEmail) {
		this.secEmail = secEmail;
	}

	@Override
	public String toString() {
		return "Contacts [contactsId=" + contactsId + ", priName=" + priName
				+ ", priNum=" + priNum + ", priEmail=" + priEmail
				+ ", secName=" + secName + ", secNum=" + secNum + ", secEmail="
				+ secEmail + "]";
	}

}
