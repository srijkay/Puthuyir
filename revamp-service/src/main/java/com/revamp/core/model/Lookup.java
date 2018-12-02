package com.revamp.core.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Proxy;

@Entity
@Table(name = "lookup")
@Proxy(lazy = false)
public class Lookup implements java.io.Serializable {

	private static final long serialVersionUID = -5981979079568808949L;

	@Id
	@Column(name = "field")
	private String field;

	
	@Column(name = "key")
	private String key;

	@Column(name = "value")
	private String value;

	@Column(name = "parent_field")
	private String parentField;

	@Column(name = "parent_key")
	private String parentKey;

	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getParentField() {
		return parentField;
	}

	public void setParentField(String parentField) {
		this.parentField = parentField;
	}

	public String getParentKey() {
		return parentKey;
	}

	public void setParentKey(String parentKey) {
		this.parentKey = parentKey;
	}

	@Override
	public String toString() {
		return "Lookup [field=" + field + ", key=" + key + ", value=" + value
				+ ", parentField=" + parentField + ", parentKey=" + parentKey
				+ "]";
	}

}
