SELECT (ex.id, p.id, p.exp_photo_url)
FROM experiences ex
JOIN exp_photos p
ON ex.id = p.exp_id 
WHERE ex.price<=$1 and ex.group_size_limit<=$2 and ex.category=$3;