INSERT INTO available_dates 
(exp_id, available_date)
VALUES
( $1, $2) RETURNING *;