package org.revamp.core.service;

import java.util.List;

import org.revamp.core.model.Asset;
import org.revamp.core.model.AssetType;
import org.revamp.core.model.City;
import org.revamp.core.model.District;
import org.revamp.core.model.ReqType;
import org.revamp.core.model.Role;
import org.revamp.core.model.State;

public interface LookupService {

	List<State> getStates();

	List<District> getDistricts(String stateId);

	List<City> getCities(String districtId);

	List<Role> getRoles();

	List<ReqType> getReqTypes();

	List<AssetType> getAssetTypes();

	List<Asset> getAssets(String assetTypeId);

}
