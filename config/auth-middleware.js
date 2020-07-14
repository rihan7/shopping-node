const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
   try {
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, 'this is very very secret key');
      next();
   } catch (error) {
      return res.status(401).json({ error: error});
   }
}