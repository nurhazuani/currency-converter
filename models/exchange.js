module.exports = (sequelize, DataTypes) => {
	const Exchange = sequelize.define('Exchange', {
        country: DataTypes.STRING,
        code: DataTypes.STRING,
        rate: DataTypes.DOUBLE,
        flag: DataTypes.STRING
	});

	return Exchange;
};