const Categorie = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Category', {
    name: { type: DataTypes.STRING },
  }, { timestamps: false });

  // Categories.associate = (models) => {
  //   Categories.belongsTo(models.PostCategories,
  //     { foreignKey: 'categoryId' });
  // };

  return Categories;
};

module.exports = Categorie;
