const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const verifierSchema = new mongoose.Schema({
	email: {type: String, required:true, unique:true},
	hash: String,
  	salt: String,
	phone: String,
	street: String,
	suburb: String,
	state: String,
    abn: String,
    company_name: String,
    role_id: {type: mongoose.Types.ObjectId, ref: 'Role'}
});

verifierSchema.methods.setPassword = function(password) {
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

verifierSchema.methods.validatePassword = function(password) {
	const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
	return this.hash === hash;
};
  
verifierSchema.methods.generateJWT = function() {
	const today = new Date();
	const expirationDate = new Date(today);
	expirationDate.setDate(today.getDate() + 60);
  
	return jwt.sign({
	  email: this.email,
	  id: this._id,
	  exp: parseInt(expirationDate.getTime() / 1000, 10),
	}, 'secret');
}
  
verifierSchema.methods.toAuthJSON = function() {
	return {
	  _id: this._id,
	  email: this.email,
	  token: this.generateJWT(),
	};
};

verifierSchema.methods.getData = function() {
	return {
	  _id: this._id,
	  email: this.email,
	  token: this.generateJWT(),
	  phone: this.phone,
	  street:  this.street,
	  suburb:  this.suburb,
	  state:  this.state, 
      abn: this.abn, 
      company_name: this.company_name,
	};
};
module.exports = {
	model: mongoose.model('Verifier', verifierSchema),
	schema: verifierSchema
}
