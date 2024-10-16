const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  const Checklist = sequelize.define('Checklist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'checklist'
  });

  Checklist.associate = function(models) {
    Checklist.hasMany(models.ChecklistItem, {
      foreignKey: 'checklist_id',
      as: 'items',
      onDelete: 'CASCADE'
    });
  };

  return Checklist;
};