"use strict";
const { Model } = require('sequelize');


class Fitness extends Model {}

module.exports = (sequelize, DataTypes) => {
    Fitness.init({
        fitnessId: {
          type: DataTypes.SMALLINT,
          primaryKey: true,
          autoIncrement: true,
        },
        name: DataTypes.STRING,
        age: DataTypes.INTEGER, 
        weight: DataTypes.INTEGER,
        height: DataTypes.INTEGER,
        fitness_goal: DataTypes.STRING,
        activity_level: DataTypes.STRING,
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
          updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },
      }, {
        sequelize,
        underscored: true,
        modelName: "Fitness",
        tableName: "fitness", 
      });
      ;

  return Fitness;
};
