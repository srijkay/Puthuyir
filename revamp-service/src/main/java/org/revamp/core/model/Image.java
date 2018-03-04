package org.revamp.core.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.hibernate.annotations.Proxy;

@Entity
@Table(name = "image")
@Proxy(lazy = false)
public class Image implements java.io.Serializable {

	private static final long serialVersionUID = -2136842348977561820L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "image_id")
	private long imageId;

	@Column(name = "image")
	@Lob
	private byte[] image;

	public long getImageId() {
		return imageId;
	}

	public void setImageId(long imageId) {
		this.imageId = imageId;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Image [imageId=" + imageId + ", image=" + image + "]";
	}
	
	
}
