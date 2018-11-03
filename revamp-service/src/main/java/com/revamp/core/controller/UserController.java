package com.revamp.core.controller;

import java.util.Date;

import javax.servlet.ServletException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revamp.core.model.User;
import com.revamp.core.response.UserResponse;
import com.revamp.core.service.UserService;
import com.revamp.exception.PasswordInvalidException;
import com.revamp.exception.UserNotFoundException;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@CrossOrigin(origins = "http://localhost", maxAge = 3600)
@RestController
public class UserController {
	private final static Logger logger = LoggerFactory.getLogger(UserController.class);
	@Autowired
	private UserService userService;
	private UserResponse userResponse;

	/*---Register user---*/
	/**
	 * 
	 * @param user
	 * @return
	 */
	@RequestMapping(value = "/user", method = RequestMethod.POST)
	public ResponseEntity<User> save(@RequestBody User user) {
		user.setDateCreated(new Date());
		long id = userService.save(user);
		user.setUserid(id);
		return ResponseEntity.ok().body(user);
	}

	/*---Get a user by id---*/
	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	public ResponseEntity<User> get(@PathVariable("id") long userId) {
		User user = userService.get(userId);
		return ResponseEntity.ok().body(user);
	}

	/**
	 * 
	 * @param login
	 * @return
	 * @throws ServletException
	 */
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<UserResponse> login(@RequestBody User login) throws ServletException {

		logger.info("Entering into Login Method");

		logger.info("Entering into Login Method ***" + login.toString());

		String jwtToken = "";

		if (login.getEmailAddress() == null || login.getPassword() == null) {
			throw new ServletException("Please fill in username and password");
		}

		String email = login.getEmailAddress();
		String password = login.getPassword();

		User user = userService.findByEmail(email);

		if (user == null) {
			throw new UserNotFoundException("User email not found.");
		}

		String pwd = user.getPassword();

		if (!password.equals(pwd)) {
			throw new PasswordInvalidException("Invalid Password. Please check your name and password.");
		}

		jwtToken = Jwts.builder().setSubject(email).claim("roles", user.getRoleId()).setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, "secretkey").compact();
		logger.info("JWT token in SpringBoot" + jwtToken);
		if (jwtToken != null) {
			userResponse = new UserResponse();
			userResponse.setEmail(user.getEmailAddress());
			userResponse.setFirstName(user.getFirstName());
			userResponse.setLastName(user.getLastName());
			userResponse.setToken(jwtToken);
			userResponse.setRole(user.getRoleId());
			return new ResponseEntity<UserResponse>(userResponse, HttpStatus.OK);

		}

		return new ResponseEntity<UserResponse>(userResponse, HttpStatus.NOT_FOUND);

	}

}