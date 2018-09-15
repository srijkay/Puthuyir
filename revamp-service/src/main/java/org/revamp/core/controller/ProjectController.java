package org.revamp.core.controller;

import org.revamp.core.model.Project;
import org.revamp.core.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProjectController {

	@Autowired
	private ProjectService projectService;

	@PutMapping("/project")
	public ResponseEntity<Project> saveOrUpdate(@RequestBody Project project) {
		long id = projectService.saveOrUpdate(project);
		project.setProjectId(id);
		System.out.println(project);
		return ResponseEntity.ok().body(project);
	}

	@GetMapping("/project/{id}")
	public ResponseEntity<Project> get(@PathVariable("id") long projectId) {
		Project project = projectService.get(projectId);
		return ResponseEntity.ok().body(project);
	}

}