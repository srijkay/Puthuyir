package org.revamp.core.controller;

import javax.servlet.http.HttpServletRequest;

import org.revamp.core.model.SchoolImage;
import org.revamp.core.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

@RestController
public class ImageController {

	@Autowired
	private ImageService imageService;

	/*---Add new image---*/
	@PostMapping("/image")
	public ResponseEntity<?> save(HttpServletRequest request,
			@RequestParam CommonsMultipartFile[] fileUpload) throws Exception {

		if (fileUpload != null && fileUpload.length > 0) {
			for (CommonsMultipartFile aFile : fileUpload) {

				SchoolImage uploadFile = new SchoolImage();
				//uploadFile.setImage(aFile.getBytes());
				long id = imageService.save(uploadFile);
				uploadFile.setImageId(id);
				//uploadFile.setImage(null);
				return ResponseEntity.ok().body(uploadFile);
			}
		}

		return ResponseEntity.badRequest().body(null);
	}

	/*---Get a image by id---*/
	@GetMapping("/image/{id}")
	public ResponseEntity<SchoolImage> get(@PathVariable("id") long imageId) {
		SchoolImage image = imageService.get(imageId);
		return ResponseEntity.ok().body(image);
	}

}