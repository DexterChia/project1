use klse_project;
     
CREATE TABLE klse_stocks (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(20) NULL,
    code varchar(10) NOT NULL,
    fullname varchar(65) NOT NULL,
    market varchar(10) NULL,
    category varchar(20) NULL,
    created_at DATETIME NULL,
	updated_at DATETIME NULL,
	deleted_at DATETIME NULL,
	PRIMARY KEY (id)
);



