module.exports = {
  getReviews: (req, res) => {
    const db = req.app.get("db");
    const userid = req.params.id;
    db.get_reviews([userid])
      .then(reviews => {
        res.json(reviews);
      })
      .catch(error => {
        console.log("error in getReviews", error);
        res.status(500).json({ message: "getReviews error" });
      });
  },
  addReview: (req, res) => {
    const db = req.app.get("db");
    const { orderId, title, description, stars } = req.body;
    db.add_review([orderId, title, description, stars])
      .then(review => {
        res.json(review);
      })
      .catch(error => {
        console.log("error in addReview", error);
        res.status(500).json({ message: "addReview error" });
      });
  }
};
