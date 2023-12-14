"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Fit extends Model {
    Fit.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
}