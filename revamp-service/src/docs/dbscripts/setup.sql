/********************************************************
	This is the master script that calls all required
	scripts for revamp_db in the correct order
********************************************************/

source schema/database.sql;
source schema/lookup_tables/state.sql;
source schema/lookup_tables/district.sql;
source schema/lookup_tables/city.sql;
source schema/image.sql;
source schema/address.sql;
source schema/school.sql;
source static/state.sql;
source static/district.sql;
source static/city.sql;


