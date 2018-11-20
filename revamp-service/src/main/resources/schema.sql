/********************************************************
	The revamp_db database
********************************************************/
DROP DATABASE IF EXISTS `revamp_db`;

CREATE DATABASE IF NOT EXISTS `revamp_db`;
USE `revamp_db`;


/********************************************************
    The Address table, to hold contact info for entities
********************************************************/

DROP TABLE IF EXISTS `revamp_db`.`address`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`address`(
	`address_id` INT NOT NULL AUTO_INCREMENT,
	`address_line_1` VARCHAR(90),
	`address_line_2` VARCHAR(90),
	`district_id` VARCHAR(45),
	`city_id` VARCHAR(45),
    `locality_id` VARCHAR(45),
    `pin_code` VARCHAR(10),
    `state` VARCHAR(10),
	`date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`address_id`)
);


DROP TABLE IF EXISTS `revamp_db`.`contacts`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`contacts`(
	`contacts_id`INT NOT NULL AUTO_INCREMENT,
	`pri_name` VARCHAR(45) NOT NULL,
    `pri_num` VARCHAR(45) NOT NULL,
	`pri_email` VARCHAR(90) NOT NULL,
    `sec_name` VARCHAR(45),
    `sec_num` VARCHAR(45),
	`sec_email` VARCHAR(90),
    PRIMARY KEY (`contacts_id`)
	
);

DROP TABLE IF EXISTS `revamp_db`.`schoolinfo`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`schoolinfo`(
	`school_info_id` INT NOT NULL AUTO_INCREMENT,
    `school_reg_number` VARCHAR(45) NOT NULL,
	`school_name` VARCHAR(45) NOT NULL,
	`school_type` VARCHAR(45) NOT NULL,
	`number_of_students` INT NOT NULL,
	`number_of_teachers` INT NOT NULL,
	PRIMARY KEY (`school_info_id`),
    CONSTRAINT UNIQUE schoolinfo(school_reg_number)
);



DROP TABLE IF EXISTS `revamp_db`.`role`;

CREATE TABLE IF NOT EXISTS revamp_db.role(
  `roleid` varchar(45) NOT NULL,
  `rolename` varchar(45) DEFAULT NULL,
  `accesslevel` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`roleid`)
);




DROP TABLE IF EXISTS `revamp_db`.`user`;
CREATE TABLE IF NOT EXISTS revamp_db.user(
  `userid` bigint(20) NOT NULL AUTO_INCREMENT ,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `status` varchar(45) DEFAULT 'REGISTERED',
  `addressid`INT,
  `roleid` varchar(45) NOT NULL,
  `phonenumber` varchar(45) DEFAULT NULL,
  `emailaddress` varchar(45) DEFAULT NULL,
  `createdate` datetime(6) DEFAULT NULL,
  `updateddate` datetime(6) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `passwordhint` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`userid`),
  FOREIGN KEY (`addressid`) REFERENCES `revamp_db`.`address` (`address_id`),
  FOREIGN KEY (`roleid`) REFERENCES `revamp_db`.`role` (`roleid`)
  ON DELETE NO ACTION
ON UPDATE CASCADE
);


/********************************************************
The School table, to collect school information
********************************************************/
DROP TABLE IF EXISTS `revamp_db`.`school`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`school`(
	`school_id` INT NOT NULL AUTO_INCREMENT,
    `contacts_id` INT NOT NULL,
    `address_id` INT NOT NULL,
    `school_info_id` INT NOT NULL,
    `status` VARCHAR(45) NOT NULL,
    `user_id` bigint(20) NOT NULL,
	`date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`school_id`),
	FOREIGN KEY (`contacts_id`) REFERENCES contacts (`contacts_id`),
	FOREIGN KEY (`address_id`) REFERENCES address (`address_id`),
	FOREIGN KEY (`school_info_id`) REFERENCES schoolinfo (`school_info_id`),
    FOREIGN KEY (`user_id`) REFERENCES `user` (`userid`)
	ON DELETE NO ACTION
	ON UPDATE CASCADE
);



DROP TABLE IF EXISTS revamp_db.schoolimage;

