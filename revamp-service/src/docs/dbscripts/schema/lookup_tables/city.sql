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