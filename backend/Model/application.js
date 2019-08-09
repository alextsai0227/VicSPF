const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
	supplier_id: {type: mongoose.Types.ObjectId, required:true},
	emp_recruit_abo_id: {type: [mongoose.Types.ObjectId]},
	emp_curr_abo_id: {type: [mongoose.Types.ObjectId]},
	emp_cohorts_id: {type: [mongoose.Types.ObjectId]},
	social_benefit_id: {type: [mongoose.Types.ObjectId]},
});

module.exports = {
	model: mongoose.model('Application', applicationSchema),
	schema: applicationSchema
}
