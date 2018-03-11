/********************************************************
    The state table, to hold contact info for entities
********************************************************/

DROP TABLE IF EXISTS revamp_db.state;

CREATE TABLE IF NOT EXISTS revamp_db.state (
    `state_id` VARCHAR(45) NOT NULL,
    `state_name` VARCHAR(45),
    PRIMARY KEY (`state_id`)
);