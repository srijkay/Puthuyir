package org.revamp.core.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.revamp.core.dao.SchoolDAO;
import org.revamp.core.model.School;
import org.revamp.core.model.SchoolImage;
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
		
		files.forEach((k,v) -> {
			SchoolImage si = new SchoolImage(k,v,school.getProofOfId().getComments());
			si.setSchool(school);
			school.getSchoolImages().add(si);
		});
		
		school.getRequirements().forEach(req -> req.setSchool(school));
		long id = schoolDAO.save(school);
		this.saveImgToFS(imgPath+"//"+id+"_"+school.getSchoolInfo().getSchoolName(),school.getSchoolImages());
		return id;
	}
	
	private void saveImgToFS(String dirPath, Set<SchoolImage> list) {
		list.forEach(schoolImg -> {
			Path path = Paths.get(dirPath+"_"+schoolImg.getName());
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
