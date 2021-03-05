const Product = require('../models/product.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs');

exports.created = (req, res) => {

  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });

  product.save()
        .then(data => {
            res.send({
                created: true,
                data: data
            });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured"
            })
        })

};
