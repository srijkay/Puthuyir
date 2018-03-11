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