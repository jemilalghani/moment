SELECT * FROM profiles
WHERE user_name = $1 RETURNING *;