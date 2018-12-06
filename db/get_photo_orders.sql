SELECT (ph.exp_id, ph.id, ph.exp_photo_url)
FROM profiles pr
JOIN orders o
ON pr.id = o.prof_id
JOIN exp_photos ph
ON o.exp_id = ph.exp_id
WHERE pr.id = $1;