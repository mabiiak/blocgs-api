module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostCategories', {
    postId: { type: DataTypes.STRING },
    categoryId: { type: DataTypes.STRING },

  }, { timestamps: false });

  return PostsCategories;
};