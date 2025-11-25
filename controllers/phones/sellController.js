const Phone = require("../../models/Phone")
const Setting = require("../../models/Setting")
const sms = require("../../utils/sms")
const config = require("../../configs/config.json")
const log = require("../../utils/log")


const get = async (req, res) => {
    const findPhone = await Phone.findOne({where : {code : req.params.id}})
    res.render("phones/sell", {
        user : req.user,
        flash : req.flash(),
        phone:findPhone
    })
}

const post = async (req, res) => {
    const findPhone = await Phone.findOne({where : {code : req.params.id}})

    const adminNumber1 = await Setting.findOne({where : {name : "adminNumber1"}})
    const adminNumber2 = await Setting.findOne({where : {name : "adminNumber2"}})

    if(!findPhone) {
        req.flash("danger", "درخواست مورد نظر یافت نشد.")
        return res.redirect("/phones")
    }

    await findPhone.update({
        status : "فروخته شد",
        customerName : req.body?.customerName,
        customerNumber : req.body?.customerNumber,
        sellPrice : req.body?.sellPrice,
        sellDate : req.body?.sellDate,
        sellMode : req.body?.sellMode,
        description : req.body?.description
    })

    sms.send(config.smsCodes.sell, adminNumber1, [findPhone.phoneModel, parseInt(req.body.sellPrice).toLocaleString() + " تومان", (parseInt(req.body.sellPrice) - parseInt(findPhone.buyPrice)).toLocaleString() + " تومان"])
    sms.send(config.smsCodes.sell, adminNumber2, [findPhone.phoneModel, parseInt(req.body.sellPrice).toLocaleString() + " تومان", (parseInt(req.body.sellPrice) - parseInt(findPhone.buyPrice)).toLocaleString() + " تومان"])

    res.redirect(`/phones/${req.params.id}`)
}

module.exports = {
    get,
    post
}