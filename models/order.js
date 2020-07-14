const mongoose = require('mongoose'),
   Schema = mongoose.Schema;

const schema = new Schema({
   id: { type: String },
   user: {type: Schema.Types.ObjectId, ref: 'User'},
   cart: {type: Object, required: true},
   address: { type: Object, required: true},
   name: {type: String, required: true},
   paymentId: {type: String, required: true},
   paymentDate: { type: String, required: true }
});

module.exports = mongoose.model('Order', schema);