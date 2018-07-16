/********************************************************
	The revamp_db database
********************************************************/
DROP DATABASE IF EXISTS `revamp_db`;

CREATE DATABASE IF NOT EXISTS `revamp_db`;
USE `revamp_db`;



/********************************************************
    The state table, to hold contact info for entities
********************************************************/

DROP TABLE IF EXISTS revamp_db.state;

CREATE TABLE IF NOT EXISTS revamp_db.state (
    `state_id` VARCHAR(45) NOT NULL,
    `state_name` VARCHAR(45),
    PRIMARY KEY (`state_id`)
);

/********************************************************
    The district table, to hold contact info for entities
********************************************************/

DROP TABLE IF EXISTS revamp_db.district;

CREATE TABLE IF NOT EXISTS revamp_db.district(
	`district_id` VARCHAR(45) NOT NULL,
	`district_name` VARCHAR(45),
    `state_id` VARCHAR(45),
	PRIMARY KEY (`district_id`),
    FOREIGN KEY (`state_id`)
	REFERENCES `revamp_db`.`state` (`state_id`)
);

/********************************************************
    The city table, to hold contact info for entities
********************************************************/

DROP TABLE IF EXISTS revamp_db.city;

CREATE TABLE IF NOT EXISTS revamp_db.city(
	`city_id` VARCHAR(45) NOT NULL,
	`city_name` VARCHAR(45),
    `district_id` VARCHAR(45),
	PRIMARY KEY (`city_id`),
  	FOREIGN KEY (`district_id`)
	REFERENCES `revamp_db`.`district` (`district_id`)
);

/********************************************************
    The Address table, to hold contact info for entities
********************************************************/

DROP TABLE IF EXISTS revamp_db.address;

CREATE TABLE IF NOT EXISTS revamp_db.address(
	`address_id` INT NOT NULL AUTO_INCREMENT,
	`address_line_1` VARCHAR(90),
	`address_line_2` VARCHAR(90),
	`district_id` VARCHAR(45),
	`city_id` VARCHAR(45),
	`date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`address_id`)	,
   FOREIGN KEY (`city_id`)
	REFERENCES `revamp_db`.`city` (`city_id`),
	FOREIGN KEY (`district_id`)
	REFERENCES `revamp_db`.`district` (`district_id`)

);

/********************************************************
    The Address table, to hold contact info for entities
********************************************************/

DROP TABLE IF EXISTS revamp_db.image;

CREATE TABLE IF NOT EXISTS revamp_db.image(
	`image_id` INT NOT NULL AUTO_INCREMENT,
	`image` longblob,
	`date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`image_id`)	
);


/********************************************************
The School table, to collect school information
********************************************************/
DROP TABLE IF EXISTS `revamp_db`.`school`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`school`(
	`school_id`INT NOT NULL AUTO_INCREMENT,
	`school_name`VARCHAR(45) NOT NULL,
	`school_type`VARCHAR(45) NOT NULL,
	`head_master_name` VARCHAR(45) NOT NULL,
	`head_master_email` VARCHAR(90) NOT NULL,
	`number_of_students`INT NOT NULL,
	`number_of_teachers`INT NOT NULL,
	`address_id`INT NOT NULL,
	`proof_of_identity_id`INT,
	`date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`school_id`),
	FOREIGN KEY (`address_id`)
	REFERENCES `revamp_db`.`address` (`address_id`),
    FOREIGN KEY (`proof_of_identity_id`)
	REFERENCES `revamp_db`.`image` (`image_id`)
	ON DELETE NO ACTION
	ON UPDATE CASCADE
);

DROP TABLE IF EXISTS `revamp_db`.`reqtype`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`reqtype`(
	`reqtype_id` varchar(45) NOT NULL,
	`reqtype_desc` varchar(45) NOT NULL,
	PRIMARY KEY (`reqtype_id`)
);

DROP TABLE IF EXISTS `revamp_db`.`assettype`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`assettype`(
	`assettype_id` varchar(45) NOT NULL,
	`assettype_desc` varchar(45) NOT NULL,
	PRIMARY KEY (`assettype_id`)
);

DROP TABLE IF EXISTS `revamp_db`.`asset`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`asset`(
	`asset_id` varchar(45) NOT NULL,
	`assetname` varchar(45) NOT NULL,
    `assettype_id` varchar(45) NOT NULL,
	PRIMARY KEY (`asset_id`),
    FOREIGN KEY (`assettype_id`)
	REFERENCES `revamp_db`.`assettype` (`assettype_id`)
	ON DELETE NO ACTION
	ON UPDATE CASCADE
);

DROP TABLE IF EXISTS `revamp_db`.`requirement`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`requirement`(
	`requirement_id`INT NOT NULL AUTO_INCREMENT,
	`school_id` INT NOT NULL,
	`reqtype` varchar(45) NOT NULL,
    `assettype` varchar(45) NOT NULL,
    `assetname` varchar(45) NOT NULL,    
    `date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`requirement_id`),
	FOREIGN KEY (`school_id`)
	REFERENCES `revamp_db`.`school` (`school_id`)
	ON DELETE NO ACTION
	ON UPDATE CASCADE
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
  `addressid`INT NOT NULL,
  `roleid` varchar(45) NOT NULL,
  `identityproof` INT NOT NULL,
  `phonenumber` varchar(45) DEFAULT NULL,
  `emailaddress` varchar(45) DEFAULT NULL,
  `createdate` datetime(6) DEFAULT NULL,
  `updateddate` datetime(6) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `passwordhint` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`userid`),
  FOREIGN KEY (`addressid`)
  REFERENCES `revamp_db`.`address` (`address_id`),
  FOREIGN KEY (`identityproof`)
  REFERENCES `revamp_db`.`image` (`image_id`),
  FOREIGN KEY (`roleid`)
  REFERENCES `revamp_db`.`role` (`roleid`)
  
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



