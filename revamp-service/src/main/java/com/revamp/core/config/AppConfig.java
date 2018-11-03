package com.revamp.core.config;

import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import java.util.Properties;

@Configuration
@EnableTransactionManagement
public class AppConfig {

   
	@Value("${spring.datasource.driver-class-name}")
    private String DB_DRIVER;

    @Value("${spring.datasource.password}")
    private String DB_PASSWORD;

    @Value("${spring.datasource.url}")
    private String DB_URL;

    @Value("${spring.datasource.username}")
    private String DB_USERNAME;

    @Value("${hibernate.dialect}")
    private String HIBERNATE_DIALECT;

    @Value("${hibernate.show_sql}")
    private String HIBERNATE_SHOW_SQL;

    @Value("${hibernate.hbm2ddl.auto}")
    private String HIBERNATE_HBM2DDL_AUTO;

    @Value("${entitymanager.packagesToScan}")
    private String ENTITYMANAGER_PACKAGES_TO_SCAN;
    
    @Value("${hibernate.c3p0.min_size}")
    private String HIBERNATE_C3P0_MIN_SIZE;
    
    @Value("${hibernate.c3p0.max_size}")
    private String HIBERNATE_C3P0_MAX_SIZE;
    
    @Value("${hibernate.c3p0.acquire_increment}")
    private String HIBERNATE_C3P0_ACQUIRE_INCREMENT;
    
    @Value("${hibernate.c3p0.timeout}")
    private String HIBERNATE_C3P0_TIMEOUT;
    
    @Value("${hibernate.c3p0.max_statements}")
    private String HIBERNATE_C3P0_MAX_STATEMENTS;
    
    @Value("${hibernate.id.new_generator_mappings}")
    private String HIBERNATE_ID_NEW_GENERATOR_MAPPINGS;
    
    
    @Bean
    public LocalSessionFactoryBean sessionFactory() {
        LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
        sessionFactory.setDataSource(dataSource());
        sessionFactory.setPackagesToScan(ENTITYMANAGER_PACKAGES_TO_SCAN);
        Properties hibernateProperties = new Properties();
        hibernateProperties.put("hibernate.dialect", HIBERNATE_DIALECT);
        hibernateProperties.put("hibernate.show-sql", HIBERNATE_SHOW_SQL);
        hibernateProperties.put("hibernate.c3p0.min_size", HIBERNATE_C3P0_MIN_SIZE);
        hibernateProperties.put("hibernate.c3p0.max_size", HIBERNATE_C3P0_MAX_SIZE);
        hibernateProperties.put("hibernate.c3p0.acquire_increment", HIBERNATE_C3P0_ACQUIRE_INCREMENT);
        hibernateProperties.put("hibernate.c3p0.timeout", HIBERNATE_C3P0_TIMEOUT);
        hibernateProperties.put("hibernate.c3p0.max_statements", HIBERNATE_C3P0_MAX_STATEMENTS);
        hibernateProperties.put("hibernate.ddl-auto", HIBERNATE_HBM2DDL_AUTO);
        hibernateProperties.put("hibernate.id.new_generator_mappings", HIBERNATE_ID_NEW_GENERATOR_MAPPINGS);
        sessionFactory.setHibernateProperties(hibernateProperties);
        return sessionFactory;
    }

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(DB_DRIVER);
        dataSource.setUrl(DB_URL);
        dataSource.setUsername(DB_USERNAME);
        dataSource.setPassword(DB_PASSWORD);
        return dataSource;
    }

 
   @Bean(name = "transactionManager")
   public HibernateTransactionManager getTransactionManager(
           SessionFactory sessionFactory) {
       HibernateTransactionManager transactionManager = new HibernateTransactionManager(
               sessionFactory);
       return transactionManager;
   }   

   @Bean(name = "multipartResolver")
   public CommonsMultipartResolver getCommonsMultipartResolver() {
       CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
       multipartResolver.setMaxUploadSize(20971520);   // 20MB
       multipartResolver.setMaxInMemorySize(1048576);  // 1MB
       return multipartResolver;
   }
}
