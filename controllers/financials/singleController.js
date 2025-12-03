const Financial = require("../../models/Financial")
const Setting = require("../../models/Setting")

const get = async (req, res) => {
    const getFinancial = await Financial.findByPk(req.params.id)
    
    if(!getFinancial) return res.redirect("/financials/all")

    const getPartner = await Setting.findOne({where : {name : `partner${getFinancial.partnerId}`}})

    res.render("financials/single", {
        user : req.user,
        flash : req.flash(),
        financial : getFinancial,
        partner : getPartner.value
    })
}

module.exports = {
    get
}