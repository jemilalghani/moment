DROP TABLE IF EXISTS profiles;
DROP TABLE IF EXISTS experiences;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS prof_exp_creators;
DROP TABLE IF EXISTS exp_photos;
DROP TABLE IF EXISTS available_dates;

CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(50) NOT NULL,
  password TEXT NOT NULL,
  name_first VARCHAR(50) NOT NULL,
  name_last VARCHAR(50) NOT NULL,
  gender VARCHAR(25) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone INT NOT NULL,
  locale VARCHAR(100) NOT NULL,
  about VARCHAR(500) NOT NULL,
  prof_photo_url VARCHAR(200) NOT NULL,
  date_joined TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE experiences (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  duration VARCHAR(50) NOT NULL,
  price INT NOT NULL,
  locale VARCHAR(100) NOT NULL,
  host_qualifications VARCHAR(1500) NOT NULL,
  meeting_locale VARCHAR(500) NOT NULL,
  what_we_will_do VARCHAR(1500) NOT NULL,
  where_we_will_be VARCHAR(1500) NOT NULL,
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  available_time_start TIME NOT NULL,
  available_time_end TIME NOT NULL,
  deleted BOOLEAN NOT NULL,
  group_size_limit INT NOT NULL,
  highlight BOOLEAN NOT NULL
);
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  exp_id INT NOT NULL,
  prof_id INT NOT NULL,
  group_size INT NOT NULL,
  date_id INT NOT NULL, --ADD PLEASE!!!!!!!!!!!!!!!!
  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE prof_exp_creators (
  id SERIAL PRIMARY KEY,
  prof_id INT NOT NULL,
  exp_id INT NOT NULL
);
CREATE TABLE exp_photos (
  id SERIAL PRIMARY KEY,
  exp_id INT NOT NULL,
  exp_photo_url VARCHAR(200) NOT NULL
);
CREATE TABLE available_dates (
  id SERIAL PRIMARY KEY,
  exp_id INT NOT NULL,
  available_date VARCHAR(20) NOT NULL,
  group_size_remaining INT NOT NULL
);
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  stars INT NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO available_dates 
(exp_id, available_date, group_size_remaining)
VALUES
(1, 'Sat Dec 01 2018', 10),
(1, 'Sat Dec 08 2018', 10),
(1, 'Sat Dec 15 2018', 10),
(1, 'Sat Dec 22 2018', 10),
(1, 'Sat Jan 05 2018', 10),
(1, 'Sat Jan 12 2018', 10),
(2, 'Tue Dec 04 2018', 6),
(2, 'Tue Dec 11 2018', 6),
(2, 'Tue Dec 18 2018', 6),
(2, 'Tue Jan 08 2018', 6),
(8, 'Tue Jan 08 2018', 6),
(8, 'Fri Dec 07 2018', 6),
(8, 'Fri Dec 14 2018', 6),
(8, 'Fri Dec 21 2018', 6),
(8, 'Fri Jan 04 2018', 6),
(9, 'Mon Dec 03 2018', 9),
(9, 'Wed Dec 05 2018', 9),
(9, 'Mon Dec 10 2018', 9),
(9, 'Wed Dec 12 2018', 9),
(9, 'Mon Dec 17 2018', 9),
(9, 'Wed Dec 19 2018', 9),
(9, 'Mon Jan 07 2018', 9),
(9, 'Wed Jan 09 2018', 9);

SELECT * FROM profiles;
SELECT * FROM experiences;
SELECT * FROM orders;
SELECT * FROM prof_exp_creators;
SELECT * FROM exp_photos;
SELECT * FROM available_dates;
SELECT * FROM reviews;

-- CREATE OR REPLACE FUNCTION f_regexp_escape(text)
--   RETURNS text AS
-- $func$
-- SELECT regexp_replace($1, '([!$()*+.:<=>?[\\\]^{|}-])', '\\\1', 'g')
-- $func$  LANGUAGE sql IMMUTABLE;

-- SELECT f_regexp_escape('test(1) > Foo*');

-- CREATE TABLE test (
--   id SERIAL PRIMARY KEY,
--   title VARCHAR(50) NOT NULL,
--   author CARCHAR(50) NOT NULL
-- );
-- INSERT INTO test
-- (title, author)
-- VALUES
-- (f_regexp_escape('hi' guys" waht's up?'), f_regexp_escape('fun day$%^"'));

-- SELECT * FROM test;