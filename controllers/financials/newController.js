const Financial = require("../../models/Financial")
const Setting = require("../../models/Setting")

const get = async (req, res) => {
    const findPartner = await Setting.findOne({where : {name : `partner${req.query.partnerId}`}})

    res.render("financials/new", {
        user : req.user,
        partnerId : req.query.partnerId,
        partner : findPartner.value,
        flash : req.flash()
    })
}

const post = async (req, res) => {

    await Financial.create({
        partnerId : req.query.partnerId,
        amount : req.body.amount,
        toUser : req.body.toUser,
        description : req.body.description,
        persianDate : req.body.persianDate
    })

    res.redirect("/financials/all")
}

module.exports = {
    get,
    post
}