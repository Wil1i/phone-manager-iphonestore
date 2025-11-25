const Phone = require("../../models/Phone")
const Setting = require("../../models/Setting")
const sms = require("../../utils/sms")
const config = require("../../configs/config.json")

const get = async (req, res) => {
    res.render("phones/buy", {
        flash : req.flash(),
        user : req.user,
    })
}

const post = async (req, res) => {
    const adminNumber1 = await Setting.findOne({where : {name : "adminNumber1"}})
    const adminNumber2 = await Setting.findOne({where : {name : "adminNumber2"}})

    await Phone.create({
        buyFrom : req.body?.buyFrom,
        buyerNumber : req.body?.buyerNumber,
        buyPrice : req.body?.buyPrice,
        buyDate : req.body?.buyDate,
        isOwnershipAvailable : req.body?.isOwnershipAvailable == "on" ? true : false,
        isBoxAvailable : req.body?.isBoxAvailable == "on" ? true : false,
        phoneModel : req.body?.phoneModel,
        capacity : req.body?.capacity,
        color : req.body?.color,
        partNumber : req.body?.partNumber,
        IMEI1 : req.body?.IMEI1,
        IMEI2 : req.body?.IMEI2,
        buyerSettlement : req.body?.buyerSettlement,
        description : req.body?.description,
        status : "موجود در فروشگاه",
        code : req.body?.code,
        code2 : req.body?.code2,
        isPhoneNotRegistered : req.body?.isPhoneNotRegistered == "on" ? true : false
    })

    sms.send(config.smsCodes.buy, adminNumber1.value, [req.body.phoneModel, parseInt(req.body.buyPrice).toLocaleString() + " تومان"])
    sms.send(config.smsCodes.buy, adminNumber2.value, [req.body.phoneModel, parseInt(req.body.buyPrice).toLocaleString() + " تومان"])

    res.redirect("/phones")
}

module.exports = {
    get,
    post
}