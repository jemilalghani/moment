module.exports = {
  getReviews: (req,res)=>{
    const db = req.app.get('db');
    const{id} = req.query;
    db.get_reviews([id])
    .then(reviews => {
      res.json(reviews)
      console.log('reviews are', reviews)
    })
    .catch(error => {
        console.log('error in getReviews', error);
    res.status(500).json({message: 'getReviews error'})
    })
  }
}
