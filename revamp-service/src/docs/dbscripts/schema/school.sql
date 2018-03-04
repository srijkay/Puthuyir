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