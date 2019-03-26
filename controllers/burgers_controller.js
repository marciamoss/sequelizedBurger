const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const db = require("../models");

router.get("/", (req, res) => {
  db.burger.findAll({})
    .then((data) => {
      var burgers=[];
      for(var i=0;i<data.length;i++){
        burgers.push(data[i].dataValues);
      };
      
      const hbsObject = {
        burgers: burgers
      };

      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
  db.burger.create({
    burger_name: req.body.name
  })
    .then((result) => {
      res.json({ id: result.insertId });
    })
    .catch((err) => {
        res.json(err);
    });
});

router.post("/api/users", (req, res) => {
  
  db.user.create({
    user_name: req.body.user_name,
    burgerId: req.body.bid
  })
    .then((result) => {
    res.json({ id: result.insertId });
  })
  .catch((err) => {
    res.json(err);
  });
});
 

// PUT route for updating 
router.put("/api/burgers/:id", (req, res) => {
  
  db.burger.update(req.body,
    {
      where: {
        id: req.params.id
      }
    })
    .then((result) => {
      res.end();
    });
});

  // Export routes for server.js to use.
module.exports = router;