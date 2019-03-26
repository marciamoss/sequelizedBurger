module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      user_name: { 
        type: DataTypes.STRING, 
        allowNull: false , 
        validate: {len: [1]}}
    });
  
    User.associate = (models) => {
      User.belongsTo(models.burger, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return User;
  };