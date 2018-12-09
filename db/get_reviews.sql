SELECT * 
FROM experiences e 
JOIN available_dates ad 
ON ad.exp_id = e.id
JOIN orders o
ON ad.id = o.date_id
JOIN profiles p
ON o.prof_id = p.id
JOIN reviews r
ON r.order_id = o.id
WHERE e.id = $1;