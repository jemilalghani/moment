UPDATE ftn_catsets
SET cat_name = $2
WHERE cat_id = $1;

SELECT * FROM ftn_catsets;

UPDATE profiles
SET password = $2,
  name_first = $3,
  name_last = $4,
  gender = $5,
  email = $6,
  phone = $7,
  locale = $8,
  about = $9,
  prof_photo_url = $10
WHERE id = $1;