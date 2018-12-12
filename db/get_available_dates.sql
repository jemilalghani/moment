SELECT *, a.id FROM available_dates a
    JOIN experiences e
    ON a.exp_id = e.id
    WHERE e.id = $1
