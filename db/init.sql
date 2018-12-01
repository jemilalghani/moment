DROP TABLE IF EXISTS profiles;
DROP TABLE IF EXISTS experiences;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS prof_exp_creators;
DROP TABLE IF EXISTS exp_photos;
DROP TABLE IF EXISTS available_dates;

-- 'USER SET' ONE TO ONE TABLE
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