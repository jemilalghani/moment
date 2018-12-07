select * from prof_exp_creators p 
join experiences e on 
p.exp_id = e.id where prof_id=$1;