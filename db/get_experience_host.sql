SELECT *
FROM experiences ex 
JOIN prof_exp_creators cr 
ON ex.id = cr.exp_id
JOIN profiles p 
ON cr.prof_id = p.id
WHERE ex.id = $1;