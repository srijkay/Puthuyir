/********************************************************
	The revamp_db database
********************************************************/
DROP DATABASE IF EXISTS `revamp_db`;

CREATE DATABASE IF NOT EXISTS `revamp_db`;
USE `revamp_db`;


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
    `locality_id` VARCHAR(45),
    `pin_code` VARCHAR(10),
	`date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`address_id`)
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


DROP TABLE IF EXISTS `revamp_db`.`schoolinfo`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`schoolinfo`(
	`school_info_id`INT NOT NULL AUTO_INCREMENT,
    `school_reg_number`VARCHAR(45) NOT NULL,
	`school_name`VARCHAR(45) NOT NULL,
	`school_type`VARCHAR(45) NOT NULL,
	`number_of_students`INT NOT NULL,
	`number_of_teachers`INT NOT NULL,
	PRIMARY KEY (`school_info_id`)
	
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




/********************************************************
The School table, to collect school information
********************************************************/
DROP TABLE IF EXISTS `revamp_db`.`school`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`school`(
	`school_id`INT NOT NULL AUTO_INCREMENT,
	`school_info_id`INT NOT NULL,
    `contacts_id`INT NOT NULL,
    `address_id`INT NOT NULL,
	`proof_of_identity_id`INT,
    `status`VARCHAR(45) DEFAULT 'REGISTERED',
	`date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`school_id`),
    CONSTRAINT `revamp_db`.`school`.`school_info_id`
	FOREIGN KEY (`school_info_id`)
	REFERENCES `revamp_db`.`schoolinfo` (`school_info_id`),
    CONSTRAINT `revamp_db`.`school`.`contacts_id`
	FOREIGN KEY (`contacts_id`)
	REFERENCES `revamp_db`.`contacts` (`contacts_id`),
	CONSTRAINT `revamp_db`.`school`.`address_id`
	FOREIGN KEY (`address_id`)
	REFERENCES `revamp_db`.`address` (`address_id`),
    CONSTRAINT `revamp_db`.`school`.`proof_of_identity_id`
	FOREIGN KEY (`proof_of_identity_id`)
	REFERENCES `revamp_db`.`image` (`image_id`)
	ON DELETE NO ACTION
	ON UPDATE CASCADE
);

DROP TABLE IF EXISTS `revamp_db`.`project`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`project`(
	`project_id`INT NOT NULL AUTO_INCREMENT,
    `school_id` INT NOT NULL,
    `estimate` INT,
    `collected_amount` INT,
    `project_status`VARCHAR(45) NOT NULL,
    `date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`project_id`),
    CONSTRAINT `revamp_db`.`project`.`school_id`
    FOREIGN KEY (`school_id`)
    REFERENCES `revamp_db`.`school` (`school_id`)
   
);


DROP TABLE IF EXISTS `revamp_db`.`requirement`;

CREATE TABLE IF NOT EXISTS `revamp_db`.`requirement`(
	`requirement_id`INT NOT NULL AUTO_INCREMENT,
    `project_id` INT NOT NULL,
	`reqtype` varchar(45) NOT NULL,
    `assettype` varchar(45) NOT NULL,
    `assetname` varchar(45) NOT NULL,    
    `quantity` INT NOT NULL,
    `date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`requirement_id`),
	CONSTRAINT `revamp_db`.`requirement`.`project_id`
	FOREIGN KEY (`project_id`)
	REFERENCES `revamp_db`.`project` (`project_id`)
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
  `addressid`INT,
  `roleid` varchar(45) NOT NULL,
  `identityproof` INT,
  `phonenumber` varchar(45) DEFAULT NULL,
  `emailaddress` varchar(45) DEFAULT NULL,
  `createdate` datetime(6) DEFAULT NULL,
  `updateddate` datetime(6) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `passwordhint` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`userid`),
  CONSTRAINT `revamp_db`.`user`.`addressid`
  FOREIGN KEY (`addressid`)
  REFERENCES `revamp_db`.`address` (`address_id`),
  CONSTRAINT `revamp_db`.`user`.`identityproof`
  FOREIGN KEY (`identityproof`)
  REFERENCES `revamp_db`.`image` (`image_id`),
  CONSTRAINT `revamp_db`.`user`.`roleid`
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

