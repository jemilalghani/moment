SELECT *, o.id
FROM orders o
  JOIN available_dates a
  ON a.id = o.date_id
  JOIN experiences e
  ON e.id = a.exp_id
WHERE 
o.prof_id = $1;
