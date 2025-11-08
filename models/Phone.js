const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const Request = db.define("phones", {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },

    customerNumber : {
        type : DataTypes.TEXT
    },

    customerName : {
        type : DataTypes.TEXT
    },

    byUser : {
        type : DataTypes.INTEGER
    },

    IMEI1 : {
        type : DataTypes.TEXT
    },

    IMEI2 : {
        type : DataTypes.TEXT
    },

    phoneModel : {
        type : DataTypes.TEXT
    },

    status : {
        type : DataTypes.TEXT
    },

    capacity : {
        type : DataTypes.TEXT
    },

    color : {
        type : DataTypes.TEXT
    },

    partNumber : {
        type : DataTypes.TEXT
    },

    code : {
        type : DataTypes.TEXT
    },

    code2 : {
        type : DataTypes.TEXT
    },

    buyPrice : {
        type : DataTypes.INTEGER
    },

    sellPrice : {
        type : DataTypes.INTEGER
    },

    sellDate : {
        type : DataTypes.TEXT
    },

    buyDate : {
        type : DataTypes.TEXT
    },

    buyFrom : {
        type : DataTypes.TEXT
    },

    buyerNumber : {
        type : DataTypes.TEXT
    },

    sellMode : {
        type : DataTypes.TEXT
    },

    isBoxAvailable : {
        type : DataTypes.BOOLEAN
    },

    isOwnershipAvailable : {
        type : DataTypes.BOOLEAN
    },

    description : {
        type : DataTypes.TEXT
    },

    buyerSettlement : {
        type : DataTypes.TEXT
    }
})

Request.sync()

module.exports = Request