update experiences set deleted = true where id=$1;
select * from prof_exp_creators p 
join experiences e on 
p.exp_id = e.id where prof_id=$2;
