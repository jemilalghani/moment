SELECT * FROM exp_photos;

ALTER TABLE exp_photos
ADD exp_photo_url_new TEXT;

UPDATE exp_photos
SET exp_photo_url_new = exp_photo_url;

ALTER TABLE exp_photos
DROP COLUMN exp_photo_url;

ALTER TABLE exp_photos
RENAME COLUMN exp_photo_url_new TO exp_photo_url;

ALTER TABLE exp_photos
ALTER COLUMN exp_photo_url SET NOT NULL;