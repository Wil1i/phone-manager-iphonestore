const Setting = require("../../models/Setting")

const get = async (req, res) => {
    const settings = await Setting.findAll()

    res.render("settings/all", {
        user : req.user,
        flash : req.flash(),
        settings
    })
}

const post = async (req, res) => {
    if(req.body.adminNumber1){
        const adminNumber1 = await Setting.findOne({where : {name : "adminNumber1"}})
        adminNumber1.update({value : req.body.adminNumber1})
    }

    if(req.body.adminNumber2){
        const adminNumber2 = await Setting.findOne({where : {name : "adminNumber2"}})
        adminNumber2.update({value : req.body.adminNumber2})
    }

    res.redirect("/settings")
}

module.exports = {
    get,
    post
}