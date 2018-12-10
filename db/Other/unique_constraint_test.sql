DROP TABLE IF EXISTS test;

CREATE TABLE test (
 id SERIAL  PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 email VARCHAR (50) NOT NULL
);

INSERT INTO test
(first_name, email)
VALUES
('Matt', 'matt@matt.com');

ALTER TABLE test ADD CONSTRAINT unique_email UNIQUE (email);

SELECT * FROM test;

INSERT INTO test
(first_name, email)
VALUES
('Matt', 'matt@matt.com');
