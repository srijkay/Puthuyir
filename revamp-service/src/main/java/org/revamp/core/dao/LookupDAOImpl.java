package org.revamp.core.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.revamp.core.model.Asset;
import org.revamp.core.model.AssetType;
import org.revamp.core.model.City;
import org.revamp.core.model.District;
import org.revamp.core.model.ReqType;
import org.revamp.core.model.Role;
import org.revamp.core.model.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class LookupDAOImpl implements LookupDAO {

	@Autowired
	private SessionFactory sessionFactory;


	@SuppressWarnings("unchecked")
	@Override
	public List<State> getStates() {
		return sessionFactory.getCurrentSession().createQuery("FROM State").list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<District> getDistricts(String stateId) {
		return sessionFactory.getCurrentSession()
				.createQuery("FROM District where state_id = :stateId")
				.setParameter("stateId", stateId).list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<City> getCities(String districtId) {
		return sessionFactory.getCurrentSession()
				.createQuery("FROM City where district_id = :districtId")
				.setParameter("districtId", districtId).list();
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Role> getRoles() {
		return sessionFactory.getCurrentSession().createQuery("FROM Role").list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<ReqType> getReqTypes() {
		return sessionFactory.getCurrentSession().createQuery("FROM ReqType").list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<AssetType> getAssetTypes() {
		return sessionFactory.getCurrentSession().createQuery("FROM AssetType").list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Asset> getAssets(String assetTypeId) {
		return sessionFactory.getCurrentSession()
				.createQuery("FROM Asset where assetType_id = :assetTypeId")
				.setParameter("assetTypeId", assetTypeId).list();
	}
	
	

}