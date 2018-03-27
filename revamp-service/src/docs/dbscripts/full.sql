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
    CONSTRAINT `revamp_db`.`district`.`state_id`
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
    CONSTRAINT `revamp_db`.`city`.`district_id`
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
    CONSTRAINT `revamp_db`.`address`.`city_id`
	FOREIGN KEY (`city_id`)
	REFERENCES `revamp_db`.`city` (`city_id`),
	CONSTRAINT `revamp_db`.`address`.`district_id`
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
	`requirements` VARCHAR(500) NOT NULL,
	PRIMARY KEY (`school_id`),
	CONSTRAINT `revamp_db`.`school`.`address_id`
	FOREIGN KEY (`address_id`)
	REFERENCES `revamp_db`.`address` (`address_id`),
    CONSTRAINT `revamp_db`.`school`.`proof_of_identity_id`
	FOREIGN KEY (`proof_of_identity_id`)
	REFERENCES `revamp_db`.`image` (`image_id`)
	ON DELETE NO ACTION
	ON UPDATE CASCADE
);

/********************************************************
Static Data
********************************************************/

delete from revamp_db.state;
insert into revamp_db.state 
(state_id, state_name) 
values ('TN', 'Tamil Nadu');


delete from revamp_db.district;
insert into revamp_db.district 
(district_id, district_name, state_id) 
values ('kanchipuram', 'Kanchipuram','TN');
insert into revamp_db.district 
(district_id, district_name, state_id) 
values ('tiruvallur', 'Tiruvallur','TN');


delete from revamp_db.city;
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



insert into revamp_db.address 
(address_line_1, address_line_2, district_id, city_id ) 
values ('test', 'test','tiruvallur','puzhal');

insert into revamp_db.image 
(image_id, image ) 
values (1, null);

insert into revamp_db.school 
(school_name, school_type, head_master_name, head_master_email, number_of_students, number_of_teachers, address_id, proof_of_identity_id,  requirements) 
values ('test', 'test','test','test', 5, 1, 1, 1,'test');