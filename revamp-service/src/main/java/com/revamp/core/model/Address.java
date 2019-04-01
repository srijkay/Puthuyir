package com.revamp.core.model;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Proxy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.revamp.core.lookup.PuthuyirLookUp;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "address")
@EntityListeners(AuditingEntityListener.class)
@Proxy(lazy = false)
@Getter
@Setter
@ToString
public class Address extends AuditableEntity implements java.io.Serializable {

	private static final long serialVersionUID = 1956522127988632591L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "address_id")
	@Getter(AccessLevel.NONE) @Setter(AccessLevel.NONE)private long addressId;

	@Column(name = "address_line_1")
	private String addressLine1;

	@Column(name = "address_line_2")
	private String addressLine2;

	@Column(name = "district_id")
	private String district;

	@Column(name = "city_id")
	private String city;

	@Column(name = "locality_id")
	private String locality;

	@Column(name = "pin_code")
	private String pinCode;

	@Column(name = "state")
	private String state;

	
}
