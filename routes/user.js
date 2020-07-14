const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const authCheck = require('../config/auth-middleware');

router.post('/signup', async (req, res, next) => {
   try {
      const findUser = await User.findOne({ email: req.body.email }).exec();
      if (findUser) {
         return res.status(403).json({
            message: 'Already exists'
         })
      }

      const hash = await bcrypt.hash(req.body.password, 10);
      const user = new User({
         email: req.body.email,
         password: hash
      });
      await user.save();
      res.status(201).json({
         message: 'User Created'
      })
   } catch (error) {
      res.status(500).json({ error: error })
   }
})

router.post('/signin', async (req, res, next) => {
   try {
      const foundUser = await User.findOne({ email: req.body.email }).exec();
      if (!foundUser) {
         return res.status(401).json({
            message: 'Email or Password not match'
         });
      }
      if (foundUser) {
         const result = await bcrypt.compare(req.body.password, foundUser.password);
         if (result) {
            const token = jwt.sign(
               { email: foundUser.email, id: foundUser._id },
               'this is very very secret key',
               { expiresIn: '1h' }
            )
            return res.status(200).json({
               email: foundUser.email,
               token: token,
               expiresIn: new Date().getTime() + 3600000
            })
         }
      }
      return res.status(401).json({
         message: 'Email or Password not match'
      });

   } catch (error) {
      res.status(500).json({ error: error })
   }
});

router.post('/profile', authCheck, async (req, res, next) => {
   try {
      const user = await User.findOne({ email: req.body.user }).populate({ path: 'orders' }).exec();
      res.json(user.orders)
   } catch (error) {
      res.status(500).json(error);
   }
});




module.exports = router;