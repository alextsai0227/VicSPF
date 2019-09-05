const mongoose = require('mongoose');

const empCurrAboSchema = new mongoose.Schema({
    emp_role: {type:String, required:true},
    permission_name: {type:String, ref: 'Permission', required:true},
});

module.exports = {
	model: mongoose.model('EmpCurrAbo', empCurrAboSchema),
	schema: empCurrAboSchema
}
