const router = require("express").Router();


router.post("/register", (req, res) => {
    let user = req.body;
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  module.exports = router;