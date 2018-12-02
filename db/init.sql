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
  price INT NOT NULL,
  locale VARCHAR(100) NOT NULL,
  host_qualifications VARCHAR(500) NOT NULL,
  meeting_locale VARCHAR(500) NOT NULL,
  what_we_will_do VARCHAR(500) NOT NULL,
  where_we_will_be VARCHAR(500) NOT NULL,
  date_created VARCHAR(500) NOT NULL,
  available_time_start TIMESTAMP NOT NULL,
  available_time_end TIMESTAMP NOT NULL,
  deleted BOOLEAN NOT NULL,
  locale_google INT NOT NULL
);
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  exp_id INT NOT NULL,
  prof_id INT NOT NULL
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
  available_date TIMESTAMP NOT NULL
);

  -- id SERIAL PRIMARY KEY,
  -- title VARCHAR(50) NOT NULL,
  -- category VARCHAR(50) NOT NULL,
  -- price INT NOT NULL,
  -- locale VARCHAR(100) NOT NULL,
  -- host_qualifications VARCHAR(500) NOT NULL,
  -- meeting_locale VARCHAR(500) NOT NULL,
  -- what_we_will_do VARCHAR(500) NOT NULL,
  -- where_we_will_be VARCHAR(500) NOT NULL,
  -- date_created VARCHAR(500) NOT NULL,
  -- available_time_start TIMESTAMP NOT NULL,
  -- available_time_end TIMESTAMP NOT NULL,
  -- deleted BOOLEAN NOT NULL,
  -- locale_google INT NOT NULL

-- INSERT INTO experiences 
-- (title, category)
-- VALUES
-- ( '','' ,'' ,'')

SELECT * FROM profiles;
SELECT * FROM experiences;
SELECT * FROM orders;
SELECT * FROM prof_exp_creators;
SELECT * FROM exp_photos;
SELECT * FROM available_dates;