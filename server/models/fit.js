"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Fit = sequelize.define("Fit", {
        fitnessId: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true,
        },
        weekday: DataTypes.STRING,
        muscle: DataTypes.STRING,
        reps: DataTypes.INTEGER,
        time: DataTypes.INTEGER,
        checkBox: DataTypes.BOOLEAN,
    }, {
        underscored: true,
        modelName: "Fit",
    });
};

return Fit;
