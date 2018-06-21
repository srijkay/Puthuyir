package org.revamp.core.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Proxy;

@Entity
@Table(name = "reqtype")
@Proxy(lazy = false)
public class ReqType implements java.io.Serializable {


	private static final long serialVersionUID = 8260581496754367282L;

	@Id
	@Column(name = "reqtype_id", nullable = false)
	private String reqTypeId;

	@Column(name = "reqtype_desc")
	private String reqTypeDesc;


	public String getReqTypeId() {
		return reqTypeId;
	}

	public void setReqTypeId(String reqTypeId) {
		this.reqTypeId = reqTypeId;
	}

	public String getReqTypeDesc() {
		return reqTypeDesc;
	}

	public void setReqTypeDesc(String reqTypeDesc) {
		this.reqTypeDesc = reqTypeDesc;
	}

	@Override
	public String toString() {
		return "ReqType [reqTypeId=" + reqTypeId + ", reqTypeDesc="
				+ reqTypeDesc + "]";
	}

}
