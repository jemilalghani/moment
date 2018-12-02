INSERT INTO photos 
(exp_id, exp_photo_url)
VALUES
( $1, $2),
( $1, $3),
( $1, $4) RETURNING *;