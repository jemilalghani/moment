DELETE FROM experiences WHERE id !=14;
-- DELETE ALL BUT ONE ROW
UPDATE experiences SET locale_google = ?? WHERE id = ??;
-- UPDATE google_locale val

UPDATE experiences SET highlight = true WHERE id = 2;
UPDATE experiences SET category = 'WORKSHOP' WHERE id = 26;
UPDATE exp_photos SET exp_id = 14 WHERE id = 10;

ALTER TABLE experiences
ADD COLUMN peopleLimit NOT NULL;

CREATE TABLE test (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(50) NOT NULL,
  number INT NOT NULL
);

INSERT INTO test
(user_name, number)
VALUES
('Tom', 48),
('Bill', 37),
('Pug', 19);

SELECT * FROM test;

ALTER TABLE test
ADD iscool TEXT;

ALTER TABLE test
DROP COLUMN iscool;

ALTER TABLE test
ADD list INT NOT NULL;

ALTER TABLE test ALTER COLUMN list SET NOT NULL;

UPDATE test SET list = 3 WHERE ID = 1;
UPDATE test SET list = 3 WHERE ID = 2;
UPDATE test SET list = 4 WHERE ID = 3;

INSERT INTO test
(user_name, number, list)
VALUES
('Pam', 42);

SELECT * FROM experiences;

ALTER TABLE experiences
DROP COLUMN locale_google;

ALTER TABLE experiences
ADD group_size_limit INT;

UPDATE experiences SET group_size_limit = 10 WHERE ID = 1; 
UPDATE experiences SET group_size_limit = 6 WHERE ID = 2; 

ALTER TABLE test ALTER COLUMN list SET NOT NULL;

SELECT * FROM orders;

ALTER TABLE orders
ADD group_size INT NOT NULL;
