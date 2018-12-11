INSERT INTO reviews
  (order_id, title, review, stars)
VALUES
  ($1, $2, $3, $4)
RETURNING *;