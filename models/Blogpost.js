module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER }, // esse é o id que referência usuário que é o autor do pos
    published: { type: DataTypes.STRING },
    updated: { type: DataTypes.STRING },
  }, { timestamps: false });
  
    BlogPosts.associate = (models) => {
    BlogPosts.hasMany(models.User,
      { foreignKey: 'id' });
  };

  return BlogPosts;
};