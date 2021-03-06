package org.revamp.core.service;

import java.util.List;

import org.revamp.core.dao.LookupDAO;
import org.revamp.core.model.Asset;
import org.revamp.core.model.AssetType;
import org.revamp.core.model.City;
import org.revamp.core.model.District;
import org.revamp.core.model.ReqType;
import org.revamp.core.model.Role;
import org.revamp.core.model.State;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class LookupServiceImpl implements LookupService {

	@Autowired
	private LookupDAO lookupDAO;

	@Override
	public List<State> getStates() {
		return lookupDAO.getStates();
	}

	@Override
	public List<District> getDistricts(String stateId) {
		return lookupDAO.getDistricts(stateId);
	}

	@Override
	public List<City> getCities(String districtId) {
		return lookupDAO.getCities(districtId);
	}

	@Override
	public List<Role> getRoles() {
		return lookupDAO.getRoles();
	}

	@Override
	public List<ReqType> getReqTypes() {
		return lookupDAO.getReqTypes();
	}

	@Override
	public List<AssetType> getAssetTypes() {
		return lookupDAO.getAssetTypes();
	}

	@Override
	public List<Asset> getAssets(String assetTypeId) {
		return lookupDAO.getAssets(assetTypeId);
	}

}
