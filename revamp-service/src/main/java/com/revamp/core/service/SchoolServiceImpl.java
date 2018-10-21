package com.revamp.core.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.revamp.core.dao.SchoolDAO;
import com.revamp.core.model.School;
import com.revamp.core.model.SchoolImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class SchoolServiceImpl implements SchoolService {

	@Autowired
	private SchoolDAO schoolDAO;

	
	@Transactional
	public long save(School school, Map<String, byte[]> files, String imgPath) {
		String dirPath = imgPath+"\\";
		files.forEach((k,v) -> {
			String filePath = DateTimeFormatter.ofPattern("yyyyMMdd").format(LocalDateTime.now())+"\\"+school.getSchoolInfo().getSchoolName()+"_";
			SchoolImage si = new SchoolImage(filePath+k,v,school.getProofOfId().getComments());
			si.setSchool(school);
			school.getSchoolImages().add(si);
		});
		
		school.getProjects().forEach(req -> req.setSchool(school));
		long id = schoolDAO.save(school);
		this.saveImgToFS(dirPath,school.getSchoolImages());
		return id;
	}
	
	private void saveImgToFS(String dirPath, Set<SchoolImage> list) {
		list.forEach(schoolImg -> {
			Path path = Paths.get(dirPath+schoolImg.getFilePath());
            try {
				Files.write(path, schoolImg.getImage());
			} catch (IOException e) {
				e.printStackTrace();
			}
		});
	}

	public School get(long id) {
		return schoolDAO.get(id);
	}

	@Override
	public List<School> getAll() {
		return schoolDAO.getAll();
	}

	@Override
	public List<School> getAllByCity(String cityId) {
		return schoolDAO.getAllByCity(cityId);
	}

	@Override
	public List<School> getAllByDistrict(String districtId) {
		return schoolDAO.getAllByDistrict(districtId);
	}

	@Override
	public List<School> getAllByName(String contains) {
		return schoolDAO.getAllByName(contains);
	}

	@Override
	public List<School> getAllByLocality(String localityId) {
		return schoolDAO.getAllByLocality(localityId);
	}

}
