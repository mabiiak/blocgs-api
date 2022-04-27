module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostCategories', {
    postId: { type: DataTypes.STRING },
    categoryId: { type: DataTypes.INTEGER },

  }, { timestamps: false });

  PostsCategories.associate = (models) => {
    PostsCategories.hasOne(models.Categories,
      { foreignKey: 'id' });
  };

  return PostsCategories;
};