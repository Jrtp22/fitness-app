"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Fit = sequelize.define("Fit", {
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
    }, {
        underscored: true,
        modelName: "Fit",
    });
    return Fit;
};


