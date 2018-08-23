package org.revamp.core.web.util;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.revamp.core.model.School;
import org.revamp.core.model.SchoolImage;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

public class SchoolSerializer extends StdSerializer<School> {

	private static final long serialVersionUID = 3068027869893624525L;

	public SchoolSerializer() {
		this(null);
	}

	public SchoolSerializer(Class<School> t) {
		super(t);
	}

	@Override
	public void serialize(School school, JsonGenerator jgen, SerializerProvider provider)
			throws IOException, JsonProcessingException {
		jgen.writeStartObject();
		jgen.writeNumberField("id", school.getSchoolId());
		jgen.writeObjectField("schoolInfo", school.getSchoolInfo());
		jgen.writeObjectField("concats", school.getContacts());
		jgen.writeObjectField("address", school.getAddress());
		
		jgen.writeObjectField("requirements", school.getRequirements());
		jgen.writeObjectField("proofOfIds", this.convertImageWrapper(school.getSchoolImages()));
		jgen.writeEndObject();

		jgen.close();
		
	}
	
	private SchoolImageWrapper convertImageWrapper(Set<SchoolImage> images) {
		SchoolImageWrapper imageWrapper = new SchoolImageWrapper();
		
		images.forEach(image -> {
			System.out.println(image.getImage().toString());
			System.out.println(image.getImage().toString().length());
			imageWrapper.getiByte().add(image.getImage().toString());
		});
		
		return imageWrapper;
	}
	
	
	private class SchoolImageWrapper {
		
		private String comments;
		private List<String> iByte;
		
		public String getComments() {
			return comments;
		}
		public void setComments(String comments) {
			this.comments = comments;
		}
		public List<String> getiByte() {
			if(iByte == null) {
				iByte = new ArrayList<>();
			}
			return iByte;
		}
		

		
	}
}

/*
jgen.writeStartObject();
jgen.writeNumberField("id", school.getSchoolId());
jgen.writeRaw(",");
SchoolInfo schoolInfo = school.getSchoolInfo();
jgen.writeRaw("\"schoolInfo\":{");
jgen.writeRaw("");
jgen.writeStringField("schoolName", schoolInfo.getSchoolName());
jgen.writeStringField("schoolRegNo", schoolInfo.getSchoolRegNo());
jgen.writeStringField("schoolType", schoolInfo.getSchoolType());
jgen.writeNumberField("numberOfStudents", schoolInfo.getNumberOfStudents());
jgen.writeNumberField("numberOfTeachers", schoolInfo.getNumberOfTeachers());
jgen.writeRaw("}");
jgen.writeEndObject();

jgen.close();
*/