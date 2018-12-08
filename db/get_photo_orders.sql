SELECT (ph.exp_id, ph.id, ph.exp_photo_url)
FROM profiles pr
JOIN orders o
ON pr.id = o.prof_id
JOIN available_dates a 
ON o.date_id = a.id
JOIN experiences e
ON a.exp_id = e.id
JOIN exp_photos ph
ON e.id = ph.exp_id
WHERE pr.id = $1;