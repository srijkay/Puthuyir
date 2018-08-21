package org.revamp.core.web.util;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public final class WebUtilities {
	private WebUtilities() {}
	
	public static List<byte[]> convertMultiPartToBytes(List<MultipartFile> files) throws IOException {
    	List<byte[]> list = new ArrayList<>();
        for (MultipartFile file : files) {
            if (file.isEmpty()) {
                continue;
            }
            list.add(file.getBytes());
        }
        return Collections.unmodifiableList(list);
    }
    
/*    private List<byte[]> convertMultiPartToBytes(List<MultipartFile> files) throws IOException {
        for (MultipartFile file : files) {
            if (file.isEmpty()) {
                continue; //next pls
            }
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);

        }

    }*/
}
