SELECT * FROM orders o JOIN experiences e on o.exp_id = e.id
WHERE 
prof_id = $1;