package com.revamp.core.config;

import java.io.File;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.stereotype.Component;

@Component
public class CustomizationBean implements WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> {

	/*
	 * @Override public void customize(ConfigurableServletWebServerFactorycontainer)
	 * { container.setContextPath("/springbootapp"); }
	 */
	
	@Value("${image.path}")
    private String imgPath;

	@Override
	public void customize(ConfigurableServletWebServerFactory factory) {
		// TODO Auto-generated method stub
		factory.setDocumentRoot(new File(imgPath));
	}
}