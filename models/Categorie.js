const Categorie = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categorie', {
    name: { type: DataTypes.STRING },
  }, { timestamps: false });

  Categories.associate = (models) => {
    Categories.belongTo(models.PostCategories,
      { foreignKey: 'categoryId' });
  };

  return Categories;
};

module.exports = Categorie;
