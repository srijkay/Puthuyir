/********************************************************
    The Address table, to hold contact info for entities
********************************************************/

DROP TABLE IF EXISTS revamp_db.address;

CREATE TABLE IF NOT EXISTS revamp_db.address(
	`address_id` INT NOT NULL AUTO_INCREMENT,
	`address_line_1` VARCHAR(90),
	`address_line_2` VARCHAR(90),
	`city_id` VARCHAR(45),
	`date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`address_id`)	,
    CONSTRAINT `revamp_db`.`address`.`city_id`
	FOREIGN KEY (`city_id`)
	REFERENCES `revamp_db`.`city` (`city_id`)

);