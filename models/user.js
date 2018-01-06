module.exports = function (sequelize, DataTypes) {
	return sequelize.define('user', {
		username: {type: DataTypes.STRING},
		password: {type: DataTypes.STRING},
		name: {type: DataTypes.STRING},
		group_tag: {type: DataTypes.STRING},
		user_group_tag: {type: DataTypes.STRING}, //DataTypes.CASESENSITIVE
		status: {type: DataTypes.STRING},
		auth_key:{type:DataTypes.STRING},
		access_token: {type: DataTypes.STRING},
		createdAt: {field:'created_at',type: DataTypes.DATE},
		updatedAt: {field:'updated_at', type: DataTypes.DATE},
		deletedAt: {field:'deleted_at', type: DataTypes.DATE},
		
	}, {
		tableName: 'user'
	});
};