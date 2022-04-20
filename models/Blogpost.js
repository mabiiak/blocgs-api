module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER },
    // esse é o id que referência usuário que é o autor do post
    published: { type: DataTypes.STRING },
    updated: { type: DataTypes.STRING },
  }, { timestamps: false });
  
  return BlogPosts;
};