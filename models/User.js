const User = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    displayName: { type: DataTypes.STRING,
      allowNull: false },

    email: { type: DataTypes.STRING,
      allowNull: false },

    password: { type: DataTypes.STRING,
      allowNull: false },

    image: { type: DataTypes.STRING,
      allowNull: false },

  }, { timestamps: false });
  
  Users.associate = (models) => {
    Users.belongsTo(models.BlogPost,
      { foreignKey: 'userId' });
  };

  return Users;
};

module.exports = User;
