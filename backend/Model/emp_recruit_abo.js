const mongoose = require('mongoose');

const empRecruitAboSchema = new mongoose.Schema({
	recruit_role: {type: String, required:true},
	recruit_year: {type: String, required: true},
	permission_name: {type: String, required: true}
});

module.exports = {
	model: mongoose.model('EmpRecruitAbo', empRecruitAboSchema),
	schema: empRecruitAboSchema
}
