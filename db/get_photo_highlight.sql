SELECT (ex.id, p.id, exp_photo_url)
FROM experiences ex
JOIN exp_photos p
ON ex.id = p.exp_id
WHERE highlight = true;