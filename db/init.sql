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
  locale_google INT NOT NULL,
  highlight BOOLEAN NOT NULL
);
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  exp_id INT NOT NULL,
  prof_id INT NOT NULL,
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
  available_date TIMESTAMP NOT NULL
);
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  stars INT NOT NULL,
  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


  -- id SERIAL PRIMARY KEY,
  -- title VARCHAR(50) NOT NULL,
  -- category VARCHAR(50) NOT NULL,
  -- duration VARCHAR(50) NOT NULL,
  -- price INT NOT NULL,
  -- locale VARCHAR(100) NOT NULL,
  -- host_qualifications VARCHAR(500) NOT NULL,
  -- meeting_locale VARCHAR(500) NOT NULL,
  -- what_we_will_do VARCHAR(500) NOT NULL,
  -- where_we_will_be VARCHAR(500) NOT NULL,
  -- date_created VARCHAR(500) NOT NULL,
  -- available_time_start TIME NOT NULL,
  -- available_time_end TIME NOT NULL,
  -- deleted BOOLEAN NOT NULL,
  -- locale_google INT NOT NULL

-- INSERT INTO experiences 
-- (title, category, price, locale, host_qualifications, meeting_locale, what_we_will_do, where_we_will_be, date_created, available_time_start, available_time_end, deleted, locale_google)
-- VALUES
-- (`FLIGHT LESSON IN OPEN COCKPIT BIPLANE`,
-- `PLANE RIDE`,
-- `1.5 hours`,
-- 169,
-- `I'm an FAA Certificated Flight Instructor with over 2000 hours of experience flying antique airplanes. I have a Masters Degree in Mechanical Engineering and spent 38 years developing rocket engines for NASA and the military. I'm also a pilot for the Commemorative Air Force and have participated in the construction of many different homebuilt airplanes over the years. I'm passionate about flying my open cockpit biplane around Arizona's spectacular scenery, and look forward to sharing this experience with you.`,
-- `Please note that this experience does not take place at Sky Harbor Airport in downtown Phoenix. We fly out of Phoenix Mesa Gateway airport which is 37 miles East of Sky Harbor · Mesa`, `Today you will be exposed to flying in an open cockpit biplane (Stearman) over the beautiful San Tan Mountains, southeast of Phoenix. The Stearman was used as a primary training airplane for most of the pilots during WWII, so you will be learning in an authentic piece of history. We'll start with a pre-flight inspection followed by an explanation of the radios and controls. We can fly smooth and level if you like, or we can add in some more energetic maneuvers for those that desire a more thrilling experience. Since it's just you and me, you'll be invited to take the controls as I give you the same type of instruction that was given to the aviation cadets of WWII. From engine start to return will take approximately 30 minutes.This is a unique experience where you will be exposed to the same type of training that the "Greatest Generation" did during World War II. Flying and training in the Stearman is like traveling back in time over 75 years. This experience would certainly make a most memorable gift for birthdays, weddings, holidays, anniversarys, graduations, or "just because". It's also a great gift for the pilot who has everything.`,
-- `On your GPS, just enter the words "South Avery Circle, Mesa, AZ. After turning onto South Avery Circle, turn right immediately into a small parking lot and I'll meet you at gate 19. We will depart from the Phoenix-Mesa-Gateway airport and head over to the beautiful San Tan Mountains as you learn how to fly the legendary Stearman biplane. You can wear jeans or shorts (depending on the temperature) along with a t-shirt and closed toe shoes.`)

SELECT * FROM profiles;
SELECT * FROM experiences;
SELECT * FROM orders;
SELECT * FROM prof_exp_creators;
SELECT * FROM exp_photos;
SELECT * FROM available_dates;
SELECT * FROM reviews;