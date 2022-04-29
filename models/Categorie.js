const Categorie = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Category', {
    name: { type: DataTypes.STRING },
  }, { timestamps: false });

  return Categories;
};

module.exports = Categorie;
