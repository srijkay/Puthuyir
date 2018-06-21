package org.revamp.core.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Proxy;

@Entity
@Table(name = "assettype")
@Proxy(lazy = false)
public class AssetType implements java.io.Serializable {

	private static final long serialVersionUID = 6313731255157241701L;

	@Id
	@Column(name = "assettype_id", nullable = false)
	private String assetTypeId;

	@Column(name = "assettype_desc")
	private String assetTypeDesc;


	public String getAssetTypeId() {
		return assetTypeId;
	}

	public void setAssetTypeId(String assetTypeId) {
		this.assetTypeId = assetTypeId;
	}

	public String getAssetTypeDesc() {
		return assetTypeDesc;
	}

	public void setAssetTypeDesc(String assetTypeDesc) {
		this.assetTypeDesc = assetTypeDesc;
	}

	@Override
	public String toString() {
		return "AssetType [assetTypeId=" + assetTypeId + ", assetTypeDesc="
				+ assetTypeDesc + "]";
	}

}
