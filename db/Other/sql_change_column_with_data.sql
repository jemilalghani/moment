SELECT * FROM experiences;

ALTER TABLE experiences
ADD group_size_limit_new INT;

UPDATE experiences
SET group_size_limit_new = group_size_limit;

ALTER TABLE experiences
DROP COLUMN group_size_limit;

ALTER TABLE experiences
RENAME COLUMN group_size_limit_new TO group_size_limit;

ALTER TABLE experiences
ALTER COLUMN group_size_limit SET NOT NULL;