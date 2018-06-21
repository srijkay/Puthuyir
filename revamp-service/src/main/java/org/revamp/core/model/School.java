package org.revamp.core.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
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

import org.hibernate.annotations.Proxy;

@Entity
@Table(name = "school")
@Proxy(lazy = false)
public class School implements java.io.Serializable {

	private static final long serialVersionUID = 8607633702511344481L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "school_id", nullable = false)
	private long schoolId;

	@Column(name = "school_name")
	private String schoolName;

	@Column(name = "school_type")
	private String schoolType;

	@Column(name = "head_master_name")
	private String headMasterName;

	@Column(name = "head_master_email")
	private String headMasterEmail;

	@Column(name = "number_of_students")
	private int numberOfStudents;

	@Column(name = "number_of_teachers")
	private int numberOfTeachers;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "address_id")
	private Address address;

	@Column(name = "proof_of_identity_id")
	private long proofOfIdentity;

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "school")
	private List<Requirement> requirements;

	@Column(name = "date_created")
	@Basic
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateAdded;

	@PrePersist
	protected void onCreate() {
		dateAdded = new Date();
	}

	public long getSchoolId() {
		return schoolId;
	}

	public void setSchoolId(long schoolId) {
		this.schoolId = schoolId;
	}

	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

	public String getSchoolType() {
		return schoolType;
	}

	public void setSchoolType(String schoolType) {
		this.schoolType = schoolType;
	}

	public String getHeadMasterName() {
		return headMasterName;
	}

	public void setHeadMasterName(String headMasterName) {
		this.headMasterName = headMasterName;
	}

	public String getHeadMasterEmail() {
		return headMasterEmail;
	}

	public void setHeadMasterEmail(String headMasterEmail) {
		this.headMasterEmail = headMasterEmail;
	}

	public int getNumberOfStudents() {
		return numberOfStudents;
	}

	public void setNumberOfStudents(int numberOfStudents) {
		this.numberOfStudents = numberOfStudents;
	}

	public int getNumberOfTeachers() {
		return numberOfTeachers;
	}

	public void setNumberOfTeachers(int numberOfTeachers) {
		this.numberOfTeachers = numberOfTeachers;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public long getProofOfIdentity() {
		return proofOfIdentity;
	}

	public void setProofOfIdentity(long proofOfIdentity) {
		this.proofOfIdentity = proofOfIdentity;
	}

	public List<Requirement> getRequirements() {
		return requirements;
	}

	public void setRequirements(List<Requirement> requirements) {
		this.requirements = requirements;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	@Override
	public String toString() {
		return "School [schoolId=" + schoolId + ", schoolName=" + schoolName
				+ ", schoolType=" + schoolType + ", headMasterName="
				+ headMasterName + ", headMasterEmail=" + headMasterEmail
				+ ", numberOfStudents=" + numberOfStudents
				+ ", numberOfTeachers=" + numberOfTeachers + ", address="
				+ address + ", proofOfIdentity=" + proofOfIdentity
				+ ", requirements=" + requirements + ", dateAdded=" + dateAdded
				+ "]";
	}

}
