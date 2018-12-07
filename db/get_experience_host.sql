SELECT (p.name_first, p.name_last, p.about, p.gender, p.email, p.phone, p.prof_photo_url, p.date_joined)
FROM experiences ex 
JOIN prof_exp_creators cr 
ON ex.id = cr.exp_id
JOIN profiles p 
ON cr.prof_id = p.id
WHERE ex.id = $1;