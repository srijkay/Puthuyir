package org.revamp.core.controller;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.revamp.core.model.School;
import org.revamp.core.model.SchoolRegFormModel;
import org.revamp.core.service.SchoolService;
import org.revamp.core.web.util.WebUtilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class SchoolController {

	@Autowired
	private SchoolService schoolService;


	/*---Add new school---*/
	/*@PostMapping("/school")
	public ResponseEntity<School> save(@RequestBody School school) {
		school.setDateAdded(new Date());
		System.out.println("***********************************************");
		System.out.println("...........SCHOOL.........."+school);
		System.out.println("***********************************************");
		long id = schoolService.save(school);
		school.setSchoolId(id);
		return ResponseEntity.ok().body(school);
	}
*/	
	@PostMapping("/school")
    public ResponseEntity<?> multiUploadFileModel(@ModelAttribute SchoolRegFormModel regFormModel, HttpServletRequest request) {
		
		try {
			Map<String, byte[]> filesInBytes = WebUtilities.convertMultiPartToBytes(Arrays.asList(regFormModel.getFiles()));
			School school = new ObjectMapper().readValue(regFormModel.getPayload(), School.class);
			long id = schoolService.save(school, filesInBytes, request.getServletContext().getRealPath("//images"));
		} catch (IOException ex) {
			ex.printStackTrace();
			return new ResponseEntity(ex.getMessage(), HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity("Successfully uploaded!", HttpStatus.OK);

    }

	/*---Get a school by id---*/
	@GetMapping("/school/{id}")
	public ResponseEntity<School> get(@PathVariable("id") long schoolId) {
		School school = schoolService.get(schoolId);
		return ResponseEntity.ok().body(school);
	}

	@GetMapping("/school")
	@ResponseBody 
	public ResponseEntity<List<School>> getAll(@RequestBody(required = false) School school) {
		List<School> schools = schoolService.getAll();
		
		return ResponseEntity.ok().body(schools);
	}

	@GetMapping("/school/name/{contains}")
	public ResponseEntity<List<School>> getAllByName(@PathVariable("contains") String contains) {
		List<School> schools = schoolService.getAllByName(contains);
		return ResponseEntity.ok().body(schools);
	}

	@GetMapping("/school/city/{cityid}")
	public ResponseEntity<List<School>> getAllByCity(@PathVariable("cityid") String cityId) {
		List<School> schools = schoolService.getAllByCity(cityId);
		return ResponseEntity.ok().body(schools);
	}

	@GetMapping("/school/district/{districtid}")
	public ResponseEntity<List<School>> getAllByDistrict(@PathVariable("districtid") String districtId) {
		List<School> schools = schoolService.getAllByDistrict(districtId);
		return ResponseEntity.ok().body(schools);
	}

	@GetMapping("/school/locality/{localityid}")
	public ResponseEntity<List<School>> getAllByLocality(@PathVariable("localityid") String localityId) {
		List<School> schools = schoolService.getAllByLocality(localityId);
		return ResponseEntity.ok().body(schools);
	}

}