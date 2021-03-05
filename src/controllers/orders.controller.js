import Order from "../models/order.model"

exports.createOrder = (req, res) => {

  const order = new Order({
    totalAmount: req.body.totalAmount,
    user: req.body.user,
    products: req.body.products,
  });

  order.save()
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

exports.getOrders = (req, res) => {
    Order.find()
    .populate('products')
    .populate('user')
      .then((order) => {
        if (!order) {
          return res.status(404).send({
            message: `order not found with id ${req.params.id}`,
          });
        }
        res.send(order);
      })
      .catch((err) => {
        return res.status(404).send({
          message: err.message,
        });
      });
  };

exports.getOrder = (req, res) => {
    Order.findById(req.params.id)
    .populate('products')
    .populate('user')
      .then((order) => {
        if (!order) {
          return res.status(404).send({
            message: `order not found with id ${req.params.id}`,
          });
        }
        res.send(order);
      })
      .catch((err) => {
        return res.status(404).send({
          message: err.message,
        });
      });
  };