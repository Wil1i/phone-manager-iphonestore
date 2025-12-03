const Financial = require("../../models/Financial")
const Setting = require("../../models/Setting")

const get = async (req, res) => {
    const settings = await Setting.findAll()

    const financials = await Financial.findAll({order : [['id', 'DESC']]})
    res.render("financials/all", {
        user : req.user,
        flash : req.flash(),
        financials,
        settings
    })
}

const post = async (req, res) => {

}

module.exports = {
    get,
    post
}