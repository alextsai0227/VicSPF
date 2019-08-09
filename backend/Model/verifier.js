const mongoose = require('mongoose');

const verifierSchema = new mongoose.Schema({
	email: {type: String, required:true, unique:true},
	phone: {type: String, required:true},
	street: {type: String, required:true},
	suburb: {type: String, required:true},
	state: {type: String, required:true},
    abn: {type: String, required:true},
    company_name: {type: String, required:true},
    password: {type: String, required:true},
    role_id: {type: mongoose.Types.ObjectId, required:true}
});

module.exports = {
	model: mongoose.model('Verifier', verifierSchema),
	schema: verifierSchema
}
