var mongoose = require('mongoose')
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

var userSchema = new Schema({
   email: {type: String, required: true},
   password: { type: String, required: true},
   orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
});

userSchema.methods.encryptPassword = (password) => {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
}

userSchema.methods.validPassword = (password) => {
   return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema);