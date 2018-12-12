SELECT (ex.id, p.id, p.exp_photo_url)
FROM experiences ex
JOIN exp_photos p
ON ex.id = p.exp_id 
WHERE p.exp_id = $1;