CREATE TABLE IF NOT EXISTS revamp_db.schoolimage(
	`image_id` INT NOT NULL AUTO_INCREMENT,
	`image` longblob,
	`school_id` INT NOT NULL,
	`filepath` VARCHAR(200) NOT NULL,
	`comments` varchar(500) DEFAULT NULL,
	`date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`image_id`),
	FOREIGN KEY (`school_id`) REFERENCES `revamp_db`.`school` (`school_id`) ON DELETE NO ACTION ON UPDATE CASCADE	
);



DROP TABLE IF EXISTS `revamp_db`.`audittrail`;
CREATE TABLE IF NOT EXISTS revamp_db.audittrail(
  `userid` bigint(20) NOT NULL,
  `id` bigint(20) NOT NULL,
  `roleid` bigint(20) DEFAULT NULL,
  `lastlogindate` datetime(6) DEFAULT NULL,
  `lastupdateddate` datetime(6) DEFAULT NULL,
  `comments` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `audittrail_user_userid_idx` (`userid`),
  CONSTRAINT `audittrail_user_userid` FOREIGN KEY (`userid`) REFERENCES `revamp_db`.`user` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION
); 

DROP TABLE IF EXISTS revamp_db.lookup;
 
CREATE TABLE IF NOT EXISTS revamp_db.lookup(
	
	`field` VARCHAR(45),
    `key` VARCHAR(45),
    `value` VARCHAR(100),
    `parent_field` VARCHAR(45),
    `parent_key` VARCHAR(45),
	PRIMARY KEY (`field`,`key`),
    FOREIGN KEY (`parent_field`, `parent_key`)
    REFERENCES `revamp_db`.`lookup` (`field`,`key`)
    
);

DROP TABLE IF EXISTS `revamp_db`.`project`;

CREATE TABLE IF NOT EXISTS revamp_db.project(
	project_id INT NOT NULL AUTO_INCREMENT,
    school_id INT NOT NULL,
    estimate INT,
    collected_amount INT,
    status VARCHAR(45) NOT NULL,
    v_status BIT AS (CASE WHEN status = 'ProjectCreated' THEN b'1' ELSE NULL END) VIRTUAL,
    date_created DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (project_id),
    CONSTRAINT school_id FOREIGN KEY (school_id) REFERENCES revamp_db.school (school_id),
    CONSTRAINT UNIQUE project(project_id,school_id,v_status)
);


DROP TABLE IF EXISTS `revamp_db`.`requirement`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`requirement`(
  `requirement_id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `reqtype` varchar(45) NOT NULL,
  `assettype` varchar(45) NOT NULL,
  `assetname` varchar(45) NOT NULL,
  `quantity` int(11) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `priority` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`requirement_id`),
  KEY `user_id` (`user_id`),
  KEY `project_id` (`project_id`),
  CONSTRAINT `project_id` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`userid`)
);


DROP TABLE IF EXISTS `revamp_db`.`donation`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`donation`(
	`donation_id`INT NOT NULL AUTO_INCREMENT,
    `project_id` INT NOT NULL,
    `donor_id` bigint(20) NOT NULL,
	`payment_mode`VARCHAR(45) NOT NULL,
    `amount` INT NOT NULL,
    `payment_status`VARCHAR(45) NOT NULL,
    `createdate` datetime(6) DEFAULT NULL,
    PRIMARY KEY (`donation_id`),
    FOREIGN KEY (`project_id`)
    REFERENCES `revamp_db`.`project` (`project_id`),
    CONSTRAINT `donor_id`
    FOREIGN KEY (`donor_id`)
    REFERENCES `revamp_db`.`user` (`userid`)
);

DROP TABLE IF EXISTS `revamp_db`.`quotation`;

CREATE TABLE `quotation` (
  `quotation_id` int(11) NOT NULL AUTO_INCREMENT,
  `image_id` int(11) DEFAULT NULL,
  `quotated_amount` int(11) DEFAULT NULL,
  `warranty` varchar(100) DEFAULT NULL,
  `trader_name` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `collected_by` varchar(100) DEFAULT NULL,
  `verified_by` varchar(100) DEFAULT NULL,
  `reviewer` varchar(100) DEFAULT NULL,
  `quotation_status` varchar(100) DEFAULT NULL,
  `quotation_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `quotation_validity_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `requirement_id` int(11) NOT NULL,
  PRIMARY KEY (`quotation_id`),
  KEY `requirement_id` (`requirement_id`),
  CONSTRAINT `quotation_requirement_id` FOREIGN KEY (`requirement_id`) REFERENCES `requirement` (`requirement_id`)
);

DROP TABLE IF EXISTS `revamp_db`.`fundallotment`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`fundallotment`(
	`fundallotment_id` INT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
	`requirement_id` INT NOT NULL,
    `collected_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `totalamount` INT NOT NULL,    
    `interest` INT,
    `allocated_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`fundallotment_id`),
	FOREIGN KEY (`requirement_id`)
	REFERENCES `revamp_db`.`requirement` (`requirement_id`),
	FOREIGN KEY (`user_id`)
	REFERENCES `revamp_db`.`user` (`userid`)
	ON DELETE NO ACTION
	ON UPDATE CASCADE
);
