package com.revamp.core.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Proxy;

@Entity
@Table(name = "role")
@Proxy(lazy = false)
public class Role implements java.io.Serializable {

	private static final long serialVersionUID = 2811455068434644746L;

	@Id
	@Column(name = "roleid")
	private String roleId;

	@Column(name = "rolename")
	private String roleName;

	@Column(name = "accesslevel")
	private String accessLevel;

	public String getRoleId() {
		return roleId;
	}

	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getAccessLevel() {
		return accessLevel;
	}

	public void setAccessLevel(String accessLevel) {
		this.accessLevel = accessLevel;
	}

	@Override
	public String toString() {
		return "Role [roleId=" + roleId + ", roleName=" + roleName
				+ ", accessLevel=" + accessLevel + "]";
	}

}
