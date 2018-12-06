module.exports = {
    addToOrders: (req,res) => {
        const db = req.app.get('db');
        const {exp_id, prof_id, group_size} = req.body;
        db.add_to_orders([exp_id, prof_id, group_size])
        .then(order => {
            res.status(200).send(order)
        })
    }
}