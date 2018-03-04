package org.revamp.core.controller;

import org.revamp.core.model.School;
import org.revamp.core.service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SchoolController {

	@Autowired
	private SchoolService schoolService;


	/*---Add new school---*/
	@PostMapping("/school")
	public ResponseEntity<School> save(@RequestBody School school) {
		long id = schoolService.save(school);
		school.setSchoolId(id);
		return ResponseEntity.ok().body(school);
	}

	/*---Get a school by id---*/
	@GetMapping("/school/{id}")
	public ResponseEntity<School> get(@PathVariable("id") long schoolId) {
		School school = schoolService.get(schoolId);
		return ResponseEntity.ok().body(school);
	}

}