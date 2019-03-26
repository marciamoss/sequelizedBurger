module.exports = (sequelize, DataTypes) => {
    const Burger = sequelize.define("burger", {
      burger_name: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        validate: {len: [1]}
      },
      devoured: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
      user_name: DataTypes.STRING 
    });

    Burger.associate = (models) => {
      // Associating burger with users
      Burger.hasMany(models.user, {
      });
    };

    return Burger;
  };

