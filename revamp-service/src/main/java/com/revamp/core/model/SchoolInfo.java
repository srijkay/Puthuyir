package com.revamp.core.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Proxy;

@Entity
@Table(name = "schoolinfo")
@Proxy(lazy = false)
public class SchoolInfo implements java.io.Serializable {

	private static final long serialVersionUID = 6787703655405276366L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "school_info_id", nullable = false)
	private long schoolInfoId;

	@Column(name = "school_reg_number")
	private String schoolRegNo;

	@Column(name = "school_name")
	private String schoolName;

	@Column(name = "school_type")
	private String schoolType;

	@Column(name = "number_of_students")
	private int numberOfStudents;

	@Column(name = "number_of_teachers")
	private int numberOfTeachers;

	public long getSchoolInfoId() {
		return schoolInfoId;
	}

	public void setSchoolInfoId(long schoolInfoId) {
		this.schoolInfoId = schoolInfoId;
	}

	public String getSchoolRegNo() {
		return schoolRegNo;
	}

	public void setSchoolRegNo(String schoolRegNo) {
		this.schoolRegNo = schoolRegNo;
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

	@Override
	public String toString() {
		return "SchoolInfo [schoolInfoId=" + schoolInfoId + ", schoolRegNo="
				+ schoolRegNo + ", schoolName=" + schoolName + ", schoolType="
				+ schoolType + ", numberOfStudents=" + numberOfStudents
				+ ", numberOfTeachers=" + numberOfTeachers + "]";
	}

}
