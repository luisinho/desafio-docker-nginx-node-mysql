USE nodedb;

CREATE TABLE people (
    id integer not null primary key auto_increment,
    name varchar(100)
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;