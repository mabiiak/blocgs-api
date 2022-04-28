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
    Users.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'blogposts' });
  };

  return Users;
};

module.exports = User;
