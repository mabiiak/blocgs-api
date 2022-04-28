module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostCategory', {
    postId: { type: DataTypes.STRING },
    categoryId: { type: DataTypes.INTEGER },

  }, { timestamps: false });

  // PostsCategories.associate = (models) => {
  //   PostsCategories.hasMany(models.Categories,
  //     { foreignKey: 'id' });
  // };

  return PostsCategories;
};