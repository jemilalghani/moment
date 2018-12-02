INSERT INTO profiles
(user_name, password, name_first, name_last, gender, email, phone, locale, about, prof_photo_url)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;