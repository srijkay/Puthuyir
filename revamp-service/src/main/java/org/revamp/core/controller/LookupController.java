package org.revamp.core.controller;

import java.util.List;

import org.revamp.core.model.City;
import org.revamp.core.model.District;
import org.revamp.core.model.Role;
import org.revamp.core.model.State;
import org.revamp.core.service.LookupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LookupController {

	@Autowired
	private LookupService lookupService;

	@GetMapping("/states")
	public ResponseEntity<List<State>> getStates() {
		List<State> states = lookupService.getStates();
		return ResponseEntity.ok().body(states);
	}

	@GetMapping("/districts/state/{stateid}")
	public ResponseEntity<List<District>> getDistricts(
			@PathVariable("stateid") String stateId) {
		List<District> districts = lookupService.getDistricts(stateId);
		return ResponseEntity.ok().body(districts);
	}

	@GetMapping("/cities/district/{districtid}")
	public ResponseEntity<List<City>> getCities(
			@PathVariable("districtid") String districtId) {
		List<City> cities = lookupService.getCities(districtId);
		return ResponseEntity.ok().body(cities);
	}
	
	@GetMapping("/roles")
	public ResponseEntity<List<Role>> getRoles() {
		List<Role> roles = lookupService.getRoles();
		return ResponseEntity.ok().body(roles);
	}

}