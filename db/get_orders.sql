SELECT * FROM orders o 
JOIN available_dates a 
ON a.id = o.date_id
JOIN experiences e 
ON a.exp_id = e.id
WHERE 
o.prof_id = $1;