DROP TABLE IF EXISTS revamp_db.lookup;
 
CREATE TABLE IF NOT EXISTS revamp_db.lookup(
	
	`field` VARCHAR(45),
    `key` VARCHAR(45),
    `value` VARCHAR(100),
    `parent_field` VARCHAR(45),
    `parent_key` VARCHAR(45),
	PRIMARY KEY (`field`,`key`),
    CONSTRAINT `revamp_db`.`lookup`.`parent_field_key`
    FOREIGN KEY (`parent_field`, `parent_key`)
    REFERENCES `revamp_db`.`lookup` (`field`,`key`)
    
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
    CONSTRAINT `revamp_db`.`donation`.`school_id`
    FOREIGN KEY (`project_id`)
    REFERENCES `revamp_db`.`project` (`project_id`),
    CONSTRAINT `revamp_db`.`donation`.`donor_id`
    FOREIGN KEY (`donor_id`)
    REFERENCES `revamp_db`.`user` (`userid`)
	
);



/********************************************************
State
********************************************************/
INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('state',
'TN',
'Tamil Nadu',
null,
null);


/********************************************************
District
********************************************************/
INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('district',
'kanchipuram',
'Kanchipuram',
'state',
'TN');

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('district',
'tiruvallur',
'Tiruvallur',
'state',
'TN');


/********************************************************
City
********************************************************/
INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('city',
'ennore',
'Ennore',
'district',
'tiruvallur');

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('city',
'puzhal',
'Puzhal',
'district',
'tiruvallur');

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('city',
'padappai',
'Padappai',
'district',
'kanchipuram');


INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('city',
'vallakottai',
'Vallakottai',
'district',
'kanchipuram');

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('city',
'chennai',
'Chennai',
'district',
'kanchipuram');

/********************************************************
Locality
********************************************************/

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('locality',
'tambaram',
'Tambaram',
'city',
'chennai');

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('locality',
'pallavaram',
'Pallavaram',
'city',
'chennai');

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('locality',
'sholinganallur',
'Sholinganallur',
'city',
'chennai');

/********************************************************
Requirement Type
********************************************************/
INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('reqtype',
'new',
'New Requirement',
null,
null);

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('reqtype',
'maintenance',
'Maintenance',
null,
null);

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('assettype',
'sports',
'Sports',
null,
null);


/********************************************************
Asset type
********************************************************/
INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('assettype',
'infrastructure',
'Infrastructure',
null,
null);


INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('assettype',
'others',
'Others',
null,
null);


/********************************************************
Asset
********************************************************/
INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('asset',
'football',
'Football',
'assettype',
'sports');

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('asset',
'other_sports',
'Others',
'assettype',
'sports');

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('asset',
'bathroom',
'Bathroom',
'assettype',
'infrastructure');

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('asset',
'other_infra',
'Others',
'assettype',
'infrastructure');

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('asset',
'others',
'Others',
'assettype',
'others');


/********************************************************
School Type
********************************************************/
INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('schooltype',
'nursery',
'Nursery',
null,
null);

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('schooltype',
'primary',
'Primary',
null,
null);

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('schooltype',
'middle',
'Middle School',
null,
null);

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('schooltype',
'secondary',
'Secondary School',
null,
null);

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('schooltype',
'highersecondary',
'Higher Secondary School',
null,
null);


INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('paymentmode',
'creditcard',
'Credit Card',
null,
null);

INSERT INTO `revamp_db`.`lookup`
(`field`,
`key`,
`value`,
`parent_field`,
`parent_key`)
VALUES
('paymentmode',
'debitcard',
'Debit Card',
null,
null);








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

insert into revamp_db.role
(roleid, rolename, accesslevel) 
values ('donor','Donor','');





