/********************************************************
    The Address table, to hold contact info for entities
********************************************************/

DROP TABLE IF EXISTS revamp_db.image;

CREATE TABLE IF NOT EXISTS revamp_db.image(
	`image_id` INT NOT NULL AUTO_INCREMENT,
	`image` longblob NOT NULL,
	`date_created` DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`image_id`)	
);