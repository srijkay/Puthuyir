package org.revamp.core.model;
import java.util.Arrays;

import org.springframework.web.multipart.MultipartFile;

public class SchoolRegFormModel {

    private String payload;

    public String getPayload() {
		return payload;
	}

	public void setPayload(String payload) {
		this.payload = payload;
	}

	private MultipartFile[] files;


	public MultipartFile[] getFiles() {
		return files;
	}

	public void setFiles(MultipartFile[] files) {
		this.files = files;
	}

	@Override
	public String toString() {
		return "SchoolRegFormModel [payload=" + payload + ", files=" + Arrays.toString(files) + "]";
	}

	

}