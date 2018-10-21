/* User */
insert into `revamp_db`.`user` (password, first_name, last_name, email, company, phone, address1, address2, country, postal, role, is_active, is_blocked, security_provider_id, default_customer_id, secret_question, secret_answer, enable_beta_testing, enable_renewal) values
( 'kanth'     , 'Kamalkanth'  , 'Durairaj', 'dkamalkanth@gmail.com'    , 'Abshire Inc', '7-(740)701-4547', '80429 Garrison Crossing', '4967'               , 'USA'        , '64890', 'USER' , 1, 0, 10001, 20000, 'Diverse'       , 'Yellow' , 0, 0),
('king'    , 'Muthusamy'  , 'Ganapathy' , 'mathth@gmail.com'     , 'Glover, Adams and Bins', '383-(779)851-3208', '30874 Graceland Terrace', '99152' , 'USA'        , '51065', 'ADMIN', 1, 0, 10001, 20000, 'knowledge base', 'Mauv'   , 1, 0),
('uk'     , 'Jagan' , 'UK', 'testjagan@gmail.com', 'Rippin, Osinski and Beatty', '84-(228)809-9998', '0118 Burrows Plaza', '496'     , 'USA'        , '94086', 'ADMIN' , 1, 0, 10001, 20000, 'Innovative'    , 'Turquoise', 1, 1),
('us'  , 'Ramji'     , 'USA'   , 'ramji123@gmail.com'         , 'Altenwerth, Fisher and Heidenreich', '30-(772)268-8227', '98 Loeprich Way', '447', 'Greece'     , null   , 'BENEFICIARY' , 0, 0, 10001, 20001, 'capacity'      , 'Fuscia' , 1, 1);


/********************************************************
State
********************************************************/
INSERT INTO `revamp_db`.`lookup` (`field`,`key`,`value`,`parent_field`,`parent_key`)VALUES
('state','TN','Tamil Nadu',null,null);


/********************************************************
District
********************************************************/
INSERT INTO `revamp_db`.`lookup`(`field`,`key`,`value`,`parent_field`,`parent_key`) VALUES
('district','kanchipuram','Kanchipuram','state','TN'),
('district','tiruvallur','Tiruvallur','state','TN');


/********************************************************
City
********************************************************/
INSERT INTO `revamp_db`.`lookup`(`field`,`key`,`value`,`parent_field`,`parent_key`) VALUES
('city','ennore','Ennore','district','tiruvallur'),
('city','puzhal','Puzhal','district','tiruvallur'),
('city','padappai','Padappai','district','kanchipuram'),
('city','vallakottai','Vallakottai','district','kanchipuram'),
('city','chennai','Chennai','district','kanchipuram');

/********************************************************
Locality
********************************************************/

INSERT INTO `revamp_db`.`lookup`(`field`,`key`,`value`,`parent_field`,`parent_key`) VALUES
('locality','tambaram','Tambaram','city','chennai'),
('locality','pallavaram','Pallavaram','city','chennai'),
('locality','sholinganallur','Sholinganallur','city','chennai');

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
