package com.revamp.core.model;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.hibernate.annotations.Proxy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.revamp.core.lookup.PuthuyirLookUp;
import com.revamp.core.web.util.SchoolSerializer;

@Entity
@Table(name = "school")
@Proxy(lazy = false)
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonSerialize(using = SchoolSerializer.class)
public class School extends AuditableEntity implements java.io.Serializable {

	private static final long serialVersionUID = 8607633702511344481L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "school_id", nullable = false)
	private long schoolId;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "school_info_id")
	private SchoolInfo schoolInfo;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "contacts_id")
	private Contacts contacts;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "address_id")
	private Address address;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "school")
	private Set<Project> projects;

	@Column(name = "date_created")
	@Basic
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateCreated;

	@Column(name = "status")
	@Enumerated(EnumType.STRING)
	private PuthuyirLookUp status;

	@JsonProperty("proofOfId")
	@Transient
	private ProofOfId proofOfId;
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id")
	private User user;


	
	@Transient
	private List<Requirement> requirements;
	

	public List<Requirement> getRequirements() {
		return requirements;
	}

	public void setRequirements(List<Requirement> requirements) {
		this.requirements = requirements;
	}
	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public ProofOfId getProofOfId() {
		return proofOfId;
	}

	public void setProofOfId(ProofOfId proofOfId) {
		this.proofOfId = proofOfId;
	}

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "school", cascade = CascadeType.ALL)
	@JsonIgnore
	private Set<SchoolImage> schoolImages;

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	public Set<SchoolImage> getSchoolImages() {
		if(schoolImages == null) {
			schoolImages = new HashSet<SchoolImage>();
		}
		return schoolImages;
	}

	public void setSchoolImages(Set<SchoolImage> schoolImages) {
		this.schoolImages = schoolImages;
	}

	@PrePersist
	protected void onCreate() {
		dateCreated = new Date();
	}

	public long getSchoolId() {
		return schoolId;
	}

	public void setSchoolId(long schoolId) {
		this.schoolId = schoolId;
	}

	public SchoolInfo getSchoolInfo() {
		return schoolInfo;
	}

	public void setSchoolInfo(SchoolInfo schoolInfo) {
		this.schoolInfo = schoolInfo;
	}

	public Contacts getContacts() {
		return contacts;
	}

	public void setContacts(Contacts contacts) {
		this.contacts = contacts;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}


	public Date getDateAdded() {
		return dateCreated;
	}

	public void setDateAdded(Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	public PuthuyirLookUp getStatus() {
		return status;
	}

	public void setStatus(PuthuyirLookUp status) {
		this.status = status;
	}

	public Set<Project> getProjects() {
		return projects;
	}

	public void setProjects(Set<Project> projects) {
		this.projects = projects;
	}
	
	@Override
	public String toString() {
		return "School [schoolId=" + schoolId + ", schoolInfo=" + schoolInfo
				+ ", contacts=" + contacts + ", address=" + address
				+ ", proofOfId=" + proofOfId + ", projects="
				+ projects + ", dateCreated=" + dateCreated + ", status=" + status
				+ "]";
	}

}
