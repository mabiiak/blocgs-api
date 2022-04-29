module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER },
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE },
  }, { timestamps: false });
  
  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User,
      { foreignKey: 'id', as: 'user' });
  };

  return BlogPosts;
};