SELECT * 
FROM experiences ex
JOIN exp_photos p
ON ex.id = p.exp_id
WHERE highlight = true;