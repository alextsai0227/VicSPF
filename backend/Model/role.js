const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    permission_id: {type: [mongoose.Types.ObjectId], required: true}
});

module.exports = {
	model: mongoose.model('role', roleSchema),
	schema: roleSchema
}
