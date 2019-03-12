package com.revamp.core.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.revamp.core.model.User;
import com.revamp.core.service.UserService;

@RestController
public class AdminController {
	
	@Autowired UserService userService;
	
	@GetMapping("/admin/users/{status}")
	public List<User> findByStatus(@PathVariable("status") String status) {
		return userService.findByStatus(status);
	}	

}
