package org.revamp.core.controller;

import java.util.List;

import org.revamp.core.model.Lookup;
import org.revamp.core.model.Role;
import org.revamp.core.service.LookupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LookupController {

	@Autowired
	private LookupService lookupService;

	@GetMapping("/roles")
	public ResponseEntity<List<Role>> getRoles() {
		List<Role> roles = lookupService.getRoles();
		return ResponseEntity.ok().body(roles);
	}

	@GetMapping("/lookup/field/{field}")
	public ResponseEntity<List<Lookup>> lookup(
			@PathVariable("field") String field,
			@RequestParam(value = "parentfield", required = false) String parentField,
			@RequestParam(value = "parentkey", required = false) String parentKey) {
		
		List<Lookup> lookupList = null;
		if(parentField != null && parentKey != null) {
			lookupList = lookupService.lookupByParent(field,
					parentField, parentKey);
		} else {
			lookupList = lookupService.lookup(field);
		}
		
		return ResponseEntity.ok().body(lookupList);
	}

}