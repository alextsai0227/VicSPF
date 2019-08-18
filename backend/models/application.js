const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
	supplier_id: {type: mongoose.Schema.Types.ObjectId, ref:'Supplier', required: true},
	emp_recruit_abo_id: {type: mongoose.Schema.Types.ObjectId, ref:'EmpRecruitAbo'},
	emp_curr_abo_id: {type: mongoose.Schema.Types.ObjectId, ref:'EmpCurrAbo'},
	emp_cohorts_id: {type: mongoose.Schema.Types.ObjectId, ref:'EmpCohort'},
	social_benefit_id: {type: mongoose.Schema.Types.ObjectId, ref:'SocialBenefit'},
});

module.exports = {
	model: mongoose.model('Application', applicationSchema),
	schema: applicationSchema
}
