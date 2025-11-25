const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const Financial = db.define("financials", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    user : {
        type : DataTypes.TEXT
    },

    amount : { 
        type : DataTypes.INTEGER
    },

    description : {
        type : DataTypes.TEXT
    },

    persianDate : {
        type : DataTypes.TEXT
    }
})

Financial.sync()

module.exports = Financial