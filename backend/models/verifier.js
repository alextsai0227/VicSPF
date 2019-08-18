const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const verifierSchema = new mongoose.Schema({
	email: {type: String, required:true, unique:true},
	phone: {type: String, required:true},
	street: {type: String, required:true},
	suburb: {type: String, required:true},
	state: {type: String, required:true},
    abn: {type: String, required:true},
    company_name: {type: String, required:true},
    password: {type: String, required:true},
    role_id: {type: mongoose.Types.ObjectId, ref: 'Role', required:true}
});

verifierSchema.pre('save', function(next) {
    // Check if document is new or a new password has been set
    if (this.isNew || this.isModified('password')) {
      // Saving reference to this because of changing scopes
      const document = this;
      bcrypt.hash(document.password, saltRounds,
        function(err, hashedPassword) {
        if (err) {
          next(err);
        }
        else {
          document.password = hashedPassword;
          next();
        }
      });
    } else {
      next();
    }
});

verifierSchema.methods.isCorrectPassword = function(password, callback){
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

module.exports = {
	model: mongoose.model('Verifier', verifierSchema),
	schema: verifierSchema
}
