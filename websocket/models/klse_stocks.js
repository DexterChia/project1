module.exports = function (sequelize, DataTypes) {
	return sequelize.define('klse_stocks', {
		name: {type: DataTypes.STRING},
		code: {type: DataTypes.STRING},
		fullname: {type: DataTypes.STRING},
		market: {type: DataTypes.STRING},
		category: {type: DataTypes.STRING}, 
		created_at: {type: DataTypes.DATE},
		updated_at: {type: DataTypes.DATE},
		deleted_at: {type: DataTypes.DATE},
		
	}, {
		tableName: 'klse_stocks'
	});
};