insert into revamp_db.state 
(state_id, state_name) 
values ('TN', 'Tamil Nadu');



insert into revamp_db.district 
(district_id, district_name, state_id) 
values ('kanchipuram', 'Kanchipuram','TN');
insert into revamp_db.district 
(district_id, district_name, state_id) 
values ('tiruvallur', 'Tiruvallur','TN');



insert into revamp_db.city 
(city_id, city_name, district_id) 
values ('ennore', 'Ennore','tiruvallur');
insert into revamp_db.city 
(city_id, city_name, district_id) 
values ('puzhal', 'Puzhal','tiruvallur');
insert into revamp_db.city 
(city_id, city_name, district_id) 
values ('padappai', 'Padappai','kanchipuram');
insert into revamp_db.city 
(city_id, city_name, district_id) 
values ('vallakottai', 'Vallakottai','kanchipuram');


insert into revamp_db.role
(roleid, rolename, accesslevel) 
values ('admin','Admin /Super user', '');

insert into revamp_db.role
(roleid, rolename, accesslevel) 
values ('sponsor','Sponsor', '');

insert into revamp_db.role
(roleid, rolename, accesslevel) 
values ('volunteer', 'Volunteer','');

insert into revamp_db.role
(roleid, rolename, accesslevel) 
values ('beneficiary', 'Beneficiary', '');

insert into revamp_db.role
(roleid, rolename, accesslevel) 
values ('approver','Approver','');


insert into revamp_db.reqtype
(reqtype_id, reqtype_desc) 
values ('New','New');

insert into revamp_db.reqtype
(reqtype_id, reqtype_desc) 
values ('Maintenance','Maintenance');

insert into revamp_db.assettype
(assettype_id, assettype_desc) 
values ('Sports','Sports');

insert into revamp_db.assettype
(assettype_id, assettype_desc) 
values ('Infrastructure','Infrastructure');

insert into revamp_db.assettype
(assettype_id, assettype_desc) 
values ('Others','Others');



insert into revamp_db.asset
(asset_id, assetname, assettype_id) 
values ('Football','Football','Sports');

insert into revamp_db.asset
(asset_id, assetname, assettype_id) 
values ('Other_sports','Others','Sports');

insert into revamp_db.asset
(asset_id, assetname, assettype_id) 
values ('Bathroom','Bathroom','Infrastructure');

insert into revamp_db.asset
(asset_id, assetname, assettype_id) 
values ('Other_infra','Others','Infrastructure');


insert into revamp_db.asset
(asset_id, assetname, assettype_id) 
values ('Others','Others','Others');



insert into revamp_db.address 
(address_line_1, address_line_2, district_id, city_id ) 
values ('test', 'test','tiruvallur','puzhal');

insert into revamp_db.image 
(image_id, image ) 
values (1, null);

insert into revamp_db.school 
(school_name, school_type, head_master_name, head_master_email, number_of_students, number_of_teachers, address_id, proof_of_identity_id) 
values ('test', 'test','test','test', 5, 1, 1, 1);





