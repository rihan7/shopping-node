const express = require('express');
const router = express.Router();
const Product = require('../models/product');



const Order = require('../models/order');
const User = require('../models/user');
const authCheck = require('../config/auth-middleware');

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find().exec();
    res.json(products);
  } catch (error) {
    res.status(404).json(error);
  }
});


router.post('/checkout', authCheck, async (req, res, next) => {
  const { items, id, shippingAddress, user, time } = req.body;
  const stripe = require("stripe")('sk_test_t1YCLPSAXv7lXZdbvH8BFlsb00OTxkSg2B');

  let validation = true;
  let totalQty = null;
  let totalPrice = null;
  try {
    await Promise.all(
      Object.keys(items).map(async item => {
        const itemObj = await Product.findById(item).exec();
        let priceCompere = itemObj.price * items[item].qty === items[item].price;
        validation = validation && priceCompere;
        totalQty += items[item].qty;
        totalPrice += itemObj.price * items[item].qty;
      })
    )

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice * 100,
      currency: 'usd',
      payment_method: id,
      metadata: { integration_check: 'accept_a_payment' },
      confirm: false
    });
    const foundUser = await User.findOne({ email: user }).exec();
    const order = new Order({
      user: foundUser,
      name: shippingAddress.name,
      cart: { items, totalQty, totalPrice },
      address: shippingAddress,
      paymentId: paymentIntent.id,
      paymentDate: time
    });
    const orderSave = await order.save();
    foundUser.orders.push(orderSave._id);
    foundUser.save();

    res.status(200).json({ totalPrice, paymentIntent });
  } catch (error) {
    return res.status(400).json({
      error: error
    });
  }
});


module.exports = router;