package org.revamp.core.controller;

import java.util.Date;

import org.revamp.core.model.User;
import org.revamp.core.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@Autowired
	private UserService userService;


	/*---Regsiter user---*/
	@PostMapping("/user")
	public ResponseEntity<User> save(@RequestBody User user) {
		user.setDateCreated(new Date());
		long id = userService.save(user);
		user.setUserid(id);
		return ResponseEntity.ok().body(user);
	}

	/*---Get a user by id---*/
	@GetMapping("/user/{id}")
	public ResponseEntity<User> get(@PathVariable("id") long userId) {
		User user = userService.get(userId);
		return ResponseEntity.ok().body(user);
	}
	
}