const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const Financial = db.define("financials", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    partnerId : {
        type : DataTypes.INTEGER
    },

    amount : { 
        type : DataTypes.INTEGER
    },

    toUser : {
        type : DataTypes.TEXT
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