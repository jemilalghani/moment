UPDATE available_dates
SET group_size_remaining = group_size_remaining - $1 WHERE ID = $2 RETURNING *;