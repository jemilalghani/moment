module.exports={
    getCreatorMoments:(req,res)=>{
        const db = req.app.get('db');
        db.get_creator_moments(req.params.id).then((info)=>{
            res.status(200).json(info)
        })
    }
}