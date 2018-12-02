package com.revamp.core.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.revamp.core.model.School;

public interface SchoolRepository extends CrudRepository<School, Long> {
	
	
	@Query("FROM School s where s.address.city = :cityId")
	public List<School> getAllByCity(@Param("cityId") String cityId);

	@Query("FROM School s where s.address.district = :districtId")
	public List<School> getAllByDistrict(@Param("districtId") String districtId);
	
	
	@Query("FROM School s where s.address.locality = :localityId")
	public List<School> getAllByLocality(@Param("localityId") String localityId);
	
	
	@Query("FROM School s where s.user.userid = :userId")
	public List<School> getByUserId(@Param("userId") long userId);
	
//	@Query("FROM School s where lower(s.schoolName) like concat('%',:contains,'%')")
//	public List<School> getAllByName(@Param("contains") String contains);

}
