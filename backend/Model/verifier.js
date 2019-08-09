const mongoose = require('mongoose');

const verifierSchema = new mongoose.Schema({
	email: String,
	phone: String,
	street: String,
	suburb: String,
	state: String,
    abn: String,
    company_name: String,
    password: String,
    role_id: mongoose.Types.ObjectId
});

module.exports = {
	model: mongoose.model('Verifier', verifierSchema),
	schema: verifierSchema
}
