package com.revamp.core.model;

import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.Proxy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "schoolimage")
@Proxy(lazy = false)
@EntityListeners(AuditingEntityListener.class)

public class SchoolImage extends AuditableEntity implements java.io.Serializable {

	private static final long serialVersionUID = -2136842348977561820L;
	
	public SchoolImage() {}
	
	public SchoolImage(String filePath, byte[] image, String comments) {
		this.filePath = filePath;
		this.image = image;
		this.comments = comments;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "image_id")
	private long imageId;

	@Column(name = "image",nullable = false)
	@Lob
	@JsonIgnore
	private byte[] image;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "school_id", nullable = false)
	private School school;
	
	@Column(name = "date_created")
	@Basic
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateCreated;

	@PrePersist
	protected void onCreate() {
		dateCreated = new Date();
	}

	@Column(name = "comments")
	private String comments;
	
	@Column(name = "filepath")
	private String filePath;
	
	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public long getImageId() {
		return imageId;
	}

	public void setImageId(long imageId) {
		this.imageId = imageId;
	}

	public School getSchool() {
		return school;
	}

	public void setSchool(School school) {
		this.school = school;
	}

	public byte[] getImage() {
		return image;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}


}
