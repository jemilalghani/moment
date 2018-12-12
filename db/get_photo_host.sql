select (p.exp_id, ex.id, ex.exp_photo_url) from exp_photos ex
join prof_exp_creators p on p.exp_id = ex.exp_id 
where p.prof_id =$1;