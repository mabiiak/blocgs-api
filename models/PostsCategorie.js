module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategory', {}, { timestamps: false });

  PostsCategories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, { 
      as: 'post',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherkey: 'postId',
    });

    models.BlogPost.belongsToMany(models.Category, { 
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'postId',
      otherkey: 'categoryId' });
  };

  return PostsCategories;
};