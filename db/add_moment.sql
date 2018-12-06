INSERT INTO experiences 
(title, category, duration, price, locale, host_qualifications, meeting_locale, what_we_will_do, where_we_will_be, available_time_start, available_time_end, deleted, group_size_limit, highlight)
VALUES
( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;