const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  const ChecklistItem = sequelize.define('ChecklistItem', {
    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    checklist_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_checked: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'checklist_item'
  });

  ChecklistItem.associate = function (models) {
    ChecklistItem.belongsTo(models.Checklist, {
      foreignKey: 'checklist_id',
      onDelete: 'CASCADE',
    });
  };

  return ChecklistItem;
};